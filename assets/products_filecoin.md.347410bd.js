import{_ as s,c as a,o as n,d as e}from"./app.143f2636.js";const d='{"title":"","description":"","frontmatter":{},"relativePath":"products/filecoin.md","lastUpdated":1640438759771}',p={},t=e(`<div class="language-mermaid line-numbers-mode"><pre><code><span class="token keyword">flowchart</span> TB
    Packing<span class="token text string">[\\Packing/]</span> <span class="token arrow operator">--&gt;</span> PreCommit1    
    PreCommit1 <span class="token arrow operator">--&gt;</span> PreCommit2    
    PreCommit1 <span class="token arrow operator">&lt;--&gt;</span> SealPreCommit1Failed
    PreCommit2 <span class="token arrow operator">--&gt;</span> PreCommitting
    PreCommit2 <span class="token arrow operator">--&gt;</span> SealPreCommit2Failed    
    SealPreCommit2Failed <span class="token arrow operator">--&gt;</span> PreCommit1
    SealPreCommit2Failed <span class="token arrow operator">--&gt;</span> PreCommit2
    PreCommitting <span class="token arrow operator">--&gt;</span> WaitSeed
    PreCommitting <span class="token arrow operator">--&gt;</span> SealPreCommit1Failed
    PreCommitting <span class="token arrow operator">&lt;--&gt;</span> PreCommitFailed    
    WaitSeed <span class="token arrow operator">--&gt;</span> Committing
    WaitSeed <span class="token arrow operator">--&gt;</span> PreCommitFailed    
    Committing <span class="token arrow operator">--&gt;</span> CommitWait
    Committing <span class="token arrow operator">&lt;--&gt;</span> ComputeProofFailed
    Committing <span class="token arrow operator">&lt;--&gt;</span> CommitFailed    
    CommitFailed <span class="token arrow operator">--&gt;</span> WaitSeed
    CommitFailed <span class="token arrow operator">--&gt;</span> SealPreCommit2Failed
    CommitWait <span class="token arrow operator">--&gt;</span> FinalizeSector 
    CommitWait <span class="token arrow operator">--&gt;</span> CommitFailed 
    FinalizeSector <span class="token arrow operator">--&gt;</span> Proving<span class="token text string">[/Proving\\]</span>
    FinalizeSector <span class="token arrow operator">&lt;--&gt;</span> FinalizeFailed
    
    <span class="token keyword">style</span> Packing <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FF9F00</span><span class="token punctuation">;</span>
    <span class="token keyword">style</span> Proving <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#19A719</span><span class="token punctuation">;</span>
    <span class="token keyword">style</span> SealPreCommit1Failed <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFC009</span><span class="token punctuation">;</span>
    <span class="token keyword">style</span> SealPreCommit2Failed <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFC009</span><span class="token punctuation">;</span>
    <span class="token keyword">style</span> PreCommitFailed <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFC009</span><span class="token punctuation">;</span>
    <span class="token keyword">style</span> ComputeProofFailed <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFC009</span><span class="token punctuation">;</span>
    <span class="token keyword">style</span> CommitFailed <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFC009</span><span class="token punctuation">;</span>
    <span class="token keyword">style</span> FinalizeFailed <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#FFC009</span><span class="token punctuation">;</span>
    

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,1),r=[t];function o(l,i,c,m,k,b){return n(),a("div",null,r)}var C=s(p,[["render",o]]);export{d as __pageData,C as default};
