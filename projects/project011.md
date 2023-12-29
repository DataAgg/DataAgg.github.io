## 一、项目简介
### 1. 中国青少年儿童健康安全食品管理委员会网站

<img src="/imgs/project/p011-002.png" alt="中国青少年儿童健康安全食品管理委员会-总部" class="wimg_600"/>

## 二、功能模块
### 1. 云南省指挥中心网站

+ **关键业务功能模块**
	+ 云南省指挥中心网站
	+ 资质审核备案信息公示，包含各级运营公司、供应商、入围产品、服务提供商及检测机构等。
	+ 产品、订单信息追溯数据库
	+ 学校生鲜配送产业大数据

<img src="/imgs/project/p011-001.png" alt="云南省指挥中心网站" class="wimg_500" />

### 2. 县区运营公司网站

+ **关键业务功能模块**
	+ 县区运营公司网站
	+ 业务优势展示
	+ 县区级生鲜配送商城

<img src="/imgs/project/p011-003.png" alt="县区运营公司网站" class="wimg_400" />

### 3. 数据安全防护

+ **企业核心数据隐私保护**
	+ 企业内部业务关键数据进行公钥/私钥加密处理，系统及管理员在没有企业私钥的情况下是无法解读业务数据
	+ 企业操作员工单独在客户端生成企业管理私钥，使用MPC方式进行云存储与数据签名
	+ 企业独有的统计分析报表与详细业务数据导出

<img src="/imgs/project/p003-004.png" alt="企业端数据加密" class="wimg_600" />

+ **多种支付结算方式支持**
	+ 企业间结算按照合同调整结算周期与支付方式
	+ 普通消费者端支持主流的移动支付方式
+ **企业大客户**
	+ 企业端管理界面支持使用主流加密算法对业务数据传输和后端数据库存储的业务数据进行加密处理，保证企业的业务数据安全。
	+ 企业内部员工及家属认证管理
	+ 企业的客户管理及促销优惠
+ **普通消费者**
	+ 多种主流终端支持，包含微信小程序、H5网页、公众号信息展示等
	+ 以家庭为统一主体进行关联，作为整体进行营销推广，充分提升客户终身价值

### 4. 面向监管审计的统计分析

<img src="/imgs/project/p003-003.png" alt="面向监管审计的统计分析" class="wimg_600" />

+ **相关监管部门**
	+ 生鲜配送整体业务中相关的监管部门，包含行业监管部门、行业协会、企业内部财务部门等
	+ 针对不同的监管部门提供相应的统计分析报表，上报数据不涉及配送企业的商业机密
	+ 生成相关的审计报告数据部分
+ **上下游服务提供商**
	+ 上下游服务提供商资质备案及对外信息公示
	+ 面向服务提供商的统计分析报表，服务提供商内部人员通过私钥查看，其他人无法获取


## 三、技术方案
### 1. 技术架构

<img src="/imgs/project/p003-050.png" alt="技术架构" class="wimg_1300" />

+ **微服务组件**
	+ 服务端编程语言：Java
	+ 配置中心: Spring-cloud config server和client
	+ 服务注册发现: Spring-cloud Netflix Eureka
	+ 熔断器: Spring-cloud Netflix Hystrix客户端和Hystrix Dashboard
	+ 客户端负载均衡：Spring-cloud Netflix Ribbon
	+ 智能路由: Spring-cloud Netflix Zuul
	+ 监控系统: Spring-cloud Netflix Turbine
	+ 权限检查: Spring-cloud Security
	+ REST与RPC: Spring-cloud Netflix Feign及gRPC
+ **数据持久化**
	+ 数据持久化访问: DaDAO、DaCache和DaChain
	+ 消息队列代理: Spring-cloud Bus和RabbitMQ
	+ 数据库: 业务数据Mysql、缓存数据Redis和业务文档IPFS私有网络
	+ 区块链主链：EVM L2链（基于ETH开源代码深度定制）
+ **App端及web端**
	+ 跨平台开发框架：Flutter框架及Dart语言
	+ App原生代码：Kotlin+Swift及硬件集成DaHAL
	+ UI组件：Material Design、公用业务组件DaComponent及图表组件ECharts
	+ 开发工具：VSCode或Intellij
+ **开发部署工具**
	+ 构建工具: Gradle及DaBuilder
	+ 容器技术: Docker

### 2. 业务组件模块

<img src="/imgs/project/p003-051.png" alt="业务组件模块" class="wimg_1024" />

### 3. 服务部署

<img src="/imgs/project/p003-052.png" alt="服务部署" class="wimg_1024" />


## 四、开发周期与成本预算
+ 此计划只是按照目前已了解的功能需求进行评估计划的，如果实施过程中增加大型功能模块开发或改造，整体时间进度需要及时调整
+ 项目开发将投入：
	+ 前端/移动端开发团队5人
	+ java后端开发团队5人
	+ 测试团队3人，运维工程师2人
	+ UI/UX设计师 2人
	+ 市场运营1人，撰稿人1人，培训老师2人

+ 项目开发关键时间点
	+ 2023-05-01 项目开始正式启动
	+ 2023-05-20 网站1期开发完毕，内部展示
	+ 2023-06-01 网站上线后的1个月关键运维期，全员参与，保障系统正常运转
	+ 2023-06-10 第1期县区运营公司培训完毕，县区运营公司网站上线
	+ 2023-07-01 网站2期开发完毕，正式上线生鲜配送商城


