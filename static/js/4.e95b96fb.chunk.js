(this["webpackJsonpts-mines"]=this["webpackJsonpts-mines"]||[]).push([[4],{14:function(e,n,t){"use strict";t.r(n);var r=t(19),a=t(23),c=t(0),l=t.n(c),i=t(40),o=t(17),u=t(24),f=t(25),s=function(e,n){return!function(e,n,t){return t>=e&&t<n}(0,n,e)},m=function(e,n){return s(e.row,n.rows)||s(e.column,n.columns)},d=function(){function e(n,t){Object(u.a)(this,e),this._dimensions={rows:0,columns:0},this._grid=[];for(var r=[],a=0;a<n.rows;a++){for(var c=[],l=0;l<n.columns;l++){var i="function"===typeof t?t({row:a,column:l}):t;c.push({row:a,column:l,value:i})}r.push(c)}return this._dimensions=n,this._grid=r,this}return Object(f.a)(e,[{key:"withSeed",value:function(e){return this._grid=e,this}},{key:"updateCell",value:function(e,n){var t=e.row,r=e.column,a=this.getCell({row:t,column:r}),c="function"===typeof n?n({row:t,column:r},a.value):n;return this._grid[t][r]={row:t,column:r,value:c},this}},{key:"getCell",value:function(e){var n=e.row,t=e.column;if(!m({row:n,column:t},this._dimensions))return this._grid[n][t];throw new Error("Invalid cell coordinates: row: ".concat(n,"; column: ").concat(t))}},{key:"getCellNeighbours",value:function(e){var n=this,t=e.row,r=e.column;return[{row:t-1,column:r-1},{row:t-1,column:r},{row:t-1,column:r+1},{row:t,column:r-1},{row:t,column:r+1},{row:t+1,column:r-1},{row:t+1,column:r},{row:t+1,column:r+1}].filter((function(e){return!m(e,n._dimensions)})).map((function(e){return n.getCell(e)}))}},{key:"map",value:function(n){var t=this,a=this._grid.map((function(e){return e.map((function(e){return Object(r.a)({},e,{value:n(e.value,e,t)})}))}));return e.from(a)}},{key:"filter",value:function(n){var t=this,r=this._grid.map((function(e){return e.filter((function(e){return n(e.value,e,t)}))}));return e.from(r)}},{key:"snapshot",get:function(){return this._grid.slice()}}],[{key:"make",value:function(n,t){return new e(n,t)}},{key:"from",value:function(n){var t=n.length,r=n[0].length;return e.make({rows:t,columns:r},void 0).withSeed(n)}}]),e}(),v=t(41),h=function(e){return Object(v.a)("revealed",!0,e)},p=function(e){return"mine"===e.kind?h(e):e},g=function(e){return"mine"===e.value.kind},b=function(e,n){return d.make(e,(function(){return{kind:Math.random()>=n/100?"mine":"empty",surroundingMines:0,revealed:!1}})).map((function(e,n,t){if("mine"!==e.kind){var a=t.getCellNeighbours(n).filter(g).length;return Object(r.a)({},e,{surroundingMines:a,kind:a?"empty":"safe"})}return e}))},w=t(26),y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t="".concat("@MINES").concat(n);localStorage.setItem(t,JSON.stringify(e))},O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t="".concat("@MINES").concat(n),r=localStorage.getItem(t);return null!==r?JSON.parse(r):e};function E(e,n){var t=Object(c.useState)(O(n,e)),r=Object(a.a)(t,2),l=r[0],i=r[1];return Object(c.useEffect)((function(){y(l,e)}),[l,e]),[l,i]}function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var k=l.a.createElement("defs",null),M=l.a.createElement("path",{fill:"#dbd9dc",d:"M249 0A243 243 0 0017 244v144c0 32 25 58 57 58h42c9 0 16 7 16 16v25c0 14 11 25 25 25h198c14 0 25-11 25-25v-25c0-9 7-16 16-16h42c32 0 57-26 57-58V239C495 105 385-4 249 0z"}),z=l.a.createElement("path",{fill:"#c9c6ca",d:"M140 421c-22 0-41-18-41-41V244C99 126 184 24 297 4c-21-4-44-5-67-3A243 243 0 0017 244v144c0 32 25 58 57 58h42c9 0 16 7 16 16v25c0 14 11 25 25 25h25v-50c0-22-19-41-42-41z"}),C=l.a.createElement("g",{fill:"#867e88"},l.a.createElement("path",{d:"M248 365l-26 63c-3 7 4 13 11 11l17-7c4-2 8-2 12 0l17 7c7 2 14-4 11-11l-26-63c-3-7-13-7-16 0z"}),l.a.createElement("circle",{cx:148.7,cy:289,r:74.3})),S=l.a.createElement("path",{fill:"#6f6571",d:"M149 248c35 0 65 24 72 58a74 74 0 10-145 0c8-34 37-58 73-58z"}),P=l.a.createElement("circle",{cx:363.4,cy:289,r:74.3,fill:"#867e88"}),R=l.a.createElement("g",{fill:"#6f6571"},l.a.createElement("path",{d:"M363 248c36 0 65 24 73 58a74 74 0 10-145 0c7-34 37-58 72-58zM238 401a49 49 0 0136 0l6 2-16-38c-3-7-13-7-16 0l-16 38 6-2z"})),T=l.a.createElement("g",{fill:"#c9c6ca"},l.a.createElement("path",{d:"M223 512h-17v-25c0-4 4-8 9-8 4 0 8 4 8 8v25zM306 512h-17v-25c0-4 4-8 8-8 5 0 9 4 9 8v25zM347 512h-17v-25c0-4 4-8 9-8 4 0 8 4 8 8v25zM264 512h-16v-25c0-4 3-8 8-8s8 4 8 8v25z"})),A=l.a.createElement("path",{fill:"#b7b2b8",d:"M182 512h-17v-25c0-4 4-8 8-8 5 0 9 4 9 8v25z"}),I=function(e){var n=e.svgRef,t=e.title,r=x(e,["svgRef","title"]);return l.a.createElement("svg",j({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,k,M,z,C,S,P,R,T,A)},_=l.a.forwardRef((function(e,n){return l.a.createElement(I,j({svgRef:n},e))}));t.p;function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function F(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var B=l.a.createElement("defs",null),L=l.a.createElement("circle",{cx:256,cy:256,r:256,fill:"#ffe17d"}),V=l.a.createElement("g",{fill:"#ffd164"},l.a.createElement("path",{d:"M293 475A256 256 0 0195 57a255 255 0 10360 360c-44 36-101 58-162 58z"}),l.a.createElement("path",{d:"M182 512c9 0 16-7 16-17 0-9-7-16-16-16h8c9 0 16-7 16-17 0-9-7-16-16-16h8c9 0 17-7 17-17 0-9-8-16-17-16h91c9 0 17-7 17-17 0-9-8-16-17-16H140c-13 0-24-11-24-25v-49c0-10-8-17-17-17s-16 7-16 17v40c0 11-4 22-11 31l-8 10c-9 11-14 26-14 41v34c0 28 22 50 49 50h83z"})),D=l.a.createElement("g",{fill:"#ffc350"},l.a.createElement("path",{d:"M198 495H99c-18 0-33-14-33-33v-34c0-11 4-22 11-31l8-10c9-11 14-26 14-41v-57c-9 0-16 7-16 17v40c0 11-4 22-11 31l-8 10c-9 11-14 26-14 41v34c0 28 22 50 49 50h83c9 0 16-7 16-17zM306 396H190a8 8 0 100 17h99c9 0 17-7 17-17zM173 438c0 4 4 8 9 8h16c9 0 17-7 17-17h-33c-5 0-9 4-9 9z"}),l.a.createElement("path",{d:"M165 471c0 4 4 8 8 8h17c9 0 16-7 16-17h-33c-4 0-8 4-8 9z"})),G=l.a.createElement("g",{fill:"#aa7346"},l.a.createElement("path",{d:"M297 341l-4-1c-1-1-58-29-120-30-6 0-10-5-10-11s5-10 10-10c68 2 126 31 129 32a10 10 0 01-5 20zM190 134l-6-2c-2-1-38-29-80-7a10 10 0 01-10-19c55-27 100 8 102 10a10 10 0 01-6 18zM306 151a10 10 0 01-2-21l82-16a10 10 0 114 20l-82 17h-2z"})),H=l.a.createElement("path",{fill:"#7d5046",d:"M152 208c-11-1-19-12-18-23l2-16c1-12 12-20 23-18 11 1 19 11 18 23l-2 16c-1 11-12 19-23 18z"}),J=l.a.createElement("path",{fill:"#9c6846",d:"M159 151h-4l-4 28a12 12 0 1025 3l1-8c1-12-7-22-18-23z"}),U=l.a.createElement("path",{fill:"#7d5046",d:"M325 226c-11-1-19-12-18-23l2-16c1-12 12-20 23-18 11 1 19 11 18 23l-2 16c-1 11-12 19-23 18z"}),q=l.a.createElement("path",{fill:"#9c6846",d:"M332 169h-4l-4 28a12 12 0 1025 3l1-8c1-12-7-22-18-23z"}),K=function(e){var n=e.svgRef,t=e.title,r=F(e,["svgRef","title"]);return l.a.createElement("svg",N({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,B,L,V,D,G,H,J,U,q)},Q=l.a.forwardRef((function(e,n){return l.a.createElement(K,N({svgRef:n},e))}));t.p;function W(){return(W=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function X(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Y=l.a.createElement("defs",null),Z=l.a.createElement("circle",{cx:256,cy:256,r:256,fill:"#ffe17d"}),$=l.a.createElement("g",{fill:"#ffd164"},l.a.createElement("ellipse",{cx:156.9,cy:247.7,rx:74.3,ry:66.1}),l.a.createElement("ellipse",{cx:355.1,cy:247.7,rx:74.3,ry:66.1}),l.a.createElement("path",{d:"M293 475A256 256 0 0195 57a255 255 0 10360 360c-44 36-101 58-162 58z"})),ee=l.a.createElement("path",{fill:"#5a4650",d:"M229 229l-13-10a49 49 0 0180 0l-13 9a33 33 0 00-54 1z"}),ne=l.a.createElement("path",{fill:"#6e5a64",d:"M157 165c-9 0-18 2-27 5-7 2-14 3-22 3H74c-4 0-8 4-8 9v16c0 5 3 10 7 13l2 2c5 3 8 8 8 14v4c0 37 33 66 74 66s74-29 74-66-33-66-74-66z"}),te=l.a.createElement("g",{fill:"#aa7346"},l.a.createElement("path",{d:"M256 398c-42 0-83-20-107-53a10 10 0 0116-13 113 113 0 00182 0 10 10 0 1116 13c-24 33-64 53-107 53zM182 151h-50a10 10 0 110-21h50a10 10 0 110 21zM380 151h-50a10 10 0 110-21h50a10 10 0 110 21z"})),re=l.a.createElement("path",{fill:"#5a4650",d:"M157 281c-32 0-58-22-58-50 0-27 26-49 58-49s58 22 58 49c0 28-26 50-58 50z"}),ae=l.a.createElement("path",{fill:"#84737b",d:"M157 206c22 0 41 6 56 14-6-22-29-38-56-38s-50 16-56 38c14-8 34-14 56-14z"}),ce=l.a.createElement("path",{fill:"#6e5a64",d:"M281 231c0 37 33 66 74 66s74-29 74-66v-4c0-6 3-11 8-14l2-2c4-3 7-8 7-13v-16c0-5-4-9-8-9h-34c-8 0-15-1-22-3-9-3-18-5-27-5-41 0-74 30-74 66z"}),le=l.a.createElement("path",{fill:"#5a4650",d:"M297 231c0-27 26-49 58-49s58 22 58 49c0 28-26 50-58 50s-58-22-58-50z"}),ie=l.a.createElement("path",{fill:"#84737b",d:"M355 206c-22 0-41 6-56 14 6-22 29-38 56-38s50 16 56 38c-14-8-34-14-56-14z"}),oe=function(e){var n=e.svgRef,t=e.title,r=X(e,["svgRef","title"]);return l.a.createElement("svg",W({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,Y,Z,$,ee,ne,te,re,ae,ce,le,ie)},ue=l.a.forwardRef((function(e,n){return l.a.createElement(oe,W({svgRef:n},e))})),fe=(t.p,t(15)),se=t(22);function me(){var e=Object(fe.a)(["\n    70% {\n      opacity: 1;\n      background-color: ",";\n    }\n  "]);return me=function(){return e},e}function de(){var e=Object(fe.a)(["\n    0% {\n      transform: scale(0.1);\n      opacity: 0.1;\n    }\n  "]);return de=function(){return e},e}var ve={primary:"#FFD400",secondary:"#3482B9",positive:"#49C04A",negative:"#D03930",neutral:"#AAA",light:"#ABE0F9",muted:"#EAEAEA",hotpink:"#FC8BA4",black:"#333",white:"#FFF",gray:"#CCC",dark:"#666",shadow:"rgba(0, 0, 0, 0.4)"},he={colors:ve,radii:{default:"0.2rem",sm:"0.1rem",md:"0.2rem",lg:"0.3rem",xl:"0.4rem",xxl:"0.6rem",xxxl:"1rem",round:"50%"},fontSizes:{default:18,xs:18*.6,sm:14.4,md:18,lg:18*1.2},fontFamilies:{display:"'Black Ops One', monospace",default:"'Lato', sans-serif",voice:"'Vollkorn', serif"},shadows:{default:"0 1px 2px ".concat(ve.shadow),inset:"inset 1px 0 2px",top:"0 -2px 6px ".concat(ve.shadow),none:"none"},animations:{appear:Object(o.d)(de()),glow:Object(o.d)(me(),Object(se.a)(.2,ve.negative))}},pe=(o.e,function(e){return function(n){return function(t){var r="function"===typeof n?n(t):n;return t.theme[e][r]}}}),ge=pe("colors"),be=pe("radii"),we=(pe("fontSizes"),pe("shadows")),ye=pe("fontFamilies"),Oe=pe("animations"),Ee=(o.b,o.c),je=t(36),xe=t.n(je);function ke(){var e=Object(fe.a)(["\n  display: flex;\n  max-width: calc(100vw - ",");\n  max-height: calc(\n    100vh - ((2 * ",") + "," + ",")\n  );\n  margin-top: ",";\n  margin-bottom: ",";\n  -ms-overflow-style: none;\n  @media screen and (max-height: ",") {\n    overflow: scroll;\n  }\n  @media screen and (max-width: ",") {\n    overflow: scroll;\n  }\n"]);return ke=function(){return e},e}function Me(){var e=Object(fe.a)(["\n          "," 4s infinite ease\n        "]);return Me=function(){return e},e}function ze(){var e=Object(fe.a)(["\n  background: ",";\n  box-shadow: ",";\n  border-radius: 50%;\n  width: 2.8rem;\n  height: 2.8rem;\n  margin-top: 0.8rem;\n  padding: 0.4rem;\n  animation: ",";\n"]);return ze=function(){return e},e}function Ce(){var e=Object(fe.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: flex-end;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(fe.a)(["\n  font-family: ",";\n  color: ",";\n  font-size: ",";\n  display: flex;\n  flex: 1;\n"]);return Se=function(){return e},e}function Pe(){var e=Object(fe.a)(["\n  display: flex;\n  width: ",";\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  @media screen and (max-width: ",") {\n    width: 100vw;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n"]);return Pe=function(){return e},e}function Re(){var e=Object(fe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: ",";\n  background: ",";\n  box-shadow: ",";\n"]);return Re=function(){return e},e}function Te(){var e=Object(fe.a)(["\n  font-family: ",";\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  background: ",";\n"]);return Te=function(){return e},e}var Ae=Ee.div(Te(),ye("default"),ge("muted")),Ie=Ee.header(Re(),"3.8rem",ge("black"),we("default")),_e=Ee.div(Pe(),"1151.42px","1151.42px"),Ne=Ee.div(Se(),ye("display"),ge("primary"),xe()("2rem","3rem")),Fe=Ee.nav(Ce()),Be=Ee.div(ze(),ge("shadow"),we("default"),(function(e){return e.isGameOver?Object(o.b)(Me(),e.theme.animations.glow):"none"})),Le=Ee.main(ke(),"1rem","1rem","3.8rem","3.8rem","1rem","1rem","893px","1151.42px"),Ve=t(39),De=t(2);function Ge(){return(Ge=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function He(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Je=l.a.createElement("defs",null),Ue=l.a.createElement("path",{fill:"#fc644f",d:"M389 271l121 163c-91 30-300 24-381-18V126c80 41 290 49 381 18L389 271z"}),qe=l.a.createElement("path",{fill:"#f1543f",d:"M129 415l65-32-48-145-17 24z"}),Ke=l.a.createElement("path",{fill:"#ff7058",d:"M41 47v289s75-20 152 46V94C116 27 41 47 41 47z"}),Qe=l.a.createElement("path",{fill:"#40596b",d:"M32 0C16 0 2 13 2 29v483h59V29C61 13 48 0 32 0z"}),We=function(e){var n=e.svgRef,t=e.title,r=He(e,["svgRef","title"]);return l.a.createElement("svg",Ge({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,Je,Ue,qe,Ke,Qe)},Xe=l.a.forwardRef((function(e,n){return l.a.createElement(We,Ge({svgRef:n},e))}));t.p;function Ye(){var e=Object(fe.a)(["\n  width: 1.6rem;\n  height: 1.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: ",";\n  border-radius: ",";\n  margin: 0.2rem;\n  padding: 0.2rem;\n  background: ",";\n  transition: all 0.2s ease-in-out;\n  font-weight: bold;\n  user-select: none;\n  ",";\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(fe.a)(["\n  width: 1.4rem;\n  height: 1.4rem;\n  animation: "," 0.2s ease-in-out;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(fe.a)(["\n  width: 1.4rem;\n  height: 1.4rem;\n  animation: "," 0.2s ease-in-out;\n"]);return $e=function(){return e},e}var en=Ee(De.a)($e(),Oe("appear")),nn=Ee(Xe)(Ze(),Oe("appear")),tn={0:"white",1:"blue",2:"green",3:"red",4:"darkblue",5:"darkgreen",6:"darkred",7:"purple",8:"darkpurple"},rn=Ee.div(Ye(),we((function(e){return e.revealed?"none":"default"})),be("lg"),ge((function(e){return e.revealed?"mine"===e.kind&&e.active?"negative":"white":"gray"})),(function(e){return"number"===typeof e.children?"color:  ".concat(tn[e.children]):void 0})),an=function(e){var n=Object(c.useMemo)((function(){if(e.flagged)return l.a.createElement(nn,null);if(!e.revealed||"safe"===e.kind)return null;switch(e.kind){case"empty":return e.surroundingMines;case"mine":return l.a.createElement(en,null)}}),[e]),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=Object(c.useState)(!1),r=Object(a.a)(t,2),l=r[0],i=r[1];return Object(c.useEffect)((function(){var t=0;return l?t=setTimeout(e,n):clearTimeout(t),function(){clearTimeout(t)}}),[l]),{onMouseDown:function(){return i(!0)},onMouseUp:function(){return i(!1)},onMouseLeave:function(){return i(!1)},onTouchStart:function(){return i(!0)},onTouchEnd:function(){return i(!1)}}}(e.onLongPress,400);return l.a.createElement(rn,Object.assign({},Object(Ve.a)(["onLongPress"],e),t,{active:e.active}),n)};function cn(){var e=Object(fe.a)(["\n  display: flex;\n"]);return cn=function(){return e},e}function ln(){var e=Object(fe.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ln=function(){return e},e}var on=Ee.div(ln()),un=Ee.div(cn()),fn=function(e){var n=Object(c.useCallback)((function(n){return function(){return e.onTileClick(n)}}),[e]),t=Object(c.useCallback)((function(n){return function(){return e.onTileLongPress(n)}}),[e]);return l.a.createElement(on,null,e.grid.map((function(r,a){return l.a.createElement(un,{key:a},r.map((function(r,a){var c,i;return l.a.createElement(an,Object.assign({key:a},r.value,{active:r.row===(null===(c=e.activeCell)||void 0===c?void 0:c.row)&&r.column===(null===(i=e.activeCell)||void 0===i?void 0:i.column),onClick:n(r),onLongPress:t(r)}))})))})))};function sn(){return(sn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function mn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var dn=l.a.createElement("defs",null),vn=l.a.createElement("path",{d:"M256 5a257 257 0 00-81 501c13 3 18-5 18-12l-1-44c-71 16-86-34-86-34-12-30-28-38-28-38-24-16 1-16 1-16 26 2 39 27 39 27 23 39 60 28 75 21 2-16 9-28 16-34-57-7-116-29-116-127 0-28 10-51 26-69-3-7-11-33 3-68 0 0 21-7 70 26a244 244 0 01128 0c49-33 70-26 70-26 14 35 6 61 3 68 16 18 26 41 26 69 0 99-60 120-117 127 10 8 18 23 18 47v71c0 7 4 15 17 12A257 257 0 00256 5z"}),hn=function(e){var n=e.svgRef,t=e.title,r=mn(e,["svgRef","title"]);return l.a.createElement("svg",sn({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,dn,vn)},pn=l.a.forwardRef((function(e,n){return l.a.createElement(hn,sn({svgRef:n},e))}));t.p;function gn(){var e=Object(fe.a)(["\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  display: flex;\n  padding: 0.3rem 0.4rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  overflow: hidden;\n  "," {\n    display: none;\n  }\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: ",";\n  font-weight: 700;\n  text-decoration: none;\n  :hover {\n    "," {\n      display: flex;\n      animation: "," 0.3s;\n    }\n    width: 12rem;\n    border-radius: calc(1.8rem);\n  }\n  transition: all 0.3s ease-in-out;\n  user-select: none;\n  outline: none;\n"]);return gn=function(){return e},e}function bn(){var e=Object(fe.a)(["\n  white-space: nowrap;\n"]);return bn=function(){return e},e}function wn(){var e=Object(fe.a)(["\n  height: 1.6rem;\n  width: 1.6rem;\n"]);return wn=function(){return e},e}var yn=Ee(pn)(wn()),On=Ee.div(bn()),En=Ee.a(gn(),be("round"),ge("secondary"),ge("white"),On,we("default"),On,Oe("appear")),jn=function(){return l.a.createElement(En,{target:"_blank",rel:"noreferrer",href:"https://github.com/alanrsoares/ts-mines","aria-label":"got to the project's github page"},l.a.createElement(yn,null),l.a.createElement(On,null,"@alanrsoares/ts-mines"))};function xn(){return(xn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function kn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Mn=l.a.createElement("defs",null),zn=l.a.createElement("circle",{cx:256.3,cy:256,r:245,fill:"#fec753"}),Cn=l.a.createElement("path",{fill:"#35528c",d:"M256 105C133 105 30 217 3 248c-4 5-4 11 0 16 27 31 130 143 253 143s226-112 253-143c4-5 4-11 0-16-27-31-130-143-253-143z"}),Sn=l.a.createElement("path",{fill:"#1f3a60",d:"M42 256c0-24 96-151 214-151C134 105 31 215 4 247c-5 5-5 13 0 18 27 32 130 142 252 142-118 0-214-127-214-151z"}),Pn=l.a.createElement("circle",{cx:256,cy:256,r:132,fill:"#99d3ff"}),Rn=l.a.createElement("path",{fill:"#5bb3ce",d:"M176 256c0-64 46-117 106-129a133 133 0 00-158 129 132 132 0 00158 129c-60-12-106-65-106-129z"}),Tn=l.a.createElement("circle",{cx:254.6,cy:256,r:65.6,fill:"#1f3a60"}),An=l.a.createElement("circle",{cx:308.1,cy:225.6,r:27.9,fill:"#dcf3ff"}),In=function(e){var n=e.svgRef,t=e.title,r=kn(e,["svgRef","title"]);return l.a.createElement("svg",xn({viewBox:"0 0 512 512",ref:n},r),t?l.a.createElement("title",null,t):null,Mn,zn,Cn,Sn,Pn,Rn,Tn,An)},_n=l.a.forwardRef((function(e,n){return l.a.createElement(In,xn({svgRef:n},e))}));t.p;function Nn(){var e=Object(fe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: ",";\n  background: ",";\n  color: ",";\n  box-shadow: ",";\n  position: fixed;\n  bottom: 0;\n"]);return Nn=function(){return e},e}function Fn(){var e=Object(fe.a)(["\n  display: flex;\n"]);return Fn=function(){return e},e}function Bn(){var e=Object(fe.a)(["\n    border: none;\n    background-color: ",";\n    height: 2.8rem;\n    width: 4rem;\n    ","\n    box-shadow: ",";\n    outline: none;\n    transition: all .1s ease;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s ease-in-out;\n  "]);return Bn=function(){return e},e}function Ln(){var e=Object(fe.a)(["\n  border-radius: ",";\n  background-color: ",";\n  width: 1.8rem;\n  height: 1.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.1rem;\n  transition-delay: 0.3s;\n  transition: background-color 0.2s ease-in-out;\n  box-shadow: ",";\n"]);return Ln=function(){return e},e}function Vn(){var e=Object(fe.a)(["\n  width: 1rem;\n  height: 1rem;\n"]);return Vn=function(){return e},e}function Dn(){var e=Object(fe.a)(["\n  width: 1rem;\n  height: 1rem;\n"]);return Dn=function(){return e},e}var Gn=Ee(_n)(Dn()),Hn=Ee(Xe)(Vn()),Jn=Ee.div(Ln(),be("round"),(function(e){return e.active?ge("gray")(e):Object(se.a)(.1,ge("gray")(e))}),we((function(e){return e.active?"inset":"default"}))),Un=Ee.button(Bn(),(function(e){var n=ge(e.color)(e);return e.active?n:Object(se.a)(.5,n)}),(function(e){return"\n      border-top-".concat(e.side,"-radius: 2rem;\n      border-bottom-").concat(e.side,"-radius: 2rem;\n    ")}),we((function(e){return e.active?"inset":"default"}))),qn=Ee.div(Fn()),Kn=Ee.div(Nn(),"3.8rem",ge("dark"),ge("white"),we("default")),Qn=function(e){return l.a.createElement(Kn,null,l.a.createElement(_e,null,l.a.createElement(jn,null),l.a.createElement(qn,null,l.a.createElement(Un,{side:"left",color:"white",active:"flag"===e.gameMode,onClick:e.onToggleGameMode,"aria-label":"Toggle game mode"},l.a.createElement(Jn,{active:"flag"===e.gameMode},l.a.createElement(Hn,null))),l.a.createElement(Un,{side:"right",color:"white",active:"reveal"===e.gameMode,onClick:e.onToggleGameMode,"aria-label":"Toggle game mode"},l.a.createElement(Jn,{active:"reveal"===e.gameMode},l.a.createElement(Gn,null))))))};function Wn(){var e=Object(fe.a)(["\n  width: 0.9rem;\n  height: 0.9rem;\n  margin-right: 0.5rem;\n"]);return Wn=function(){return e},e}function Xn(){var e=Object(fe.a)(["\n  height: 0.3rem;\n  overflow: hidden;\n  border-radius: ",";\n  width: 80%;\n  align-self: center;\n  background: linear-gradient(\n    to right,\n    "," 0%,\n    "," ","%,\n    "," ","%,\n    "," 100%\n  );\n"]);return Xn=function(){return e},e}function Yn(){var e=Object(fe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-size: 1.3rem;\n"]);return Yn=function(){return e},e}function Zn(){var e=Object(fe.a)(["\n  display: flex;\n  color: ",";\n  min-width: 8rem;\n  flex-direction: column;\n  align-items: center;\n  background: ",";\n  border-radius: ",";\n  height: 3rem;\n  justify-content: space-around;\n"]);return Zn=function(){return e},e}var $n=Ee.div(Zn(),ge("primary"),ge("shadow"),be("lg")),et=Ee.div(Yn(),ge("primary")),nt=Ee.div(Xn(),be("default"),ge("positive"),ge("positive"),(function(e){return e.progress}),ge("white"),(function(e){return e.progress}),ge("white")),tt=Ee(_n)(Wn()),rt=function(e){return l.a.createElement($n,null,l.a.createElement(et,null,l.a.createElement(tt,null)," ",e.score),l.a.createElement(nt,{progress:e.progress}))};t.d(n,"App",(function(){return lt}));var at={new:l.a.createElement(Q,null),won:l.a.createElement(ue,null),over:l.a.createElement(_,null)},ct=function(){};function lt(){Object(w.a)();var e=E("/score",0),n=Object(a.a)(e,2),t=n[0],o=n[1],u=E("/gameStatus","new"),f=Object(a.a)(u,2),s=f[0],m=f[1],v=E("/mode","reveal"),g=Object(a.a)(v,2),y=g[0],O=g[1],j=E("/activeCell",void 0),x=Object(a.a)(j,2),k=x[0],M=x[1],z=E("/grid",b({rows:20,columns:30},80).snapshot),C=Object(a.a)(z,2),S=C[0],P=C[1],R=Object(c.useCallback)((function(e,n){if("over"!==s&&"won"!==s){M(e);var t=e.value;switch(null!==n&&void 0!==n?n:y){case"flag":if(t.revealed)return;var a=d.from(S).updateCell(e,Object(r.a)({},t,{flagged:!t.flagged}));P(a.snapshot);break;case"reveal":if(t.flagged)return;if("mine"===t.kind){var c=d.from(S).updateCell(e,Object(r.a)({},t,{revealed:!0}));return P(c.snapshot),P(c.map(p).snapshot),void m("over")}var l=function e(n,t){var r=d.from(n),a=t.value;return r.updateCell(t,h(a)),"safe"!==a.kind?r:(r.getCellNeighbours(t).forEach((function(n){var t=n.value;if(!t.revealed)switch(t.kind){case"empty":r.updateCell(n,h(t));break;case"safe":return e(r.snapshot,n)}})),r)}(S,e).snapshot,u=Object(i.a)(l).filter((function(e){return e.value.revealed})).length;P(l),o(u)}}}),[S,s,y,P,o,M,m]),T=Object(c.useCallback)((function(e){R(e,"flag")}),[R]),A=Object(c.useCallback)((function(){"over"===s&&(P(b({rows:20,columns:30},80).snapshot),m("new"),o(0))}),[s,m,o,P]),I=Object(c.useCallback)((function(){O((function(e){return"flag"===e?"reveal":"flag"}))}),[O]);!function(e){var n=Object(c.useCallback)((function(n){n.preventDefault(),e()}),[e]);Object(c.useEffect)((function(){return window.addEventListener("contextmenu",n),function(){window.removeEventListener("contextmenu",n)}}),[n])}(ct);var _=Object(c.useMemo)((function(){return t/(S.length*S[0].length)*100}),[t,S]);return l.a.createElement(Ae,null,l.a.createElement(Ie,null,l.a.createElement(_e,null,l.a.createElement(Ne,null,"[MINES]"),l.a.createElement(Be,{isGameOver:"over"===s,onClick:A},at[s]),l.a.createElement(Fe,null,l.a.createElement(rt,{score:t,progress:_})))),l.a.createElement(Le,null,l.a.createElement(fn,{grid:S,activeCell:k,onTileClick:R,onTileLongPress:T})),l.a.createElement(Qn,{onToggleGameMode:I,gameMode:y}))}n.default=function(){return l.a.createElement(o.a,{theme:he},l.a.createElement(lt,null))}},26:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return b}));var r=t(27),a=t.n(r),c=t(29),l=t(0);function i(e,n){for(var t=e.split(/\./g),r=n.split(/\./g);t.length||r.length;){var a=Number(t.shift()),c=Number(r.shift());if(a!==c)return a>c||isNaN(c)}return!1}var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){throw new Error("Timeout exceeded")};return(function(){var t=Object(c.a)(a.a.mark((function t(r){var c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=window.setTimeout(n,e),t.next=3,fetch(r);case 3:return l=t.sent,window.clearTimeout(c),t.abrupt("return",l);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};function u(){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.caches){e.next=7;break}return e.next=3,window.caches.keys();case 3:return n=e.sent,t=n.map((function(e){return window.caches.delete(e)})),e.next=7,Promise.all(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function n(){var t,r,c,l,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o(5e3,(function(){throw new Error("Timout reached while fetching meta.json")})),n.next=4,t("meta.json?t=".concat(Date.now()));case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,l=c.version,u=e.appVersion,n.abrupt("return",i(l,u));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(){window.location.reload(!0)}function v(){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:window.setTimeout(d,300),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Failed to purge cache",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:if(!e.sent||!window.confirm("A new version is available, would you like to update?")){e.next=7;break}return e.next=7,v();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Failed to check for updates:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18e5;Object(l.useEffect)((function(){p();var n=window.setInterval(p,e);return function(){window.clearInterval(n)}}),[e])}}).call(this,t(7))}}]);
//# sourceMappingURL=4.e95b96fb.chunk.js.map