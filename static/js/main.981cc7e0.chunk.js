(window["webpackJsonphurtigruten-home-assignment"]=window["webpackJsonphurtigruten-home-assignment"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/magnifying-glass.12a3c00e.svg"},function(e,t,n){e.exports=n.p+"static/media/cross.550eff99.svg"},function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),u=n.n(c),o=(n(11),n(1)),i=n(4),s=n.n(i),l=n(5),m=n.n(l),f=function(){var e,t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],u=n[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),f=l[0],p=l[1];function h(e){var t="http://localhost:4000/api/ships/".concat(e);fetch(t).then(function(e){if(e.ok)return e.json();console.log("error")}).then(function(e){p(e)})}return r.a.createElement("main",null,r.a.createElement("form",{className:"search-wrapper",onSubmit:function(e){return function(e){var t=document.getElementById("search-input").value;t.length>0&&h(t),u(!1),e.preventDefault()}(e)},onReset:function(e){return function(e){document.getElementById("search-input").value="",u(!1),e.preventDefault()}(e)}},r.a.createElement("input",{type:"text",id:"search-input",className:"search-bar",name:"search",placeholder:c?"":"Search",onChange:function(t){return function(t){var n=t.currentTarget.value;n.length>0&&(e&&clearTimeout(e),e=setTimeout(function(){h(n)},1e3))}(t)},onBlur:function(e){return function(e){var t=e.currentTarget.value;t.length>0?h(t):u(!1)}(e)},onFocus:function(){return u(!0)}}),r.a.createElement("button",{className:"search-btn",type:"reset"},r.a.createElement("img",{src:c?m.a:s.a,alt:c?"reset":"submit"}))),r.a.createElement("ul",null,f.map(function(e){return r.a.createElement("li",{key:e.id,className:"results"},e.name)})))};var p=function(){return r.a.createElement("main",null,r.a.createElement(f,null))};u.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.981cc7e0.chunk.js.map