"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{46:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(861),s=n(439),a=n(687),i=n.n(a),c=n(243),o=n(689),l=n(791),u=n(218),d=n(87),v=n(184),h=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("ul",{className:"details_list",children:[(0,v.jsx)("li",{children:(0,v.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(l.Suspense,{fallback:(0,v.jsx)(u.a,{}),children:(0,v.jsx)(o.j3,{})})]})},x=function(e){var r=e.title,n=e.img,t=e.genres,s=e.vote,a=e.overview;return(0,v.jsxs)("div",{className:"details_page",children:[(0,v.jsx)("img",{src:n,alt:"Movie Image"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:r}),(0,v.jsxs)("p",{children:["User Score:",s()]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:a}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("div",{className:"genres_wrapp",children:t()})]})]})},j=n(983),m=n(853),p=function(){var e,r=(0,o.UO)(),n=(0,l.useState)({}),a=(0,s.Z)(n,2),p=a[0],f=a[1],g=(0,o.TH)().state,w=(0,l.useRef)(null!==(e=null===g||void 0===g?void 0:g.from)&&void 0!==e?e:"/movies");(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n,t,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat("https://api.themoviedb.org/3/","movie/").concat(r.movieId,"?api_key=").concat("72a7646a40703400682c093b811827fe"),e.next=4,c.Z.get(n);case 4:t=e.sent,s=t.data,setTimeout((function(){f(s)}),500),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var k=p.original_title,_=p.poster_path,b=p.genres,N=p.overview,U=p.vote_average;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j.Pd.Provider,{value:{className:"back-icon"},children:(0,v.jsxs)(d.rU,{to:w.current,className:"btn_back",children:[(0,v.jsx)(m.Ao2,{}),"Back"]})}),(0,v.jsx)("div",{className:"container_details",children:k?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{title:k,img:"".concat("https://image.tmdb.org/t/p/w342").concat(_),genres:function(){if(b)return b.map((function(e){var r=e.name;return(0,v.jsx)("p",{children:r},r)}))},vote:function(){return Math.floor(Number(10*U))+"%"},overview:N}),(0,v.jsx)(h,{})]}):(0,v.jsx)(u.a,{})})]})}}}]);
//# sourceMappingURL=46.02ee267d.chunk.js.map