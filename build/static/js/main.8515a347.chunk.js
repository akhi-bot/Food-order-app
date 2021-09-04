(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__2RClC",control:"Checkout_control__3CYBy",actions:"Checkout_actions__3zGtW",submit:"Checkout_submit__XhTV9",invalid:"Checkout_invalid__3frfE"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__14zok",total:"Cart_total__39Fxt",actions:"Cart_actions__11_ts","button--alt":"Cart_button--alt__hQCTd",button:"Cart_button__3ltQC"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3Ts8K",summary:"CartItem_summary__2Vsb-",price:"CartItem_price__cYa3J",amount:"CartItem_amount__RYRQR",actions:"CartItem_actions__XMaHL"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__15mHE",icon:"HeaderCartButton_icon__n29XM",badge:"HeaderCartButton_badge__1YDRk",bump:"HeaderCartButton_bump__1IRWG"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2xfBX",description:"MealItem_description__2-ACd",price:"MealItem_price__2D_Yz"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__LxPWF","meals-appear":"AvailableMeals_meals-appear__2pwzg",mealsLoading:"AvailableMeals_mealsLoading__2IolR",mealsError:"AvailableMeals_mealsError__2ZvgQ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3tRgi",modal:"Modal_modal__TSaxN","slide-down":"Modal_slide-down__2ht3w"}},,function(e,t,n){e.exports={header:"Header_header__2iB7o","main-image":"Header_main-image__eFIXI"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1fjHu"}},function(e,t,n){e.exports={card:"Card_card__3ot4j"}},function(e,t,n){e.exports={input:"Input_input__3NOp1"}},function(e,t,n){e.exports={form:"MealItemForm_form__26l-p"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u).items,d=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),h=n.n(O),x=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},p=n(19),f=n.n(p),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),y=n(12),N=n(20),g=n.n(N),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},k=n(5),I=n(21),w=n.n(I),S=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),R=n(22),M=n.n(R),F=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(S,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},E=n(13),H=n.n(E),P=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(14),B=n.n(T),D=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),l=i[0],u=i[1],d=Object(s.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];Object(s.useEffect)((function(){(function(){var e=Object(y.a)(C.a.mark((function e(){var t,n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-f3963-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=6;break}throw console.log("response error"),new Error("Something went wrong");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){u(!1),b(e.message)}))}),[]);var O=n.map((function(e){return Object(o.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return l?Object(o.jsx)("section",{className:B.a.mealsLoading,children:"Loading..."}):m?Object(o.jsx)("section",{className:B.a.mealsError,children:m}):Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},Y=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(D,{})]})},z=n(15),L=n.n(z),V=function(e){return Object(o.jsx)("div",{className:L.a.backdrop,onClick:e.onClose})},X=function(e){return Object(o.jsx)("div",{className:L.a.modal,children:Object(o.jsx)("div",{className:L.a.content,children:e.children})})},J=document.getElementById("overlays"),Q=function(e){return Object(o.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(o.jsx)(V,{onClose:e.onClose}),J),c.a.createPortal(Object(o.jsx)(X,{children:e.children}),J)]})},W=n(7),$=n.n(W),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:$.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:$.a.summary,children:[Object(o.jsx)("span",{className:$.a.price,children:t}),Object(o.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:$.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},q=n(4),K=n.n(q),Z=n(3),U=n.n(Z),ee=function(e){return""===e.trim()},te=function(e){var t=Object(s.useState)({name:!0,street:!0,postalCode:!0,city:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(U.a.control," ").concat(a.name?"":U.a.invalid),m="".concat(U.a.control," ").concat(a.street?"":U.a.invalid),b="".concat(U.a.control," ").concat(a.postalCode?"":U.a.invalid),O="".concat(U.a.control," ").concat(a.city?"":U.a.invalid);return Object(o.jsxs)("form",{className:U.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=l.current.value,r=u.current.value,s=d.current.value,o=!ee(n),j=!ee(a),m=5===r.trim().length,b=!ee(s);c({name:o,street:j,postalCode:m,city:b}),o&&j&&b&&m&&e.onConfirm({name:n,street:a,postalCode:r,city:s})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!a.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!a.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!a.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:U.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(s.useContext)(u),n=Object(s.useState)(!1),a=Object(r.a)(n,2),c=a[0],i=a[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],p="$".concat(t.totalAmount.toFixed(2)),f=t.items.length>0,_=function(e){t.removeItem(e)},v=function(e){t.addItem(e)},N=function(){var e=Object(y.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-f3963-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:n,orderedItems:t.items})});case 3:m(!1),x(!0),t.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(o.jsx)("ul",{className:K.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:_.bind(null,e.id),onAdd:v.bind(null,e)},e.id)}))}),A=Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"}),f&&Object(o.jsx)("button",{className:K.a.button,onClick:function(){i(!0)},children:"Order"})]}),k=Object(o.jsxs)(s.Fragment,{children:[g,Object(o.jsxs)("div",{className:K.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:p})]}),c&&Object(o.jsx)(te,{onConfirm:N,onCancel:e.onClose}),!c&&A]}),I=Object(o.jsx)("p",{children:"Sending order data..."}),w=Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:K.a.actions,children:Object(o.jsx)("button",{className:K.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(Q,{onClose:e.onClose,children:[!j&&!h&&k,j&&I,!j&&h&&w]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,ce},se=function(e){var t=Object(s.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ne,{onClose:function(){a(!1)}}),Object(o.jsx)(x,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(Y,{})})]})};c.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.8515a347.chunk.js.map