import{b3 as o,A as i}from"./index.BZs_qVOt.js";const c=(t,r)=>{const a=t.append("rect");if(a.attr("x",r.x),a.attr("y",r.y),a.attr("fill",r.fill),a.attr("stroke",r.stroke),a.attr("width",r.width),a.attr("height",r.height),void 0!==r.rx&&a.attr("rx",r.rx),void 0!==r.ry&&a.attr("ry",r.ry),void 0!==r.attrs)for(const t in r.attrs)a.attr(t,r.attrs[t]);return void 0!==r.class&&a.attr("class",r.class),a},x=(t,r)=>{const a={x:r.startx,y:r.starty,width:r.stopx-r.startx,height:r.stopy-r.starty,fill:r.fill,stroke:r.stroke,class:"rect"};c(t,a).lower()},d=(t,r)=>{const a=r.text.replace(o," "),s=t.append("text");s.attr("x",r.x),s.attr("y",r.y),s.attr("class","legend"),s.style("text-anchor",r.anchor),void 0!==r.class&&s.attr("class",r.class);const e=s.append("tspan");return e.attr("x",r.x+2*r.textMargin),e.text(a),s},h=(t,r,a,s)=>{const e=t.append("image");e.attr("x",r),e.attr("y",a);const o=i.sanitizeUrl(s);e.attr("xlink:href",o)},y=(t,r,a,s)=>{const e=t.append("use");e.attr("x",r),e.attr("y",a);const o=i.sanitizeUrl(s);e.attr("xlink:href",`#${o}`)},g=()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),p=()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0});export{x as a,y as b,h as c,c as d,p as e,d as f,g};