(function(){"use strict";var t={3574:function(t,e,n){var r=n(9242),o=n(3396),a=n(4870),i=n(7139),u=n(2483);const c=t=>((0,o.dD)("data-v-641a791f"),t=t(),(0,o.Cn)(),t),s={class:"my-nav"},l={class:"navbar bg-dark border-bottom border-body navbar-expand","data-bs-theme":"dark"},f={class:"container"},d=c((()=>(0,o._)("h2",{class:"navbar-brand"},"Todos List",-1))),p=c((()=>(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1))),v={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m={class:"navbar-nav mx-auto mb-2 mb-lg-0"};var b={__name:"MyNav",setup(t){const e=(0,u.tv)();return(t,n)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("nav",l,[(0,o._)("div",f,[d,p,(0,o._)("div",v,[(0,o._)("ul",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,a.SU)(e).options.routes,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"nav-item",key:t.name},["notFound"!==t.name?((0,o.wg)(),(0,o.j4)(r,{key:0,class:"nav-link text-capitalize",to:{name:t.name}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.meta.title),1)])),_:2},1032,["to"])):(0,o.kq)("",!0)])))),128))])])])])])}}},h=n(89);const g=(0,h.Z)(b,[["__scopeId","data-v-641a791f"]]);var y=g,w={__name:"App",setup(t){return(t,e)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(y),(0,o.Wm)(n)],64)}}};const _=w;var k=_;const C={class:"Not-found"},O=(0,o._)("p",null,"Not found",-1),S=[O];function j(t,e){return(0,o.wg)(),(0,o.iD)("div",C,S)}const N={},T=(0,h.Z)(N,[["render",j]]);var x=T;const E=[{path:"/",name:"home",component:()=>n.e(450).then(n.bind(n,2450)),meta:{title:"home"}},{path:"/show-todos",name:"ShowTodos",component:()=>n.e(762).then(n.bind(n,1762)),meta:{title:"show todos "}},{path:"/:pathMatch(.*)*",name:"notFound",component:x}],A=(0,u.p7)({history:(0,u.PO)(),routes:E});var P=A,D=n(1417);n(3455);(0,r.ri)(k).use(P,D.ZP).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{450:"429e68f5",762:"3e842c29"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".b6ec53b2.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="todo-list:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return o();t(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={450:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3574)}));r=n.O(r)})();
//# sourceMappingURL=app.da0000bc.js.map