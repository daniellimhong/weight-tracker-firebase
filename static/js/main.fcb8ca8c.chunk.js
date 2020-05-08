(this["webpackJsonpweight-tracker-firebase"]=this["webpackJsonpweight-tracker-firebase"]||[]).push([[0],{178:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(34),c=n.n(i),o=(n(73),n(9)),l=n(4),u=n(1),d=n(2),s=(n(74),n(61));function h(){var e=Object(u.a)(["\n  margin: 0 auto;\n  width: 96vw;\n  height: 50vh;\n  background-color: #f9f9f9;\n  border-radius: 20px;\n  margin-bottom: 1em;\n  -webkit-box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);\n  -moz-box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);\n  box-shadow: 4px 4px 12px -3px rgba(0, 0, 0, 0.63);\n\n  @media (min-width: 768px) {\n    width: 70vw;\n  }\n"]);return h=function(){return e},e}var f=function(e){var t=e.data,n=t.map((function(e){return e.date})),a=t.map((function(e){return e.weight}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,r.a.createElement(s.a,{data:{labels:n,datasets:[{label:"Weight",data:a}]},options:{plugins:{datalabels:{align:"end",rotation:20}},legend:{display:!1},title:{display:!0,text:"Daniel's Weight Chart",fontSize:18,fontFamily:"Montserrat"},scales:{yAxes:[{ticks:{suggestedMin:Math.min.apply(Math,Object(o.a)(a))-5,suggestedMax:Math.max.apply(Math,Object(o.a)(a))+5,stepSize:2}}]},maintainAspectRatio:!1}})))},p=d.a.div(h());function m(){var e=Object(u.a)([""]);return m=function(){return e},e}function g(){var e=Object(u.a)(["\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1em;\n  //   border: 1px solid black;\n"]);return b=function(){return e},e}var v=function(e){var t=e.isAdd,n=e.setIsAdd;return r.a.createElement(w,null,r.a.createElement(x,{onClick:function(){n(!t)}},"Add Log"))},w=d.a.div(b()),x=(d.a.div(g()),d.a.button(m()));function j(){var e=Object(u.a)(["\n"]);return j=function(){return e},e}function E(){var e=Object(u.a)(["\n    width: 100%;\n    height: 100px; // change later\n    // border: 1px solid black;\n    text-align: center;\n    margin: 0;\n\n"]);return E=function(){return e},e}var y=d.a.header(E()),O=d.a.h1(j());function k(){return r.a.createElement(y,null,r.a.createElement(O,null,"Daniel's Fitness Tracker"))}var C=n(66),A=n.n(C);function S(){var e=Object(u.a)(["\n  color: black;\n"]);return S=function(){return e},e}function I(){var e=Object(u.a)(["\n  @media (max-width: 768px) {\n    font-size: 0.9em;\n  }\n"]);return I=function(){return e},e}function D(){var e=Object(u.a)(["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid grey;\n\n  @media (max-width: 768px) {\n    width: 95%;\n  }\n"]);return D=function(){return e},e}function M(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n\n  //   border: 1px solid black;\n  margin: 10px 0 10px 0;\n"]);return M=function(){return e},e}var W=function(e){var t=e.props,n=t.date,a=t.weight,i=t.calories,c=t.activity,o=t.description,u=r.a.useState(!1),d=Object(l.a)(u,2),s=d[0],h=d[1];function f(){h(!s)}return r.a.createElement(L,null,r.a.createElement(B,null,r.a.createElement(T,{onClick:f},n),r.a.createElement(T,null,"Weight: ",a),r.a.createElement(T,null,"Calories: ",i),r.a.createElement(A.a,{isOpen:s,style:z},r.a.createElement(B,{style:F},r.a.createElement("h",{onClick:f},n),r.a.createElement(J,null,"Weight: ",a),r.a.createElement(J,null,"Calories: ",i),r.a.createElement(J,null,"Activity: ",c?"Yes":"None"),r.a.createElement(J,null,"Description: ",o),r.a.createElement("button",{onClick:f},"Close")))))},z={overlay:{backgroundColor:"#00aeef"},content:{display:"flex",justifyContent:"center",width:"50%",height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},F={flexDirection:"column",justifyContent:"center",borderBottom:"none"},L=d.a.div(M()),B=d.a.div(D()),T=d.a.p(I()),J=Object(d.a)(T)(S()),K=function(e){var t=e.data.map((function(e){return r.a.createElement(W,{key:"Date: ".concat(e.date," & ID: ").concat(e.id),props:{date:e.date,weight:e.weight,calories:e.calories,activity:e.activity,description:e.description}})}));return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Tracking Log"),t)};function N(){var e=Object(u.a)(["\n  width: 50%;\n  height: 40%;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]);return N=function(){return e},e}function R(){var e=Object(u.a)(["\n  width: 25%;\n  height: 5%;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]);return R=function(){return e},e}function V(){var e=Object(u.a)(["\n  border: 1px solid black;\n  width: 800px;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  // flex-wrap: wrap;\n  // background-color: ;\n\n  @media (max-width: 768px) {\n    width: 95%;\n  }\n"]);return V=function(){return e},e}function Y(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  // choose color\n  // background-color: ;\n"]);return Y=function(){return e},e}var P=function(e){var t=e.isAdd,n=e.setIsAdd,i=e.newId,c=e.handleAddClick,o=Object(a.useState)(""),u=Object(l.a)(o,2),d=u[0],s=u[1],h=Object(a.useState)(0),f=Object(l.a)(h,2),p=f[0],m=f[1],g=Object(a.useState)(0),b=Object(l.a)(g,2),v=b[0],w=b[1],x=Object(a.useState)(!1),j=Object(l.a)(x,2),E=j[0],y=j[1],O=Object(a.useState)(""),k=Object(l.a)(O,2),C=k[0],A=k[1],S=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return"".concat(n,"/").concat(t,"/").concat(a)}();return r.a.createElement(Q,null,r.a.createElement(U,null,r.a.createElement("h2",null,"Add Log for ",S),r.a.createElement(G,{placeholder:"Weight",onChange:function(e){return m(e.target.value)}}),r.a.createElement(G,{placeholder:"Calories",onChange:function(e){return w(e.target.value)}}),r.a.createElement("p",null,"Activity"," ",r.a.createElement("input",{type:"checkbox",onChange:function(){y(!E)}})),r.a.createElement($,{placeholder:"Notes",onChange:function(e){return A(e.target.value)}}),r.a.createElement(G,{placeholder:"Password",type:"password",onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(){"danielhong"===d?c({id:i,date:S,weight:p,calories:v,activity:E,description:C}):alert("Incorrect password! Try again.")}},"Add"),r.a.createElement("button",{type:"button",onClick:function(){return n(!t)}},"Cancel")))},Q=d.a.div(Y()),U=d.a.form(V()),G=d.a.input(R()),$=d.a.textarea(N()),q=(n(178),r.a.createContext(null));var H=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),u=Object(l.a)(c,2),d=u[0],s=u[1],h=Object(a.useContext)(q);Object(a.useEffect)((function(){h.logs().once("value",(function(e){var t=e.val();i(p(t))})),console.log(n)}),[]);var p=function(e){var t=[];for(var n in e){var a=e[n];a.log=n,t.push(a)}return t},m=function(e){return Object(o.a)(e).sort((function(e,t){return t.id-e.id}))}(n);return r.a.createElement("div",{className:"App"},d?r.a.createElement(P,{handleAddClick:function(e){i([].concat(Object(o.a)(n),[e])),h.logs().push(e,(function(){console.log("Log successfully tracked!")})),s(!1)},isAdd:d,setIsAdd:s,newId:n.length}):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(f,{data:n}),r.a.createElement(v,{isAdd:d,setIsAdd:s}),r.a.createElement(K,{data:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(67),Z=n(36),_=n.n(Z),ee=(n(182),{apiKey:"AIzaSyATQGY5x0KdzkQVVJVo39fUphuwK0Wn15g",authDomain:"daniel-weight-tracker.firebaseapp.com",databaseURL:"https://daniel-weight-tracker.firebaseio.com",projectId:"daniel-weight-tracker",storageBucket:"daniel-weight-tracker.appspot.com"}),te=function e(){var t=this;Object(X.a)(this,e),this.logs=function(){return t.db.ref("logs")},_.a.initializeApp(ee),this.db=_.a.database()};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q.Provider,{value:new te},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,n){e.exports=n(185)},73:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.fcb8ca8c.chunk.js.map