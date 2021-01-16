(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(19),o=n.n(s),i=(n(26),n(4)),u=n.n(i),j=n(8),l=n(6),d=n(20),b=n(3);function O(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:[].concat(Object(d.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});default:return e}}var p=n(9),x=n.n(p),h={transactions:[],error:null,loading:!0},f=Object(a.createContext)(h),m=function(e){var t=e.children,n=Object(a.useReducer)(O,h),c=Object(l.a)(n,2),s=c[0],o=c[1],i=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/v1/transactions");case 3:t=e.sent,o({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("/api/v1/transactions/".concat(t));case 3:o({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,x.a.post("/api/v1/transactions",t,n);case 4:r=e.sent,o({type:"ADD_TRANSACTION",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(f.Provider,{value:{transactions:s.transactions,error:s.error,loading:s.loading,getTransactions:i,deleteTransaction:d,addTransaction:b},children:t})},v=function(){var e=Object(a.useContext)(f).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"Your Balance"}),Object(r.jsx)("h1",{children:e})]})},T=function(){return Object(r.jsx)("h2",{children:"Expense Tracker"})},N=function(){var e=Object(a.useContext)(f).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)*-1..toFixed(2);return Object(r.jsxs)("div",{className:"inc-exp-container",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Income"}),Object(r.jsxs)("p",{className:"money plus",children:["$",t]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Expense"}),Object(r.jsxs)("p",{className:"money minus",children:["$",n]})]})]})},y=function(e){var t=e.transaction,n=Object(a.useContext)(f).deleteTransaction,c=t.amount<0?"-":"+";return Object(r.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(r.jsxs)("span",{children:[c,"$",Math.abs(t.amount)]}),Object(r.jsx)("button",{onClick:function(){return n(t._id)},className:"delete-btn",children:"x"})]})},A=function(){var e=Object(a.useContext)(f),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"History"}),Object(r.jsx)("ul",{className:"list",children:t.map((function(e){return Object(r.jsx)(y,{transaction:e},e.id)}))})]})},R=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(a.useContext)(f).addTransaction;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Add new transaction"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+i};j(t)},id:"form",children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{htmlFor:"text",children:"Text"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(r.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(r.jsx)("input",{type:"number",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(r.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var C=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(T,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(v,{}),Object(r.jsx)(N,{}),Object(r.jsx)(A,{}),Object(r.jsx)(R,{})]})]})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.958022b0.chunk.js.map