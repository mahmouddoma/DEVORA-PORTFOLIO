import{c as Mp,d as Sp,f as wp,g as Tp,h as Ep,k as Cp}from"./chunk-LT3BVWQS.js";import{$ as Xt,Aa as bp,B as Ji,C as Qi,Da as Wc,E as va,Ea as Xc,F as Q,Fa as es,Ga as In,K as tn,L as Ai,P as Rn,S as Ct,V as Hc,W as er,X as tr,Y as Mt,Z as pe,_ as me,a as $i,aa as yt,b as Bc,ba as It,ca as Tr,da as vp,ea as yp,fa as Jr,ga as ci,ha as Lu,ia as gt,j as zc,ja as yo,ka as nr,la as ir,m as _a,n as Fs,na as Du,o as Sr,oa as Qr,p as wr,pa as Te,q as Ci,qa as Re,r as $r,ra as Ns,s as Vc,v as Gc,x as xa,y as xp}from"./chunk-5KMIGML3.js";function Er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Np(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ta={duration:.5,overwrite:!1,delay:0},Ju,Sn,Bt,Ri=1e8,Lt=1/Ri,Gu=Math.PI*2,y_=Gu/4,b_=0,Up=Math.sqrt,M_=Math.cos,S_=Math.sin,un=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},tl=function(e){return typeof e>"u"},or=function(e){return typeof e=="object"},ii=function(e){return e!==!1},Qu=function(){return typeof window<"u"},qc=function(e){return qt(e)||un(e)},kp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,w_=/random\([^)]+\)/g,T_=/,\s*/g,Ap=/(?:-?\.?\d|\.)+/gi,ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,td=/[+-]=-?[.\d]+/,E_=/[^,'"\[\]\s]+/gi,C_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,rr,Hu,nd,hi={},Zc={},Bp,zp=function(e){return(Zc=Mo(e,hi))&&Dn},nl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ea=function(e,t){return!t&&console.warn(e)},Vp=function(e,t){return e&&(hi[e]=t)&&Zc&&(Zc[e]=t)||hi},Ca=function(){return 0},A_={suppressEvents:!0,isStart:!0,kill:!1},Yc={suppressEvents:!0,kill:!1},P_={suppressEvents:!0},id={},ns=[],Wu={},Gp,ti={},Nu={},Pp=30,Kc=[],rd="",sd=function(e){var t=e[0],n,i;if(or(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Kc.length;i--&&!Kc[i].targetTest(t););n=Kc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ld(e[i],n)))||e.splice(i,1);return e},is=function(e){return e._gsap||sd(Ii(e))[0]._gsap},od=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():tl(n)&&e.getAttribute&&e.getAttribute(t)||n},Wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Vs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},R_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},$c=function(){var e=ns.length,t=ns.slice(0),n,i;for(Wu={},ns.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ad=function(e){return!!(e._initted||e._startAt||e.add)},Hp=function(e,t,n,i){ns.length&&!Sn&&$c(),e.render(t,n,i||!!(Sn&&t<0&&ad(e))),ns.length&&!Sn&&$c()},Wp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(E_).length<2?t:un(e)?e.trim():e},Xp=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},I_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mo=function(e,t){for(var n in t)e[n]=t[n];return e},Rp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=or(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Jc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ma=function(e){var t=e.parent||Gt,n=e.keyframes?I_(Ln(e.keyframes)):ui;if(ii(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},O_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},qp=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},il=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},rs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},L_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xu=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(Yc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},D_=function r(e){return!e||e._ts&&r(e.parent)},Ip=function(e){return e._repeat?So(e._tTime,e=e.duration()+e._rDelay)*e:0},So=function(e,t){var n=Math.floor(e=Vt(e/t));return e&&n===e?n-1:n},Qc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rl=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},sl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rl(e),n._dirty||Us(n,e)),e},Yp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qc(e.rawTime(),t),(!t._dur||Ra(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},sr=function(e,t,n,i){return t.parent&&rs(t),t._start=Vt((Ar(n)?n:n||e!==Gt?Pi(e,n,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qp(e,t,"_first","_last",e._sort?"_start":0),qu(t)||(e._recent=t),i||Yp(e,t),e._ts<0&&sl(e,e._tTime),e},Kp=function(e,t){return(hi.ScrollTrigger||nl("scrollTrigger",t))&&hi.ScrollTrigger.create(t,e)},jp=function(e,t,n,i,s){if(dd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gp!==ni.frame)return ns.push(e),e._lazy=[s,i],1},F_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},qu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},N_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&F_(e)&&!(!e._initted&&qu(e))||(e._ts<0||e._dp._ts<0)&&!qu(e))?0:1,a=e._rDelay,c=0,l,h,f;if(a&&e._repeat&&(c=Ra(0,e._tDur,t),h=So(c,a),e._yoyo&&h&1&&(o=1-o),h!==So(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Sn||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&jp(e,t,i,n,c))return;for(f=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Xu(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&rs(e,1),!n&&!Sn&&(li(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},U_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},wo=function(e,t,n,i){var s=e._repeat,o=Vt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Vt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&sl(e,e._tTime=e._tDur*a),e.parent&&rl(e),n||Us(e.parent,e),e},Op=function(e){return e instanceof On?Us(e):wo(e,e._dur)},k_={_start:0,endTime:Ca,totalDuration:Ca},Pi=function r(e,t,n){var i=e.labels,s=e._recent||k_,o=e.duration()>=Ri?s.endTime(!1):e._dur,a,c,l;return un(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Ln(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Sa=function(e,t,n){var i=Ar(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=ii(c.vars.inherit)&&c.parent;o.immediateRender=ii(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new nn(t[0],o,t[s+1])},ss=function(e,t){return e||e===0?t(e):t},Ra=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!un(e)||!(t=C_.exec(e))?"":t[1]},B_=function(e,t,n){return ss(n,function(i){return Ra(e,t,i)})},Yu=[].slice,Zp=function(e,t){return e&&or(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&or(e[0]))&&!e.nodeType&&e!==rr},z_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return un(i)&&!t||Zp(i,1)?(s=n).push.apply(s,Ii(i)):n.push(i)})||n},Ii=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):un(e)&&!n&&(Hu||!To())?Yu.call((t||nd).querySelectorAll(e),0):Ln(e)?z_(e,n):Zp(e)?Yu.call(e,0):e?[e]:[]},Ku=function(e){return e=Ii(e)[0]||Ea("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ii(t,n.querySelectorAll?n:n===e?Ea("Invalid scope")||nd.createElement("div"):e)}},$p=function(e){return e.sort(function(){return .5-Math.random()})},Jp=function(e){if(qt(e))return e;var t=or(e)?e:{each:e},n=ks(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,h=i,f=i;return un(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],f=i[1]),function(u,d,g){var _=(g||t).length,p=o[_],m,y,S,b,C,T,E,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,Ri])[1],!w){for(E=-Ri;E<(E=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=o[_]=[],m=c?Math.min(w,_)*h-.5:i%w,y=w===Ri?0:c?_*f/w-.5:i/w|0,E=0,x=Ri,T=0;T<_;T++)S=T%w-m,b=y-(T/w|0),p[T]=C=l?Math.abs(l==="y"?b:S):Up(S*S+b*b),C>E&&(E=C),C<x&&(x=C);i==="random"&&$p(p),p.max=E-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:l?l==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=wn(t.amount||t.each)||0,n=n&&_<0?Q_(n):n}return _=(p[u]-p.min)/p.max||0,Vt(p.b+(n?n(_):_)*p.v)+p.u}},ju=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Vt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ar(n)?0:wn(n))}},Qp=function(e,t){var n=Ln(e),i,s;return!n&&or(e)&&(i=n=e.radius||Ri,e.values?(e=Ii(e.values),(s=!Ar(e[0]))&&(i*=i)):e=ju(e.increment)),ss(t,n?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=Ri,h=0,f=e.length,u,d;f--;)s?(u=e[f].x-a,d=e[f].y-c,u=u*u+d*d):u=Math.abs(e[f]-a),u<l&&(l=u,h=f);return h=!i||l<=i?e[h]:o,s||h===o||Ar(o)?h:h+wn(o)}:ju(e))},em=function(e,t,n,i){return ss(Ln(e)?!t:n===!0?!!(n=0):!i,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},V_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},G_=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},H_=function(e,t,n){return nm(e,t,0,1,n)},tm=function(e,t,n){return ss(n,function(i){return e[~~t(i)]})},W_=function r(e,t,n){var i=t-e;return Ln(e)?tm(e,r(0,e.length),t):ss(n,function(s){return(i+(s-e)%i)%i+e})},X_=function r(e,t,n){var i=t-e,s=i*2;return Ln(e)?tm(e,r(0,e.length-1),t):ss(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Eo=function(e){return e.replace(w_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(T_);return em(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},nm=function(e,t,n,i,s){var o=t-e,a=i-n;return ss(s,function(c){return n+((c-e)/o*a||0)})},q_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=un(e),a={},c,l,h,f,u;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(h=[],f=e.length,u=f-2,l=1;l<f;l++)h.push(r(e[l-1],e[l]));f--,s=function(g){g*=f;var _=Math.min(u,~~g);return h[_](g-_)},n=t}else i||(e=Mo(Ln(e)?[]:{},e));if(!h){for(c in t)hd.call(a,e,c,"get",t[c]);s=function(g){return md(g,a)||(o?e.p:e)}}}return ss(n,s)},Lp=function(e,t,n){var i=e.labels,s=Ri,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},li=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,c,l,h;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&ns.length&&$c(),a&&(Bt=a),h=c?s.apply(l,c):s.call(l),Bt=o,h},ya=function(e){return rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&li(e,"onInterrupt"),e},bo,im=[],rm=function(e){if(e)if(e=!e.name&&e.default||e,Qu()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ca,render:md,add:hd,kill:lx,modifier:cx,rawVars:0},o={targetTest:0,get:0,getSetter:ol,aliases:{},register:0};if(To(),e!==i){if(ti[t])return;ui(i,ui(Jc(e,s),o)),Mo(i.prototype,Mo(s,Jc(e,o))),ti[i.prop=t]=i,e.targetTest&&(Kc.push(i),id[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vp(t,i),e.register&&e.register(Dn,i,Xn)}else im.push(e)},Ot=255,ba={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},Uu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ot+.5|0},sm=function(e,t,n){var i=e?Ar(e)?[e>>16,e>>8&Ot,e&Ot]:0:ba.black,s,o,a,c,l,h,f,u,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ba[e])i=ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ot,i&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ap),!t)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Uu(c+1/3,s,o),i[1]=Uu(c,s,o),i[2]=Uu(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(ed),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ap)||ba.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ot,o=i[1]/Ot,a=i[2]/Ot,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?c=l=0:(d=f-u,l=h>.5?d/(2-f-u):d/(f+u),c=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},om=function(e){var t=[],n=[],i=-1;return e.split(Cr).forEach(function(s){var o=s.match(zs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Dp=function(e,t,n){var i="",s=(e+i).match(Cr),o=t?"hsla(":"rgba(",a=0,c,l,h,f;if(!s)return e;if(s=s.map(function(u){return(u=sm(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=om(e),c=n.c,c.join(i)!==h.c.join(i)))for(l=e.replace(Cr,"1").split(zs),f=l.length-1;a<f;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=e.split(Cr),f=l.length-1;a<f;a++)i+=l[a]+s[a];return i+l[f]},Cr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ba)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Y_=/hsl[a]?\(/,cd=function(e){var t=e.join(" "),n;if(Cr.lastIndex=0,Cr.test(t))return n=Y_.test(t),e[1]=Dp(e[1],n),e[0]=Dp(e[0],n,om(e[1])),!0},Aa,ni=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,h,f,u,d,g=function _(p){var m=r()-i,y=p===!0,S,b,C,T;if((m>e||m<0)&&(n+=m-t),i+=m,C=i-n,S=C-o,(S>0||y)&&(T=++f.frame,u=C-f.time*1e3,f.time=C=C/1e3,o+=S+(S>=s?4:s-S),b=1),y||(c=l(_)),b)for(d=0;d<a.length;d++)a[d](C,u,T,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Bp&&(!Hu&&Qu()&&(rr=Hu=window,nd=rr.document||{},hi.gsap=Dn,(rr.gsapVersions||(rr.gsapVersions=[])).push(Dn.version),zp(Zc||rr.GreenSockGlobals||!rr.gsap&&rr||{}),im.forEach(rm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Aa=0,l=Ca},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var S=m?function(b,C,T,E){p(b,C,T,E),f.remove(S)}:p;return f.remove(p),a[y?"unshift":"push"](S),To(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f})(),To=function(){return!Aa&&ni.wake()},_t={},K_=/^[\d.\-M][\d.\-,\s]/,j_=/["']/g,Z_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(j_,"").trim():+l,i=c.substr(a+1).trim();return t},$_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},J_=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Z_(t[1])]:$_(e).split(",").map(Wp)):_t._CE&&K_.test(e)?_t._CE("",e):n},Q_=function(e){return function(t){return 1-e(1-t)}},ks=function(e,t){return e&&(qt(e)?e:_t[e]||J_(e))||t},Gs=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Wn(e,function(a){_t[a]=hi[a]=s,_t[o=a.toLowerCase()]=n;for(var c in s)_t[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=_t[a+"."+c]=s[c]}),s},am=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ku=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*S_((h-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:am(a);return s=Gu/s,c.config=function(l,h){return r(e,l,h)},c},Bu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:am(n);return i.config=function(s){return r(e,s)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Gs("Elastic",ku("in"),ku("out"),ku());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gs("Circ",function(r){return-(Up(1-r*r)-1)});Gs("Sine",function(r){return r===1?1:-M_(r*y_)+1});Gs("Back",Bu("in"),Bu("out"),Bu());_t.SteppedEase=_t.steps=hi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Lt;return function(a){return((i*Ra(0,o,a)|0)+s)*n}}};Ta.ease=_t["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return rd+=r+","+r+"Params,"});var ld=function(e,t){this.id=b_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:od,this.set=t?t.getSetter:ol},Pa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,wo(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Aa||ni.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,wo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(To(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sl(this,n),!s._dp||s.parent||Yp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&sr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ip(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ip(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?So(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Ra(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),rl(this),L_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(To(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Vt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&sr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=P_);var i=Sn;return Sn=n,ad(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Op(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Op(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Pi(this,n),ii(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ii(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=qt(n)?n:Xp,c=function(){var h=i.then;i.then=null,s&&s(),qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){ya(this)},r})();ui(Pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var On=(function(r){Np(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ii(n.sortChildren),Gt&&sr(n.parent||Gt,Er(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kp(Er(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Sa(0,arguments,this),this},t.from=function(i,s,o){return Sa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Sa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(i,s,Pi(this,o),1),this},t.call=function(i,s,o){return sr(this,nn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new nn(i,o,Pi(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,h){return o.runBackwards=1,Ma(o).immediateRender=ii(o.immediateRender),this.staggerTo(i,s,o,a,c,l,h)},t.staggerFromTo=function(i,s,o,a,c,l,h,f){return a.startAt=o,Ma(a).immediateRender=ii(a.immediateRender),this.staggerTo(i,s,a,c,l,h,f)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Vt(i),f=this._zTime<0!=i<0&&(this._initted||!l),u,d,g,_,p,m,y,S,b,C,T,E;if(this!==Gt&&h>c&&i>=0&&(h=c),h!==this._tTime||o||f){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),u=h,b=this._start,S=this._ts,m=!S,f&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(u=Vt(h%p),h===c?(_=this._repeat,u=l):(C=Vt(h/p),_=~~C,_&&_===C&&(u=l,_--),u>l&&(u=l)),C=So(this._tTime,p),!a&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),T&&_&1&&(u=l-u,E=1),_!==C&&!this._lock){var x=T&&C&1,w=x===(T&&_&1);if(_<C&&(x=!x),a=x?0:h%l?l:h,this._lock=1,this.render(a||(E?0:Vt(_*p)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,a=x?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=U_(this,Vt(a),Vt(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&l&&!s&&!C&&(li(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||u>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=-Lt);break}}d=g}else{d=this._last;for(var P=i<0?i:u;d;){if(g=d._prev,(d._act||P<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,s,o||Sn&&ad(d)),u!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=P?-Lt:Lt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(u>=a?0:-Lt)._zTime=u>=a?1:-1,this._ts))return this._start=b,rl(this),this.render(i,s,o);this._onUpdate&&!s&&li(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&rs(this,1),!s&&!(i<0&&!a)&&(h||a||!c)&&(li(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ar(s)||(s=Pi(this,s,i)),!(i instanceof Pa)){if(Ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(un(i))return this.addLabel(i,s);if(qt(i))i=nn.delayedCall(0,i);else return this}return this!==i?sr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ri);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof nn?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return un(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&il(this,i),i===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=nn.delayedCall(0,s||Ca,o);return a.data="isPause",this._hasPause=1,sr(this,a,Pi(this,i))},t.removePause=function(i){var s=this._first;for(i=Pi(this,i);s;)s._start===i&&s.data==="isPause"&&rs(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)ts!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ii(i),c=this._first,l=Ar(s),h;c;)c instanceof nn?R_(c._targets,a)&&(l?(!ts||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(h=c.getTweensOf(a,s)).length&&o.push.apply(o,h),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Pi(o,i),c=s,l=c.startAt,h=c.onStart,f=c.onStartParams,u=c.immediateRender,d,g=nn.to(o,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&wo(g,p,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ui({startAt:{time:Pi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Lp(this,Pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Lp(this,Pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(i=Vt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return Us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=Ri,l,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,sr(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Vt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;wo(o,o===Gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Gt._ts&&(Hp(Gt,Qc(i,Gt)),Gp=ni.frame),ni.frame>=Pp){Pp+=ri.autoSleep||120;var s=Gt._first;if((!s||!s._ts)&&ri.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},e})(Pa);ui(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var ex=function(e,t,n,i,s,o,a){var c=new Xn(this._pt,e,t,0,1,pd,null,s),l=0,h=0,f,u,d,g,_,p,m,y;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Eo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),u=n.match(Fu)||[];f=Fu.exec(i);)g=f[0],_=i.substring(l,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Vs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},l=Fu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(td.test(i)||m)&&(c.e=0),this._pt=c,c},hd=function(e,t,n,i,s,o,a,c,l,h){qt(i)&&(i=i(s||0,e,o));var f=e[t],u=n!=="get"?n:qt(f)?l?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,d=qt(f)?l?sx:hm:fd,g;if(un(i)&&(~i.indexOf("random(")&&(i=Eo(i)),i.charAt(1)==="="&&(g=Vs(u,i)+(wn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Zu)return!isNaN(u*i)&&i!==""?(g=new Xn(this._pt,e,t,+u||0,i-(u||0),typeof f=="boolean"?ax:um,0,d),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&nl(t,i),ex.call(this,e,t,u,i,d,c||ri.stringFilter,l))},tx=function(e,t,n,i,s){if(qt(e)&&(e=wa(e,s,t,n,i)),!or(e)||e.style&&e.nodeType||Ln(e)||kp(e))return un(e)?wa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=wa(e[a],s,t,n,i);return o},ud=function(e,t,n,i,s,o){var a,c,l,h;if(ti[e]&&(a=new ti[e]).init(s,a.rawVars?t[e]:tx(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new Xn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==bo))for(l=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=c;return a},ts,Zu,dd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,S=e._overwrite==="auto"&&!Ju,b=e.timeline,C=i.easeReverse||f,T,E,x,w,P,R,O,G,W,L,k,F,K;if(b&&(!u||!s)&&(s="none"),e._ease=ks(s,Ta.ease),e._rEase=C&&(ks(C)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||u&&!i.stagger){if(G=p[0]?is(p[0]).harness:0,F=G&&i[G.prop],T=Jc(i,id),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Yc:A_),_._lazy=0),o){if(rs(e._startAt=nn.set(p,ui({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ii(c),startAt:null,delay:0,onUpdate:l&&function(){return li(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!a&&!d)&&e._startAt.revert(Yc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),x=ui({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ii(c),immediateRender:a,stagger:0,parent:m},T),F&&(x[G.prop]=F),rs(e._startAt=nn.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(Yc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&ii(c)||c&&!g,E=0;E<p.length;E++){if(P=p[E],O=P._gsap||sd(p)[E]._gsap,e._ptLookup[E]=L={},Wu[O.id]&&ns.length&&$c(),k=y===p?E:y.indexOf(P),G&&(W=new G).init(P,F||T,e,k,y)!==!1&&(e._pt=w=new Xn(e._pt,P,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ee){L[ee]=w}),W.priority&&(R=1)),!G||F)for(x in T)ti[x]&&(W=ud(x,T,e,k,P,y))?W.priority&&(R=1):L[x]=w=hd.call(e,P,x,"get",T[x],k,y,0,i.stringFilter);e._op&&e._op[E]&&e.kill(P,e._op[E]),S&&e._pt&&(ts=e,Gt.killTweensOf(P,L,e.globalTime(t)),K=!e.parent,ts=0),e._pt&&c&&(Wu[O.id]=1)}R&&gd(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!K,u&&t<=0&&b.render(Ri,!0,!0)},nx=function(e,t,n,i,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,u,d;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(h=u[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Zu=1,e.vars[t]="+=0",dd(e,a),Zu=0,c?Ea(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(d=l.length;d--;)f=l[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Yt(n)+wn(f.e)),f.b&&(f.b=h.s+wn(f.b))},ix=function(e,t){var n=e[0]?is(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=Mo({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},rx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Ln(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wa=function(e,t,n,i,s){return qt(e)?e.call(t,n,i,s):un(e)&&~e.indexOf("random(")?Eo(e):e},cm=rd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",lm={};Wn(cm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return lm[r]=1});var nn=(function(r){Np(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ma(i))||this;var c=a.vars,l=c.duration,h=c.delay,f=c.immediateRender,u=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=i.parent||Gt,y=(Ln(n)||kp(n)?Ar(n[0]):"length"in i)?[n]:Ii(n),S,b,C,T,E,x,w,P;if(a._targets=y.length?sd(y):Ea("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||u||qc(l)||qc(h)){i=a.vars;var R=i.easeReverse||i.yoyoEase;if(S=a.timeline=new On({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:y}),S.kill(),S.parent=S._dp=Er(a),S._start=0,u||qc(l)||qc(h)){if(T=y.length,w=u&&Jp(u),or(u))for(E in u)~cm.indexOf(E)&&(P||(P={}),P[E]=u[E]);for(b=0;b<T;b++)C=Jc(i,lm),C.stagger=0,R&&(C.easeReverse=R),P&&Mo(C,P),x=y[b],C.duration=+wa(l,Er(a),b,x,y),C.delay=(+wa(h,Er(a),b,x,y)||0)-a._delay,!u&&T===1&&C.delay&&(a._delay=h=C.delay,a._start+=h,C.delay=0),S.to(x,C,w?w(b,x,y):0),S._ease=_t.none;S.duration()?l=h=0:a.timeline=0}else if(g){Ma(ui(S.vars.defaults,{ease:"none"})),S._ease=ks(g.ease||i.ease||"none");var O=0,G,W,L;if(Ln(g))g.forEach(function(k){return S.to(y,k,">")}),S.duration();else{C={};for(E in g)E==="ease"||E==="easeEach"||rx(E,g[E],C,g.easeEach);for(E in C)for(G=C[E].sort(function(k,F){return k.t-F.t}),O=0,b=0;b<G.length;b++)W=G[b],L={ease:W.e,duration:(W.t-(b?G[b-1].t:0))/100*l},L[E]=W.v,S.to(y,L,O),O+=L.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return d===!0&&!Ju&&(ts=Er(a),Gt.killTweensOf(y),ts=0),sr(m,Er(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!l&&!g&&a._start===Vt(m._time)&&ii(f)&&D_(Er(a))&&m.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-h)||0)),p&&Kp(Er(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,f=i>c-Lt&&!h?c:i<Lt?0:i,u,d,g,_,p,m,y,S;if(!l)N_(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,S=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Vt(f%_),f===c?(g=this._repeat,u=l):(p=Vt(f/_),g=~~p,g&&g===p?(u=l,g--):u>l&&(u=l)),m=this._yoyo&&g&1,m&&(u=l-u),p=So(this._tTime,_),u===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Vt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(jp(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._rEase){var b=u<a;if(b!==this._inv){var C=b?a:l-a;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(b?-1:1)/C:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/l);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(li(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Xu(this,i,s,o),li(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Xu(this,i,!0,!0),(i||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&rs(this,1),!s&&!(h&&!a)&&(f||a||m)&&(li(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,c){Aa||ni.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||dd(this,l),h=this._ease(l/this._dur),nx(this,i,s,o,a,h,l,c)?this.resetTo(i,s,o,a,1):(sl(this,0),this.parent||qp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ya(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ts&&ts.vars.overwrite!==!0)._first||ya(this),this.parent&&o!==this.timeline.totalDuration()&&wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Ii(i):a,l=this._ptLookup,h=this._pt,f,u,d,g,_,p,m;if((!s||s==="all")&&O_(a,c))return s==="all"&&(this._pt=0),ya(this);for(f=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},Wn(s,function(y){return _[y]=1}),s=_),s=ix(a,s)),m=a.length;m--;)if(~c.indexOf(a[m])){u=l[m],s==="all"?(f[m]=s,g=u,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&il(this,p,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&ya(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Sa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Sa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Gt.killTweensOf(i,s,o)},e})(Pa);ui(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(r){nn[r]=function(){var e=new On,t=Yu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var fd=function(e,t,n){return e[t]=n},hm=function(e,t,n){return e[t](n)},sx=function(e,t,n,i){return e[t](i.fp,n)},ox=function(e,t,n){return e.setAttribute(t,n)},ol=function(e,t){return qt(e[t])?hm:tl(e[t])&&e.setAttribute?ox:fd},um=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ax=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},pd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},md=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},cx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},lx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?il(this,t,"_pt"):t.dep||(n=1),t=i;return!n},hx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},gd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Xn=(function(){function r(t,n,i,s,o,a,c,l,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||um,this.d=c||this,this.set=l||fd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=hx,this.m=n,this.mt=s,this.tween=i},r})();Wn(rd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return id[r]=1});hi.TweenMax=hi.TweenLite=nn;hi.TimelineLite=hi.TimelineMax=On;Gt=new On({sortChildren:!1,defaults:Ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=cd;var Bs=[],jc={},ux=[],Fp=0,dx=0,zu=function(e){return(jc[e]||ux).map(function(t){return t()})},$u=function(){var e=Date.now(),t=[];e-Fp>2&&(zu("matchMediaInit"),Bs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=rr.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),zu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fp=e,zu("matchMedia"))},dm=(function(){function r(t,n){this.selector=n&&Ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){qt(n)&&(s=i,i=n,n=qt);var o=this,a=function(){var l=Bt,h=o.selector,f;return l&&l!==o&&l.data.push(o),s&&(o.selector=Ku(s)),Bt=o,f=i.apply(o,arguments),qt(f)&&o._r.push(f),Bt=l,o.selector=h,o.isReverted=!1,f};return o.last=a,n===qt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof nn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof On?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof nn)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Bs.length;o--;)Bs[o].id===this.id&&Bs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),fx=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){or(n)||(n={matches:n});var o=new dm(0,s||this.scope),a=o.conditions={},c,l,h;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=rr.matchMedia(n[l]),c&&(Bs.indexOf(o)<0&&Bs.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener($u):c.addEventListener("change",$u)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),el={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return rm(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=Ii(e)[0]);var s=is(e||{}).get,o=n?Xp:Wp;return n==="native"&&(n=""),e&&(t?o((ti[t]&&ti[t].get||s)(e,t,n,i)):function(a,c,l){return o((ti[a]&&ti[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=Ii(e),e.length>1){var i=e.map(function(h){return Dn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=ti[t],a=is(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(h){var f=new o;bo._pt=0,f.init(e,n?h+n:h,bo,0,[e]),f.render(1,f),bo._pt&&md(1,bo)}:a.set(e,c);return o?l:function(h){return l(e,c,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Dn.to(e,ui((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return s.resetTo(t,c,l,h)};return o.tween=s,o},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ks(e.ease,Ta.ease)),Rp(Ta,e||{})},config:function(e){return Rp(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ti[a]&&!hi[a]&&Ea(t+" effect requires "+a+" plugin.")}),Nu[t]=function(a,c,l){return n(Ii(a),ui(c||{},s),l)},o&&(On.prototype[t]=function(a,c,l){return this.add(Nu[t](a,or(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){_t[e]=ks(t)},parseEase:function(e,t){return arguments.length?ks(e,t):_t},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=ii(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof nn&&i.vars.onComplete===i._targets[0]))&&sr(n,i,i._start-i._delay),i=s;return sr(Gt,n,0),n},context:function(e,t){return e?new dm(e,t):Bt},matchMedia:function(e){return new fx(e)},matchMediaRefresh:function(){return Bs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||$u()},addEventListener:function(e,t){var n=jc[e]||(jc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=jc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:W_,wrapYoyo:X_,distribute:Jp,random:em,snap:Qp,normalize:H_,getUnit:wn,clamp:B_,splitColor:sm,toArray:Ii,selector:Ku,mapRange:nm,pipe:V_,unitize:G_,interpolate:q_,shuffle:$p},install:zp,effects:Nu,ticker:ni,updateRoot:On.updateRoot,plugins:ti,globalTimeline:Gt,core:{PropTween:Xn,globals:Vp,Tween:nn,Timeline:On,Animation:Pa,getCache:is,_removeLinkedListItem:il,reverting:function(){return Sn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return Ju=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return el[r]=nn[r]});ni.add(On.updateRoot);bo=el.to({},{duration:0});var px=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=px(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Vu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(un(s)&&(c={},Wn(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}mx(a,s)}}}},Dn=el.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vu("roundProps",ju),Vu("modifiers"),Vu("snap",Qp))||el;nn.version=On.version=Dn.version="3.15.0";Bp=1;Qu()&&To();var gx=_t.Power0,_x=_t.Power1,xx=_t.Power2,vx=_t.Power3,yx=_t.Power4,bx=_t.Linear,Mx=_t.Quad,Sx=_t.Cubic,wx=_t.Quart,Tx=_t.Quint,Ex=_t.Strong,Cx=_t.Elastic,Ax=_t.Back,Px=_t.SteppedEase,Rx=_t.Bounce,Ix=_t.Sine,Ox=_t.Expo,Lx=_t.Circ;var fm,os,Ao,Md,qs,Dx,pm,Sd,Fx=function(){return typeof window<"u"},Rr={},Xs=180/Math.PI,Po=Math.PI/180,Co=Math.atan2,mm=1e8,wd=/([A-Z])/g,Nx=/(left|right|width|margin|padding|x)/i,Ux=/[\s,\(]\S/,ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Sm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gx=function(e,t,n){return e.style[t]=n},Hx=function(e,t,n){return e.style.setProperty(t,n)},Wx=function(e,t,n){return e._gsap[t]=n},Xx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Yx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",si=Ht+"Origin",Kx=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Rr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ar[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Pr(i,a)}):this.tfm[e]=o.x?o[e]:Pr(i,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return ar.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},Tm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Sd(),(!s||!s.isStart)&&!n[Ht]&&(Tm(n),i.zOrigin&&n[si]&&(n[si]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Em=function(e,t){var n={target:e,props:[],revert:jx,save:Kx};return e._gsap||Dn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Cm,vd=function(e,t){var n=os.createElementNS?os.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):os.createElement(e);return n&&n.style?n:os.createElement(e)},di=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(wd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ro(t)||t,1)||""},gm="O,Moz,ms,Ms,Webkit".split(","),Ro=function(e,t,n){var i=t||qs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(gm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?gm[o]:"")+e},yd=function(){Fx()&&window.document&&(fm=window,os=fm.document,Ao=os.documentElement,qs=vd("div")||{style:{}},Dx=vd("div"),Ht=Ro(Ht),si=Ht+"Origin",qs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cm=!!Ro("perspective"),Sd=Dn.core.reverting,Md=1)},_m=function(e){var t=e.ownerSVGElement,n=vd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ao.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ao.removeChild(n),s},xm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Am=function(e){var t,n;try{t=e.getBBox()}catch{t=_m(e),n=1}return t&&(t.width||t.height)||n||(t=_m(e)),t&&!t.width&&!t.x&&!t.y?{x:+xm(e,["x","cx","x1"])||0,y:+xm(e,["y","cy","y1"])||0,width:0,height:0}:t},Pm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Am(e))},cs=function(e,t){if(t){var n=e.style,i;t in Rr&&t!==si&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(wd,"-$1").toLowerCase())):n.removeAttribute(t)}},as=function(e,t,n,i,s,o){var a=new Xn(e._pt,t,n,0,1,o?wm:Sm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},vm={deg:1,rad:1,turn:1},Zx={grid:1,flex:1},ls=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qs.style,c=Nx.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),f=100,u=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||vm[i]||vm[o])return s;if(o!=="px"&&!u&&(s=r(e,t,n,"px")),m=e.getCTM&&Pm(e),(d||o==="%")&&(Rr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[c?"width":"height"]:e[h],Yt(d?s/g*f:s/100*g);if(a[c?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===os||!_.appendChild)&&(_=os.body),p=_._gsap,p&&d&&p.width&&c&&p.time===ni.time&&!p.uncache)return Yt(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[h],y?e.style[t]=y:cs(e,t)}else(d||o==="%")&&!Zx[di(_,"display")]&&(a.position=di(e,"position")),_===e&&(a.position="static"),_.appendChild(qs),g=qs[h],_.removeChild(qs),a.position="absolute";return c&&d&&(p=is(_),p.time=ni.time,p.width=_[h]),Yt(u?g*s/f:g&&s?f/g*s:0)},Pr=function(e,t,n,i){var s;return Md||yd(),t in ar&&t!=="transform"&&(t=ar[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rr[t]&&t!=="transform"?(s=La(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cl(di(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=al[t]&&al[t](e,t,n)||di(e,t)||od(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ls(e,t,s,n)+n:s},$x=function(e,t,n,i){if(!n||n==="none"){var s=Ro(t,e,1),o=s&&di(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=di(e,"borderTopColor"))}var a=new Xn(this._pt,e.style,t,0,1,pd),c=0,l=0,h,f,u,d,g,_,p,m,y,S,b,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=di(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=di(e,t)||i,_?e.style[t]=_:cs(e,t)),h=[n,i],cd(h),n=h[0],i=h[1],u=n.match(zs)||[],C=i.match(zs)||[],C.length){for(;f=zs.exec(i);)p=f[0],y=i.substring(c,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=u[l++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),p.charAt(1)==="="&&(p=Vs(d,p)+b),m=parseFloat(p),S=p.substr((m+"").length),c=zs.lastIndex-S.length,S||(S=S||ri.units[t]||b,c===i.length&&(i+=S,a.e+=S)),b!==S&&(d=ls(e,t,_,S)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?wm:Sm;return td.test(i)&&(a.e=0),this._pt=a,a},ym={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ym[n]||n,t[1]=ym[i]||i,t.join(" ")},Qx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Rr[a]&&(c=1,a=a==="transformOrigin"?si:Ht),cs(n,a);c&&(cs(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",La(n,1),o.uncache=1,Tm(i)))}},al={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Xn(e._pt,t,n,0,0,Qx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Oa=[1,0,0,1,0,0],Rm={},Im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bm=function(e){var t=di(e,Ht);return Im(t)?Oa:t.substr(7).match(ed).map(Yt)},Td=function(e,t){var n=e._gsap||is(e),i=e.style,s=bm(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Oa:s):(s===Oa&&!e.offsetParent&&e!==Ao&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,Ao.appendChild(e)),s=bm(e),c?i.display=c:cs(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bd=function(e,t,n,i,s,o){var a=e._gsap,c=s||Td(e,!0),l=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=c[0],g=c[1],_=c[2],p=c[3],m=c[4],y=c[5],S=t.split(" "),b=parseFloat(S[0])||0,C=parseFloat(S[1])||0,T,E,x,w;n?c!==Oa&&(E=d*p-g*_)&&(x=b*(p/E)+C*(-_/E)+(_*y-p*m)/E,w=b*(-g/E)+C*(d/E)-(d*y-g*m)/E,b=x,C=w):(T=Am(e),b=T.x+(~S[0].indexOf("%")?b/100*T.width:b),C=T.y+(~(S[1]||S[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&a.smooth?(m=b-l,y=C-h,a.xOffset=f+(m*d+y*_)-m,a.yOffset=u+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=C,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[si]="0px 0px",o&&(as(o,a,"xOrigin",l,b),as(o,a,"yOrigin",h,C),as(o,a,"xOffset",f,a.xOffset),as(o,a,"yOffset",u,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+C)},La=function(e,t){var n=e._gsap||new ld(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=di(e,si)||"0",h,f,u,d,g,_,p,m,y,S,b,C,T,E,x,w,P,R,O,G,W,L,k,F,K,ee,I,ge,Ce,Ze,Ge,Ne;return h=f=u=_=p=m=y=S=b=0,d=g=1,n.svg=!!(e.getCTM&&Pm(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ht]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ht]!=="none"?c[Ht]:"")),i.scale=i.rotate=i.translate="none"),E=Td(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),bd(e,F||l,!!F||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,T=n.yOrigin||0,E!==Oa&&(R=E[0],O=E[1],G=E[2],W=E[3],h=L=E[4],f=k=E[5],E.length===6?(d=Math.sqrt(R*R+O*O),g=Math.sqrt(W*W+G*G),_=R||O?Co(O,R)*Xs:0,y=G||W?Co(G,W)*Xs+_:0,y&&(g*=Math.abs(Math.cos(y*Po))),n.svg&&(h-=C-(C*R+T*G),f-=T-(C*O+T*W))):(Ne=E[6],Ze=E[7],I=E[8],ge=E[9],Ce=E[10],Ge=E[11],h=E[12],f=E[13],u=E[14],x=Co(Ne,Ce),p=x*Xs,x&&(w=Math.cos(-x),P=Math.sin(-x),F=L*w+I*P,K=k*w+ge*P,ee=Ne*w+Ce*P,I=L*-P+I*w,ge=k*-P+ge*w,Ce=Ne*-P+Ce*w,Ge=Ze*-P+Ge*w,L=F,k=K,Ne=ee),x=Co(-G,Ce),m=x*Xs,x&&(w=Math.cos(-x),P=Math.sin(-x),F=R*w-I*P,K=O*w-ge*P,ee=G*w-Ce*P,Ge=W*P+Ge*w,R=F,O=K,G=ee),x=Co(O,R),_=x*Xs,x&&(w=Math.cos(x),P=Math.sin(x),F=R*w+O*P,K=L*w+k*P,O=O*w-R*P,k=k*w-L*P,R=F,L=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Yt(Math.sqrt(R*R+O*O+G*G)),g=Yt(Math.sqrt(k*k+Ne*Ne)),x=Co(L,k),y=Math.abs(x)>2e-4?x*Xs:0,b=Ge?1/(Ge<0?-Ge:Ge):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Im(di(e,Ht)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Yt(d),n.scaleY=Yt(g),n.rotation=Yt(_)+a,n.rotationX=Yt(p)+a,n.rotationY=Yt(m)+a,n.skewX=y+a,n.skewY=S+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[si]=cl(l)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?tv:Cm?Om:ev,n.uncache=0,n},cl=function(e){return(e=e.split(" "))[0]+" "+e[1]},_d=function(e,t,n){var i=wn(t);return Yt(parseFloat(t)+parseFloat(ls(e,"x",n+"px",i)))+i},ev=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Om(e,t)},Hs="0deg",Ia="0px",Ws=") ",Om=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,S=n.zOrigin,b="",C=m==="auto"&&e&&e!==1||m===!0;if(S&&(f!==Hs||h!==Hs)){var T=parseFloat(h)*Po,E=Math.sin(T),x=Math.cos(T),w;T=parseFloat(f)*Po,w=Math.cos(T),o=_d(y,o,E*w*-S),a=_d(y,a,-Math.sin(T)*-S),c=_d(y,c,x*w*-S+S)}p!==Ia&&(b+="perspective("+p+Ws),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(C||o!==Ia||a!==Ia||c!==Ia)&&(b+=c!==Ia||C?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ws),l!==Hs&&(b+="rotate("+l+Ws),h!==Hs&&(b+="rotateY("+h+Ws),f!==Hs&&(b+="rotateX("+f+Ws),(u!==Hs||d!==Hs)&&(b+="skew("+u+", "+d+Ws),(g!==1||_!==1)&&(b+="scale("+g+", "+_+Ws),y.style[Ht]=b||"translate(0, 0)"},tv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,S=parseFloat(o),b=parseFloat(a),C,T,E,x,w;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Po,l*=Po,C=Math.cos(c)*f,T=Math.sin(c)*f,E=Math.sin(c-l)*-u,x=Math.cos(c-l)*u,l&&(h*=Po,w=Math.tan(l-h),w=Math.sqrt(1+w*w),E*=w,x*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),C*=w,T*=w)),C=Yt(C),T=Yt(T),E=Yt(E),x=Yt(x)):(C=f,x=u,T=E=0),(S&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(S=ls(d,"x",o,"px"),b=ls(d,"y",a,"px")),(g||_||p||m)&&(S=Yt(S+g-(g*C+_*E)+p),b=Yt(b+_-(g*T+_*x)+m)),(i||s)&&(w=d.getBBox(),S=Yt(S+i/100*w.width),b=Yt(b+s/100*w.height)),w="matrix("+C+","+T+","+E+","+x+","+S+","+b+")",d.setAttribute("transform",w),y&&(d.style[Ht]=w)},nv=function(e,t,n,i,s){var o=360,a=un(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Xs:1),l=c-i,h=i+l+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),f==="cw"&&l<0?l=(l+o*mm)%o-~~(l/o)*o:f==="ccw"&&l>0&&(l=(l-o*mm)%o-~~(l/o)*o)),e._pt=u=new Xn(e._pt,t,n,i,l,kx),u.e=h,u.u="deg",e._props.push(n),u},Mm=function(e,t){for(var n in t)e[n]=t[n];return e},iv=function(e,t,n){var i=Mm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,f,u,d,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=La(n,1),cs(n,Ht),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ht],o[Ht]=t,a=La(n,1),o[Ht]=l);for(c in Rr)l=i[c],h=a[c],l!==h&&s.indexOf(c)<0&&(d=wn(l),g=wn(h),f=d!==g?ls(n,c,l,g):parseFloat(l),u=parseFloat(h),e._pt=new Xn(e._pt,a,c,f,u-f,xd),e._pt.u=g||0,e._props.push(c));Mm(a,i)};Wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});al[e>1?"border"+r:r]=function(a,c,l,h,f){var u,d;if(arguments.length<4)return u=o.map(function(g){return Pr(a,g,l)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(c,d,f)}});var Ed={name:"css",register:yd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,h,f,u,d,g,_,p,m,y,S,b,C,T,E,x,w;Md||yd(),this.styles=this.styles||Em(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(ti[_]&&ud(_,t,n,i,e,s)))){if(d=typeof h,g=al[_],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Eo(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Cr.lastIndex=0,Cr.test(l)||(p=wn(l),m=wn(h),m?p!==m&&(l=ls(e,_,l,m)+m):p&&(h+=p)),this.add(a,"setProperty",l,h,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],un(l)&&~l.indexOf("random(")&&(l=Eo(l)),wn(l+"")||l==="auto"||(l+=ri.units[_]||wn(Pr(e,_))||""),(l+"").charAt(1)==="="&&(l=Pr(e,_))):l=Pr(e,_),u=parseFloat(l),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),_ in ar&&(_==="autoAlpha"&&(u===1&&Pr(e,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,a.visibility),as(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ar[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Rr,S){if(this.styles.save(_),w=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=di(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=h,h=di(e,"perspective"),P?e.style.perspective=P:cs(e,"perspective")}f=parseFloat(h)}if(b||(C=e._gsap,C.renderTransform&&!t.parseTransform||La(e,t.parseTransform),T=t.smoothOrigin!==!1&&C.smooth,b=this._pt=new Xn(this._pt,a,Ht,0,1,C.renderTransform,C,0,-1),b.dep=1),_==="scale")this._pt=new Xn(this._pt,C,"scaleY",C.scaleY,(y?Vs(C.scaleY,y+f):f)-C.scaleY||0,xd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(si,0,a[si]),h=Jx(h),C.svg?bd(e,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==C.zOrigin&&as(this,C,"zOrigin",C.zOrigin,m),as(this,a,_,cl(l),cl(h)));continue}else if(_==="svgOrigin"){bd(e,h,1,T,0,this);continue}else if(_ in Rm){nv(this,C,_,u,y?Vs(u,y+h):h);continue}else if(_==="smoothOrigin"){as(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){iv(this,h,e);continue}}else _ in a||(_=Ro(_)||_);if(S||(f||f===0)&&(u||u===0)&&!Ux.test(h)&&_ in a)p=(l+"").substr((u+"").length),f||(f=0),m=wn(h)||(_ in ri.units?ri.units[_]:p),p!==m&&(u=ls(e,_,l,m)),this._pt=new Xn(this._pt,S?C:a,_,u,(y?Vs(u,y+f):f)-u,!S&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Vx:xd),this._pt.u=m||0,S&&w!==h?(this._pt.b=l,this._pt.e=w,this._pt.r=zx):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=Bx);else if(_ in a)$x.call(this,e,_,l,y?y+h:h);else if(_ in e)this.add(e,_,l||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){nl(_,h);continue}S||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,l||e[_])),o.push(_)}}E&&gd(this)},render:function(e,t){if(t.tween._time||!Sd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pr,aliases:ar,getSetter:function(e,t,n){var i=ar[t];return i&&i.indexOf(",")<0&&(t=i),t in Rr&&t!==si&&(e._gsap.x||Pr(e,"x"))?n&&pm===n?t==="scale"?Xx:Wx:(pm=n||{})&&(t==="scale"?qx:Yx):e.style&&!tl(e.style[t])?Gx:~t.indexOf("-")?Hx:ol(e,t)},core:{_removeProperty:cs,_getMatrix:Td}};Dn.utils.checkPrefix=Ro;Dn.core.getStyleSaver=Em;(function(r,e,t,n){var i=Wn(r+","+e+","+t,function(s){Rr[s]=1});Wn(e,function(s){ri.units[s]="deg",Rm[s]=1}),ar[i[13]]=r+","+e,Wn(n,function(s){var o=s.split(":");ar[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Dn.registerPlugin(Ed);var cr=Dn.registerPlugin(Ed)||Dn,qw=cr.core.Tween;function Lm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function rv(r,e,t){return e&&Lm(r.prototype,e),t&&Lm(r,t),r}var Tn,ul,sv,fi,hs,us,Oo,Fm,Ys,Lo,Nm,Ir,zi,Um,km=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},Bm=1,Io=[],at=[],Vi=[],Fa=Date.now,Cd=function(e,t){return t},ov=function(){var e=Lo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Vi),at=n,Vi=i,Cd=function(o,a){return t[o](a)}},Lr=function(e,t){return~Vi.indexOf(e)&&Vi[Vi.indexOf(e)+1][t]},Na=function(e){return!!~Nm.indexOf(e)},Yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},qn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ll="scrollLeft",hl="scrollTop",Ad=function(){return Ir&&Ir.isPressed||at.cache++},dl=function(e,t){var n=function i(s){if(s||s===0){Bm&&(fi.history.scrollRestoration="manual");var o=Ir&&Ir.isPressed;s=i.v=Math.round(s)||(Ir&&Ir.iOS?1:0),e(s),i.cacheID=at.cache,o&&Cd("ss",s)}else(t||at.cache!==i.cacheID||Cd("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:ll,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:dl(function(r){return arguments.length?fi.scrollTo(r,on.sc()):fi.pageXOffset||hs[ll]||us[ll]||Oo[ll]||0})},on={s:hl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:dl(function(r){return arguments.length?fi.scrollTo(Fn.sc(),r):fi.pageYOffset||hs[hl]||us[hl]||Oo[hl]||0})},Kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Tn.utils.toArray)(e)[0]||(typeof e=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},av=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Or=function(e,t){var n=t.s,i=t.sc;Na(e)&&(e=hs.scrollingElement||us);var s=at.indexOf(e),o=i===on.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Yn(e,"scroll",Ad);var a=at[s+o],c=a||(at[s+o]=dl(Lr(e,n),!0)||(Na(e)?i:dl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=Tn.getProperty(e,"scrollBehavior")==="smooth"),c},fl=function(e,t,n){var i=e,s=e,o=Fa(),a=o,c=t||50,l=Math.max(500,c*3),h=function(g,_){var p=Fa();_||p-o>c?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(g){var _=a,p=s,m=Fa();return(g||g===0)&&g!==i&&h(g),o===a||m-a>l?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},Da=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Dm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},zm=function(){Lo=Tn.core.globals().ScrollTrigger,Lo&&Lo.core&&ov()},Vm=function(e){return Tn=e||km(),!ul&&Tn&&typeof document<"u"&&document.body&&(fi=window,hs=document,us=hs.documentElement,Oo=hs.body,Nm=[fi,hs,us,Oo],sv=Tn.utils.clamp,Um=Tn.core.context||function(){},Ys="onpointerenter"in Oo?"pointer":"mouse",Fm=Kt.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,zi=Kt.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Bm=0},500),ul=1),Lo||zm(),ul};Fn.op=on;at.cache=0;var Kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ul||Vm(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),Lo||zm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,S=n.onPress,b=n.onRelease,C=n.onRight,T=n.onLeft,E=n.onUp,x=n.onDown,w=n.onChangeX,P=n.onChangeY,R=n.onChange,O=n.onToggleX,G=n.onToggleY,W=n.onHover,L=n.onHoverEnd,k=n.onMove,F=n.ignoreCheck,K=n.isNormalizer,ee=n.onGestureStart,I=n.onGestureEnd,ge=n.onWheel,Ce=n.onEnable,Ze=n.onDisable,Ge=n.onClick,Ne=n.scrollSpeed,$=n.capture,ce=n.allowClicks,oe=n.lockAxis,Ie=n.onLockAxis;this.target=a=Kn(a)||us,this.vars=n,d&&(d=Tn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Ne=Ne||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(fi.getComputedStyle(Oo).lineHeight)||22);var Ve,Le,st,Ae,Xe,it,He,X=this,ut=0,zt=0,N=n.passive||!h&&n.passive!==!1,Qe=Or(a,Fn),je=Or(a,on),mt=Qe(),_e=je(),tt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&zi[0]==="pointerdown",A=Na(a),v=a.ownerDocument||hs,B=[0,0,0],j=[0,0,0],te=0,de=function(){return te=Fa()},ie=function(ue,Be){return(X.event=ue)&&d&&av(ue.target,d)||Be&&tt&&ue.pointerType!=="touch"||F&&F(ue,Be)},Y=function(){X._vx.reset(),X._vy.reset(),Le.pause(),f&&f(X)},J=function(){var ue=X.deltaX=Dm(B),Be=X.deltaY=Dm(j),re=Math.abs(ue)>=i,ze=Math.abs(Be)>=i;R&&(re||ze)&&R(X,ue,Be,B,j),re&&(C&&X.deltaX>0&&C(X),T&&X.deltaX<0&&T(X),w&&w(X),O&&X.deltaX<0!=ut<0&&O(X),ut=X.deltaX,B[0]=B[1]=B[2]=0),ze&&(x&&X.deltaY>0&&x(X),E&&X.deltaY<0&&E(X),P&&P(X),G&&X.deltaY<0!=zt<0&&G(X),zt=X.deltaY,j[0]=j[1]=j[2]=0),(Ae||st)&&(k&&k(X),st&&(p&&st===1&&p(X),y&&y(X),st=0),Ae=!1),it&&!(it=!1)&&Ie&&Ie(X),Xe&&(ge(X),Xe=!1),Ve=0},ve=function(ue,Be,re){B[re]+=ue,j[re]+=Be,X._vx.update(ue),X._vy.update(Be),l?Ve||(Ve=requestAnimationFrame(J)):J()},Ee=function(ue,Be){oe&&!He&&(X.axis=He=Math.abs(ue)>Math.abs(Be)?"x":"y",it=!0),He!=="y"&&(B[2]+=ue,X._vx.update(ue,!0)),He!=="x"&&(j[2]+=Be,X._vy.update(Be,!0)),l?Ve||(Ve=requestAnimationFrame(J)):J()},fe=function(ue){if(!ie(ue,1)){ue=Da(ue,h);var Be=ue.clientX,re=ue.clientY,ze=Be-X.x,De=re-X.y,Ke=X.isDragging;X.x=Be,X.y=re,(Ke||(ze||De)&&(Math.abs(X.startX-Be)>=s||Math.abs(X.startY-re)>=s))&&(st||(st=Ke?2:1),Ke||(X.isDragging=!0),Ee(ze,De))}},le=X.onPress=function(se){ie(se,1)||se&&se.button||(X.axis=He=null,Le.pause(),X.isPressed=!0,se=Da(se),ut=zt=0,X.startX=X.x=se.clientX,X.startY=X.y=se.clientY,X._vx.reset(),X._vy.reset(),Yn(K?a:v,zi[1],fe,N,!0),X.deltaX=X.deltaY=0,S&&S(X))},xe=X.onRelease=function(se){if(!ie(se,1)){qn(K?a:v,zi[1],fe,!0);var ue=!isNaN(X.y-X.startY),Be=X.isDragging,re=Be&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),ze=Da(se);!re&&ue&&(X._vx.reset(),X._vy.reset(),h&&ce&&Tn.delayedCall(.08,function(){if(Fa()-te>300&&!se.defaultPrevented){if(se.target.click)se.target.click();else if(v.createEvent){var De=v.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,fi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),se.target.dispatchEvent(De)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,f&&Be&&!K&&Le.restart(!0),st&&J(),m&&Be&&m(X),b&&b(X,re)}},Ye=function(ue){return ue.touches&&ue.touches.length>1&&(X.isGesturing=!0)&&ee(ue,X.isDragging)},$e=function(){return(X.isGesturing=!1)||I(X)},D=function(ue){if(!ie(ue)){var Be=Qe(),re=je();ve((Be-mt)*Ne,(re-_e)*Ne,1),mt=Be,_e=re,f&&Le.restart(!0)}},ae=function(ue){if(!ie(ue)){ue=Da(ue,h),ge&&(Xe=!0);var Be=(ue.deltaMode===1?c:ue.deltaMode===2?fi.innerHeight:1)*g;ve(ue.deltaX*Be,ue.deltaY*Be,0),f&&!K&&Le.restart(!0)}},Z=function(ue){if(!ie(ue)){var Be=ue.clientX,re=ue.clientY,ze=Be-X.x,De=re-X.y;X.x=Be,X.y=re,Ae=!0,f&&Le.restart(!0),(ze||De)&&Ee(ze,De)}},be=function(ue){X.event=ue,W(X)},he=function(ue){X.event=ue,L(X)},ne=function(ue){return ie(ue)||Da(ue,h)&&Ge(X)};Le=X._dc=Tn.delayedCall(u||.25,Y).pause(),X.deltaX=X.deltaY=0,X._vx=fl(0,50,!0),X._vy=fl(0,50,!0),X.scrollX=Qe,X.scrollY=je,X.isDragging=X.isGesturing=X.isPressed=!1,Um(this),X.enable=function(se){return X.isEnabled||(Yn(A?v:a,"scroll",Ad),o.indexOf("scroll")>=0&&Yn(A?v:a,"scroll",D,N,$),o.indexOf("wheel")>=0&&Yn(a,"wheel",ae,N,$),(o.indexOf("touch")>=0&&Fm||o.indexOf("pointer")>=0)&&(Yn(a,zi[0],le,N,$),Yn(v,zi[2],xe),Yn(v,zi[3],xe),ce&&Yn(a,"click",de,!0,!0),Ge&&Yn(a,"click",ne),ee&&Yn(v,"gesturestart",Ye),I&&Yn(v,"gestureend",$e),W&&Yn(a,Ys+"enter",be),L&&Yn(a,Ys+"leave",he),k&&Yn(a,Ys+"move",Z)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Ae=st=!1,X._vx.reset(),X._vy.reset(),mt=Qe(),_e=je(),se&&se.type&&le(se),Ce&&Ce(X)),X},X.disable=function(){X.isEnabled&&(Io.filter(function(se){return se!==X&&Na(se.target)}).length||qn(A?v:a,"scroll",Ad),X.isPressed&&(X._vx.reset(),X._vy.reset(),qn(K?a:v,zi[1],fe,!0)),qn(A?v:a,"scroll",D,$),qn(a,"wheel",ae,$),qn(a,zi[0],le,$),qn(v,zi[2],xe),qn(v,zi[3],xe),qn(a,"click",de,!0),qn(a,"click",ne),qn(v,"gesturestart",Ye),qn(v,"gestureend",$e),qn(a,Ys+"enter",be),qn(a,Ys+"leave",he),qn(a,Ys+"move",Z),X.isEnabled=X.isPressed=X.isDragging=!1,Ze&&Ze(X))},X.kill=X.revert=function(){X.disable();var se=Io.indexOf(X);se>=0&&Io.splice(se,1),Ir===X&&(Ir=0)},Io.push(X),K&&Na(a)&&(Ir=X),X.enable(_)},rv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Kt.version="3.15.0";Kt.create=function(r){return new Kt(r)};Kt.register=Vm;Kt.getAll=function(){return Io.slice()};Kt.getById=function(r){return Io.filter(function(e){return e.vars.id===r})[0]};km()&&Tn.registerPlugin(Kt);var Oe,Uo,ht,Tt,gi,St,Gd,Pl,Za,Ha,ka,pl,Nn,Ol,Fd,Zn,Gm,Hm,ko,sg,Pd,og,jn,Nd,ag,cg,ds,Ud,Hd,Bo,Wd,Wa,kd,Rd,ml=1,Un=Date.now,Id=Un(),Di=0,Ba=0,Wm=function(e,t,n){var i=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Xm=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},cv=function r(){return Ba&&requestAnimationFrame(r)},qm=function(){return Ol=1},Ym=function(){return Ol=0},lr=function(e){return e},za=function(e){return Math.round(e*1e5)/1e5||0},lg=function(){return typeof window<"u"},hg=function(){return Oe||lg()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},Qs=function(e){return!!~Gd.indexOf(e)},ug=function(e){return(e==="Height"?Wd:ht["inner"+e])||gi["client"+e]||St["client"+e]},dg=function(e){return Lr(e,"getBoundingClientRect")||(Qs(e)?function(){return Al.width=ht.innerWidth,Al.height=Wd,Al}:function(){return Dr(e)})},lv=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?ug(s):e["client"+s])||0}},hv=function(e,t){return!t||~Vi.indexOf(e)?dg(e):function(){return Al}},hr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Lr(e,n))?o()-dg(e)()[s]:Qs(e)?(gi[n]||St[n])-ug(i):e[n]-e["offset"+i])},gl=function(e,t){for(var n=0;n<ko.length;n+=3)(!t||~t.indexOf(ko[n+1]))&&e(ko[n],ko[n+1],ko[n+2])},mi=function(e){return typeof e=="string"},kn=function(e){return typeof e=="function"},Va=function(e){return typeof e=="number"},Ks=function(e){return typeof e=="object"},Ua=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Do=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Fo=Math.abs,fg="left",pg="top",Xd="right",qd="bottom",Zs="width",$s="height",Xa="Right",qa="Left",Ya="Top",Ka="Bottom",an="padding",Oi="margin",Vo="Width",Yd="Height",dn="px",Li=function(e){return ht.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},uv=function(e){var t=Li(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Km=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Dr=function(e,t){var n=t&&Li(e)[Fd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Rl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},mg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},dv=function(e){return function(t){return Oe.utils.snap(mg(e),t)}},Kd=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},fv=function(e){return function(t,n){return Kd(mg(e))(t,n.direction)}},_l=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},jm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vl={toggleActions:"play",anticipatePin:0},Il={top:0,left:0,center:.5,bottom:1,right:1},wl=function(e,t){if(mi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Il?Il[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},yl=function(e,t,n,i,s,o,a,c){var l=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,g=Tt.createElement("div"),_=Qs(n)||Lr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?St:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,S=y?l:h,b="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||c)&&_?"fixed;":"absolute;"),(p||c||!_)&&(b+=(i===on?Xd:qd)+":"+(o+parseFloat(u))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Tl(g,0,i,y),g},Tl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Vo]=1,s["border"+a+Vo]=0,s[n.p]=t+"px",Oe.set(e,s)},ct=[],Bd={},$a,Zm=function(){return Un()-Di>34&&($a||($a=requestAnimationFrame(Fr)))},No=function(){(!jn||!jn.isPressed||jn.startX>St.clientWidth)&&(at.cache++,jn?$a||($a=requestAnimationFrame(Fr)):Fr(),Di||to("scrollStart"),Di=Un())},Od=function(){cg=ht.innerWidth,ag=ht.innerHeight},Ga=function(e){at.cache++,(e===!0||!Nn&&!og&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!Nd||cg!==ht.innerWidth||Math.abs(ht.innerHeight-ag)>ht.innerHeight*.25))&&Pl.restart(!0)},eo={},pv=[],gg=function r(){return xn(nt,"scrollEnd",r)||js(!0)},to=function(e){return eo[e]&&eo[e].map(function(t){return t()})||pv},pi=[],_g=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},xg=function(){return at.forEach(function(e){return kn(e)&&++e.cacheID&&(e.rec=e())})},jd=function(e,t){var n;for(Zn=0;Zn<ct.length;Zn++)n=ct[Zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Wa=!0,t&&_g(t),t||to("revert")},vg=function(e,t){at.cache++,(t||!$n)&&at.forEach(function(n){return kn(n)&&n.cacheID++&&(n.rec=0)}),mi(e)&&(ht.history.scrollRestoration=Hd=e)},$n,Js=0,$m,mv=function(){if($m!==Js){var e=$m=Js;requestAnimationFrame(function(){return e===Js&&js(!0)})}},yg=function(){St.appendChild(Bo),Wd=!jn&&Bo.offsetHeight||ht.innerHeight,St.removeChild(Bo)},Jm=function(e){return Za(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},js=function(e,t){if(gi=Tt.documentElement,St=Tt.body,Gd=[ht,Tt,gi,St],Di&&!e&&!Wa){vn(nt,"scrollEnd",gg);return}yg(),$n=nt.isRefreshing=!0,Wa||xg();var n=to("refreshInit");sg&&nt.sort(),t||jd(),at.forEach(function(i){kn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),Wa=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),kd=1,Jm(!0),ct.forEach(function(i){var s=hr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Jm(!1),kd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){kn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),vg(Hd,1),Pl.pause(),Js++,$n=2,Fr(2),ct.forEach(function(i){return kn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=nt.isRefreshing=!1,to("refresh")},zd=0,El=1,ja,Fr=function(e){if(e===2||!$n&&!Wa){nt.isUpdating=!0,ja&&ja.update(0);var t=ct.length,n=Un(),i=n-Id>=50,s=t&&ct[0].scroll();if(El=zd>s?-1:1,$n||(zd=s),i&&(Di&&!Ol&&n-Di>200&&(Di=0,to("scrollEnd")),ka=Id,Id=n),El<0){for(Zn=t;Zn-- >0;)ct[Zn]&&ct[Zn].update(0,i);El=1}else for(Zn=0;Zn<t;Zn++)ct[Zn]&&ct[Zn].update(0,i);nt.isUpdating=!1}$a=0},Vd=[fg,pg,qd,Xd,Oi+Ka,Oi+Xa,Oi+Ya,Oi+qa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cl=Vd.concat([Zs,$s,"boxSizing","max"+Vo,"max"+Yd,"position",Oi,an,an+Ya,an+Xa,an+Ka,an+qa]),gv=function(e,t,n){zo(n);var i=e._gsap;if(i.spacerIsNative)zo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ld=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Vd.length,o=t.style,a=e.style,c;s--;)c=Vd[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[qd]=a[Xd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zs]=Rl(e,Fn)+dn,o[$s]=Rl(e,on)+dn,o[an]=a[Oi]=a[pg]=a[fg]="0",zo(i),a[Zs]=a["max"+Vo]=n[Zs],a[$s]=a["max"+Yd]=n[$s],a[an]=n[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_v=/([A-Z])/g,zo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(_v,"-$1").toLowerCase())}},bl=function(e){for(var t=Cl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Cl[s],n[Cl[s]]);return i.t=e,i},xv=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Al={left:0,top:0},Qm=function(e,t,n,i,s,o,a,c,l,h,f,u,d,g){kn(e)&&(e=e(c)),mi(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?wl("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),Va(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,e)),a&&Tl(a,n,i,!0);else{kn(t)&&(t=t(c));var S=(e||"0").split(" "),b,C,T,E;y=Kn(t,c)||St,b=Dr(y)||{},(!b||!b.left&&!b.top)&&Li(y).display==="none"&&(E=y.style.display,y.style.display="block",b=Dr(y),E?y.style.display=E:y.style.removeProperty("display")),C=wl(S[0],b[i.d]),T=wl(S[1]||"0",n),e=b[i.p]-l[i.p]-h+C+s-T,a&&Tl(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(c[g]=e||-.001,e<0&&(e=0)),o){var x=e+n,w=o._isStart;p="scroll"+i.d2,Tl(o,x,i,w&&x>20||!w&&(f?Math.max(St[p],gi[p]):o.parentNode[p])<=x+1),f&&(l=Dr(a),f&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+dn))}return d&&y&&(p=Dr(y),d.seek(u),m=Dr(y),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*u),d&&d.seek(_),d?e:Math.round(e)},vv=/(webkit|moz|length|cssText|inset)/i,eg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Li(e);for(o in a)!+o&&!vv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},bg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ml=function(e,t,n){var i={};i[t.p]="+="+n,Oe.set(e,i)},tg=function(e,t){var n=Or(e,t),i="_scroll"+t.p2,s=function o(a,c,l,h,f){var u=o.tween,d=c.onComplete,g={};l=l||n();var _=bg(n,l,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-l,u&&u.kill(),c[i]=a,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+h*u.ratio+f*u.ratio*u.ratio)},c.onUpdate=function(){at.cache++,o.tween&&Fr()},c.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=Oe.to(e,c),u};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",n.wheelHandler),nt.isTouch&&vn(e,"touchmove",n.wheelHandler),s},nt=(function(){function r(t,n){Uo||r.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ud(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ba){this.update=this.refresh=this.kill=lr;return}n=Km(mi(n)||Va(n)||n.nodeType?{trigger:n}:n,vl);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,S=s.once,b=s.snap,C=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:on,R=!f&&f!==0,O=Kn(n.scroller||ht),G=Oe.core.getCache(O),W=Qs(O),L=("pinType"in n?n.pinType:Lr(O,"pinType")||W&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=R&&n.toggleActions.split(" "),K="markers"in n?n.markers:vl.markers,ee=W?0:parseFloat(Li(O)["border"+P.p2+Vo])||0,I=this,ge=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Ce=lv(O,W,P),Ze=hv(O,W),Ge=0,Ne=0,$=0,ce=Or(O,P),oe,Ie,Ve,Le,st,Ae,Xe,it,He,X,ut,zt,N,Qe,je,mt,_e,tt,A,v,B,j,te,de,ie,Y,J,ve,Ee,fe,le,xe,Ye,$e,D,ae,Z,be,he;if(I._startClamp=I._endClamp=!1,I._dir=P,p*=45,I.scroller=O,I.scroll=E?E.time.bind(E):ce,Le=ce(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(sg=1,n.refreshPriority===-9999&&(ja=I)),G.tweenScroll=G.tweenScroll||{top:tg(O,on),left:tg(O,Fn)},I.tweenTo=oe=G.tweenScroll[P.p],I.scrubDuration=function(re){Ye=Va(re)&&re,Ye?xe?xe.duration(re):xe=Oe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ye,paused:!0,onComplete:function(){return m&&m(I)}}):(xe&&xe.progress(1).kill(),xe=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),fe=0,c||(c=i.vars.id)),b&&((!Ks(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in St.style&&Oe.set(W?[St,gi]:O,{scrollBehavior:"auto"}),at.forEach(function(re){return kn(re)&&re.target===(W?Tt.scrollingElement||gi:O)&&(re.smooth=!1)}),Ve=kn(b.snapTo)?b.snapTo:b.snapTo==="labels"?dv(i):b.snapTo==="labelsDirectional"?fv(i):b.directional!==!1?function(re,ze){return Kd(b.snapTo)(re,Un()-Ne<500?0:ze.direction)}:Oe.utils.snap(b.snapTo),$e=b.duration||{min:.1,max:2},$e=Ks($e)?Ha($e.min,$e.max):Ha($e,$e),D=Oe.delayedCall(b.delay||Ye/2||.1,function(){var re=ce(),ze=Un()-Ne<500,De=oe.tween;if((ze||Math.abs(I.getVelocity())<10)&&!De&&!Ol&&Ge!==re){var Ke=(re-Ae)/Qe,rn=i&&!R?i.totalProgress():Ke,lt=ze?0:(rn-le)/(Un()-ka)*1e3||0,Ut=Oe.utils.clamp(-Ke,1-Ke,Fo(lt/2)*lt/.185),kt=Ke+(b.inertia===!1?0:Ut),Dt,At,bt=b,An=bt.onStart,Ft=bt.onInterrupt,mn=bt.onComplete;if(Dt=Ve(kt,I),Va(Dt)||(Dt=kt),At=Math.max(0,Math.round(Ae+Dt*Qe)),re<=Xe&&re>=Ae&&At!==re){if(De&&!De._initted&&De.data<=Fo(At-re))return;b.inertia===!1&&(Ut=Dt-Ke),oe(At,{duration:$e(Fo(Math.max(Fo(kt-rn),Fo(Dt-rn))*.185/lt/.05||0)),ease:b.ease||"power3",data:Fo(At-re),onInterrupt:function(){return D.restart(!0)&&Ft&&Do(I,Ft)},onComplete:function(){I.update(),Ge=ce(),i&&!R&&(xe?xe.resetTo("totalProgress",Dt,i._tTime/i._tDur):i.progress(Dt)),fe=le=i&&!R?i.totalProgress():I.progress,y&&y(I),mn&&Do(I,mn)}},re,Ut*Qe,At-re-Ut*Qe),An&&Do(I,An,oe.tween)}}else I.isActive&&Ge!==re&&D.restart(!0)}).pause()),c&&(Bd[c]=I),u=I.trigger=Kn(u||d!==!0&&d),he=u&&u._gsap&&u._gsap.stRevert,he&&(he=he(I)),d=d===!0?u:Kn(d),mi(a)&&(a={targets:u,className:a}),d&&(g===!1||g===Oi||(g=!g&&d.parentNode&&d.parentNode.style&&Li(d.parentNode).display==="flex"?!1:an),I.pin=d,Ie=Oe.core.getCache(d),Ie.spacer?je=Ie.pinState:(T&&(T=Kn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ie.spacerIsNative=!!T,T&&(Ie.spacerState=bl(T))),Ie.spacer=tt=T||Tt.createElement("div"),tt.classList.add("pin-spacer"),c&&tt.classList.add("pin-spacer-"+c),Ie.pinState=je=bl(d)),n.force3D!==!1&&Oe.set(d,{force3D:!0}),I.spacer=tt=Ie.spacer,Ee=Li(d),de=Ee[g+P.os2],v=Oe.getProperty(d),B=Oe.quickSetter(d,P.a,dn),Ld(d,tt,Ee),_e=bl(d)),K){zt=Ks(K)?Km(K,jm):jm,X=yl("scroller-start",c,O,P,zt,0),ut=yl("scroller-end",c,O,P,zt,0,X),A=X["offset"+P.op.d2];var ne=Kn(Lr(O,"content")||O);it=this.markerStart=yl("start",c,ne,P,zt,A,0,E),He=this.markerEnd=yl("end",c,ne,P,zt,A,0,E),E&&(be=Oe.quickSetter([it,He],P.a,dn)),!L&&!(Vi.length&&Lr(O,"fixedMarkers")===!0)&&(uv(W?St:O),Oe.set([X,ut],{force3D:!0}),Y=Oe.quickSetter(X,P.a,dn),ve=Oe.quickSetter(ut,P.a,dn))}if(E){var se=E.vars.onUpdate,ue=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){I.update(0,0,1),se&&se.apply(E,ue||[])})}if(I.previous=function(){return ct[ct.indexOf(I)-1]},I.next=function(){return ct[ct.indexOf(I)+1]},I.revert=function(re,ze){if(!ze)return I.kill(!0);var De=re!==!1||!I.enabled,Ke=Nn;De!==I.isReverted&&(De&&(ae=Math.max(ce(),I.scroll.rec||0),$=I.progress,Z=i&&i.progress()),it&&[it,He,X,ut].forEach(function(rn){return rn.style.display=De?"none":"block"}),De&&(Nn=I,I.update(De)),d&&(!C||!I.isActive)&&(De?gv(d,tt,je):Ld(d,tt,Li(d),ie)),De||I.update(De),Nn=Ke,I.isReverted=De)},I.refresh=function(re,ze,De,Ke){if(!((Nn||!I.enabled)&&!ze)){if(d&&re&&Di){vn(r,"scrollEnd",gg);return}!$n&&ge&&ge(I),Nn=I,oe.tween&&!De&&(oe.tween.kill(),oe.tween=0),xe&&xe.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Me){return Me.vars.immediateRender&&Me.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var rn=Ce(),lt=Ze(),Ut=E?E.duration():hr(O,P),kt=Qe<=.01||!Qe,Dt=0,At=Ke||0,bt=Ks(De)?De.end:n.end,An=n.endTrigger||u,Ft=Ks(De)?De.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),mn=I.pinnedContainer=n.pinnedContainer&&Kn(n.pinnedContainer,I),oi=u&&Math.max(0,ct.indexOf(I))||0,sn=oi,hn,gn,Mr,_o,_n,Jt,Ti,M,U,q,z,V,ye;for(K&&Ks(De)&&(V=Oe.getProperty(X,P.p),ye=Oe.getProperty(ut,P.p));sn-- >0;)Jt=ct[sn],Jt.end||Jt.refresh(0,1)||(Nn=I),Ti=Jt.pin,Ti&&(Ti===u||Ti===d||Ti===mn)&&!Jt.isReverted&&(q||(q=[]),q.unshift(Jt),Jt.revert(!0,!0)),Jt!==ct[sn]&&(oi--,sn--);for(kn(Ft)&&(Ft=Ft(I)),Ft=Wm(Ft,"start",I),Ae=Qm(Ft,u,rn,P,ce(),it,X,I,lt,ee,L,Ut,E,I._startClamp&&"_startClamp")||(d?-.001:0),kn(bt)&&(bt=bt(I)),mi(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(mi(Ft)?Ft.split(" ")[0]:"")+bt:(Dt=wl(bt.substr(2),rn),bt=mi(Ft)?Ft:(E?Oe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ae):Ae)+Dt,An=u)),bt=Wm(bt,"end",I),Xe=Math.max(Ae,Qm(bt||(An?"100% 0":Ut),An,rn,P,ce()+Dt,He,ut,I,lt,ee,L,Ut,E,I._endClamp&&"_endClamp"))||-.001,Dt=0,sn=oi;sn--;)Jt=ct[sn]||{},Ti=Jt.pin,Ti&&Jt.start-Jt._pinPush<=Ae&&!E&&Jt.end>0&&(hn=Jt.end-(I._startClamp?Math.max(0,Jt.start):Jt.start),(Ti===u&&Jt.start-Jt._pinPush<Ae||Ti===mn)&&isNaN(Ft)&&(Dt+=hn*(1-Jt.progress)),Ti===d&&(At+=hn));if(Ae+=Dt,Xe+=Dt,I._startClamp&&(I._startClamp+=Dt),I._endClamp&&!$n&&(I._endClamp=Xe||-.001,Xe=Math.min(Xe,hr(O,P))),Qe=Xe-Ae||(Ae-=.01)&&.001,kt&&($=Oe.utils.clamp(0,1,Oe.utils.normalize(Ae,Xe,ae))),I._pinPush=At,it&&Dt&&(hn={},hn[P.a]="+="+Dt,mn&&(hn[P.p]="-="+ce()),Oe.set([it,He],hn)),d&&!(kd&&I.end>=hr(O,P)))hn=Li(d),_o=P===on,Mr=ce(),j=parseFloat(v(P.a))+At,!Ut&&Xe>1&&(z=(W?Tt.scrollingElement||gi:O).style,z={style:z,value:z["overflow"+P.a.toUpperCase()]},W&&Li(St)["overflow"+P.a.toUpperCase()]!=="scroll"&&(z.style["overflow"+P.a.toUpperCase()]="scroll")),Ld(d,tt,hn),_e=bl(d),gn=Dr(d,!0),M=L&&Or(O,_o?Fn:on)(),g?(ie=[g+P.os2,Qe+At+dn],ie.t=tt,sn=g===an?Rl(d,P)+Qe+At:0,sn&&(ie.push(P.d,sn+dn),tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=sn+dn)),zo(ie),mn&&ct.forEach(function(Me){Me.pin===mn&&Me.vars.pinSpacing!==!1&&(Me._subPinOffset=!0)}),L&&ce(ae)):(sn=Rl(d,P),sn&&tt.style.flexBasis!=="auto"&&(tt.style.flexBasis=sn+dn)),L&&(_n={top:gn.top+(_o?Mr-Ae:M)+dn,left:gn.left+(_o?M:Mr-Ae)+dn,boxSizing:"border-box",position:"fixed"},_n[Zs]=_n["max"+Vo]=Math.ceil(gn.width)+dn,_n[$s]=_n["max"+Yd]=Math.ceil(gn.height)+dn,_n[Oi]=_n[Oi+Ya]=_n[Oi+Xa]=_n[Oi+Ka]=_n[Oi+qa]="0",_n[an]=hn[an],_n[an+Ya]=hn[an+Ya],_n[an+Xa]=hn[an+Xa],_n[an+Ka]=hn[an+Ka],_n[an+qa]=hn[an+qa],mt=xv(je,_n,C),$n&&ce(0)),i?(U=i._initted,Pd(1),i.render(i.duration(),!0,!0),te=v(P.a)-j+Qe+At,J=Math.abs(Qe-te)>1,L&&J&&mt.splice(mt.length-2,2),i.render(0,!0,!0),U||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Pd(0)):te=Qe,z&&(z.value?z.style["overflow"+P.a.toUpperCase()]=z.value:z.style.removeProperty("overflow-"+P.a));else if(u&&ce()&&!E)for(gn=u.parentNode;gn&&gn!==St;)gn._pinOffset&&(Ae-=gn._pinOffset,Xe-=gn._pinOffset),gn=gn.parentNode;q&&q.forEach(function(Me){return Me.revert(!1,!0)}),I.start=Ae,I.end=Xe,Le=st=$n?ae:ce(),!E&&!$n&&(Le<ae&&ce(ae),I.scroll.rec=0),I.revert(!1,!0),Ne=Un(),D&&(Ge=-1,D.restart(!0)),Nn=0,i&&R&&(i._initted||Z)&&i.progress()!==Z&&i.progress(Z||0,!0).render(i.time(),!0,!0),(kt||$!==I.progress||E||_||i&&!i._initted)&&(i&&!R&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ae<-.001&&!$?Oe.utils.normalize(Ae,Xe,0):$,!0),I.progress=kt||(Le-Ae)/Qe===$?0:$),d&&g&&(tt._pinOffset=Math.round(I.progress*te)),xe&&xe.invalidate(),isNaN(V)||(V-=Oe.getProperty(X,P.p),ye-=Oe.getProperty(ut,P.p),Ml(X,P,V),Ml(it,P,V-(Ke||0)),Ml(ut,P,ye),Ml(He,P,ye-(Ke||0))),kt&&!$n&&I.update(),h&&!$n&&!N&&(N=!0,h(I),N=!1)}},I.getVelocity=function(){return(ce()-st)/(Un()-ka)*1e3||0},I.endAnimation=function(){Ua(I.callbackAnimation),i&&(xe?xe.progress(1):i.paused()?R||Ua(i,I.direction<0,1):Ua(i,i.reversed()))},I.labelToScroll=function(re){return i&&i.labels&&(Ae||I.refresh()||Ae)+i.labels[re]/i.duration()*Qe||0},I.getTrailing=function(re){var ze=ct.indexOf(I),De=I.direction>0?ct.slice(0,ze).reverse():ct.slice(ze+1);return(mi(re)?De.filter(function(Ke){return Ke.vars.preventOverlaps===re}):De).filter(function(Ke){return I.direction>0?Ke.end<=Ae:Ke.start>=Xe})},I.update=function(re,ze,De){if(!(E&&!De&&!re)){var Ke=$n===!0?ae:I.scroll(),rn=re?0:(Ke-Ae)/Qe,lt=rn<0?0:rn>1?1:rn||0,Ut=I.progress,kt,Dt,At,bt,An,Ft,mn,oi;if(ze&&(st=Le,Le=E?ce():Ke,b&&(le=fe,fe=i&&!R?i.totalProgress():lt)),p&&d&&!Nn&&!ml&&Di&&(!lt&&Ae<Ke+(Ke-st)/(Un()-ka)*p?lt=1e-4:lt===1&&Xe>Ke+(Ke-st)/(Un()-ka)*p&&(lt=.9999)),lt!==Ut&&I.enabled){if(kt=I.isActive=!!lt&&lt<1,Dt=!!Ut&&Ut<1,Ft=kt!==Dt,An=Ft||!!lt!=!!Ut,I.direction=lt>Ut?1:-1,I.progress=lt,An&&!Nn&&(At=lt&&!Ut?0:lt===1?1:Ut===1?2:3,R&&(bt=!Ft&&F[At+1]!=="none"&&F[At+1]||F[At],oi=i&&(bt==="complete"||bt==="reset"||bt in i))),w&&(Ft||oi)&&(oi||f||!i)&&(kn(w)?w(I):I.getTrailing(w).forEach(function(Mr){return Mr.endAnimation()})),R||(xe&&!Nn&&!ml?(xe._dp._time-xe._start!==xe._time&&xe.render(xe._dp._time-xe._start),xe.resetTo?xe.resetTo("totalProgress",lt,i._tTime/i._tDur):(xe.vars.totalProgress=lt,xe.invalidate().restart())):i&&i.totalProgress(lt,!!(Nn&&(Ne||re)))),d){if(re&&g&&(tt.style[g+P.os2]=de),!L)B(za(j+te*lt));else if(An){if(mn=!re&&lt>Ut&&Xe+1>Ke&&Ke+1>=hr(O,P),C)if(!re&&(kt||mn)){var sn=Dr(d,!0),hn=Ke-Ae;eg(d,St,sn.top+(P===on?hn:0)+dn,sn.left+(P===on?0:hn)+dn)}else eg(d,tt);zo(kt||mn?mt:_e),J&&lt<1&&kt||B(j+(lt===1&&!mn?te:0))}}b&&!oe.tween&&!Nn&&!ml&&D.restart(!0),a&&(Ft||S&&lt&&(lt<1||!Rd))&&Za(a.targets).forEach(function(Mr){return Mr.classList[kt||S?"add":"remove"](a.className)}),o&&!R&&!re&&o(I),An&&!Nn?(R&&(oi&&(bt==="complete"?i.pause().totalProgress(1):bt==="reset"?i.restart(!0).pause():bt==="restart"?i.restart(!0):i[bt]()),o&&o(I)),(Ft||!Rd)&&(l&&Ft&&Do(I,l),k[At]&&Do(I,k[At]),S&&(lt===1?I.kill(!1,1):k[At]=0),Ft||(At=lt===1?1:3,k[At]&&Do(I,k[At]))),x&&!kt&&Math.abs(I.getVelocity())>(Va(x)?x:2500)&&(Ua(I.callbackAnimation),xe?xe.progress(1):Ua(i,bt==="reverse"?1:!lt,1))):R&&o&&!Nn&&o(I)}if(ve){var gn=E?Ke/E.duration()*(E._caScrollDist||0):Ke;Y(gn+(X._isFlipped?1:0)),ve(gn)}be&&be(-Ke/E.duration()*(E._caScrollDist||0))}},I.enable=function(re,ze){I.enabled||(I.enabled=!0,vn(O,"resize",Ga),W||vn(O,"scroll",No),ge&&vn(r,"refreshInit",ge),re!==!1&&(I.progress=$=0,Le=st=Ge=ce()),ze!==!1&&I.refresh())},I.getTween=function(re){return re&&oe?oe.tween:xe},I.setPositions=function(re,ze,De,Ke){if(E){var rn=E.scrollTrigger,lt=E.duration(),Ut=rn.end-rn.start;re=rn.start+Ut*re/lt,ze=rn.start+Ut*ze/lt}I.refresh(!1,!1,{start:Xm(re,De&&!!I._startClamp),end:Xm(ze,De&&!!I._endClamp)},Ke),I.update()},I.adjustPinSpacing=function(re){if(ie&&re){var ze=ie.indexOf(P.d)+1;ie[ze]=parseFloat(ie[ze])+re+dn,ie[1]=parseFloat(ie[1])+re+dn,zo(ie)}},I.disable=function(re,ze){if(re!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,ze||xe&&xe.pause(),ae=0,Ie&&(Ie.uncache=1),ge&&xn(r,"refreshInit",ge),D&&(D.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!W)){for(var De=ct.length;De--;)if(ct[De].scroller===O&&ct[De]!==I)return;xn(O,"resize",Ga),W||xn(O,"scroll",No)}},I.kill=function(re,ze){I.disable(re,ze),xe&&!ze&&xe.kill(),c&&delete Bd[c];var De=ct.indexOf(I);De>=0&&ct.splice(De,1),De===Zn&&El>0&&Zn--,De=0,ct.forEach(function(Ke){return Ke.scroller===I.scroller&&(De=1)}),De||$n||(I.scroll.rec=0),i&&(i.scrollTrigger=null,re&&i.revert({kill:!1}),ze||i.kill()),it&&[it,He,X,ut].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),ja===I&&(ja=0),d&&(Ie&&(Ie.uncache=1),De=0,ct.forEach(function(Ke){return Ke.pin===d&&De++}),De||(Ie.spacer=0)),n.onKill&&n.onKill(I)},ct.push(I),I.enable(!1,!1),he&&he(I),i&&i.add&&!Qe){var Be=I.update;I.update=function(){I.update=Be,at.cache++,Ae||Xe||I.refresh()},Oe.delayedCall(.01,I.update),Qe=.01,Ae=Xe=0}else I.refresh();d&&mv()},r.register=function(n){return Uo||(Oe=n||hg(),lg()&&window.document&&r.enable(),Uo=Ba),Uo},r.defaults=function(n){if(n)for(var i in n)vl[i]=n[i];return vl},r.disable=function(n,i){Ba=0,ct.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(ht,"wheel",No),xn(Tt,"scroll",No),clearInterval(pl),xn(Tt,"touchcancel",lr),xn(St,"touchstart",lr),_l(xn,Tt,"pointerdown,touchstart,mousedown",qm),_l(xn,Tt,"pointerup,touchend,mouseup",Ym),Pl.kill(),gl(xn);for(var s=0;s<at.length;s+=3)xl(xn,at[s],at[s+1]),xl(xn,at[s],at[s+2])},r.enable=function(){if(ht=window,Tt=document,gi=Tt.documentElement,St=Tt.body,Oe){if(Za=Oe.utils.toArray,Ha=Oe.utils.clamp,Ud=Oe.core.context||lr,Pd=Oe.core.suppressOverwrites||lr,Hd=ht.history.scrollRestoration||"auto",zd=ht.pageYOffset||0,Oe.core.globals("ScrollTrigger",r),St){Ba=1,Bo=document.createElement("div"),Bo.style.height="100vh",Bo.style.position="absolute",yg(),cv(),Kt.register(Oe),r.isTouch=Kt.isTouch,ds=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Nd=Kt.isTouch===1,vn(ht,"wheel",No),Gd=[ht,Tt,gi,St],Oe.matchMedia?(r.matchMedia=function(h){var f=Oe.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},Oe.addEventListener("matchMediaInit",function(){xg(),jd()}),Oe.addEventListener("matchMediaRevert",function(){return _g()}),Oe.addEventListener("matchMedia",function(){js(0,1),to("matchMedia")}),Oe.matchMedia().add("(orientation: portrait)",function(){return Od(),Od})):console.warn("Requires GSAP 3.11.0 or later"),Od(),vn(Tt,"scroll",No);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,o=Oe.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Dr(St),on.m=Math.round(a.top+on.sc())||0,Fn.m=Math.round(a.left+Fn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),pl=setInterval(Zm,250),Oe.delayedCall(.5,function(){return ml=0}),vn(Tt,"touchcancel",lr),vn(St,"touchstart",lr),_l(vn,Tt,"pointerdown,touchstart,mousedown",qm),_l(vn,Tt,"pointerup,touchend,mouseup",Ym),Fd=Oe.utils.checkPrefix("transform"),Cl.push(Fd),Uo=Un(),Pl=Oe.delayedCall(.2,js).pause(),ko=[Tt,"visibilitychange",function(){var h=ht.innerWidth,f=ht.innerHeight;Tt.hidden?(Gm=h,Hm=f):(Gm!==h||Hm!==f)&&Ga()},Tt,"DOMContentLoaded",js,ht,"load",js,ht,"resize",Ga],gl(vn),ct.forEach(function(h){return h.enable(0,1)}),c=0;c<at.length;c+=3)xl(xn,at[c],at[c+1]),xl(xn,at[c],at[c+2])}else if(Tt){var l=function h(){r.enable(),Tt.removeEventListener("DOMContentLoaded",h)};Tt.addEventListener("DOMContentLoaded",l)}}},r.config=function(n){"limitCallbacks"in n&&(Rd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(pl)||(pl=i)&&setInterval(Zm,i),"ignoreMobileResize"in n&&(Nd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gl(xn)||gl(vn,n.autoRefreshEvents||"none"),og=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Kn(n),o=at.indexOf(s),a=Qs(s);~o&&at.splice(o,a?6:2),i&&(a?Vi.unshift(ht,i,St,i,gi,i):Vi.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(mi(n)?Kn(n):n).getBoundingClientRect(),a=o[s?Zs:$s]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){mi(n)&&(n=Kn(n));var o=n.getBoundingClientRect(),a=o[s?Zs:$s],c=i==null?a/2:i in Il?Il[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/ht.innerWidth:(o.top+c)/ht.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=eo.killAll||[];eo={},i.forEach(function(s){return s()})}},r})();nt.version="3.15.0";nt.saveStyles=function(r){return r?Za(r).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Ud())}}):pi};nt.revert=function(r,e){return jd(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?Ga(!0):(Uo||nt.register())&&js(!0)};nt.update=function(r){return++at.cache&&Fr(r===!0?2:0)};nt.clearScrollMemory=vg;nt.maxScroll=function(r,e){return hr(r,e?Fn:on)};nt.getScrollFunc=function(r,e){return Or(Kn(r),e?Fn:on)};nt.getById=function(r){return Bd[r]};nt.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Di};nt.snapDirectional=Kd;nt.addEventListener=function(r,e){var t=eo[r]||(eo[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=eo[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,h){var f=[],u=[],d=Oe.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),u.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&kn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return kn(s)&&(s=s(),vn(nt,"refresh",function(){return s=e.batchMax()})),Za(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(nt.create(l))}),t};var ng=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Dd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===gi&&r(St,t)},Sl={auto:1,scroll:1},yv=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=Un(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sl[(c=Li(s)).overflowY]||Sl[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Qs(s)&&(Sl[(c=Li(s)).overflowY]||Sl[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Mg=function(e,t,n,i){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&yv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(Tt,Kt.eventTypes[0],rg,!1,!0)},onDisable:function(){return xn(Tt,Kt.eventTypes[0],rg,!0)}})},bv=/(input|label|select|textarea)/i,ig,rg=function(e){var t=bv.test(e.target.tagName);(t||ig)&&(e._gsapAllow=!0,ig=t)},Mv=function(e){Ks(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=Kn(e.target)||gi,h=Oe.core.globals().ScrollSmoother,f=h&&h.get(),u=ds&&(e.content&&Kn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Or(l,on),g=Or(l,Fn),_=1,p=(Kt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,m=0,y=kn(i)?function(){return i(a)}:function(){return i||2.8},S,b,C=Mg(l,e.type,!0,s),T=function(){return b=!1},E=lr,x=lr,w=function(){c=hr(l,on),x=Ha(ds?1:0,c),n&&(E=Ha(0,hr(l,Fn))),S=Js},P=function(){u._gsap.y=za(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(b){requestAnimationFrame(T);var K=za(a.deltaY/2),ee=x(d.v-K);if(u&&ee!==d.v+d.offset){d.offset=ee-d.v;var I=za((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",u._gsap.y=I+"px",d.cacheID=at.cache,Fr()}return!0}d.offset&&P(),b=!0},O,G,W,L,k=function(){w(),O.isActive()&&O.vars.scrollY>c&&(d()>c?O.progress(1)&&d(c):O.resetTo("scrollY",c))};return u&&Oe.set(u,{y:"+=0"}),e.ignoreCheck=function(F){return ds&&F.type==="touchmove"&&R(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){b=!1;var F=_;_=za((ht.visualViewport&&ht.visualViewport.scale||1)/p),O.pause(),F!==_&&Dd(l,_>1.01?!0:n?!1:"x"),G=g(),W=d(),w(),S=Js},e.onRelease=e.onGestureStart=function(F,K){if(d.offset&&P(),!K)L.restart(!0);else{at.cache++;var ee=y(),I,ge;n&&(I=g(),ge=I+ee*.05*-F.velocityX/.227,ee*=ng(g,I,ge,hr(l,Fn)),O.vars.scrollX=E(ge)),I=d(),ge=I+ee*.05*-F.velocityY/.227,ee*=ng(d,I,ge,hr(l,on)),O.vars.scrollY=x(ge),O.invalidate().duration(ee).play(.01),(ds&&O.vars.scrollY>=c||I>=c-1)&&Oe.to({},{onUpdate:k,duration:ee})}o&&o(F)},e.onWheel=function(){O._ts&&O.pause(),Un()-m>1e3&&(S=0,m=Un())},e.onChange=function(F,K,ee,I,ge){if(Js!==S&&w(),K&&n&&g(E(I[2]===K?G+(F.startX-F.x):g()+K-I[1])),ee){d.offset&&P();var Ce=ge[2]===ee,Ze=Ce?W+F.startY-F.y:d()+ee-ge[1],Ge=x(Ze);Ce&&Ze!==Ge&&(W+=Ge-Ze),d(Ge)}(ee||K)&&Fr()},e.onEnable=function(){Dd(l,n?!1:"x"),nt.addEventListener("refresh",k),vn(ht,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Dd(l,!0),xn(ht,"resize",k),nt.removeEventListener("refresh",k),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Kt(e),a.iOS=ds,ds&&!d()&&d(1),ds&&Oe.ticker.add(lr),L=a._dc,O=Oe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bg(d,d(),function(){return O.pause()})},onUpdate:Fr,onComplete:L.vars.onComplete}),a};nt.sort=function(r){if(kn(r))return ct.sort(r);var e=ht.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new Kt(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return jn;if(r===!0&&jn)return jn.enable();if(r===!1){jn&&jn.kill(),jn=r;return}var e=r instanceof Kt?r:Mv(r);return jn&&jn.target===e.target&&jn.kill(),Qs(e.target)&&(jn=e),e};nt.core={_getVelocityProp:fl,_inputObserver:Mg,_scrollers:at,_proxies:Vi,bridge:{ss:function(){Di||to("scrollStart"),Di=Un()},ref:function(){return Nn}}};hg()&&Oe.registerPlugin(nt);var Bn,Tg,Nr,ur,fs,Eg,Go,Ll,Cg=function(){return typeof window<"u"},Ag=function(){return Bn||Cg()&&(Bn=window.gsap)&&Bn.registerPlugin&&Bn},Pg=function(e){return typeof e=="string"},Sg=function(e){return typeof e=="function"},Ja=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===Nr||e===ur||e===fs?Math.max(ur[i],fs[i])-(Nr["inner"+n]||ur[s]||fs[s]):e[i]-e["offset"+n]},Qa=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Nr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=ur[n]!=null?ur:fs),function(){return e[n]}},Sv=function(e,t,n,i){if(Sg(e)&&(e=e(t,n,i)),typeof e!="object")return Pg(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Sg(e[o])?e[o](t,n,i):e[o];return s},Rg=function(e,t){if(e=Eg(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Nr||t===fs,s=i?{top:ur.clientTop-(Nr.pageYOffset||ur.scrollTop||fs.scrollTop||0),left:ur.clientLeft-(Nr.pageXOffset||ur.scrollLeft||fs.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=Qa(t,"x")(),o.y+=Qa(t,"y")()),o},wg=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:Pg(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?Ja(t,n)-s:Math.min(Ja(t,n),Rg(e,t)[n]-s)},Zd=function(){Bn=Ag(),Cg()&&Bn&&typeof document<"u"&&document.body&&(Nr=window,fs=document.body,ur=document.documentElement,Eg=Bn.utils.toArray,Bn.config({autoKillThreshold:7}),Go=Bn.config(),Tg=1)},no={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){Bn=e,Zd()},init:function(e,t,n,i,s){Tg||Zd();var o=this,a=Bn.getProperty(e,"scrollSnapType");o.isWin=e===Nr,o.target=e,o.tween=n,t=Sv(t,i,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Go).autoKill,o.getX=Qa(e,"x"),o.getY=Qa(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Ll||(Ll=Bn.core.globals().ScrollTrigger),Bn.getProperty(e,"scrollBehavior")==="smooth"&&Bn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,wg(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,wg(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,c=t.yPrev,l=t.isWin,h=t.snap,f=t.snapInline,u,d,g,_,p;n;)n.r(e,n.d),n=n._next;u=l||!t.skipX?t.getX():a,d=l||!t.skipY?t.getY():c,g=d-c,_=u-a,p=Go.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&u<Ja(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&d<Ja(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),l?Nr.scrollTo(t.skipX?u:t.x,t.skipY?d:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),h&&(e===1||e===0)&&(d=i.scrollTop,u=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=d+1,i.scrollLeft=u+1,i.scrollTop=d,i.scrollLeft=u),t.xPrev=t.x,t.yPrev=t.y,Ll&&Ll.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};no.max=Ja;no.getOffset=Rg;no.buildGetter=Qa;no.config=function(r){Go||Zd()||(Go=Bn.config());for(var e in r)Go[e]=r[e]};Ag()&&Bn.registerPlugin(no);var Fi=class r{constructor(e){this.platformId=e;In(this.platformId)&&cr.registerPlugin(nt,no)}get gsap(){return cr}get scrollTrigger(){return nt}get isBrowser(){return In(this.platformId)}context(e,t){if(!this.isBrowser)return;let n=cr.context(t,e);return window.requestAnimationFrame(()=>nt.refresh()),n}refreshScrollTriggers(){this.isBrowser&&nt.refresh()}scrollToY(e,t={}){if(this.isBrowser)return cr.to(window,$i({duration:1.05,ease:"power3.inOut",overwrite:"auto",scrollTo:{y:Math.max(e,0),autoKill:!0}},t))}reveal(e,t={}){if(this.isBrowser)return cr.from(e,$i({opacity:0,y:28,filter:"blur(8px)",duration:.82,ease:"power2.out",clearProps:"filter,transform,opacity",scrollTrigger:{trigger:e,start:"top 85%",once:!0}},t))}sectionReveal(e,t=".motion-item"){if(!this.isBrowser)return;let n=e.querySelectorAll(t);if(n.length)return cr.from(n,{opacity:0,y:28,filter:"blur(8px)",duration:.78,stagger:.08,ease:"power2.out",clearProps:"filter,transform,opacity",scrollTrigger:{trigger:e,start:"top 82%",once:!0}})}tilt(e){if(!this.isBrowser)return;let t=typeof e=="string"?document.querySelector(e):e;t&&(t.addEventListener("mousemove",n=>{let{left:i,top:s,width:o,height:a}=t.getBoundingClientRect(),c=(n.clientX-i)/o-.5,l=(n.clientY-s)/a-.5;cr.to(t,{rotationY:c*15,rotationX:-l*15,transformPerspective:1e3,ease:"power2.out",duration:.5})}),t.addEventListener("mouseleave",()=>{cr.to(t,{rotationY:0,rotationX:0,ease:"power2.out",duration:.5})}))}static \u0275fac=function(t){return new(t||r)(_a(Qi))};static \u0275prov=zc({token:r,factory:r.\u0275fac,providedIn:"root"})};var Fl={en:{"nav.about":"Why DEVORA","nav.services":"Services","nav.work":"Work","nav.stack":"Stack","nav.contact":"Start a Project","nav.login":"Login","nav.dashboard":"Dashboard","nav.theme":"Toggle theme","nav.language":"Arabic","nav.home":"DEVORA home","hero.kicker":"Software engineering studio","hero.title.line1":"Digital Products","hero.title.line2":"Built to Scale","hero.title.line3":"By DEVORA","hero.subtitle":"We design and engineer web, SaaS, and AI products from idea to launch.","hero.primaryCta":"Explore Work","hero.secondaryCta":"Contact DEVORA","hero.proof":"Strategy, UI, engineering, and launch in one focused team.","hero.map.eyebrow":"Delivery system","hero.map.title":"From product signal to shipped software","hero.map.status":"Live Method","hero.map.handoff":"Strategy, engineering, interface, and launch moving as one system.","hero.stage1.label":"Discover","hero.stage1.title":"Clarify the product","hero.stage1.body":"We map users, business goals, and the smallest launch that can prove value.","hero.stage2.label":"Architect","hero.stage2.title":"Shape the system","hero.stage2.body":"We define frontend, APIs, data flows, and the decisions that keep delivery clean.","hero.stage3.label":"Build","hero.stage3.title":"Engineer the experience","hero.stage3.body":"We turn the plan into polished Angular interfaces with motion and performance built in.","hero.stage4.label":"Launch","hero.stage4.title":"Ship and improve","hero.stage4.body":"We release, observe, measure, and tune the product so it keeps getting stronger.","hero.console.title":"Launch Pipeline","hero.console.line1":"strategy.scan()","hero.console.line2":"prototype.render()","hero.console.line3":"scale.deploy()","hero.metric1.value":"42","hero.metric1.label":"Launches","hero.metric2.value":"7x","hero.metric2.label":"Faster builds","hero.metric3.value":"99.9%","hero.metric3.label":"Uptime","hero.scroll":"Scroll","about.kicker":"Why DEVORA","about.title":"A focused team for serious digital launches","about.body":"Clients choose us when the product has to look premium, work reliably, and move from idea to launch without scattered vendors.","about.panel.label":"Built for clients","about.panel.title":"Less confusion, faster decisions, stronger launch quality.","about.panel.body":"We keep strategy, UX, engineering, and launch decisions in one delivery loop so your product moves with clarity.","about.proof1.value":"01","about.proof1.label":"Team from plan to launch","about.proof2.value":"3x","about.proof2.label":"Cleaner decision cycles","about.proof3.value":"100%","about.proof3.label":"Custom execution","about.value1.title":"We make the offer clear","about.value1.body":"Your product message, structure, and user journey are shaped around what helps clients trust and act.","about.value2.title":"We build with real business use in mind","about.value2.body":"Every screen, flow, and technical choice supports daily operations, future growth, and easier ownership.","about.value3.title":"We polish the experience before launch","about.value3.body":"Performance, responsiveness, motion, and content are tuned so the product feels finished, not rushed.","about.blueprint.title":"Delivery Blueprint","about.blueprint.step1":"Clarify the goal","about.blueprint.step2":"Build the product","about.blueprint.step3":"Launch and improve","services.kicker":"Commercial outcomes","services.title":"Digital work built to win clients, not just attention","services.body":"We turn websites, MVPs, dashboards, and platforms into business assets with clear offers, credible UX, and production-grade Angular engineering.","services.offer.label":"Registered technology partner","services.offer.title":"A Saudi registered technology establishment for serious digital launches.","services.offer.body":"DEVORA Technology Solutions operates as an active registered establishment, giving companies a credible partner for websites, SaaS, internal systems, and long-term product growth.","services.trust.kicker":"Legal trust signal","services.trust.title":"Commercial Registration Certificate verified through the Saudi Ministry of Commerce.","services.trust.statusLabel":"Registration status","services.trust.statusValue":"Active","services.trust.entityLabel":"Entity","services.trust.entityValue":"DEVORA Technology Solutions","services.trust.issueLabel":"Issued","services.trust.issueValue":"22 May 2026","services.primaryCta":"Request a project plan","services.secondaryCta":"Review live work","services.stat1.value":"CR","services.stat1.label":"Registered technology entity","services.stat2.value":"MVP","services.stat2.label":"Launch-ready scope","services.stat3.value":"UX+CODE","services.stat3.label":"Strategy through delivery","services.launch.title":"Launch a revenue-ready website","services.launch.body":"We structure the offer, pages, calls to action, and trust signals so visitors understand the business and know exactly what to do next.","services.launch.outcome":"More qualified inquiries","services.mvp.title":"Turn an idea into a usable MVP","services.mvp.body":"We define the first version, user flows, core screens, and technical foundation so the product can reach real users without wasted scope.","services.mvp.outcome":"Clear first launch","services.modernize.title":"Modernize outdated digital systems","services.modernize.body":"We rebuild slow, confusing, or fragile experiences into cleaner Angular interfaces that are easier to operate, maintain, and grow.","services.modernize.outcome":"Lower friction and stronger trust","services.internal.title":"Build dashboards and internal tools","services.internal.body":"We create admin panels, portals, workflows, and reporting interfaces that make daily operations faster and less dependent on manual work.","services.internal.outcome":"Better operational control","services.conversion.title":"Improve conversion and lead flow","services.conversion.body":"We audit messaging, forms, UX friction, page hierarchy, speed, and mobile behavior to turn passive visits into serious project conversations.","services.conversion.outcome":"Higher intent leads","services.scale.title":"Prepare products for scale","services.scale.body":"We improve architecture, component systems, performance, and handover quality so future features can ship without breaking the product.","services.scale.outcome":"Cleaner growth path","services.brand.title":"Shape a sharper digital presence","services.brand.body":"We align visual direction, messaging, page hierarchy, and proof points so the brand feels credible before the first conversation starts.","services.brand.outcome":"Clearer market position","services.commerce.title":"Build sales-ready product flows","services.commerce.body":"We design product browsing, checkout paths, inquiry flows, and conversion moments that make buying or requesting a quote feel simple.","services.commerce.outcome":"Smoother buying journeys","services.integrations.title":"Connect forms, data, and operations","services.integrations.body":"We connect websites and dashboards with APIs, forms, CRMs, and operational tools so teams spend less time moving data by hand.","services.integrations.outcome":"Less manual admin","services.support.title":"Maintain and improve after launch","services.support.body":"We support releases, fixes, UX improvements, performance checks, and small product iterations so the platform keeps moving after launch.","services.support.outcome":"Reliable product evolution","services.step1.label":"Step 01","services.step1.title":"Clarify the commercial objective","services.step2.label":"Step 02","services.step2.title":"Design the experience and system","services.step3.label":"Step 03","services.step3.title":"Launch with handover and next actions","process.kicker":"How we deliver","process.title":"A practical delivery system for businesses that need momentum","process.body":"Every engagement is structured around decisions, deliverables, and launch readiness. You see what is being built, why it matters, and what becomes usable next.","process.step1.title":"Diagnose","process.step1.point1":"Business goal and target client review","process.step1.point2":"Current website, product, or workflow audit","process.step1.point3":"Fastest path to visible business value","process.step2.title":"Scope","process.step2.point1":"Priority features and launch boundaries","process.step2.point2":"User journeys, pages, and conversion paths","process.step2.point3":"Timeline, dependencies, and delivery order","process.step3.title":"Design system","process.step3.point1":"Responsive layouts and component states","process.step3.point2":"Content hierarchy and trust signals","process.step3.point3":"Reusable UI patterns for future growth","process.step4.title":"Build","process.step4.point1":"Angular standalone components","process.step4.point2":"Typed models and maintainable structure","process.step4.point3":"Performance, forms, animations, and integrations","process.step5.title":"Launch","process.step5.point1":"Deployment-ready production build","process.step5.point2":"Responsive checks and browser validation","process.step5.point3":"Content, SEO, and handover review","process.step6.title":"Improve","process.step6.point1":"Analytics-driven UX and copy updates","process.step6.point2":"Feature backlog and growth priorities","process.step6.point3":"Maintenance path for new releases","process.model1.label":"Sprint","process.model1.title":"Discovery Sprint","process.model1.body":"For founders and teams that need a clear scope, offer, sitemap, and product direction before investing in a full build.","process.model1.meta":"Best before a new launch","process.model2.label":"Build","process.model2.title":"Website or MVP Build","process.model2.body":"For companies that need a polished website, landing system, MVP, or product interface delivered with practical engineering.","process.model2.meta":"Best for launch-ready execution","process.model3.label":"Growth","process.model3.title":"Platform Upgrade Retainer","process.model3.body":"For active businesses that need ongoing UX improvements, feature releases, performance work, and technical cleanup.","process.model3.meta":"Best after product-market signal","work.kicker":"Case Studies","work.title":"Selected Work","work.body":"A handpicked collection of our most impactful projects. Hover or click on each image to preview the experience.","work.contactCta":"Contact us","work.viewAll":"View All Projects","work.projectsNav":"Selected work projects","work.showProject":"Show project","work.filters":"Work filters","work.filter.all":"All Projects","work.filter.realEstate":"Real Estate","work.filter.education":"Education","work.filter.agriculture":"Agriculture","work.category.realEstate":"Real Estate Platform","work.category.education":"Education Platform","work.category.agriculture":"Agriculture Website","work.projectBuild":"Live digital product","work.live":"Live Project","work.visit":"Visit","work.osos.title":"Osos Al-Riadah","work.osos.description":"A comprehensive real estate services platform built with Angular, featuring property listings, search, and dynamic content management.","work.ajyal.title":"Ajyal Al-Quran School","work.ajyal.description":"An educational platform for a Quran school, providing course information, registration, and student resources. Built with Angular.","work.zaytona.title":"Zaytona Agriculture","work.zaytona.description":"An agricultural solutions website showcasing products and services with a clean, responsive Angular UI.","tech.kicker":"Engineering proof","tech.title":"Built like a product team, not a template shop","tech.caption":"Clean Angular architecture, typed components, performance-minded UI, and handover-ready code for products that need to live beyond launch.","testimonials.kicker":"Testimonials","testimonials.title":"Trusted by Visionaries","testimonials.quote1":"DEVORA transformed our legacy architecture into a high-performance system that handled our growth without drama.","testimonials.quote2":"The level of craftsmanship DEVORA brings to every pixel and every line of code is world-class.","testimonials.quote3":"They engineer experiences, not only screens. Our engagement metrics doubled after the new platform launch.","testimonials.name1":"Sarah Jenkins","testimonials.role1":"CTO","testimonials.company1":"FutureScale","testimonials.name2":"Michael Chen","testimonials.role2":"Product Lead","testimonials.company2":"Aether AI","testimonials.name3":"Elena Rodriguez","testimonials.role3":"Founder","testimonials.company3":"Lumina Digital","testimonials.previous":"Previous testimonial","testimonials.next":"Next testimonial","contact.kicker":"Project intake","contact.title":"Tell us what needs to launch, convert, or scale","contact.body":"Send the business goal, project type, budget range, and timeline. We will reply with the most practical path to ship something useful.","contact.name":"Full Name","contact.namePlaceholder":"John Doe","contact.email":"Email Address","contact.emailPlaceholder":"john@example.com","contact.service":"Project type","contact.chooseService":"Choose project type","contact.option.launch":"Revenue-ready website","contact.option.mvp":"MVP or new product","contact.option.platform":"SaaS / portal / platform","contact.option.dashboard":"Dashboard or internal tool","contact.option.optimization":"Optimization / rebuild","contact.budget":"Budget range","contact.chooseBudget":"Choose budget range","contact.budget.option1":"Under $3k","contact.budget.option2":"$3k - $8k","contact.budget.option3":"$8k - $20k","contact.budget.option4":"$20k+","contact.timeline":"Timeline","contact.chooseTimeline":"Choose timeline","contact.timeline.option1":"Launch this month","contact.timeline.option2":"1-3 months","contact.timeline.option3":"Planning stage","contact.details":"Business goal","contact.detailsPlaceholder":"What do you need to launch, fix, automate, or improve? What should success look like?","contact.submit":"Request Project Plan","contact.success":"Thanks. DEVORA will review the details and reply with the next practical step.","contact.legal":"Registered Saudi technology establishment","contact.location":"Riyadh, Saudi Arabia / Remote delivery","footer.rights":"All rights reserved."},ar:{"nav.about":"\u0644\u0645\u0627\u0630\u0627 DEVORA","nav.services":"\u0627\u0644\u062E\u062F\u0645\u0627\u062A","nav.work":"\u0627\u0644\u0623\u0639\u0645\u0627\u0644","nav.stack":"\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A","nav.contact":"\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643","nav.login":"\u062F\u062E\u0648\u0644","nav.dashboard":"\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645","nav.theme":"\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0648\u0636\u0639","nav.language":"English","nav.home":"\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629","hero.kicker":"\u0627\u0633\u062A\u0648\u062F\u064A\u0648 \u0647\u0646\u062F\u0633\u0629 \u0628\u0631\u0645\u062C\u064A\u0627\u062A","hero.title.line1":"\u0645\u0646\u062A\u062C\u0627\u062A \u0631\u0642\u0645\u064A\u0629","hero.title.line2":"\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0646\u0645\u0648","hero.title.line3":"\u0645\u0646 DEVORA","hero.subtitle":"\u0646\u0635\u0645\u0645 \u0648\u0646\u0628\u0646\u064A \u0645\u0648\u0627\u0642\u0639 \u0648\u0645\u0646\u0635\u0627\u062A SaaS \u0648\u0645\u0646\u062A\u062C\u0627\u062A AI \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0625\u0637\u0644\u0627\u0642.","hero.primaryCta":"\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0623\u0639\u0645\u0627\u0644","hero.secondaryCta":"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627","hero.proof":"\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629\u060C \u0648\u0627\u062C\u0647\u0629\u060C \u0647\u0646\u062F\u0633\u0629\u060C \u0648\u0625\u0637\u0644\u0627\u0642 \u062F\u0627\u062E\u0644 \u0641\u0631\u064A\u0642 \u0648\u0627\u062D\u062F.","hero.map.eyebrow":"\u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645","hero.map.title":"\u0645\u0646 \u0625\u0634\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062A\u062C \u0625\u0644\u0649 \u0628\u0631\u0646\u0627\u0645\u062C \u062C\u0627\u0647\u0632 \u0644\u0644\u0625\u0637\u0644\u0627\u0642","hero.map.status":"\u0645\u0646\u0647\u062C \u0645\u0628\u0627\u0634\u0631","hero.map.handoff":"\u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0648\u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0648\u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u062A\u062A\u062D\u0631\u0643 \u0643\u0646\u0638\u0627\u0645 \u0648\u0627\u062D\u062F.","hero.stage1.label":"\u0627\u0643\u062A\u0634\u0627\u0641","hero.stage1.title":"\u062A\u0648\u0636\u064A\u062D \u0627\u0644\u0645\u0646\u062A\u062C","hero.stage1.body":"\u0646\u0631\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646\u060C \u0648\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u0639\u0645\u0644\u060C \u0648\u0623\u0635\u063A\u0631 \u0625\u0637\u0644\u0627\u0642 \u064A\u062B\u0628\u062A \u0627\u0644\u0642\u064A\u0645\u0629.","hero.stage2.label":"\u0645\u0639\u0645\u0627\u0631\u064A\u0629","hero.stage2.title":"\u062A\u0634\u0643\u064A\u0644 \u0627\u0644\u0646\u0638\u0627\u0645","hero.stage2.body":"\u0646\u062D\u062F\u062F \u0627\u0644\u0648\u0627\u062C\u0647\u0629\u060C \u0648\u0648\u0627\u062C\u0647\u0627\u062A API\u060C \u0648\u062A\u062F\u0641\u0642\u0627\u062A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A\u060C \u0648\u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0646\u0638\u0641 \u0627\u0644\u062A\u0633\u0644\u064A\u0645.","hero.stage3.label":"\u0628\u0646\u0627\u0621","hero.stage3.title":"\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u062A\u062C\u0631\u0628\u0629","hero.stage3.body":"\u0646\u062D\u0648\u0651\u0644 \u0627\u0644\u062E\u0637\u0629 \u0625\u0644\u0649 \u0648\u0627\u062C\u0647\u0627\u062A Angular \u0645\u0635\u0642\u0648\u0644\u0629 \u0628\u062D\u0631\u0643\u0629 \u0648\u0623\u062F\u0627\u0621 \u0645\u062F\u0645\u062C\u064A\u0646.","hero.stage4.label":"\u0625\u0637\u0644\u0627\u0642","hero.stage4.title":"\u0625\u0637\u0644\u0627\u0642 \u0648\u062A\u062D\u0633\u064A\u0646","hero.stage4.body":"\u0646\u0637\u0644\u0642 \u0627\u0644\u0645\u0646\u062A\u062C\u060C \u0646\u0631\u0627\u0642\u0628\u0647\u060C \u0646\u0642\u064A\u0633\u0647\u060C \u0648\u0646\u062D\u0633\u0651\u0646\u0647 \u062D\u062A\u0649 \u064A\u0635\u0628\u062D \u0623\u0642\u0648\u0649 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631.","hero.console.title":"\u0645\u0633\u0627\u0631 \u0627\u0644\u0625\u0637\u0644\u0627\u0642","hero.console.line1":"strategy.scan()","hero.console.line2":"prototype.render()","hero.console.line3":"scale.deploy()","hero.metric1.value":"42","hero.metric1.label":"\u0625\u0637\u0644\u0627\u0642\u0627\u062A","hero.metric2.value":"7x","hero.metric2.label":"\u0628\u0646\u0627\u0621 \u0623\u0633\u0631\u0639","hero.metric3.value":"99.9%","hero.metric3.label":"\u062C\u0627\u0647\u0632\u064A\u0629","hero.scroll":"\u0645\u0631\u0631","about.kicker":"\u0644\u0645\u0627\u0630\u0627 DEVORA","about.title":"\u0641\u0631\u064A\u0642 \u0645\u0631\u0643\u0632 \u0644\u0625\u0637\u0644\u0627\u0642 \u0645\u0646\u062A\u062C\u0627\u062A \u0631\u0642\u0645\u064A\u0629 \u062C\u0627\u062F\u0629","about.body":"\u064A\u062E\u062A\u0627\u0631\u0646\u0627 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0639\u0646\u062F\u0645\u0627 \u064A\u062D\u062A\u0627\u062C \u0627\u0644\u0645\u0646\u062A\u062C \u0625\u0644\u0649 \u0634\u0643\u0644 \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u060C \u0623\u062F\u0627\u0621 \u0645\u0648\u062B\u0648\u0642\u060C \u0648\u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u0627\u0636\u062D \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u062F\u0648\u0646 \u062A\u0634\u062A\u062A \u0628\u064A\u0646 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062C\u0647\u0629.","about.panel.label":"\u0645\u0635\u0645\u0645 \u0644\u0644\u0639\u0645\u064A\u0644","about.panel.title":"\u0648\u0636\u0648\u062D \u0623\u0643\u062B\u0631\u060C \u0642\u0631\u0627\u0631\u0627\u062A \u0623\u0633\u0631\u0639\u060C \u0648\u062C\u0648\u062F\u0629 \u0625\u0637\u0644\u0627\u0642 \u0623\u0642\u0648\u0649.","about.panel.body":"\u0646\u062C\u0645\u0639 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0648\u0642\u0631\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0641\u064A \u0645\u0633\u0627\u0631 \u0648\u0627\u062D\u062F \u062D\u062A\u0649 \u064A\u062A\u062D\u0631\u0643 \u0627\u0644\u0645\u0646\u062A\u062C \u0628\u0648\u0636\u0648\u062D.","about.proof1.value":"01","about.proof1.label":"\u0641\u0631\u064A\u0642 \u0645\u0646 \u0627\u0644\u062E\u0637\u0629 \u0644\u0644\u0625\u0637\u0644\u0627\u0642","about.proof2.value":"3x","about.proof2.label":"\u0642\u0631\u0627\u0631\u0627\u062A \u0623\u0648\u0636\u062D \u0648\u0623\u0633\u0631\u0639","about.proof3.value":"100%","about.proof3.label":"\u062A\u0646\u0641\u064A\u0630 \u0645\u062E\u0635\u0635","about.value1.title":"\u0646\u0648\u0636\u062D \u0639\u0631\u0636\u0643 \u0644\u0644\u0639\u0645\u064A\u0644","about.value1.body":"\u0646\u0631\u062A\u0628 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0647\u064A\u0643\u0644\u0647 \u0648\u0631\u062D\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u062D\u0648\u0644 \u0645\u0627 \u064A\u062C\u0639\u0644 \u0627\u0644\u0639\u0645\u064A\u0644 \u064A\u062B\u0642 \u0648\u064A\u062A\u062E\u0630 \u062E\u0637\u0648\u0629.","about.value2.title":"\u0646\u0628\u0646\u064A \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u064A","about.value2.body":"\u0643\u0644 \u0634\u0627\u0634\u0629 \u0648\u062A\u062F\u0641\u0642 \u0648\u0642\u0631\u0627\u0631 \u062A\u0642\u0646\u064A \u064A\u062E\u062F\u0645 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A \u0648\u0633\u0647\u0648\u0644\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062A\u062C.","about.value3.title":"\u0646\u0635\u0642\u0644 \u0627\u0644\u062A\u062C\u0631\u0628\u0629 \u0642\u0628\u0644 \u0627\u0644\u0625\u0637\u0644\u0627\u0642","about.value3.body":"\u0646\u0636\u0628\u0637 \u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u0627\u0644\u062A\u062C\u0627\u0648\u0628 \u0648\u0627\u0644\u062D\u0631\u0643\u0629 \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u062D\u062A\u0649 \u064A\u0638\u0647\u0631 \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0643\u062A\u0645\u0644 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0644\u064A\u0633 \u0645\u062A\u0639\u062C\u0644\u0627.","about.blueprint.title":"\u062E\u0637\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645","about.blueprint.step1":"\u062A\u0648\u0636\u064A\u062D \u0627\u0644\u0647\u062F\u0641","about.blueprint.step2":"\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0646\u062A\u062C","about.blueprint.step3":"\u0625\u0637\u0644\u0627\u0642 \u0648\u062A\u062D\u0633\u064A\u0646","services.kicker":"\u0645\u0627\u0630\u0627 \u0646\u0642\u062F\u0645","services.title":"\u0646\u0628\u0646\u064A \u0627\u0644\u0645\u0646\u062A\u062C \u0627\u0644\u0630\u064A \u064A\u062B\u0642 \u0628\u0647 \u0639\u0645\u0644\u0627\u0624\u0643","services.body":"\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u0627\u0636\u062D\u0629\u060C \u0648\u0627\u062C\u0647\u0627\u062A \u0642\u0648\u064A\u0629\u060C \u0648\u0647\u0646\u062F\u0633\u0629 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u064A\u0647\u0627 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C \u0645\u0646\u062A\u062C\u0627 \u0631\u0642\u0645\u064A\u0627 \u062C\u0627\u062F\u0627 \u0648\u0644\u064A\u0633 \u0645\u0648\u0642\u0639\u0627 \u0639\u0627\u062F\u064A\u0627.","services.offer.label":"\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0639\u0645\u064A\u0644","services.offer.title":"\u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0625\u0644\u0649 \u0625\u0637\u0644\u0627\u0642 \u0645\u0635\u0642\u0648\u0644 \u064A\u0633\u062A\u062E\u062F\u0645\u0647 \u0627\u0644\u0646\u0627\u0633 \u0648\u064A\u062A\u0630\u0643\u0631\u0648\u0646\u0647.","services.offer.body":"\u0646\u0635\u0645\u0645 \u0634\u0643\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u060C \u0646\u0628\u0646\u064A \u0627\u0644\u062A\u062C\u0631\u0628\u0629\u060C \u0646\u0646\u0641\u0630 \u0627\u0644\u0646\u0638\u0627\u0645\u060C \u0648\u0646\u062C\u0647\u0632\u0647 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u064A\u0646 \u0628\u062E\u0637\u0629 \u062A\u0633\u0644\u064A\u0645 \u0645\u0631\u0643\u0632\u0629.","services.primaryCta":"\u0627\u0628\u062F\u0623 \u0645\u0634\u0631\u0648\u0639\u0643","services.secondaryCta":"\u0634\u0627\u0647\u062F \u0627\u0644\u0623\u0639\u0645\u0627\u0644","services.stat1.value":"01","services.stat1.label":"\u0641\u0631\u064A\u0642 \u0645\u0646\u062A\u062C \u0645\u0631\u0643\u0632","services.stat2.value":"3x","services.stat2.label":"\u062F\u0648\u0631\u0627\u062A \u0625\u0637\u0644\u0627\u0642 \u0623\u0633\u0631\u0639","services.stat3.value":"100%","services.stat3.label":"\u062A\u0646\u0641\u064A\u0630 \u0645\u062E\u0635\u0635","services.strategy.title":"\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u0645\u0646\u062A\u062C","services.strategy.body":"\u0646\u0648\u0636\u062D \u0627\u0644\u0639\u0631\u0636\u060C \u0631\u062D\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u060C \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629\u060C \u0648\u0646\u0637\u0627\u0642 \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0642\u0628\u0644 \u0625\u0647\u062F\u0627\u0631 \u0623\u064A \u0648\u0642\u062A \u0641\u064A \u0627\u0644\u062A\u0646\u0641\u064A\u0630.","services.strategy.outcome":"\u062E\u0631\u064A\u0637\u0629 \u0637\u0631\u064A\u0642 \u0648\u0627\u0636\u062D\u0629","services.web.title":"\u0645\u0648\u0627\u0642\u0639 \u062A\u0642\u0646\u0639 \u0627\u0644\u0639\u0645\u064A\u0644","services.web.body":"\u0645\u0648\u0627\u0642\u0639 \u0648\u062A\u062C\u0627\u0631\u0628 \u0647\u0628\u0648\u0637 \u062D\u062F\u064A\u062B\u0629 \u062A\u0639\u0631\u0636 \u0627\u0644\u062B\u0642\u0629 \u0628\u0633\u0631\u0639\u0629 \u0648\u062A\u062D\u0648\u0644 \u0627\u0644\u0632\u0627\u0626\u0631 \u0625\u0644\u0649 \u0639\u0645\u064A\u0644 \u062C\u0627\u062F.","services.web.outcome":"\u0639\u0645\u0644\u0627\u0621 \u0645\u062D\u062A\u0645\u0644\u0648\u0646 \u0623\u0641\u0636\u0644","services.saas.title":"\u0645\u0646\u0635\u0627\u062A \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u064A\u0628","services.saas.body":"\u0644\u0648\u062D\u0627\u062A \u062A\u062D\u0643\u0645\u060C \u0628\u0648\u0627\u0628\u0627\u062A \u0639\u0645\u0644\u0627\u0621\u060C \u0623\u0646\u0638\u0645\u0629 \u0625\u062F\u0627\u0631\u0629\u060C \u0648\u0627\u062C\u0647\u0627\u062A API\u060C \u0648\u0633\u064A\u0631 \u0639\u0645\u0644 \u0645\u0635\u0645\u0645 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u0627\u0644\u0646\u0645\u0648.","services.saas.outcome":"\u0645\u0646\u0635\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0646\u0645\u0648","services.perf.title":"\u062A\u062D\u0633\u064A\u0646 \u0648\u0646\u0645\u0648","services.perf.body":"\u0646\u062D\u0633\u0646 \u0627\u0644\u0633\u0631\u0639\u0629\u060C \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u060C \u062C\u0648\u062F\u0629 \u0627\u0644\u0643\u0648\u062F\u060C \u0648\u062C\u0627\u0647\u0632\u064A\u0629 \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0644\u064A\u0638\u0647\u0631 \u0627\u0644\u0645\u0646\u062A\u062C \u0628\u0645\u0633\u062A\u0648\u0649 \u0627\u062D\u062A\u0631\u0627\u0641\u064A \u062A\u062D\u062A \u0627\u0644\u0636\u063A\u0637.","services.perf.outcome":"\u062A\u062C\u0631\u0628\u0629 \u0623\u0642\u0648\u0649","services.step1.label":"\u062E\u0637\u0648\u0629 01","services.step1.title":"\u062A\u062D\u062F\u064A\u062F \u0647\u062F\u0641 \u0627\u0644\u0639\u0645\u0644","services.step2.label":"\u062E\u0637\u0648\u0629 02","services.step2.title":"\u062A\u0635\u0645\u064A\u0645 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0646\u062A\u062C","services.step3.label":"\u062E\u0637\u0648\u0629 03","services.step3.title":"\u0625\u0637\u0644\u0627\u0642 \u0648\u0642\u064A\u0627\u0633 \u0648\u062A\u062D\u0633\u064A\u0646","work.kicker":"\u062F\u0631\u0627\u0633\u0627\u062A \u062D\u0627\u0644\u0629","work.title":"\u0623\u0639\u0645\u0627\u0644 \u0645\u062E\u062A\u0627\u0631\u0629","work.body":"\u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u062E\u062A\u0627\u0631\u0629 \u0645\u0646 \u0623\u0647\u0645 \u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627. \u0645\u0631\u0631 \u0639\u0644\u0649 \u0623\u064A \u0635\u0648\u0631\u0629 \u0623\u0648 \u0627\u0636\u063A\u0637 \u0644\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u062A\u062C\u0631\u0628\u0629.","work.contactCta":"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627","work.viewAll":"\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639","work.projectsNav":"\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629","work.showProject":"\u0639\u0631\u0636 \u0645\u0634\u0631\u0648\u0639","work.filters":"\u0641\u0644\u0627\u062A\u0631 \u0627\u0644\u0623\u0639\u0645\u0627\u0644","work.filter.all":"\u0643\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639","work.filter.realEstate":"\u0639\u0642\u0627\u0631\u0627\u062A","work.filter.education":"\u062A\u0639\u0644\u064A\u0645","work.filter.agriculture":"\u0632\u0631\u0627\u0639\u0629","work.category.realEstate":"\u0645\u0646\u0635\u0629 \u0639\u0642\u0627\u0631\u064A\u0629","work.category.education":"\u0645\u0646\u0635\u0629 \u062A\u0639\u0644\u064A\u0645\u064A\u0629","work.category.agriculture":"\u0645\u0648\u0642\u0639 \u0632\u0631\u0627\u0639\u064A","work.projectBuild":"\u0645\u0646\u062A\u062C \u0631\u0642\u0645\u064A \u0645\u0628\u0627\u0634\u0631","work.live":"\u0645\u0634\u0631\u0648\u0639 \u0645\u0628\u0627\u0634\u0631","work.visit":"\u0632\u064A\u0627\u0631\u0629","work.osos.title":"\u0623\u0633\u0633 \u0627\u0644\u0631\u064A\u0627\u062F\u0629","work.osos.description":"\u0645\u0646\u0635\u0629 \u062E\u062F\u0645\u0627\u062A \u0639\u0642\u0627\u0631\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 \u0645\u0628\u0646\u064A\u0629 \u0628\u0640 Angular\u060C \u062A\u0636\u0645 \u0642\u0648\u0627\u0626\u0645 \u0639\u0642\u0627\u0631\u0627\u062A\u060C \u0648\u0628\u062D\u062B\u064B\u0627 \u0645\u062A\u0642\u062F\u0645\u064B\u0627\u060C \u0648\u0625\u062F\u0627\u0631\u0629 \u0645\u062D\u062A\u0648\u0649 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629.","work.ajyal.title":"\u0645\u062F\u0631\u0633\u0629 \u0623\u062C\u064A\u0627\u0644 \u0627\u0644\u0642\u0631\u0622\u0646","work.ajyal.description":"\u0645\u0646\u0635\u0629 \u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0644\u0645\u062F\u0631\u0633\u0629 \u0642\u0631\u0622\u0646 \u062A\u0639\u0631\u0636 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062F\u0648\u0631\u0627\u062A\u060C \u0648\u0627\u0644\u062A\u0633\u062C\u064A\u0644\u060C \u0648\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0637\u0644\u0627\u0628\u060C \u0648\u0645\u0628\u0646\u064A\u0629 \u0628\u0640 Angular.","work.zaytona.title":"\u0632\u064A\u062A\u0648\u0646\u0629 \u0644\u0644\u0632\u0631\u0627\u0639\u0629","work.zaytona.description":"\u0645\u0648\u0642\u0639 \u062D\u0644\u0648\u0644 \u0632\u0631\u0627\u0639\u064A\u0629 \u064A\u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0628\u0648\u0627\u062C\u0647\u0629 Angular \u0646\u0638\u064A\u0641\u0629 \u0648\u0645\u062A\u062C\u0627\u0648\u0628\u0629.","tech.kicker":"\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629","tech.title":"\u062A\u0642\u0646\u064A\u0627\u062A \u062A\u062F\u0641\u0639 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644","tech.caption":"\u0645\u062C\u0645\u0648\u0639\u0629 \u0639\u0645\u0644\u064A\u0629 \u0644\u0628\u0646\u0627\u0621 \u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0622\u0645\u0646\u0629\u060C \u0645\u062A\u062D\u0631\u0643\u0629\u060C \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639.","testimonials.kicker":"\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621","testimonials.title":"\u064A\u062B\u0642 \u0628\u0646\u0627 \u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u0631\u0624\u064A\u0629","testimonials.quote1":"\u062D\u0648\u0651\u0644\u062A DEVORA \u0645\u0639\u0645\u0627\u0631\u064A\u062A\u0646\u0627 \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0625\u0644\u0649 \u0646\u0638\u0627\u0645 \u0639\u0627\u0644\u064A \u0627\u0644\u0623\u062F\u0627\u0621 \u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0646\u0645\u0648\u0651\u0646\u0627 \u062F\u0648\u0646 \u062A\u0639\u0642\u064A\u062F.","testimonials.quote2":"\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062D\u0631\u0641\u064A\u0629 \u0641\u064A \u0643\u0644 \u0628\u0643\u0633\u0644 \u0648\u0643\u0644 \u0633\u0637\u0631 \u0643\u0648\u062F \u0643\u0627\u0646 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u064B\u0627.","testimonials.quote3":"\u0647\u0645 \u0644\u0627 \u064A\u0628\u0646\u0648\u0646 \u0634\u0627\u0634\u0627\u062A \u0641\u0642\u0637\u060C \u0628\u0644 \u064A\u0635\u0645\u0645\u0648\u0646 \u062A\u062C\u0627\u0631\u0628. \u062A\u0636\u0627\u0639\u0641\u062A \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644 \u0628\u0639\u062F \u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0645\u0646\u0635\u0629.","testimonials.name1":"\u0633\u0627\u0631\u0629 \u062C\u064A\u0646\u0643\u0646\u0632","testimonials.role1":"\u0645\u062F\u064A\u0631\u0629 \u062A\u0642\u0646\u064A\u0629","testimonials.company1":"FutureScale","testimonials.name2":"\u0645\u0627\u064A\u0643\u0644 \u062A\u0634\u064A\u0646","testimonials.role2":"\u0642\u0627\u0626\u062F \u0627\u0644\u0645\u0646\u062A\u062C","testimonials.company2":"Aether AI","testimonials.name3":"\u0625\u064A\u0644\u064A\u0646\u0627 \u0631\u0648\u062F\u0631\u064A\u063A\u064A\u0632","testimonials.role3":"\u0645\u0624\u0633\u0633\u0629","testimonials.company3":"Lumina Digital","testimonials.previous":"\u0627\u0644\u0631\u0623\u064A \u0627\u0644\u0633\u0627\u0628\u0642","testimonials.next":"\u0627\u0644\u0631\u0623\u064A \u0627\u0644\u062A\u0627\u0644\u064A","contact.kicker":"\u062A\u0648\u0627\u0635\u0644","contact.title":"\u0627\u0628\u062F\u0623 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u064A\u0648\u0645","contact.body":"\u0627\u062D\u0643\u0650 \u0644\u0646\u0627 \u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0628\u0646\u064A\u0647\u060C \u0648\u0633\u0646\u0631\u0633\u0645 \u0623\u0633\u0631\u0639 \u0637\u0631\u064A\u0642 \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 \u0625\u0637\u0644\u0627\u0642 \u0645\u0635\u0642\u0648\u0644.","contact.name":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644","contact.namePlaceholder":"\u0645\u062D\u0645\u062F \u0639\u0644\u064A","contact.email":"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A","contact.emailPlaceholder":"hello@example.com","contact.service":"\u0627\u0644\u062E\u062F\u0645\u0629","contact.chooseService":"\u0627\u062E\u062A\u0631 \u062E\u062F\u0645\u0629","contact.details":"\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639","contact.detailsPlaceholder":"\u0627\u0643\u062A\u0628 \u0646\u0628\u0630\u0629 \u0639\u0646 \u0645\u0634\u0631\u0648\u0639\u0643...","contact.submit":"\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629","contact.success":"\u0634\u0643\u0631\u064B\u0627 \u0644\u0643. \u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0641\u0631\u064A\u0642 DEVORA \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u064B\u0627.","contact.location":"\u0627\u0644\u0642\u0627\u0647\u0631\u0629\u060C \u0645\u0635\u0631","services.trust.kicker":"\u062F\u0644\u064A\u0644 \u062B\u0642\u0629 \u0642\u0627\u0646\u0648\u0646\u064A","services.trust.title":"\u0634\u0647\u0627\u062F\u0629 \u0633\u062C\u0644 \u062A\u062C\u0627\u0631\u064A \u0645\u0648\u062B\u0642\u0629 \u0645\u0646 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629.","services.trust.statusLabel":"\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0633\u062C\u064A\u0644","services.trust.statusValue":"\u0646\u0634\u0637","services.trust.entityLabel":"\u0627\u0644\u0643\u064A\u0627\u0646","services.trust.entityValue":"DEVORA Technology Solutions","services.trust.issueLabel":"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0635\u062F\u0627\u0631","services.trust.issueValue":"22 \u0645\u0627\u064A\u0648 2026","services.launch.title":"\u0625\u0637\u0644\u0627\u0642 \u0645\u0648\u0642\u0639 \u062C\u0627\u0647\u0632 \u0644\u0644\u0625\u064A\u0631\u0627\u062F","services.launch.body":"\u0646\u0631\u062A\u0628 \u0627\u0644\u0639\u0631\u0636 \u0648\u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0648\u062F\u0639\u0648\u0627\u062A \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0648\u0625\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062B\u0642\u0629 \u062D\u062A\u0649 \u064A\u0641\u0647\u0645 \u0627\u0644\u0632\u0627\u0626\u0631 \u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0648\u064A\u062A\u062E\u0630 \u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0628\u0648\u0636\u0648\u062D.","services.launch.outcome":"\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0623\u0643\u062B\u0631 \u062C\u062F\u064A\u0629","services.mvp.title":"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0641\u0643\u0631\u0629 \u0625\u0644\u0649 MVP \u0642\u0627\u0628\u0644 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645","services.mvp.body":"\u0646\u062D\u062F\u062F \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0648\u0627\u0644\u062A\u062F\u0641\u0642\u0627\u062A \u0648\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0648\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u062D\u062A\u0649 \u064A\u0635\u0644 \u0627\u0644\u0645\u0646\u062A\u062C \u0625\u0644\u0649 \u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u062D\u0642\u064A\u0642\u064A\u064A\u0646 \u0628\u062F\u0648\u0646 \u062A\u0636\u062E\u0645 \u0641\u064A \u0627\u0644\u0646\u0637\u0627\u0642.","services.mvp.outcome":"\u0625\u0637\u0644\u0627\u0642 \u0623\u0648\u0644 \u0648\u0627\u0636\u062D","services.modernize.title":"\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629","services.modernize.body":"\u0646\u0639\u064A\u062F \u0628\u0646\u0627\u0621 \u0627\u0644\u062A\u062C\u0627\u0631\u0628 \u0627\u0644\u0628\u0637\u064A\u0626\u0629 \u0623\u0648 \u0627\u0644\u0645\u0631\u0628\u0643\u0629 \u0623\u0648 \u0627\u0644\u0647\u0634\u0629 \u0625\u0644\u0649 \u0648\u0627\u062C\u0647\u0627\u062A Angular \u0623\u0646\u0638\u0641 \u0648\u0623\u0633\u0647\u0644 \u0641\u064A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0648\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0648\u0627\u0644\u0646\u0645\u0648.","services.modernize.outcome":"\u062B\u0642\u0629 \u0623\u0639\u0644\u0649 \u0648\u0627\u062D\u062A\u0643\u0627\u0643 \u0623\u0642\u0644","services.internal.title":"\u0644\u0648\u062D\u0627\u062A \u062A\u062D\u0643\u0645 \u0648\u0623\u062F\u0648\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0629","services.internal.body":"\u0646\u0628\u0646\u064A \u0644\u0648\u062D\u0627\u062A \u0625\u062F\u0627\u0631\u0629 \u0648\u0628\u0648\u0627\u0628\u0627\u062A \u0639\u0645\u0644\u0627\u0621 \u0648\u062A\u062F\u0641\u0642\u0627\u062A \u062A\u0634\u063A\u064A\u0644 \u0648\u062A\u0642\u0627\u0631\u064A\u0631 \u062A\u0642\u0644\u0644 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u064A\u062F\u0648\u064A \u0648\u062A\u0633\u0631\u0639 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629.","services.internal.outcome":"\u062A\u062D\u0643\u0645 \u062A\u0634\u063A\u064A\u0644\u064A \u0623\u0641\u0636\u0644","services.conversion.title":"\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0648\u062A\u062F\u0641\u0642 \u0627\u0644\u0639\u0645\u0644\u0627\u0621","services.conversion.body":"\u0646\u0631\u0627\u062C\u0639 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u0641\u062D\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629 \u0648\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u062C\u0648\u0627\u0644 \u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0632\u064A\u0627\u0631\u0627\u062A \u0625\u0644\u0649 \u0645\u062D\u0627\u062F\u062B\u0627\u062A \u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u0627\u062F\u0629.","services.conversion.outcome":"\u0639\u0645\u0644\u0627\u0621 \u0645\u062D\u062A\u0645\u0644\u0648\u0646 \u0628\u062C\u0648\u062F\u0629 \u0623\u0639\u0644\u0649","services.scale.title":"\u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u0645\u0646\u062A\u062C \u0644\u0644\u0646\u0645\u0648","services.scale.body":"\u0646\u062D\u0633\u0646 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629 \u0648\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0648\u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u062C\u0648\u062F\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u062D\u062A\u0649 \u0644\u0627 \u062A\u062A\u0639\u0637\u0644 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0642\u0627\u062F\u0645\u0629 \u0645\u0639 \u0646\u0645\u0648 \u0627\u0644\u0645\u0646\u062A\u062C.","services.scale.outcome":"\u0645\u0633\u0627\u0631 \u0646\u0645\u0648 \u0623\u0646\u0638\u0641","services.brand.title":"\u062A\u0648\u0636\u064A\u062D \u0627\u0644\u062D\u0636\u0648\u0631 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u0644\u0639\u0644\u0627\u0645\u0629","services.brand.body":"\u0646\u0648\u0627\u0626\u0645 \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0628\u0635\u0631\u064A \u0648\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0648\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0648\u0625\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u062B\u0642\u0629 \u062D\u062A\u0649 \u062A\u0628\u062F\u0648 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0623\u0643\u062B\u0631 \u0645\u0635\u062F\u0627\u0642\u064A\u0629 \u0642\u0628\u0644 \u0623\u0648\u0644 \u0645\u062D\u0627\u062F\u062B\u0629.","services.brand.outcome":"\u062A\u0645\u0648\u0636\u0639 \u0623\u0648\u0636\u062D \u0641\u064A \u0627\u0644\u0633\u0648\u0642","services.commerce.title":"\u062A\u062F\u0641\u0642\u0627\u062A \u0628\u064A\u0639 \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621","services.commerce.body":"\u0646\u0635\u0645\u0645 \u062A\u0635\u0641\u062D \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0637\u0644\u0628 \u0648\u0627\u0644\u062F\u0641\u0639 \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u062D\u062A\u0649 \u064A\u0635\u0628\u062D \u0627\u0644\u0634\u0631\u0627\u0621 \u0623\u0648 \u0637\u0644\u0628 \u0627\u0644\u0639\u0631\u0636 \u0623\u0628\u0633\u0637 \u0648\u0623\u0648\u0636\u062D.","services.commerce.outcome":"\u0631\u062D\u0644\u0629 \u0634\u0631\u0627\u0621 \u0623\u0633\u0647\u0644","services.integrations.title":"\u0631\u0628\u0637 \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u062A\u0634\u063A\u064A\u0644","services.integrations.body":"\u0646\u0631\u0628\u0637 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0648\u0644\u0648\u062D\u0627\u062A \u0627\u0644\u062A\u062D\u0643\u0645 \u0645\u0639 APIs \u0648\u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0644\u062A\u0642\u0644\u064A\u0644 \u0646\u0642\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u064A\u062F\u0648\u064A\u0627.","services.integrations.outcome":"\u0625\u062F\u0627\u0631\u0629 \u064A\u062F\u0648\u064A\u0629 \u0623\u0642\u0644","services.support.title":"\u062F\u0639\u0645 \u0648\u062A\u062D\u0633\u064A\u0646 \u0628\u0639\u062F \u0627\u0644\u0625\u0637\u0644\u0627\u0642","services.support.body":"\u0646\u062F\u0639\u0645 \u0627\u0644\u0625\u0635\u062F\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0625\u0635\u0644\u0627\u062D\u0627\u062A \u0648\u062A\u062D\u0633\u064A\u0646\u0627\u062A UX \u0648\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u062A\u0637\u0648\u064A\u0631\u0627\u062A \u0635\u063A\u064A\u0631\u0629 \u062D\u062A\u0649 \u064A\u0633\u062A\u0645\u0631 \u0627\u0644\u0645\u0646\u062A\u062C \u0641\u064A \u0627\u0644\u062A\u062D\u0633\u0646 \u0628\u0639\u062F \u0627\u0644\u0625\u0637\u0644\u0627\u0642.","services.support.outcome":"\u062A\u0637\u0648\u064A\u0631 \u0645\u0646\u062A\u062C \u0645\u0633\u062A\u0642\u0631","process.kicker":"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0633\u0644\u064A\u0645","process.title":"\u0646\u0638\u0627\u0645 \u062A\u0646\u0641\u064A\u0630 \u0639\u0645\u0644\u064A \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C \u0632\u062E\u0645\u0627 \u0648\u0627\u0636\u062D\u0627","process.body":"\u0643\u0644 \u062A\u0639\u0627\u0648\u0646 \u0645\u0628\u0646\u064A \u062D\u0648\u0644 \u0642\u0631\u0627\u0631\u0627\u062A \u0648\u0645\u062E\u0631\u062C\u0627\u062A \u0648\u062C\u0627\u0647\u0632\u064A\u0629 \u0625\u0637\u0644\u0627\u0642. \u062A\u0639\u0631\u0641 \u0645\u0627 \u0627\u0644\u0630\u064A \u064A\u062A\u0645 \u0628\u0646\u0627\u0624\u0647\u060C \u0648\u0644\u0645\u0627\u0630\u0627 \u064A\u0647\u0645\u060C \u0648\u0645\u0627 \u0627\u0644\u0630\u064A \u064A\u0635\u0628\u062D \u0642\u0627\u0628\u0644\u0627 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0641\u064A \u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629.","process.step1.title":"\u062A\u0634\u062E\u064A\u0635","process.step1.point1":"\u0645\u0631\u0627\u062C\u0639\u0629 \u0647\u062F\u0641 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641","process.step1.point2":"\u062A\u062F\u0642\u064A\u0642 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648 \u0627\u0644\u0645\u0646\u062A\u062C \u0623\u0648 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062D\u0627\u0644\u064A","process.step1.point3":"\u0623\u0633\u0631\u0639 \u0637\u0631\u064A\u0642 \u0644\u0642\u064A\u0645\u0629 \u062A\u062C\u0627\u0631\u064A\u0629 \u0648\u0627\u0636\u062D\u0629","process.step2.title":"\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0646\u0637\u0627\u0642","process.step2.point1":"\u0623\u0648\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0648\u062D\u062F\u0648\u062F \u0627\u0644\u0625\u0637\u0644\u0627\u0642","process.step2.point2":"\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0648\u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062D\u0648\u064A\u0644","process.step2.point3":"\u0627\u0644\u062C\u062F\u0648\u0644 \u0648\u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F\u064A\u0627\u062A \u0648\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u062A\u0633\u0644\u064A\u0645","process.step3.title":"\u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u0635\u0645\u064A\u0645","process.step3.point1":"\u062A\u062E\u0637\u064A\u0637\u0627\u062A \u0645\u062A\u062C\u0627\u0648\u0628\u0629 \u0648\u062D\u0627\u0644\u0627\u062A \u0644\u0644\u0645\u0643\u0648\u0646\u0627\u062A","process.step3.point2":"\u062A\u062F\u0631\u062C \u0645\u062D\u062A\u0648\u0649 \u0648\u0625\u0634\u0627\u0631\u0627\u062A \u062B\u0642\u0629","process.step3.point3":"\u0623\u0646\u0645\u0627\u0637 \u0648\u0627\u062C\u0647\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645","process.step4.title":"\u0628\u0646\u0627\u0621","process.step4.point1":"\u0645\u0643\u0648\u0646\u0627\u062A Angular \u0645\u0633\u062A\u0642\u0644\u0629","process.step4.point2":"\u0646\u0645\u0627\u0630\u062C typed \u0648\u0647\u064A\u0643\u0644 \u0642\u0627\u0628\u0644 \u0644\u0644\u0635\u064A\u0627\u0646\u0629","process.step4.point3":"\u0623\u062F\u0627\u0621 \u0648\u0646\u0645\u0627\u0630\u062C \u0648\u062D\u0631\u0643\u0629 \u0648\u062A\u0643\u0627\u0645\u0644\u0627\u062A","process.step5.title":"\u0625\u0637\u0644\u0627\u0642","process.step5.point1":"\u0646\u0633\u062E\u0629 \u0625\u0646\u062A\u0627\u062C \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0646\u0634\u0631","process.step5.point2":"\u0627\u062E\u062A\u0628\u0627\u0631 \u062A\u062C\u0627\u0648\u0628 \u0648\u0645\u062A\u0635\u0641\u062D\u0627\u062A","process.step5.point3":"\u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u062D\u062A\u0648\u0649 \u0648SEO \u0648\u062A\u0633\u0644\u064A\u0645","process.step6.title":"\u062A\u062D\u0633\u064A\u0646","process.step6.point1":"\u062A\u062D\u0633\u064A\u0646\u0627\u062A UX \u0648\u0645\u062D\u062A\u0648\u0649 \u0628\u0646\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0627\u0633","process.step6.point2":"\u0642\u0627\u0626\u0645\u0629 \u0645\u064A\u0632\u0627\u062A \u0648\u0623\u0648\u0644\u0648\u064A\u0627\u062A \u0646\u0645\u0648","process.step6.point3":"\u0645\u0633\u0627\u0631 \u0635\u064A\u0627\u0646\u0629 \u0644\u0644\u0625\u0635\u062F\u0627\u0631\u0627\u062A \u0627\u0644\u0642\u0627\u062F\u0645\u0629","process.model1.label":"Sprint","process.model1.title":"Discovery Sprint","process.model1.body":"\u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C \u0646\u0637\u0627\u0642\u0627 \u0648\u0627\u0636\u062D\u0627 \u0648\u0639\u0631\u0636\u0627 \u0648\u062E\u0631\u064A\u0637\u0629 \u0635\u0641\u062D\u0627\u062A \u0648\u0627\u062A\u062C\u0627\u0647 \u0645\u0646\u062A\u062C \u0642\u0628\u0644 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0641\u064A \u0628\u0646\u0627\u0621 \u0643\u0627\u0645\u0644.","process.model1.meta":"\u0645\u0646\u0627\u0633\u0628 \u0642\u0628\u0644 \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u062C\u062F\u064A\u062F","process.model2.label":"Build","process.model2.title":"Website or MVP Build","process.model2.body":"\u0644\u0645\u0646 \u064A\u062D\u062A\u0627\u062C \u0645\u0648\u0642\u0639\u0627 \u0645\u0635\u0642\u0648\u0644\u0627 \u0623\u0648 landing system \u0623\u0648 MVP \u0623\u0648 \u0648\u0627\u062C\u0647\u0629 \u0645\u0646\u062A\u062C \u0628\u062A\u0646\u0641\u064A\u0630 \u0647\u0646\u062F\u0633\u064A \u0639\u0645\u0644\u064A.","process.model2.meta":"\u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u062C\u0627\u0647\u0632 \u0644\u0644\u0625\u0637\u0644\u0627\u0642","process.model3.label":"Growth","process.model3.title":"Platform Upgrade Retainer","process.model3.body":"\u0644\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629 \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C \u062A\u062D\u0633\u064A\u0646\u0627\u062A UX \u0648\u0625\u0635\u062F\u0627\u0631\u0627\u062A \u0645\u064A\u0632\u0627\u062A \u0648\u0623\u062F\u0627\u0621 \u0648\u062A\u0646\u0638\u064A\u0641\u0627 \u062A\u0642\u0646\u064A\u0627 \u0645\u0633\u062A\u0645\u0631\u0627.","process.model3.meta":"\u0645\u0646\u0627\u0633\u0628 \u0628\u0639\u062F \u0638\u0647\u0648\u0631 \u0625\u0634\u0627\u0631\u0629 \u0633\u0648\u0642\u064A\u0629","contact.option.launch":"\u0645\u0648\u0642\u0639 \u062C\u0627\u0647\u0632 \u0644\u0644\u0625\u064A\u0631\u0627\u062F","contact.option.mvp":"MVP \u0623\u0648 \u0645\u0646\u062A\u062C \u062C\u062F\u064A\u062F","contact.option.platform":"SaaS / \u0628\u0648\u0627\u0628\u0629 / \u0645\u0646\u0635\u0629","contact.option.dashboard":"\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0623\u0648 \u0623\u062F\u0627\u0629 \u062F\u0627\u062E\u0644\u064A\u0629","contact.option.optimization":"\u062A\u062D\u0633\u064A\u0646 \u0623\u0648 \u0625\u0639\u0627\u062F\u0629 \u0628\u0646\u0627\u0621","contact.budget":"\u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629","contact.chooseBudget":"\u0627\u062E\u062A\u0631 \u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629","contact.budget.option1":"\u0623\u0642\u0644 \u0645\u0646 3 \u0622\u0644\u0627\u0641 \u062F\u0648\u0644\u0627\u0631","contact.budget.option2":"3 - 8 \u0622\u0644\u0627\u0641 \u062F\u0648\u0644\u0627\u0631","contact.budget.option3":"8 - 20 \u0623\u0644\u0641 \u062F\u0648\u0644\u0627\u0631","contact.budget.option4":"20 \u0623\u0644\u0641 \u062F\u0648\u0644\u0627\u0631 \u0641\u0623\u0643\u062B\u0631","contact.timeline":"\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A","contact.chooseTimeline":"\u0627\u062E\u062A\u0631 \u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A","contact.timeline.option1":"\u0625\u0637\u0644\u0627\u0642 \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631","contact.timeline.option2":"\u0645\u0646 \u0634\u0647\u0631 \u0625\u0644\u0649 3 \u0623\u0634\u0647\u0631","contact.timeline.option3":"\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u062E\u0637\u064A\u0637","contact.legal":"\u0645\u0624\u0633\u0633\u0629 \u062A\u0642\u0646\u064A\u0629 \u0633\u0639\u0648\u062F\u064A\u0629 \u0645\u0633\u062C\u0644\u0629","footer.rights":"\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629."}},Ni=class r{constructor(e,t){this.platformId=e;this.document=t;this.contentOverrides.set(this.readStoredOverrides());let n=this.readStoredLanguage();this.setLanguage(n??"en",!1)}storageKey="devora-language";overridesStorageKey="devora-content-overrides";language=xa("en");contentOverrides=xa({});t(e){let t=this.contentOverrides()[this.language()]?.[e];return t!==void 0?t:Fl[this.language()][e]??Fl.en[e]??e}setTranslation(e,t,n=this.language()){let i=this.contentOverrides(),s=$i({},i[n]??{}),o=this.defaultText(e,n);t===o?delete s[e]:s[e]=t;let a=Bc($i({},i),{[n]:s});this.contentOverrides.set(a),this.persistOverrides(a)}resetTranslation(e,t=this.language()){this.setTranslation(e,this.defaultText(e,t),t)}resetAllTranslations(e=this.language()){let t=this.contentOverrides(),n=$i({},t);delete n[e],this.contentOverrides.set(n),this.persistOverrides(n)}defaultText(e,t=this.language()){return Fl[t][e]??Fl.en[e]??e}toggleLanguage(){this.setLanguage(this.language()==="en"?"ar":"en")}setLanguage(e,t=!0){this.language.set(e);let n=this.document.documentElement;n.lang=e,n.dir=e==="ar"?"rtl":"ltr",n.classList.toggle("lang-ar",e==="ar"),t&&In(this.platformId)&&localStorage.setItem(this.storageKey,e)}readStoredLanguage(){if(!In(this.platformId))return null;let e=localStorage.getItem(this.storageKey);return e==="en"||e==="ar"?e:null}readStoredOverrides(){if(!In(this.platformId))return{};try{let e=localStorage.getItem(this.overridesStorageKey);return e?JSON.parse(e):{}}catch{return{}}}persistOverrides(e){In(this.platformId)&&localStorage.setItem(this.overridesStorageKey,JSON.stringify(e))}static \u0275fac=function(t){return new(t||r)(_a(Qi),_a(Vc))};static \u0275prov=zc({token:r,factory:r.\u0275fac,providedIn:"root"})};function wv(r,e){if(r&1&&(pe(0,"option"),Te(1),me()),r&2){let t=e.$implicit,n=gt();Ct("data-edit-key",t),Q(),Re(n.i18n.t(t))}}function Tv(r,e){if(r&1&&(pe(0,"option"),Te(1),me()),r&2){let t=e.$implicit,n=gt();Ct("data-edit-key",t),Q(),Re(n.i18n.t(t))}}function Ev(r,e){if(r&1&&(pe(0,"option"),Te(1),me()),r&2){let t=e.$implicit,n=gt();Ct("data-edit-key",t),Q(),Re(n.i18n.t(t))}}function Cv(r,e){if(r&1&&(pe(0,"p",34),Te(1),me()),r&2){let t=gt();Q(),Re(t.i18n.t("contact.success"))}}var Ig=class r{constructor(e,t,n){this.gsapService=e;this.elementRef=t;this.i18n=n}submitted=!1;serviceKeys=["contact.option.launch","contact.option.mvp","contact.option.platform","contact.option.dashboard","contact.option.optimization"];budgetKeys=["contact.budget.option1","contact.budget.option2","contact.budget.option3","contact.budget.option4"];timelineKeys=["contact.timeline.option1","contact.timeline.option2","contact.timeline.option3"];animationContext;ngAfterViewInit(){this.animationContext=this.gsapService.context(this.elementRef.nativeElement,()=>{let e=this.gsapService.gsap,t=e.utils.selector(this.elementRef.nativeElement);this.gsapService.sectionReveal(this.elementRef.nativeElement),e.from(t(".form-field"),{opacity:0,y:40,duration:.8,stagger:.1,ease:"power3.out",clearProps:"transform,opacity",scrollTrigger:{trigger:t(".contact-card")[0],start:"top 80%"}}),e.from(t(".contact-info"),{opacity:0,filter:"blur(20px)",scale:.9,duration:1.2,ease:"power2.out",clearProps:"filter,transform,opacity",scrollTrigger:{trigger:t(".contact-card")[0],start:"top 80%"}}),e.to(t(".contact-track span"),{xPercent:110,repeat:-1,duration:4.2,ease:"none"})})}ngOnDestroy(){this.animationContext?.revert()}onSubmit(){this.submitted=!0}static \u0275fac=function(t){return new(t||r)(tn(Fi),tn(Ji),tn(Ni))};static \u0275cmp=Ai({type:r,selectors:[["app-contact"]],decls:64,vars:19,consts:[["id","contact",1,"contact-section","section-padding"],[1,"container"],[1,"contact-card","glass"],[1,"contact-info"],["data-edit-key","contact.kicker",1,"section-kicker","motion-item"],["data-edit-key","contact.title",1,"section-title","motion-item"],["data-edit-key","contact.body",1,"section-copy","motion-item"],[1,"contact-details","motion-item"],["href","mailto:hello@devora.studio"],["data-edit-key","contact.legal"],["data-edit-key","contact.location"],["aria-hidden","true",1,"contact-track"],[1,"contact-form",3,"ngSubmit"],[1,"form-grid"],[1,"form-field"],["data-edit-key","contact.name"],["type","text","data-edit-key","contact.namePlaceholder",3,"placeholder"],["data-edit-key","contact.email"],["type","email","data-edit-key","contact.emailPlaceholder",3,"placeholder"],[1,"form-field","full"],["data-edit-key","contact.service"],["selected","","disabled","","data-edit-key","contact.chooseService"],["data-edit-key","contact.budget"],["selected","","disabled","","data-edit-key","contact.chooseBudget"],["data-edit-key","contact.timeline"],["selected","","disabled","","data-edit-key","contact.chooseTimeline"],["data-edit-key","contact.details"],["rows","5","data-edit-key","contact.detailsPlaceholder",3,"placeholder"],["type","submit",1,"submit-button","btn-primary-neon"],["data-edit-key","contact.submit"],["width","18","height","18","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","m22 2-7 20-4-9-9-4 20-7Z"],["d","M22 2 11 13"],["class","success-message","data-edit-key","contact.success",4,"ngIf"],["data-edit-key","contact.success",1,"success-message"]],template:function(t,n){t&1&&(pe(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),Te(5),me(),pe(6,"h2",5),Te(7),me(),pe(8,"p",6),Te(9),me(),pe(10,"div",7)(11,"a",8),Te(12,"hello@devora.studio"),me(),pe(13,"span",9),Te(14),me(),pe(15,"span",10),Te(16),me()(),pe(17,"div",11),Xt(18,"span"),me()(),pe(19,"form",12),ci("ngSubmit",function(){return n.onSubmit()}),pe(20,"div",13)(21,"label",14)(22,"span",15),Te(23),me(),Xt(24,"input",16),me(),pe(25,"label",14)(26,"span",17),Te(27),me(),Xt(28,"input",18),me(),pe(29,"label",19)(30,"span",20),Te(31),me(),pe(32,"select")(33,"option",21),Te(34),me(),er(35,wv,2,2,"option",null,Hc),me()(),pe(37,"label",14)(38,"span",22),Te(39),me(),pe(40,"select")(41,"option",23),Te(42),me(),er(43,Tv,2,2,"option",null,Hc),me()(),pe(45,"label",14)(46,"span",24),Te(47),me(),pe(48,"select")(49,"option",25),Te(50),me(),er(51,Ev,2,2,"option",null,Hc),me()(),pe(53,"label",19)(54,"span",26),Te(55),me(),Xt(56,"textarea",27),me()(),pe(57,"button",28)(58,"span",29),Te(59),me(),Ci(),pe(60,"svg",30),Xt(61,"path",31)(62,"path",32),me()(),Rn(63,Cv,2,1,"p",33),me()()()()),t&2&&(Q(5),Re(n.i18n.t("contact.kicker")),Q(2),Re(n.i18n.t("contact.title")),Q(2),Re(n.i18n.t("contact.body")),Q(5),Re(n.i18n.t("contact.legal")),Q(2),Re(n.i18n.t("contact.location")),Q(7),Re(n.i18n.t("contact.name")),Q(),Mt("placeholder",n.i18n.t("contact.namePlaceholder")),Q(3),Re(n.i18n.t("contact.email")),Q(),Mt("placeholder",n.i18n.t("contact.emailPlaceholder")),Q(3),Re(n.i18n.t("contact.service")),Q(3),Re(n.i18n.t("contact.chooseService")),Q(),tr(n.serviceKeys),Q(4),Re(n.i18n.t("contact.budget")),Q(3),Re(n.i18n.t("contact.chooseBudget")),Q(),tr(n.budgetKeys),Q(4),Re(n.i18n.t("contact.timeline")),Q(3),Re(n.i18n.t("contact.chooseTimeline")),Q(),tr(n.timelineKeys),Q(4),Re(n.i18n.t("contact.details")),Q(),Mt("placeholder",n.i18n.t("contact.detailsPlaceholder")),Q(3),Re(n.i18n.t("contact.submit")),Q(4),Mt("ngIf",n.submitted))},dependencies:[es,Xc,Cp,wp,Tp,Ep,Mp,Sp],styles:['.contact-section[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:transparent}.contact-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(280px,.82fr) minmax(0,1.18fr);gap:28px;overflow:hidden;padding:18px}.contact-info[_ngcontent-%COMP%]{position:relative;display:grid;align-content:space-between;gap:18px;min-height:440px;overflow:hidden;padding:22px;border:1px solid var(--border-soft);border-radius:8px;background:linear-gradient(135deg,rgba(0,229,255,.1),transparent 42%),linear-gradient(315deg,rgba(255,95,143,.1),transparent 48%),var(--surface)}.contact-details[_ngcontent-%COMP%]{display:grid;gap:9px;color:var(--text-secondary);font-weight:800}.contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--accent-cyan);text-decoration:none}.contact-track[_ngcontent-%COMP%]{position:absolute;right:22px;bottom:22px;left:22px;height:2px;overflow:hidden;background:var(--surface-strong)}.contact-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:46%;height:100%;background:linear-gradient(90deg,transparent,var(--accent-cyan),var(--accent-rose));transform:translate(-115%)}.contact-form[_ngcontent-%COMP%]{display:grid;align-content:center;gap:14px;padding:10px 6px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.form-field[_ngcontent-%COMP%]{position:relative;display:grid;gap:7px}.form-field.full[_ngcontent-%COMP%]{grid-column:1 / -1}.form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;width:fit-content;align-items:center;gap:8px;color:#f5f7ffc2;font-size:.72rem;font-weight:900;text-transform:uppercase}.form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:6px;height:6px;border-radius:50%;background:var(--accent-cyan);box-shadow:0 0 14px #00e5ff85;content:""}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;min-height:48px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:linear-gradient(135deg,rgba(0,229,255,.055),transparent 38%),#ffffff0d;color:var(--text-primary);outline:none;padding:12px 13px;appearance:none;-webkit-appearance:none;transition:border-color .25s ease,box-shadow .25s ease,background .25s ease,transform .25s ease}select[_ngcontent-%COMP%]{padding-inline-end:42px;cursor:pointer}.form-field[_ngcontent-%COMP%]:has(select):after{position:absolute;right:15px;bottom:18px;width:8px;height:8px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;color:var(--text-muted);content:"";pointer-events:none;transform:rotate(45deg)}[dir="rtl"][_nghost-%COMP%]   .form-field[_ngcontent-%COMP%]:has(select):after, [dir="rtl"]   [_nghost-%COMP%]   .form-field[_ngcontent-%COMP%]:has(select):after{right:auto;left:15px}[dir="rtl"][_nghost-%COMP%]   select[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   select[_ngcontent-%COMP%]{padding-inline:13px 42px}select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#101828}textarea[_ngcontent-%COMP%]{min-height:132px;resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{border-color:var(--accent-cyan);background:linear-gradient(135deg,rgba(0,229,255,.095),transparent 42%),#ffffff12;box-shadow:0 0 0 4px #00e5ff1a,0 16px 38px #0000002e;transform:translateY(-1px)}.submit-button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;border:0;border-radius:8px;background:linear-gradient(135deg,var(--accent-cyan),var(--accent-blue));color:#031018;font-weight:900;transition:transform .25s ease,box-shadow .25s ease}.submit-button[_ngcontent-%COMP%]:hover{box-shadow:0 18px 42px #00e5ff2e;transform:translateY(-3px)}.success-message[_ngcontent-%COMP%]{margin:0;color:var(--accent-green);font-weight:800}.theme-light[_nghost-%COMP%]   .contact-card[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-card[_ngcontent-%COMP%]{border-color:#0f172a24;background:linear-gradient(135deg,#fffffff5,#f4f8fce0),#f7fafc;box-shadow:0 26px 80px #0f172a1f}.theme-light[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{border-color:#0f172a24;background:linear-gradient(135deg,rgba(0,138,160,.08),transparent 44%),linear-gradient(315deg,rgba(217,47,103,.07),transparent 50%),#ffffffdb;box-shadow:inset 0 0 0 1px #ffffff94}.theme-light[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]{color:#061426b8}.theme-light[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#008aa0}.theme-light[_nghost-%COMP%]   .contact-track[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-track[_ngcontent-%COMP%]{background:#0f172a1f}.theme-light[_nghost-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#061426ad}.theme-light[_nghost-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, .theme-light   [_nghost-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{background:#008aa0;box-shadow:0 0 12px #008aa047}.theme-light[_nghost-%COMP%]   input[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   input[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   select[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   select[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   textarea[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{border-color:#0f172a29;background:linear-gradient(135deg,rgba(0,138,160,.035),transparent 38%),#ffffffeb;color:#061426;box-shadow:inset 0 1px #ffffffb8}.theme-light[_nghost-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .theme-light   [_nghost-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .theme-light[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, .theme-light   [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#06142675}.theme-light[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus, .theme-light   [_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus, .theme-light[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus, .theme-light   [_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus, .theme-light[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .theme-light   [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#008aa0;background:linear-gradient(135deg,rgba(0,138,160,.07),transparent 42%),#fff;box-shadow:0 0 0 4px #008aa01a,0 16px 34px #0f172a1a}.theme-light[_nghost-%COMP%]   .submit-button[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .submit-button[_ngcontent-%COMP%]{color:#04111f;box-shadow:0 16px 34px #2563eb29}.theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]{background:#f5f5f7!important;color:#1d1d1f!important}.theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1d1d1f!important;-webkit-text-fill-color:currentColor!important}.theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .section-copy[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .section-copy[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-section[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]{color:#1d1d1fb8!important}.theme-light[_nghost-%COMP%]   .contact-card[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-card[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-info[_ngcontent-%COMP%]{border-color:#0000001c!important;background:#ffffffeb!important;box-shadow:0 18px 48px #00000017!important}.theme-light[_nghost-%COMP%]   input[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   input[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   select[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   select[_ngcontent-%COMP%], .theme-light[_nghost-%COMP%]   textarea[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{border-color:#0000001c!important;background:#fff!important;color:#1d1d1f!important}@media(max-width:991.98px){.contact-card[_ngcontent-%COMP%]{grid-template-columns:1fr;max-width:760px;margin-inline:auto}.contact-info[_ngcontent-%COMP%]{min-height:320px}}@media(max-width:767.98px){.contact-section[_ngcontent-%COMP%]{overflow:visible}.contact-card[_ngcontent-%COMP%]{gap:16px;padding:12px;border-radius:14px}.contact-info[_ngcontent-%COMP%]{min-height:auto;align-content:start;gap:16px;padding:20px;border-radius:14px}.contact-info[_ngcontent-%COMP%]   .section-kicker[_ngcontent-%COMP%]{margin-bottom:2px;font-size:.68rem}.contact-info[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:clamp(1.82rem,8vw,2.45rem);line-height:1.16}.contact-info[_ngcontent-%COMP%]   .section-copy[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.72}.contact-details[_ngcontent-%COMP%]{gap:9px;font-size:.88rem;line-height:1.55;overflow-wrap:anywhere}.contact-track[_ngcontent-%COMP%]{position:relative;right:auto;bottom:auto;left:auto;width:100%;margin-top:6px}.contact-form[_ngcontent-%COMP%]{gap:14px;padding:16px;border:1px solid rgba(255,255,255,.08);border-radius:14px;background:linear-gradient(135deg,rgba(0,229,255,.04),transparent 42%),#ffffff09}.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:14px}textarea[_ngcontent-%COMP%]{min-height:124px}}@media(max-width:575.98px){.contact-card[_ngcontent-%COMP%]{gap:14px;padding:0;border:0;background:transparent;box-shadow:none}.theme-light[_nghost-%COMP%]   .contact-card[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .contact-card[_ngcontent-%COMP%]{border:0;background:transparent;box-shadow:none}.contact-info[_ngcontent-%COMP%]{padding:18px;border-radius:14px}.contact-info[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:clamp(1.68rem,8.6vw,2.18rem);line-height:1.18}.contact-info[_ngcontent-%COMP%]   .section-copy[_ngcontent-%COMP%]{font-size:.88rem}.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:13px}.form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{gap:7px;font-size:.64rem;line-height:1.35;width:auto}.form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{width:5px;height:5px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{min-height:48px;border-radius:12px;padding:11px 14px;background:linear-gradient(135deg,rgba(0,229,255,.07),transparent 42%),#ffffff12;font-size:.86rem;line-height:1.45}select[_ngcontent-%COMP%]{padding-inline-end:40px}.form-field[_ngcontent-%COMP%]:has(select):after{right:16px;bottom:17px}textarea[_ngcontent-%COMP%]{min-height:112px}.submit-button[_ngcontent-%COMP%]{min-height:46px;width:100%;text-align:center}}@media(max-width:374.98px){.contact-info[_ngcontent-%COMP%]{padding:16px}.contact-form[_ngcontent-%COMP%]{padding:14px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{min-height:46px;padding:10px 12px;font-size:.84rem}textarea[_ngcontent-%COMP%]{min-height:108px}}']})};var n0=0,Rf=1,i0=2;var Cc=1,r0=2,ha=3,Wr=0,ei=1,_r=2,xr=0,qi=1,Si=2,If=3,Of=4,s0=5;var bs=100,o0=101,a0=102,c0=103,l0=104,h0=200,u0=201,d0=202,f0=203,oh=204,ah=205,p0=206,m0=207,g0=208,_0=209,x0=210,v0=211,y0=212,b0=213,M0=214,ch=0,lh=1,hh=2,lo=3,uh=4,dh=5,fh=6,ph=7,Lf=0,S0=1,w0=2,Yi=0,Df=1,Ff=2,Nf=3,Uf=4,kf=5,Bf=6,zf=7;var vf=300,Ps=301,fo=302,Uh=303,kh=304,Ac=306,mh=1e3,fr=1001,gh=1002,Mn=1003,T0=1004;var Pc=1005;var En=1006,Bh=1007;var Rs=1008;var wi=1009,Vf=1010,Gf=1011,ua=1012,zh=1013,Ki=1014,ji=1015,vr=1016,Vh=1017,Gh=1018,da=1020,Hf=35902,Wf=35899,Xf=1021,qf=1022,Bi=1023,pr=1026,Is=1027,Yf=1028,Hh=1029,Os=1030,Wh=1031;var Xh=1033,Rc=33776,Ic=33777,Oc=33778,Lc=33779,qh=35840,Yh=35841,Kh=35842,jh=35843,Zh=36196,$h=37492,Jh=37496,Qh=37488,eu=37489,Dc=37490,tu=37491,nu=37808,iu=37809,ru=37810,su=37811,ou=37812,au=37813,cu=37814,lu=37815,hu=37816,uu=37817,du=37818,fu=37819,pu=37820,mu=37821,gu=36492,_u=36494,xu=36495,vu=36283,yu=36284,Fc=36285,bu=36286;var ac=2300,_h=2301,sh=2302,yf=2303,bf=2400,Mf=2401,Sf=2402;var E0=3200;var Kf=0,C0=1,qr="",vi="srgb",cc="srgb-linear",lc="linear",wt="srgb";var co=7680;var wf=519,A0=512,P0=513,R0=514,Mu=515,I0=516,O0=517,Su=518,L0=519,Tf=35044;var jf="300 es",Xi=2e3,hc=2001;function Av(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function uc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function D0(){let r=uc("canvas");return r.style.display="block",r}var Lg={},ia=null;function Zf(...r){let e="THREE."+r.shift();ia?ia("log",e,...r):console.log(e,...r)}function F0(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function We(...r){r=F0(r);let e="THREE."+r.shift();if(ia)ia("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function qe(...r){r=F0(r);let e="THREE."+r.shift();if(ia)ia("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function xh(...r){let e=r.join(" ");e in Lg||(Lg[e]=!0,We(...r))}function N0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var U0={[ch]:lh,[hh]:fh,[uh]:ph,[lo]:dh,[lh]:ch,[fh]:hh,[ph]:uh,[dh]:lo},mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dg=1234567,sc=Math.PI/180,ra=180/Math.PI;function fa(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function $f(r,e){return(r%e+e)%e}function Rv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Iv(r,e,t){return r!==e?(t-r)/(e-r):0}function oc(r,e,t){return(1-t)*r+t*e}function Ov(r,e,t,n){return oc(r,e,1-Math.exp(-t*n))}function Lv(r,e=1){return e-Math.abs($f(r,e*2)-e)}function Dv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Fv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Nv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Uv(r,e){return r+Math.random()*(e-r)}function kv(r){return r*(.5-Math.random())}function Bv(r){r!==void 0&&(Dg=r);let e=Dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zv(r){return r*sc}function Vv(r){return r*ra}function Gv(r){return(r&r-1)===0&&r!==0}function Hv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Wv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xv(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),u=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*f,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*f,a*l);break;case"ZXZ":r.set(c*f,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*d,a*l);break;case"YXY":r.set(c*d,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*d,a*h,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ta(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var po={DEG2RAD:sc,RAD2DEG:ra,generateUUID:fa,clamp:pt,euclideanModulo:$f,mapLinear:Rv,inverseLerp:Iv,lerp:oc,damp:Ov,pingpong:Lv,smoothstep:Dv,smootherstep:Fv,randInt:Nv,randFloat:Uv,randFloatSpread:kv,seededRandom:Bv,degToRad:zv,radToDeg:Vv,isPowerOfTwo:Gv,ceilPowerOfTwo:Hv,floorPowerOfTwo:Wv,setQuaternionFromProperEuler:Xv,normalize:Jn,denormalize:ta},xt=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gr=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||c!==u||l!==d||h!==g){let p=c*u+l*d+h*g+f*_;p<0&&(u=-u,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),S=Math.sin(y);m=Math.sin(m*y)/S,a=Math.sin(a*y)/S,c=c*m+u*a,l=l*m+d*a,h=h*m+g*a,f=f*m+_*a}else{c=c*m+u*a,l=l*m+d*a,h=h*m+g*a,f=f*m+_*a;let y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*f+c*d-l*u,e[t+1]=c*g+h*u+l*f-a*d,e[t+2]=l*g+h*d+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(s/2),u=c(n/2),d=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-s*f,this.z=i+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$d=new H,Fg=new gr,Je=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],S=i[4],b=i[7],C=i[2],T=i[5],E=i[8];return s[0]=o*_+a*y+c*C,s[3]=o*p+a*S+c*T,s[6]=o*m+a*b+c*E,s[1]=l*_+h*y+f*C,s[4]=l*p+h*S+f*T,s[7]=l*m+h*b+f*E,s[2]=u*_+d*y+g*C,s[5]=u*p+d*S+g*T,s[8]=u*m+d*b+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*s,d=l*s-o*c,g=t*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jd=new Je,Ng=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qv(){let r={enabled:!0,workingColorSpace:cc,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=Hr(i.r),i.g=Hr(i.g),i.b=Hr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=na(i.r),i.g=na(i.g),i.b=na(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qr?lc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return xh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return xh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[cc]:{primaries:e,whitePoint:n,transfer:lc,toXYZ:Ng,fromXYZ:Ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Ng,fromXYZ:Ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}var ft=qv();function Hr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function na(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ho,vh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=uc("canvas")),Ho.width=e.width,Ho.height=e.height;let i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ho}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uc("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hr(t[n]/255)*255):t[n]=Hr(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yv=0,sa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=fa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qd(i[o].image)):s.push(Qd(i[o]))}else s=Qd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Qd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Kv=0,ef=new H,Yr=(()=>{class r extends mr{constructor(t=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=fr,s=fr,o=En,a=Rs,c=Bi,l=wi,h=r.DEFAULT_ANISOTROPY,f=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=fa(),this.name="",this.source=new sa(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ef).x}get height(){return this.source.getSize(ef).y}get depth(){return this.source.getSize(ef).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mh:t.x=t.x-Math.floor(t.x);break;case fr:t.x=t.x<0?0:1;break;case gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mh:t.y=t.y-Math.floor(t.y);break;case fr:t.y=t.y<0?0:1;break;case gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=vf,r.DEFAULT_ANISOTROPY=1,r})(),$t=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,b=(d+1)/2,C=(m+1)/2,T=(h+u)/4,E=(f+_)/4,x=(g+p)/4;return S>b&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=E/n):b>C?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=x/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=x/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yh=class extends mr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Yr(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new sa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dc=class extends Yr{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bh=class extends Yr{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,n,i,s,o,a,c,l,h,f,u,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,f,u,d,g,_,p)}set(e,t,n,i,s,o,a,c,l,h,f,u,d,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=o*h,d=o*f,g=a*h,_=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,g=l*h,_=l*f;t[0]=u+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,g=l*h,_=l*f;t[0]=u-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*f,g=a*h,_=a*f;t[0]=c*h,t[4]=g*l-d,t[8]=u*l+_,t[1]=c*f,t[5]=_*l+u,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+g,t[10]=u-_*f}else if(e.order==="XZY"){let u=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+_,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Zv)}lookAt(e,t,n){let i=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ps.crossVectors(n,_i),ps.lengthSq()===0&&(Math.abs(n.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ps.crossVectors(n,_i)),ps.normalize(),Ul.crossVectors(_i,ps),i[0]=ps.x,i[4]=Ul.x,i[8]=_i.x,i[1]=ps.y,i[5]=Ul.y,i[9]=_i.y,i[2]=ps.z,i[6]=Ul.z,i[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],S=n[7],b=n[11],C=n[15],T=i[0],E=i[4],x=i[8],w=i[12],P=i[1],R=i[5],O=i[9],G=i[13],W=i[2],L=i[6],k=i[10],F=i[14],K=i[3],ee=i[7],I=i[11],ge=i[15];return s[0]=o*T+a*P+c*W+l*K,s[4]=o*E+a*R+c*L+l*ee,s[8]=o*x+a*O+c*k+l*I,s[12]=o*w+a*G+c*F+l*ge,s[1]=h*T+f*P+u*W+d*K,s[5]=h*E+f*R+u*L+d*ee,s[9]=h*x+f*O+u*k+d*I,s[13]=h*w+f*G+u*F+d*ge,s[2]=g*T+_*P+p*W+m*K,s[6]=g*E+_*R+p*L+m*ee,s[10]=g*x+_*O+p*k+m*I,s[14]=g*w+_*G+p*F+m*ge,s[3]=y*T+S*P+b*W+C*K,s[7]=y*E+S*R+b*L+C*ee,s[11]=y*x+S*O+b*k+C*I,s[15]=y*w+S*G+b*F+C*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],y=c*d-l*u,S=a*d-l*f,b=a*u-c*f,C=o*d-l*h,T=o*u-c*h,E=o*f-a*h;return t*(_*y-p*S+m*b)-n*(g*y-p*C+m*T)+i*(g*S-_*C+m*E)-s*(g*b-_*T+p*E)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=t*a-n*o,S=t*c-i*o,b=t*l-s*o,C=n*c-i*a,T=n*l-s*a,E=i*l-s*c,x=h*_-f*g,w=h*p-u*g,P=h*m-d*g,R=f*p-u*_,O=f*m-d*_,G=u*m-d*p,W=y*G-S*O+b*R+C*P-T*w+E*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/W;return e[0]=(a*G-c*O+l*R)*L,e[1]=(i*O-n*G-s*R)*L,e[2]=(_*E-p*T+m*C)*L,e[3]=(u*T-f*E-d*C)*L,e[4]=(c*P-o*G-l*w)*L,e[5]=(t*G-i*P+s*w)*L,e[6]=(p*b-g*E-m*S)*L,e[7]=(h*E-u*b+d*S)*L,e[8]=(o*O-a*P+l*x)*L,e[9]=(n*P-t*O-s*x)*L,e[10]=(g*T-_*b+m*y)*L,e[11]=(f*b-h*T-d*y)*L,e[12]=(a*w-o*R-c*x)*L,e[13]=(t*R-n*w+i*x)*L,e[14]=(_*S-g*C-p*y)*L,e[15]=(h*C-f*S+u*y)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,u=s*l,d=s*h,g=s*f,_=o*h,p=o*f,m=a*f,y=c*l,S=c*h,b=c*f,C=n.x,T=n.y,E=n.z;return i[0]=(1-(_+m))*C,i[1]=(d+b)*C,i[2]=(g-S)*C,i[3]=0,i[4]=(d-b)*T,i[5]=(1-(u+m))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(g+S)*E,i[9]=(p-y)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Wo.set(i[0],i[1],i[2]).length(),a=Wo.set(i[4],i[5],i[6]).length(),c=Wo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Gi.copy(this);let l=1/o,h=1/a,f=1/c;return Gi.elements[0]*=l,Gi.elements[1]*=l,Gi.elements[2]*=l,Gi.elements[4]*=h,Gi.elements[5]*=h,Gi.elements[6]*=h,Gi.elements[8]*=f,Gi.elements[9]*=f,Gi.elements[10]*=f,t.setFromRotationMatrix(Gi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,o,a=Xi,c=!1){let l=this.elements,h=2*s/(t-e),f=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===Xi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===hc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Xi,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i),g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===Xi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===hc)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wo=new H,Gi=new Zt,jv=new H(0,0,0),Zv=new H(1,1,1),ps=new H,Ul=new H,_i=new H,kg=new Zt,Bg=new gr,fc=(()=>{class r{constructor(t=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],f=s[9],u=s[2],d=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-f,g),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return kg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$v=0,zg=new H,Xo=new gr,Ur=new Zt,kl=new H,tc=new H,Jv=new H,Qv=new gr,Vg=new H(1,0,0),Gg=new H(0,1,0),Hg=new H(0,0,1),Wg={type:"added"},ey={type:"removed"},qo={type:"childadded",child:null},tf={type:"childremoved",child:null},Ls=(()=>{class r extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new H,n=new fc,i=new gr,s=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Je}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Xo.setFromAxisAngle(t,n),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(t,n){return Xo.setFromAxisAngle(t,n),this.quaternion.premultiply(Xo),this}rotateX(t){return this.rotateOnAxis(Vg,t)}rotateY(t){return this.rotateOnAxis(Gg,t)}rotateZ(t){return this.rotateOnAxis(Hg,t)}translateOnAxis(t,n){return zg.copy(t).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Vg,t)}translateY(t){return this.translateOnAxis(Gg,t)}translateZ(t){return this.translateOnAxis(Hg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?kl.copy(t):kl.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),tc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(tc,kl,this.up):Ur.lookAt(kl,tc,this.up),this.quaternion.setFromRotationMatrix(Ur),s&&(Ur.extractRotation(s.matrixWorld),Xo.setFromRotationMatrix(Ur),this.quaternion.premultiply(Xo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(qe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wg),qo.child=t,this.dispatchEvent(qo),qo.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ey),tf.child=t,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ur.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ur),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wg),qo.child=t,this.dispatchEvent(qo),qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tc,t,Jv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tc,Qv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*s,o[13]+=i-o[1]*n-o[5]*i-o[9]*s,o[14]+=s-o[2]*n-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Bc($i({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>$i({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){let u=l[h];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),f=a(t.images),u=a(t.shapes),d=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(c){let l=[];for(let h in c){let f=c[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return r.DEFAULT_UP=new H(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),Gr=class extends Ls{constructor(){super(),this.isGroup=!0,this.type="Group"}},ty={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function nf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=$f(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=nf(o,s,e+1/3),this.g=nf(o,s,e),this.b=nf(o,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=vi){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){let n=k0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return ft.workingToColorSpace(Vn.copy(this),e),Math.round(pt(Vn.r*255,0,255))*65536+Math.round(pt(Vn.g*255,0,255))*256+Math.round(pt(Vn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,i=Vn.g,s=Vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=vi){ft.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,i=Vn.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Bl);let n=oc(ms.h,Bl.h,t),i=oc(ms.s,Bl.s,t),s=oc(ms.l,Bl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new dt;dt.NAMES=k0;var pc=class extends Ls{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fc,this.environmentIntensity=1,this.environmentRotation=new fc,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hi=new H,kr=new H,rf=new H,Br=new H,Yo=new H,Ko=new H,Xg=new H,sf=new H,of=new H,af=new H,cf=new $t,lf=new $t,hf=new $t,ys=class r{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hi.subVectors(e,t),i.cross(Hi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Hi.subVectors(i,t),kr.subVectors(n,t),rf.subVectors(e,t);let o=Hi.dot(Hi),a=Hi.dot(kr),c=Hi.dot(rf),l=kr.dot(kr),h=kr.dot(rf),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Br)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Br.x),c.addScaledVector(o,Br.y),c.addScaledVector(a,Br.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return cf.setScalar(0),lf.setScalar(0),hf.setScalar(0),cf.fromBufferAttribute(e,t),lf.fromBufferAttribute(e,n),hf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(cf,s.x),o.addScaledVector(lf,s.y),o.addScaledVector(hf,s.z),o}static isFrontFacing(e,t,n,i){return Hi.subVectors(n,t),kr.subVectors(e,t),Hi.cross(kr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),Hi.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Yo.subVectors(i,n),Ko.subVectors(s,n),sf.subVectors(e,n);let c=Yo.dot(sf),l=Ko.dot(sf);if(c<=0&&l<=0)return t.copy(n);of.subVectors(e,i);let h=Yo.dot(of),f=Ko.dot(of);if(h>=0&&f<=h)return t.copy(i);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Yo,o);af.subVectors(e,s);let d=Yo.dot(af),g=Ko.dot(af);if(g>=0&&d<=g)return t.copy(s);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ko,a);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Xg.subVectors(s,i),a=(f-h)/(f-h+(d-g)),t.copy(i).addScaledVector(Xg,a);let m=1/(p+_+u);return o=_*m,a=u*m,t.copy(n).addScaledVector(Yo,o).addScaledVector(Ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ms=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zl.copy(n.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nc),Vl.subVectors(this.max,nc),jo.subVectors(e.a,nc),Zo.subVectors(e.b,nc),$o.subVectors(e.c,nc),gs.subVectors(Zo,jo),_s.subVectors($o,Zo),ro.subVectors(jo,$o);let t=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-ro.z,ro.y,gs.z,0,-gs.x,_s.z,0,-_s.x,ro.z,0,-ro.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-ro.y,ro.x,0];return!uf(t,jo,Zo,$o,Vl)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,jo,Zo,$o,Vl))?!1:(Gl.crossVectors(gs,_s),t=[Gl.x,Gl.y,Gl.z],uf(t,jo,Zo,$o,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zr=[new H,new H,new H,new H,new H,new H,new H,new H],Wi=new H,zl=new Ms,jo=new H,Zo=new H,$o=new H,gs=new H,_s=new H,ro=new H,nc=new H,Vl=new H,Gl=new H,so=new H;function uf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){so.fromArray(r,s);let a=i.x*Math.abs(so.x)+i.y*Math.abs(so.y)+i.z*Math.abs(so.z),c=e.dot(so),l=t.dot(so),h=n.dot(so);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var cn=new H,Hl=new xt,ny=0,ln=class extends mr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ny++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tf,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ta(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),i=Jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),i=Jn(i,this.array),s=Jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var mc=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var gc=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bn=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},iy=new Ms,ic=new H,df=new H,ho=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):iy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ic.subVectors(e,this.center);let t=ic.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ic,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ic.copy(e.center).add(df)),this.expandByPoint(ic.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ry=0,Ui=new Zt,ff=new Ls,Jo=new H,xi=new Ms,rc=new Ms,yn=new H,Cn=class r extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?gc:mc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,n){return Ui.makeTranslation(e,t,n),this.applyMatrix4(Ui),this}scale(e,t,n){return Ui.makeScale(e,t,n),this.applyMatrix4(Ui),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];rc.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(xi.min,rc.min),xi.expandByPoint(yn),yn.addVectors(xi.max,rc.max),xi.expandByPoint(yn)):(xi.expandByPoint(rc.min),xi.expandByPoint(rc.max))}xi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)yn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)yn.fromBufferAttribute(a,l),c&&(Jo.fromBufferAttribute(e,l),yn.add(Jo)),i=Math.max(i,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new H,c[x]=new H;let l=new H,h=new H,f=new H,u=new xt,d=new xt,g=new xt,_=new H,p=new H;function m(x,w,P){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,P),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,P),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[x].add(_),a[w].add(_),a[P].add(_),c[x].add(p),c[w].add(p),c[P].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,w=y.length;x<w;++x){let P=y[x],R=P.start,O=P.count;for(let G=R,W=R+O;G<W;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new H,b=new H,C=new H,T=new H;function E(x){C.fromBufferAttribute(i,x),T.copy(C);let w=a[x];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),b.crossVectors(T,w);let R=b.dot(c[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,R)}for(let x=0,w=y.length;x<w;++x){let P=y[x],R=P.start,O=P.count;for(let G=R,W=R+O;G<W;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new H,s=new H,o=new H,a=new H,c=new H,l=new H,h=new H,f=new H;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new ln(u,h,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],f=s[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sy=0,Ss=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=qi,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oh&&(n.blendSrc=this.blendSrc),this.blendDst!==ah&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(n.stencilFail=this.stencilFail),this.stencilZFail!==co&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Vr=new H,pf=new H,Wl=new H,xs=new H,mf=new H,Xl=new H,gf=new H,ca=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pf.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(pf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Wl),a=xs.dot(this.direction),c=-xs.dot(Wl),l=xs.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=s*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(pf).addScaledVector(Wl,u),d}intersectSphere(e,t){Vr.subVectors(e.center,this.origin);let n=Vr.dot(this.direction),i=Vr.dot(Vr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,i,s){mf.subVectors(t,e),Xl.subVectors(n,e),gf.crossVectors(mf,Xl);let o=this.direction.dot(gf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);let c=a*this.direction.dot(Xl.crossVectors(xs,Xl));if(c<0)return null;let l=a*this.direction.dot(mf.cross(xs));if(l<0||c+l>o)return null;let h=-a*xs.dot(gf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ws=class extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fc,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qg=new Zt,oo=new ca,ql=new ho,Yg=new H,Yl=new H,Kl=new H,jl=new H,_f=new H,Zl=new H,Kg=new H,$l=new H,Qn=class extends Ls{constructor(e=new Cn,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Zl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],f=s[c];h!==0&&(_f.fromBufferAttribute(f,e),o?Zl.addScaledVector(_f,h):Zl.addScaledVector(_f.sub(t),h))}t.add(Zl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(s),oo.copy(e.ray).recast(e.near),!(ql.containsPoint(oo.origin)===!1&&(oo.intersectSphere(ql,Yg)===null||oo.origin.distanceToSquared(Yg)>(e.far-e.near)**2))&&(qg.copy(s).invert(),oo.copy(e.ray).applyMatrix4(qg),!(n.boundingBox!==null&&oo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oo)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,C=S;b<C;b+=3){let T=a.getX(b),E=a.getX(b+1),x=a.getX(b+2);i=Jl(this,m,e,n,l,h,f,T,E,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let y=a.getX(p),S=a.getX(p+1),b=a.getX(p+2);i=Jl(this,o,e,n,l,h,f,y,S,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,C=S;b<C;b+=3){let T=b,E=b+1,x=b+2;i=Jl(this,m,e,n,l,h,f,T,E,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let y=p,S=p+1,b=p+2;i=Jl(this,o,e,n,l,h,f,y,S,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function oy(r,e,t,n,i,s,o,a){let c;if(e.side===ei?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Wr,a),c===null)return null;$l.copy(a),$l.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo($l);return l<t.near||l>t.far?null:{distance:l,point:$l.clone(),object:r}}function Jl(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Yl),r.getVertexPosition(c,Kl),r.getVertexPosition(l,jl);let h=oy(r,e,t,n,Yl,Kl,jl,Kg);if(h){let f=new H;ys.getBarycoord(Kg,Yl,Kl,jl,f),i&&(h.uv=ys.getInterpolatedAttribute(i,a,c,l,f,new xt)),s&&(h.uv1=ys.getInterpolatedAttribute(s,a,c,l,f,new xt)),o&&(h.normal=ys.getInterpolatedAttribute(o,a,c,l,f,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new H,materialIndex:0};ys.getNormal(Yl,Kl,jl,u.normal),h.face=u,h.barycoord=f}return h}var Mh=class extends Yr{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Mn,h=Mn,f,u){super(null,o,a,c,l,h,i,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xf=new H,ay=new H,cy=new Je,ki=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xf.subVectors(n,t).cross(ay.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(xf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cy.getNormalMatrix(e),i=this.coplanarPoint(xf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ao=new ho,ly=new xt(.5,.5),Ql=new H,_c=class{constructor(e=new ki,t=new ki,n=new ki,i=new ki,s=new ki,o=new ki){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],y=s[12],S=s[13],b=s[14],C=s[15];if(i[0].setComponents(l-o,d-h,m-g,C-y).normalize(),i[1].setComponents(l+o,d+h,m+g,C+y).normalize(),i[2].setComponents(l+a,d+f,m+_,C+S).normalize(),i[3].setComponents(l-a,d-f,m-_,C-S).normalize(),n)i[4].setComponents(c,u,p,b).normalize(),i[5].setComponents(l-c,d-u,m-p,C-b).normalize();else if(i[4].setComponents(l-c,d-u,m-p,C-b).normalize(),t===Xi)i[5].setComponents(l+c,d+u,m+p,C+b).normalize();else if(t===hc)i[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ao.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ao.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ao)}intersectsSprite(e){ao.center.set(0,0,0);let t=ly.distanceTo(e.center);return ao.radius=.7071067811865476+t,ao.applyMatrix4(e.matrixWorld),this.intersectsSphere(ao)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ql.x=i.normal.x>0?e.max.x:e.min.x,Ql.y=i.normal.y>0?e.max.y:e.min.y,Ql.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ts=class extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jg=new Zt,Ef=new ca,eh=new ho,th=new H,uo=class extends Ls{constructor(e=new Cn,t=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eh.copy(n.boundingSphere),eh.applyMatrix4(i),eh.radius+=s,e.ray.intersectsSphere(eh)===!1)return;jg.copy(i).invert(),Ef.copy(e.ray).applyMatrix4(jg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,_=d;g<_;g++){let p=l.getX(g);th.fromBufferAttribute(f,p),Zg(th,p,c,i,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)th.fromBufferAttribute(f,g),Zg(th,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Zg(r,e,t,n,i,s,o){let a=Ef.distanceSqToPoint(r);if(a<t){let c=new H;Ef.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xc=class extends Yr{constructor(e=[],t=Ps,n,i,s,o,a,c,l,h){super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Xr=class extends Yr{constructor(e,t,n=Ki,i,s,o,a=Mn,c=Mn,l,h=pr,f=1){if(h!==pr&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sh=class extends Xr{constructor(e,t=Ki,n=Ps,i,s,o=Mn,a=Mn,c,l=pr){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},vc=class extends Yr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},la=class r extends Cn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new bn(l,3)),this.setAttribute("normal",new bn(h,3)),this.setAttribute("uv",new bn(f,2));function g(_,p,m,y,S,b,C,T,E,x,w){let P=b/E,R=C/x,O=b/2,G=C/2,W=T/2,L=E+1,k=x+1,F=0,K=0,ee=new H;for(let I=0;I<k;I++){let ge=I*R-G;for(let Ce=0;Ce<L;Ce++){let Ze=Ce*P-O;ee[_]=Ze*y,ee[p]=ge*S,ee[m]=W,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[m]=T>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(Ce/E),f.push(1-I/x),F+=1}}for(let I=0;I<x;I++)for(let ge=0;ge<E;ge++){let Ce=u+ge+L*I,Ze=u+ge+L*(I+1),Ge=u+(ge+1)+L*(I+1),Ne=u+(ge+1)+L*I;c.push(Ce,Ze,Ne),c.push(Ze,Ge,Ne),K+=6}a.addGroup(d,K,w),d+=K,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var yc=class r extends Cn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new H,h=new xt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new bn(o,3)),this.setAttribute("normal",new bn(a,3)),this.setAttribute("uv",new bn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var bc=class r extends Cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=e/a,u=t/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let y=m*u-o;for(let S=0;S<l;S++){let b=S*f-s;g.push(b,-y,0),_.push(0,0,1),p.push(S/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let S=y+l*m,b=y+l*(m+1),C=y+1+l*(m+1),T=y+1+l*m;d.push(S,b,T),d.push(b,C,T)}this.setIndex(d),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(_,3)),this.setAttribute("uv",new bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Mc=class r extends Cn{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],f=e,u=(t-e)/i,d=new H,g=new xt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){let m=s+p/n*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<i;_++){let p=_*(n+1);for(let m=0;m<n;m++){let y=m+p,S=y,b=y+n+1,C=y+n+2,T=y+1;a.push(S,b,T),a.push(b,C,T)}}this.setIndex(a),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(l,3)),this.setAttribute("uv",new bn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function mo(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if($g(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if($g(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Hn(r){let e={};for(let t=0;t<r.length;t++){let n=mo(r[t]);for(let i in n)e[i]=n[i]}return e}function $g(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function hy(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var B0={clone:mo,merge:Hn},uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wh=class extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Th=class extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eh=class extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nh(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var Es=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends Es{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bf,endingEnd:bf}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mf:s=e,a=2*t-n;break;case Sf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mf:o=e,c=2*n-t;break;case Sf:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,S=(-1-d)*p+(1.5+d)*_+.5*g,b=d*p-d*_;for(let C=0;C!==a;++C)s[C]=m*o[h+C]+y*o[l+C]+S*o[c+C]+b*o[f+C];return s}},Ah=class extends Es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*f+o[c+u]*h;return s}},Ph=class extends Es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Rh=class extends Es{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.settings||this.DefaultSettings_,f=h.inTangents,u=h.outTangents;if(!f||!u){let _=(n-t)/(i-t),p=1-_;for(let m=0;m!==a;++m)s[m]=o[l+m]*p+o[c+m]*_;return s}let d=a*2,g=e-1;for(let _=0;_!==a;++_){let p=o[l+_],m=o[c+_],y=g*d+_*2,S=u[y],b=u[y+1],C=e*d+_*2,T=f[C],E=f[C+1],x=(n-t)/(i-t),w,P,R,O,G;for(let W=0;W<8;W++){w=x*x,P=w*x,R=1-x,O=R*R,G=O*R;let k=G*t+3*O*x*S+3*R*w*T+P*i-n;if(Math.abs(k)<1e-10)break;let F=3*O*(S-t)+6*R*x*(T-S)+3*w*(i-T);if(Math.abs(F)<1e-10)break;x=x-k/F,x=Math.max(0,Math.min(1,x))}s[_]=G*p+3*O*x*b+3*R*w*E+P*m}return s}},Mi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nh(t,this.TimeBufferType),this.values=nh(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nh(e.times,Array),values:nh(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ac:t=this.InterpolantFactoryMethodDiscrete;break;case _h:t=this.InterpolantFactoryMethodLinear;break;case sh:t=this.InterpolantFactoryMethodSmooth;break;case yf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ac;case this.InterpolantFactoryMethodLinear:return _h;case this.InterpolantFactoryMethodSmooth:return sh;case this.InterpolantFactoryMethodBezier:return yf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Pv(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[u+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=_h;var Cs=class extends Mi{constructor(e,t,n){super(e,t,n)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=ac;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}};Ih.prototype.ValueTypeName="color";var Oh=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}};Oh.prototype.ValueTypeName="number";var Lh=class extends Es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)gr.slerpFlat(s,0,o,l-a,o,l,c);return s}},Sc=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}};Sc.prototype.ValueTypeName="quaternion";Sc.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends Mi{constructor(e,t,n){super(e,t,n)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ac;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Dh=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}};Dh.prototype.ValueTypeName="vector";var ih=new H,rh=new gr,dr=new H,wc=class extends Ls{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ih,rh,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ih,rh,dr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ih,rh,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ih,rh,dr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new H,Jg=new xt,Qg=new xt,Gn=class extends wc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,Jg,Qg),t.subVectors(Qg,Jg)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tc=class extends wc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Qo=-90,ea=1,Fh=class extends Ls{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gn(Qo,ea,e,t);i.layers=this.layers,this.add(i);let s=new Gn(Qo,ea,e,t);s.layers=this.layers,this.add(s);let o=new Gn(Qo,ea,e,t);o.layers=this.layers,this.add(o);let a=new Gn(Qo,ea,e,t);a.layers=this.layers,this.add(a);let c=new Gn(Qo,ea,e,t);c.layers=this.layers,this.add(c);let l=new Gn(Qo,ea,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Nh=class extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Qf="\\[\\]\\.:\\/",fy=new RegExp("["+Qf+"]","g"),ep="[^"+Qf+"]",py="[^"+Qf.replace("\\.","")+"]",my=/((?:WC+[\/:])*)/.source.replace("WC",ep),gy=/(WCOD+)?/.source.replace("WCOD",py),_y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ep),xy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ep),vy=new RegExp("^"+my+gy+_y+xy+"$"),yy=["material","materials","bones","map"],Cf=class{constructor(e,t,n){let i=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jt=(()=>{class r{constructor(t,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,n,i):new r(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fy,"")}static parseTrackName(t){let n=vy.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);yy.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=i(c.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=r.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;qe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=Cf,r})();jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mT=new Float32Array(1);var e0=new Zt,Ec=class{constructor(e,t,n=0,i=1/0){this.ray=new ca(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return e0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(e0),this}intersectObject(e,t=!0,n=[]){return Af(e,this,n,t),n.sort(t0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Af(e[i],this,n,t);return n.sort(t0),n}};function t0(r,e){return r.distance-e.distance}function Af(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Af(s[o],e,t,!0)}}var Pf=class r{static{r.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function tp(r,e,t,n){let i=by(n);switch(t){case Xf:return r*e;case Yf:return r*e/i.components*i.byteLength;case Hh:return r*e/i.components*i.byteLength;case Os:return r*e*2/i.components*i.byteLength;case Wh:return r*e*2/i.components*i.byteLength;case qf:return r*e*3/i.components*i.byteLength;case Bi:return r*e*4/i.components*i.byteLength;case Xh:return r*e*4/i.components*i.byteLength;case Rc:case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yh:case jh:return Math.max(r,16)*Math.max(e,8)/4;case qh:case Kh:return Math.max(r,8)*Math.max(e,8)/2;case Zh:case $h:case Qh:case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jh:case Dc:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ru:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ou:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case au:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case uu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case fu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case pu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case mu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case gu:case _u:case xu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vu:case yu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Fc:case bu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function by(r){switch(r){case wi:case Vf:return{byteLength:1,components:1};case ua:case Gf:case vr:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case Ki:case zh:case ji:return{byteLength:4,components:1};case Hf:case Wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function c_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Sy(r){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(r.bindBuffer(l,a),f.length===0)r.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ty=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ry=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Db=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_M=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:wy,alphahash_pars_fragment:Ty,alphamap_fragment:Ey,alphamap_pars_fragment:Cy,alphatest_fragment:Ay,alphatest_pars_fragment:Py,aomap_fragment:Ry,aomap_pars_fragment:Iy,batching_pars_vertex:Oy,batching_vertex:Ly,begin_vertex:Dy,beginnormal_vertex:Fy,bsdfs:Ny,iridescence_fragment:Uy,bumpmap_pars_fragment:ky,clipping_planes_fragment:By,clipping_planes_pars_fragment:zy,clipping_planes_pars_vertex:Vy,clipping_planes_vertex:Gy,color_fragment:Hy,color_pars_fragment:Wy,color_pars_vertex:Xy,color_vertex:qy,common:Yy,cube_uv_reflection_fragment:Ky,defaultnormal_vertex:jy,displacementmap_pars_vertex:Zy,displacementmap_vertex:$y,emissivemap_fragment:Jy,emissivemap_pars_fragment:Qy,colorspace_fragment:eb,colorspace_pars_fragment:tb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:rb,envmap_pars_vertex:sb,envmap_physical_pars_fragment:gb,envmap_vertex:ob,fog_vertex:ab,fog_pars_vertex:cb,fog_fragment:lb,fog_pars_fragment:hb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:db,lights_lambert_fragment:fb,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:_b,lights_toon_pars_fragment:xb,lights_phong_fragment:vb,lights_phong_pars_fragment:yb,lights_physical_fragment:bb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Sb,lights_fragment_maps:wb,lights_fragment_end:Tb,lightprobes_pars_fragment:Eb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Rb,map_fragment:Ib,map_pars_fragment:Ob,map_particle_fragment:Lb,map_particle_pars_fragment:Db,metalnessmap_fragment:Fb,metalnessmap_pars_fragment:Nb,morphinstance_vertex:Ub,morphcolor_vertex:kb,morphnormal_vertex:Bb,morphtarget_pars_vertex:zb,morphtarget_vertex:Vb,normal_fragment_begin:Gb,normal_fragment_maps:Hb,normal_pars_fragment:Wb,normal_pars_vertex:Xb,normal_vertex:qb,normalmap_pars_fragment:Yb,clearcoat_normal_fragment_begin:Kb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:$b,opaque_fragment:Jb,packing:Qb,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:sM,shadowmap_pars_fragment:oM,shadowmap_pars_vertex:aM,shadowmap_vertex:cM,shadowmask_pars_fragment:lM,skinbase_vertex:hM,skinning_pars_vertex:uM,skinning_vertex:dM,skinnormal_vertex:fM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:_M,transmission_fragment:xM,transmission_pars_fragment:vM,uv_pars_fragment:yM,uv_pars_vertex:bM,uv_vertex:MM,worldpos_vertex:SM,background_vert:wM,background_frag:TM,backgroundCube_vert:EM,backgroundCube_frag:CM,cube_vert:AM,cube_frag:PM,depth_vert:RM,depth_frag:IM,distance_vert:OM,distance_frag:LM,equirect_vert:DM,equirect_frag:FM,linedashed_vert:NM,linedashed_frag:UM,meshbasic_vert:kM,meshbasic_frag:BM,meshlambert_vert:zM,meshlambert_frag:VM,meshmatcap_vert:GM,meshmatcap_frag:HM,meshnormal_vert:WM,meshnormal_frag:XM,meshphong_vert:qM,meshphong_frag:YM,meshphysical_vert:KM,meshphysical_frag:jM,meshtoon_vert:ZM,meshtoon_frag:$M,points_vert:JM,points_frag:QM,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Se={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},br={basic:{uniforms:Hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Hn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Hn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new dt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Hn([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Hn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Hn([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Hn([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Hn([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Hn([Se.lights,Se.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};br.physical={uniforms:Hn([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var wu={r:0,b:0,g:0},r1=new Zt,l_=new Je;l_.set(-1,0,0,0,1,0,0,0,1);function s1(r,e,t,n,i,s){let o=new dt(0),a=i===!0?0:1,c,l,h=null,f=0,u=null;function d(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let b=y.backgroundBlurriness>0;S=e.get(S,b)}return S}function g(y){let S=!1,b=d(y);b===null?p(o,a):b&&b.isColor&&(p(b,1),S=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,S){let b=d(S);b&&(b.isCubeTexture||b.mapping===Ac)?(l===void 0&&(l=new Qn(new la(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:mo(br.backgroundCube.uniforms),vertexShader:br.backgroundCube.vertexShader,fragmentShader:br.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(l_),l.material.toneMapped=ft.getTransfer(b.colorSpace)!==wt,(h!==b||f!==b.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Qn(new bc(2,2),new bi({name:"BackgroundMaterial",uniforms:mo(br.background.uniforms),vertexShader:br.background.vertexShader,fragmentShader:br.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ft.getTransfer(b.colorSpace)!==wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(wu,Jf(r)),t.buffers.color.setClear(wu.r,wu.g,wu.b,S,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:_,dispose:m}}function o1(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(R,O,G,W,L){let k=!1,F=f(R,W,G,O);s!==F&&(s=F,l(s.object)),k=d(R,W,G,L),k&&g(R,W,G,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(R,O,G,W),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return r.createVertexArray()}function l(R){return r.bindVertexArray(R)}function h(R){return r.deleteVertexArray(R)}function f(R,O,G,W){let L=W.wireframe===!0,k=n[O.id];k===void 0&&(k={},n[O.id]=k);let F=R.isInstancedMesh===!0?R.id:0,K=k[F];K===void 0&&(K={},k[F]=K);let ee=K[G.id];ee===void 0&&(ee={},K[G.id]=ee);let I=ee[L];return I===void 0&&(I=u(c()),ee[L]=I),I}function u(R){let O=[],G=[],W=[];for(let L=0;L<t;L++)O[L]=0,G[L]=0,W[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:W,object:R,attributes:{},index:null}}function d(R,O,G,W){let L=s.attributes,k=O.attributes,F=0,K=G.getAttributes();for(let ee in K)if(K[ee].location>=0){let ge=L[ee],Ce=k[ee];if(Ce===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(Ce=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(Ce=R.instanceColor)),ge===void 0||ge.attribute!==Ce||Ce&&ge.data!==Ce.data)return!0;F++}return s.attributesNum!==F||s.index!==W}function g(R,O,G,W){let L={},k=O.attributes,F=0,K=G.getAttributes();for(let ee in K)if(K[ee].location>=0){let ge=k[ee];ge===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor));let Ce={};Ce.attribute=ge,ge&&ge.data&&(Ce.data=ge.data),L[ee]=Ce,F++}s.attributes=L,s.attributesNum=F,s.index=W}function _(){let R=s.newAttributes;for(let O=0,G=R.length;O<G;O++)R[O]=0}function p(R){m(R,0)}function m(R,O){let G=s.newAttributes,W=s.enabledAttributes,L=s.attributeDivisors;G[R]=1,W[R]===0&&(r.enableVertexAttribArray(R),W[R]=1),L[R]!==O&&(r.vertexAttribDivisor(R,O),L[R]=O)}function y(){let R=s.newAttributes,O=s.enabledAttributes;for(let G=0,W=O.length;G<W;G++)O[G]!==R[G]&&(r.disableVertexAttribArray(G),O[G]=0)}function S(R,O,G,W,L,k,F){F===!0?r.vertexAttribIPointer(R,O,G,L,k):r.vertexAttribPointer(R,O,G,W,L,k)}function b(R,O,G,W){_();let L=W.attributes,k=G.getAttributes(),F=O.defaultAttributeValues;for(let K in k){let ee=k[K];if(ee.location>=0){let I=L[K];if(I===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),I!==void 0){let ge=I.normalized,Ce=I.itemSize,Ze=e.get(I);if(Ze===void 0)continue;let Ge=Ze.buffer,Ne=Ze.type,$=Ze.bytesPerElement,ce=Ne===r.INT||Ne===r.UNSIGNED_INT||I.gpuType===zh;if(I.isInterleavedBufferAttribute){let oe=I.data,Ie=oe.stride,Ve=I.offset;if(oe.isInstancedInterleavedBuffer){for(let Le=0;Le<ee.locationSize;Le++)m(ee.location+Le,oe.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Le=0;Le<ee.locationSize;Le++)p(ee.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Le=0;Le<ee.locationSize;Le++)S(ee.location+Le,Ce/ee.locationSize,Ne,ge,Ie*$,(Ve+Ce/ee.locationSize*Le)*$,ce)}else{if(I.isInstancedBufferAttribute){for(let oe=0;oe<ee.locationSize;oe++)m(ee.location+oe,I.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let oe=0;oe<ee.locationSize;oe++)p(ee.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let oe=0;oe<ee.locationSize;oe++)S(ee.location+oe,Ce/ee.locationSize,Ne,ge,Ce*$,Ce/ee.locationSize*oe*$,ce)}}else if(F!==void 0){let ge=F[K];if(ge!==void 0)switch(ge.length){case 2:r.vertexAttrib2fv(ee.location,ge);break;case 3:r.vertexAttrib3fv(ee.location,ge);break;case 4:r.vertexAttrib4fv(ee.location,ge);break;default:r.vertexAttrib1fv(ee.location,ge)}}}}y()}function C(){w();for(let R in n){let O=n[R];for(let G in O){let W=O[G];for(let L in W){let k=W[L];for(let F in k)h(k[F].object),delete k[F];delete W[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let O=n[R.id];for(let G in O){let W=O[G];for(let L in W){let k=W[L];for(let F in k)h(k[F].object),delete k[F];delete W[L]}}delete n[R.id]}function E(R){for(let O in n){let G=n[O];for(let W in G){let L=G[W];if(L[R.id]===void 0)continue;let k=L[R.id];for(let F in k)h(k[F].object),delete k[F];delete L[R.id]}}}function x(R){for(let O in n){let G=n[O],W=R.isInstancedMesh===!0?R.id:0,L=G[W];if(L!==void 0){for(let k in L){let F=L[k];for(let K in F)h(F[K].object),delete F[K];delete L[k]}delete G[W],Object.keys(G).length===0&&delete n[O]}}}function w(){P(),o=!0,s!==i&&(s=i,l(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function a1(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function c1(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Bi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let x=E===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==wi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ji&&!x)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:b,maxSamples:C,samples:T}}function l1(r){let e=this,t=null,n=0,i=!1,s=!1,o=new ki,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let y=s?0:n,S=y*4,b=m.clippingState||null;c.value=b,b=h(g,u,S,d);for(let C=0;C!==S;++C)b[C]=t[C];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=d+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,b=d;S!==_;++S,b+=4)o.copy(f[S]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Ds=4,z0=[.125,.215,.35,.446,.526,.582],go=20,h1=256,Nc=new Tc,V0=new dt,np=null,ip=0,rp=0,sp=!1,u1=new H,Eu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=u1}=s;np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(np,ip,rp),this._renderer.xr.enabled=sp,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:vr,format:Bi,colorSpace:cc,depthBuffer:!1},i=G0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G0(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d1(s)),this._blurMaterial=p1(s,e,t),this._ggxMaterial=f1(s,e,t)}return i}_compileMaterial(e){let t=new Qn(new Cn,e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,n,i,s){let c=new Gn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(V0),f.toneMapping=Yi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new la,new ws({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(V0),m=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):b===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));let C=this._cubeSize;pa(i,b*C,S>2?C:0,C,C),f.setRenderTarget(i),m&&f.render(_,c),f.render(e,c)}f.toneMapping=d,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ps||e.mapping===fo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=W0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H0());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;pa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Nc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ds?n-g+Ds:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,pa(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(a,Nc),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,pa(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(a,Nc)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[i];f.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*go-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):go;p>go&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${go}`);let m=[],y=0;for(let E=0;E<go;++E){let x=E/_,w=Math.exp(-x*x/2);m.push(w),E===0?y+=w:E<p&&(y+=2*w)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;let b=this._sizeLods[i],C=3*b*(i>S-Ds?i-S+Ds:0),T=4*(this._cubeSize-b);pa(t,C,T,3*b,2*b),c.setRenderTarget(t),c.render(f,Nc)}};function d1(r){let e=[],t=[],n=[],i=r,s=r-Ds+1+z0.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Ds?c=z0[o-r+Ds-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),S=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let T=0;T<d;T++){let E=T%3*2/3-1,x=T>2?0:-1,w=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];y.set(w,_*g*T),S.set(u,p*g*T);let P=[T,T,T,T,T,T];b.set(P,m*g*T)}let C=new Cn;C.setAttribute("position",new ln(y,_)),C.setAttribute("uv",new ln(S,p)),C.setAttribute("faceIndex",new ln(b,m)),n.push(new Qn(C,null)),i>Ds&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function G0(r,e,t){let n=new yi(r,e,t);return n.texture.mapping=Ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function f1(r,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function p1(r,e,t){let n=new Float32Array(go),i=new H(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function H0(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function W0(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cu=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new la(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:xr});s.uniforms.tEquirect.value=t;let o=new Qn(i,s),a=t.minFilter;return t.minFilter===Rs&&(t.minFilter=En),new Fh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};function m1(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===Uh||d===kh)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Cu(g.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",l),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===Uh||d===kh,_=d===Ps||d===fo;if(g||_){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Eu(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return g&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new Eu(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===Uh?u.mapping=Ps:d===kh&&(u.mapping=fo),u}function c(u){let d=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function g1(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&xh("WebGLRenderer: "+n+" extension not supported."),i}}}function _1(r,e,t,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)e.update(u[d],r.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let S=0,b=y.length;S<b;S+=3){let C=y[S+0],T=y[S+1],E=y[S+2];u.push(C,T,T,E,E,C)}}else{let y=g.array;_=g.version;for(let S=0,b=y.length/3-1;S<b;S+=3){let C=S+0,T=S+1,E=S+2;u.push(C,T,T,E,E,C)}}let p=new(g.count>=65535?gc:mc)(u,1);p.version=_;let m=s.get(f);m&&e.remove(m),s.set(f,p)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function x1(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,u){r.drawElements(n,u,s,f*o),t.update(u,n,1)}function l(f,u,d){d!==0&&(r.drawElementsInstanced(n,u,s,f*o,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function v1(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function y1(r,e,t){let n=new WeakMap,i=new $t;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};var d=P;u!==void 0&&u.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let C=a.attributes.position.count*b,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let E=new Float32Array(C*T*4*f),x=new dc(E,C,T,f);x.type=ji,x.needsUpdate=!0;let w=b*4;for(let R=0;R<f;R++){let O=m[R],G=y[R],W=S[R],L=C*T*4*R;for(let k=0;k<O.count;k++){let F=k*w;g===!0&&(i.fromBufferAttribute(O,k),E[L+F+0]=i.x,E[L+F+1]=i.y,E[L+F+2]=i.z,E[L+F+3]=0),_===!0&&(i.fromBufferAttribute(G,k),E[L+F+4]=i.x,E[L+F+5]=i.y,E[L+F+6]=i.z,E[L+F+7]=0),p===!0&&(i.fromBufferAttribute(W,k),E[L+F+8]=i.x,E[L+F+9]=i.y,E[L+F+10]=i.z,E[L+F+11]=W.itemSize===4?i.w:1)}}u={count:f,texture:x,size:new xt(C,T)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function b1(r,e,t,n,i){let s=new WeakMap;function o(l){let h=i.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var M1={[Df]:"LINEAR_TONE_MAPPING",[Ff]:"REINHARD_TONE_MAPPING",[Nf]:"CINEON_TONE_MAPPING",[Uf]:"ACES_FILMIC_TONE_MAPPING",[Bf]:"AGX_TONE_MAPPING",[zf]:"NEUTRAL_TONE_MAPPING",[kf]:"CUSTOM_TONE_MAPPING"};function S1(r,e,t,n,i){let s=new yi(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Xr(e,t):void 0}),o=new yi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),a=new Cn;a.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new bn([0,2,0,0,2,0],2));let c=new wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Qn(a,c),h=new Tc(-1,1,1,-1,0,1),f=null,u=null,d=!1,g,_=null,p=[],m=!1;this.setSize=function(y,S){s.setSize(y,S),o.setSize(y,S);for(let b=0;b<p.length;b++){let C=p[b];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;let S=s.width,b=s.height;for(let C=0;C<p.length;C++){let T=p[C];T.setSize&&T.setSize(S,b)}},this.begin=function(y,S){if(d||y.toneMapping===Yi&&p.length===0)return!1;if(_=S,S!==null){let b=S.width,C=S.height;(s.width!==b||s.height!==C)&&this.setSize(b,C)}return m===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Yi,!0},this.hasRenderPass=function(){return m},this.end=function(y,S){y.toneMapping=g,d=!0;let b=s,C=o;for(let T=0;T<p.length;T++){let E=p[T];if(E.enabled!==!1&&(E.render(y,C,b,S),E.needsSwap!==!1)){let x=b;b=C,C=x}}if(f!==y.outputColorSpace||u!==y.toneMapping){f=y.outputColorSpace,u=y.toneMapping,c.defines={},ft.getTransfer(f)===wt&&(c.defines.SRGB_TRANSFER="");let T=M1[u];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(_),y.render(l,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var h_=new Yr,cp=new Xr(1,1),u_=new dc,d_=new bh,f_=new xc,X0=[],q0=[],Y0=new Float32Array(16),K0=new Float32Array(9),j0=new Float32Array(4);function ga(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=X0[i];if(s===void 0&&(s=new Float32Array(i),X0[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ru(r,e){let t=q0[e];t===void 0&&(t=new Int32Array(e),q0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function w1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function T1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function E1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function C1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function A1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;j0.set(n),r.uniformMatrix2fv(this.addr,!1,j0),pn(t,n)}}function P1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;K0.set(n),r.uniformMatrix3fv(this.addr,!1,K0),pn(t,n)}}function R1(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Y0.set(n),r.uniformMatrix4fv(this.addr,!1,Y0),pn(t,n)}}function I1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function O1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function L1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function D1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function F1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function N1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function U1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function k1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function B1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(cp.compareFunction=t.isReversedDepthBuffer()?Su:Mu,s=cp):s=h_,t.setTexture2D(e||s,i)}function z1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||d_,i)}function V1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||f_,i)}function G1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||u_,i)}function H1(r){switch(r){case 5126:return w1;case 35664:return T1;case 35665:return E1;case 35666:return C1;case 35674:return A1;case 35675:return P1;case 35676:return R1;case 5124:case 35670:return I1;case 35667:case 35671:return O1;case 35668:case 35672:return L1;case 35669:case 35673:return D1;case 5125:return F1;case 36294:return N1;case 36295:return U1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return G1}}function W1(r,e){r.uniform1fv(this.addr,e)}function X1(r,e){let t=ga(e,this.size,2);r.uniform2fv(this.addr,t)}function q1(r,e){let t=ga(e,this.size,3);r.uniform3fv(this.addr,t)}function Y1(r,e){let t=ga(e,this.size,4);r.uniform4fv(this.addr,t)}function K1(r,e){let t=ga(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function j1(r,e){let t=ga(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Z1(r,e){let t=ga(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $1(r,e){r.uniform1iv(this.addr,e)}function J1(r,e){r.uniform2iv(this.addr,e)}function Q1(r,e){r.uniform3iv(this.addr,e)}function eS(r,e){r.uniform4iv(this.addr,e)}function tS(r,e){r.uniform1uiv(this.addr,e)}function nS(r,e){r.uniform2uiv(this.addr,e)}function iS(r,e){r.uniform3uiv(this.addr,e)}function rS(r,e){r.uniform4uiv(this.addr,e)}function sS(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=cp:o=h_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function oS(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||d_,s[o])}function aS(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||f_,s[o])}function cS(r,e,t){let n=this.cache,i=e.length,s=Ru(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||u_,s[o])}function lS(r){switch(r){case 5126:return W1;case 35664:return X1;case 35665:return q1;case 35666:return Y1;case 35674:return K1;case 35675:return j1;case 35676:return Z1;case 5124:case 35670:return $1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return rS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return cS}}var lp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H1(t.type)}},hp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}},up=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},op=/(\w+)(\])?(\[|\.)?/g;function Z0(r,e){r.seq.push(e),r.map[e.id]=e}function hS(r,e,t){let n=r.name,i=n.length;for(op.lastIndex=0;;){let s=op.exec(n),o=op.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Z0(t,l===void 0?new lp(a,r,e):new hp(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new up(a),Z0(t,f)),t=f}}}var ma=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);hS(a,c,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function $0(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var uS=37297,dS=0;function fS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var J0=new Je;function pS(r){ft._getMatrix(J0,ft.workingColorSpace,r);let e=`mat3( ${J0.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case lc:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Q0(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fS(r.getShaderSource(e),a)}else return s}function mS(r,e){let t=pS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var gS={[Df]:"Linear",[Ff]:"Reinhard",[Nf]:"Cineon",[Uf]:"ACESFilmic",[Bf]:"AgX",[zf]:"Neutral",[kf]:"Custom"};function _S(r,e){let t=gS[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tu=new H;function xS(){ft.getLuminanceCoefficients(Tu);let r=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kc).join(`
`)}function yS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function kc(r){return r!==""}function e_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(r){return r.replace(MS,wS)}var SS=new Map;function wS(r,e){let t=rt[e];if(t===void 0){let n=SS.get(e);if(n!==void 0)t=rt[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dp(t)}var TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(r){return r.replace(TS,ES)}function ES(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function i_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var CS={[Cc]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function AS(r){return CS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var PS={[Ps]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function RS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":PS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var IS={[fo]:"ENVMAP_MODE_REFRACTION"};function OS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":IS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var LS={[Lf]:"ENVMAP_BLENDING_MULTIPLY",[S0]:"ENVMAP_BLENDING_MIX",[w0]:"ENVMAP_BLENDING_ADD"};function DS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LS[r.combine]||"ENVMAP_BLENDING_NONE"}function FS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function NS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=AS(t),l=RS(t),h=OS(t),f=DS(t),u=FS(t),d=vS(t),g=yS(s),_=i.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kc).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kc).join(`
`),m.length>0&&(m+=`
`)):(p=[i_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kc).join(`
`),m=[i_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,mS("linearToOutputTexel",t.outputColorSpace),xS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kc).join(`
`)),o=dp(o),o=e_(o,t),o=t_(o,t),a=dp(a),a=e_(a,t),a=t_(a,t),o=n_(o),a=n_(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+p+o,b=y+m+a,C=$0(i,i.VERTEX_SHADER,S),T=$0(i,i.FRAGMENT_SHADER,b);i.attachShader(_,C),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(C)||"",W=i.getShaderInfoLog(T)||"",L=O.trim(),k=G.trim(),F=W.trim(),K=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{let I=Q0(i,C,"vertex"),ge=Q0(i,T,"fragment");qe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+I+`
`+ge)}else L!==""?We("WebGLProgram: Program Info Log:",L):(k===""||F==="")&&(ee=!1);ee&&(R.diagnostics={runnable:K,programLog:L,vertexShader:{log:k,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(C),i.deleteShader(T),x=new ma(i,_),w=bS(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,uS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}var US=0,fp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pp(e),t.set(e,n)),n}},pp=class{constructor(e){this.id=US++,this.code=e,this.usedTimes=0}};function kS(r){return r===Os||r===Dc||r===Fc}function BS(r,e,t,n,i,s){let o=new oa,a=new fp,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,w,P,R,O,G){let W=R.fog,L=O.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||k,F),ee=K&&K.mapping===Ac?K.image.height:null,I=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let ge=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ce=ge!==void 0?ge.length:0,Ze=0;L.morphAttributes.position!==void 0&&(Ze=1),L.morphAttributes.normal!==void 0&&(Ze=2),L.morphAttributes.color!==void 0&&(Ze=3);let Ge,Ne,$,ce;if(I){let ue=br[I];Ge=ue.vertexShader,Ne=ue.fragmentShader}else Ge=x.vertexShader,Ne=x.fragmentShader,a.update(x),$=a.getVertexShaderID(x),ce=a.getFragmentShaderID(x);let oe=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Ve=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,st=!!x.map,Ae=!!x.matcap,Xe=!!K,it=!!x.aoMap,He=!!x.lightMap,X=!!x.bumpMap,ut=!!x.normalMap,zt=!!x.displacementMap,N=!!x.emissiveMap,Qe=!!x.metalnessMap,je=!!x.roughnessMap,mt=x.anisotropy>0,_e=x.clearcoat>0,tt=x.dispersion>0,A=x.iridescence>0,v=x.sheen>0,B=x.transmission>0,j=mt&&!!x.anisotropyMap,te=_e&&!!x.clearcoatMap,de=_e&&!!x.clearcoatNormalMap,ie=_e&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,ve=v&&!!x.sheenColorMap,Ee=v&&!!x.sheenRoughnessMap,fe=!!x.specularMap,le=!!x.specularColorMap,xe=!!x.specularIntensityMap,Ye=B&&!!x.transmissionMap,$e=B&&!!x.thicknessMap,D=!!x.gradientMap,ae=!!x.alphaMap,Z=x.alphaTest>0,be=!!x.alphaHash,he=!!x.extensions,ne=Yi;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ne=r.toneMapping);let se={shaderID:I,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:Ne,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,instancingMorph:Ve&&O.morphTexture!==null,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:Ae,envMap:Xe,envMapMode:Xe&&K.mapping,envMapCubeUVHeight:ee,aoMap:it,lightMap:He,bumpMap:X,normalMap:ut,displacementMap:zt,emissiveMap:N,normalMapObjectSpace:ut&&x.normalMapType===C0,normalMapTangentSpace:ut&&x.normalMapType===Kf,packedNormalMap:ut&&x.normalMapType===Kf&&kS(x.normalMap.format),metalnessMap:Qe,roughnessMap:je,anisotropy:mt,anisotropyMap:j,clearcoat:_e,clearcoatMap:te,clearcoatNormalMap:de,clearcoatRoughnessMap:ie,dispersion:tt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:v,sheenColorMap:ve,sheenRoughnessMap:Ee,specularMap:fe,specularColorMap:le,specularIntensityMap:xe,transmission:B,transmissionMap:Ye,thicknessMap:$e,gradientMap:D,opaque:x.transparent===!1&&x.blending===qi&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:Z,alphaHash:be,combine:x.combine,mapUv:st&&g(x.map.channel),aoMapUv:it&&g(x.aoMap.channel),lightMapUv:He&&g(x.lightMap.channel),bumpMapUv:X&&g(x.bumpMap.channel),normalMapUv:ut&&g(x.normalMap.channel),displacementMapUv:zt&&g(x.displacementMap.channel),emissiveMapUv:N&&g(x.emissiveMap.channel),metalnessMapUv:Qe&&g(x.metalnessMap.channel),roughnessMapUv:je&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:te&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:xe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ye&&g(x.transmissionMap.channel),thicknessMapUv:$e&&g(x.thicknessMap.channel),alphaMapUv:ae&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ut||mt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(st||ae),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ie,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===wt,decodeVideoTextureEmissive:N&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===wt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_r,flipSided:x.side===ei,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(w,x),y(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function S(x){let w=d[x.type],P;if(w){let R=br[w];P=B0.clone(R.uniforms)}else P=x.uniforms;return P}function b(x,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new NS(r,w,x,i),l.push(P),h.set(w,P)),P}function C(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:C,releaseShaderCache:T,programs:l,dispose:E}}function zS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function VS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function r_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function s_(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,_,p,m){let y=r[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=g,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=m),e++,y}function c(u,d,g,_,p,m){let y=a(u,d,g,_,p,m);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function l(u,d,g,_,p,m){let y=a(u,d,g,_,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||VS),n.length>1&&n.sort(d||r_),i.length>1&&i.sort(d||r_)}function f(){for(let u=e,d=r.length;u<d;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:f,sort:h}}function GS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new s_,r.set(n,[o])):i>=s.length?(o=new s_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function HS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new dt};break;case"SpotLight":t={position:new H,direction:new H,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function WS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var XS=0;function qS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function YS(r){let e=new HS,t=WS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);let i=new H,s=new Zt,o=new Zt;function a(l){let h=0,f=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,S=0,b=0,C=0,T=0,E=0;l.sort(qS);for(let w=0,P=l.length;w<P;w++){let R=l[w],O=R.color,G=R.intensity,W=R.distance,L=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Os?L=R.shadow.map.texture:L=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*G,f+=O.g*G,u+=O.b*G;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],G);E++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let F=R.shadow,K=t.get(R);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=k,d++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(O).multiplyScalar(G),k.distance=W,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;let F=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,F.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=F.matrix,R.castShadow){let K=t.get(R);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=L,b++}_++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(O).multiplyScalar(G),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=k,p++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let F=R.shadow,K=t.get(R);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,K.shadowCameraNear=F.camera.near,K.shadowCameraFar=F.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=k,g++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(G),k.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[m]=k,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==b||x.numSpotMaps!==C||x.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,x.directionalLength=d,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=b,x.numSpotMaps=C,x.numLightProbes=E,n.version=XS++)}function c(l,h){let f=0,u=0,d=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let S=l[m];if(S.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(S.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(S.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function o_(r){let e=new YS(r),t=[],n=[],i=[];function s(u){f.camera=u,t.length=0,n.length=0,i.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function KS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new o_(r),e.set(i,[a])):s>=o.length?(a=new o_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$S=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],JS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],a_=new Zt,Uc=new H,ap=new H;function QS(r,e,t){let n=new _c,i=new xt,s=new xt,o=new $t,a=new Th,c=new Eh,l={},h=t.maxTextureSize,f={[Wr]:ei,[ei]:Wr,[_r]:_r},u=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:jS,fragmentShader:ZS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Cn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let m=this.type;this.render=function(T,E,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===r0&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cc);let w=r.getRenderTarget(),P=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),O=r.state;O.setBlending(xr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=m!==this.type;G&&E.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(L=>L.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,L=T.length;W<L;W++){let k=T[W],F=k.shadow;if(F===void 0){We("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let K=F.getFrameExtents();i.multiply(K),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,F.mapSize.y=s.y));let ee=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ee,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ha){if(k.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new yi(i.x,i.y,{format:Os,type:vr,minFilter:En,magFilter:En,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new Xr(i.x,i.y,ji),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=pr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Mn,F.map.depthTexture.magFilter=Mn}else k.isPointLight?(F.map=new Cu(i.x),F.map.depthTexture=new Sh(i.x,Ki)):(F.map=new yi(i.x,i.y),F.map.depthTexture=new Xr(i.x,i.y,Ki)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=pr,this.type===Cc?(F.map.depthTexture.compareFunction=ee?Su:Mu,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Mn,F.map.depthTexture.magFilter=Mn);F.camera.updateProjectionMatrix()}let I=F.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<I;ge++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,ge),r.clear();else{ge===0&&(r.setRenderTarget(F.map),r.clear());let Ce=F.getViewport(ge);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),O.viewport(o)}if(k.isPointLight){let Ce=F.camera,Ze=F.matrix,Ge=k.distance||Ce.far;Ge!==Ce.far&&(Ce.far=Ge,Ce.updateProjectionMatrix()),Uc.setFromMatrixPosition(k.matrixWorld),Ce.position.copy(Uc),ap.copy(Ce.position),ap.add($S[ge]),Ce.up.copy(JS[ge]),Ce.lookAt(ap),Ce.updateMatrixWorld(),Ze.makeTranslation(-Uc.x,-Uc.y,-Uc.z),a_.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),F._frustum.setFromProjectionMatrix(a_,Ce.coordinateSystem,Ce.reversedDepth)}else F.updateMatrices(k);n=F.getFrustum(),b(E,x,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===ha&&y(F,x),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(w,P,R)};function y(T,E){let x=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(i.x,i.y,{format:Os,type:vr})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,x,u,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,x,d,_,null)}function S(T,E,x,w){let P=null,R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let O=P.uuid,G=E.uuid,W=l[O];W===void 0&&(W={},l[O]=W);let L=W[G];L===void 0&&(L=P.clone(),W[G]=L,E.addEventListener("dispose",C)),P=L}if(P.visible=E.visible,P.wireframe=E.wireframe,w===ha?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:f[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=r.properties.get(P);O.light=x}return P}function b(T,E,x,w,P){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===ha)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let G=e.update(T),W=T.material;if(Array.isArray(W)){let L=G.groups;for(let k=0,F=L.length;k<F;k++){let K=L[k],ee=W[K.materialIndex];if(ee&&ee.visible){let I=S(T,ee,w,P);T.onBeforeShadow(r,T,E,x,G,I,K),r.renderBufferDirect(x,null,G,I,T,K),T.onAfterShadow(r,T,E,x,G,I,K)}}}else if(W.visible){let L=S(T,W,w,P);T.onBeforeShadow(r,T,E,x,G,L,null),r.renderBufferDirect(x,null,G,L,T,null),T.onAfterShadow(r,T,E,x,G,L,null)}}let O=T.children;for(let G=0,W=O.length;G<W;G++)b(O[G],E,x,w,P)}function C(T){T.target.removeEventListener("dispose",C);for(let x in l){let w=l[x],P=T.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function ew(r,e){function t(){let D=!1,ae=new $t,Z=null,be=new $t(0,0,0,0);return{setMask:function(he){Z!==he&&!D&&(r.colorMask(he,he,he,he),Z=he)},setLocked:function(he){D=he},setClear:function(he,ne,se,ue,Be){Be===!0&&(he*=ue,ne*=ue,se*=ue),ae.set(he,ne,se,ue),be.equals(ae)===!1&&(r.clearColor(he,ne,se,ue),be.copy(ae))},reset:function(){D=!1,Z=null,be.set(-1,0,0,0)}}}function n(){let D=!1,ae=!1,Z=null,be=null,he=null;return{setReversed:function(ne){if(ae!==ne){let se=e.get("EXT_clip_control");ne?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),ae=ne;let ue=he;he=null,this.setClear(ue)}},getReversed:function(){return ae},setTest:function(ne){ne?oe(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(ne){Z!==ne&&!D&&(r.depthMask(ne),Z=ne)},setFunc:function(ne){if(ae&&(ne=U0[ne]),be!==ne){switch(ne){case ch:r.depthFunc(r.NEVER);break;case lh:r.depthFunc(r.ALWAYS);break;case hh:r.depthFunc(r.LESS);break;case lo:r.depthFunc(r.LEQUAL);break;case uh:r.depthFunc(r.EQUAL);break;case dh:r.depthFunc(r.GEQUAL);break;case fh:r.depthFunc(r.GREATER);break;case ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}be=ne}},setLocked:function(ne){D=ne},setClear:function(ne){he!==ne&&(he=ne,ae&&(ne=1-ne),r.clearDepth(ne))},reset:function(){D=!1,Z=null,be=null,he=null,ae=!1}}}function i(){let D=!1,ae=null,Z=null,be=null,he=null,ne=null,se=null,ue=null,Be=null;return{setTest:function(re){D||(re?oe(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(re){ae!==re&&!D&&(r.stencilMask(re),ae=re)},setFunc:function(re,ze,De){(Z!==re||be!==ze||he!==De)&&(r.stencilFunc(re,ze,De),Z=re,be=ze,he=De)},setOp:function(re,ze,De){(ne!==re||se!==ze||ue!==De)&&(r.stencilOp(re,ze,De),ne=re,se=ze,ue=De)},setLocked:function(re){D=re},setClear:function(re){Be!==re&&(r.clearStencil(re),Be=re)},reset:function(){D=!1,ae=null,Z=null,be=null,he=null,ne=null,se=null,ue=null,Be=null}}}let s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,y=null,S=null,b=null,C=null,T=null,E=null,x=new dt(0,0,0),w=0,P=!1,R=null,O=null,G=null,W=null,L=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=K>=2);let I=null,ge={},Ce=r.getParameter(r.SCISSOR_BOX),Ze=r.getParameter(r.VIEWPORT),Ge=new $t().fromArray(Ce),Ne=new $t().fromArray(Ze);function $(D,ae,Z,be){let he=new Uint8Array(4),ne=r.createTexture();r.bindTexture(D,ne),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<Z;se++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ae+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return ne}let ce={};ce[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(r.DEPTH_TEST),o.setFunc(lo),X(!1),ut(Rf),oe(r.CULL_FACE),it(xr);function oe(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ve(D,ae){return u[D]!==ae?(r.bindFramebuffer(D,ae),u[D]=ae,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(D,ae){let Z=g,be=!1;if(D){Z=d.get(ae),Z===void 0&&(Z=[],d.set(ae,Z));let he=D.textures;if(Z.length!==he.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,se=he.length;ne<se;ne++)Z[ne]=r.COLOR_ATTACHMENT0+ne;Z.length=he.length,be=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,be=!0);be&&r.drawBuffers(Z)}function st(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Ae={[bs]:r.FUNC_ADD,[o0]:r.FUNC_SUBTRACT,[a0]:r.FUNC_REVERSE_SUBTRACT};Ae[c0]=r.MIN,Ae[l0]=r.MAX;let Xe={[h0]:r.ZERO,[u0]:r.ONE,[d0]:r.SRC_COLOR,[oh]:r.SRC_ALPHA,[x0]:r.SRC_ALPHA_SATURATE,[g0]:r.DST_COLOR,[p0]:r.DST_ALPHA,[f0]:r.ONE_MINUS_SRC_COLOR,[ah]:r.ONE_MINUS_SRC_ALPHA,[_0]:r.ONE_MINUS_DST_COLOR,[m0]:r.ONE_MINUS_DST_ALPHA,[v0]:r.CONSTANT_COLOR,[y0]:r.ONE_MINUS_CONSTANT_COLOR,[b0]:r.CONSTANT_ALPHA,[M0]:r.ONE_MINUS_CONSTANT_ALPHA};function it(D,ae,Z,be,he,ne,se,ue,Be,re){if(D===xr){p===!0&&(Ie(r.BLEND),p=!1);return}if(p===!1&&(oe(r.BLEND),p=!0),D!==s0){if(D!==m||re!==P){if((y!==bs||C!==bs)&&(r.blendEquation(r.FUNC_ADD),y=bs,C=bs),re)switch(D){case qi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Si:r.blendFunc(r.ONE,r.ONE);break;case If:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Of:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qe("WebGLState: Invalid blending: ",D);break}else switch(D){case qi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Si:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case If:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",D);break}S=null,b=null,T=null,E=null,x.set(0,0,0),w=0,m=D,P=re}return}he=he||ae,ne=ne||Z,se=se||be,(ae!==y||he!==C)&&(r.blendEquationSeparate(Ae[ae],Ae[he]),y=ae,C=he),(Z!==S||be!==b||ne!==T||se!==E)&&(r.blendFuncSeparate(Xe[Z],Xe[be],Xe[ne],Xe[se]),S=Z,b=be,T=ne,E=se),(ue.equals(x)===!1||Be!==w)&&(r.blendColor(ue.r,ue.g,ue.b,Be),x.copy(ue),w=Be),m=D,P=!1}function He(D,ae){D.side===_r?Ie(r.CULL_FACE):oe(r.CULL_FACE);let Z=D.side===ei;ae&&(Z=!Z),X(Z),D.blending===qi&&D.transparent===!1?it(xr):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let be=D.stencilWrite;a.setTest(be),be&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function X(D){R!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),R=D)}function ut(D){D!==n0?(oe(r.CULL_FACE),D!==O&&(D===Rf?r.cullFace(r.BACK):D===i0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),O=D}function zt(D){D!==G&&(F&&r.lineWidth(D),G=D)}function N(D,ae,Z){D?(oe(r.POLYGON_OFFSET_FILL),(W!==ae||L!==Z)&&(W=ae,L=Z,o.getReversed()&&(ae=-ae),r.polygonOffset(ae,Z))):Ie(r.POLYGON_OFFSET_FILL)}function Qe(D){D?oe(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function je(D){D===void 0&&(D=r.TEXTURE0+k-1),I!==D&&(r.activeTexture(D),I=D)}function mt(D,ae,Z){Z===void 0&&(I===null?Z=r.TEXTURE0+k-1:Z=I);let be=ge[Z];be===void 0&&(be={type:void 0,texture:void 0},ge[Z]=be),(be.type!==D||be.texture!==ae)&&(I!==Z&&(r.activeTexture(Z),I=Z),r.bindTexture(D,ae||ce[D]),be.type=D,be.texture=ae)}function _e(){let D=ge[I];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function tt(){try{r.compressedTexImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function A(){try{r.compressedTexImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function v(){try{r.texSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function B(){try{r.texSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function te(){try{r.compressedTexSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function de(){try{r.texStorage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function ie(){try{r.texStorage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function Y(){try{r.texImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function J(){try{r.texImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function ve(D){return f[D]!==void 0?f[D]:r.getParameter(D)}function Ee(D,ae){f[D]!==ae&&(r.pixelStorei(D,ae),f[D]=ae)}function fe(D){Ge.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ge.copy(D))}function le(D){Ne.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ne.copy(D))}function xe(D,ae){let Z=l.get(ae);Z===void 0&&(Z=new WeakMap,l.set(ae,Z));let be=Z.get(D);be===void 0&&(be=r.getUniformBlockIndex(ae,D.name),Z.set(D,be))}function Ye(D,ae){let be=l.get(ae).get(D);c.get(ae)!==be&&(r.uniformBlockBinding(ae,be,D.__bindingPointIndex),c.set(ae,be))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},I=null,ge={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,y=null,S=null,b=null,C=null,T=null,E=null,x=new dt(0,0,0),w=0,P=!1,R=null,O=null,G=null,W=null,L=null,Ge.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ie,bindFramebuffer:Ve,drawBuffers:Le,useProgram:st,setBlending:it,setMaterial:He,setFlipSided:X,setCullFace:ut,setLineWidth:zt,setPolygonOffset:N,setScissorTest:Qe,activeTexture:je,bindTexture:mt,unbindTexture:_e,compressedTexImage2D:tt,compressedTexImage3D:A,texImage2D:Y,texImage3D:J,pixelStorei:Ee,getParameter:ve,updateUBOMapping:xe,uniformBlockBinding:Ye,texStorage2D:de,texStorage3D:ie,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:j,compressedTexSubImage3D:te,scissor:fe,viewport:le,reset:$e}}function tw(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return g?new OffscreenCanvas(A,v):uc("canvas")}function p(A,v,B){let j=1,te=tt(A);if((te.width>B||te.height>B)&&(j=B/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let de=Math.floor(j*te.width),ie=Math.floor(j*te.height);u===void 0&&(u=_(de,ie));let Y=v?_(de,ie):u;return Y.width=de,Y.height=ie,Y.getContext("2d").drawImage(A,0,0,de,ie),We("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+ie+")."),Y}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function y(A){r.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(A,v,B,j,te,de=!1){if(A!==null){if(r[A]!==void 0)return r[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie;j&&(ie=e.get("EXT_texture_norm16"),ie||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===r.RED&&(B===r.FLOAT&&(Y=r.R32F),B===r.HALF_FLOAT&&(Y=r.R16F),B===r.UNSIGNED_BYTE&&(Y=r.R8),B===r.UNSIGNED_SHORT&&ie&&(Y=ie.R16_EXT),B===r.SHORT&&ie&&(Y=ie.R16_SNORM_EXT)),v===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.R8UI),B===r.UNSIGNED_SHORT&&(Y=r.R16UI),B===r.UNSIGNED_INT&&(Y=r.R32UI),B===r.BYTE&&(Y=r.R8I),B===r.SHORT&&(Y=r.R16I),B===r.INT&&(Y=r.R32I)),v===r.RG&&(B===r.FLOAT&&(Y=r.RG32F),B===r.HALF_FLOAT&&(Y=r.RG16F),B===r.UNSIGNED_BYTE&&(Y=r.RG8),B===r.UNSIGNED_SHORT&&ie&&(Y=ie.RG16_EXT),B===r.SHORT&&ie&&(Y=ie.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RG8UI),B===r.UNSIGNED_SHORT&&(Y=r.RG16UI),B===r.UNSIGNED_INT&&(Y=r.RG32UI),B===r.BYTE&&(Y=r.RG8I),B===r.SHORT&&(Y=r.RG16I),B===r.INT&&(Y=r.RG32I)),v===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),B===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),B===r.UNSIGNED_INT&&(Y=r.RGB32UI),B===r.BYTE&&(Y=r.RGB8I),B===r.SHORT&&(Y=r.RGB16I),B===r.INT&&(Y=r.RGB32I)),v===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),B===r.UNSIGNED_INT&&(Y=r.RGBA32UI),B===r.BYTE&&(Y=r.RGBA8I),B===r.SHORT&&(Y=r.RGBA16I),B===r.INT&&(Y=r.RGBA32I)),v===r.RGB&&(B===r.UNSIGNED_SHORT&&ie&&(Y=ie.RGB16_EXT),B===r.SHORT&&ie&&(Y=ie.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),v===r.RGBA){let J=de?lc:ft.getTransfer(te);B===r.FLOAT&&(Y=r.RGBA32F),B===r.HALF_FLOAT&&(Y=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Y=J===wt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&ie&&(Y=ie.RGBA16_EXT),B===r.SHORT&&ie&&(Y=ie.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function C(A,v){let B;return A?v===null||v===Ki||v===da?B=r.DEPTH24_STENCIL8:v===ji?B=r.DEPTH32F_STENCIL8:v===ua&&(B=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ki||v===da?B=r.DEPTH_COMPONENT24:v===ji?B=r.DEPTH_COMPONENT32F:v===ua&&(B=r.DEPTH_COMPONENT16),B}function T(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Mn&&A.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function E(A){let v=A.target;v.removeEventListener("dispose",E),w(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function x(A){let v=A.target;v.removeEventListener("dispose",x),R(v)}function w(A){let v=n.get(A);if(v.__webglInit===void 0)return;let B=A.source,j=d.get(B);if(j){let te=j[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(A),Object.keys(j).length===0&&d.delete(B)}n.remove(A)}function P(A){let v=n.get(A);r.deleteTexture(v.__webglTexture);let B=A.source,j=d.get(B);delete j[v.__cacheKey],o.memory.textures--}function R(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let te=0;te<v.__webglFramebuffer[j].length;te++)r.deleteFramebuffer(v.__webglFramebuffer[j][te]);else r.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)r.deleteFramebuffer(v.__webglFramebuffer[j]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=A.textures;for(let j=0,te=B.length;j<te;j++){let de=n.get(B[j]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(A)}let O=0;function G(){O=0}function W(){return O}function L(A){O=A}function k(){let A=O;return A>=i.maxTextures&&We("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),O+=1,A}function F(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function K(A,v){let B=n.get(A);if(A.isVideoTexture&&mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let j=A.image;if(j===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+v)}function ee(A,v){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ie(B,A,v);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+v)}function I(A,v){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ie(B,A,v);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+v)}function ge(A,v){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ve(B,A,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+v)}let Ce={[mh]:r.REPEAT,[fr]:r.CLAMP_TO_EDGE,[gh]:r.MIRRORED_REPEAT},Ze={[Mn]:r.NEAREST,[T0]:r.NEAREST_MIPMAP_NEAREST,[Pc]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[Bh]:r.LINEAR_MIPMAP_NEAREST,[Rs]:r.LINEAR_MIPMAP_LINEAR},Ge={[A0]:r.NEVER,[L0]:r.ALWAYS,[P0]:r.LESS,[Mu]:r.LEQUAL,[R0]:r.EQUAL,[Su]:r.GEQUAL,[I0]:r.GREATER,[O0]:r.NOTEQUAL};function Ne(A,v){if(v.type===ji&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===Bh||v.magFilter===Pc||v.magFilter===Rs||v.minFilter===En||v.minFilter===Bh||v.minFilter===Pc||v.minFilter===Rs)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Ce[v.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Ce[v.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Ce[v.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,Ze[v.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,Ze[v.minFilter]),v.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Mn||v.minFilter!==Pc&&v.minFilter!==Rs||v.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",E));let j=v.source,te=d.get(j);te===void 0&&(te={},d.set(j,te));let de=F(v);if(de!==A.__cacheKey){te[de]===void 0&&(te[de]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[de].usedTimes++;let ie=te[A.__cacheKey];ie!==void 0&&(te[A.__cacheKey].usedTimes--,ie.usedTimes===0&&P(v)),A.__cacheKey=de,A.__webglTexture=te[de].texture}return B}function ce(A,v,B){return Math.floor(Math.floor(A/B)/v)}function oe(A,v,B,j){let de=A.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,B,j,v.data);else{de.sort((Ee,fe)=>Ee.start-fe.start);let ie=0;for(let Ee=1;Ee<de.length;Ee++){let fe=de[ie],le=de[Ee],xe=fe.start+fe.count,Ye=ce(le.start,v.width,4),$e=ce(fe.start,v.width,4);le.start<=xe+1&&Ye===$e&&ce(le.start+le.count-1,v.width,4)===Ye?fe.count=Math.max(fe.count,le.start+le.count-fe.start):(++ie,de[ie]=le)}de.length=ie+1;let Y=t.getParameter(r.UNPACK_ROW_LENGTH),J=t.getParameter(r.UNPACK_SKIP_PIXELS),ve=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,fe=de.length;Ee<fe;Ee++){let le=de[Ee],xe=Math.floor(le.start/4),Ye=Math.ceil(le.count/4),$e=xe%v.width,D=Math.floor(xe/v.width),ae=Ye,Z=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,$e,D,ae,Z,B,j,v.data)}A.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Y),t.pixelStorei(r.UNPACK_SKIP_PIXELS,J),t.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function Ie(A,v,B){let j=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=r.TEXTURE_3D);let te=$(A,v),de=v.source;t.bindTexture(j,A.__webglTexture,r.TEXTURE0+B);let ie=n.get(de);if(de.version!==ie.__version||te===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Z=ft.getPrimaries(ft.workingColorSpace),be=v.colorSpace===qr?null:ft.getPrimaries(v.colorSpace),he=v.colorSpace===qr||Z===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let J=p(v.image,!1,i.maxTextureSize);J=_e(v,J);let ve=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),fe=b(v.internalFormat,ve,Ee,v.normalized,v.colorSpace,v.isVideoTexture);Ne(j,v);let le,xe=v.mipmaps,Ye=v.isVideoTexture!==!0,$e=ie.__version===void 0||te===!0,D=de.dataReady,ae=T(v,J);if(v.isDepthTexture)fe=C(v.format===Is,v.type),$e&&(Ye?t.texStorage2D(r.TEXTURE_2D,1,fe,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,fe,J.width,J.height,0,ve,Ee,null));else if(v.isDataTexture)if(xe.length>0){Ye&&$e&&t.texStorage2D(r.TEXTURE_2D,ae,fe,xe[0].width,xe[0].height);for(let Z=0,be=xe.length;Z<be;Z++)le=xe[Z],Ye?D&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,le.width,le.height,ve,Ee,le.data):t.texImage2D(r.TEXTURE_2D,Z,fe,le.width,le.height,0,ve,Ee,le.data);v.generateMipmaps=!1}else Ye?($e&&t.texStorage2D(r.TEXTURE_2D,ae,fe,J.width,J.height),D&&oe(v,J,ve,Ee)):t.texImage2D(r.TEXTURE_2D,0,fe,J.width,J.height,0,ve,Ee,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,fe,xe[0].width,xe[0].height,J.depth);for(let Z=0,be=xe.length;Z<be;Z++)if(le=xe[Z],v.format!==Bi)if(ve!==null)if(Ye){if(D)if(v.layerUpdates.size>0){let he=tp(le.width,le.height,v.format,v.type);for(let ne of v.layerUpdates){let se=le.data.subarray(ne*he/le.data.BYTES_PER_ELEMENT,(ne+1)*he/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,ne,le.width,le.height,1,ve,se)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,J.depth,ve,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,fe,le.width,le.height,J.depth,0,le.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,J.depth,ve,Ee,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,fe,le.width,le.height,J.depth,0,ve,Ee,le.data)}else{Ye&&$e&&t.texStorage2D(r.TEXTURE_2D,ae,fe,xe[0].width,xe[0].height);for(let Z=0,be=xe.length;Z<be;Z++)le=xe[Z],v.format!==Bi?ve!==null?Ye?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,le.width,le.height,ve,le.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,fe,le.width,le.height,0,le.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?D&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,le.width,le.height,ve,Ee,le.data):t.texImage2D(r.TEXTURE_2D,Z,fe,le.width,le.height,0,ve,Ee,le.data)}else if(v.isDataArrayTexture)if(Ye){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,fe,J.width,J.height,J.depth),D)if(v.layerUpdates.size>0){let Z=tp(J.width,J.height,v.format,v.type);for(let be of v.layerUpdates){let he=J.data.subarray(be*Z/J.data.BYTES_PER_ELEMENT,(be+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,J.width,J.height,1,ve,Ee,he)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ve,Ee,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,J.width,J.height,J.depth,0,ve,Ee,J.data);else if(v.isData3DTexture)Ye?($e&&t.texStorage3D(r.TEXTURE_3D,ae,fe,J.width,J.height,J.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ve,Ee,J.data)):t.texImage3D(r.TEXTURE_3D,0,fe,J.width,J.height,J.depth,0,ve,Ee,J.data);else if(v.isFramebufferTexture){if($e)if(Ye)t.texStorage2D(r.TEXTURE_2D,ae,fe,J.width,J.height);else{let Z=J.width,be=J.height;for(let he=0;he<ae;he++)t.texImage2D(r.TEXTURE_2D,he,fe,Z,be,0,ve,Ee,null),Z>>=1,be>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let Z=r.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),f.add(v),Z.onpaint=ue=>{let Be=ue.changedElements;for(let re of f)Be.includes(re.image)&&(re.needsUpdate=!0)},Z.requestPaint();return}let be=0,he=r.RGBA,ne=r.RGBA,se=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,be,he,ne,se,J),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Ye&&$e){let Z=tt(xe[0]);t.texStorage2D(r.TEXTURE_2D,ae,fe,Z.width,Z.height)}for(let Z=0,be=xe.length;Z<be;Z++)le=xe[Z],Ye?D&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ve,Ee,le):t.texImage2D(r.TEXTURE_2D,Z,fe,ve,Ee,le);v.generateMipmaps=!1}else if(Ye){if($e){let Z=tt(J);t.texStorage2D(r.TEXTURE_2D,ae,fe,Z.width,Z.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ee,J)}else t.texImage2D(r.TEXTURE_2D,0,fe,ve,Ee,J);m(v)&&y(j),ie.__version=de.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ve(A,v,B){if(v.image.length!==6)return;let j=$(A,v),te=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);let de=n.get(te);if(te.version!==de.__version||j===!0){t.activeTexture(r.TEXTURE0+B);let ie=ft.getPrimaries(ft.workingColorSpace),Y=v.colorSpace===qr?null:ft.getPrimaries(v.colorSpace),J=v.colorSpace===qr||ie===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ve=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let ne=0;ne<6;ne++)!ve&&!Ee?fe[ne]=p(v.image[ne],!0,i.maxCubemapSize):fe[ne]=Ee?v.image[ne].image:v.image[ne],fe[ne]=_e(v,fe[ne]);let le=fe[0],xe=s.convert(v.format,v.colorSpace),Ye=s.convert(v.type),$e=b(v.internalFormat,xe,Ye,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,ae=de.__version===void 0||j===!0,Z=te.dataReady,be=T(v,le);Ne(r.TEXTURE_CUBE_MAP,v);let he;if(ve){D&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,$e,le.width,le.height);for(let ne=0;ne<6;ne++){he=fe[ne].mipmaps;for(let se=0;se<he.length;se++){let ue=he[se];v.format!==Bi?xe!==null?D?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,$e,ue.width,ue.height,0,ue.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,ue.width,ue.height,xe,Ye,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,$e,ue.width,ue.height,0,xe,Ye,ue.data)}}}else{if(he=v.mipmaps,D&&ae){he.length>0&&be++;let ne=tt(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,$e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe[ne].width,fe[ne].height,xe,Ye,fe[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,fe[ne].width,fe[ne].height,0,xe,Ye,fe[ne].data);for(let se=0;se<he.length;se++){let Be=he[se].image[ne].image;D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,Be.width,Be.height,xe,Ye,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,$e,Be.width,Be.height,0,xe,Ye,Be.data)}}else{D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe,Ye,fe[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,xe,Ye,fe[ne]);for(let se=0;se<he.length;se++){let ue=he[se];D?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,xe,Ye,ue.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,$e,xe,Ye,ue.image[ne])}}}m(v)&&y(r.TEXTURE_CUBE_MAP),de.__version=te.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Le(A,v,B,j,te,de){let ie=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),J=b(B.internalFormat,ie,Y,B.normalized,B.colorSpace),ve=n.get(v),Ee=n.get(B);if(Ee.__renderTarget=v,!ve.__hasExternalTextures){let fe=Math.max(1,v.width>>de),le=Math.max(1,v.height>>de);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,de,J,fe,le,v.depth,0,ie,Y,null):t.texImage2D(te,de,J,fe,le,0,ie,Y,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),je(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,te,Ee.__webglTexture,0,Qe(v)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,te,Ee.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function st(A,v,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),v.depthBuffer){let j=v.depthTexture,te=j&&j.isDepthTexture?j.type:null,de=C(v.stencilBuffer,te),ie=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe(v),de,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe(v),de,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,de,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,A)}else{let j=v.textures;for(let te=0;te<j.length;te++){let de=j[te],ie=s.convert(de.format,de.colorSpace),Y=s.convert(de.type),J=b(de.internalFormat,ie,Y,de.normalized,de.colorSpace);je(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe(v),J,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe(v),J,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,J,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(A,v,B){let j=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),te.__webglTexture===void 0){te.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,v.depthTexture);let ve=s.convert(v.depthTexture.format),Ee=s.convert(v.depthTexture.type),fe;v.depthTexture.format===pr?fe=r.DEPTH_COMPONENT24:v.depthTexture.format===Is&&(fe=r.DEPTH24_STENCIL8);for(let le=0;le<6;le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,fe,v.width,v.height,0,ve,Ee,null)}}else K(v.depthTexture,0);let de=te.__webglTexture,ie=Qe(v),Y=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,J=v.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===pr)je(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Y,de,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,J,Y,de,0);else if(v.depthTexture.format===Is)je(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Y,de,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,J,Y,de,0);else throw new Error("Unknown depthTexture format")}function Xe(A){let v=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=j}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)Ae(v.__webglFramebuffer[j],A,j);else{let j=A.texture.mipmaps;j&&j.length>0?Ae(v.__webglFramebuffer[0],A,0):Ae(v.__webglFramebuffer,A,0)}else if(B){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=r.createRenderbuffer(),st(v.__webglDepthbuffer[j],A,!1);else{let te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,de)}}else{let j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),st(v.__webglDepthbuffer,A,!1);else{let te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,de)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(A,v,B){let j=n.get(A);v!==void 0&&Le(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Xe(A)}function He(A){let v=A.texture,B=n.get(A),j=n.get(v);A.addEventListener("dispose",x);let te=A.textures,de=A.isWebGLCubeRenderTarget===!0,ie=te.length>1;if(ie||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=v.version,o.memory.textures++),de){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=r.createFramebuffer()}else B.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)B.__webglFramebuffer[Y]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ie)for(let Y=0,J=te.length;Y<J;Y++){let ve=n.get(te[Y]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&je(A)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){let J=te[Y];B.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let ve=s.convert(J.format,J.colorSpace),Ee=s.convert(J.type),fe=b(J.internalFormat,ve,Ee,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),le=Qe(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,le,fe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),st(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(B.__webglFramebuffer[Y][J],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Le(B.__webglFramebuffer[Y],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(v)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let Y=0,J=te.length;Y<J;Y++){let ve=te[Y],Ee=n.get(ve),fe=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ee.__webglTexture),Ne(fe,ve),Le(B.__webglFramebuffer,A,ve,r.COLOR_ATTACHMENT0+Y,fe,0),m(ve)&&y(fe)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Y,j.__webglTexture),Ne(Y,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Le(B.__webglFramebuffer[J],A,v,r.COLOR_ATTACHMENT0,Y,J);else Le(B.__webglFramebuffer,A,v,r.COLOR_ATTACHMENT0,Y,0);m(v)&&y(Y),t.unbindTexture()}A.depthBuffer&&Xe(A)}function X(A){let v=A.textures;for(let B=0,j=v.length;B<j;B++){let te=v[B];if(m(te)){let de=S(A),ie=n.get(te).__webglTexture;t.bindTexture(de,ie),y(de),t.unbindTexture()}}}let ut=[],zt=[];function N(A){if(A.samples>0){if(je(A)===!1){let v=A.textures,B=A.width,j=A.height,te=r.COLOR_BUFFER_BIT,de=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=n.get(A),Y=v.length>1;if(Y)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);let J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]);let Ee=n.get(v[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,B,j,0,0,B,j,te,r.NEAREST),c===!0&&(ut.length=0,zt.length=0,ut.push(r.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ut.push(de),zt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]);let Ee=n.get(v[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let v=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Qe(A){return Math.min(i.maxSamples,A.samples)}function je(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function _e(A,v){let B=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==cc&&B!==qr&&(ft.getTransfer(B)===wt?(j!==Bi||te!==wi)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",B)),v}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.getTextureUnits=W,this.setTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=I,this.setTextureCube=ge,this.rebindTextures=it,this.setupRenderTarget=He,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nw(r,e){function t(n,i=qr){let s,o=ft.getTransfer(i);if(n===wi)return r.UNSIGNED_BYTE;if(n===Vh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vf)return r.BYTE;if(n===Gf)return r.SHORT;if(n===ua)return r.UNSIGNED_SHORT;if(n===zh)return r.INT;if(n===Ki)return r.UNSIGNED_INT;if(n===ji)return r.FLOAT;if(n===vr)return r.HALF_FLOAT;if(n===Xf)return r.ALPHA;if(n===qf)return r.RGB;if(n===Bi)return r.RGBA;if(n===pr)return r.DEPTH_COMPONENT;if(n===Is)return r.DEPTH_STENCIL;if(n===Yf)return r.RED;if(n===Hh)return r.RED_INTEGER;if(n===Os)return r.RG;if(n===Wh)return r.RG_INTEGER;if(n===Xh)return r.RGBA_INTEGER;if(n===Rc||n===Ic||n===Oc||n===Lc)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qh||n===Yh||n===Kh||n===jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zh||n===$h||n===Jh||n===Qh||n===eu||n===Dc||n===tu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zh||n===$h)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qh)return s.COMPRESSED_R11_EAC;if(n===eu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Dc)return s.COMPRESSED_RG11_EAC;if(n===tu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===cu||n===lu||n===hu||n===uu||n===du||n===fu||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===iu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ru)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===su)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ou)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===au)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===du)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gu||n===_u||n===xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===gu)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===yu||n===Fc||n===bu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===da?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bi({vertexShader:iw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new bc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gp=class extends mr{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new mp,m={},y=t.getContextAttributes(),S=null,b=null,C=[],T=[],E=new xt,x=null,w=new Gn;w.viewport=new $t;let P=new Gn;P.viewport=new $t;let R=[w,P],O=new Nh,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=C[$];return ce===void 0&&(ce=new aa,C[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=C[$];return ce===void 0&&(ce=new aa,C[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=C[$];return ce===void 0&&(ce=new aa,C[$]=ce),ce.getHandSpace()};function L($){let ce=T.indexOf($.inputSource);if(ce===-1)return;let oe=C[ce];oe!==void 0&&(oe.update($.inputSource,$.frame,l||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",F);for(let $=0;$<C.length;$++){let ce=T[$];ce!==null&&(T[$]=null,C[$].disconnect(ce))}G=null,W=null,p.reset();for(let $ in m)delete m[$];e.setRenderTarget(S),d=null,u=null,f=null,i=null,b=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",k),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ie=null,Ve=null;y.depth&&(Ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Is:pr,Ie=y.stencil?da:Ki);let Le={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Le),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new yi(u.textureWidth,u.textureHeight,{format:Bi,type:wi,depthTexture:new Xr(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new yi(d.framebufferWidth,d.framebufferHeight,{format:Bi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F($){for(let ce=0;ce<$.removed.length;ce++){let oe=$.removed[ce],Ie=T.indexOf(oe);Ie>=0&&(T[Ie]=null,C[Ie].disconnect(oe))}for(let ce=0;ce<$.added.length;ce++){let oe=$.added[ce],Ie=T.indexOf(oe);if(Ie===-1){for(let Le=0;Le<C.length;Le++)if(Le>=T.length){T.push(oe),Ie=Le;break}else if(T[Le]===null){T[Le]=oe,Ie=Le;break}if(Ie===-1)break}let Ve=C[Ie];Ve&&Ve.connect(oe)}}let K=new H,ee=new H;function I($,ce,oe){K.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(oe.matrixWorld);let Ie=K.distanceTo(ee),Ve=ce.projectionMatrix.elements,Le=oe.projectionMatrix.elements,st=Ve[14]/(Ve[10]-1),Ae=Ve[14]/(Ve[10]+1),Xe=(Ve[9]+1)/Ve[5],it=(Ve[9]-1)/Ve[5],He=(Ve[8]-1)/Ve[0],X=(Le[8]+1)/Le[0],ut=st*He,zt=st*X,N=Ie/(-He+X),Qe=N*-He;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qe),$.translateZ(N),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ve[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let je=st+N,mt=Ae+N,_e=ut-Qe,tt=zt+(Ie-Qe),A=Xe*Ae/mt*je,v=it*Ae/mt*je;$.projectionMatrix.makePerspective(_e,tt,A,v,je,mt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ge($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ce=$.near,oe=$.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),O.near=P.near=w.near=ce,O.far=P.far=w.far=oe,(G!==O.near||W!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,W=O.far),O.layers.mask=$.layers.mask|6,w.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Ie=$.parent,Ve=O.cameras;ge(O,Ie);for(let Le=0;Le<Ve.length;Le++)ge(Ve[Le],Ie);Ve.length===2?I(O,w,P):O.projectionMatrix.copy(w.projectionMatrix),Ce($,O,Ie)};function Ce($,ce,oe){oe===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ra*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function($){return m[$]};let Ze=null;function Ge($,ce){if(h=ce.getViewerPose(l||o),g=ce,h!==null){let oe=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ie=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let Ae=0;Ae<oe.length;Ae++){let Xe=oe[Ae],it=null;if(d!==null)it=d.getViewport(Xe);else{let X=f.getViewSubImage(u,Xe);it=X.viewport,Ae===0&&(e.setRenderTargetTextures(b,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(b))}let He=R[Ae];He===void 0&&(He=new Gn,He.layers.enable(Ae),He.viewport=new $t,R[Ae]=He),He.matrix.fromArray(Xe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Xe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(it.x,it.y,it.width,it.height),Ae===0&&(O.matrix.copy(He.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(He)}let Ve=i.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Ae=f.getDepthInformation(oe[0]);Ae&&Ae.isValid&&Ae.texture&&p.init(Ae,i.renderState)}if(Ve&&Ve.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Ae=0;Ae<oe.length;Ae++){let Xe=oe[Ae].camera;if(Xe){let it=m[Xe];it||(it=new vc,m[Xe]=it);let He=f.getCameraImage(Xe);it.sourceTexture=He}}}}for(let oe=0;oe<C.length;oe++){let Ie=T[oe],Ve=C[oe];Ie!==null&&Ve!==void 0&&Ve.update(Ie,ce,l||o)}Ze&&Ze($,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}let Ne=new c_;Ne.setAnimationLoop(Ge),this.setAnimationLoop=function($){Ze=$},this.dispose=function(){}}},sw=new Zt,p_=new Je;p_.set(-1,0,0,0,1,0,0,0,1);function ow(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Jf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,S,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ei&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ei&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),S=y.envMap,b=y.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(p_),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ei&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aw(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function l(y,S){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",p));let C=S.program;n.updateUBOMapping(y,C);let T=e.render.frame;s[y.id]!==T&&(u(y),s[y.id]=T)}function h(y){let S=f();y.__bindingPointIndex=S;let b=r.createBuffer(),C=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],b=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,E=b.length;T<E;T++){let x=Array.isArray(b[T])?b[T]:[b[T]];for(let w=0,P=x.length;w<P;w++){let R=x[w];if(d(R,T,w,C)===!0){let O=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],W=0;for(let L=0;L<G.length;L++){let k=G[L],F=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,O+W,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):ArrayBuffer.isView(k)?R.__data.set(new k.constructor(k.buffer,k.byteOffset,R.__data.length)):(k.toArray(R.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,S,b,C){let T=y.value,E=S+"_"+b;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:ArrayBuffer.isView(T)?C[E]=T.slice():C[E]=T.clone(),!0;{let x=C[E];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return C[E]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function g(y){let S=y.uniforms,b=0,C=16;for(let E=0,x=S.length;E<x;E++){let w=Array.isArray(S[E])?S[E]:[S[E]];for(let P=0,R=w.length;P<R;P++){let O=w[P],G=Array.isArray(O.value)?O.value:[O.value];for(let W=0,L=G.length;W<L;W++){let k=G[W],F=_(k),K=b%C,ee=K%F.boundary,I=K+ee;b+=ee,I!==0&&C-I<F.storage&&(b+=C-I),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=F.storage}}}let T=b%C;return T>0&&(b+=C-T),y.__size=b,y.__cache={},this}function _(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):We("WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){let S=y.target;S.removeEventListener("dispose",p);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}var cw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yr=null;function lw(){return yr===null&&(yr=new Mh(cw,16,16,Os,vr),yr.name="DFG_LUT",yr.minFilter=En,yr.magFilter=En,yr.wrapS=fr,yr.wrapT=fr,yr.generateMipmaps=!1,yr.needsUpdate=!0),yr}var Au=class{constructor(e={}){let{canvas:t=D0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=wi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=d,p=new Set([Xh,Wh,Hh]),m=new Set([wi,Ki,ua,da,Vh,Gh]),y=new Uint32Array(4),S=new Int32Array(4),b=new H,C=null,T=null,E=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,O=null;this._outputColorSpace=vi;let G=0,W=0,L=null,k=-1,F=null,K=new $t,ee=new $t,I=null,ge=new dt(0),Ce=0,Ze=t.width,Ge=t.height,Ne=1,$=null,ce=null,oe=new $t(0,0,Ze,Ge),Ie=new $t(0,0,Ze,Ge),Ve=!1,Le=new _c,st=!1,Ae=!1,Xe=new Zt,it=new H,He=new $t,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function zt(){return L===null?Ne:1}let N=n;function Qe(M,U){return t.getContext(M,U)}try{let M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",ue,!1),N===null){let U="webgl2";if(N=Qe(U,M),N===null)throw Qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw qe("WebGLRenderer: "+M.message),M}let je,mt,_e,tt,A,v,B,j,te,de,ie,Y,J,ve,Ee,fe,le,xe,Ye,$e,D,ae,Z;function be(){je=new g1(N),je.init(),D=new nw(N,je),mt=new c1(N,je,e,D),_e=new ew(N,je),mt.reversedDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),tt=new v1(N),A=new zS,v=new tw(N,je,_e,A,mt,D,tt),B=new m1(P),j=new Sy(N),ae=new o1(N,j),te=new _1(N,j,tt,ae),de=new b1(N,te,j,ae,tt),xe=new y1(N,mt,v),Ee=new l1(A),ie=new BS(P,B,je,mt,ae,Ee),Y=new ow(P,A),J=new GS,ve=new KS(je),le=new s1(P,B,_e,de,g,c),fe=new QS(P,de,mt),Z=new aw(N,tt,mt,_e),Ye=new a1(N,je,tt),$e=new x1(N,je,tt),tt.programs=ie.programs,P.capabilities=mt,P.extensions=je,P.properties=A,P.renderLists=J,P.shadowMap=fe,P.state=_e,P.info=tt}be(),_!==wi&&(w=new S1(_,t.width,t.height,i,s));let he=new gp(P,N);this.xr=he,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(M){M!==void 0&&(Ne=M,this.setSize(Ze,Ge,!1))},this.getSize=function(M){return M.set(Ze,Ge)},this.setSize=function(M,U,q=!0){if(he.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=M,Ge=U,t.width=Math.floor(M*Ne),t.height=Math.floor(U*Ne),q===!0&&(t.style.width=M+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Ze*Ne,Ge*Ne).floor()},this.setDrawingBufferSize=function(M,U,q){Ze=M,Ge=U,Ne=q,t.width=Math.floor(M*q),t.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===wi){qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){We("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(oe)},this.setViewport=function(M,U,q,z){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,U,q,z),_e.viewport(K.copy(oe).multiplyScalar(Ne).round())},this.getScissor=function(M){return M.copy(Ie)},this.setScissor=function(M,U,q,z){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,U,q,z),_e.scissor(ee.copy(Ie).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){_e.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let z=0;if(M){let V=!1;if(L!==null){let ye=L.texture.format;V=p.has(ye)}if(V){let ye=L.texture.type,Me=m.has(ye),we=le.getClearColor(),Fe=le.getClearAlpha(),Ue=we.r,et=we.g,ot=we.b;Me?(y[0]=Ue,y[1]=et,y[2]=ot,y[3]=Fe,N.clearBufferuiv(N.COLOR,0,y)):(S[0]=Ue,S[1]=et,S[2]=ot,S[3]=Fe,N.clearBufferiv(N.COLOR,0,S))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),le.dispose(),J.dispose(),ve.dispose(),A.dispose(),B.dispose(),de.dispose(),ae.dispose(),Z.dispose(),ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",lt),he.removeEventListener("sessionend",Ut),kt.stop()};function ne(M){M.preventDefault(),Zf("WebGLRenderer: Context Lost."),R=!0}function se(){Zf("WebGLRenderer: Context Restored."),R=!1;let M=tt.autoReset,U=fe.enabled,q=fe.autoUpdate,z=fe.needsUpdate,V=fe.type;be(),tt.autoReset=M,fe.enabled=U,fe.autoUpdate=q,fe.needsUpdate=z,fe.type=V}function ue(M){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Be(M){let U=M.target;U.removeEventListener("dispose",Be),re(U)}function re(M){ze(M),A.remove(M)}function ze(M){let U=A.get(M).programs;U!==void 0&&(U.forEach(function(q){ie.releaseProgram(q)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,z,V,ye){U===null&&(U=X);let Me=V.isMesh&&V.matrixWorld.determinant()<0,we=gn(M,U,q,z,V);_e.setMaterial(z,Me);let Fe=q.index,Ue=1;if(z.wireframe===!0){if(Fe=te.getWireframeAttribute(q),Fe===void 0)return;Ue=2}let et=q.drawRange,ot=q.attributes.position,ke=et.start*Ue,Et=(et.start+et.count)*Ue;ye!==null&&(ke=Math.max(ke,ye.start*Ue),Et=Math.min(Et,(ye.start+ye.count)*Ue)),Fe!==null?(ke=Math.max(ke,0),Et=Math.min(Et,Fe.count)):ot!=null&&(ke=Math.max(ke,0),Et=Math.min(Et,ot.count));let Qt=Et-ke;if(Qt<0||Qt===1/0)return;ae.setup(V,z,we,q,Fe);let Wt,Pt=Ye;if(Fe!==null&&(Wt=j.get(Fe),Pt=$e,Pt.setIndex(Wt)),V.isMesh)z.wireframe===!0?(_e.setLineWidth(z.wireframeLinewidth*zt()),Pt.setMode(N.LINES)):Pt.setMode(N.TRIANGLES);else if(V.isLine){let Pn=z.linewidth;Pn===void 0&&(Pn=1),_e.setLineWidth(Pn*zt()),V.isLineSegments?Pt.setMode(N.LINES):V.isLineLoop?Pt.setMode(N.LINE_LOOP):Pt.setMode(N.LINE_STRIP)}else V.isPoints?Pt.setMode(N.POINTS):V.isSprite&&Pt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Pn=V._multiDrawStarts,Pe=V._multiDrawCounts,ai=V._multiDrawCount,vt=Fe?j.get(Fe).bytesPerElement:1,Ei=A.get(z).currentProgram.getUniforms();for(let Zi=0;Zi<ai;Zi++)Ei.setValue(N,"_gl_DrawID",Zi),Pt.render(Pn[Zi]/vt,Pe[Zi])}else if(V.isInstancedMesh)Pt.renderInstances(ke,Qt,V.count);else if(q.isInstancedBufferGeometry){let Pn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,Pn);Pt.renderInstances(ke,Qt,Pe)}else Pt.render(ke,Qt)};function De(M,U,q){M.transparent===!0&&M.side===_r&&M.forceSinglePass===!1?(M.side=ei,M.needsUpdate=!0,mn(M,U,q),M.side=Wr,M.needsUpdate=!0,mn(M,U,q),M.side=_r):mn(M,U,q)}this.compile=function(M,U,q=null){q===null&&(q=M),T=ve.get(q),T.init(U),x.push(T),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==q&&M.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();let z=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ye=V.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){let we=ye[Me];De(we,q,V),z.add(we)}else De(ye,q,V),z.add(ye)}),T=x.pop(),z},this.compileAsync=function(M,U,q=null){let z=this.compile(M,U,q);return new Promise(V=>{function ye(){if(z.forEach(function(Me){A.get(Me).currentProgram.isReady()&&z.delete(Me)}),z.size===0){V(M);return}setTimeout(ye,10)}je.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ke=null;function rn(M){Ke&&Ke(M)}function lt(){kt.stop()}function Ut(){kt.start()}let kt=new c_;kt.setAnimationLoop(rn),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(M){Ke=M,he.setAnimationLoop(M),M===null?kt.stop():kt.start()},he.addEventListener("sessionstart",lt),he.addEventListener("sessionend",Ut),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(M,U);let q=he.enabled===!0&&he.isPresenting===!0,z=w!==null&&(L===null||q)&&w.begin(P,L);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,L),T=ve.get(M,x.length),T.init(U),T.state.textureUnits=v.getTextureUnits(),x.push(T),Xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(Xe,Xi,U.reversedDepth),Ae=this.localClippingEnabled,st=Ee.init(this.clippingPlanes,Ae),C=J.get(M,E.length),C.init(),E.push(C),he.enabled===!0&&he.isPresenting===!0){let Me=P.xr.getDepthSensingMesh();Me!==null&&Dt(Me,U,-1/0,P.sortObjects)}Dt(M,U,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort($,ce),ut=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ut&&le.addToRenderList(C,M),this.info.render.frame++,st===!0&&Ee.beginShadows();let V=T.state.shadowsArray;if(fe.render(V,M,U),st===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&w.hasRenderPass())===!1){let Me=C.opaque,we=C.transmissive;if(T.setupLights(),U.isArrayCamera){let Fe=U.cameras;if(we.length>0)for(let Ue=0,et=Fe.length;Ue<et;Ue++){let ot=Fe[Ue];bt(Me,we,M,ot)}ut&&le.render(M);for(let Ue=0,et=Fe.length;Ue<et;Ue++){let ot=Fe[Ue];At(C,M,ot,ot.viewport)}}else we.length>0&&bt(Me,we,M,U),ut&&le.render(M),At(C,M,U)}L!==null&&W===0&&(v.updateMultisampleRenderTarget(L),v.updateRenderTargetMipmap(L)),z&&w.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),ae.resetDefaultState(),k=-1,F=null,x.pop(),x.length>0?(T=x[x.length-1],v.setTextureUnits(T.state.textureUnits),st===!0&&Ee.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?C=E[E.length-1]:C=null,O!==null&&O.renderEnd()};function Dt(M,U,q,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Le.intersectsSprite(M)){z&&He.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Xe);let Me=de.update(M),we=M.material;we.visible&&C.push(M,Me,we,q,He.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Le.intersectsObject(M))){let Me=de.update(M),we=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),He.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),He.copy(Me.boundingSphere.center)),He.applyMatrix4(M.matrixWorld).applyMatrix4(Xe)),Array.isArray(we)){let Fe=Me.groups;for(let Ue=0,et=Fe.length;Ue<et;Ue++){let ot=Fe[Ue],ke=we[ot.materialIndex];ke&&ke.visible&&C.push(M,Me,ke,q,He.z,ot)}}else we.visible&&C.push(M,Me,we,q,He.z,null)}}let ye=M.children;for(let Me=0,we=ye.length;Me<we;Me++)Dt(ye[Me],U,q,z)}function At(M,U,q,z){let{opaque:V,transmissive:ye,transparent:Me}=M;T.setupLightsView(q),st===!0&&Ee.setGlobalState(P.clippingPlanes,q),z&&_e.viewport(K.copy(z)),V.length>0&&An(V,U,q),ye.length>0&&An(ye,U,q),Me.length>0&&An(Me,U,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function bt(M,U,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let ke=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new yi(1,1,{generateMipmaps:!0,type:ke?vr:wi,minFilter:Rs,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let ye=T.state.transmissionRenderTarget[z.id],Me=z.viewport||K;ye.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);let we=P.getRenderTarget(),Fe=P.getActiveCubeFace(),Ue=P.getActiveMipmapLevel();P.setRenderTarget(ye),P.getClearColor(ge),Ce=P.getClearAlpha(),Ce<1&&P.setClearColor(16777215,.5),P.clear(),ut&&le.render(q);let et=P.toneMapping;P.toneMapping=Yi;let ot=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),st===!0&&Ee.setGlobalState(P.clippingPlanes,z),An(M,q,z),v.updateMultisampleRenderTarget(ye),v.updateRenderTargetMipmap(ye),je.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Et=0,Qt=U.length;Et<Qt;Et++){let Wt=U[Et],{object:Pt,geometry:Pn,material:Pe,group:ai}=Wt;if(Pe.side===_r&&Pt.layers.test(z.layers)){let vt=Pe.side;Pe.side=ei,Pe.needsUpdate=!0,Ft(Pt,q,z,Pn,Pe,ai),Pe.side=vt,Pe.needsUpdate=!0,ke=!0}}ke===!0&&(v.updateMultisampleRenderTarget(ye),v.updateRenderTargetMipmap(ye))}P.setRenderTarget(we,Fe,Ue),P.setClearColor(ge,Ce),ot!==void 0&&(z.viewport=ot),P.toneMapping=et}function An(M,U,q){let z=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ye=M.length;V<ye;V++){let Me=M[V],{object:we,geometry:Fe,group:Ue}=Me,et=Me.material;et.allowOverride===!0&&z!==null&&(et=z),we.layers.test(q.layers)&&Ft(we,U,q,Fe,et,Ue)}}function Ft(M,U,q,z,V,ye){M.onBeforeRender(P,U,q,z,V,ye),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(P,U,q,z,M,ye),V.transparent===!0&&V.side===_r&&V.forceSinglePass===!1?(V.side=ei,V.needsUpdate=!0,P.renderBufferDirect(q,U,z,V,M,ye),V.side=Wr,V.needsUpdate=!0,P.renderBufferDirect(q,U,z,V,M,ye),V.side=_r):P.renderBufferDirect(q,U,z,V,M,ye),M.onAfterRender(P,U,q,z,V,ye)}function mn(M,U,q){U.isScene!==!0&&(U=X);let z=A.get(M),V=T.state.lights,ye=T.state.shadowsArray,Me=V.state.version,we=ie.getParameters(M,V.state,ye,U,q,T.state.lightProbeGridArray),Fe=ie.getProgramCacheKey(we),Ue=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=B.get(M.envMap||z.environment,et),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",Be),Ue=new Map,z.programs=Ue);let ot=Ue.get(Fe);if(ot!==void 0){if(z.currentProgram===ot&&z.lightsStateVersion===Me)return sn(M,we),ot}else we.uniforms=ie.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,q,we),M.onBeforeCompile(we,P),ot=ie.acquireProgram(we,Fe),Ue.set(Fe,ot),z.uniforms=we.uniforms;let ke=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=Ee.uniform),sn(M,we),z.needsLights=_o(M),z.lightsStateVersion=Me,z.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=ot,z.uniformsList=null,ot}function oi(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=ma.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function sn(M,U){let q=A.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function hn(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let q=0,z=M.length;q<z;q++){let V=M[q];if(V.texture!==null&&V.boundingBox.containsPoint(b))return V}return null}function gn(M,U,q,z,V){U.isScene!==!0&&(U=X),v.resetTextureUnits();let ye=U.fog,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,we=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ft.workingColorSpace,Fe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ue=B.get(z.envMap||Me,Fe),et=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ot=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ke=!!q.morphAttributes.position,Et=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color,Wt=Yi;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Wt=P.toneMapping);let Pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pn=Pt!==void 0?Pt.length:0,Pe=A.get(z),ai=T.state.lights;if(st===!0&&(Ae===!0||M!==F)){let Nt=M===F&&z.id===k;Ee.setState(z,M,Nt)}let vt=!1;z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ai.state.version||Pe.outputColorSpace!==we||V.isBatchedMesh&&Pe.batching===!1||!V.isBatchedMesh&&Pe.batching===!0||V.isBatchedMesh&&Pe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pe.instancing===!1||!V.isInstancedMesh&&Pe.instancing===!0||V.isSkinnedMesh&&Pe.skinning===!1||!V.isSkinnedMesh&&Pe.skinning===!0||V.isInstancedMesh&&Pe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pe.instancingMorph===!1&&V.morphTexture!==null||Pe.envMap!==Ue||z.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ee.numPlanes||Pe.numIntersection!==Ee.numIntersection)||Pe.vertexAlphas!==et||Pe.vertexTangents!==ot||Pe.morphTargets!==ke||Pe.morphNormals!==Et||Pe.morphColors!==Qt||Pe.toneMapping!==Wt||Pe.morphTargetsCount!==Pn||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Pe.__version=z.version);let Ei=Pe.currentProgram;vt===!0&&(Ei=mn(z,U,V),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Ei,Pe));let Zi=!1,Kr=!1,xo=!1,Rt=Ei.getUniforms(),en=Pe.uniforms;if(_e.useProgram(Ei.program)&&(Zi=!0,Kr=!0,xo=!0),z.id!==k&&(k=z.id,Kr=!0),Pe.needsLights){let Nt=hn(T.state.lightProbeGridArray,V);Pe.lightProbeGrid!==Nt&&(Pe.lightProbeGrid=Nt,Kr=!0)}if(Zi||F!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Rt.setValue(N,"projectionMatrix",M.projectionMatrix),Rt.setValue(N,"viewMatrix",M.matrixWorldInverse);let Zr=Rt.map.cameraPosition;Zr!==void 0&&Zr.setValue(N,it.setFromMatrixPosition(M.matrixWorld)),mt.logarithmicDepthBuffer&&Rt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Rt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),F!==M&&(F=M,Kr=!0,xo=!0)}if(Pe.needsLights&&(ai.state.directionalShadowMap.length>0&&Rt.setValue(N,"directionalShadowMap",ai.state.directionalShadowMap,v),ai.state.spotShadowMap.length>0&&Rt.setValue(N,"spotShadowMap",ai.state.spotShadowMap,v),ai.state.pointShadowMap.length>0&&Rt.setValue(N,"pointShadowMap",ai.state.pointShadowMap,v)),V.isSkinnedMesh){Rt.setOptional(N,V,"bindMatrix"),Rt.setOptional(N,V,"bindMatrixInverse");let Nt=V.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Rt.setValue(N,"boneTexture",Nt.boneTexture,v))}V.isBatchedMesh&&(Rt.setOptional(N,V,"batchingTexture"),Rt.setValue(N,"batchingTexture",V._matricesTexture,v),Rt.setOptional(N,V,"batchingIdTexture"),Rt.setValue(N,"batchingIdTexture",V._indirectTexture,v),Rt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Rt.setValue(N,"batchingColorTexture",V._colorsTexture,v));let jr=q.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&xe.update(V,q,Ei),(Kr||Pe.receiveShadow!==V.receiveShadow)&&(Pe.receiveShadow=V.receiveShadow,Rt.setValue(N,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=lw()),Kr){if(Rt.setValue(N,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&Mr(en,xo),ye&&z.fog===!0&&Y.refreshFogUniforms(en,ye),Y.refreshMaterialUniforms(en,z,Ne,Ge,T.state.transmissionRenderTarget[M.id]),Pe.needsLights&&Pe.lightProbeGrid){let Nt=Pe.lightProbeGrid;en.probesSH.value=Nt.texture,en.probesMin.value.copy(Nt.boundingBox.min),en.probesMax.value.copy(Nt.boundingBox.max),en.probesResolution.value.copy(Nt.resolution)}ma.upload(N,oi(Pe),en,v)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ma.upload(N,oi(Pe),en,v),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Rt.setValue(N,"center",V.center),Rt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Rt.setValue(N,"normalMatrix",V.normalMatrix),Rt.setValue(N,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let Nt=z.uniformsGroups;for(let Zr=0,vo=Nt.length;Zr<vo;Zr++){let _p=Nt[Zr];Z.update(_p,Ei),Z.bind(_p,Ei)}}return Ei}function Mr(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function _o(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,U,q){let z=A.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),A.get(M.texture).__webglTexture=U,A.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let q=A.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0};let _n=N.createFramebuffer();this.setRenderTarget=function(M,U=0,q=0){L=M,G=U,W=q;let z=null,V=!1,ye=!1;if(M){let we=A.get(M);if(we.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(N.FRAMEBUFFER,we.__webglFramebuffer),K.copy(M.viewport),ee.copy(M.scissor),I=M.scissorTest,_e.viewport(K),_e.scissor(ee),_e.setScissorTest(I),k=-1;return}else if(we.__webglFramebuffer===void 0)v.setupRenderTarget(M);else if(we.__hasExternalTextures)v.rebindTextures(M,A.get(M.texture).__webglTexture,A.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let et=M.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&A.has(et)&&(M.width!==et.image.width||M.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(M)}}let Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);let Ue=A.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?z=Ue[U][q]:z=Ue[U],V=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?z=A.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[q]:z=Ue,K.copy(M.viewport),ee.copy(M.scissor),I=M.scissorTest}else K.copy(oe).multiplyScalar(Ne).floor(),ee.copy(Ie).multiplyScalar(Ne).floor(),I=Ve;if(q!==0&&(z=_n),_e.bindFramebuffer(N.FRAMEBUFFER,z)&&_e.drawBuffers(M,z),_e.viewport(K),_e.scissor(ee),_e.setScissorTest(I),V){let we=A.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,q)}else if(ye){let we=U;for(let Fe=0;Fe<M.textures.length;Fe++){let Ue=A.get(M.textures[Fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Fe,Ue.__webglTexture,q,we)}}else if(M!==null&&q!==0){let we=A.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,q)}k=-1},this.readRenderTargetPixels=function(M,U,q,z,V,ye,Me,we=0){if(!(M&&M.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Fe=Fe[Me]),Fe){_e.bindFramebuffer(N.FRAMEBUFFER,Fe);try{let Ue=M.textures[we],et=Ue.format,ot=Ue.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we),!mt.textureFormatReadable(et)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(ot)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&q>=0&&q<=M.height-V&&N.readPixels(U,q,z,V,D.convert(et),D.convert(ot),ye)}finally{let Ue=L!==null?A.get(L).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,z,V,ye,Me,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Fe=Fe[Me]),Fe)if(U>=0&&U<=M.width-z&&q>=0&&q<=M.height-V){_e.bindFramebuffer(N.FRAMEBUFFER,Fe);let Ue=M.textures[we],et=Ue.format,ot=Ue.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we),!mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(U,q,z,V,D.convert(et),D.convert(ot),0);let Et=L!==null?A.get(L).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Et);let Qt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await N0(N,Qt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.deleteBuffer(ke),N.deleteSync(Qt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){let z=Math.pow(2,-q),V=Math.floor(M.image.width*z),ye=Math.floor(M.image.height*z),Me=U!==null?U.x:0,we=U!==null?U.y:0;v.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Me,we,V,ye),_e.unbindTexture()};let Jt=N.createFramebuffer(),Ti=N.createFramebuffer();this.copyTextureToTexture=function(M,U,q=null,z=null,V=0,ye=0){let Me,we,Fe,Ue,et,ot,ke,Et,Qt,Wt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(q!==null)Me=q.max.x-q.min.x,we=q.max.y-q.min.y,Fe=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,et=q.min.y,ot=q.isBox3?q.min.z:0;else{let en=Math.pow(2,-V);Me=Math.floor(Wt.width*en),we=Math.floor(Wt.height*en),M.isDataArrayTexture?Fe=Wt.depth:M.isData3DTexture?Fe=Math.floor(Wt.depth*en):Fe=1,Ue=0,et=0,ot=0}z!==null?(ke=z.x,Et=z.y,Qt=z.z):(ke=0,Et=0,Qt=0);let Pt=D.convert(U.format),Pn=D.convert(U.type),Pe;U.isData3DTexture?(v.setTexture3D(U,0),Pe=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(v.setTexture2DArray(U,0),Pe=N.TEXTURE_2D_ARRAY):(v.setTexture2D(U,0),Pe=N.TEXTURE_2D),_e.activeTexture(N.TEXTURE0),_e.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),_e.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_e.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let ai=_e.getParameter(N.UNPACK_ROW_LENGTH),vt=_e.getParameter(N.UNPACK_IMAGE_HEIGHT),Ei=_e.getParameter(N.UNPACK_SKIP_PIXELS),Zi=_e.getParameter(N.UNPACK_SKIP_ROWS),Kr=_e.getParameter(N.UNPACK_SKIP_IMAGES);_e.pixelStorei(N.UNPACK_ROW_LENGTH,Wt.width),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Wt.height),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),_e.pixelStorei(N.UNPACK_SKIP_ROWS,et),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,ot);let xo=M.isDataArrayTexture||M.isData3DTexture,Rt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let en=A.get(M),jr=A.get(U),Nt=A.get(en.__renderTarget),Zr=A.get(jr.__renderTarget);_e.bindFramebuffer(N.READ_FRAMEBUFFER,Nt.__webglFramebuffer),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let vo=0;vo<Fe;vo++)xo&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(M).__webglTexture,V,ot+vo),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(U).__webglTexture,ye,Qt+vo)),N.blitFramebuffer(Ue,et,Me,we,ke,Et,Me,we,N.DEPTH_BUFFER_BIT,N.NEAREST);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||A.has(M)){let en=A.get(M),jr=A.get(U);_e.bindFramebuffer(N.READ_FRAMEBUFFER,Jt),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ti);for(let Nt=0;Nt<Fe;Nt++)xo?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,en.__webglTexture,V,ot+Nt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,en.__webglTexture,V),Rt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jr.__webglTexture,ye,Qt+Nt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jr.__webglTexture,ye),V!==0?N.blitFramebuffer(Ue,et,Me,we,ke,Et,Me,we,N.COLOR_BUFFER_BIT,N.NEAREST):Rt?N.copyTexSubImage3D(Pe,ye,ke,Et,Qt+Nt,Ue,et,Me,we):N.copyTexSubImage2D(Pe,ye,ke,Et,Ue,et,Me,we);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Rt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Pe,ye,ke,Et,Qt,Me,we,Fe,Pt,Pn,Wt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Pe,ye,ke,Et,Qt,Me,we,Fe,Pt,Wt.data):N.texSubImage3D(Pe,ye,ke,Et,Qt,Me,we,Fe,Pt,Pn,Wt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,ke,Et,Me,we,Pt,Pn,Wt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,ke,Et,Wt.width,Wt.height,Pt,Wt.data):N.texSubImage2D(N.TEXTURE_2D,ye,ke,Et,Me,we,Pt,Pn,Wt);_e.pixelStorei(N.UNPACK_ROW_LENGTH,ai),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,Ei),_e.pixelStorei(N.UNPACK_SKIP_ROWS,Zi),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,Kr),ye===0&&U.generateMipmaps&&N.generateMipmap(Pe),_e.unbindTexture()},this.initRenderTarget=function(M){A.get(M).__webglFramebuffer===void 0&&v.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){G=0,W=0,L=null,_e.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var uw=["rendererContainer"],dw=["cursorMarker"],Iu=class r{constructor(e,t){this.ngZone=e;this.platformId=t}rendererContainer;cursorMarker;scene;camera;renderer;logoGroup=new Gr;logoParticles;auraParticles;cursorOrb;cursorGlow;basePositions;animationId=0;hasPointer=!1;cursorPlane=new ki(new H(0,0,1),-.28);raycaster=new Ec;cursorTarget=new H;cursorLocal=new H;pointer=new xt;targetPointer=new xt;resizeObserver;themeObserver;lastPointerClientX=0;lastPointerClientY=0;resizeHandler=()=>this.onWindowResize();pointerHandler=e=>this.onPointerMove(e);ngOnInit(){In(this.platformId)&&(this.initThree(),this.createDevoraLogo(),this.createCursorOrb(),this.observeTheme(),this.applySceneTheme(),this.positionLogo(),this.animate(),window.addEventListener("resize",this.resizeHandler),window.addEventListener("pointermove",this.pointerHandler,{passive:!0}),this.resizeObserver=new ResizeObserver(this.resizeHandler),this.resizeObserver.observe(this.rendererContainer.nativeElement))}ngOnDestroy(){In(this.platformId)&&(cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("pointermove",this.pointerHandler),this.resizeObserver?.disconnect(),this.themeObserver?.disconnect(),this.disposeObject(this.logoParticles),this.disposeObject(this.auraParticles),this.disposeObject(this.cursorOrb),this.disposeObject(this.cursorGlow),this.renderer?.dispose())}initThree(){let{width:e,height:t}=this.getCanvasSize();this.scene=new pc,this.camera=new Gn(52,e/t,.1,1e3),this.camera.position.z=6.2,this.renderer=new Au({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.rendererContainer.nativeElement.appendChild(this.renderer.domElement),this.scene.add(this.logoGroup)}createDevoraLogo(){let e=this.generateLogoPoints(),t=new Float32Array(e.length*3),n=new Float32Array(e.length*3),i=new dt("#00e5ff"),s=new dt("#4c8dff"),o=new dt("#ff5f8f");e.forEach((d,g)=>{let _=g*3;t[_]=d.x,t[_+1]=d.y,t[_+2]=d.z;let p=i.clone().lerp(d.hot?o:s,d.mix);n[_]=p.r,n[_+1]=p.g,n[_+2]=p.b}),this.basePositions=t.slice();let a=new Cn;a.setAttribute("position",new ln(t,3)),a.setAttribute("color",new ln(n,3)),this.logoParticles=new uo(a,new Ts({size:.042,vertexColors:!0,transparent:!0,opacity:.8,blending:Si,depthWrite:!1}));let c=1400,l=new Float32Array(c*3),h=new Float32Array(c*3);for(let d=0;d<c;d++){let g=d*3,_=1.2+Math.random()*2.5,p=Math.random()*Math.PI*2;l[g]=Math.cos(p)*_+(Math.random()-.5)*.5,l[g+1]=Math.sin(p)*_*.6+(Math.random()-.5)*.5,l[g+2]=(Math.random()-.5)*2;let m=i.clone().lerp(Math.random()>.6?o:s,Math.random());h[g]=m.r,h[g+1]=m.g,h[g+2]=m.b}this.basePositions=t.slice(),this.auraBasePositions=l.slice();let f=new Cn;f.setAttribute("position",new ln(t,3)),f.setAttribute("color",new ln(n,3)),this.logoParticles=new uo(f,new Ts({size:.042,vertexColors:!0,transparent:!0,opacity:0,blending:Si,depthWrite:!1}));let u=new Cn;u.setAttribute("position",new ln(l,3)),u.setAttribute("color",new ln(h,3)),this.auraParticles=new uo(u,new Ts({size:.02,vertexColors:!0,transparent:!0,opacity:.38,blending:Si,depthWrite:!1})),this.logoGroup.add(this.auraParticles)}auraBasePositions;observeTheme(){this.themeObserver=new MutationObserver(()=>{this.applySceneTheme(),this.positionLogo()}),this.themeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","dir"]})}applySceneTheme(){let e=document.documentElement.dataset.theme==="light",t=this.getThemeColor("--three-primary",e?"#087c68":"#12c9a3"),n=this.getThemeColor("--three-secondary",e?"#245f77":"#2f7f9b"),i=this.getThemeColor("--three-tertiary",e?"#9c762f":"#d7b56d"),s=this.getThemeColor("--three-cursor",i),o=this.getThemeColor("--three-glow",t),a=this.logoParticles.material,c=this.auraParticles.material,l=this.cursorOrb.material,h=this.cursorGlow.material;a.size=e?.038:.042,a.opacity=e?.7:.86,a.blending=Si,a.needsUpdate=!0,c.size=e?.03:.02,c.opacity=e?.46:.34,c.blending=e?qi:Si,c.needsUpdate=!0,l.color.set(s),l.blending=e?qi:Si,l.needsUpdate=!0,h.color.set(o),h.opacity=e?.14:.11,h.blending=e?qi:Si,h.needsUpdate=!0,this.recolorParticles([t,n,i],[n,t,i])}recolorParticles(e,t){this.writeParticleColors(this.logoParticles,e),this.writeParticleColors(this.auraParticles,t)}getThemeColor(e,t){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()||t}writeParticleColors(e,t){let n=e.geometry.getAttribute("color"),i=n.array,s=new dt;for(let o=0;o<i.length;o+=3)s.set(t[o/3%t.length]),i[o]=s.r,i[o+1]=s.g,i[o+2]=s.b;n.needsUpdate=!0}createCursorOrb(){let e=new ws({color:"#8b5cf6",transparent:!0,opacity:.92,blending:Si,depthWrite:!1}),t=new ws({color:"#00e5ff",transparent:!0,opacity:.1,blending:Si,depthWrite:!1});this.cursorOrb=new Qn(new Mc(.062,.078,48),e),this.cursorGlow=new Qn(new yc(.22,48),t),this.cursorOrb.position.set(0,0,.28),this.cursorGlow.position.copy(this.cursorOrb.position),this.cursorOrb.visible=!1,this.cursorGlow.visible=!1,this.scene.add(this.cursorGlow,this.cursorOrb)}generateLogoPoints(){let e=[],t=(i,s,o=!1)=>{e.push({x:i+(Math.random()-.5)*.028,y:s+(Math.random()-.5)*.028,z:(Math.random()-.5)*.28,mix:Math.random(),hot:o})},n=(i,s,o=!1)=>{t((i-145)/72,(50-s)/72,o)};return this.sampleSvgLine(15,35,30,50,60,n,!0),this.sampleSvgLine(30,50,15,65,60,n,!0),this.sampleSvgLine(40,75,60,75,45,n),this.addDotMatrixText("DEVORA",75,31,n),e}sampleSvgLine(e,t,n,i,s,o,a=!1){let c=Math.hypot(n-e,i-t),l=c?-(i-t)/c:0,h=c?(n-e)/c:0;[-2.2,0,2.2].forEach(u=>{for(let d=0;d<s;d++){let g=s===1?0:d/(s-1),_=po.lerp(e,n,g)+l*u,p=po.lerp(t,i,g)+h*u;o(_,p,a)}})}addDotMatrixText(e,t,n,i){let s={D:["11110","10001","10001","10001","10001","10001","11110"],E:["11111","10000","10000","11110","10000","10000","11111"],V:["10001","10001","10001","10001","01010","01010","00100"],O:["01110","10001","10001","10001","10001","10001","01110"],R:["11110","10001","10001","11110","10100","10010","10001"],A:["01110","10001","10001","11111","10001","10001","10001"]},o=5,a=5,c=t;e.split("").forEach(l=>{let h=s[l];if(!h){c+=o*3;return}h.forEach((f,u)=>{f.split("").forEach((d,g)=>{if(d!=="1")return;let _=c+g*o+o/2,p=n+u*o+o/2;this.sampleSvgDot(_,p,o*.34,i)})}),c+=o*5+a})}sampleSvgDot(e,t,n,i){i(e,t);for(let s=0;s<6;s++){let o=s/6*Math.PI*2;i(e+Math.cos(o)*n,t+Math.sin(o)*n)}}sampleLine(e,t,n,i,s,o){for(let a=0;a<s;a++){let c=s===1?0:a/(s-1);o(po.lerp(e,n,c),po.lerp(t,i,c))}}sampleArc(e,t,n,i,s,o,a,c){for(let l=0;l<a;l++){let h=a===1?0:l/(a-1),f=po.lerp(s,o,h);c(e+Math.cos(f)*n,t+Math.sin(f)*i)}}sampleCircle(e,t,n,i,s,o=!1){for(let a=0;a<i;a++){let c=a/i*Math.PI*2;s(e+Math.cos(c)*n,t+Math.sin(c)*n,o)}}animate(){this.ngZone.runOutsideAngular(()=>{let e=performance.now(),t=()=>{this.animationId=requestAnimationFrame(t);let n=(performance.now()-e)*.001;this.pointer.lerp(this.targetPointer,.06),this.logoGroup.rotation.y=this.pointer.x*.11+Math.sin(n*.42)*.035,this.logoGroup.rotation.x=-this.pointer.y*.07+Math.cos(n*.35)*.02,this.logoGroup.position.x+=(this.getLogoX()+this.pointer.x*.1-this.logoGroup.position.x)*.05,this.logoGroup.position.y+=(this.getLogoY()+this.pointer.y*.06-this.logoGroup.position.y)*.05,this.cursorOrb.position.copy(this.cursorTarget),this.cursorGlow.position.copy(this.cursorOrb.position),this.logoGroup.updateMatrixWorld(),this.cursorLocal.copy(this.cursorOrb.position),this.logoGroup.worldToLocal(this.cursorLocal),this.animateLogoParticles(n),this.auraParticles.rotation.z+=9e-4,this.auraParticles.rotation.y=this.pointer.x*.08,this.cursorOrb.scale.setScalar(1+Math.sin(n*3.8)*.08),this.cursorGlow.scale.setScalar(1+Math.sin(n*2.4)*.12),this.renderer.render(this.scene,this.camera)};t()})}animateLogoParticles(e){let t=this.hasPointer,n=window.innerWidth<992?1.05:.74,i=this.logoParticles.geometry.getAttribute("position"),s=i.array;for(let c=0;c<s.length;c+=3){let l=c*.013,h=this.basePositions[c],f=this.basePositions[c+1],u=this.basePositions[c+2],d=0,g=0,_=0;if(t){let p=h-this.cursorLocal.x,m=f-this.cursorLocal.y,y=Math.hypot(p,m);if(y<n){let S=(1-y/n)**2.1,b=Math.atan2(m,p);d=Math.cos(b)*S*.18,g=Math.sin(b)*S*.18,_=S*.08}}s[c]=h+d+Math.sin(e*1.6+l)*.015,s[c+1]=f+g+Math.cos(e*1.35+l)*.015,s[c+2]=u+_+Math.sin(e*1.1+l)*.045}i.needsUpdate=!0;let o=this.auraParticles.geometry.getAttribute("position"),a=o.array;for(let c=0;c<a.length;c+=3){let l=c*.007,h=this.auraBasePositions[c],f=this.auraBasePositions[c+1],u=this.auraBasePositions[c+2],d=0,g=0,_=0;if(t){let p=h+this.logoGroup.position.x-this.cursorTarget.x,m=f+this.logoGroup.position.y-this.cursorTarget.y,y=Math.hypot(p,m);if(y<n*1.55){let S=(1-y/(n*1.55))**2.35,b=Math.atan2(m,p),C=S*.08,T=S*.05;d=-Math.cos(b)*T+-Math.sin(b)*C,g=-Math.sin(b)*T+Math.cos(b)*C,_=S*.1}}a[c]=h+d+Math.sin(e*.64+l)*.018,a[c+1]=f+g+Math.cos(e*.52+l)*.018,a[c+2]=u+_}o.needsUpdate=!0}onPointerMove(e){this.lastPointerClientX=e.clientX,this.lastPointerClientY=e.clientY;let t=this.updateCursorFromClientPosition(e.clientX,e.clientY);this.targetPointer.copy(t),this.raycaster.setFromCamera(t,this.camera),this.raycaster.ray.intersectPlane(this.cursorPlane,this.cursorTarget),this.cursorOrb.visible||(this.cursorOrb.position.copy(this.cursorTarget),this.cursorGlow.position.copy(this.cursorTarget))}onWindowResize(){let{width:e,height:t}=this.getCanvasSize();if(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,t),this.positionLogo(),this.hasPointer){let n=this.updateCursorFromClientPosition(this.lastPointerClientX,this.lastPointerClientY);this.targetPointer.copy(n),this.raycaster.setFromCamera(n,this.camera),this.raycaster.ray.intersectPlane(this.cursorPlane,this.cursorTarget)}}isRtl(){return typeof document>"u"?!1:document.documentElement.dir==="rtl"||document.documentElement.getAttribute("dir")==="rtl"}positionLogo(){this.logoGroup.position.set(this.getLogoX(),this.getLogoY(),0),this.logoGroup.scale.setScalar(window.innerWidth<992?.72:1.08)}getLogoX(){let e=this.isRtl();return window.innerWidth<992?e?-.2:.2:e?-2.2:2.2}getLogoY(){return window.innerWidth<992?-1.05:0}getCanvasSize(){let e=this.rendererContainer.nativeElement;return{width:Math.max(e.clientWidth||window.innerWidth,1),height:Math.max(e.clientHeight||window.innerHeight,1)}}updateCursorFromClientPosition(e,t){let n=this.rendererContainer.nativeElement.getBoundingClientRect(),i=n.width||window.innerWidth,s=n.height||window.innerHeight,o=e-n.left,a=t-n.top;return this.cursorMarker.nativeElement.style.setProperty("--cursor-x",`${o}px`),this.cursorMarker.nativeElement.style.setProperty("--cursor-y",`${a}px`),this.hasPointer=o>=0&&o<=i&&a>=0&&a<=s,this.cursorMarker.nativeElement.classList.toggle("visible",this.hasPointer),new xt(o/i*2-1,-(a/s)*2+1)}disposeObject(e){let t=e;t?.geometry?.dispose();let n=t?.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n?.dispose()}static \u0275fac=function(t){return new(t||r)(tn(Gc),tn(Qi))};static \u0275cmp=Ai({type:r,selectors:[["app-three-scene"]],viewQuery:function(t,n){if(t&1&&yo(uw,7)(dw,7),t&2){let i;nr(i=ir())&&(n.rendererContainer=i.first),nr(i=ir())&&(n.cursorMarker=i.first)}},decls:4,vars:0,consts:[["rendererContainer",""],["cursorMarker",""],["aria-hidden","true",1,"three-container"],[1,"cursor-marker"]],template:function(t,n){t&1&&(yt(0,"div",2,0),Tr(2,"span",3,1),It())},styles:[".three-container[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;overflow:hidden;pointer-events:none;background:transparent}.three-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}.cursor-marker[_ngcontent-%COMP%]{display:none;position:absolute;left:var(--cursor-x, 50%);top:var(--cursor-y, 50%);z-index:2;width:20px;height:20px;border:3px solid var(--three-cursor, #d7b56d);border-radius:50%;background:color-mix(in srgb,var(--three-glow, #12c9a3) 14%,transparent);box-shadow:0 0 0 18px color-mix(in srgb,var(--three-glow, #12c9a3) 9%,transparent),0 0 30px color-mix(in srgb,var(--three-glow, #12c9a3) 22%,transparent);opacity:0;pointer-events:none;transform:translate(-50%,-50%)}.cursor-marker.visible[_ngcontent-%COMP%]{opacity:1}@media(max-width:767.98px){.three-container[_ngcontent-%COMP%]{opacity:.86}}@media(max-width:575.98px){.three-container[_ngcontent-%COMP%]{opacity:.72}}"]})};var fw=(r,e)=>e.valueKey;function pw(r,e){if(r&1&&(pe(0,"div",16)(1,"strong"),Te(2),me(),pe(3,"span"),Te(4),me()()),r&2){let t=e.$implicit,n=gt();Q(),Ct("data-edit-key",t.valueKey),Q(),Re(n.i18n.t(t.valueKey)),Q(),Ct("data-edit-key",t.labelKey),Q(),Re(n.i18n.t(t.labelKey))}}var m_=class r{i18n=Fs(Ni);isPageTourActive=xa(!1);metrics=[{valueKey:"hero.metric1.value",labelKey:"hero.metric1.label"},{valueKey:"hero.metric2.value",labelKey:"hero.metric2.label"},{valueKey:"hero.metric3.value",labelKey:"hero.metric3.label"}];gsapService=Fs(Fi);elementRef=Fs(Ji);ngZone=Fs(Gc);document=Fs(Vc);platformId=Fs(Qi);animationContext;activeTourScroller;activeTourSnapType="";activeTourScrollBehavior="";tourFrame=0;tourPauseTimer=0;ngAfterViewInit(){this.animationContext=this.gsapService.context(this.elementRef.nativeElement,()=>{let e=this.gsapService.gsap,t=e.utils.selector(this.elementRef.nativeElement);e.timeline({delay:.1}).fromTo(t(".hero-kicker"),{clipPath:"inset(0 100% 0 0)",opacity:0},{clipPath:"inset(0 0% 0 0)",opacity:1,duration:.8,ease:"power4.out"}).from(t(".hero-title span"),{opacity:0,y:110,duration:1,stagger:.15,ease:"power4.out"},"-=0.4").from(t(".hero-subtitle"),{opacity:0,y:30,duration:.8,ease:"power3.out"},"-=0.6").from(t(".hero-actions a"),{opacity:0,y:20,duration:.6,stagger:.1,ease:"back.out(1.7)"},"-=0.4").from(t(".hero-metric, .hero-proof"),{opacity:0,y:30,duration:.7,stagger:.1,ease:"power3.out"},"-=0.2")})}playPageScrollTour(){if(!this.isBrowser()||this.isPageTourActive())return;let e=this.getScroller(),t=this.getMaxScrollTop(e);if(t<=0)return;let n=this.getHeroTop(e);this.isPageTourActive.set(!0),this.activeTourScroller=e,this.activeTourSnapType=e.style.scrollSnapType,this.activeTourScrollBehavior=e.style.scrollBehavior,e.style.scrollSnapType="none",e.style.scrollBehavior="auto",this.ngZone.runOutsideAngular(()=>{let i=this.getTourDuration(Math.abs(t-e.scrollTop),"down"),s=this.getTourDuration(Math.abs(t-n),"up");this.animateScroller(e,t,i,()=>{this.tourPauseTimer=window.setTimeout(()=>{this.animateScroller(e,n,s,()=>{this.restoreScrollSnap(),this.ngZone.run(()=>this.isPageTourActive.set(!1))})},80)})})}ngOnDestroy(){this.isBrowser()&&this.tourFrame&&window.cancelAnimationFrame(this.tourFrame),this.isBrowser()&&this.tourPauseTimer&&window.clearTimeout(this.tourPauseTimer),this.restoreScrollSnap(),this.animationContext?.revert()}animateScroller(e,t,n,i){let s=e.scrollTop,o=t-s,a=performance.now(),c=l=>{let h=Math.min((l-a)/n,1);if(e.scrollTop=s+o*this.easeOutCubic(h),h<1){this.tourFrame=window.requestAnimationFrame(c);return}this.tourFrame=0,e.scrollTop=t,i()};c(a+16)}easeOutCubic(e){return 1-Math.pow(1-e,3)}getScroller(){return this.document.querySelector(".snap-container")??this.document.documentElement}getMaxScrollTop(e){return Math.max(e.scrollHeight-e.clientHeight,0)}getHeroTop(e){return Math.max(this.elementRef.nativeElement.offsetTop-e.offsetTop,0)}getTourDuration(e,t){let n=t==="down"?.32:.24,i=t==="down"?720:560,s=t==="down"?1900:1450;return Math.min(Math.max(e*n,i),s)}restoreScrollSnap(){this.activeTourScroller&&(this.activeTourScroller.style.scrollSnapType=this.activeTourSnapType,this.activeTourScroller.style.scrollBehavior=this.activeTourScrollBehavior,this.activeTourScroller=void 0,this.activeTourSnapType="",this.activeTourScrollBehavior="")}isBrowser(){return In(this.platformId)}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=Ai({type:r,selectors:[["app-hero"]],decls:56,vars:11,consts:[["id","top",1,"hero-section"],[1,"hero-scrim"],[1,"container","hero-grid"],[1,"hero-content"],["data-edit-key","hero.kicker",1,"hero-kicker","section-kicker"],[1,"hero-title"],["data-edit-key","hero.title.line1"],["data-edit-key","hero.title.line2",1,"gradient-text"],["data-edit-key","hero.title.line3"],["data-edit-key","hero.subtitle",1,"hero-subtitle"],[1,"hero-actions","m-3"],["href","#work","data-edit-key","hero.primaryCta",1,"btn-primary-neon"],["href","#contact","data-edit-key","hero.secondaryCta",1,"btn-outline-panel"],[1,"hero-proof","mt-4"],["data-edit-key","hero.proof"],[1,"hero-metrics"],[1,"hero-metric"],["aria-hidden","true",1,"hero-logo-space"],["viewBox","0 0 900 200","xmlns","http://www.w3.org/2000/svg","width","100%","height","100%",1,"reveal-svg"],["id","neon-glow","x","-50%","y","-50%","width","200%","height","200%"],["stdDeviation","4","result","blur"],["in","SourceGraphic","in2","blur","operator","over"],["id","motion-blur","x","-50%","y","-50%","width","200%","height","200%"],["stdDeviation","10 0"],["id","sweep-gradient","x1","0","x2","1","y1","0","y2","0"],["offset","0%","stop-color","rgba(255,255,255,0)"],["offset","50%","stop-color","rgba(255,255,255,0.8)"],["offset","100%","stop-color","rgba(255,255,255,0)"],["stroke-linecap","round","stroke-linejoin","round","fill","none","stroke-width","12"],["d","M 40 65 L 75 100 L 40 135","stroke","#00f0ff",1,"logo-arrow"],["d","M 100 150 L 150 150","stroke","#00f0ff",1,"logo-underscore"],["stroke","#ffffff",1,"logo-letters"],["d","M 190 50 L 230 50 A 50 50 0 0 1 230 150 L 190 150",1,"letter","letter-d"],["d","M 320 50 L 380 50 M 320 100 L 370 100 M 320 150 L 380 150",1,"letter","letter-e"],["d","M 420 50 L 460 150 L 500 50",1,"letter","letter-v"],["cx","585","cy","100","r","45",1,"letter","letter-o"],["d","M 670 50 L 710 50 A 25 25 0 0 1 710 100 L 670 100 L 720 150",1,"letter","letter-r"],["d","M 775 150 L 815 50 L 855 150",1,"letter","letter-a"],["x","-200","y","40","width","150","height","130","fill","url(#sweep-gradient)",1,"light-sweep"],["type","button","aria-label","Preview the full page and return to hero",1,"scroll-hint",3,"click","disabled"],[1,"scroll-text"],["aria-hidden","true",1,"scroll-arrow"],["width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M12 5v14M19 12l-7 7-7-7"]],template:function(t,n){t&1&&(pe(0,"section",0),Xt(1,"app-three-scene")(2,"div",1),pe(3,"div",2)(4,"div",3)(5,"span",4),Te(6),me(),pe(7,"h1",5)(8,"span",6),Te(9),me(),pe(10,"span",7),Te(11),me(),pe(12,"span",8),Te(13),me()(),pe(14,"p",9),Te(15),me(),pe(16,"div",10)(17,"a",11),Te(18),me(),pe(19,"a",12),Te(20),me()(),pe(21,"div",13)(22,"span",14),Te(23),me()(),pe(24,"div",15),er(25,pw,5,4,"div",16,fw),me()(),pe(27,"div",17),Ci(),pe(28,"svg",18)(29,"defs")(30,"filter",19),Xt(31,"feGaussianBlur",20)(32,"feComposite",21),me(),pe(33,"filter",22),Xt(34,"feGaussianBlur",23),me(),pe(35,"linearGradient",24),Xt(36,"stop",25)(37,"stop",26)(38,"stop",27),me()(),pe(39,"g",28),Xt(40,"path",29)(41,"path",30),pe(42,"g",31),Xt(43,"path",32)(44,"path",33)(45,"path",34)(46,"circle",35)(47,"path",36)(48,"path",37),me()(),Xt(49,"rect",38),me()()(),$r(),pe(50,"button",39),ci("click",function(){return n.playPageScrollTour()}),pe(51,"span",40),Te(52,"Scroll"),me(),pe(53,"span",41),Ci(),pe(54,"svg",42),Xt(55,"path",43),me()()()()),t&2&&(Q(6),Re(n.i18n.t("hero.kicker")),Q(3),Re(n.i18n.t("hero.title.line1")),Q(2),Re(n.i18n.t("hero.title.line2")),Q(2),Re(n.i18n.t("hero.title.line3")),Q(2),Ns(" ",n.i18n.t("hero.subtitle")," "),Q(3),Re(n.i18n.t("hero.primaryCta")),Q(2),Re(n.i18n.t("hero.secondaryCta")),Q(3),Re(n.i18n.t("hero.proof")),Q(2),tr(n.metrics),Q(25),Qr("is-active",n.isPageTourActive()),Mt("disabled",n.isPageTourActive()))},dependencies:[Iu],styles:['.hero-section[_ngcontent-%COMP%]{position:relative;min-height:100svh;overflow:hidden;background:transparent;isolation:isolate}.hero-scrim[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,var(--hero-scrim),rgba(6,9,16,.44) 48%,transparent 76%),linear-gradient(180deg,transparent 68%,var(--bg-page));pointer-events:none}.hero-grid[_ngcontent-%COMP%]{position:relative;z-index:2;display:grid;min-height:100svh;grid-template-columns:minmax(390px,.92fr) minmax(430px,1.08fr);gap:clamp(32px,4vw,78px);align-items:center;padding-top:92px;padding-bottom:clamp(96px,11vh,138px)}.hero-content[_ngcontent-%COMP%]{max-width:720px;min-width:0}.hero-title[_ngcontent-%COMP%]{display:grid;gap:.08em;margin:0;font-size:clamp(3rem,4.7vw,4.7rem);line-height:1.08;text-transform:uppercase}.hero-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;overflow:hidden;padding-block:.025em}.hero-subtitle[_ngcontent-%COMP%]{max-width:620px;margin:clamp(20px,2.4vw,30px) 0 0;color:var(--text-secondary);font-size:clamp(.95rem,1vw,1.04rem);line-height:1.8}.hero-actions[_ngcontent-%COMP%], .hero-proof[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(22px,2.6vw,34px)}.hero-proof[_ngcontent-%COMP%]{align-items:center;gap:10px;margin-top:20px;color:var(--text-muted);font-size:.82rem;font-weight:800;line-height:1.55}.hero-proof[_ngcontent-%COMP%]:before{width:8px;height:8px;border-radius:50%;background:var(--accent-green);box-shadow:0 0 22px #35d39db3;content:""}.hero-metrics[_ngcontent-%COMP%]{display:grid;max-width:620px;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:clamp(24px,3vw,36px)}.hero-metric[_ngcontent-%COMP%]{min-height:88px;padding:16px;border:1px solid var(--border-soft);border-radius:8px;background:linear-gradient(135deg,rgba(0,229,255,.07),transparent 54%),var(--surface);transition:border-color .3s ease,box-shadow .3s ease}.hero-metric[_ngcontent-%COMP%]:hover{border-color:#00e5ff66;box-shadow:0 8px 24px #00e5ff26}.hero-metric[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;color:var(--text-primary);font-family:var(--font-heading);font-size:1.42rem;line-height:1}.hero-metric[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-top:9px;color:var(--text-muted);font-size:.76rem;font-weight:800;line-height:1.4}.hero-logo-space[_ngcontent-%COMP%]{display:grid;width:100%;min-height:clamp(220px,24vw,380px);align-items:center;min-width:0}.reveal-svg[_ngcontent-%COMP%]{overflow:visible;filter:drop-shadow(0 0 20px rgba(0,240,255,.5))}.logo-arrow[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:center;animation:_ngcontent-%COMP%_arrow-write 4s cubic-bezier(.45,0,.55,1) forwards}.logo-underscore[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:left center;opacity:0;animation:_ngcontent-%COMP%_cursor-typing .8s infinite ease-in-out 3.5s}.letter[_ngcontent-%COMP%]{opacity:0;animation:_ngcontent-%COMP%_letter-reveal .3s ease-out forwards}.letter-d[_ngcontent-%COMP%]{animation-delay:.6s}.letter-e[_ngcontent-%COMP%]{animation-delay:1s}.letter-v[_ngcontent-%COMP%]{animation-delay:1.4s}.letter-o[_ngcontent-%COMP%]{animation-delay:1.8s}.letter-r[_ngcontent-%COMP%]{animation-delay:2.2s}.letter-a[_ngcontent-%COMP%]{animation-delay:2.6s}@keyframes _ngcontent-%COMP%_arrow-write{0%{transform:translate(0);opacity:0}5%{opacity:1}65%{transform:translate(810px)}85%,to{transform:translate(0);opacity:1}}@keyframes _ngcontent-%COMP%_letter-reveal{0%{opacity:0;filter:blur(10px);transform:translateY(10px) scale(.9)}to{opacity:1;filter:blur(0);transform:translateY(0) scale(1)}}@keyframes _ngcontent-%COMP%_cursor-typing{0%,to{transform:translate(0) scaleX(1);opacity:1;filter:drop-shadow(0 0 15px rgba(0,240,255,.9))}50%{transform:translate(8px) scaleX(.7);opacity:.5;filter:drop-shadow(0 0 5px rgba(0,240,255,.4))}}.light-sweep[_ngcontent-%COMP%]{opacity:0;pointer-events:none;animation:_ngcontent-%COMP%_sweep-flash 1s ease-in-out 3.8s forwards}@keyframes _ngcontent-%COMP%_sweep-flash{0%{transform:translate(-200px);opacity:0}50%{opacity:.5}to{transform:translate(1000px);opacity:0}}.scroll-hint[_ngcontent-%COMP%]{position:absolute;bottom:clamp(22px,3vh,34px);left:50%;z-index:10;display:flex;flex-direction:column;align-items:center;gap:8px;padding:8px 12px;border:0;background:transparent;color:inherit;cursor:pointer;transform:translate(-50%);transition:opacity .25s ease,transform .25s ease}.scroll-hint[_ngcontent-%COMP%]:hover, .scroll-hint[_ngcontent-%COMP%]:focus-visible{opacity:1;transform:translate(-50%) translateY(-2px)}.scroll-hint[_ngcontent-%COMP%]:focus-visible{outline:2px solid color-mix(in srgb,var(--accent-cyan) 74%,transparent);outline-offset:4px}.scroll-hint.is-active[_ngcontent-%COMP%]{cursor:progress;opacity:.68}.scroll-hint[_ngcontent-%COMP%]:disabled{pointer-events:none}.scroll-text[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px}.scroll-arrow[_ngcontent-%COMP%]{color:var(--accent-cyan);animation:_ngcontent-%COMP%_bounce-arrow 2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_bounce-arrow{0%,to{transform:translateY(0);opacity:.5}50%{transform:translateY(8px);opacity:1}}@media(max-width:1199.98px){.hero-title[_ngcontent-%COMP%]{font-size:clamp(2.65rem,5.8vw,3.45rem)}}@media(max-width:991.98px){.hero-grid[_ngcontent-%COMP%]{min-height:auto;grid-template-columns:1fr;gap:28px;padding-top:112px;padding-bottom:116px}.hero-content[_ngcontent-%COMP%]{order:2}.hero-logo-space[_ngcontent-%COMP%]{order:1}.hero-title[_ngcontent-%COMP%]{font-size:clamp(2.2rem,7.6vw,2.9rem);line-height:1.12}.hero-logo-space[_ngcontent-%COMP%]{min-height:clamp(170px,32vw,300px);max-width:720px;width:100%;margin-inline:auto}}@media(max-width:767.98px){.hero-grid[_ngcontent-%COMP%]{gap:22px;padding-top:102px;padding-bottom:110px}.hero-content[_ngcontent-%COMP%]{order:1}.hero-logo-space[_ngcontent-%COMP%]{order:2;min-height:clamp(118px,34vw,190px)}.hero-subtitle[_ngcontent-%COMP%]{margin-top:20px;font-size:.92rem;line-height:1.76}.hero-actions[_ngcontent-%COMP%], .hero-proof[_ngcontent-%COMP%]{margin-top:20px}}@media(max-width:575.98px){.hero-grid[_ngcontent-%COMP%]{gap:20px;padding-top:88px;padding-bottom:108px}.hero-title[_ngcontent-%COMP%]{font-size:clamp(1.74rem,8.8vw,2.12rem);line-height:1.16}.hero-actions[_ngcontent-%COMP%]{display:grid;gap:10px}.hero-proof[_ngcontent-%COMP%]{align-items:flex-start;flex-wrap:nowrap;font-size:.76rem}.hero-metrics[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:10px}.hero-metric[_ngcontent-%COMP%]{min-height:66px;padding:12px}.hero-metric[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.22rem}.hero-logo-space[_ngcontent-%COMP%]{min-height:112px}}@media(max-width:374.98px){.hero-grid[_ngcontent-%COMP%]{padding-top:82px}.hero-title[_ngcontent-%COMP%]{font-size:1.58rem}.hero-subtitle[_ngcontent-%COMP%]{font-size:.88rem}}[dir="rtl"][_nghost-%COMP%]   .hero-scrim[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .hero-scrim[_ngcontent-%COMP%]{background:linear-gradient(270deg,var(--hero-scrim),rgba(6,9,16,.44) 48%,transparent 76%),linear-gradient(180deg,transparent 68%,var(--bg-page))!important}[dir="rtl"][_nghost-%COMP%]   .hero-metric[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .hero-metric[_ngcontent-%COMP%]{background:linear-gradient(225deg,rgba(0,229,255,.07),transparent 54%),var(--surface)!important}[dir="rtl"][_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%]{line-height:1.2!important}[dir="rtl"][_nghost-%COMP%]   .hero-subtitle[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .hero-subtitle[_ngcontent-%COMP%]{line-height:1.8!important}']})};var mw=["carousel"],gw=["progressBar"],_w=["progressDot"],xw=["serviceCard"],g_=(r,e)=>e.labelKey,vw=(r,e)=>e.index;function yw(r,e){if(r&1&&(yt(0,"div",18)(1,"small"),Te(2),It(),yt(3,"b"),Te(4),It()()),r&2){let t=e.$implicit,n=gt();Q(),Ct("data-edit-key",t.labelKey),Q(),Re(n.i18n.t(t.labelKey)),Q(),Ct("data-edit-key",t.valueKey),Q(),Re(n.i18n.t(t.valueKey))}}function bw(r,e){if(r&1&&(yt(0,"article",21,3),Tr(2,"div",38),yt(3,"span",39),Te(4),It(),yt(5,"div",40)(6,"span",41),Te(7),It()(),yt(8,"div",42)(9,"h3"),Te(10),It(),yt(11,"p"),Te(12),It()(),yt(13,"div",43),Ci(),yt(14,"svg",44),Tr(15,"path",31),It(),$r(),yt(16,"strong",45),Te(17),It()()()),r&2){let t=e.$implicit,n=gt();Q(4),Re(t.index),Q(3),Re(t.index),Q(2),Ct("data-edit-key",t.titleKey),Q(),Re(n.i18n.t(t.titleKey)),Q(),Ct("data-edit-key",t.bodyKey),Q(),Re(n.i18n.t(t.bodyKey)),Q(4),Ct("data-edit-key",t.outcomeKey),Q(),Re(n.i18n.t(t.outcomeKey))}}function Mw(r,e){if(r&1&&(yt(0,"div",37)(1,"span"),Te(2),It(),yt(3,"strong"),Te(4),It()()),r&2){let t=e.$implicit,n=gt();Q(),Ct("data-edit-key",t.labelKey),Q(),Re(n.i18n.t(t.labelKey)),Q(),Ct("data-edit-key",t.titleKey),Q(),Re(n.i18n.t(t.titleKey))}}var __=class r{constructor(e,t,n,i){this.gsapService=e;this.elementRef=t;this.i18n=n;this.platformId=i;xp(()=>{this.i18n.language(),In(this.platformId)&&window.requestAnimationFrame(()=>{this.resetCarouselToStart(),this.updateProgressBar()})})}cards;carouselRef;progressBarRef;progressDotRef;services=[{index:"01",titleKey:"services.launch.title",bodyKey:"services.launch.body",outcomeKey:"services.launch.outcome"},{index:"02",titleKey:"services.mvp.title",bodyKey:"services.mvp.body",outcomeKey:"services.mvp.outcome"},{index:"03",titleKey:"services.modernize.title",bodyKey:"services.modernize.body",outcomeKey:"services.modernize.outcome"},{index:"04",titleKey:"services.internal.title",bodyKey:"services.internal.body",outcomeKey:"services.internal.outcome"},{index:"05",titleKey:"services.conversion.title",bodyKey:"services.conversion.body",outcomeKey:"services.conversion.outcome"},{index:"06",titleKey:"services.scale.title",bodyKey:"services.scale.body",outcomeKey:"services.scale.outcome"},{index:"07",titleKey:"services.brand.title",bodyKey:"services.brand.body",outcomeKey:"services.brand.outcome"},{index:"08",titleKey:"services.commerce.title",bodyKey:"services.commerce.body",outcomeKey:"services.commerce.outcome"},{index:"09",titleKey:"services.integrations.title",bodyKey:"services.integrations.body",outcomeKey:"services.integrations.outcome"},{index:"10",titleKey:"services.support.title",bodyKey:"services.support.body",outcomeKey:"services.support.outcome"}];trustFacts=[{labelKey:"services.trust.statusLabel",valueKey:"services.trust.statusValue"},{labelKey:"services.trust.entityLabel",valueKey:"services.trust.entityValue"},{labelKey:"services.trust.issueLabel",valueKey:"services.trust.issueValue"}];stats=[{valueKey:"services.stat1.value",labelKey:"services.stat1.label"},{valueKey:"services.stat2.value",labelKey:"services.stat2.label"},{valueKey:"services.stat3.value",labelKey:"services.stat3.label"}];deliverySteps=[{labelKey:"services.step1.label",titleKey:"services.step1.title"},{labelKey:"services.step2.label",titleKey:"services.step2.title"},{labelKey:"services.step3.label",titleKey:"services.step3.title"}];animationContext;isDown=!1;startX=0;scrollLeftStart=0;dragListeners=[];ngAfterViewInit(){this.animationContext=this.gsapService.context(this.elementRef.nativeElement,()=>{let e=this.gsapService.gsap,t=e.utils.selector(this.elementRef.nativeElement);this.gsapService.sectionReveal(this.elementRef.nativeElement),this.cards.forEach(n=>{let i=n.nativeElement;i.addEventListener("pointermove",s=>{let o=i.getBoundingClientRect(),a=s.clientX-o.left,c=s.clientY-o.top;i.style.setProperty("--mx",`${a}px`),i.style.setProperty("--my",`${c}px`)})}),e.from(t(".services-trust-banner"),{opacity:0,y:-30,duration:.8,ease:"power3.out",clearProps:"transform,opacity",scrollTrigger:{trigger:this.elementRef.nativeElement,start:"top 76%"}}),e.from(t(".services-carousel-wrapper"),{opacity:0,y:40,duration:.9,ease:"power3.out",clearProps:"transform,opacity",scrollTrigger:{trigger:this.elementRef.nativeElement,start:"top 74%"}}),e.from(t(".delivery-step"),{opacity:0,y:30,scale:.985,duration:.95,stagger:.09,ease:"power4.out",clearProps:"transform,opacity",scrollTrigger:{trigger:t(".services-trust-banner")[0]||this.elementRef.nativeElement,start:"top 70%"}})}),In(this.platformId)&&(this.initDragToScroll(),window.requestAnimationFrame(()=>{this.resetCarouselToStart(),this.updateProgressBar()}))}ngOnDestroy(){this.animationContext?.revert(),this.removeDragListeners()}scrollNext(){let e=this.carouselRef.nativeElement;e.scrollBy({left:this.getDirectionalScrollStep(e),behavior:"smooth"})}scrollPrev(){let e=this.carouselRef.nativeElement;e.scrollBy({left:-this.getDirectionalScrollStep(e),behavior:"smooth"})}getScrollStep(e){let t=e.querySelector(".service-card");if(!t)return 0;let n=window.getComputedStyle(e),i=Number.parseFloat(n.columnGap||n.gap||"0");return t.offsetWidth+(Number.isFinite(i)?i:0)}getDirectionalScrollStep(e){return this.isRtl()?-this.getScrollStep(e):this.getScrollStep(e)}isRtl(){return this.i18n.language()==="ar"}getScrollProgress(e,t){if(t<=0)return 0;let n=e.scrollLeft;return this.isRtl()?n<=0?Math.abs(n)/t:(t-n)/t:n/t}resetCarouselToStart(){let e=this.carouselRef?.nativeElement;e&&(e.scrollLeft=0)}updateProgressBar(){let e=this.carouselRef?.nativeElement,t=this.progressBarRef?.nativeElement,n=this.progressDotRef?.nativeElement;if(!e||!t||!n)return;let i=t.parentElement?.clientWidth??0;if(i<=0)return;let s=e.scrollWidth,o=e.clientWidth,a=s-o;if(a<=0){t.style.width="0px",t.style.left=this.isRtl()?"auto":"0px",t.style.right=this.isRtl()?"0px":"auto",n.style.left=this.isRtl()?"auto":"0px",n.style.right=this.isRtl()?"0px":"auto";return}let c=Math.max(0,Math.min(1,this.getScrollProgress(e,a))),l=`${c*i}px`,h=`${c*i}px`;t.style.width=l,t.style.left=this.isRtl()?"auto":"0px",t.style.right=this.isRtl()?"0px":"auto",n.style.left=this.isRtl()?"auto":h,n.style.right=this.isRtl()?h:"auto"}initDragToScroll(){let e=this.carouselRef.nativeElement,t=a=>{this.isDown=!0,e.classList.add("grabbing"),this.startX=a.pageX-e.offsetLeft,this.scrollLeftStart=e.scrollLeft},n=()=>{this.isDown=!1,e.classList.remove("grabbing")},i=()=>{this.isDown=!1,e.classList.remove("grabbing")},s=a=>{if(!this.isDown)return;a.preventDefault();let l=(a.pageX-e.offsetLeft-this.startX)*1.5;e.scrollLeft=this.isRtl()?this.scrollLeftStart+l:this.scrollLeftStart-l},o=()=>this.updateProgressBar();e.addEventListener("mousedown",t),e.addEventListener("mouseleave",n),e.addEventListener("mouseup",i),e.addEventListener("mousemove",s),e.addEventListener("scroll",o),window.addEventListener("resize",o),this.dragListeners=[{target:e,type:"mousedown",handler:t},{target:e,type:"mouseleave",handler:n},{target:e,type:"mouseup",handler:i},{target:e,type:"mousemove",handler:s},{target:e,type:"scroll",handler:o},{target:window,type:"resize",handler:o}],window.requestAnimationFrame(o)}removeDragListeners(){this.dragListeners.forEach(e=>{e.target.removeEventListener(e.type,e.handler)}),this.dragListeners=[]}static \u0275fac=function(t){return new(t||r)(tn(Fi),tn(Ji),tn(Ni),tn(Qi))};static \u0275cmp=Ai({type:r,selectors:[["app-services"]],viewQuery:function(t,n){if(t&1&&yo(mw,5)(gw,5)(_w,5)(xw,5),t&2){let i;nr(i=ir())&&(n.carouselRef=i.first),nr(i=ir())&&(n.progressBarRef=i.first),nr(i=ir())&&(n.progressDotRef=i.first),nr(i=ir())&&(n.cards=i)}},decls:49,vars:8,consts:[["carousel",""],["progressBar",""],["progressDot",""],["serviceCard",""],["id","services",1,"services-section","section-padding"],[1,"container"],[1,"section-heading"],["data-edit-key","services.kicker",1,"section-kicker","motion-item"],["data-edit-key","services.title",1,"section-title","motion-item"],["data-edit-key","services.body",1,"section-copy","motion-item"],[1,"services-trust-banner"],[1,"banner-badge"],["data-edit-key","services.offer.label",1,"offer-label"],[1,"badge-text"],["data-edit-key","services.offer.title"],["data-edit-key","services.offer.body"],[1,"banner-divider"],[1,"banner-facts"],[1,"banner-fact"],[1,"services-carousel-wrapper"],[1,"services-grid"],[1,"service-card"],[1,"carousel-controls-container"],[1,"carousel-progress-track"],[1,"carousel-progress-fill"],[1,"carousel-progress-dot"],[1,"carousel-nav"],["type","button","aria-label","Previous service",1,"nav-btn","prev",3,"click"],["width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M19 12H5M12 19l-7-7 7-7"],["type","button","aria-label","Next service",1,"nav-btn","next",3,"click"],["d","M5 12h14M12 5l7 7-7 7"],[1,"services-footer-shell"],[1,"services-actions"],["href","#contact","data-edit-key","services.primaryCta",1,"services-primary","btn-primary-neon"],["href","#work","data-edit-key","services.secondaryCta",1,"services-secondary"],["aria-label","Delivery process",1,"delivery-strip"],[1,"delivery-step"],[1,"card-glow-bg"],["aria-hidden","true",1,"card-watermark"],[1,"card-top"],[1,"service-index"],[1,"card-content"],[1,"outcome-row"],["width","14","height","14","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2.5",1,"outcome-arrow"],[1,"outcome-badge"]],template:function(t,n){t&1&&(yt(0,"section",4)(1,"div",5)(2,"div",6)(3,"span",7),Te(4),It(),yt(5,"h2",8),Te(6),It(),yt(7,"p",9),Te(8),It()(),yt(9,"div",10)(10,"div",11)(11,"span",12),Te(12),It(),yt(13,"div",13)(14,"h3",14),Te(15),It(),yt(16,"p",15),Te(17),It()()(),Tr(18,"div",16),yt(19,"div",17),er(20,yw,5,4,"div",18,g_),It()(),yt(22,"div",19)(23,"div",20,0),er(25,bw,18,8,"article",21,vw),It(),yt(27,"div",22)(28,"div",23),Tr(29,"div",24,1)(31,"div",25,2),It(),yt(33,"div",26)(34,"button",27),Lu("click",function(){return n.scrollPrev()}),Ci(),yt(35,"svg",28),Tr(36,"path",29),It()(),$r(),yt(37,"button",30),Lu("click",function(){return n.scrollNext()}),Ci(),yt(38,"svg",28),Tr(39,"path",31),It()()()()(),$r(),yt(40,"div",32)(41,"div",33)(42,"a",34),Te(43),It(),yt(44,"a",35),Te(45),It()(),yt(46,"div",36),er(47,Mw,5,4,"div",37,g_),It()()()()),t&2&&(Q(4),Re(n.i18n.t("services.kicker")),Q(2),Re(n.i18n.t("services.title")),Q(2),Re(n.i18n.t("services.body")),Q(4),Re(n.i18n.t("services.offer.label")),Q(3),Re(n.i18n.t("services.offer.title")),Q(2),Re(n.i18n.t("services.offer.body")),Q(3),tr(n.trustFacts),Q(5),tr(n.services),Q(18),Re(n.i18n.t("services.primaryCta")),Q(2),Re(n.i18n.t("services.secondaryCta")),Q(2),tr(n.deliverySteps))},dependencies:[es],styles:['.services-section[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:transparent}.services-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;z-index:1}.section-heading[_ngcontent-%COMP%]{max-width:620px;margin:0 auto;text-align:center}.section-heading[_ngcontent-%COMP%]   .section-kicker[_ngcontent-%COMP%]{justify-content:center}.section-heading[_ngcontent-%COMP%]   .section-copy[_ngcontent-%COMP%]{max-width:520px;margin:10px auto 0}.services-trust-banner[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px 24px;margin-top:30px;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:#12142580;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 20px 50px #00000026}.banner-badge[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:10px;flex:1;min-width:0}.offer-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:4px 10px;border:1px solid rgba(0,229,255,.25);border-radius:8px;color:var(--accent-cyan);font-size:.64rem;font-weight:900;text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;flex-shrink:0}.badge-text[_ngcontent-%COMP%]{min-width:0;width:100%}.badge-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:clamp(1rem,1.45vw,1.28rem);color:var(--text-primary);line-height:1.25;overflow-wrap:break-word}.badge-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#f5f7ffb3;font-size:.8rem!important;line-height:1.52!important;overflow-wrap:break-word}.banner-divider[_ngcontent-%COMP%]{width:1px;align-self:stretch;background:linear-gradient(to bottom,transparent,rgba(255,255,255,.15),transparent)}.banner-facts[_ngcontent-%COMP%]{display:flex;gap:18px;flex-shrink:0}.banner-fact[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-width:0}.banner-fact[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap}.banner-fact[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--text-primary);font-size:.82rem;font-weight:700;white-space:nowrap}.services-carousel-wrapper[_ngcontent-%COMP%]{position:relative;margin-top:24px;width:100%}.services-grid[_ngcontent-%COMP%]{--visible-service-cards: 4;--service-card-gap: 16px;display:flex;gap:var(--service-card-gap);overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:10px 2px 18px;scrollbar-width:none;cursor:grab;-webkit-user-select:none;user-select:none}.services-grid[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.services-grid.grabbing[_ngcontent-%COMP%]{cursor:grabbing;scroll-behavior:auto}.service-card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;flex:0 0 calc((100% - ((var(--visible-service-cards) - 1) * var(--service-card-gap))) / var(--visible-service-cards));width:calc((100% - ((var(--visible-service-cards) - 1) * var(--service-card-gap))) / var(--visible-service-cards));min-width:0;min-height:232px;padding:18px 18px 16px;border:1px solid rgba(255,255,255,.08);border-radius:14px;background:#0c0e1c8c;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 12px 32px #0000002e;overflow:hidden;scroll-snap-align:start;transition:border-color .3s ease,box-shadow .3s ease,transform .35s cubic-bezier(.16,1,.3,1),background .3s ease}.card-watermark[_ngcontent-%COMP%]{position:absolute;bottom:-6px;right:8px;font-size:5.25rem;font-weight:900;color:#ffffff09;line-height:1;pointer-events:none;-webkit-user-select:none;user-select:none;letter-spacing:-.05em;font-family:var(--font-heading)}.card-glow-bg[_ngcontent-%COMP%]{position:absolute;top:-40%;left:-20%;width:120%;height:120%;background:radial-gradient(circle at 30% 40%,rgba(0,229,255,.07),transparent 65%);opacity:0;pointer-events:none;transition:opacity .45s ease}.service-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#00e5ff47;box-shadow:0 24px 56px #00e5ff17;background:#0f1223b3}.service-card[_ngcontent-%COMP%]:hover   .card-glow-bg[_ngcontent-%COMP%]{opacity:1}.card-top[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:14px}.service-index[_ngcontent-%COMP%]{display:inline-grid;width:28px;height:28px;place-items:center;border:1px solid rgba(0,229,255,.3);border-radius:8px;color:var(--accent-cyan);font-size:.66rem;font-weight:900;background:#00e5ff0d}.card-content[_ngcontent-%COMP%]{flex:1}.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:.95rem;color:var(--text-primary);font-weight:700;line-height:1.32}.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0 0;color:#f5f7ff99;font-size:.74rem!important;line-height:1.55!important}.outcome-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;width:100%;margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,.07)}.outcome-arrow[_ngcontent-%COMP%]{width:12px;height:12px;margin-top:1px;color:var(--accent-cyan);flex-shrink:0;opacity:.8}.outcome-badge[_ngcontent-%COMP%]{display:block!important;flex:1 1 auto;min-width:0;max-width:none;min-height:0!important;padding:0!important;border:0!important;border-radius:0!important;background:transparent!important;color:var(--accent-green);font-size:.6rem!important;font-weight:800;text-transform:uppercase;letter-spacing:0;line-height:1.28;overflow-wrap:normal;white-space:normal;word-break:normal}.carousel-controls-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:12px;width:100%}.carousel-progress-track[_ngcontent-%COMP%]{flex:1;height:2px;background:#ffffff14;border-radius:10px;position:relative;overflow:visible}.carousel-progress-fill[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;right:auto;transform:translateY(-50%);width:0;min-width:0;height:3px;background:linear-gradient(to right,var(--accent-cyan),var(--accent-blue));border-radius:10px;transition:width .3s cubic-bezier(.16,1,.3,1);box-shadow:0 0 10px #00e5ff80}.carousel-progress-dot[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;right:auto;width:9px;height:9px;border-radius:50%;background:var(--accent-cyan);box-shadow:0 0 10px #00e5ffb3,0 0 4px #00e5ff66;transform:translate(-50%,-50%);transition:left .3s cubic-bezier(.16,1,.3,1),right .3s cubic-bezier(.16,1,.3,1)}[dir="rtl"][_nghost-%COMP%]   .carousel-progress-fill[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .carousel-progress-fill[_ngcontent-%COMP%]{right:0;left:auto;background:linear-gradient(to left,var(--accent-cyan),var(--accent-blue))}[dir="rtl"][_nghost-%COMP%]   .carousel-progress-dot[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .carousel-progress-dot[_ngcontent-%COMP%]{right:0;left:auto;transform:translate(50%,-50%)}.carousel-nav[_ngcontent-%COMP%]{display:flex;gap:10px}[dir="rtl"][_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], [dir="rtl"][_nghost-%COMP%]   .outcome-arrow[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .outcome-arrow[_ngcontent-%COMP%]{transform:scaleX(-1)}.nav-btn[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,255,255,.1);background:#ffffff08;color:var(--text-primary);cursor:pointer;transition:all .3s ease}.nav-btn[_ngcontent-%COMP%]:hover{border-color:var(--accent-cyan);color:var(--accent-cyan);background:#00e5ff0d;transform:scale(1.05)}.nav-btn[_ngcontent-%COMP%]:active{transform:scale(.95)}.services-footer-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;margin-top:30px}.services-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:16px}.services-primary[_ngcontent-%COMP%], .services-secondary[_ngcontent-%COMP%]{display:inline-flex;min-height:42px;align-items:center;justify-content:center;padding:0 20px;border-radius:12px;font-weight:800;text-decoration:none;font-size:.82rem;transition:all .3s ease}.services-primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--accent-cyan),var(--accent-blue));color:#03101a;box-shadow:0 0 15px #00e5ff33}.services-secondary[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.1);color:var(--text-primary);background:#ffffff05}.services-primary[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 0 25px #00e5ff66}.services-secondary[_ngcontent-%COMP%]:hover{transform:translateY(-3px);border-color:#00e5ff4d;color:var(--accent-cyan);background:#00e5ff0d}.delivery-strip[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;background:#ffffff14}.delivery-step[_ngcontent-%COMP%]{display:flex;min-height:64px;align-items:center;justify-content:space-between;gap:14px;padding:14px 22px;background:#0a0c18cc}.delivery-step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--accent-cyan);font-size:.66rem;font-weight:900;text-transform:uppercase}.delivery-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--text-primary);font-size:clamp(.82rem,1vw,.96rem)}.theme-light[_nghost-%COMP%]   .services-trust-banner[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .services-trust-banner[_ngcontent-%COMP%]{border-color:#00000014;background:#ffffffe6;box-shadow:0 15px 40px #0000000d}.theme-light[_nghost-%COMP%]   .badge-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .badge-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1d1d1f}.theme-light[_nghost-%COMP%]   .badge-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .badge-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1d1d1fb3}.theme-light[_nghost-%COMP%]   .banner-divider[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .banner-divider[_ngcontent-%COMP%]{background:linear-gradient(to bottom,transparent,rgba(0,0,0,.08),transparent)}.theme-light[_nghost-%COMP%]   .banner-fact[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .banner-fact[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#1d1d1f}.theme-light[_nghost-%COMP%]   .service-card[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .service-card[_ngcontent-%COMP%]{border-color:#00000014;background:#ffffffd9;box-shadow:0 10px 30px #0000000a}.theme-light[_nghost-%COMP%]   .service-card[_ngcontent-%COMP%]:hover, .theme-light   [_nghost-%COMP%]   .service-card[_ngcontent-%COMP%]:hover{background:#fffffff2;box-shadow:0 20px 45px #00000014;border-color:#008aa04d}.theme-light[_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1d1d1f}.theme-light[_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1d1d1fa6}.theme-light[_nghost-%COMP%]   .carousel-progress-track[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .carousel-progress-track[_ngcontent-%COMP%]{background:#00000014}.theme-light[_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%]{border-color:#0000001a;background:#00000005;color:#1d1d1f}.theme-light[_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%]:hover, .theme-light   [_nghost-%COMP%]   .nav-btn[_ngcontent-%COMP%]:hover{border-color:#008aa04d;color:#008aa0;background:#008aa00d}.theme-light[_nghost-%COMP%]   .services-secondary[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .services-secondary[_ngcontent-%COMP%]{border-color:#0000001a;color:#1d1d1f;background:#00000005}.theme-light[_nghost-%COMP%]   .services-secondary[_ngcontent-%COMP%]:hover, .theme-light   [_nghost-%COMP%]   .services-secondary[_ngcontent-%COMP%]:hover{border-color:#008aa04d;color:#008aa0;background:#008aa00d}.theme-light[_nghost-%COMP%]   .delivery-strip[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .delivery-strip[_ngcontent-%COMP%]{border-color:#00000014;background:#0000000f}.theme-light[_nghost-%COMP%]   .delivery-step[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .delivery-step[_ngcontent-%COMP%]{background:#ffffffe6}.theme-light[_nghost-%COMP%]   .delivery-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .delivery-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1d1d1f}@media(max-width:991.98px){.services-grid[_ngcontent-%COMP%]{--visible-service-cards: 2}.services-trust-banner[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:20px;padding:20px}.banner-divider[_ngcontent-%COMP%]{height:1px;width:100%;background:linear-gradient(to right,transparent,rgba(255,255,255,.15),transparent)}.theme-light[_nghost-%COMP%]   .banner-divider[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .banner-divider[_ngcontent-%COMP%]{background:linear-gradient(to right,transparent,rgba(0,0,0,.08),transparent)}.banner-facts[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:stretch;gap:12px}.banner-fact[_ngcontent-%COMP%]{min-width:0}.banner-fact[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .banner-fact[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{white-space:normal}}@media(max-width:767.98px){.services-grid[_ngcontent-%COMP%]{--visible-service-cards: 1;scroll-padding-inline:0}.banner-facts[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:start}.banner-badge[_ngcontent-%COMP%]{align-items:stretch;text-align:start}.badge-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:start}.service-card[_ngcontent-%COMP%]{padding:18px;min-height:218px}.card-watermark[_ngcontent-%COMP%]{font-size:4.5rem}.delivery-strip[_ngcontent-%COMP%]{grid-template-columns:1fr}.delivery-step[_ngcontent-%COMP%]{padding:14px 18px;min-height:58px}.carousel-controls-container[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column;gap:14px}.carousel-nav[_ngcontent-%COMP%]{justify-content:space-between}.nav-btn[_ngcontent-%COMP%]{width:44px;height:44px}}@media(max-width:575.98px){.services-trust-banner[_ngcontent-%COMP%]{padding:16px;border-radius:8px}.offer-label[_ngcontent-%COMP%]{white-space:normal;line-height:1.25}.services-grid[_ngcontent-%COMP%]{gap:12px;padding-bottom:14px}.service-card[_ngcontent-%COMP%]{flex-basis:100%;width:100%;min-height:auto;padding:16px}.services-actions[_ngcontent-%COMP%]{flex-direction:column;gap:10px}.services-primary[_ngcontent-%COMP%], .services-secondary[_ngcontent-%COMP%]{width:100%;min-height:46px;text-align:center}.delivery-step[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column;gap:6px}}']})};function Sw(r,e){if(r&1&&(pe(0,"div",12),Te(1),me()),r&2){let t=e.$implicit;Q(),Re(t)}}function ww(r,e){if(r&1&&(pe(0,"span",15),Te(1),me()),r&2){let t=e.$implicit;Q(),Re(t)}}function Tw(r,e){if(r&1&&(pe(0,"div",13),Rn(1,ww,2,1,"span",14),me()),r&2){let t=e.$implicit,n=gt();Ct("aria-hidden",t===1?"true":null),Q(),Mt("ngForOf",n.technologies)}}function Ew(r,e){if(r&1&&(pe(0,"span",15),Te(1),me()),r&2){let t=e.$implicit;Q(),Re(t)}}function Cw(r,e){if(r&1&&(pe(0,"div",13),Rn(1,Ew,2,1,"span",14),me()),r&2){let t=e.$implicit,n=gt();Ct("aria-hidden",t===1?"true":null),Q(),Mt("ngForOf",n.technologiesReverse)}}var x_=class r{constructor(e,t,n){this.gsapService=e;this.elementRef=t;this.i18n=n}technologies=["Angular","TypeScript","Signals","Standalone UI","Forms","GSAP","API Integration","SEO","Performance","Deployment"];technologiesReverse=["Product Strategy","UX Architecture","Design Systems","Dashboards","SaaS","Admin Panels","Lead Flow","Analytics","Handover","Growth"];boardCells=["STRATEGY","UX","ANGULAR","SYSTEMS","LAUNCH","GROWTH"];marqueeCopies=[0,1];animationContext;ngAfterViewInit(){this.animationContext=this.gsapService.context(this.elementRef.nativeElement,()=>{let e=this.gsapService.gsap,t=e.utils.selector(this.elementRef.nativeElement);this.gsapService.sectionReveal(this.elementRef.nativeElement);let n=(i,s,o)=>{let a=i?.querySelector(".marquee-set");if(!i||!a)return;let c=window.getComputedStyle(i),l=Number.parseFloat(c.columnGap||c.gap||"0"),h=a.offsetWidth+(Number.isFinite(l)?l:0);e.set(i,{x:s==="left"?0:-h}),e.to(i,{x:s==="left"?-h:0,repeat:-1,duration:o,ease:"none"})};n(t(".marquee-track.primary")[0],"left",34),n(t(".marquee-track.secondary")[0],"right",38),e.from(t(".board-cell"),{opacity:0,scale:0,stagger:.1,duration:.8,ease:"back.out(1.5)",clearProps:"transform,opacity",scrollTrigger:{trigger:t(".stack-board")[0],start:"top 85%"}}),e.to(t(".board-scan"),{xPercent:330,repeat:-1,duration:4.8,ease:"none"})})}ngOnDestroy(){this.animationContext?.revert()}static \u0275fac=function(t){return new(t||r)(tn(Fi),tn(Ji),tn(Ni))};static \u0275cmp=Ai({type:r,selectors:[["app-tech-stack"]],decls:18,vars:6,consts:[["id","stack",1,"tech-section","section-padding"],[1,"container","tech-header"],["data-edit-key","tech.kicker",1,"section-kicker","motion-item"],["data-edit-key","tech.title",1,"section-title","motion-item"],["data-edit-key","tech.caption",1,"section-copy","motion-item"],[1,"stack-board","glass","motion-item"],[1,"board-scan"],["class","board-cell",4,"ngFor","ngForOf"],[1,"tech-marquee"],[1,"marquee-track","primary"],["class","marquee-set",4,"ngFor","ngForOf"],[1,"marquee-track","secondary"],[1,"board-cell"],[1,"marquee-set"],["class","tech-chip glass",4,"ngFor","ngForOf"],[1,"tech-chip","glass"]],template:function(t,n){t&1&&(pe(0,"section",0)(1,"div",1)(2,"div")(3,"span",2),Te(4),me(),pe(5,"h2",3),Te(6),me()(),pe(7,"p",4),Te(8),me()(),pe(9,"div",5),Xt(10,"div",6),Rn(11,Sw,2,1,"div",7),me(),pe(12,"div",8)(13,"div",9),Rn(14,Tw,2,2,"div",10),me()(),pe(15,"div",8)(16,"div",11),Rn(17,Cw,2,2,"div",10),me()()()),t&2&&(Q(4),Re(n.i18n.t("tech.kicker")),Q(2),Re(n.i18n.t("tech.title")),Q(2),Re(n.i18n.t("tech.caption")),Q(3),Mt("ngForOf",n.boardCells),Q(3),Mt("ngForOf",n.marqueeCopies),Q(3),Mt("ngForOf",n.marqueeCopies))},dependencies:[es,Wc],styles:[".tech-section[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:transparent}.tech-header[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;gap:26px}.tech-header[_ngcontent-%COMP%]   .section-copy[_ngcontent-%COMP%]{max-width:380px;margin:0}.stack-board[_ngcontent-%COMP%]{position:relative;display:grid;width:100%;max-width:900px;grid-template-columns:repeat(6,minmax(110px,1fr));gap:8px;margin:42px auto 30px;overflow:hidden;padding:10px}.board-scan[_ngcontent-%COMP%]{position:absolute;inset:0 auto 0 -45%;width:45%;background:linear-gradient(90deg,transparent,rgba(0,229,255,.16),transparent)}.board-cell[_ngcontent-%COMP%]{position:relative;display:grid;place-content:center;min-height:82px;overflow:hidden;border-radius:6px;background:radial-gradient(circle at top right,rgba(0,229,255,.08),transparent 60%),#0e0f1799;color:var(--text-secondary);font-family:var(--font-mono);font-size:clamp(.72rem,.8vw,.76rem);font-weight:700;letter-spacing:1.2px;box-shadow:inset 0 0 0 1px #ffffff0d;transition:box-shadow .3s ease,color .3s ease}.board-cell[_ngcontent-%COMP%]:hover{color:var(--accent-cyan);box-shadow:inset 0 0 0 1px #00e5ff66,0 0 20px #00e5ff33}.tech-marquee[_ngcontent-%COMP%]{display:flex;width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}.marquee-track[_ngcontent-%COMP%]{display:flex;flex:0 0 auto;gap:10px;width:max-content;will-change:transform}.marquee-set[_ngcontent-%COMP%]{display:flex;flex:0 0 auto;gap:10px;padding:8px 0}.tech-chip[_ngcontent-%COMP%]{display:inline-flex;flex:0 0 auto;align-items:center;min-width:128px;justify-content:center;min-height:48px;padding:0 18px;color:var(--text-primary);font-family:var(--font-heading);font-size:.82rem;font-weight:800;text-transform:uppercase}.tech-chip[_ngcontent-%COMP%]:hover{border-color:var(--accent-cyan)}@media(max-width:991.98px){.tech-header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column;gap:14px}.stack-board[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr));max-width:720px}}@media(max-width:767.98px){.tech-section[_ngcontent-%COMP%]{overflow:visible}.tech-header[_ngcontent-%COMP%]{gap:12px}.tech-header[_ngcontent-%COMP%]   .section-copy[_ngcontent-%COMP%]{max-width:100%}.tech-chip[_ngcontent-%COMP%]{min-width:112px;min-height:44px;padding:0 14px;font-size:.76rem}}@media(max-width:575.98px){.stack-board[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin:26px auto 22px;padding:6px}.board-cell[_ngcontent-%COMP%]{min-height:58px;font-size:.76rem;letter-spacing:.4px;text-align:center}.tech-chip[_ngcontent-%COMP%]{min-width:104px;min-height:40px;padding:0 12px}}@media(max-width:374.98px){.stack-board[_ngcontent-%COMP%]{grid-template-columns:1fr}.tech-chip[_ngcontent-%COMP%]{min-width:96px;padding:0 10px;font-size:.72rem}}"]})};var Aw=["showcaseTrack"];function Pw(r,e){if(r&1){let t=Jr();pe(0,"button",18),ci("click",function(){let i=Sr(t).$implicit,s=gt();return wr(s.setFilter(i.id))}),pe(1,"span"),Te(2),me()()}if(r&2){let t=e.$implicit,n=gt();Qr("active",n.activeFilter===t.id),Ct("aria-pressed",n.activeFilter===t.id),Q(),Ct("data-edit-key",t.labelKey),Q(),Re(n.i18n.t(t.labelKey))}}function Rw(r,e){if(r&1){let t=Jr();pe(0,"video",41),ci("error",function(){Sr(t);let i=gt().$implicit,s=gt();return wr(s.markImageMissing(i.previewVideo.src))}),Xt(1,"source",42),me()}if(r&2){let t=gt().$implicit;Mt("poster",t.image),Q(),Mt("src",t.previewVideo.src)("type",t.previewVideo.type)}}function Iw(r,e){if(r&1){let t=Jr();pe(0,"img",43),ci("error",function(){Sr(t);let i=gt().$implicit,s=gt();return wr(s.markImageMissing(i.image))}),me()}if(r&2){let t=gt().$implicit,n=gt();Mt("src",t.image,va)("alt",n.i18n.t(t.titleKey))}}function Ow(r,e){if(r&1){let t=Jr();pe(0,"img",48),ci("error",function(){let i=Sr(t).$implicit,s=gt(4);return wr(s.markImageMissing(i))}),me()}if(r&2){let t=e.$implicit;Mt("src",t,va)("alt","")}}function Lw(r,e){if(r&1){let t=Jr();pe(0,"img",48),ci("error",function(){let i=Sr(t).$implicit,s=gt(4);return wr(s.markImageMissing(i))}),me()}if(r&2){let t=e.$implicit;Mt("src",t,va)("alt","")}}function Dw(r,e){if(r&1&&(pe(0,"div",45)(1,"div",46),Rn(2,Ow,1,2,"img",47)(3,Lw,1,2,"img",47),me()()),r&2){let t=gt().ngIf,n=gt().$implicit,i=gt();Du("animation-duration",n.screenshotDuration),Q(2),Mt("ngForOf",t)("ngForTrackBy",i.trackScreenshot),Q(),Mt("ngForOf",t)("ngForTrackBy",i.trackScreenshot)}}function Fw(r,e){if(r&1&&(vp(0),Rn(1,Dw,4,6,"div",44),yp()),r&2){let t=e.ngIf;Q(),Mt("ngIf",t.length)}}function Nw(r,e){if(r&1){let t=Jr();pe(0,"article",19),ci("mouseenter",function(i){let s=Sr(t),o=s.$implicit,a=s.index,c=gt();return c.activateProject(a),wr(c.startPreview(i,o))})("mouseleave",function(i){Sr(t);let s=gt();return wr(s.stopPreview(i))}),pe(1,"a",20)(2,"div",21)(3,"div",22),Rn(4,Rw,2,3,"video",23)(5,Iw,1,2,"img",24)(6,Fw,2,1,"ng-container",25),pe(7,"div",26)(8,"span",27),Te(9),me(),pe(10,"strong"),Te(11),me(),pe(12,"small",28),Te(13),me()(),Xt(14,"div",29),me()(),pe(15,"div",30)(16,"div",31)(17,"span",32)(18,"span",33),Te(19),me(),pe(20,"span"),Te(21),me()()(),pe(22,"div",34)(23,"h3"),Te(24),me(),pe(25,"p"),Te(26),me()(),pe(27,"div",35)(28,"span",36),Te(29),me(),pe(30,"span",37),Te(31),Ci(),pe(32,"svg",38),Xt(33,"path",39)(34,"path",40),me()()()()()()}if(r&2){let t=e.$implicit,n=e.index,i=gt();Du("--project-accent",t.accent),Qr("active",i.activeProjectIndex===n),Q(),Mt("href",t.link,va),Q(2),Qr("image-missing",i.isProjectMediaMissing(t))("has-video",t.previewVideo&&!i.hasScreenshotPreview(t))("has-screenshots",i.hasScreenshotPreview(t)),Q(),Mt("ngIf",t.previewVideo&&!i.hasScreenshotPreview(t)&&!i.isImageMissing(t.previewVideo.src)),Q(),Mt("ngIf",i.shouldShowImage(t)||t.previewVideo),Q(),Mt("ngIf",i.screenshotFrames(t)),Q(3),Re(t.categoryInitial),Q(),Ct("data-edit-key",t.titleKey),Q(),Re(i.i18n.t(t.titleKey)),Q(2),Re(i.i18n.t("work.projectBuild")),Q(6),Re(t.categoryInitial),Q(),Ct("data-edit-key",t.categoryKey),Q(),Re(i.i18n.t(t.categoryKey)),Q(2),Ct("data-edit-key",t.titleKey),Q(),Re(i.i18n.t(t.titleKey)),Q(),Ct("data-edit-key",t.descriptionKey),Q(),Ns(" ",i.i18n.t(t.descriptionKey)," "),Q(3),Re(i.i18n.t("work.live")),Q(2),Ns(" ",i.i18n.t("work.visit")," ")}}function Uw(r,e){if(r&1){let t=Jr();pe(0,"button",51),ci("click",function(){let i=Sr(t).index,s=gt(2);return wr(s.scrollToProject(i))}),me()}if(r&2){let t=e.$implicit,n=e.index,i=gt(2);Qr("active",i.activeProjectIndex===n),Ct("aria-label",i.i18n.t("work.showProject")+" "+i.i18n.t(t.titleKey))("aria-selected",i.activeProjectIndex===n)}}function kw(r,e){if(r&1&&(pe(0,"div",49),Rn(1,Uw,1,4,"button",50),me()),r&2){let t=gt();Ct("aria-label",t.i18n.t("work.projectsNav")),Q(),Mt("ngForOf",t.filteredProjects)}}function Ou(r){return`${Math.max(10,r*2.6)}s`}var v_=class r{constructor(e,t,n,i){this.gsapService=e;this.elementRef=t;this.changeDetectorRef=n;this.i18n=i}showcaseTrack;activeFilter="all";activeProjectIndex=0;cardRevealVars={opacity:0,x:40,duration:.85,stagger:.15,ease:"back.out(1.2)",overwrite:!0};filters=[{id:"all",labelKey:"work.filter.all"},{id:"realEstate",labelKey:"work.filter.realEstate"},{id:"education",labelKey:"work.filter.education"},{id:"agriculture",labelKey:"work.filter.agriculture"}];projects=[{id:101,titleKey:"work.osos.title",descriptionKey:"work.osos.description",categoryKey:"work.category.realEstate",categoryInitial:"R",filter:"realEstate",image:"Images/osos.png",previewVideo:{src:"assets/Projects/osos.mp4",type:"video/mp4"},screenshotPrefix:"osos",screenshotExtension:"png",screenshotFrames:[],screenshotDuration:Ou(0),link:"https://osos-alriadah.com/",accent:"#00e5ff"},{id:102,titleKey:"work.ajyal.title",descriptionKey:"work.ajyal.description",categoryKey:"work.category.education",categoryInitial:"E",filter:"education",image:"Images/ajyal.png",previewVideo:{src:"assets/Projects/ajyal.webm",type:"video/webm"},screenshotPrefix:"ajyal",screenshotExtension:"png",screenshotFrames:[],screenshotDuration:Ou(0),link:"https://ajyal-alquran.com/",accent:"#35d39d"},{id:103,titleKey:"work.zaytona.title",descriptionKey:"work.zaytona.description",categoryKey:"work.category.agriculture",categoryInitial:"A",filter:"agriculture",image:"Images/zaytona.png",previewVideo:{src:"assets/Projects/zaytona.webm",type:"video/webm"},screenshotPrefix:"zaytona",screenshotExtension:"png",screenshotFrames:[],screenshotDuration:Ou(0),link:"https://zaytona.info/",accent:"#73d13d"}];missingImages=new Set;animationContext;scrollSyncTimer;get filteredProjects(){return this.activeFilter==="all"?this.projects:this.projects.filter(e=>e.filter===this.activeFilter)}ngAfterViewInit(){this.discoverScreenshotPreviews(),this.animationContext=this.gsapService.context(this.elementRef.nativeElement,()=>{this.setupAnimations()})}ngOnDestroy(){this.animationContext?.revert(),this.scrollSyncTimer&&this.gsapService.isBrowser&&window.clearTimeout(this.scrollSyncTimer)}setFilter(e){this.activeFilter=e,this.activeProjectIndex=0,this.gsapService.isBrowser&&window.setTimeout(()=>{this.animateCards(),this.scrollToProject(0,"auto")},0)}markImageMissing(e){this.missingImages.add(e)}isImageMissing(e){return this.missingImages.has(e)}hasScreenshotPreview(e){return this.screenshotFrames(e).some(t=>!this.isImageMissing(t))}screenshotFrames(e){return e.screenshotFrames??[]}shouldShowImage(e){if(this.hasScreenshotPreview(e))return!this.isImageMissing(e.image);let t=e.previewVideo?this.isImageMissing(e.previewVideo.src):!0;return(!e.previewVideo||t)&&!this.isImageMissing(e.image)}isProjectMediaMissing(e){let t=e.screenshotFrames?!this.hasScreenshotPreview(e):!0,n=e.previewVideo?this.isImageMissing(e.previewVideo.src):!0;return!this.shouldShowImage(e)&&t&&n}activateProject(e){this.isMobileShowcase()||(this.activeProjectIndex=e)}scrollToProject(e,t="smooth"){if(this.activeProjectIndex=e,!this.gsapService.isBrowser)return;let n=this.showcaseTrack?.nativeElement,s=n?.querySelectorAll(".project-card")?.[e];if(!n||!s)return;let o=this.i18n.language()==="ar",a=s.offsetLeft-n.offsetLeft;o&&(a=-(n.scrollWidth-n.clientWidth-a)),n.scrollTo({left:a,behavior:t})}onShowcaseScroll(){this.gsapService.isBrowser&&(this.scrollSyncTimer&&window.clearTimeout(this.scrollSyncTimer),this.scrollSyncTimer=window.setTimeout(()=>{let e=this.showcaseTrack?.nativeElement;if(!e)return;let t=Array.from(e.querySelectorAll(".project-card")),n=e.getBoundingClientRect(),i=n.left+n.width/2,s=0,o=Number.POSITIVE_INFINITY;t.forEach((a,c)=>{let l=a.getBoundingClientRect(),h=l.left+l.width/2,f=Math.abs(i-h);f<o&&(o=f,s=c)}),this.activeProjectIndex=s},80))}startPreview(e,t){if(this.isMobileShowcase())return;let n=e.currentTarget;if(this.hasScreenshotPreview(t)){n.classList.add("screenshot-playing");return}let i=n.querySelector("video");i&&(n.classList.add("preview-playing"),i.currentTime=0,i.play().catch(()=>n.classList.remove("preview-playing")))}stopPreview(e){if(this.isMobileShowcase())return;let t=e.currentTarget,n=t.querySelector("video");t.classList.remove("screenshot-playing"),t.classList.remove("preview-playing"),n&&(n.pause(),n.currentTime=0)}trackProject(e,t){return t.id}trackScreenshot(e,t){return t}discoverScreenshotPreviews(){this.gsapService.isBrowser&&this.projects.filter(e=>e.screenshotPrefix).forEach(e=>{this.discoverScreenshotFrames(e.screenshotPrefix??"",e.screenshotExtension??"png").then(t=>{e.screenshotFrames=[...t],e.screenshotDuration=Ou(t.length),this.changeDetectorRef.detectChanges()})})}discoverScreenshotFrames(e,t){return new Promise(n=>{let i=[],s=o=>{let a=`assets/Projects/${e}${o}.${t}`,c=new Image;c.onload=()=>{i.push(a),s(o+1)},c.onerror=()=>n(i),c.src=a};s(1)})}animateCards(){if(!this.gsapService.isBrowser)return;let e=this.elementRef.nativeElement.querySelectorAll(".project-card");this.gsapService.gsap.from(e,this.cardRevealVars)}isMobileShowcase(){return this.gsapService.isBrowser&&window.matchMedia("(max-width: 991.98px)").matches}setupAnimations(){this.gsapService.sectionReveal(this.elementRef.nativeElement),this.animateCards(),this.animateProjectContent()}animateProjectContent(){let e=this.elementRef.nativeElement.querySelector(".project-showcase");if(!e)return;let t=this.gsapService.gsap.utils.selector(this.elementRef.nativeElement);this.gsapService.gsap.fromTo(t(".works-heading .section-title"),{clipPath:"inset(100% 0 0 0)",y:40},{clipPath:"inset(0% 0 0 0)",y:0,duration:1,ease:"power4.out",scrollTrigger:{trigger:this.elementRef.nativeElement,start:"top 80%"}}),this.gsapService.gsap.from(t(".project-browser, .project-copy > *"),{opacity:0,y:30,duration:.8,stagger:.05,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 75%"}}),this.gsapService.gsap.from(t(".filter-btn"),{opacity:0,y:20,duration:.6,stagger:.08,ease:"power2.out",scrollTrigger:{trigger:t(".filter-controls"),start:"top 90%"}})}static \u0275fac=function(t){return new(t||r)(tn(Fi),tn(Ji),tn(bp),tn(Ni))};static \u0275cmp=Ai({type:r,selectors:[["app-works"]],viewQuery:function(t,n){if(t&1&&yo(Aw,5),t&2){let i;nr(i=ir())&&(n.showcaseTrack=i.first)}},decls:23,vars:12,consts:[["showcaseTrack",""],["id","work",1,"works-section","section-padding"],[1,"container"],[1,"works-heading"],["data-edit-key","work.kicker",1,"section-kicker","motion-item"],["data-edit-key","work.title",1,"section-title","motion-item"],["data-edit-key","work.body",1,"works-lede","motion-item"],[1,"works-actions","motion-item"],["href","#contact","data-edit-key","work.contactCta",1,"work-contact"],["href","#work","data-edit-key","work.viewAll",1,"work-view-all"],["width","17","height","17","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M5 12h14"],["d","m13 6 6 6-6 6"],["role","group",1,"filter-controls","motion-item"],["class","filter-btn","type","button",3,"active","click",4,"ngFor","ngForOf"],[1,"project-showcase",3,"scroll"],["class","project-card",3,"--project-accent","active","mouseenter","mouseleave",4,"ngFor","ngForOf","ngForTrackBy"],["class","work-dots","role","tablist",4,"ngIf"],["type","button",1,"filter-btn",3,"click"],[1,"project-card",3,"mouseenter","mouseleave"],["target","_blank","rel","noopener noreferrer",1,"project-link",3,"href"],[1,"project-browser"],[1,"project-media"],["muted","","loop","","playsinline","","preload","auto",3,"poster","error",4,"ngIf"],[3,"src","alt","error",4,"ngIf"],[4,"ngIf"],["aria-hidden","true",1,"visual-fallback"],[1,"fallback-icon"],["data-edit-key","work.projectBuild"],[1,"project-grid-overlay"],[1,"project-info"],[1,"project-meta"],[1,"project-category"],[1,"category-mark"],[1,"project-copy"],[1,"project-footer"],["data-edit-key","work.live",1,"live-pill"],["aria-hidden","true","data-edit-key","work.visit",1,"view-project"],["width","18","height","18","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M7 17 17 7"],["d","M7 7h10v10"],["muted","","loop","","playsinline","","preload","auto",3,"error","poster"],[3,"src","type"],[3,"error","src","alt"],["class","screenshot-preview","aria-hidden","true",3,"animation-duration",4,"ngIf"],["aria-hidden","true",1,"screenshot-preview"],[1,"screenshot-scroll-track"],["class","screenshot-frame",3,"src","alt","error",4,"ngFor","ngForOf","ngForTrackBy"],[1,"screenshot-frame",3,"error","src","alt"],["role","tablist",1,"work-dots"],["type","button",3,"active","click",4,"ngFor","ngForOf"],["type","button",3,"click"]],template:function(t,n){t&1&&(pe(0,"section",1)(1,"div",2)(2,"div",3)(3,"span",4),Te(4),me(),pe(5,"h2",5),Te(6),me(),pe(7,"p",6),Te(8),me(),pe(9,"div",7)(10,"a",8),Te(11),me(),pe(12,"a",9),Te(13),Ci(),pe(14,"svg",10),Xt(15,"path",11)(16,"path",12),me()()(),$r(),pe(17,"div",13),Rn(18,Pw,3,5,"button",14),me()(),pe(19,"div",15,0),ci("scroll",function(){return n.onShowcaseScroll()}),Rn(21,Nw,35,27,"article",16),me(),Rn(22,kw,2,2,"div",17),me()()),t&2&&(Q(4),Re(n.i18n.t("work.kicker")),Q(2),Ns(" ",n.i18n.t("work.title")," "),Q(2),Re(n.i18n.t("work.body")),Q(3),Re(n.i18n.t("work.contactCta")),Q(2),Ns(" ",n.i18n.t("work.viewAll")," "),Q(4),Ct("aria-label",n.i18n.t("work.filters")),Q(),Mt("ngForOf",n.filters),Q(),Qr("single-project",n.filteredProjects.length===1),Q(2),Mt("ngForOf",n.filteredProjects)("ngForTrackBy",n.trackProject),Q(),Mt("ngIf",n.filteredProjects.length>1))},dependencies:[es,Wc,Xc],styles:['.works-section[_ngcontent-%COMP%]{position:relative;isolation:isolate;overflow:hidden;background:transparent}.works-heading[_ngcontent-%COMP%]{display:grid;justify-items:center;max-width:700px;margin-inline:auto;text-align:center}.works-heading[_ngcontent-%COMP%]   .section-kicker[_ngcontent-%COMP%]{justify-content:center;margin-bottom:8px}.works-heading[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:clamp(2.05rem,5vw,3.85rem);line-height:1.02;text-shadow:0 16px 42px rgba(0,0,0,.35)}.works-lede[_ngcontent-%COMP%]{max-width:580px;margin:18px 0 0;color:#f5f7ffb8;font-size:clamp(.86rem,1.2vw,.95rem);line-height:1.68}.works-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:28px}.work-contact[_ngcontent-%COMP%], .work-view-all[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-height:42px;text-decoration:none;font-weight:800;line-height:1;transition:transform .24s ease,color .24s ease,box-shadow .24s ease,background .24s ease}.work-contact[_ngcontent-%COMP%]{min-width:122px;padding:0 20px;border:0;border-radius:8px;background:linear-gradient(135deg,#ff2bd6,#9d4dff);color:#fff;box-shadow:0 0 26px #ff2bd675}.work-view-all[_ngcontent-%COMP%]{gap:9px;padding:0 6px;color:#ffffffe6}.work-contact[_ngcontent-%COMP%]:hover, .work-view-all[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}.work-view-all[_ngcontent-%COMP%]:hover{color:#ff7ae8}.filter-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:22px}.filter-btn[_ngcontent-%COMP%]{min-height:34px;padding:0 12px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:#ffffff0b;color:#ffffffad;font-size:.72rem;font-weight:900;text-transform:uppercase;transition:border-color .22s ease,background .22s ease,color .22s ease,transform .22s ease}.filter-btn.active[_ngcontent-%COMP%], .filter-btn[_ngcontent-%COMP%]:hover{border-color:#00e5ff66;background:#00e5ff1f;color:var(--accent-cyan);transform:translateY(-2px)}.project-showcase[_ngcontent-%COMP%]{--showcase-gap: clamp(12px, 1.5vw, 20px);display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);grid-template-rows:repeat(2,minmax(220px,1fr));gap:var(--showcase-gap);width:100%;max-width:1200px;margin:48px auto 0;padding:0 0 24px;overflow:visible}.project-showcase.single-project[_ngcontent-%COMP%]{grid-template-columns:minmax(0,760px);grid-template-rows:auto;justify-content:center}.project-showcase.single-project[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]:first-child{grid-row:auto}.project-showcase[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.project-card[_ngcontent-%COMP%]{position:relative;min-width:0;overflow:hidden;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:linear-gradient(160deg,#ffffff12,#ffffff05),#120e2ad1;box-shadow:0 20px 60px #00000052;transition:border-color .3s ease,transform .3s ease,box-shadow .3s ease;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}.project-card[_ngcontent-%COMP%]:first-child{grid-row:1 / 3}.project-card[_ngcontent-%COMP%]:hover{border-color:color-mix(in srgb,var(--project-accent) 55%,transparent);box-shadow:0 28px 80px #0006,0 0 0 1px color-mix(in srgb,var(--project-accent) 20%,transparent);z-index:10}.project-card[_ngcontent-%COMP%]:nth-child(2){transform:translateY(16px)}.project-card[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-8px)}.project-card.active[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:hover{border-color:color-mix(in srgb,var(--project-accent) 60%,transparent);box-shadow:0 28px 80px #0006;transform:translateY(-5px)}.project-card[_ngcontent-%COMP%]:nth-child(2):not(:hover):not(.active){transform:translateY(10px)}.project-card[_ngcontent-%COMP%]:nth-child(3):not(:hover):not(.active){transform:translateY(-4px)}.project-link[_ngcontent-%COMP%]{display:grid;min-height:100%;color:var(--text-primary);text-decoration:none}.project-card[_ngcontent-%COMP%]:not(:first-child)   .project-link[_ngcontent-%COMP%]{grid-template-columns:minmax(145px,.76fr) minmax(0,1fr)}.project-browser[_ngcontent-%COMP%]{position:relative;min-height:auto;aspect-ratio:16 / 9.4;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.07);background:#060914b8}.project-card[_ngcontent-%COMP%]:first-child   .project-browser[_ngcontent-%COMP%]{aspect-ratio:16 / 8.8}.project-card[_ngcontent-%COMP%]:not(:first-child)   .project-browser[_ngcontent-%COMP%]{height:100%;aspect-ratio:auto;border-inline-end:1px solid rgba(255,255,255,.07);border-bottom:0}.project-media[_ngcontent-%COMP%], .visual-fallback[_ngcontent-%COMP%], .project-grid-overlay[_ngcontent-%COMP%]{position:absolute;inset:0}.project-media[_ngcontent-%COMP%]{overflow:hidden}.project-media[_ngcontent-%COMP%] > img[_ngcontent-%COMP%], .project-media[_ngcontent-%COMP%] > video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;filter:saturate(1.02) contrast(1.04);transition:opacity .28s ease,transform .55s ease}.project-media[_ngcontent-%COMP%] > video[_ngcontent-%COMP%]{z-index:1}.project-media[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{z-index:2}.project-card.preview-playing[_ngcontent-%COMP%]   .project-media.has-video[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.project-media.has-video[_ngcontent-%COMP%] > video[_ngcontent-%COMP%]{height:100%;object-fit:contain;object-position:center;background:#050a12}.project-card[_ngcontent-%COMP%]:hover   .project-media[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{transform:scale(1.05)}.project-card[_ngcontent-%COMP%]:hover   .project-media.has-video[_ngcontent-%COMP%] > video[_ngcontent-%COMP%]{top:0;transform:none}.screenshot-preview[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:4;overflow:hidden;background:#050a12;opacity:0;pointer-events:none;transition:opacity .36s ease}.project-card.screenshot-playing[_ngcontent-%COMP%]   .screenshot-preview[_ngcontent-%COMP%]{opacity:1}.screenshot-scroll-track[_ngcontent-%COMP%]{display:flex;flex-direction:column;transition:transform .42s cubic-bezier(.65,0,.35,1);transform:translateY(0);will-change:transform}.project-card.screenshot-playing[_ngcontent-%COMP%]   .screenshot-scroll-track[_ngcontent-%COMP%]{animation-duration:inherit;animation-iteration-count:infinite;animation-name:_ngcontent-%COMP%_screenshot-pan;animation-timing-function:cubic-bezier(.65,0,.35,1);transition:none}.screenshot-frame[_ngcontent-%COMP%]{display:block;width:100%;height:auto;flex:0 0 auto;background:#050a12}@keyframes _ngcontent-%COMP%_screenshot-pan{0%,7%{transform:translateY(0)}93%,to{transform:translateY(-50%)}}.visual-fallback[_ngcontent-%COMP%]{display:grid;place-content:center;gap:8px;padding:32px;text-align:center;background:linear-gradient(135deg,color-mix(in srgb,var(--project-accent) 24%,transparent),#ffffff0a)}.project-media[_ngcontent-%COMP%]:not(.image-missing)   .visual-fallback[_ngcontent-%COMP%]{opacity:0}.fallback-icon[_ngcontent-%COMP%]{display:grid;width:58px;height:58px;place-items:center;margin:0 auto;border:1px solid color-mix(in srgb,var(--project-accent) 60%,transparent);border-radius:8px;color:var(--project-accent);font:800 1.9rem/1 var(--font-heading)}.project-grid-overlay[_ngcontent-%COMP%]{z-index:2;background:linear-gradient(180deg,transparent 46%,rgba(6,9,16,.28)),radial-gradient(circle at 82% 14%,color-mix(in srgb,var(--project-accent) 28%,transparent),transparent 25%);pointer-events:none}.project-info[_ngcontent-%COMP%]{display:grid;align-content:start;gap:10px;min-height:160px;padding:18px 20px 20px;background:linear-gradient(180deg,#0a0818d1,#060512f0)}.project-card[_ngcontent-%COMP%]:first-child   .project-info[_ngcontent-%COMP%]{align-content:end;min-height:210px;padding:24px;background:linear-gradient(0deg,rgba(6,5,18,.98) 0%,rgba(6,5,18,.88) 60%,transparent 100%)}.project-card[_ngcontent-%COMP%]:not(:first-child)   .project-info[_ngcontent-%COMP%]{align-content:center;min-height:100%;padding:16px 18px;background:linear-gradient(180deg,#0a0818c7,#060512eb)}.project-meta[_ngcontent-%COMP%], .project-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.project-category[_ngcontent-%COMP%], .live-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;max-width:100%;min-height:27px;padding:0 9px;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#ffffffad;font-size:.72rem;font-weight:800;text-transform:uppercase}.project-category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.category-mark[_ngcontent-%COMP%]{display:grid;width:20px;height:20px;place-items:center;margin-inline-end:8px;border-radius:6px;background:var(--project-accent);color:#fff}.live-pill[_ngcontent-%COMP%]{color:var(--project-accent)}.project-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:clamp(.98rem,1.35vw,1.16rem);line-height:1.2}.project-card[_ngcontent-%COMP%]:first-child   .project-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(1.25rem,2vw,1.8rem);line-height:1.12}.project-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:-webkit-box;max-height:4.8em;margin:6px 0 0;overflow:hidden;color:#f5f7ffad;font-size:.83rem;line-height:1.65;-webkit-box-orient:vertical;-webkit-line-clamp:3}.project-card[_ngcontent-%COMP%]:not(:first-child)   .project-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-line-clamp:2;font-size:.8rem}.view-project[_ngcontent-%COMP%]{display:inline-flex;align-items:center;flex:0 0 auto;gap:8px;font-weight:800;transition:color .3s ease,transform .3s ease;--hover-translate: 4px}[dir="rtl"][_nghost-%COMP%]   .view-project[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .view-project[_ngcontent-%COMP%]{--hover-translate: -4px}.project-card[_ngcontent-%COMP%]:hover   .view-project[_ngcontent-%COMP%]{color:var(--project-accent);transform:translate(var(--hover-translate))}.work-dots[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:9px;margin-top:24px}.work-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:4px;height:4px;padding:0;border:0;border-radius:999px;background:#ffffff40;cursor:pointer;transition:width .2s ease,height .2s ease,background .2s ease,box-shadow .2s ease,transform .2s ease}.work-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{width:7px;height:7px;background:#fff;box-shadow:0 0 12px #ffffffb8;transform:translateY(-1.5px)}@media(max-width:991.98px){.works-section[_ngcontent-%COMP%]{overflow:clip}.project-showcase[_ngcontent-%COMP%]{display:flex;gap:14px;width:100%;max-width:520px;margin-top:38px;padding:12px 0 34px;overflow-x:auto;overflow-y:visible;scroll-behavior:smooth;scroll-padding-inline:0;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}.project-card[_ngcontent-%COMP%]{display:block;flex:0 0 100%;width:100%;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.project-card[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:nth-child(2), .project-card[_ngcontent-%COMP%]:nth-child(3), .project-card.active[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:hover, .project-card[_ngcontent-%COMP%]:nth-child(2):not(:hover):not(.active), .project-card[_ngcontent-%COMP%]:nth-child(3):not(:hover):not(.active){box-shadow:0 22px 70px #00000047;transform:none}.project-card[_ngcontent-%COMP%]:not(:first-child)   .project-link[_ngcontent-%COMP%]{grid-template-columns:1fr}.project-card[_ngcontent-%COMP%]:not(:first-child)   .project-browser[_ngcontent-%COMP%]{height:auto;aspect-ratio:16 / 9.7;border-inline-end:0;border-bottom:1px solid var(--border-soft)}.project-info[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:first-child   .project-info[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:not(:first-child)   .project-info[_ngcontent-%COMP%]{align-content:start;min-height:auto;padding:18px 20px 20px}.project-meta[_ngcontent-%COMP%], .project-footer[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column;gap:10px}.project-card[_ngcontent-%COMP%]   .screenshot-preview[_ngcontent-%COMP%]{opacity:1}.project-card[_ngcontent-%COMP%]   .screenshot-scroll-track[_ngcontent-%COMP%]{animation-duration:inherit;animation-iteration-count:infinite;animation-name:_ngcontent-%COMP%_screenshot-pan;animation-timing-function:cubic-bezier(.65,0,.35,1);transition:none}}@media(max-width:767.98px){.works-section[_ngcontent-%COMP%]{overflow:visible}.works-heading[_ngcontent-%COMP%]{justify-items:start;text-align:start}.works-heading[_ngcontent-%COMP%]   .section-kicker[_ngcontent-%COMP%]{justify-content:flex-start}.works-lede[_ngcontent-%COMP%]{margin-top:14px}.works-actions[_ngcontent-%COMP%]{gap:10px;margin-top:24px}.filter-controls[_ngcontent-%COMP%]{justify-content:flex-start;overflow-x:auto;flex-wrap:nowrap;margin-inline:calc(-1*clamp(14px,5vw,22px));padding-inline:clamp(14px,5vw,22px);scrollbar-width:none;-webkit-overflow-scrolling:touch}.filter-controls[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.filter-btn[_ngcontent-%COMP%]{flex:0 0 auto}}@media(max-width:575.98px){.works-heading[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:clamp(1.9rem,9vw,2.55rem);line-height:1.08}.works-lede[_ngcontent-%COMP%]{font-size:.88rem}.works-actions[_ngcontent-%COMP%], .work-contact[_ngcontent-%COMP%], .work-view-all[_ngcontent-%COMP%]{width:100%}.filter-btn[_ngcontent-%COMP%]{min-width:max-content;padding:0 8px;font-size:.68rem}.work-view-all[_ngcontent-%COMP%]{min-height:40px}.project-info[_ngcontent-%COMP%]{padding:18px}.project-showcase[_ngcontent-%COMP%]{max-width:100%;margin-top:28px;padding-bottom:24px}.project-card[_ngcontent-%COMP%]{width:100%}.project-info[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:first-child   .project-info[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:not(:first-child)   .project-info[_ngcontent-%COMP%]{gap:10px;padding:16px}.project-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;max-height:none}.project-category[_ngcontent-%COMP%], .live-pill[_ngcontent-%COMP%]{font-size:.68rem;white-space:normal;line-height:1.25}}@media(max-width:374.98px){.project-card[_ngcontent-%COMP%]{flex-basis:100%}.project-info[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:first-child   .project-info[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]:not(:first-child)   .project-info[_ngcontent-%COMP%]{padding:16px}}']})};export{Fi as a,Ni as b,Ig as c,m_ as d,__ as e,x_ as f,v_ as g};
