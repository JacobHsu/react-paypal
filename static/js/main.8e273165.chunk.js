(this["webpackJsonpmy-paypal"]=this["webpackJsonpmy-paypal"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),i=n.n(o),a=(n(11),n(6)),s=n(3),u=n.n(s),d=n(5),j=n(0);function l(){var e=Object(c.useRef)(),t=77.77,n="fancy chair, like new",r="https://media.istockphoto.com/vectors/old-wooden-chair-isolated-on-white-backgroundfurniture-for-dining-vector-id1159568874?k=20&m=1159568874&s=612x612&w=0&h=DazRv9-NA88QjTRG3B58zAu58AXMyGCV9jc6gmjY_Hc=";return Object(c.useEffect)((function(){window.paypal.Buttons({createOrder:function(e,t,n){return t.order.create({intent:"CAPTURE",purchase_units:[{description:"Cool looking table",amount:{currency_code:"USD",value:77.77}}]})},onApprove:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.order.capture();case 2:c=e.sent,console.log(c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}).render(e.current)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[n," for $",t]}),Object(j.jsx)("img",{alt:n,src:r,width:"200"}),Object(j.jsx)("div",{ref:e})]})}n(14);var f=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),n?Object(j.jsx)(l,{}):Object(j.jsx)("button",{onClick:function(){r(!0)},children:"CheckOut"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.8e273165.chunk.js.map