import{w as ln,c as k}from"./path.aUcfwwLI.js";import{ba as an,bb as F,bc as w,bd as rn,be as g,aa as on,bf as J,bg as _,bh as un,bi as t,bj as sn,bk as tn,bl as fn}from"./index.OaHEwokh.js";function cn(n){return n.innerRadius}function gn(n){return n.outerRadius}function yn(n){return n.startAngle}function mn(n){return n.endAngle}function pn(n){return n&&n.padAngle}function dn(n,t,r,c,a,e,u,o){var i=r-n,y=c-t,l=u-a,f=o-e,s=f*i-l*y;if(!(s*s<g))return[n+(s=(l*(t-e)-f*(n-a))/s)*i,t+s*y]}function U(n,t,r,c,a,e,u){var o=n-r,i=t-c,y=(u?e:-e)/J(o*o+i*i),l=y*i,f=-y*o,s=n+l,p=t+f,x=r+l,g=c+f,h=(s+x)/2,v=(p+g)/2,d=x-s,w=g-p,b=d*d+w*w,m=a-e,k=s*g-x*p,F=(w<0?-1:1)*J(fn(0,m*m*b-k*k)),T=(k*w-d*F)/b,A=(-k*d-w*F)/b,R=(k*w+d*F)/b,U=(-k*d+w*F)/b,_=T-h,j=A-v,E=R-h,H=U-v;return _*_+j*j>E*E+H*H&&(T=R,A=U),{cx:T,cy:A,x01:-l,y01:-f,x11:T*(a/m-1),y11:A*(a/m-1)}}function vn(){var n=cn,r=gn,c=k(0),a=null,e=yn,u=mn,o=pn,i=null,y=ln(l);function l(){var l,f,s=+n.apply(this,arguments),p=+r.apply(this,arguments),x=e.apply(this,arguments)-rn,h=u.apply(this,arguments)-rn,v=un(h-x),d=h>x;if(i||(i=l=y()),p<s&&(f=p,p=s,s=f),p>g)if(v>on-g)i.moveTo(p*F(x),p*w(x)),i.arc(0,0,p,x,h,!d),s>g&&(i.moveTo(s*F(h),s*w(h)),i.arc(0,0,s,h,x,d));else{var b,m,k=x,T=h,A=x,R=h,j=v,E=v,H=o.apply(this,arguments)/2,I=H>g&&(a?+a.apply(this,arguments):J(s*s+p*p)),L=_(un(p-s)/2,+c.apply(this,arguments)),O=L,P=L;if(I>g){var q=sn(I/s*w(H)),z=sn(I/p*w(H));(j-=2*q)>g?(A+=q*=d?1:-1,R-=q):(j=0,A=R=(x+h)/2),(E-=2*z)>g?(k+=z*=d?1:-1,T-=z):(E=0,k=T=(x+h)/2)}var B=p*F(k),C=p*w(k),D=s*F(R),G=s*w(R);if(L>g){var K,M=p*F(T),N=p*w(T),Q=s*F(A),S=s*w(A);if(v<an)if(K=dn(B,C,Q,S,M,N,D,G)){var V=B-K[0],W=C-K[1],X=M-K[0],Y=N-K[1],Z=1/w(tn((V*X+W*Y)/(J(V*V+W*W)*J(X*X+Y*Y)))/2),$=J(K[0]*K[0]+K[1]*K[1]);O=_(L,(s-$)/(Z-1)),P=_(L,(p-$)/(Z+1))}else O=P=0}E>g?P>g?(b=U(Q,S,B,C,p,P,d),m=U(M,N,D,G,p,P,d),i.moveTo(b.cx+b.x01,b.cy+b.y01),P<L?i.arc(b.cx,b.cy,P,t(b.y01,b.x01),t(m.y01,m.x01),!d):(i.arc(b.cx,b.cy,P,t(b.y01,b.x01),t(b.y11,b.x11),!d),i.arc(0,0,p,t(b.cy+b.y11,b.cx+b.x11),t(m.cy+m.y11,m.cx+m.x11),!d),i.arc(m.cx,m.cy,P,t(m.y11,m.x11),t(m.y01,m.x01),!d))):(i.moveTo(B,C),i.arc(0,0,p,k,T,!d)):i.moveTo(B,C),s>g&&j>g?O>g?(b=U(D,G,M,N,s,-O,d),m=U(B,C,Q,S,s,-O,d),i.lineTo(b.cx+b.x01,b.cy+b.y01),O<L?i.arc(b.cx,b.cy,O,t(b.y01,b.x01),t(m.y01,m.x01),!d):(i.arc(b.cx,b.cy,O,t(b.y01,b.x01),t(b.y11,b.x11),!d),i.arc(0,0,s,t(b.cy+b.y11,b.cx+b.x11),t(m.cy+m.y11,m.cx+m.x11),d),i.arc(m.cx,m.cy,O,t(m.y11,m.x11),t(m.y01,m.x01),!d))):i.arc(0,0,s,R,A,d):i.lineTo(D,G)}else i.moveTo(0,0);if(i.closePath(),l)return i=null,l+""||null}return l.centroid=function(){var t=(+n.apply(this,arguments)+ +r.apply(this,arguments))/2,c=(+e.apply(this,arguments)+ +u.apply(this,arguments))/2-an/2;return[F(c)*t,w(c)*t]},l.innerRadius=function(t){return arguments.length?(n="function"==typeof t?t:k(+t),l):n},l.outerRadius=function(n){return arguments.length?(r="function"==typeof n?n:k(+n),l):r},l.cornerRadius=function(n){return arguments.length?(c="function"==typeof n?n:k(+n),l):c},l.padRadius=function(n){return arguments.length?(a=null==n?null:"function"==typeof n?n:k(+n),l):a},l.startAngle=function(n){return arguments.length?(e="function"==typeof n?n:k(+n),l):e},l.endAngle=function(n){return arguments.length?(u="function"==typeof n?n:k(+n),l):u},l.padAngle=function(n){return arguments.length?(o="function"==typeof n?n:k(+n),l):o},l.context=function(n){return arguments.length?(i=n??null,l):i},l}export{vn as a};