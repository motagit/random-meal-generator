(this["webpackJsonprandom-meal-generator"]=this["webpackJsonprandom-meal-generator"]||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(5),i=n.n(s),a=n(4),o=n.n(a),l=n(6),d=n(2),j=n(7),u=n.n(j),h=(n(13),n(0));var b=function(){var e,t,n=Object(r.useState)(!1),c=Object(d.a)(n,2),s=c[0],i=c[1],a=Object(r.useState)(!1),j=Object(d.a)(a,2),b=j[0],m=j[1],O=Object(r.useState)([]),v=Object(d.a)(O,2),x=v[0],g=v[1];console.log(s);var p=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,g(n.meals),console.log(x),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:return e.prev=15,i(!0),f(),m(!1),e.finish(15);case 20:case"end":return e.stop()}}),e,null,[[0,12,15,20]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=[];if(s)for(var t=1;t<=20;t++)if(""!=x[0]["strIngredient"+t]&&null!=x[0]["strIngredient"+t]){var n=String(x[0]["strMeasure"+t].trimEnd()+" "+x[0]["strIngredient"+t]);e.push(Object(h.jsx)("li",{children:n},t))}return e};return Object(h.jsxs)(h.Fragment,{children:[!s&&Object(h.jsx)("h1",{className:"mainTitle",children:"It's cooking time!"}),!s&&Object(h.jsx)("h2",{className:"subTitle",children:"click in the button below to get a random recipe"}),Object(h.jsx)("button",{className:s?"topButton":"centeredButton",id:"mainButton",onClick:function(){return p()},children:"get meal \ud83d\ude0b"}),Object(h.jsx)("div",{className:"container",children:s&&(b?Object(h.jsx)("div",{class:"loading",children:Object(h.jsx)(u.a,{color:"#7c0a02",loading:b,size:100,cssOverride:{margin:"0 auto"}})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:null===(e=x[0])||void 0===e?void 0:e.strMeal}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("img",{id:"image",width:340,height:340,src:x[0].strMealThumb,alt:null===(t=x[0])||void 0===t?void 0:t.strMeal}),Object(h.jsxs)("div",{className:"ingredients",children:[Object(h.jsx)("h3",{children:"Ingredients"}),Object(h.jsx)("ul",{children:f()})]})]}),Object(h.jsxs)("div",{className:"instructions column",children:[Object(h.jsx)("h3",{children:"Instructions"}),Object(h.jsx)("p",{children:function(){var e=[];return s&&x[0].strInstructions.match(/\n/g)&&(e=x[0].strInstructions.split()),e}()})]})]}))})]})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d7fe50cd.chunk.js.map