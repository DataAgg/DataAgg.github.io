import{n as Te,s as Ce,j as Fe,l as Me,k as De,v as Ne,V as Pe,r as oe,w as Ye,y as ke}from"./index.OaHEwokh.js";import{G as Ue,l as Be}from"./layout.U21IduGK.js";import{l as Qe}from"./line.Pkp5goKU.js";import"./runtime-core.esm-bundler.dIYQjm2k.js";import"./array.Nw74a44z.js";import"./path.aUcfwwLI.js";var ce=function(){var e=function(e,t,i,n){for(i=i||{},n=e.length;n--;i[e[n]]=t);return i},t=[1,3],i=[1,4],n=[1,5],r=[1,6],s=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],a=[1,18],o=[2,7],l=[1,22],c=[1,23],h=[1,24],u=[1,25],y=[1,26],d=[1,27],p=[1,20],_=[1,28],E=[1,29],g=[62,63],f=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],R=[1,47],m=[1,48],I=[1,49],b=[1,50],k=[1,51],S=[1,52],T=[1,53],N=[53,54],x=[1,64],A=[1,60],q=[1,61],v=[1,62],w=[1,63],O=[1,65],$=[1,69],C=[1,70],L=[1,67],M=[1,68],F=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],D={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:function(e,t,i,n,r,s,a){var o=s.length-1;switch(r){case 4:this.$=s[o].trim(),n.setAccTitle(this.$);break;case 5:case 6:this.$=s[o].trim(),n.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:n.addRequirement(s[o-3],s[o-4]);break;case 14:n.setNewReqId(s[o-2]);break;case 15:n.setNewReqText(s[o-2]);break;case 16:n.setNewReqRisk(s[o-2]);break;case 17:n.setNewReqVerifyMethod(s[o-2]);break;case 20:this.$=n.RequirementType.REQUIREMENT;break;case 21:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=n.RiskLevel.LOW_RISK;break;case 27:this.$=n.RiskLevel.MED_RISK;break;case 28:this.$=n.RiskLevel.HIGH_RISK;break;case 29:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=n.VerifyType.VERIFY_TEST;break;case 33:n.addElement(s[o-3]);break;case 34:n.setNewElementType(s[o-2]);break;case 35:n.setNewElementDocRef(s[o-2]);break;case 38:n.addRelationship(s[o-2],s[o],s[o-4]);break;case 39:n.addRelationship(s[o-2],s[o-4],s[o]);break;case 40:this.$=n.Relationships.CONTAINS;break;case 41:this.$=n.Relationships.COPIES;break;case 42:this.$=n.Relationships.DERIVES;break;case 43:this.$=n.Relationships.SATISFIES;break;case 44:this.$=n.Relationships.VERIFIES;break;case 45:this.$=n.Relationships.REFINES;break;case 46:this.$=n.Relationships.TRACES}},table:[{3:1,4:2,6:t,9:i,11:n,13:r},{1:[3]},{3:8,4:2,5:[1,7],6:t,9:i,11:n,13:r},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(s,[2,6]),{3:12,4:2,6:t,9:i,11:n,13:r},{1:[2,2]},{4:17,5:a,7:13,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:h,34:u,35:y,36:d,44:p,62:_,63:E},e(s,[2,4]),e(s,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:a,7:31,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:32,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:33,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:34,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:35,8:o,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:l,32:c,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(g,[2,20]),e(g,[2,21]),e(g,[2,22]),e(g,[2,23]),e(g,[2,24]),e(g,[2,25]),e(f,[2,49]),e(f,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:R,56:m,57:I,58:b,59:k,60:S,61:T},{52:54,55:R,56:m,57:I,58:b,59:k,60:S,61:T},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(N,[2,40]),e(N,[2,41]),e(N,[2,42]),e(N,[2,43]),e(N,[2,44]),e(N,[2,45]),e(N,[2,46]),{54:[1,58]},{5:x,20:59,21:A,24:q,26:v,28:w,30:O},{5:$,30:C,46:66,47:L,49:M},{23:71,62:_,63:E},{23:72,62:_,63:E},e(F,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:x,20:77,21:A,24:q,26:v,28:w,30:O},e(F,[2,19]),e(F,[2,33]),{22:[1,78]},{22:[1,79]},{5:$,30:C,46:80,47:L,49:M},e(F,[2,37]),e(F,[2,38]),e(F,[2,39]),{23:81,62:_,63:E},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(F,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(F,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:x,20:106,21:A,24:q,26:v,28:w,30:O},{5:x,20:107,21:A,24:q,26:v,28:w,30:O},{5:x,20:108,21:A,24:q,26:v,28:w,30:O},{5:x,20:109,21:A,24:q,26:v,28:w,30:O},{5:$,30:C,46:110,47:L,49:M},{5:$,30:C,46:111,47:L,49:M},e(F,[2,14]),e(F,[2,15]),e(F,[2,16]),e(F,[2,17]),e(F,[2,34]),e(F,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:function(e,t){if(!t.recoverable){var i=new Error(e);throw i.hash=t,i}this.trace(e)},parse:function(e){var t=this,i=[0],n=[],r=[null],s=[],a=this.table,o="",l=0,c=0,h=s.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);u.setInput(e,y.yy),y.yy.lexer=u,y.yy.parser=this,typeof u.yylloc>"u"&&(u.yylloc={});var p=u.yylloc;s.push(p);var _,E=u.options&&u.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,f,R,m,I,b,k,S,T={};;){if(f=i[i.length-1],this.defaultActions[f]?R=this.defaultActions[f]:((null===g||typeof g>"u")&&(_=void 0,"number"!=typeof(_=n.pop()||u.lex()||1)&&(_ instanceof Array&&(_=(n=_).pop()),_=t.symbols_[_]||_),g=_),R=a[f]&&a[f][g]),typeof R>"u"||!R.length||!R[0]){var N="";for(I in S=[],a[f])this.terminals_[I]&&I>2&&S.push("'"+this.terminals_[I]+"'");N=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(N,{text:u.match,token:this.terminals_[g]||g,line:u.yylineno,loc:p,expected:S})}if(R[0]instanceof Array&&R.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+g);switch(R[0]){case 1:i.push(g),r.push(u.yytext),s.push(u.yylloc),i.push(R[1]),g=null,c=u.yyleng,o=u.yytext,l=u.yylineno,p=u.yylloc;break;case 2:if(b=this.productions_[R[1]][1],T.$=r[r.length-b],T._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},E&&(T._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),typeof(m=this.performAction.apply(T,[o,c,l,y.yy,R[1],r,s].concat(h)))<"u")return m;b&&(i=i.slice(0,-1*b*2),r=r.slice(0,-1*b),s=s.slice(0,-1*b)),i.push(this.productions_[R[1]][0]),r.push(T.$),s.push(T._$),k=a[i[i.length-2]][i[i.length-1]],i.push(k);break;case 3:return!0}}return!0}},P={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!t||i[0].length>t[0].length)){if(t=i,n=s,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,r[s])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,r[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,t,i,n){switch(i){case 0:return"title";case 1:return this.begin("acc_title"),9;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),11;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 48:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:case 10:case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 49:return"qString";case 50:return t.yytext=t.yytext.trim(),62}},rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};function U(){this.yy={}}return D.lexer=P,U.prototype=D,D.Parser=U,new U}();ce.parser=ce;const He=ce;let ue=[],b={},K={},q={},G={};const We={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},Ke={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},Ge={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},je={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},ze=(e,t)=>(void 0===K[e]&&(K[e]={name:e,type:t,id:b.id,text:b.text,risk:b.risk,verifyMethod:b.verifyMethod}),b={},K[e]),Xe=()=>K,Je=e=>{void 0!==b&&(b.id=e)},Ze=e=>{void 0!==b&&(b.text=e)},et=e=>{void 0!==b&&(b.risk=e)},tt=e=>{void 0!==b&&(b.verifyMethod=e)},it=e=>(void 0===G[e]&&(G[e]={name:e,type:q.type,docRef:q.docRef},Ne.info("Added new requirement: ",e)),q={},G[e]),nt=()=>G,rt=e=>{void 0!==q&&(q.type=e)},st=e=>{void 0!==q&&(q.docRef=e)},at=(e,t,i)=>{ue.push({type:e,src:t,dst:i})},lt=()=>ue,ot=()=>{ue=[],b={},K={},q={},G={},Pe()},ct={RequirementType:We,RiskLevel:Ke,VerifyType:Ge,Relationships:je,getConfig:()=>Te().req,addRequirement:ze,getRequirements:Xe,setNewReqId:Je,setNewReqText:Ze,setNewReqRisk:et,setNewReqVerifyMethod:tt,setAccTitle:Ce,getAccTitle:Fe,setAccDescription:Me,getAccDescription:De,addElement:it,getElements:nt,setNewElementType:rt,setNewElementDocRef:st,addRelationship:at,getRelationships:lt,clear:ot},ht=e=>`\n\n  marker {\n    fill: ${e.relationColor};\n    stroke: ${e.relationColor};\n  }\n\n  marker.cross {\n    stroke: ${e.lineColor};\n  }\n\n  svg {\n    font-family: ${e.fontFamily};\n    font-size: ${e.fontSize};\n  }\n\n  .reqBox {\n    fill: ${e.requirementBackground};\n    fill-opacity: 1.0;\n    stroke: ${e.requirementBorderColor};\n    stroke-width: ${e.requirementBorderSize};\n  }\n  \n  .reqTitle, .reqLabel{\n    fill:  ${e.requirementTextColor};\n  }\n  .reqLabelBox {\n    fill: ${e.relationLabelBackground};\n    fill-opacity: 1.0;\n  }\n\n  .req-title-line {\n    stroke: ${e.requirementBorderColor};\n    stroke-width: ${e.requirementBorderSize};\n  }\n  .relationshipLine {\n    stroke: ${e.relationColor};\n    stroke-width: 1;\n  }\n  .relationshipLabel {\n    fill: ${e.relationLabelColor};\n  }\n\n`,ut=ht,he={CONTAINS:"contains",ARROW:"arrow"},dt=(e,t)=>{let i=e.append("defs").append("marker").attr("id",he.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");i.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),i.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),i.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",he.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0\n      L${t.line_height},${t.line_height/2}\n      M${t.line_height},${t.line_height/2}\n      L0,${t.line_height}`).attr("stroke-width",1)},xe={ReqMarkers:he,insertLineEndings:dt};let f={},Se=0;const Ae=(e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",f.rect_min_width+"px").attr("height",f.rect_min_height+"px"),ve=(e,t,i)=>{let n=f.rect_min_width/2,r=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",n).attr("y",f.rect_padding).attr("dominant-baseline","hanging"),s=0;i.forEach((e=>{0==s?r.append("tspan").attr("text-anchor","middle").attr("x",f.rect_min_width/2).attr("dy",0).text(e):r.append("tspan").attr("text-anchor","middle").attr("x",f.rect_min_width/2).attr("dy",.75*f.line_height).text(e),s++}));let a=1.5*f.rect_padding+s*f.line_height*.75;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",f.rect_min_width).attr("y1",a).attr("y2",a),{titleNode:r,y:a}},we=(e,t,i,n)=>{let r=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",f.rect_padding).attr("y",n).attr("dominant-baseline","hanging"),s=0;let a=[];return i.forEach((e=>{let t=e.length;for(;t>30&&s<3;){let i=e.substring(0,30);t=(e=e.substring(30,e.length)).length,a[a.length]=i,s++}if(3==s){let e=a[a.length-1];a[a.length-1]=e.substring(0,e.length-4)+"..."}else a[a.length]=e;s=0})),a.forEach((e=>{r.append("tspan").attr("x",f.rect_padding).attr("dy",f.line_height).text(e)})),r},pt=(e,t,i,n)=>{const r=t.node().getTotalLength(),s=t.node().getPointAtLength(.5*r),a="rel"+Se;Se++;const o=e.append("text").attr("class","req relationshipLabel").attr("id",a).attr("x",s.x).attr("y",s.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(n).node().getBBox();e.insert("rect","#"+a).attr("class","req reqLabelBox").attr("x",s.x-o.width/2).attr("y",s.y-o.height/2).attr("width",o.width).attr("height",o.height).attr("fill","white").attr("fill-opacity","85%")},yt=function(e,t,i,n,r){const s=i.edge(H(t.src),H(t.dst)),a=Qe().x((function(e){return e.x})).y((function(e){return e.y})),o=e.insert("path","#"+n).attr("class","er relationshipLine").attr("d",a(s.points)).attr("fill","none");t.type==r.db.Relationships.CONTAINS?o.attr("marker-start","url("+ke.getUrl(f.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(o.attr("stroke-dasharray","10,7"),o.attr("marker-end","url("+ke.getUrl(f.arrowMarkerAbsolute)+"#"+xe.ReqMarkers.ARROW+"_line_ending)")),pt(e,o,0,`<<${t.type}>>`)},ft=(e,t,i)=>{Object.keys(e).forEach((n=>{let r=e[n];n=H(n),Ne.info("Added new requirement: ",n);const s=i.append("g").attr("id",n),a=Ae(s,"req-"+n);let o=ve(s,n+"_title",[`<<${r.type}>>`,`${r.name}`]);we(s,n+"_body",[`Id: ${r.id}`,`Text: ${r.text}`,`Risk: ${r.risk}`,`Verification: ${r.verifyMethod}`],o.y);const l=a.node().getBBox();t.setNode(n,{width:l.width,height:l.height,shape:"rect",id:n})}))},_t=(e,t,i)=>{Object.keys(e).forEach((n=>{let r=e[n];const s=H(n),a=i.append("g").attr("id",s),o="element-"+s,l=Ae(a,o);let c=ve(a,o+"_title",["<<Element>>",`${n}`]);we(a,o+"_body",[`Type: ${r.type||"Not Specified"}`,`Doc Ref: ${r.docRef||"None"}`],c.y);const h=l.node().getBBox();t.setNode(s,{width:h.width,height:h.height,shape:"rect",id:s})}))},Et=(e,t)=>(e.forEach((function(e){let i=H(e.src),n=H(e.dst);t.setEdge(i,n,{relationship:e})})),e),gt=function(e,t){t.nodes().forEach((function(i){void 0!==i&&void 0!==t.node(i)&&(e.select("#"+i),e.select("#"+i).attr("transform","translate("+(t.node(i).x-t.node(i).width/2)+","+(t.node(i).y-t.node(i).height/2)+" )"))}))},H=e=>e.replace(/\s/g,"").replace(/\./g,"_"),Rt=(e,t,i,n)=>{f=Te().requirement;const r=f.securityLevel;let s;"sandbox"===r&&(s=oe("#i"+t));const a=oe("sandbox"===r?s.nodes()[0].contentDocument.body:"body").select(`[id='${t}']`);xe.insertLineEndings(a,f);const o=new Ue({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:f.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));let l=n.db.getRequirements(),c=n.db.getElements(),h=n.db.getRelationships();ft(l,o,a),_t(c,o,a),Et(h,o),Be(o),gt(a,o),h.forEach((function(e){yt(a,e,o,t,n)}));const u=f.rect_padding,y=a.node().getBBox(),d=y.width+2*u,p=y.height+2*u;Ye(a,p,d,f.useMaxWidth),a.attr("viewBox",`${y.x-u} ${y.y-u} ${d} ${p}`)},mt={draw:Rt},xt={parser:He,db:ct,renderer:mt,styles:ut};export{xt as diagram};