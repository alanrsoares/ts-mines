(this["webpackJsonpts-mines"]=this["webpackJsonpts-mines"]||[]).push([[0],{14:function(e,n,t){"use strict";var r=t(1),a=t(5);function c(){var e=Object(r.a)(["\n    0% {\n      transform: scale(0.1);\n      opacity: 0.1;\n    }\n  "]);return c=function(){return e},e}var l={primary:"#FFD400",secondary:"#F00",positive:"#49C04A",negative:"#D03930",neutral:"#AAA",light:"#ABE0F9",muted:"#EAEAEA",hotpink:"#FC8BA4",black:"#333",white:"#FFF",gray:"#CCC",dark:"#666",shadow:"rgba(0, 0, 0, 0.4)"},i={colors:l,radii:{default:"0.2em",sm:"0.1em",md:"0.2em",lg:"0.3em",xl:"0.4em",xxl:"0.6em",xxxl:"1em",round:"50%"},fontSizes:{default:18,sm:14.4,md:18,lg:18*1.2},fontFamilies:{display:"'Black Ops One', cursive",default:"'Lato', sans-serif",voice:"'Vollkorn', serif"},shadows:{default:"0 1px 2px ".concat(l.shadow),inset:"inset 1px 0 2px",top:"0 -2px 6px ".concat(l.shadow),none:"none"},animations:{appear:Object(a.d)(c())}};n.a=i},18:function(e){e.exports=JSON.parse('{"a":"1.0.12"}')},21:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return b}));var r=t(4),a=t.n(r),c=t(7),l=t(0);function i(e,n){for(var t=e.split(/\./g),r=n.split(/\./g);t.length||r.length;){var a=Number(t.shift()),c=Number(r.shift());if(a!==c)return a>c||isNaN(c)}return!1}var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){throw new Error("Timeout exceeded")};return(function(){var t=Object(c.a)(a.a.mark((function t(r){var c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=window.setTimeout(n,e),t.next=3,fetch(r);case 3:return l=t.sent,window.clearTimeout(c),t.abrupt("return",l);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};function u(){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.caches){e.next=7;break}return e.next=3,window.caches.keys();case 3:return n=e.sent,t=n.map((function(e){return window.caches.delete(e)})),e.next=7,Promise.all(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function n(){var t,r,c,l,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o(5e3,(function(){throw new Error("Timout reached while fetching meta.json")})),n.next=4,t("meta.json?t=".concat(Date.now()));case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,l=c.version,u=e.appVersion,n.abrupt("return",i(l,u));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){window.location.reload(!0)}function v(){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:window.setTimeout(m,300),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Failed to purge cache",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:if(!e.sent||!window.confirm("A new version is available, would you like to update?")){e.next=7;break}return e.next=7,v();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Failed to check for updates:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18e5;Object(l.useEffect)((function(){p();var n=window.setInterval(p,e);return function(){window.clearInterval(n)}}),[e])}}).call(this,t(11))},22:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");r?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):c(e)}))}}function c(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}},23:function(e,n,t){"use strict";var r=t(6),a=t(8),c=t(0),l=t.n(c),i=t(25),o=t(19),u=t(20),f=function(e,n){return!function(e,n,t){return t>=e&&t<n}(0,n,e)},s=function(e,n){return f(e.row,n.rows)||f(e.column,n.columns)},d=function(){function e(n,t){Object(o.a)(this,e),this._dimensions={rows:0,columns:0},this._grid=[];for(var r=[],a=0;a<n.rows;a++){for(var c=[],l=0;l<n.columns;l++){var i="function"===typeof t?t({row:a,column:l}):t;c.push({row:a,column:l,value:i})}r.push(c)}return this._dimensions=n,this._grid=r,this}return Object(u.a)(e,[{key:"withSeed",value:function(e){return this._grid=e,this}},{key:"updateCell",value:function(e,n){var t=e.row,r=e.column,a=this.getCell({row:t,column:r}),c="function"===typeof n?n({row:t,column:r},a.value):n;return this._grid[t][r]={row:t,column:r,value:c},this}},{key:"getCell",value:function(e){var n=e.row,t=e.column;if(!s({row:n,column:t},this._dimensions))return this._grid[n][t];throw new Error("Invalid cell coordinates: row: ".concat(n,"; column: ").concat(t))}},{key:"getCellNeighbours",value:function(e){var n=this,t=e.row,r=e.column;return[{row:t-1,column:r-1},{row:t-1,column:r},{row:t-1,column:r+1},{row:t,column:r-1},{row:t,column:r+1},{row:t+1,column:r-1},{row:t+1,column:r},{row:t+1,column:r+1}].filter((function(e){return!s(e,n._dimensions)})).map((function(e){return n.getCell(e)}))}},{key:"map",value:function(n){var t=this,a=this._grid.map((function(e){return e.map((function(e){return Object(r.a)({},e,{value:n(e.value,e,t)})}))}));return e.from(a)}},{key:"filter",value:function(n){var t=this,r=this._grid.map((function(e){return e.filter((function(e){return n(e.value,e,t)}))}));return e.from(r)}},{key:"snapshot",get:function(){return this._grid.slice()}}],[{key:"make",value:function(n,t){return new e(n,t)}},{key:"from",value:function(n){var t=n.length,r=n[0].length;return e.make({rows:t,columns:r},void 0).withSeed(n)}}]),e}(),m=t(26),v=function(e){return Object(m.a)("revealed",!0,e)},h=function(e){return"mine"===e.kind?v(e):e},p=function(e){return"mine"===e.value.kind},g=function(e,n){return d.make(e,(function(){return{kind:Math.random()>=n/100?"mine":"empty",surroundingMines:0,revealed:!1}})).map((function(e,n,t){if("mine"!==e.kind){var a=t.getCellNeighbours(n).filter(p).length;return Object(r.a)({},e,{surroundingMines:a,kind:a?"empty":"safe"})}return e}))},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t="".concat("@MINES").concat(n);localStorage.setItem(t,JSON.stringify(e))},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t="".concat("@MINES").concat(n),r=localStorage.getItem(t);return null!==r?JSON.parse(r):e},y=t(21);function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function O(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var j=l.a.createElement("defs",null),x=l.a.createElement("path",{fill:"#dbd9dc",d:"M249 0A243 243 0 0017 244v144c0 32 25 58 57 58h42c9 0 16 7 16 16v25c0 14 11 25 25 25h198c14 0 25-11 25-25v-25c0-9 7-16 16-16h42c32 0 57-26 57-58V239C495 105 385-4 249 0z"}),k=l.a.createElement("path",{fill:"#c9c6ca",d:"M140 421c-22 0-41-18-41-41V244C99 126 184 24 297 4c-21-4-44-5-67-3A243 243 0 0017 244v144c0 32 25 58 57 58h42c9 0 16 7 16 16v25c0 14 11 25 25 25h25v-50c0-22-19-41-42-41z"}),z=l.a.createElement("g",{fill:"#867e88"},l.a.createElement("path",{d:"M248 365l-26 63c-3 7 4 13 11 11l17-7c4-2 8-2 12 0l17 7c7 2 14-4 11-11l-26-63c-3-7-13-7-16 0z"}),l.a.createElement("circle",{cx:148.7,cy:289,r:74.3})),M=l.a.createElement("path",{fill:"#6f6571",d:"M149 248c35 0 65 24 72 58a74 74 0 10-145 0c8-34 37-58 73-58z"}),C=l.a.createElement("circle",{cx:363.4,cy:289,r:74.3,fill:"#867e88"}),S=l.a.createElement("g",{fill:"#6f6571"},l.a.createElement("path",{d:"M363 248c36 0 65 24 73 58a74 74 0 10-145 0c7-34 37-58 72-58zM238 401a49 49 0 0136 0l6 2-16-38c-3-7-13-7-16 0l-16 38 6-2z"})),R=l.a.createElement("g",{fill:"#c9c6ca"},l.a.createElement("path",{d:"M223 512h-17v-25c0-4 4-8 9-8 4 0 8 4 8 8v25zM306 512h-17v-25c0-4 4-8 8-8 5 0 9 4 9 8v25zM347 512h-17v-25c0-4 4-8 9-8 4 0 8 4 8 8v25zM264 512h-16v-25c0-4 3-8 8-8s8 4 8 8v25z"})),P=l.a.createElement("path",{fill:"#b7b2b8",d:"M182 512h-17v-25c0-4 4-8 8-8 5 0 9 4 9 8v25z"}),A=function(e){var n=e.svgRef,t=e.title,r=O(e,["svgRef","title"]);return l.a.createElement("svg",E({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,j,x,k,z,M,C,S,R,P)},I=l.a.forwardRef((function(e,n){return l.a.createElement(A,E({svgRef:n},e))}));t.p;function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function T(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var _=l.a.createElement("defs",null),B=l.a.createElement("circle",{cx:256,cy:256,r:256,fill:"#ffe17d"}),F=l.a.createElement("g",{fill:"#ffd164"},l.a.createElement("path",{d:"M293 475A256 256 0 0195 57a255 255 0 10360 360c-44 36-101 58-162 58z"}),l.a.createElement("path",{d:"M182 512c9 0 16-7 16-17 0-9-7-16-16-16h8c9 0 16-7 16-17 0-9-7-16-16-16h8c9 0 17-7 17-17 0-9-8-16-17-16h91c9 0 17-7 17-17 0-9-8-16-17-16H140c-13 0-24-11-24-25v-49c0-10-8-17-17-17s-16 7-16 17v40c0 11-4 22-11 31l-8 10c-9 11-14 26-14 41v34c0 28 22 50 49 50h83z"})),V=l.a.createElement("g",{fill:"#ffc350"},l.a.createElement("path",{d:"M198 495H99c-18 0-33-14-33-33v-34c0-11 4-22 11-31l8-10c9-11 14-26 14-41v-57c-9 0-16 7-16 17v40c0 11-4 22-11 31l-8 10c-9 11-14 26-14 41v34c0 28 22 50 49 50h83c9 0 16-7 16-17zM306 396H190a8 8 0 100 17h99c9 0 17-7 17-17zM173 438c0 4 4 8 9 8h16c9 0 17-7 17-17h-33c-5 0-9 4-9 9z"}),l.a.createElement("path",{d:"M165 471c0 4 4 8 8 8h17c9 0 16-7 16-17h-33c-4 0-8 4-8 9z"})),H=l.a.createElement("g",{fill:"#aa7346"},l.a.createElement("path",{d:"M297 341l-4-1c-1-1-58-29-120-30-6 0-10-5-10-11s5-10 10-10c68 2 126 31 129 32a10 10 0 01-5 20zM190 134l-6-2c-2-1-38-29-80-7a10 10 0 01-10-19c55-27 100 8 102 10a10 10 0 01-6 18zM306 151a10 10 0 01-2-21l82-16a10 10 0 114 20l-82 17h-2z"})),L=l.a.createElement("path",{fill:"#7d5046",d:"M152 208c-11-1-19-12-18-23l2-16c1-12 12-20 23-18 11 1 19 11 18 23l-2 16c-1 11-12 19-23 18z"}),J=l.a.createElement("path",{fill:"#9c6846",d:"M159 151h-4l-4 28a12 12 0 1025 3l1-8c1-12-7-22-18-23z"}),W=l.a.createElement("path",{fill:"#7d5046",d:"M325 226c-11-1-19-12-18-23l2-16c1-12 12-20 23-18 11 1 19 11 18 23l-2 16c-1 11-12 19-23 18z"}),D=l.a.createElement("path",{fill:"#9c6846",d:"M332 169h-4l-4 28a12 12 0 1025 3l1-8c1-12-7-22-18-23z"}),G=function(e){var n=e.svgRef,t=e.title,r=T(e,["svgRef","title"]);return l.a.createElement("svg",N({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,_,B,F,V,H,L,J,W,D)},Q=l.a.forwardRef((function(e,n){return l.a.createElement(G,N({svgRef:n},e))}));t.p;function U(){return(U=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function $(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var q=l.a.createElement("defs",null),K=l.a.createElement("circle",{cx:256,cy:256,r:256,fill:"#ffe17d"}),X=l.a.createElement("g",{fill:"#ffd164"},l.a.createElement("ellipse",{cx:156.9,cy:247.7,rx:74.3,ry:66.1}),l.a.createElement("ellipse",{cx:355.1,cy:247.7,rx:74.3,ry:66.1}),l.a.createElement("path",{d:"M293 475A256 256 0 0195 57a255 255 0 10360 360c-44 36-101 58-162 58z"})),Y=l.a.createElement("path",{fill:"#5a4650",d:"M229 229l-13-10a49 49 0 0180 0l-13 9a33 33 0 00-54 1z"}),Z=l.a.createElement("path",{fill:"#6e5a64",d:"M157 165c-9 0-18 2-27 5-7 2-14 3-22 3H74c-4 0-8 4-8 9v16c0 5 3 10 7 13l2 2c5 3 8 8 8 14v4c0 37 33 66 74 66s74-29 74-66-33-66-74-66z"}),ee=l.a.createElement("g",{fill:"#aa7346"},l.a.createElement("path",{d:"M256 398c-42 0-83-20-107-53a10 10 0 0116-13 113 113 0 00182 0 10 10 0 1116 13c-24 33-64 53-107 53zM182 151h-50a10 10 0 110-21h50a10 10 0 110 21zM380 151h-50a10 10 0 110-21h50a10 10 0 110 21z"})),ne=l.a.createElement("path",{fill:"#5a4650",d:"M157 281c-32 0-58-22-58-50 0-27 26-49 58-49s58 22 58 49c0 28-26 50-58 50z"}),te=l.a.createElement("path",{fill:"#84737b",d:"M157 206c22 0 41 6 56 14-6-22-29-38-56-38s-50 16-56 38c14-8 34-14 56-14z"}),re=l.a.createElement("path",{fill:"#6e5a64",d:"M281 231c0 37 33 66 74 66s74-29 74-66v-4c0-6 3-11 8-14l2-2c4-3 7-8 7-13v-16c0-5-4-9-8-9h-34c-8 0-15-1-22-3-9-3-18-5-27-5-41 0-74 30-74 66z"}),ae=l.a.createElement("path",{fill:"#5a4650",d:"M297 231c0-27 26-49 58-49s58 22 58 49c0 28-26 50-58 50s-58-22-58-50z"}),ce=l.a.createElement("path",{fill:"#84737b",d:"M355 206c-22 0-41 6-56 14 6-22 29-38 56-38s50 16 56 38c-14-8-34-14-56-14z"}),le=function(e){var n=e.svgRef,t=e.title,r=$(e,["svgRef","title"]);return l.a.createElement("svg",U({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,q,K,X,Y,Z,ee,ne,te,re,ae,ce)},ie=l.a.forwardRef((function(e,n){return l.a.createElement(le,U({svgRef:n},e))})),oe=(t.p,t(1)),ue=t(5),fe=(ue.e,function(e){return function(n){return function(t){var r="function"===typeof n?n(t):n;return t.theme[e][r]}}}),se=fe("colors"),de=fe("radii"),me=(fe("fontSizes"),fe("shadows")),ve=fe("fontFamilies"),he=fe("animations"),pe=(ue.b,ue.c);function ge(){var e=Object(oe.a)(["\n  display: flex;\n  max-width: calc(100vw - 1em);\n  max-height: calc(100vh - 7em);\n  margin-top: 1em;\n  margin-bottom: 1em;\n  -ms-overflow-style: none;\n  @media screen and (max-height: ",") {\n    overflow: scroll;\n  }\n  @media screen and (max-width: ",") {\n    overflow: scroll;\n  }\n"]);return ge=function(){return e},e}function be(){var e=Object(oe.a)(["\n  background: ",";\n  box-shadow: ",";\n  border-radius: 50%;\n  width: 2.8em;\n  height: 2.8em;\n  margin-top: 0.8em;\n  padding: 0.4em;\n"]);return be=function(){return e},e}function we(){var e=Object(oe.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: row-reverse;\n"]);return we=function(){return e},e}function ye(){var e=Object(oe.a)(["\n  font-family: ",";\n  color: ",";\n  font-size: 3em;\n  display: flex;\n  flex: 1;\n"]);return ye=function(){return e},e}function Ee(){var e=Object(oe.a)(["\n  display: flex;\n  width: ",";\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  @media screen and (max-width: ",") {\n    width: 100vw;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(oe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 3em;\n  background: ",";\n  box-shadow: ",";\n"]);return Oe=function(){return e},e}function je(){var e=Object(oe.a)(["\n  font-family: ",";\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  background: ",";\n"]);return je=function(){return e},e}var xe=pe.div(je(),ve("default"),se("muted")),ke=pe.div(Oe(),se("black"),me("default")),ze=pe.div(Ee(),"1151.42px","1151.42px"),Me=pe.div(ye(),ve("display"),se("primary")),Ce=pe.div(we()),Se=pe.div(be(),se("shadow"),me("default")),Re=pe.div(ge(),"893px","1151.42px");function Pe(){return(Pe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ae(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Ie=l.a.createElement("defs",null),Ne=l.a.createElement("path",{fill:"#555656",d:"M456 260c0 107-89 193-198 193-34 0-67-8-96-25-63-33-102-97-102-168 0-106 89-192 198-192a193 193 0 01198 192z"}),Te=l.a.createElement("path",{fill:"#717272",d:"M413 243a196 196 0 01-251 185C99 395 60 331 60 260c0-106 89-192 198-192 18 0 36 2 53 7 63 33 102 98 102 168z"}),_e=l.a.createElement("g",{fill:"#a8a5a4"},l.a.createElement("path",{d:"M60 260v5c0 4-7 5-16 3l-29-7c-9-3-9-7 0-9l29-7c10-3 17 1 16 9v6zM468 268c-9 2-16 1-16-4v-11c0-7 6-11 16-9l29 8c9 2 9 6 0 8l-29 8zM282 111a12 12 0 01-13 16h-35a12 12 0 01-13-16l7-26 9-33 10-37c3-9 7-9 9 0l10 37 8 33 8 26zM153 151a12 12 0 013 21l-25 24a13 13 0 01-21-2l-12-21-17-29-21-36c-5-8-2-11 6-6l32 18 30 17 25 14zM441 102c9-5 11-2 6 6l-19 32-17 29-14 25a13 13 0 01-21 2l-25-25a12 12 0 013-20l28-16 30-17 29-16zM269 385a12 12 0 0113 16l-10 35-8 33-8 28c-3 9-7 9-9 0l-7-28-9-34-9-34a12 12 0 0112-16h35zM156 340a12 12 0 01-3 21l-30 17-30 17-27 15c-9 5-11 2-6-6l18-31 17-30 15-25a13 13 0 0121-2l25 24zM447 404c5 8 2 11-6 6l-24-13-29-17-35-20a12 12 0 01-2-20l25-24a13 13 0 0121 3l17 29 17 29 16 27z"})),Be=l.a.createElement("path",{d:"M51 277l-9-1-29-7c-11-3-13-9-13-13s2-10 13-13l29-7c7-3 15-1 20 3s7 9 6 15v11c0 3-1 7-4 9-4 3-8 4-13 3zm-18-21l13 3 5 1v-8h-4l-14 4zM460 277c-4 1-8-1-12-3-3-3-5-6-4-10v-11c-1-5 1-10 6-14s13-5 20-3l29 7c11 3 13 9 13 13s-2 10-13 13l-29 7-10 1zm0-13h1-1zm2-12h-2v8l6-1 13-3-14-4h-3z"}),Fe=l.a.createElement("path",{d:"M268 462a9 9 0 01-9-11l16-58h-47l15 57a9 9 0 01-9 11c-51-6-99-30-133-69a9 9 0 013-13l50-29-33-33-27 45c-1 3-4 5-7 5-3-1-6-2-7-5-17-27-26-58-28-89v-13a184 184 0 0130-106c2-3 5-4 8-4s5 2 7 4l24 41 33-33-45-26a9 9 0 01-2-13c33-35 77-57 125-63a9 9 0 019 11l-13 48h47l-13-49a9 9 0 019-11c50 4 97 26 132 62a9 9 0 01-1 13l-49 28 33 33 26-45a9 9 0 0115 0 198 198 0 0134 110l-1 13c-2 33-12 66-30 94a9 9 0 01-15 0l-29-49-33 32 54 31a9 9 0 012 13c-36 40-87 64-141 67v1zm-51-86h69a9 9 0 019 11l-15 56c41-5 79-23 109-53l-54-30a9 9 0 01-2-14l49-48a9 9 0 0114 1l27 46c12-23 19-48 20-73v-12l-1-19c-2-25-10-48-22-70l-25 42a9 9 0 01-13 2l-49-49a9 9 0 012-14l48-27c-28-26-63-42-101-47l13 47a9 9 0 01-9 11h-69a9 9 0 01-9-11l13-46c-35 7-68 23-94 47l46 26a9 9 0 012 14l-50 48a9 9 0 01-13-2l-22-37a178 178 0 00-21 85v11c1 24 8 48 18 69l25-41a9 9 0 0113-2l49 49a9 9 0 01-2 13l-51 29c28 28 63 47 102 53l-15-54a9 9 0 019-11z"}),Ve=l.a.createElement("path",{d:"M269 136h-35a21 21 0 01-21-27l26-96c3-11 8-13 13-13 4 0 9 2 13 13l25 96a21 21 0 01-21 27zM252 32l-23 81a4 4 0 005 6h35a4 4 0 005-6l-22-81zM121 209h-2c-7-1-13-5-16-11l-51-86c-5-9-3-15 0-18s8-5 18 0l88 50a21 21 0 014 34l-25 24c-4 5-10 7-16 7zm-46-93l43 73a4 4 0 007 1l25-24a4 4 0 00-1-7l-74-43zM386 209c-6 0-12-2-16-7l-25-24a21 21 0 014-34l88-50c10-6 15-3 18 0s5 9 0 18l-51 86c-3 6-9 10-16 11h-2zm46-93l-74 43a4 4 0 00-1 7l25 24a4 4 0 007-1l43-73zM252 512c-5 0-10-2-13-13l-26-96a21 21 0 0121-27h35a21 21 0 0121 27l-25 96c-4 11-9 13-13 13zm-18-119a4 4 0 00-5 6l23 81 22-81a4 4 0 00-5-6h-35zM60 421c-3 0-6-1-8-3-3-3-5-9 0-18l51-86a21 21 0 0134-5l25 25a21 21 0 01-5 34l-87 50c-3 2-7 3-10 3zm62-101c-2 0-3 1-4 3l-43 72 75-42a4 4 0 001-7l-25-24c-1-2-3-2-5-2h1zM447 421c-3 0-7-1-10-3l-88-50a21 21 0 01-4-34l25-25a21 21 0 0134 5l50 86c6 9 4 15 1 18-2 2-5 3-8 3zm-61-101l-4 2-25 24a4 4 0 001 7l74 43-43-73c0-2-1-3-3-3z"}),He=l.a.createElement("ellipse",{cx:251.6,cy:256,fill:"#bdbdbd",rx:34.9,ry:34.3}),Le=l.a.createElement("path",{d:"M252 299zm0-69a26 26 0 101 52 26 26 0 00-1-52zM69 247h148v17H69zM290 247h153v17H290zM243 127h17v94h-17zM243 290h17v94h-17z"}),Je=function(e){var n=e.svgRef,t=e.title,r=Ae(e,["svgRef","title"]);return l.a.createElement("svg",Pe({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,Ie,Ne,Te,_e,Be,Fe,Ve,He,Le)},We=l.a.forwardRef((function(e,n){return l.a.createElement(Je,Pe({svgRef:n},e))}));t.p;function De(){return(De=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ge(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Qe=l.a.createElement("defs",null),Ue=l.a.createElement("path",{fill:"#fc644f",d:"M389 271l121 163c-91 30-300 24-381-18V126c80 41 290 49 381 18L389 271z"}),$e=l.a.createElement("path",{fill:"#f1543f",d:"M129 415l65-32-48-145-17 24z"}),qe=l.a.createElement("path",{fill:"#ff7058",d:"M41 47v289s75-20 152 46V94C116 27 41 47 41 47z"}),Ke=l.a.createElement("path",{fill:"#40596b",d:"M32 0C16 0 2 13 2 29v483h59V29C61 13 48 0 32 0z"}),Xe=function(e){var n=e.svgRef,t=e.title,r=Ge(e,["svgRef","title"]);return l.a.createElement("svg",De({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,Qe,Ue,$e,qe,Ke)},Ye=l.a.forwardRef((function(e,n){return l.a.createElement(Xe,De({svgRef:n},e))}));t.p;function Ze(){var e=Object(oe.a)(["\n  width: 1.6em;\n  height: 1.6em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: ",";\n  border-radius: ",";\n  margin: 0.2em;\n  padding: 0.2em;\n  background: ",";\n  transition: all 0.2s ease-in-out;\n  font-weight: bold;\n  user-select: none;\n  ",";\n"]);return Ze=function(){return e},e}function en(){var e=Object(oe.a)(["\n  width: 1.4em;\n  height: 1.4em;\n  animation: "," 0.2s ease-in-out;\n"]);return en=function(){return e},e}function nn(){var e=Object(oe.a)(["\n  width: 1.4em;\n  height: 1.4em;\n  animation: "," 0.2s ease-in-out;\n"]);return nn=function(){return e},e}var tn=pe(We)(nn(),he("appear")),rn=pe(Ye)(en(),he("appear")),an={0:"white",1:"blue",2:"green",3:"red",4:"darkblue",5:"darkgreen",6:"darkred",7:"purple",8:"darkpurple"},cn=pe.div(Ze(),me((function(e){return e.revealed?"none":"default"})),de("lg"),se((function(e){return e.revealed?"mine"===e.kind&&e.active?"negative":"white":"gray"})),(function(e){return"number"===typeof e.children?"color:  ".concat(an[e.children]):void 0})),ln=function(e){var n=Object(c.useMemo)((function(){if(e.flagged)return l.a.createElement(rn,null);if(!e.revealed||"safe"===e.kind)return null;switch(e.kind){case"empty":return e.surroundingMines;case"mine":return l.a.createElement(tn,null)}}),[e]);return l.a.createElement(cn,Object.assign({onClick:e.onClick},e,{active:e.active}),n)};function on(){var e=Object(oe.a)(["\n  display: flex;\n"]);return on=function(){return e},e}function un(){var e=Object(oe.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return un=function(){return e},e}var fn=pe.div(un()),sn=pe.div(on()),dn=function(e){var n=Object(c.useCallback)((function(n){return function(){return e.onTileClick(n)}}),[e]);return l.a.createElement(fn,null,e.grid.map((function(t,r){return l.a.createElement(sn,{key:r},t.map((function(t,r){var a,c;return l.a.createElement(ln,Object.assign({key:r},t.value,{active:t.row===(null===(a=e.activeCell)||void 0===a?void 0:a.row)&&t.column===(null===(c=e.activeCell)||void 0===c?void 0:c.column),onClick:n(t)}))})))})))};function mn(){var e=Object(oe.a)(["\n  color: ",";\n  margin-right: 0.3em;\n  font-size: 0.8em;\n  font-family: ",";\n"]);return mn=function(){return e},e}function vn(){var e=Object(oe.a)(["\n  font-family: ",";\n  font-weight: 700;\n  font-size: 1em;\n  border-radius: ",";\n  padding: 0.2em 0.4em;\n  background: ",";\n  color: ",";\n  border: solid 2px ",";\n  box-shadow: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return vn=function(){return e},e}var hn=pe.div(vn(),ve("display"),de("lg"),se("black"),se("primary"),se("primary"),me("default")),pn=pe.span(mn(),se("muted"),ve("display")),gn=function(e){return l.a.createElement(hn,null,l.a.createElement(pn,null,"score"),e.score)},bn=t(24);function wn(){return(wn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function yn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var En=l.a.createElement("defs",null),On=l.a.createElement("path",{d:"M256 5a257 257 0 00-81 501c13 3 18-5 18-12l-1-44c-71 16-86-34-86-34-12-30-28-38-28-38-24-16 1-16 1-16 26 2 39 27 39 27 23 39 60 28 75 21 2-16 9-28 16-34-57-7-116-29-116-127 0-28 10-51 26-69-3-7-11-33 3-68 0 0 21-7 70 26a244 244 0 01128 0c49-33 70-26 70-26 14 35 6 61 3 68 16 18 26 41 26 69 0 99-60 120-117 127 10 8 18 23 18 47v71c0 7 4 15 17 12A257 257 0 00256 5z"}),jn=function(e){var n=e.svgRef,t=e.title,r=yn(e,["svgRef","title"]);return l.a.createElement("svg",wn({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,En,On)},xn=l.a.forwardRef((function(e,n){return l.a.createElement(jn,wn({svgRef:n},e))}));t.p;function kn(){var e=Object(oe.a)(["\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  display: flex;\n  padding: 0.3em 0.4em;\n  width: 1.8em;\n  height: 1.8em;\n  overflow: hidden;\n  "," {\n    display: none;\n  }\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: ",";\n  font-weight: 700;\n  text-decoration: none;\n  :hover {\n    "," {\n      display: flex;\n      animation: "," 0.3s;\n    }\n    width: 12em;\n    border-radius: calc(1.8em);\n  }\n  transition: all 0.3s ease-in-out;\n  user-select: none;\n  outline: none;\n"]);return kn=function(){return e},e}function zn(){var e=Object(oe.a)(["\n  white-space: nowrap;\n"]);return zn=function(){return e},e}function Mn(){var e=Object(oe.a)(["\n  height: 1.6em;\n  width: 1.6em;\n"]);return Mn=function(){return e},e}var Cn=pe(xn)(Mn()),Sn=pe.div(zn()),Rn=pe.a(kn(),de("round"),se("secondary"),se("white"),Sn,me("default"),Sn,he("appear")),Pn=function(){return l.a.createElement(Rn,{target:"_blank",rel:"noreferrer",href:"https://github.com/alanrsoares/ts-mines","aria-label":"got to the project's github page"},l.a.createElement(Cn,null),l.a.createElement(Sn,null,"@alanrsoares/ts-mines"))};function An(){return(An=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function In(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Nn=l.a.createElement("defs",null),Tn=l.a.createElement("circle",{cx:256.3,cy:256,r:245,fill:"#fec753"}),_n=l.a.createElement("path",{fill:"#35528c",d:"M256 105C133 105 30 217 3 248c-4 5-4 11 0 16 27 31 130 143 253 143s226-112 253-143c4-5 4-11 0-16-27-31-130-143-253-143z"}),Bn=l.a.createElement("path",{fill:"#1f3a60",d:"M42 256c0-24 96-151 214-151C134 105 31 215 4 247c-5 5-5 13 0 18 27 32 130 142 252 142-118 0-214-127-214-151z"}),Fn=l.a.createElement("circle",{cx:256,cy:256,r:132,fill:"#99d3ff"}),Vn=l.a.createElement("path",{fill:"#5bb3ce",d:"M176 256c0-64 46-117 106-129a133 133 0 00-158 129 132 132 0 00158 129c-60-12-106-65-106-129z"}),Hn=l.a.createElement("circle",{cx:254.6,cy:256,r:65.6,fill:"#1f3a60"}),Ln=l.a.createElement("circle",{cx:308.1,cy:225.6,r:27.9,fill:"#dcf3ff"}),Jn=function(e){var n=e.svgRef,t=e.title,r=In(e,["svgRef","title"]);return l.a.createElement("svg",An({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,Nn,Tn,_n,Bn,Fn,Vn,Hn,Ln)},Wn=l.a.forwardRef((function(e,n){return l.a.createElement(Jn,An({svgRef:n},e))}));t.p;function Dn(){var e=Object(oe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 3em;\n  background: ",";\n  color: ",";\n  box-shadow: ",";\n  position: fixed;\n  bottom: 0;\n"]);return Dn=function(){return e},e}function Gn(){var e=Object(oe.a)(["\n  display: flex;\n"]);return Gn=function(){return e},e}function Qn(){var e=Object(oe.a)(["\n    border: none;\n    background-color: ",";\n    height: 2.1em;\n    width: 2.8em;\n    ","\n    box-shadow: ",";\n    outline: none;\n    transition: all .1s ease;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);return Qn=function(){return e},e}function Un(){var e=Object(oe.a)(["\n  border-radius: ",";\n  background-color: ",";\n  width: 1.4em;\n  height: 1.4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.1em;\n"]);return Un=function(){return e},e}function $n(){var e=Object(oe.a)(["\n  width: 1em;\n  height: 1em;\n"]);return $n=function(){return e},e}function qn(){var e=Object(oe.a)(["\n  width: 1em;\n  height: 1em;\n"]);return qn=function(){return e},e}var Kn=pe(Wn)(qn()),Xn=pe(Ye)($n()),Yn=pe.div(Un(),de("round"),se("gray")),Zn=pe.button(Qn(),(function(e){return e.active?se(e.color)(e):Object(bn.a)(.5,se(e.color)(e))}),(function(e){return"\n      border-top-".concat(e.side,"-radius: ").concat(e.theme.radii.xxxl,";\n      border-bottom-").concat(e.side,"-radius: ").concat(e.theme.radii.xxxl,";\n    ")}),me((function(e){return e.active?"inset":"default"}))),et=pe.div(Gn()),nt=pe.div(Dn(),se("dark"),se("white"),me("default")),tt=function(e){return l.a.createElement(nt,null,l.a.createElement(ze,null,l.a.createElement(Pn,null),l.a.createElement(et,null,l.a.createElement(Zn,{side:"left",color:"white",active:"flag"===e.gameMode,onClick:e.onToggleGameMode,"aria-label":"Toggle game mode"},l.a.createElement(Yn,null,l.a.createElement(Xn,null))),l.a.createElement(Zn,{side:"right",color:"white",active:"reveal"===e.gameMode,onClick:e.onToggleGameMode,"aria-label":"Toggle game mode"},l.a.createElement(Yn,null,l.a.createElement(Kn,null))))))};t.d(n,"a",(function(){return at}));var rt={new:l.a.createElement(Q,null),won:l.a.createElement(ie,null),over:l.a.createElement(I,null)};function at(){Object(y.a)();var e=Object(c.useState)(w(0,"/score")),n=Object(a.a)(e,2),t=n[0],o=n[1],u=Object(c.useState)(w("new","/gameStatus")),f=Object(a.a)(u,2),s=f[0],m=f[1],p=Object(c.useState)(w("reveal","/mode")),E=Object(a.a)(p,2),O=E[0],j=E[1],x=Object(c.useState)(w(void 0,"/activeCell")),k=Object(a.a)(x,2),z=k[0],M=k[1],C=Object(c.useState)(w(g({rows:20,columns:30},80).snapshot,"/grid")),S=Object(a.a)(C,2),R=S[0],P=S[1];Object(c.useEffect)((function(){b(t,"/score")}),[t]),Object(c.useEffect)((function(){b(s,"/gameStatus")}),[s]),Object(c.useEffect)((function(){b(R,"/grid")}),[R]),Object(c.useEffect)((function(){b(O,"/mode")}),[O]),Object(c.useEffect)((function(){z&&b(z,"/activeCell")}),[z]);var A=Object(c.useCallback)((function(e){if("over"!==s&&"won"!==s){M(e);var n=e.value;switch(O){case"flag":if(n.revealed)return;var t=d.from(R).updateCell(e,Object(r.a)({},n,{flagged:!n.flagged}));P(t.snapshot);break;case"reveal":if(n.flagged)return;if("mine"===n.kind){var a=d.from(R).map(h);return P(a.snapshot),void m("over")}var c=function e(n,t){var r=d.from(n),a=t.value;return r.updateCell(t,v(a)),"safe"!==a.kind?r:(r.getCellNeighbours(t).forEach((function(n){var t=n.value;if(!t.revealed)switch(t.kind){case"empty":r.updateCell(n,v(t));break;case"safe":return e(r.snapshot,n)}})),r)}(R,e).snapshot,l=Object(i.a)(c).filter((function(e){return e.value.revealed})).length;P(c),o(l)}}}),[R,s,O]),I=Object(c.useCallback)((function(){"over"===s&&(P(g({rows:20,columns:30},80).snapshot),m("new"),o(0))}),[s]),N=Object(c.useCallback)((function(){j((function(e){return"flag"===e?"reveal":"flag"}))}),[]);return Object(c.useEffect)((function(){var e=function(e){32===e.keyCode&&N()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[N]),l.a.createElement(xe,null,l.a.createElement(ke,null,l.a.createElement(ze,null,l.a.createElement(Me,null,"[MINES]"),l.a.createElement(Se,{onClick:I},rt[s]),l.a.createElement(Ce,null,l.a.createElement(gn,{score:t})))),l.a.createElement(Re,null,l.a.createElement(dn,{grid:R,activeCell:z,onTileClick:A})),l.a.createElement(tt,{onToggleGameMode:N,gameMode:O}))}},28:function(e,n,t){e.exports=t(29)},29:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),r=t.n(n),a=t(13),c=t(5),l=(t(34),t(14)),i=t(18),o=t(23),u=t(22);t(38);e.appVersion=i.a;var f=document.getElementById("root"),s=r.a.createElement(n.StrictMode,null,r.a.createElement(c.a,{theme:l.a},r.a.createElement(o.a,null)));Object(a.render)(s,f),Object(u.a)()}.call(this,t(11))},38:function(e,n,t){}},[[28,1,2]]]);
//# sourceMappingURL=main.37a5dcc7.chunk.js.map