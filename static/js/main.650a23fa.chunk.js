(this.webpackJsonpchat_room=this.webpackJsonpchat_room||[]).push([[0],[,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/foogle.f7fe1a38.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=(a(12),a(4),a(1)),l=a.n(o),s=a(6),m=a(2),u=function(e){var t=e.label;return r.a.createElement("div",{className:"recipe-tag"},t)},p=function(e){var t=e.title,a=e.image,n=e.ingredientLines,c=e.tags,i=e.source,o=e.url,l=e.cookingTime,s=n.length;return l=Math.max(l,20),r.a.createElement("div",{className:"recipe-container"},r.a.createElement("div",{className:"recipe-title-short-desc"},r.a.createElement("span",{className:"recipe-title"},t),r.a.createElement("br",null),r.a.createElement("span",{className:"recipe-short-desc"},"Cooking Time: ~",l," minutes \xa0 \xa0 Ingredients required: ",s," \xa0 \xa0 Recipe: ",r.a.createElement("a",{href:o},i))),r.a.createElement("br",null),r.a.createElement("div",{className:"centering recipeBox"},r.a.createElement("div",{className:"centering"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("div",{className:"centering tag-container"},c.map((function(e){return r.a.createElement(u,{key:e+""+Math.random(),label:e})})))),r.a.createElement("div",{className:"centering ingredients"},r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",null,e)}))))))},d=function(e){var t=e.id,n=e.parentCallBack;return r.a.createElement("div",{className:"form-container"},r.a.createElement("a",{href:"/foogle",alt:"Foogle"},r.a.createElement("img",{src:a(14),alt:"Foogle",className:"logo-foogle"})),r.a.createElement("form",{id:t,className:"search-form",onSubmit:function(e){e.preventDefault();var t=document.getElementById("recipeSearch-keyword").value;n(t)}},r.a.createElement("input",{id:t+"-keyword",type:"text",className:"search-bar",placeholder:"Enter any dish here...",minLength:"1",autoComplete:"off"}),r.a.createElement("button",{id:t+"-button",type:"submit",className:"button-style-e"},"Search")))},f=function(){function e(e,t,a){return"https://api.edamam.com/search"+"?q=".concat(e,"&app_id=").concat("0fd4faa5","&app_key=").concat("8baf31646a8d0037546284406907bb6d","&from=").concat(t,"&to=").concat(a)}var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),f=u[0],h=u[1],g=function(){var t=Object(s.a)(l.a.mark((function t(a,n,r){var c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch(e(a,n,r),{headers:{"Accept-Encoding":"gzip"},method:"GET"});case 4:return c=t.sent,t.next=7,c.json();case 7:(o=t.sent).hits.length>0?i(o.hits):window.alert("No recipes found for ".concat(a,". Please try another item."));case 9:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){g(f,0,50)}),[f]),r.a.createElement("div",{className:"App"},r.a.createElement(d,{id:"recipeSearch",parentCallBack:function(e){h(e),console.log(e)}}),r.a.createElement("div",{className:"recipeContainer"},c.map((function(e){return r.a.createElement(p,{key:e.recipe.label+""+Math.random(),title:e.recipe.label,image:e.recipe.image,ingredientLines:e.recipe.ingredientLines,tags:function(){var t=e.recipe.dietLabels,a=e.recipe.healthLabels,n=[];return t.forEach((function(e){return n.push(e)})),a.forEach((function(e){return n.push(e)})),n}(),source:e.recipe.source,url:e.recipe.url,cookingTime:e.recipe.totalTime})}))))},h=function(){return r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.650a23fa.chunk.js.map