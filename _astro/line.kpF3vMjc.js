import{a as h}from"./array.Nw74a44z.js";import{w as d,c as o}from"./path.aUcfwwLI.js";import{B as v}from"./index.BZs_qVOt.js";function w(n){return n[0]}function b(n){return n[1]}function L(n,t){var r=o(!0),u=null,e=v,f=null,i=d(l);function l(o){var l,c,a,p=(o=h(o)).length,s=!1;for(null==u&&(f=e(a=i())),l=0;l<=p;++l)!(l<p&&r(c=o[l],l,o))===s&&((s=!s)?f.lineStart():f.lineEnd()),s&&f.point(+n(c,l,o),+t(c,l,o));if(a)return f=null,a+""||null}return n="function"==typeof n?n:void 0===n?w:o(n),t="function"==typeof t?t:void 0===t?b:o(t),l.x=function(t){return arguments.length?(n="function"==typeof t?t:o(+t),l):n},l.y=function(n){return arguments.length?(t="function"==typeof n?n:o(+n),l):t},l.defined=function(n){return arguments.length?(r="function"==typeof n?n:o(!!n),l):r},l.curve=function(n){return arguments.length?(e=n,null!=u&&(f=e(u)),l):e},l.context=function(n){return arguments.length?(null==n?u=f=null:f=e(u=n),l):u},l}export{L as l};