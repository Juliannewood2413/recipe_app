(this.webpackJsonprecipe_app=this.webpackJsonprecipe_app||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(9),s=c.n(r),i=(c(16),c(8)),j=c.n(i),l=c(10),p=c(6),o=(c(18),c(24)),u=c(25),b=c(1);function d(e){var t=e.title,c=(e.calories,e.image),a=e.ingredients,n=e.url;return Object(b.jsxs)(o.a,{style:{width:"18rem"},children:[Object(b.jsx)(o.a.Img,{variant:"top",src:c}),Object(b.jsxs)(o.a.Body,{children:[Object(b.jsx)(o.a.Title,{children:t}),Object(b.jsx)(o.a.Text,{children:a.map((function(e){return Object(b.jsxs)("li",{children:[" ",e.text," "]})}))}),Object(b.jsx)(u.a,{variant:"primary",href:n,target:"_blank",children:"See the Recipe"})]})]})}var h=c(22),m=c(23);function O(){return Object(b.jsx)(h.a,{fluid:!0,className:"jumbotron",children:Object(b.jsxs)(m.a,{className:"container",children:[Object(b.jsx)("h1",{className:"headerh1",children:"Recipe App"}),Object(b.jsx)("p",{className:"headerpara",children:"Simple recipe app, just search, decide, and dinner is done!"})]})})}var f=function(){var e=Object(a.useState)("chicken"),t=Object(p.a)(e,2),c=t[0],n=t[1],r="https://api.edamam.com/search?q=".concat(c,"&app_id=").concat("10a7ca34","&app_key=").concat("f9403c8202d74dbc0a2df7c300eeb47a"),s=Object(a.useState)([]),i=Object(p.a)(s,2),o=i[0],u=i[1],h=Object(a.useState)(""),m=Object(p.a)(h,2),f=m[0],x=m[1];Object(a.useEffect)((function(){v()}),[c]);var v=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.hits),u(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),n(f),x("")},children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:f,onChange:function(e){x(e.target.value),console.log(f)}}),Object(b.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:o.map((function(e){return Object(b.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url},e.recipe.label)}))})]})};c(20);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.73d15572.chunk.js.map