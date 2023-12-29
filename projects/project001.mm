flowchart LR
          Platform(平台) -->|发起提案| govern{平台治理}
          Platform --> Achievement((声誉成就))
          govern -->|创建社区组织| Team(社区组织)
          govern -->|认可项目成就| Achievement
          Platform -->|创建平台金库| PlatformTreasury[(平台金库)]
          govern -->|全员持股ESOP| User
          govern -->|管理| PlatformTreasury
          User(参与者) -->|认证关联主钱包| Platform
          User -->|从属| Team
          Team -->|管理| TeamTreasury[(社区金库)]
          governTeam -->|发起项目| Project(项目)
          Project -->|项目专项资金| TeamTreasury
          Team -->|发起提案| governTeam{社区治理}
          Project -->|发起提案| governProject{项目治理}
          User -->|参与项目| Project
          governProject -->|更新项目进度| TeamTreasury
          governProject -->|释放项目结算代币| User
          governProject -->|释放项目成就| User
          TeamTreasury -->|释放项目结算代币| User
          User -->|成就点数兑换| Achievement
          Achievement -->|发放稀有NFT徽章| User
          User -->|提现项目结算代币| TeamTreasury
          StockHolder(股东) -->|投资| PlatformTreasury
          User -->|出售个人股份| PlatformTreasury

          subgraph 平台治理
            Platform
            PlatformTreasury
            User
            govern
            Achievement
            StockHolder
          end
          subgraph 社区治理
            Team
            TeamTreasury
            governTeam
          end
          subgraph 项目管理
            Project
            governProject
          end

          style Platform fill:#bbf,stroke:#333,stroke-width:2px
          style PlatformTreasury fill:#f96,stroke:#333,stroke-width:2px
          style TeamTreasury fill:#f96,stroke:#333,stroke-width:2px
          style govern fill:#FFF4DD,stroke:#EEDDBB,stroke-width:2px
          style governTeam fill:#FFF4DD,stroke:#EEDDBB,stroke-width:2px
          style governProject fill:#FFF4DD,stroke:#EEDDBB,stroke-width:2px
