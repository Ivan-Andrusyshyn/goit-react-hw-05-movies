"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[388],{388:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),u=n(687),c=n.n(u),i=n(791),o=(n(26),n(218)),s=n(87),l=n(689),f=n(184),h=function(e){var t=e.value,n=e.onSubmit,r=(0,i.useState)(t),u=(0,a.Z)(r,2),c=u[0],o=u[1];return(0,f.jsxs)("form",{className:"form_movies",onSubmit:function(e){e.preventDefault(),""!==c.trim()&&n(c)},children:[(0,f.jsx)("input",{type:"text",placeholder:"Search movie",required:!0,value:null!==c&&void 0!==c?c:"",onChange:function(e){o(e.currentTarget.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},p=n(243),m=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],m=(0,i.useState)(!1),v=(0,a.Z)(m,2),d=v[0],x=v[1],b=(0,s.lr)(),k=(0,a.Z)(b,2),j=k[0],S=k[1],_=(0,l.TH)(),y=j.get("query");(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y){e.next=3;break}return e.abrupt("return");case 3:return t="".concat("https://api.themoviedb.org/3/","search/movie?query=").concat(y,"&include_adult=false&api_key=").concat("72a7646a40703400682c093b811827fe"),e.next=6,(0,p.Z)(t).then((function(e){return e.data}));case 6:n=e.sent,r=n.results,setTimeout((function(){u(r)}),1e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,setTimeout((function(){x(!1)}),1e3),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);return(0,f.jsxs)("div",{className:"container-search",children:[(0,f.jsx)(h,{value:y,onSubmit:function(e){e!==y&&(S({query:e}),u([]))}}),(0,f.jsx)("ul",{children:d?(0,f.jsx)(o.a,{}):n.map((function(e){var t=e.id,n=e.original_title;return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"".concat(t),state:{from:_},children:n})},t)}))})]})}},26:function(){}}]);
//# sourceMappingURL=388.24b60976.chunk.js.map