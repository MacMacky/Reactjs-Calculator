(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5391:function(e,a,n){e.exports=n(5500)},5396:function(e,a,n){},5397:function(e,a,n){},5500:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),c=n(24),i=n.n(c),r=(n(5396),n(5397),n(17)),o=Object(r.createMuiTheme)({palette:{primary:{main:"#1565c0"},secondary:{main:"#9e9e9e"}}}),u=n(2);var s=function(e){return l.a.createElement(r.MuiThemeProvider,{theme:o},l.a.createElement(u.f,{item:!0,container:!0,id:"app-container",justify:"center",xs:12},l.a.createElement(u.f,{item:!0,xs:4}),l.a.createElement(u.f,{item:!0,xs:4},l.a.createElement(u.f,{item:!0,container:!0,justify:"center",spacing:8},e.children)),l.a.createElement(u.f,{item:!0,xs:4})))},d=n(78),h=n(11),f=n(76);var v=function(e){return e.children.length?1===e.children.length?l.a.createElement(u.f,{item:!0},e.children):e.children.map(function(a,n){return l.a.createElement(u.f,{item:!0,key:n,xs:e.size&&e.size},a)}):""};function m(e){return e.hasIcon?l.a.createElement(u.d,{onClick:e.handleClick,className:"fab",color:e.color,variant:"extended"},l.a.createElement(e.label,null)):l.a.createElement(u.a,{fullWidth:e.isFullWidth,onClick:e.handleClick,color:e.color,className:"calculator-button ".concat(e.classes),variant:"contained"},e.label)}m.defaultProps={color:"primary",isFullWidth:!1,hasIcon:!1,classes:""};var C=m;function k(e){return l.a.createElement(u.f,{container:!0,spacing:8,item:!0},l.a.createElement(v,null,l.a.createElement(C,{label:f.a,handleClick:function(){e.handleClick("ERASE")},hasIcon:!0}),l.a.createElement(C,{handleClick:function(){e.handleClick("CE")},label:"CE"}),l.a.createElement(C,{handleClick:function(){e.handleClick("C")},label:"C"}),l.a.createElement(C,{handleClick:function(){e.handleClick("+")},label:"+"}),l.a.createElement(C,{handleClick:function(){e.handleClick("\u221a")},label:"\u221a"})))}k.defaultProps={handleClick:function(e){console.log(e.target)}};var E=k;function g(e){return l.a.createElement(u.f,{container:!0,spacing:8,item:!0},l.a.createElement(v,null,l.a.createElement(C,{label:"7",handleClick:function(){e.handleClick("7")}}),l.a.createElement(C,{handleClick:function(){e.handleClick("8")},label:"8"}),l.a.createElement(C,{handleClick:function(){e.handleClick("9")},label:"9"}),l.a.createElement(C,{handleClick:function(){e.handleClick("/")},label:"/"}),l.a.createElement(C,{handleClick:function(){e.handleClick("%")},label:"%"})))}g.defaultProps={handleClick:function(e){console.log(e.target)}};var p=g;function b(e){return l.a.createElement(u.f,{item:!0,spacing:8,container:!0},l.a.createElement(v,null,l.a.createElement(C,{label:"4",handleClick:function(){e.handleClick("4")}}),l.a.createElement(C,{handleClick:function(){e.handleClick("5")},label:"5"}),l.a.createElement(C,{handleClick:function(){e.handleClick("6")},label:"6"}),l.a.createElement(C,{handleClick:function(){e.handleClick("*")},label:"*"}),l.a.createElement(C,{handleClick:function(){e.handleClick("1/x")},classes:"text-lowercase",label:"1/x"})))}b.defaultProps={handleClick:function(e){console.log(e.target)}};var O=b;function j(e){return l.a.createElement(u.f,{item:!0,spacing:8,container:!0},l.a.createElement(v,null,l.a.createElement(C,{label:"1",handleClick:function(){e.handleClick("1")}}),l.a.createElement(C,{handleClick:function(){e.handleClick("2")},label:"2"}),l.a.createElement(C,{handleClick:function(){e.handleClick("3")},label:"3"}),l.a.createElement(C,{handleClick:function(){e.handleClick("-")},label:"-"}),l.a.createElement(C,{handleClick:function(){e.handleClick("=")},classes:"text-lowercase",label:"="})))}j.defaultProps={handleClick:function(e){console.log(e.target)}};var w=j;function x(e){return l.a.createElement(u.e,{fullWidth:!0,variant:"outlined",id:"input"},l.a.createElement(u.g,{labelWidth:0,value:e.value,onChange:e.handleChange}))}x.defaultProps={value:"b",handleChange:function(e){console.log(e.target.value)}};var y=x,S=n(77),M=n.n(S);var W=function(e){return l.a.createElement("div",{id:"img-container"},l.a.createElement("img",{src:M.a,className:"App-logo",alt:"logo"}))};function P(e){return l.a.createElement(u.f,{item:!0,container:!0,spacing:8},l.a.createElement(v,{size:6},l.a.createElement(C,{label:"0",isFullWidth:!0,handleClick:function(){e.handleClick("0")}}),l.a.createElement(C,{label:".",isFullWidth:!0,handleClick:function(){e.handleClick(".")}})))}P.defaultProps={handleClick:function(e){console.log(e.target)}};var I=P,F=n(18);String.prototype.count=function(e){if(e&&"string"===typeof e&&0!==this.length){var a=this.indexOf(e);if(-1===a)return 0;for(var n=0,t=this.length,l=e.length;a<t;)this.substring(a,a+l)===e&&n++,a+=l;return n}return 0};var A=function(){var e,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments.length>2?arguments[2]:void 0,c=0;if("%"===l)return c=(e=B(n,"%")?z(n):N(n))*(a=B(t,"%")?z(t):N(t));switch(e=N(n),a=N(t),l){case"+":c=e+a;break;case"-":c=e-a;break;case"/":c=e/a;break;case"*":c=e*a;break;default:c=e+a}return c},N=function(e){return e%1<1?parseFloat(e):parseInt(e)},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return parseFloat(e)*(1/parseInt(R(e)))},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"1".concat(1===e.count("%")?"00":"0".repeat(2*e.count("%")))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.indexOf(a)>=0},J=function(){for(var e=0,a=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{operations:[],value:""}).operations,n=a.length,t=null,l="",c="",i="";e<n;)l=a[e],T(l)?(i=a[e+1],c=a[e-1],t=null!==t?A(t,i,l):B(c,"%")||B(i,"%")?A(c,i,"%"):A(c,i,l),e+=2):e++;return t},T=function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:""){case"+":case"-":case"/":case"*":return!0;default:return!1}},q="CHANGE_VALUE",G={operations:[],value:"0",isMathSignClicked:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"",payload:""};switch(a.type){case q:return Object(h.a)({},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{operations:[],value:"0",isMathSignClicked:!1},n=[],t="",l=a.operations.length;switch(e){case"0":var c=0===parseInt(a.value)?"0":"".concat(a.value,"0");return Object(h.a)({},a,{value:c});case"%":return Object(h.a)({},a,{value:a.value+e});case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return"0"===a.value?(n=Object(F.a)(a.operations),t=e):a.isMathSignClicked?(n=Object(F.a)(a.operations),t=e):a.value.indexOf("%")>0?(n=[].concat(Object(F.a)(a.operations),[a.value,"*"]),t=e):(n=Object(F.a)(a.operations),t="".concat(a.value).concat(e)),Object(h.a)({},a,{operations:n,value:t,isMathSignClicked:!1});case"ERASE":return Object(h.a)({},a,{value:"0"===a.value||1===a.value.length?"0":a.value.slice(0,a.value.length-1)});case"C":return{operations:[],value:"0"};case"CE":return Object(h.a)({},a,{value:"0"});case"\u221a":return Object(h.a)({},a,{value:"0"===a.value?"0":Math.sqrt(a.value).toString()});case"+":case"-":case"/":case"*":return a.isMathSignClicked?a:(n=[].concat(Object(F.a)(a.operations),[a.value,e]),Object(h.a)({},a,{operations:n,value:a.value,isMathSignClicked:!0}));case"=":return B(a.value,"0")&&B(a.value,"%")?(t="0",Object(h.a)({},a,{value:t})):l&&a.value!==a.operations[l-1]&&1!==l?(n=[].concat(Object(F.a)(a.operations),[a.value]),{operations:[t=J({operations:n}).toString()],value:t,isMathSignClicked:!1}):a;case".":return a.value.includes(".")?a:(t="".concat(a.value).concat(e),Object(h.a)({},a,{value:t}));case"1/x":return t="0"===a.value?"0":(1/N(a.value)).toString(),Object(h.a)({},a,{value:t});default:return Object(h.a)({},a,{value:a.value})}}(a.payload,e));default:return e}};var L=function(e){var a=Object(t.useReducer)(H,G),n=Object(d.a)(a,2),c=n[0],i=n[1],r=function(e){return i({type:q,payload:e})};return l.a.createElement(u.b,{raised:!0,id:"calc-card"},l.a.createElement(u.c,null,l.a.createElement(v,null,l.a.createElement(W,null),l.a.createElement(y,{value:c.value}),l.a.createElement(E,{handleClick:r}),l.a.createElement(p,{handleClick:r}),l.a.createElement(O,{handleClick:r}),l.a.createElement(w,{handleClick:r}),l.a.createElement(I,{handleClick:r}))))};var U=function(){return l.a.createElement(s,null,l.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,a,n){e.exports=n.p+"static/media/logo.64f907e5.svg"}},[[5391,1,2]]]);
//# sourceMappingURL=main.66f1845c.chunk.js.map