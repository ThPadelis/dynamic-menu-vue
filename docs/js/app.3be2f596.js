(function(e){function n(n){for(var o,i,u=n[0],l=n[1],c=n[2],s=0,m=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(n);while(m.length)m.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={app:0},a=[];function i(e){return u.p+"js/"+({about:"about",home:"home","home-sub-view-1":"home-sub-view-1","home-sub-view-2":"home-sub-view-2",navbar:"navbar","not-found":"not-found","menu-item":"menu-item"}[e]||e)+"."+{about:"84b6ea23",home:"cd83d97f","home-sub-view-1":"6d440edf","home-sub-view-2":"dd5e1139",navbar:"76c19e84","not-found":"763c189c","menu-item":"dbd3cddb"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var c=new Error;a=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,t[1](c)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/dynamic-menu-vue/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row min-vh-100"},[t("div",{staticClass:"col-sm-12 col-md-3 col-lg-3 col-xl-3 border-right"},[t("navbar")],1),t("div",{staticClass:"col-sm-12 col-md-9 col-lg-9 col-xl-9"},[t("router-view")],1)])])},a=[],i={name:"app",components:{Navbar:()=>t.e("navbar").then(t.bind(null,"8312"))}},u=i,l=t("2877"),c=Object(l["a"])(u,r,a,!1,null,null,null),s=c.exports,d=t("8c4f");o["a"].use(d["a"]);var m=new d["a"]({mode:"history",base:"/dynamic-menu-vue/",routes:[{path:"/",redirect:{path:"/home"},meta:{visible:!1}},{path:"/home",name:"home",component:()=>t.e("home").then(t.bind(null,"bb51")),meta:{visible:!0},children:[{path:"sub-view-1",name:"What is Lorem Ipsum?",component:()=>t.e("home-sub-view-1").then(t.bind(null,"fb38")),meta:{visible:!0}},{path:"sub-view-2",name:"Why do we use it?",component:()=>t.e("home-sub-view-2").then(t.bind(null,"f4f0")),meta:{visible:!0}}]},{path:"/about",name:"about",component:()=>t.e("about").then(t.bind(null,"f820")),meta:{visible:!0}},{path:"*",name:"not-found",component:()=>t.e("not-found").then(t.bind(null,"9703")),meta:{visible:!1}}]});t("f843");o["a"].config.productionTip=!1,new o["a"]({router:m,render:e=>e(s)}).$mount("#app")},f843:function(e,n,t){}});
//# sourceMappingURL=app.3be2f596.js.map