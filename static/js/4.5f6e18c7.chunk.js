(this["webpackJsonpts-mines"]=this["webpackJsonpts-mines"]||[]).push([[4],{14:function(e,n,t){"use strict";t.r(n),t.d(n,"App",(function(){return ot}));var r=t(0),a=t.n(r),c=t(16),l=t(27),i=t(17),o=t(39),u=t(21),s=t(22),f=new(function(){function e(n){Object(u.a)(this,e),this.namespace="",this.namespace=n}return Object(s.a)(e,[{key:"persist",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";localStorage.setItem("".concat(this.namespace).concat(n),JSON.stringify(null!==e&&void 0!==e?e:null))}},{key:"read",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=localStorage.getItem("".concat(this.namespace).concat(n));return null!==t?JSON.parse(t):e}}]),e}())("@TS-MINES"),d=t(42),m=t(40),v=function(e,n){return!function(e,n,t){return t>=e&&t<n}(0,n,e)},h=function(e,n){return v(e.row,n.rows)||v(e.column,n.columns)},p=function(){function e(){if(Object(u.a)(this,e),this._dimensions={rows:0,columns:0},this._grid=[],1===arguments.length&&Array.isArray(arguments.length<=0?void 0:arguments[0])){this._grid=arguments.length<=0?void 0:arguments[0];var n={rows:this._grid.length,columns:this._grid[0].length};return this._dimensions=n,this}if("object"===typeof(arguments.length<=0?void 0:arguments[0])&&null!==(arguments.length<=0?void 0:arguments[0])){for(var t=arguments.length<=0?void 0:arguments[0],r=arguments.length<=1?void 0:arguments[1],a=[],c=0;c<t.rows;c++){for(var l=[],i=0;i<t.columns;i++){var o="function"===typeof r?r({row:c,column:i}):r;l.push({row:c,column:i,value:o})}a.push(l)}return this._dimensions=t,this._grid=a,this}throw new Error("Invalid argument: ".concat(arguments.length<=0?void 0:arguments[0]))}return Object(s.a)(e,[{key:"withSeed",value:function(e){return this._grid=e,this}},{key:"updateCell",value:function(e,n){var t=e.row,r=e.column,a=this.getCell({row:t,column:r}),c="function"===typeof n?n({row:t,column:r},a.value):n;return this._grid[t][r]={row:t,column:r,value:c},this}},{key:"getCell",value:function(e){var n=e.row,t=e.column;if(!h({row:n,column:t},this._dimensions))return this._grid[n][t];throw new Error("Invalid cell coordinates: row: ".concat(n,"; column: ").concat(t))}},{key:"getCellNeighbors",value:function(e){var n=this,t=e.row,r=e.column;return[{row:t-1,column:r-1},{row:t-1,column:r},{row:t-1,column:r+1},{row:t,column:r-1},{row:t,column:r+1},{row:t+1,column:r-1},{row:t+1,column:r},{row:t+1,column:r+1}].reduce((function(e,t){return h(t,n._dimensions)?e:[].concat(Object(m.a)(e),[n.getCell(t)])}),[])}},{key:"map",value:function(n){var t=this,r=this._grid.map((function(e){return e.map((function(e){return Object(i.a)({},e,{value:n(e.value,e,t)})}))}));return e.from(r)}},{key:"snapshot",get:function(){return this._grid.slice()}}],[{key:"make",value:function(){return new e(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])}},{key:"from",value:function(n){return new e(n)}}]),e}(),g=function(e){return Object(d.a)("revealed",!0,e)},b=function(e){return"mine"===e.kind?g(e):e},w=function(e){return"mine"===e.value.kind},O=function(e,n){return p.make(e,(function(){return{kind:Math.random()>=n/100?"mine":"empty",surroundingMines:0,revealed:!1}})).map((function(e,n,t){if("mine"!==e.kind){var r=t.getCellNeighbors(n).filter(w).length;return Object(i.a)({},e,{surroundingMines:r,kind:r?"empty":"safe"})}return e}))},y=function(e){var n=e.snapshot.flat(),t=n.reduce((function(e,n){return{flagged:n.value.defused?e.flagged+1:e.flagged,revealed:n.value.revealed?e.revealed+1:e.revealed,mines:"mine"===n.value.kind?e.mines+1:e.mines}}),{flagged:0,revealed:0,mines:0});return t.mines===t.flagged&&t.revealed+t.flagged===n.length},E={gameStatus:"new",gameMode:"reveal",activeCell:void 0,score:0,grid:O({rows:20,columns:30},80).snapshot},j=function(e,n){switch(n.type){case"TOGGLE_GAME_MODE":return Object(i.a)({},e,{gameMode:"defuse"===e.gameMode?"reveal":"defuse"});case"RESET":return"over"!==e.gameStatus?e:Object(i.a)({},E,{grid:O({rows:20,columns:30},80).snapshot});case"TOGGLE_CELL":var t=n.payload,r=t.cell,a=t.mode;if(["won","over"].includes(e.gameStatus))return e;var c=r.value,l=null!==a&&void 0!==a?a:e.gameMode,o=Object(i.a)({},e,{activeCell:n.payload.cell});if(c.revealed||c.defused)return o;switch(l){case"defuse":if("mine"!==c.kind){var u=p.from(e.grid).updateCell(r,Object(i.a)({},c,{revealed:!0}));return Object(i.a)({},o,{grid:u.map(b).snapshot,gameStatus:"over"})}var s=p.from(e.grid).updateCell(r,Object(i.a)({},c,{defused:!c.defused}));return Object(i.a)({},o,{grid:s.snapshot,gameStatus:y(s)?"won":e.gameStatus});case"reveal":if("mine"===c.kind)return Object(i.a)({},o,{grid:p.from(e.grid).map(b).snapshot,gameStatus:"over"});var f=function e(n,t){var r=p.from(n),a=t.value;return r.updateCell(t,g(a)),"safe"!==a.kind?r:(r.getCellNeighbors(t).forEach((function(n){var t=n.value;if(!t.revealed)switch(t.kind){case"empty":r.updateCell(n,g(t));break;case"safe":return e(r.snapshot,n)}})),r)}(e.grid,r),d=f.snapshot.flat().filter((function(e){return e.value.revealed})).length;return Object(i.a)({},o,{grid:f.snapshot,score:d,gameStatus:y(f)?"won":e.gameStatus})}}};var x=t(31),k=Object(x.a)((function(){var e=function(e,n,t){var a=Object(r.useReducer)(t,f.read(n,e)),c=Object(o.a)(a,2),l=c[0],i=c[1];return Object(r.useEffect)((function(){f.persist(l,e)}),[l,e]),[l,i]}("/state",E,j),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(r.useMemo)((function(){return t.score/(t.grid.length*t.grid[0].length)*100}),[t.score,t.grid]),l=Object(r.useCallback)((function(e,n){a({type:"TOGGLE_CELL",payload:{cell:e,mode:n}})}),[a]),u=Object(r.useCallback)((function(e){a({type:"TOGGLE_CELL",payload:{cell:e,mode:"defuse"}})}),[a]),s=Object(r.useCallback)((function(){a({type:"RESET"})}),[a]),d=Object(r.useCallback)((function(){a({type:"TOGGLE_GAME_MODE"})}),[a]);return{state:Object(i.a)({},t,{progress:c}),handlers:{onCellClick:l,onStatusClick:s,onToggleGameMode:d,onCellLongPress:u}}}));function M(){return(M=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var z=a.a.createElement("defs",null),S=a.a.createElement("path",{fill:"#dbd9dc",d:"M249 0A243 243 0 0017 244v144c0 32 25 58 57 58h42c9 0 16 7 16 16v25c0 14 11 25 25 25h198c14 0 25-11 25-25v-25c0-9 7-16 16-16h42c32 0 57-26 57-58V239C495 105 385-4 249 0z"}),R=a.a.createElement("path",{fill:"#c9c6ca",d:"M140 421c-22 0-41-18-41-41V244C99 126 184 24 297 4c-21-4-44-5-67-3A243 243 0 0017 244v144c0 32 25 58 57 58h42c9 0 16 7 16 16v25c0 14 11 25 25 25h25v-50c0-22-19-41-42-41z"}),T=a.a.createElement("g",{fill:"#867e88"},a.a.createElement("path",{d:"M248 365l-26 63c-3 7 4 13 11 11l17-7c4-2 8-2 12 0l17 7c7 2 14-4 11-11l-26-63c-3-7-13-7-16 0z"}),a.a.createElement("circle",{cx:148.7,cy:289,r:74.3})),P=a.a.createElement("path",{fill:"#6f6571",d:"M149 248c35 0 65 24 72 58a74 74 0 10-145 0c8-34 37-58 73-58z"}),L=a.a.createElement("circle",{cx:363.4,cy:289,r:74.3,fill:"#867e88"}),_=a.a.createElement("g",{fill:"#6f6571"},a.a.createElement("path",{d:"M363 248c36 0 65 24 73 58a74 74 0 10-145 0c7-34 37-58 72-58zM238 401a49 49 0 0136 0l6 2-16-38c-3-7-13-7-16 0l-16 38 6-2z"})),A=a.a.createElement("g",{fill:"#c9c6ca"},a.a.createElement("path",{d:"M223 512h-17v-25c0-4 4-8 9-8 4 0 8 4 8 8v25zM306 512h-17v-25c0-4 4-8 8-8 5 0 9 4 9 8v25zM347 512h-17v-25c0-4 4-8 9-8 4 0 8 4 8 8v25zM264 512h-16v-25c0-4 3-8 8-8s8 4 8 8v25z"})),G=a.a.createElement("path",{fill:"#b7b2b8",d:"M182 512h-17v-25c0-4 4-8 8-8 5 0 9 4 9 8v25z"}),I=function(e){var n=e.svgRef,t=e.title,r=C(e,["svgRef","title"]);return a.a.createElement("svg",M({viewBox:"0 0 512 512",ref:n},r),t?a.a.createElement("title",null,t):null,z,S,R,T,P,L,_,A,G)},F=a.a.forwardRef((function(e,n){return a.a.createElement(I,M({svgRef:n},e))}));t.p;function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function B(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var D=a.a.createElement("defs",null),V=a.a.createElement("circle",{cx:256,cy:256,r:256,fill:"#ffe17d"}),H=a.a.createElement("g",{fill:"#ffd164"},a.a.createElement("path",{d:"M293 475A256 256 0 0195 57a255 255 0 10360 360c-44 36-101 58-162 58z"}),a.a.createElement("path",{d:"M182 512c9 0 16-7 16-17 0-9-7-16-16-16h8c9 0 16-7 16-17 0-9-7-16-16-16h8c9 0 17-7 17-17 0-9-8-16-17-16h91c9 0 17-7 17-17 0-9-8-16-17-16H140c-13 0-24-11-24-25v-49c0-10-8-17-17-17s-16 7-16 17v40c0 11-4 22-11 31l-8 10c-9 11-14 26-14 41v34c0 28 22 50 49 50h83z"})),J=a.a.createElement("g",{fill:"#ffc350"},a.a.createElement("path",{d:"M198 495H99c-18 0-33-14-33-33v-34c0-11 4-22 11-31l8-10c9-11 14-26 14-41v-57c-9 0-16 7-16 17v40c0 11-4 22-11 31l-8 10c-9 11-14 26-14 41v34c0 28 22 50 49 50h83c9 0 16-7 16-17zM306 396H190a8 8 0 100 17h99c9 0 17-7 17-17zM173 438c0 4 4 8 9 8h16c9 0 17-7 17-17h-33c-5 0-9 4-9 9z"}),a.a.createElement("path",{d:"M165 471c0 4 4 8 8 8h17c9 0 16-7 16-17h-33c-4 0-8 4-8 9z"})),U=a.a.createElement("g",{fill:"#aa7346"},a.a.createElement("path",{d:"M297 341l-4-1c-1-1-58-29-120-30-6 0-10-5-10-11s5-10 10-10c68 2 126 31 129 32a10 10 0 01-5 20zM190 134l-6-2c-2-1-38-29-80-7a10 10 0 01-10-19c55-27 100 8 102 10a10 10 0 01-6 18zM306 151a10 10 0 01-2-21l82-16a10 10 0 114 20l-82 17h-2z"})),q=a.a.createElement("path",{fill:"#7d5046",d:"M152 208c-11-1-19-12-18-23l2-16c1-12 12-20 23-18 11 1 19 11 18 23l-2 16c-1 11-12 19-23 18z"}),K=a.a.createElement("path",{fill:"#9c6846",d:"M159 151h-4l-4 28a12 12 0 1025 3l1-8c1-12-7-22-18-23z"}),Q=a.a.createElement("path",{fill:"#7d5046",d:"M325 226c-11-1-19-12-18-23l2-16c1-12 12-20 23-18 11 1 19 11 18 23l-2 16c-1 11-12 19-23 18z"}),W=a.a.createElement("path",{fill:"#9c6846",d:"M332 169h-4l-4 28a12 12 0 1025 3l1-8c1-12-7-22-18-23z"}),X=function(e){var n=e.svgRef,t=e.title,r=B(e,["svgRef","title"]);return a.a.createElement("svg",N({viewBox:"0 0 512 512",ref:n},r),t?a.a.createElement("title",null,t):null,D,V,H,J,U,q,K,Q,W)},Y=a.a.forwardRef((function(e,n){return a.a.createElement(X,N({svgRef:n},e))}));t.p;function Z(){return(Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function $(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ee=a.a.createElement("defs",null),ne=a.a.createElement("circle",{cx:256,cy:256,r:256,fill:"#ffe17d"}),te=a.a.createElement("g",{fill:"#ffd164"},a.a.createElement("ellipse",{cx:156.9,cy:247.7,rx:74.3,ry:66.1}),a.a.createElement("ellipse",{cx:355.1,cy:247.7,rx:74.3,ry:66.1}),a.a.createElement("path",{d:"M293 475A256 256 0 0195 57a255 255 0 10360 360c-44 36-101 58-162 58z"})),re=a.a.createElement("path",{fill:"#5a4650",d:"M229 229l-13-10a49 49 0 0180 0l-13 9a33 33 0 00-54 1z"}),ae=a.a.createElement("path",{fill:"#6e5a64",d:"M157 165c-9 0-18 2-27 5-7 2-14 3-22 3H74c-4 0-8 4-8 9v16c0 5 3 10 7 13l2 2c5 3 8 8 8 14v4c0 37 33 66 74 66s74-29 74-66-33-66-74-66z"}),ce=a.a.createElement("g",{fill:"#aa7346"},a.a.createElement("path",{d:"M256 398c-42 0-83-20-107-53a10 10 0 0116-13 113 113 0 00182 0 10 10 0 1116 13c-24 33-64 53-107 53zM182 151h-50a10 10 0 110-21h50a10 10 0 110 21zM380 151h-50a10 10 0 110-21h50a10 10 0 110 21z"})),le=a.a.createElement("path",{fill:"#5a4650",d:"M157 281c-32 0-58-22-58-50 0-27 26-49 58-49s58 22 58 49c0 28-26 50-58 50z"}),ie=a.a.createElement("path",{fill:"#84737b",d:"M157 206c22 0 41 6 56 14-6-22-29-38-56-38s-50 16-56 38c14-8 34-14 56-14z"}),oe=a.a.createElement("path",{fill:"#6e5a64",d:"M281 231c0 37 33 66 74 66s74-29 74-66v-4c0-6 3-11 8-14l2-2c4-3 7-8 7-13v-16c0-5-4-9-8-9h-34c-8 0-15-1-22-3-9-3-18-5-27-5-41 0-74 30-74 66z"}),ue=a.a.createElement("path",{fill:"#5a4650",d:"M297 231c0-27 26-49 58-49s58 22 58 49c0 28-26 50-58 50s-58-22-58-50z"}),se=a.a.createElement("path",{fill:"#84737b",d:"M355 206c-22 0-41 6-56 14 6-22 29-38 56-38s50 16 56 38c-14-8-34-14-56-14z"}),fe=function(e){var n=e.svgRef,t=e.title,r=$(e,["svgRef","title"]);return a.a.createElement("svg",Z({viewBox:"0 0 512 512",ref:n},r),t?a.a.createElement("title",null,t):null,ee,ne,te,re,ae,ce,le,ie,oe,ue,se)},de=a.a.forwardRef((function(e,n){return a.a.createElement(fe,Z({svgRef:n},e))})),me=(t.p,t(15)),ve=t(26);function he(){var e=Object(me.a)(["\n    70% {\n      opacity: 1;\n      background-color: ",";\n    }\n  "]);return he=function(){return e},e}function pe(){var e=Object(me.a)(["\n    0% {\n      transform: scale(0.1);\n      opacity: 0.1;\n    }\n  "]);return pe=function(){return e},e}var ge={primary:"#FFD400",secondary:"#3482B9",positive:"#49C04A",negative:"#D03930",neutral:"#AAA",light:"#ABE0F9",muted:"#EAEAEA",hotpink:"#FC8BA4",black:"#333",white:"#FFF",gray:"#CCC",dark:"#666",shadow:"rgba(0, 0, 0, 0.4)"},be={colors:ge,radii:{default:"0.2rem",sm:"0.1rem",md:"0.2rem",lg:"0.3rem",xl:"0.4rem",xxl:"0.6rem",xxxl:"1rem",round:"1000px"},fontSizes:{default:18,xs:18*.6,sm:14.4,md:18,lg:18*1.2},fontFamilies:{display:"'Black Ops One', monospace",default:"'Lato', sans-serif",voice:"'Vollkorn', serif"},shadows:{default:"0 1px 2px ".concat(ge.shadow),inset:"inset 1px 0 2px",top:"0 -2px 6px ".concat(ge.shadow),none:"none"},animations:{appear:Object(c.d)(pe()),glow:Object(c.d)(he(),Object(ve.a)(.2,ge.negative))}},we=(c.e,function(e){return function(n){return function(t){var r="function"===typeof n?n(t):n;return t.theme[e][r]}}}),Oe=we("colors"),ye=we("radii"),Ee=(we("fontSizes"),we("shadows")),je=we("fontFamilies"),xe=we("animations"),ke=(c.b,c.c);function Me(){var e=Object(me.a)(["\n  display: flex;\n  max-width: calc(100vw - ",");\n  max-height: calc(\n    100vh - ((2 * ",") + "," + ",")\n  );\n  margin-top: ",";\n  margin-bottom: ",";\n  -ms-overflow-style: none;\n  @media screen and (max-height: ",") {\n    overflow: scroll;\n  }\n  @media screen and (max-width: ",") {\n    overflow: scroll;\n  }\n"]);return Me=function(){return e},e}function Ce(){var e=Object(me.a)(["\n          "," 4s infinite ease\n        "]);return Ce=function(){return e},e}function ze(){var e=Object(me.a)(["\n  background: ",";\n  box-shadow: ",";\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n  margin-top: 1rem;\n  padding: 0.5rem;\n  animation: ",";\n"]);return ze=function(){return e},e}function Se(){var e=Object(me.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: flex-end;\n"]);return Se=function(){return e},e}function Re(){var e=Object(me.a)(["\n  font-family: ",";\n  color: ",";\n  font-size: 2rem;\n  display: flex;\n  flex: 1;\n  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.9);\n  @media screen and (max-width: 360px) {\n    font-size: 1.5rem;\n  }\n"]);return Re=function(){return e},e}function Te(){var e=Object(me.a)(["\n  display: flex;\n  width: calc("," - 1rem);\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  @media screen and (max-width: ",") {\n    width: 100vw;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n"]);return Te=function(){return e},e}function Pe(){var e=Object(me.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: ",";\n  background: ",";\n  box-shadow: ",";\n"]);return Pe=function(){return e},e}function Le(){var e=Object(me.a)(["\n  font-family: ",";\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  background: ",";\n"]);return Le=function(){return e},e}var _e=ke.div(Le(),je("default"),Oe("muted")),Ae=ke.header(Pe(),"3.8rem",Oe("black"),Ee("default")),Ge=ke.div(Te(),"1072.16px","1072.16px"),Ie=ke.div(Re(),je("display"),Oe("primary")),Fe=ke.nav(Se()),Ne=ke.div(ze(),Oe("shadow"),Ee("default"),(function(e){return e.isGameOver?Object(c.b)(Ce(),xe("glow")):"none"})),Be=ke.main(Me(),"1rem","1rem","3.8rem","3.8rem","1rem","1rem","840.44px","1072.16px"),De=t(38),Ve=t(2);function He(){return(He=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Je(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Ue=a.a.createElement("defs",null),qe=a.a.createElement("path",{fill:"#fc644f",d:"M389 271l121 163c-91 30-300 24-381-18V126c80 41 290 49 381 18L389 271z"}),Ke=a.a.createElement("path",{fill:"#f1543f",d:"M129 415l65-32-48-145-17 24z"}),Qe=a.a.createElement("path",{fill:"#ff7058",d:"M41 47v289s75-20 152 46V94C116 27 41 47 41 47z"}),We=a.a.createElement("path",{fill:"#40596b",d:"M32 0C16 0 2 13 2 29v483h59V29C61 13 48 0 32 0z"}),Xe=function(e){var n=e.svgRef,t=e.title,r=Je(e,["svgRef","title"]);return a.a.createElement("svg",He({viewBox:"0 0 512 512",ref:n},r),t?a.a.createElement("title",null,t):null,Ue,qe,Ke,Qe,We)},Ye=a.a.forwardRef((function(e,n){return a.a.createElement(Xe,He({svgRef:n},e))}));t.p;function Ze(){var e=Object(me.a)(["\n  width: 1.8rem;\n  height: 1.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: ",";\n  border-radius: ",";\n  margin: 0.2rem;\n  padding: 0.2rem;\n  background: ",";\n  transition: all 0.2s ease-in-out;\n  font-weight: bold;\n  user-select: none;\n  ",";\n"]);return Ze=function(){return e},e}function $e(){var e=Object(me.a)(["\n  width: 1.4rem;\n  height: 1.4rem;\n  animation: "," 0.2s ease-in-out;\n"]);return $e=function(){return e},e}function en(){var e=Object(me.a)(["\n  width: 1.4rem;\n  height: 1.4rem;\n  animation: "," 0.2s ease-in-out;\n"]);return en=function(){return e},e}var nn=ke(Ve.a)(en(),xe("appear")),tn=ke(Ye)($e(),xe("appear")),rn={0:"white",1:"blue",2:"green",3:"red",4:"darkblue",5:"darkgreen",6:"darkred",7:"purple",8:"darkpurple"},an=ke.div(Ze(),Ee((function(e){return e.revealed?"none":"default"})),ye("lg"),Oe((function(e){return e.revealed?"mine"===e.kind&&e.active?"negative":"white":"gray"})),(function(e){return"number"===typeof e.children?"color:  ".concat(rn[e.children]):void 0})),cn=function(e){var n=Object(r.useMemo)((function(){if(e.defused)return a.a.createElement(tn,null);if(!e.revealed||"safe"===e.kind)return null;switch(e.kind){case"empty":return e.surroundingMines;case"mine":return a.a.createElement(nn,null)}}),[e]),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=Object(r.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(r.useRef)(0),u=Object(r.useCallback)((function(){clearTimeout(i.current)}),[i]),s=Object(r.useCallback)((function(){l(!0)}),[]),f=Object(r.useCallback)((function(){l(!1)}),[]);return Object(r.useEffect)((function(){return c?i.current=setTimeout(e,n):u(),u}),[c]),{onMouseDown:s,onMouseUp:f,onMouseLeave:f,onTouchStart:s,onTouchEnd:f,onMouseMove:u}}(e.onLongPress,400);return a.a.createElement(an,Object.assign({},Object(De.a)(["onLongPress"],e),t,{active:e.active}),n)};function ln(){var e=Object(me.a)(["\n  display: flex;\n"]);return ln=function(){return e},e}function on(){var e=Object(me.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return on=function(){return e},e}var un=ke.div(on()),sn=ke.div(ln()),fn=function(e){var n=Object(r.useCallback)((function(n){return function(){return e.onTileClick(n)}}),[e]),t=Object(r.useCallback)((function(n){return function(){return e.onTileLongPress(n)}}),[e]);return a.a.createElement(un,null,e.grid.map((function(r,c){return a.a.createElement(sn,{key:c},r.map((function(r,c){var l,i;return(a.a.createElement(cn,Object.assign({key:c},r.value,{active:r.row===(null===(l=e.activeCell)||void 0===l?void 0:l.row)&&r.column===(null===(i=e.activeCell)||void 0===i?void 0:i.column),onClick:n(r),onLongPress:t(r)})))})))})))};function dn(){return(dn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function mn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var vn=a.a.createElement("defs",null),hn=a.a.createElement("path",{d:"M256 5a257 257 0 00-81 501c13 3 18-5 18-12l-1-44c-71 16-86-34-86-34-12-30-28-38-28-38-24-16 1-16 1-16 26 2 39 27 39 27 23 39 60 28 75 21 2-16 9-28 16-34-57-7-116-29-116-127 0-28 10-51 26-69-3-7-11-33 3-68 0 0 21-7 70 26a244 244 0 01128 0c49-33 70-26 70-26 14 35 6 61 3 68 16 18 26 41 26 69 0 99-60 120-117 127 10 8 18 23 18 47v71c0 7 4 15 17 12A257 257 0 00256 5z"}),pn=function(e){var n=e.svgRef,t=e.title,r=mn(e,["svgRef","title"]);return a.a.createElement("svg",dn({viewBox:"0 0 512 512",ref:n},r),t?a.a.createElement("title",null,t):null,vn,hn)},gn=a.a.forwardRef((function(e,n){return a.a.createElement(pn,dn({svgRef:n},e))}));t.p;function bn(){var e=Object(me.a)(["\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  display: flex;\n  padding: 0.4rem;\n  width: 2.2rem;\n  height: 2.2rem;\n  overflow: hidden;\n  "," {\n    display: none;\n  }\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: ",";\n  font-weight: 700;\n  text-decoration: none;\n  :hover {\n    "," {\n      display: flex;\n      animation: "," 0.3s ease;\n      padding: 0.4rem;\n    }\n    width: 12rem;\n    border-radius: 2rem;\n  }\n  transition: all 0.3s ease-in-out;\n  user-select: none;\n  outline: none;\n"]);return bn=function(){return e},e}function wn(){var e=Object(me.a)(["\n  white-space: nowrap;\n  font-size: 0.9rem;\n"]);return wn=function(){return e},e}function On(){var e=Object(me.a)(["\n  height: 2rem;\n  width: 2rem;\n"]);return On=function(){return e},e}var yn=ke(gn)(On()),En=ke.div(wn()),jn=ke.a(bn(),ye("round"),Oe("secondary"),Oe("white"),En,Ee("default"),En,xe("appear")),xn=function(){return a.a.createElement(jn,{target:"_blank",rel:"noreferrer",href:"https://github.com/alanrsoares/ts-mines","aria-label":"got to the project's github page"},a.a.createElement(yn,null),a.a.createElement(En,null,"@alanrsoares/ts-mines"))};function kn(){return(kn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Mn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Cn=a.a.createElement("defs",null),zn=a.a.createElement("circle",{cx:256.3,cy:256,r:245,fill:"#fec753"}),Sn=a.a.createElement("path",{fill:"#35528c",d:"M256 105C133 105 30 217 3 248c-4 5-4 11 0 16 27 31 130 143 253 143s226-112 253-143c4-5 4-11 0-16-27-31-130-143-253-143z"}),Rn=a.a.createElement("path",{fill:"#1f3a60",d:"M42 256c0-24 96-151 214-151C134 105 31 215 4 247c-5 5-5 13 0 18 27 32 130 142 252 142-118 0-214-127-214-151z"}),Tn=a.a.createElement("circle",{cx:256,cy:256,r:132,fill:"#99d3ff"}),Pn=a.a.createElement("path",{fill:"#5bb3ce",d:"M176 256c0-64 46-117 106-129a133 133 0 00-158 129 132 132 0 00158 129c-60-12-106-65-106-129z"}),Ln=a.a.createElement("circle",{cx:254.6,cy:256,r:65.6,fill:"#1f3a60"}),_n=a.a.createElement("circle",{cx:308.1,cy:225.6,r:27.9,fill:"#dcf3ff"}),An=function(e){var n=e.svgRef,t=e.title,r=Mn(e,["svgRef","title"]);return a.a.createElement("svg",kn({viewBox:"0 0 512 512",ref:n},r),t?a.a.createElement("title",null,t):null,Cn,zn,Sn,Rn,Tn,Pn,Ln,_n)},Gn=a.a.forwardRef((function(e,n){return a.a.createElement(An,kn({svgRef:n},e))}));t.p;function In(){var e=Object(me.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: ",";\n  background: ",";\n  color: ",";\n  box-shadow: ",";\n  position: fixed;\n  bottom: 0;\n"]);return In=function(){return e},e}function Fn(){var e=Object(me.a)(["\n  display: flex;\n"]);return Fn=function(){return e},e}function Nn(){var e=Object(me.a)(["\n    border: none;\n    background-color: ",";\n    height: 2.8rem;\n    width: 4rem;\n    ","\n    box-shadow: ",";\n    outline: none;\n    transition: all .1s ease;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s ease-in-out;\n  "]);return Nn=function(){return e},e}function Bn(){var e=Object(me.a)(["\n  border-radius: ",";\n  background-color: ",";\n  width: 1.8rem;\n  height: 1.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.1rem;\n  transition-delay: 0.3s;\n  transition: background-color 0.2s ease-in-out;\n  box-shadow: ",";\n"]);return Bn=function(){return e},e}function Dn(){var e=Object(me.a)(["\n  width: 1rem;\n  height: 1rem;\n"]);return Dn=function(){return e},e}function Vn(){var e=Object(me.a)(["\n  width: 1rem;\n  height: 1rem;\n"]);return Vn=function(){return e},e}var Hn=ke(Gn)(Vn()),Jn=ke(Ye)(Dn()),Un=ke.div(Bn(),ye("round"),(function(e){return e.active?Oe("gray")(e):Object(ve.a)(.1,Oe("gray")(e))}),Ee((function(e){return e.active?"inset":"default"}))),qn=ke.button(Nn(),(function(e){var n=Oe(e.color)(e);return e.active?n:Object(ve.a)(.5,n)}),(function(e){return"\n      border-top-".concat(e.side,"-radius: 2rem;\n      border-bottom-").concat(e.side,"-radius: 2rem;\n    ")}),Ee((function(e){return e.active?"inset":"default"}))),Kn=ke.div(Fn()),Qn=ke.div(In(),"3.8rem",Oe("dark"),Oe("white"),Ee("default")),Wn=function(e){return a.a.createElement(Qn,null,a.a.createElement(Ge,null,a.a.createElement(xn,null),a.a.createElement(Kn,null,a.a.createElement(qn,{side:"left",color:"white",active:"defuse"===e.gameMode,onClick:e.onToggleGameMode,"aria-label":"Toggle game mode"},a.a.createElement(Un,{active:"defuse"===e.gameMode},a.a.createElement(Jn,null))),a.a.createElement(qn,{side:"right",color:"white",active:"reveal"===e.gameMode,onClick:e.onToggleGameMode,"aria-label":"Toggle game mode"},a.a.createElement(Un,{active:"reveal"===e.gameMode},a.a.createElement(Hn,null))))))};function Xn(){var e=Object(me.a)(["\n  width: 0.9rem;\n  height: 0.9rem;\n  margin-right: 0.5rem;\n"]);return Xn=function(){return e},e}function Yn(){var e=Object(me.a)(["\n  height: 0.3rem;\n  overflow: hidden;\n  border-radius: ",";\n  width: 80%;\n  align-self: center;\n  background: linear-gradient(\n    to right,\n    "," 0%,\n    "," ","%,\n    "," ","%,\n    "," 100%\n  );\n"]);return Yn=function(){return e},e}function Zn(){var e=Object(me.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-size: 1.6rem;\n"]);return Zn=function(){return e},e}function $n(){var e=Object(me.a)(["\n  display: flex;\n  color: ",";\n  min-width: 8rem;\n  flex-direction: column;\n  align-items: center;\n  background: ",";\n  border-radius: ",";\n  height: 3rem;\n  justify-content: space-around;\n  @media screen and (max-width: 360px) {\n    min-width: 6rem;\n  }\n"]);return $n=function(){return e},e}var et=ke.div($n(),Oe("primary"),Oe("shadow"),ye("lg")),nt=ke.div(Zn(),Oe("primary")),tt=ke.div(Yn(),ye("default"),Oe("positive"),Oe("positive"),(function(e){return e.progress}),Oe("white"),(function(e){return e.progress}),Oe("white")),rt=ke(Gn)(Xn()),at=function(e){return a.a.createElement(et,null,a.a.createElement(nt,null,a.a.createElement(rt,null)," ",e.score),a.a.createElement(tt,{progress:e.progress}))},ct={new:a.a.createElement(Y,null),won:a.a.createElement(de,null),over:a.a.createElement(F,null)},lt=function(e){return ct[e.status]},it=function(){};function ot(){Object(l.b)(l.a),function(e){var n=Object(r.useCallback)((function(n){n.preventDefault(),e()}),[e]);Object(r.useEffect)((function(){return window.addEventListener("contextmenu",n),function(){window.removeEventListener("contextmenu",n)}}),[n])}(it);var e=k.useContainer(),n=e.state,t=e.handlers;return(a.a.createElement(_e,null,a.a.createElement(Ae,null,a.a.createElement(Ge,null,a.a.createElement(Ie,null,"[MINES]"),a.a.createElement(Ne,{isGameOver:"over"===n.gameStatus,onClick:t.onStatusClick},a.a.createElement(lt,{status:n.gameStatus})),a.a.createElement(Fe,null,a.a.createElement(at,{score:n.score,progress:n.progress})))),a.a.createElement(Be,null,a.a.createElement(fn,{grid:n.grid,activeCell:n.activeCell,onTileClick:t.onCellClick,onTileLongPress:t.onCellLongPress})),a.a.createElement(Wn,{onToggleGameMode:t.onToggleGameMode,gameMode:n.gameMode})))}n.default=function(){return a.a.createElement(c.a,{theme:be},a.a.createElement(k.Provider,null,a.a.createElement(ot,null)))}},27:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return w}));var r=t(28),a=t.n(r),c=t(30),l=t(0);function i(e,n){for(var t=e.split(/\./g),r=n.split(/\./g);t.length||r.length;){var a=Number(t.shift()),c=Number(r.shift());if(a!==c)return a>c||isNaN(c)}return!1}var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){throw new Error("Timeout exceeded")};return(function(){var t=Object(c.a)(a.a.mark((function t(r){var c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=window.setTimeout(n,e),t.next=3,fetch(r);case 3:return l=t.sent,window.clearTimeout(c),t.abrupt("return",l);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};function u(){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.caches){e.next=7;break}return e.next=3,window.caches.keys();case 3:return n=e.sent,t=n.map((function(e){return window.caches.delete(e)})),e.next=7,Promise.all(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function n(){var t,r,c,l,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o(5e3,(function(){throw new Error("Timout reached while fetching meta.json")})),n.next=4,t("meta.json?t=".concat(Date.now()));case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,l=c.version,u=e.appVersion,n.abrupt("return",i(l,u));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){window.location.reload(!0)}function v(){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:window.setTimeout(m,300),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Failed to purge cache",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:if(!e.sent||!window.confirm("A new version is available, would you like to update?")){e.next=7;break}return e.next=7,v();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Failed to check for updates:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var b=18e5;function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;Object(l.useEffect)((function(){p();var n=window.setInterval(p,e);return function(){window.clearInterval(n)}}),[e])}}).call(this,t(7))}}]);
//# sourceMappingURL=4.5f6e18c7.chunk.js.map