import{d as a,f as m,o as n,g as l,w as r,h as C,r as d,a as e}from"./index.6ef0fcc8.js";const F=e("div",{class:"md-body max-w-none"},[e("pre",null,[e("code",{class:"language-mermaid"},`flowchart TB
    Packing[\\Packing/] --> PreCommit1    
    PreCommit1 --> PreCommit2    
    PreCommit1 <--> SealPreCommit1Failed
    PreCommit2 --> PreCommitting
    PreCommit2 --> SealPreCommit2Failed    
    SealPreCommit2Failed --> PreCommit1
    SealPreCommit2Failed --> PreCommit2
    PreCommitting --> WaitSeed
    PreCommitting --> SealPreCommit1Failed
    PreCommitting <--> PreCommitFailed    
    WaitSeed --> Committing
    WaitSeed --> PreCommitFailed    
    Committing --> CommitWait
    Committing <--> ComputeProofFailed
    Committing <--> CommitFailed    
    CommitFailed --> WaitSeed
    CommitFailed --> SealPreCommit2Failed
    CommitWait --> FinalizeSector 
    CommitWait --> CommitFailed 
    FinalizeSector --> Proving[/Proving\\]
    FinalizeSector <--> FinalizeFailed
    
    style Packing fill:#FF9F00;
    style Proving fill:#19A719;
    style SealPreCommit1Failed fill:#FFC009;
    style SealPreCommit2Failed fill:#FFC009;
    style PreCommitFailed fill:#FFC009;
    style ComputeProofFailed fill:#FFC009;
    style CommitFailed fill:#FFC009;
    style FinalizeFailed fill:#FFC009;
    

`)])],-1),c={locale:"zh-CN",layout:"default",meta:[]},g="",p=a({__name:"filecoin",setup(s,{expose:i}){m({meta:[]}),i({frontmatter:{locale:"zh-CN",layout:"default",meta:[]},excerpt:void 0});const t=C();return t.currentRoute.value.meta={...t.currentRoute.value.meta,layout:"default",locale:"zh-CN"},(u,f)=>{const o=d("page-content");return n(),l(o,{frontmatter:c},{default:r(()=>[F]),_:1})}}});export{p as default,g as excerpt,c as frontmatter};
