(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e007a8f"],{"231d":function(e,t,r){"use strict";var a=r("d4ec"),s=r("262e"),n=r("2caf"),c=r("3c5e"),i=function(e){Object(s["a"])(r,e);var t=Object(n["a"])(r);function r(){return Object(a["a"])(this,r),t.call(this,"/api/product")}return r}(c["a"]);t["a"]=i},"2d3c":function(e,t,r){e.exports=r.p+"media/01.39489f01.mp4"},"6a44":function(e,t,r){"use strict";var a=r("d4ec"),s=r("262e"),n=r("2caf"),c=r("3c5e"),i=function(e){Object(s["a"])(r,e);var t=Object(n["a"])(r);function r(){return Object(a["a"])(this,r),t.call(this,"/api/category")}return r}(c["a"]);t["a"]=i},"83fe":function(e,t,r){"use strict";r.r(t);var a,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[0==e.step?a("div",{staticClass:"start",on:{click:e.start}},[e._v("开始播放")]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"step === 1"}],staticClass:"contentContainer",class:{active:1===e.step}},[a("video",{ref:"v1",staticClass:"video",attrs:{src:r("2d3c")}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"step === 2"}],staticClass:"contentContainer",class:{active:2===e.step}},[a("div",{staticClass:"top"},[a("div",{staticClass:"text"},[a("h1",[e._v("新盛和阳果蔬生鲜市场今日菜价")]),a("div",{staticClass:"category"},e._l(e.allCategory,(function(t,r){return a("li",{key:r,class:{active:t==e.allCategory[e.currentCategoryIndex]}},[e._v(" "+e._s(t.name)+" "),t==e.allCategory[e.currentCategoryIndex]&&e.currentTotalPage>1?[e._v(" "+e._s(e.currentPage)+"/"+e._s(e.currentTotalPage)+" ")]:e._e()],2)})),0)])]),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"table table1"},[e._l(e.currentShowProducts,(function(t,r){return[e.isOdd(r)?e._e():a("div",{key:r,staticClass:"cell"},[a("div",{staticClass:"l"},[a("span",[e._v(e._s(t.name))])]),a("div",{staticClass:"m"}),a("div",{staticClass:"r"},[a("span",[e._v(e._s(t.price||"-")),a("i",[e._v(e._s(t.unit))])])])])]}))],2),a("div",{staticClass:"table table2"},[e._l(e.currentShowProducts,(function(t,r){return[e.isOdd(r)?a("div",{key:r,staticClass:"cell"},[a("div",{staticClass:"l"},[a("span",[e._v(e._s(t.name))])]),a("div",{staticClass:"m"}),a("div",{staticClass:"r"},[a("span",[e._v(e._s(t.price||"-")),a("i",[e._v(e._s(t.unit))])])])]):e._e()]}))],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:3===e.step,expression:"step === 3"}],staticClass:"contentContainer",class:{active:3===e.step}},[a("video",{ref:"v2",staticClass:"video",attrs:{src:r("ca14")}})])])},n=[],c=(r("a630"),r("a434"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("1da1")),i=r("6a44"),o=r("231d"),u=5e3,l=new i["a"],d=new o["a"],v={created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getCategory();case 2:return t.next=4,e.getProducts();case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;this.$nextTick((function(){e.$refs.v1.addEventListener("ended",(function(){e.step++,e.startLoop(),e.showNext(0)})),e.$refs.v2.addEventListener("ended",(function(){e.step=1,e.$refs.v1.play()}))}))},data:function(){return{step:0,allCategory:[],allProducts:[],currentCategoryIndex:0,currentShowProducts:[],currentTotalPage:0,currentPage:0,loopTime:0,playstart:!1}},methods:{start:function(){this.fullscreen(),this.step=1,this.playstart=!0,this.$refs.v1.play()},getCategory:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.getAll();case 2:r=t.sent,e.allCategory=r.rows;case 4:case"end":return t.stop()}}),t)})))()},getProducts:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.allProducts=[],t.t0=regeneratorRuntime.keys(e.allCategory);case 2:if((t.t1=t.t0()).done){t.next=11;break}return r=t.t1.value,a={category_id:e.allCategory[r].id},t.next=7,d.get(a);case 7:s=t.sent,e.allProducts.push(s.rows),t.next=2;break;case 11:case"end":return t.stop()}}),t)})))()},startLoop:function(){var e=this,t=this.allCategory.length;clearInterval(a),a=setInterval((function(){e.currentPage==e.currentTotalPage&&(e.currentCategoryIndex++,e.currentPage=0,e.currentCategoryIndex>=t&&(e.currentCategoryIndex=0,e.loopTime++,e.loopTime>=2&&(e.loopTime=0,clearInterval(a),e.step=3,e.$refs.v2.play()))),e.showNext(e.currentCategoryIndex)}),u)},showProduct:function(){var e=this.cutBy(this.allProducts[this.currentCategoryIndex],20);this.currentTotalPage=e.length},cutBy:function(e,t){e=Array.from(e);var r=[];while(0!==e.length){var a=e.splice(0,t);r.push(a)}return r},isOdd:function(e){return e%2===1},showNext:function(e){var t=this.cutBy(this.allProducts[e],20);this.currentTotalPage=t.length,this.currentCategoryIndex==e?(this.currentPage++,this.currentPage>this.currentTotalPage&&(this.currentPage=1)):(this.currentCategoryIndex=e,this.currentPage=1),this.currentShowProducts=t[this.currentPage-1]},beforeClose:function(){this.startLoop()},fullscreen:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullScreen()}}},p=v,h=(r("9bf3"),r("2877")),f=Object(h["a"])(p,s,n,!1,null,"1987c552",null);t["default"]=f.exports},"9bf3":function(e,t,r){"use strict";var a=r("eb14"),s=r.n(a);s.a},ca14:function(e,t,r){e.exports=r.p+"media/02.3ffd372d.mp4"},eb14:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0e007a8f.00364e59.js.map