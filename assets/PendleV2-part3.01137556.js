import{f as a,h as o,i as r,r as E,o as i,d as s,w as F,b as u,j as e}from"./index.68ff1ca1.js";const p="/imgs/blogs/pendlev2_21.png",d="/imgs/blogs/pendlev2_22.png",h="/imgs/blogs/pendlev2_23.png",C="/imgs/blogs/pendlev2_24.png",c="/imgs/blogs/pendlev2_25.png",D=u("div",{class:"md-body max-w-none"},[u("h1",{id:"pendle-v2-launch-(part-3%2F3)-%E2%80%94-%E5%B7%B2%E6%9B%B4%E6%96%B0%E7%9A%84%E4%BB%A3%E5%B8%81%E7%BB%8F%E6%B5%8E%E5%AD%A6",tabindex:"-1"},[e("Pendle V2 Launch (Part 3/3) \u2014 \u5DF2\u66F4\u65B0\u7684\u4EE3\u5E01\u7ECF\u6D4E\u5B66 "),u("a",{class:"header-anchor",href:"#pendle-v2-launch-(part-3%2F3)-%E2%80%94-%E5%B7%B2%E6%9B%B4%E6%96%B0%E7%9A%84%E4%BB%A3%E5%B8%81%E7%BB%8F%E6%B5%8E%E5%AD%A6","aria-hidden":"true"},"#")]),u("p",null,[u("img",{src:p,alt:""})]),u("h1",{id:"%E5%89%8D%E8%A8%80-preface",tabindex:"-1"},[e("\u524D\u8A00 Preface "),u("a",{class:"header-anchor",href:"#%E5%89%8D%E8%A8%80-preface","aria-hidden":"true"},"#")]),u("p",null,[u("a",{href:"https://medium.com/pendle/pendle-v2-part-1-3-foundation-6e1773a1d2f4",target:"_blank",rel:"noopener"},"Part 1"),e(" shared the new design of the Pendle AMM, with significant structural improvements in capital efficiency, LP risk, and fee accrual.")]),u("p",null,[u("a",{href:"https://medium.com/pendle/pendle-v2-part-1-3-foundation-6e1773a1d2f4",target:"_blank",rel:"noopener"},"\u7B2C 1 \u90E8\u5206"),e("\u5206\u4EAB\u4E86 Pendle AMM \u7684\u65B0\u8BBE\u8BA1\uFF0C\u5728\u8D44\u672C\u6548\u7387\u3001LP \u98CE\u9669\u548C\u8D39\u7528\u5E94\u8BA1\u65B9\u9762\u8FDB\u884C\u4E86\u91CD\u5927\u7684\u7ED3\u6784\u6539\u8FDB\u3002")]),u("p",null,[u("a",{href:"https://medium.com/pendle/pendle-v2-part-2-3-open-access-25c1783a0b4f",target:"_blank",rel:"noopener"},"Part 2"),e(" highlighted the steps taken to ensure the protocol can scale into the future, solved with EIP-5115, improved tooling, and removing gatekeepers.")]),u("p",null,[u("a",{href:"https://medium.com/pendle/pendle-v2-part-2-3-open-access-25c1783a0b4f",target:"_blank",rel:"noopener"},"\u7B2C 2 \u90E8\u5206"),e("\u91CD\u70B9\u4ECB\u7ECD\u4E86\u4E3A\u786E\u4FDD\u534F\u8BAE\u53EF\u4EE5\u6269\u5C55\u5230\u672A\u6765\u800C\u91C7\u53D6\u7684\u6B65\u9AA4\uFF0C\u901A\u8FC7 EIP-5115\u3001\u6539\u8FDB\u5DE5\u5177\u548C\u5220\u9664\u7F51\u5B88\u6765\u89E3\u51B3\u3002")]),u("p",null,[e("With these in place, we can begin exploring how to align and incentivize fee creation. We lean heavily into Andre Cronje\u2019s approach with ve(3,3) and recommend reading here: "),u("a",{href:"https://andrecronje.medium.com/ve-3-3-ouroboros-part-1-fee-distribution-5dcf131dc82e",target:"_blank",rel:"noopener"},"https://andrecronje.medium.com/ve-3-3-ouroboros-part-1-fee-distribution-5dcf131dc82e")]),u("p",null,[e("\u6709\u4E86\u8FD9\u4E9B\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u63A2\u7D22\u5982\u4F55\u8C03\u6574\u548C\u6FC0\u52B1\u8D39\u7528\u521B\u9020\u3002\u6211\u4EEC\u975E\u5E38\u503E\u5411\u4E8EAndre Cronje\u7684ve(3,3)\u65B9\u6CD5\uFF0C\u5E76\u5EFA\u8BAE\u9605\u8BFB\u8FD9\u91CC\uFF1A"),u("a",{href:"https://andrecronje.medium.com/ve-3-3-ouroboros-part-1-fee-distribution-5dcf131dc82e",target:"_blank",rel:"noopener"},"https://andrecronje.medium.com/ve-3-3-ouroboros-part-1-fee-distribution-5dcf131dc82e")]),u("p",null,"The best bits of his writing will also be shamelessly forked into this piece."),u("p",null,"\u4ED6\u5199\u4F5C\u4E2D\u6700\u597D\u7684\u90E8\u5206\u4E5F\u5C06\u65E0\u803B\u5730\u5206\u53C9\u5230\u8FD9\u7BC7\u6587\u7AE0\u4E2D\u3002"),u("h1",{id:"vependle",tabindex:"-1"},[e("vePENDLE "),u("a",{class:"header-anchor",href:"#vependle","aria-hidden":"true"},"#")]),u("p",null,[e("The goals behind ve(3,3) are clear: Align incentives to generate "),u("strong",null,"liquidity and fees"),e(".")]),u("p",null,[e("ve(3,3)\u80CC\u540E\u7684\u76EE\u6807\u5F88\u660E\u786E\uFF1A\u8C03\u6574\u6FC0\u52B1\u63AA\u65BD\u4EE5\u4EA7\u751F"),u("strong",null,"\u6D41\u52A8\u6027\u548C\u8D39\u7528"),e("\u3002")]),u("p",null,"Looking at Curve\u2019s original design, you will receive 50% of all fees as a veCRV holder, regardless of where you vote for emissions to go, so you might vote your emissions onto a pool that generates 0 fees for the protocol, but you still reap the reward of fees generated by other more active pools."),u("p",null,"\u67E5\u770BCurve\u7684\u539F\u59CB\u8BBE\u8BA1\uFF0C\u65E0\u8BBA\u60A8\u6295\u7968\u652F\u6301\u6D41\u5411\u4F55\u5904\uFF0C\u60A8\u90FD\u5C06\u4F5C\u4E3AveCRV\u6301\u6709\u8005\u83B7\u5F97\u6240\u6709\u8D39\u7528\u768450%\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5C06\u60A8\u7684\u6295\u7968\u5230\u4E3A\u534F\u8BAE\u4EA7\u751F0\u8D39\u7528\u7684\u6C60\u4E2D\uFF0C\u4F46\u60A8\u4ECD\u7136\u83B7\u5F97\u5176\u4ED6\u66F4\u6D3B\u8DC3\u7684\u6C60\u4EA7\u751F\u7684\u8D39\u7528\u7684\u5956\u52B1\u3002"),u("p",null,"The solution: vePENDLE lockers to receive swap fees only for pools they voted for."),u("p",null,"\u89E3\u51B3\u65B9\u6848\uFF1AvePENDLE\u9501\u4ED3\u8005\u53EA\u4E3A\u4ED6\u4EEC\u6295\u7968\u7684\u6C60\u6536\u53D6\u4EA4\u6613\u624B\u7EED\u8D39\u3002"),u("p",null,"This aligns where vePENDLE lockers vote, and ideally have them vote for the pools that generate the highest fees."),u("p",null,"\u8FD9\u4E0E vePENDLE \u9501\u4ED3\u8005\u7684\u6295\u7968\u4F4D\u7F6E\u4FDD\u6301\u4E00\u81F4\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u8BA9\u4ED6\u4EEC\u6295\u7968\u652F\u6301\u4EA7\u751F\u6700\u9AD8\u8D39\u7528\u7684\u6C60\u3002"),u("p",null,"The benefits:"),u("p",null,"\u4F18\u70B9\uFF1A"),u("p",null,[u("img",{src:d,alt:""})]),u("ul",null,[u("li",null,"\u5B83\u6FC0\u52B1\u4E86\u534F\u8BAE\u7684\u8D39\u7528(\u56E0\u6B64\u4E3Ave(3,3) \u9501\u4ED3\u8005\u652F\u4ED8\u66F4\u9AD8\u7684\u8D39\u7528)"),u("li",null,"\u6392\u653E\u5C06\u4FC3\u8FDB\u6700\u9AD8\u6536\u8D39\u6C60\uFF0C\u8FD9\u5C06\u589E\u52A0\u8FD9\u4E9B\u6C60\u7684\u6D41\u52A8\u6027\uFF0C\u4EE5\u5141\u8BB8\u66F4\u597D\u7684\u5229\u7387"),u("li",null,"\u5B83\u5C06\u6392\u653E\u91CF\u4E0E\u534F\u8BAE\u6FC0\u52B1\u76F8\u7ED3\u5408\uFF0C\u5141\u8BB8\u53C2\u4E0E\u8005\u81EA\u6211\u4F18\u5316\u7CFB\u7EDF\u3002")]),u("p",null,[e("Source: "),u("a",{href:"https://andrecronje.medium.com/ve-3-3-ouroboros-part-1-fee-distribution-5dcf131dc82e",target:"_blank",rel:"noopener"},"https://andrecronje.medium.com/ve-3-3-ouroboros-part-1-fee-distribution-5dcf131dc82e")]),u("p",null,"As Pendle is an AMM, and fees are generated by trading, profit-oriented lockers will vote emissions on pools with the highest trade volume, this will incentivize more liquidity for that pool, which improves trade quotes, which increases trade volume, and thus earns more fees."),u("p",null,"\u7531\u4E8EPendle\u662FAMM\uFF0C\u8D39\u7528\u662F\u7531\u4EA4\u6613\u4EA7\u751F\u7684\uFF0C\u4EE5\u5229\u6DA6\u4E3A\u5BFC\u5411\u7684\u9501\u4ED3\u8005\u5C06\u5BF9\u4EA4\u6613\u91CF\u6700\u9AD8\u7684\u77FF\u6C60\u8FDB\u884C\u6295\u7968\uFF0C\u8FD9\u5C06\u6FC0\u52B1\u8BE5\u6C60\u7684\u66F4\u591A\u6D41\u52A8\u6027\uFF0C\u4ECE\u800C\u6539\u5584\u4EA4\u6613\u62A5\u4EF7\uFF0C\u4ECE\u800C\u589E\u52A0\u4EA4\u6613\u91CF\uFF0C\u4ECE\u800C\u8D5A\u53D6\u66F4\u591A\u8D39\u7528\u3002"),u("p",null,"So, the Pendulum swings."),u("p",null,"\u6240\u4EE5\uFF0C\u949F\u6446\u6446\u52A8\u3002"),u("h1",{id:"%E7%BD%91%E7%BB%9C%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E4%BF%A1%E4%BB%A4-network-ownership-and-signalling",tabindex:"-1"},[e("\u7F51\u7EDC\u6240\u6709\u6743\u548C\u4FE1\u4EE4 Network Ownership and Signalling "),u("a",{class:"header-anchor",href:"#%E7%BD%91%E7%BB%9C%E6%89%80%E6%9C%89%E6%9D%83%E5%92%8C%E4%BF%A1%E4%BB%A4-network-ownership-and-signalling","aria-hidden":"true"},"#")]),u("p",null,"Fees are distributed in stables, uncorrelated to PENDLE. This means that by owning a % of the supply, you are taking a bet on the future fee growth of the protocol."),u("p",null,"\u8D39\u7528\u5206\u5E03\u5728\u9A6C\u53A9\u4E2D\uFF0C\u4E0EPendle\u65E0\u5173\u3002\u8FD9\u610F\u5473\u7740\u901A\u8FC7\u62E5\u6709\u4E00\u5B9A\u6BD4\u4F8B\u7684\u4F9B\u5E94\u91CF\uFF0C\u60A8\u6B63\u5728\u62BC\u6CE8\u534F\u8BAE\u7684\u672A\u6765\u8D39\u7528\u589E\u957F\u3002"),u("p",null,"There\u2019s a trove of sidelined capital sitting amongst existing LPs on protocols such as Convex, with the potential for them to leverage composability and stack yield on Pendle. Beyond additional smart contract risk, such market participants have incentives to LP on Pendle \u2014 IL is negligible and they get additional sources of yield."),u("p",null,"\u6709\u5927\u91CF\u8FB9\u7F18\u8D44\u672C\u5728Convex\u7B49\u534F\u8BAE\u7684\u73B0\u6709LP\u4E2D\uFF0C\u4ED6\u4EEC\u6709\u53EF\u80FD\u5229\u7528Pendle\u7684\u53EF\u7EC4\u5408\u6027\u548C\u53E0\u52A0\u6536\u76CA\u3002\u9664\u4E86\u989D\u5916\u7684\u667A\u80FD\u5408\u7EA6\u98CE\u9669\u4E4B\u5916\uFF0C\u8FD9\u4E9B\u5E02\u573A\u53C2\u4E0E\u8005\u8FD8\u6709\u52A8\u529B\u5728Pendle\u4E0A\u8FDB\u884CLP \u2014 IL\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BA1\uFF0C\u4ED6\u4EEC\u83B7\u5F97\u4E86\u989D\u5916\u7684\u6536\u76CA\u6765\u6E90\u3002"),u("p",null,[e("Finally, "),u("strong",null,"Signalling"),e(".")]),u("p",null,[e("\u6700\u540E\uFF0C"),u("strong",null,"\u4FE1\u4EE4\u3002")]),u("p",null,"Different variations have been tried for locking but we believe the original method grants maximum flexibility for both low and high+immediate signaling."),u("p",null,"\u5DF2\u7ECF\u5C1D\u8BD5\u4E86\u4E0D\u540C\u7684\u9501\u5B9A\u53D8\u4F53\uFF0C\u4F46\u6211\u4EEC\u76F8\u4FE1\u539F\u59CB\u65B9\u6CD5\u4E3A\u9AD8\u4F4E\u4FE1\u53F7+\u5373\u65F6\u4FE1\u53F7\u63D0\u4F9B\u4E86\u6700\u5927\u7684\u7075\u6D3B\u6027\u3002"),u("p",null,"The minimum time frame for locking vePENDLE is 1 week and the maximum is 2 years."),u("p",null,"\u9501\u5B9AvePENDLE\u7684\u6700\u77ED\u65F6\u95F4\u4E3A1\u5468\uFF0C\u6700\u957F\u4E3A2\u5E74\u3002"),u("p",null,"This allows signalling and fee claims to occur at a minimal time and $ cost, while if there is competition for an attractive pool, longer locks can still have an instant multiplier effect."),u("p",null,"\u8FD9\u5141\u8BB8\u4EE5\u6700\u5C0F\u7684\u65F6\u95F4\u548C\u6210\u672C\u8FDB\u884C\u4FE1\u53F7\u548C\u8D39\u7528\u7D22\u8D54\uFF0C\u800C\u5982\u679C\u5B58\u5728\u5BF9\u6709\u5438\u5F15\u529B\u7684\u6C60\u7684\u7ADE\u4E89\uFF0C\u66F4\u957F\u7684\u9501\u4ECD\u7136\u53EF\u4EE5\u4EA7\u751F\u5373\u65F6\u4E58\u6570\u6548\u5E94\u3002"),u("h1",{id:"vependle%E6%91%98%E8%A6%81-vependle-summary%3A",tabindex:"-1"},[e("vePENDLE\u6458\u8981 vePENDLE Summary: "),u("a",{class:"header-anchor",href:"#vependle%E6%91%98%E8%A6%81-vependle-summary%3A","aria-hidden":"true"},"#")]),u("ol",null,[u("li",null,"vePENDLE\u6388\u4E88\u9501\u4ED3\u8005\u719F\u6089\u7684\u5956\u52B1\u63D0\u5347\u548C\u6FC0\u52B1\u673A\u5236\u7684\u597D\u5904\uFF0C\u800C\u4EA4\u6613\u624B\u7EED\u8D39\u53EA\u80FD\u4ECE\u4ED6\u4EEC\u6295\u7968\u7684\u6C60\u4E2D\u83B7\u5F97\u3002vePENDLE grants lockers familiar benefits of Reward Boosting and Incentive Channelling, while Swap Fees will only be received from pools they voted for."),u("li",null,"\u9501\u5B9A\u6301\u7EED\u65F6\u95F4\u4ECE1\u5468\u52302\u5E74\u4E0D\u7B49\uFF0C\u8FD9\u4F7F\u9501\u4ED3\u8005\u53EF\u4EE5\u7075\u6D3B\u5730\u8FDB\u884C\u4F18\u5316\u3002The lock duration ranges from 1 week to 2 years, which gives the locker flexibility on what to optimize for."),u("li",null,"\u968F\u7740\u534F\u8BAE\u7684\u6210\u719F\uFF0C\u6392\u653E\u548C\u6FC0\u52B1\u63AA\u65BD\u7684\u4E00\u81F4\u6027\u5C06\u5BFC\u81F4\u53C2\u4E0E\u8005\u7684\u81EA\u6211\u4F18\u5316\u3002As the protocol matures, the alignment of emissions and incentives will result in self-optimization by participants")]),u("p",null,[e("*"),u("em",null,"check out our"),e(),u("a",{href:"https://docs.pendle.finance/",target:"_blank",rel:"noopener"},[u("em",null,"docs")]),e(),u("em",null,"for more details")]),u("p",null,[e("*"),u("em",null,"\u67E5\u770B\u6211\u4EEC\u7684"),u("a",{href:"https://docs.pendle.finance/",target:"_blank",rel:"noopener"},[u("em",null,"\u6587\u6863")]),u("em",null,"\u4E86\u89E3\u66F4\u591A\u8BE6\u60C5")]),u("h1",{id:"%E5%90%AF%E5%8A%A8-launch",tabindex:"-1"},[e("\u542F\u52A8 Launch "),u("a",{class:"header-anchor",href:"#%E5%90%AF%E5%8A%A8-launch","aria-hidden":"true"},"#")]),u("p",null,"With that, it\u2019s time!"),u("p",null,"\u6709\u4E86\u8FD9\u4E2A\uFF0C\u662F\u65F6\u5019\u4E86\uFF01"),u("p",null,[e("Token locking and pools are now "),u("strong",null,"live"),e(" at "),u("a",{href:"https://app.pendle.finance/",target:"_blank",rel:"noopener"},"https://app.pendle.finance/"),e("!")]),u("p",null,[e("\u4EE4\u724C\u9501\u5B9A\u548C\u6C60\u73B0\u5DF2"),u("strong",null,[u("a",{href:"https://app.pendle.finance/",target:"_blank",rel:"noopener"},"https://app.pendle.finance/"),e(" \u4E0A\u7EBF")]),e("\uFF01")]),u("p",null,"We are proud to have support from the following protocols:"),u("p",null,"\u6211\u4EEC\u5F88\u81EA\u8C6A\u80FD\u5F97\u5230\u4EE5\u4E0B\u534F\u8BAE\u7684\u652F\u6301\uFF1A"),u("p",null,[u("img",{src:h,alt:""})]),u("p",null,[u("em",null,"Pick up stETH, FRAX-USDC, and LOOKS at a discount now!")]),u("p",null,[u("em",null,"\u73B0\u5728\u5C31\u6298\u6263\u9886\u53D6stETH\uFF0CFRAX-USDC\uFF0C\u548CLOOKS\uFF01")]),u("p",null,"Or provide liquidity for extra yield!"),u("p",null,"\u6216\u63D0\u4F9B\u6D41\u52A8\u6027\u4EE5\u83B7\u5F97\u989D\u5916\u6536\u76CA\uFF01"),u("p",null,[e("Use any major asset to enter and exit thanks to integration with "),u("a",{href:"https://docs.kyberswap.com/Aggregator/aggregator-api",target:"_blank",rel:"noopener"},"KyberSwap Aggregator API"),e(", starting with ETH, WBTC, USDC, USDT, and DAI.")]),u("p",null,[e("\u7531\u4E8E\u4E0E"),u("a",{href:"https://docs.kyberswap.com/Aggregator/aggregator-api",target:"_blank",rel:"noopener"},"KyberSwap Aggregator API"),e(" \u7684\u96C6\u6210\uFF0C\u4F7F\u7528\u4EFB\u4F55\u4E3B\u8981\u8D44\u4EA7\u8FDB\u5165\u548C\u9000\u51FA\uFF0C\u4ECEETH\u3001WBTC\u3001USDC\u3001USDT\u548CDAI\u5F00\u59CB\u3002")]),u("p",null,[u("img",{src:C,alt:""})]),u("p",null,"V1 pools will continue functioning as per normal, while rewards will be sunset and directed to V2 pools."),u("p",null,"V1\u6C60\u5C06\u7EE7\u7EED\u6B63\u5E38\u8FD0\u884C\uFF0C\u800C\u5956\u52B1\u5C06\u65E5\u843D\u5E76\u5B9A\u5411\u5230V2\u6C60\u3002"),u("p",null,"Single-sided staking will continue for another 2 months as the vePENDLE system is rolled out."),u("p",null,"\u968F\u7740vePENDLE\u7CFB\u7EDF\u7684\u63A8\u51FA\uFF0C\u5355\u9762\u8D28\u62BC\u5C06\u518D\u6301\u7EED2\u4E2A\u6708\u3002"),u("p",null,"With the final piece of vePendle in place, Pendle V2 is finally ready!"),u("p",null,"\u968F\u7740\u6700\u540E\u4E00\u5757vePendle\u5C31\u4F4D\uFF0CPendle V2\u7EC8\u4E8E\u51C6\u5907\u597D\u4E86\uFF01"),u("p",null,"We look forward to working with other protocols to expand DeFi and drive the adoption of yield trading."),u("p",null,"\u6211\u4EEC\u671F\u5F85\u4E0E\u5176\u4ED6\u534F\u8BAE\u5408\u4F5C\uFF0C\u4EE5\u6269\u5C55DeFi\u5E76\u63A8\u52A8\u6536\u76CA\u4EA4\u6613\u7684\u91C7\u7528\u3002"),u("p",null,[u("img",{src:c,alt:""})]),u("p",null,[u("a",{href:"https://www.pendle.finance/",target:"_blank",rel:"noopener"},"Website"),e(" | "),u("a",{href:"https://app.pendle.finance/market",target:"_blank",rel:"noopener"},"App"),e(" | "),u("a",{href:"https://twitter.com/pendle_fi",target:"_blank",rel:"noopener"},"Twitter"),e(" | "),u("a",{href:"https://pendle.finance/discord",target:"_blank",rel:"noopener"},"Discord"),e(" |"),u("a",{href:"https://awesomenear.com/aurigami",target:"_blank",rel:"noopener"}),u("a",{href:"http://t.me/pendlefinance",target:"_blank",rel:"noopener"},"Telegram"),e(" | "),u("a",{href:"https://github.com/pendle-finance/pendle-core-v2/tree/main/audits",target:"_blank",rel:"noopener"},"Audits"),e(" | "),u("a",{href:"https://github.com/pendle-finance/pendle-v2-resources/tree/main/whitepapers",target:"_blank",rel:"noopener"},"Whitepapers"),e(" | "),u("a",{href:"https://docs.pendle.finance/Home",target:"_blank",rel:"noopener"},"Docs")]),u("p",null,[u("a",{href:"https://www.pendle.finance/",target:"_blank",rel:"noopener"},"\u7F51\u7AD9"),e("|"),u("a",{href:"https://app.pendle.finance/market",target:"_blank",rel:"noopener"},"\u5E94\u7528"),e("|"),u("a",{href:"https://twitter.com/pendle_fi",target:"_blank",rel:"noopener"},"\u63A8\u7279"),e("|"),u("a",{href:"https://pendle.finance/discord",target:"_blank",rel:"noopener"},"\u4E0D\u548C\u8C10"),e("|"),u("a",{href:"http://t.me/pendlefinance",target:"_blank",rel:"noopener"},"\u7535\u62A5"),e("|"),u("a",{href:"https://github.com/pendle-finance/pendle-core-v2/tree/main/audits",target:"_blank",rel:"noopener"},"\u5BA1\u8BA1"),e("|"),u("a",{href:"https://github.com/pendle-finance/pendle-v2-resources/tree/main/whitepapers",target:"_blank",rel:"noopener"},"\u767D\u76AE\u4E66"),e("|"),u("a",{href:"https://docs.pendle.finance/Home",target:"_blank",rel:"noopener"},"\u6587\u6863")])],-1),B={locale:"zh-CN",layout:"default",meta:[]},b="",w=a({__name:"PendleV2-part3",setup(A,{expose:t}){o({meta:[]}),t({frontmatter:{locale:"zh-CN",layout:"default",meta:[]},excerpt:void 0});const n=r();return n.currentRoute.value.meta={...n.currentRoute.value.meta,layout:"default"},(m,g)=>{const l=E("page-content");return i(),s(l,{frontmatter:B},{default:F(()=>[D]),_:1})}}});export{w as default,b as excerpt,B as frontmatter};
