(function(e){function n(n){for(var r,u,a=n[0],f=n[1],i=n[2],l=0,d=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);h&&h(n);while(d.length)d.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),e=f(f.s=t[0]))}return e}var r={},u={app:0},o={app:0},c=[];function a(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-6b26d21c":"e24b2851","chunk-7bdf2f56":"cf55be57","chunk-058df403":"7ed46099","chunk-0e007a8f":"00364e59","chunk-18e97de2":"a0918cc4","chunk-24c663f2":"c8efa7c7","chunk-28ee308e":"f99803a9","chunk-32951e60":"688546df"}[e]+".js"}function f(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-6b26d21c":1,"chunk-058df403":1,"chunk-0e007a8f":1,"chunk-18e97de2":1,"chunk-24c663f2":1,"chunk-28ee308e":1,"chunk-32951e60":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-6b26d21c":"ab8d6eaf","chunk-7bdf2f56":"31d6cfe0","chunk-058df403":"311c207d","chunk-0e007a8f":"a3c51a46","chunk-18e97de2":"0e433876","chunk-24c663f2":"0e433876","chunk-28ee308e":"0e433876","chunk-32951e60":"0e433876"}[e]+".css",o=f.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var i=c[a],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){i=d[a],l=i.getAttribute("data-href");if(l===r||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],h.parentNode.removeChild(h),t(c)},h.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,f.nc&&l.setAttribute("nonce",f.nc),l.src=a(e);var d=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",d.name="ChunkLoadError",d.type=r,d.request=u,t[1](d)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},f.m=e,f.c=r,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)f.d(t,r,function(n){return e[n]}.bind(null,r));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var h=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2268:function(e,n,t){"use strict";var r=t("9772"),u=t.n(r);u.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c=(t("2268"),t("2877")),a={},f=Object(c["a"])(a,u,o,!1,null,"38f96f4a",null),i=f.exports,l=(t("d3b7"),t("8c4f"));r["default"].use(l["a"]);var d=[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-7bdf2f56"),t.e("chunk-058df403")]).then(t.bind(null,"6511"))}},{path:"/show",name:"show",component:function(){return Promise.all([t.e("chunk-7bdf2f56"),t.e("chunk-0e007a8f")]).then(t.bind(null,"83fe"))}},{path:"/admin",name:"admin",component:function(){return t.e("chunk-6b26d21c").then(t.bind(null,"2953"))},children:[{path:"category",name:"分类",component:function(){return Promise.all([t.e("chunk-7bdf2f56"),t.e("chunk-32951e60")]).then(t.bind(null,"d7ba"))}},{path:"product",name:"菜品",component:function(){return Promise.all([t.e("chunk-7bdf2f56"),t.e("chunk-28ee308e")]).then(t.bind(null,"63ca"))}},{path:"supplier",name:"供应商",component:function(){return Promise.all([t.e("chunk-7bdf2f56"),t.e("chunk-24c663f2")]).then(t.bind(null,"5aad"))}},{path:"channel",name:"进货渠道",component:function(){return Promise.all([t.e("chunk-7bdf2f56"),t.e("chunk-18e97de2")]).then(t.bind(null,"eae8"))}}]}],h=new l["a"]({mode:"hash",routes:d}),s=h,p=(t("d671"),t("5c96")),m=t.n(p);t("0fae");r["default"].use(m.a),r["default"].config.productionTip=!1,new r["default"]({router:s,render:function(e){return e(i)}}).$mount("#app")},9772:function(e,n,t){},d671:function(e,n,t){}});
//# sourceMappingURL=app.f530c503.js.map