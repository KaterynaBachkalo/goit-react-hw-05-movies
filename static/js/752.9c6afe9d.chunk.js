"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[752],{752:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var r,a,u,i,c=n(861),o=n(439),s=n(757),p=n.n(s),l=n(168),f=n(444),d=f.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  padding: 30px 0;\n\n  .input {\n    font-size: 20px;\n    width: 300px;\n    padding: 15px;\n    border-radius: 15px;\n  }\n\n  .button {\n    padding: 15px;\n    cursor: pointer;\n    border-radius: 15px;\n    border: 1px solid tomato;\n    background-color: tomato;\n\n    &:hover,\n    &:focus {\n      background-color: orange;\n    }\n  }\n"]))),h=f.ZP.ul(a||(a=(0,l.Z)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0px 15px;\n\n  .link {\n    font-size: 20px;\n    text-decoration: none;\n  }\n"]))),v=n(791),x=["title","titleId"];function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},m.apply(this,arguments)}function b(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function g(t,e){var n=t.title,r=t.titleId,a=b(t,x);return v.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},a),n?v.createElement("title",{id:r},n):null,u||(u=v.createElement("g",{id:"search"})),i||(i=v.createElement("path",{d:"M496.131 435.698l-121.276-103.147c-12.537-11.283-25.945-16.463-36.776-15.963 28.628-33.534 45.921-77.039 45.921-124.588 0-106.039-85.961-192-192-192s-192 85.961-192 192 85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-0.5 10.831 4.68 24.239 15.963 36.776l103.147 121.276c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128s57.308-128 128-128 128 57.308 128 128-57.307 128-128 128z"})))}var y=v.forwardRef(g),w=(n.p,n(87)),j=n(689),Z=n(390),k=n(53),I=n(184),O=function(){var t=(0,w.lr)(),e=(0,o.Z)(t,2),n=e[0],r=e[1],a=(0,j.TH)(),u=(0,v.useState)(!1),i=(0,o.Z)(u,2),s=i[0],l=i[1],f=(0,v.useState)(null),x=(0,o.Z)(f,2),m=x[0],b=x[1],g=(0,v.useState)(null),O=(0,o.Z)(g,2),N=O[0],z=O[1],E=n.get("query");return(0,v.useEffect)((function(){if(E){var t=function(){var t=(0,c.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,(0,Z.$7)(E);case 4:e=t.sent,z(e.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),b(t.t0.message);case 11:return t.prev=11,l(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t(E)}}),[E]),(0,I.jsxs)("div",{children:[(0,I.jsxs)(d,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget.elements.searchQuery.value;r({query:e})},children:[(0,I.jsx)("input",{className:"input",type:"text",name:"searchQuery"}),(0,I.jsx)("button",{className:"button",type:"submit",children:(0,I.jsx)(y,{})})]}),(0,I.jsxs)("div",{children:[s&&(0,I.jsx)(k.a,{}),m&&(0,I.jsx)("p",{className:"error",children:m}),N&&(0,I.jsx)(h,{children:N.map((function(t){var e=t.title,n=t.id;return(0,I.jsx)("li",{children:(0,I.jsx)(w.rU,{className:"link",state:{from:a},to:"/movies/".concat(n),children:e})},n)}))})]})]})}},390:function(t,e,n){n.d(e,{$7:function(){return s},Bt:function(){return f},Y5:function(){return p},wr:function(){return o},y:function(){return l}});var r=n(861),a=n(757),u=n.n(a),i=n(243),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTQ4NDU5YzkwODljZDQyY2Q1MzYwY2JiNWMxNmEwNiIsInN1YiI6IjY1MjgxNWE0Mzc4MDYyMDEzOWExMjI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4tvuZQaDxtSX7MEVnQ8Z9bY5zeIDO3IhkSXhrJbyhgM"}},o=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",c);case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),c);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=752.9c6afe9d.chunk.js.map