(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{38:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a.n(c),o=a(29),s=a.n(o),i=(a(38),a(12)),j=a(3),l=a(6),p=a.n(l),u=a(11),h=a(5),d=a(13),b=a(32),g=a(30),E=a.n(g).a.create({baseURL:"https://testetrabalhofacul-com-br.umbler.net/",headers:{"Content-Type":"application/json ",Accept:"application/json","Access-Control-Origin":"*"}}),O=Object(c.createContext)({signed:!1}),A=function(e){var t=e.children,a=Object(c.useState)(!1),r=Object(h.a)(a,2),o=r[0],s=r[1];function i(){return(i=Object(u.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/usuario/login",{email:t,senha:a});case 2:s(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsx)(O.Provider,{value:{signed:o,login:function(e,t){return i.apply(this,arguments)},logout:function(){s(!1)}},children:t})},f=O,x=(a(57),a.p+"static/media/Asset 11.99b3dcbf.svg"),m="data:image/png;base64,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";function C(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),s=Object(h.a)(o,2),l=s[0],g=s[1],E=Object(c.useContext)(f).login,O=Object(c.useState)(!1),A=Object(h.a)(O,2),C=A[0],I=A[1],w=Object(j.f)();function S(){return(S=Object(u.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:a,senha:l},e.prev=2,e.next=5,E(n);case 5:w.push("/products"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Falha no login, tente novamente."),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"logon-container",children:[Object(n.jsxs)("section",{className:"form",children:[Object(n.jsx)("img",{src:m,alt:"Be The Hero"}),Object(n.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(n.jsx)("h1",{children:"Fa\xe7a seu login"}),Object(n.jsx)("input",{type:"email",placeholder:"E-mail",value:a,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("input",{type:C?"text":"password",placeholder:"Senha",value:l,onChange:function(e){return g(e.target.value)}}),Object(n.jsx)("i",{onClick:function(){I(!C)},children:Object(n.jsx)(b.a,{size:16,color:"#000"})}),Object(n.jsx)("button",{className:"button",children:"Entrar"}),Object(n.jsxs)(i.b,{className:"back-link",to:"/register",children:[Object(n.jsx)(d.b,{size:16,color:"#2BDA8E"}),"N\xe3o tenho cadastro"]})]})]}),Object(n.jsx)("img",{src:x,alt:"FazenTECH",width:"600px"})]})}a(63);function I(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),s=Object(h.a)(o,2),l=s[0],b=s[1],g=Object(c.useState)(""),O=Object(h.a)(g,2),A=O[0],f=O[1],x=Object(j.f)();function C(){return(C=Object(u.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:l,nome:a,senha:A},e.prev=2,e.next=5,E.post("usuario",n);case 5:alert("Cadastro realizado."),x.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),alert("Erro no cadastro, tente novamente."),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(n.jsx)("div",{className:"register-container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("img",{src:m,alt:"FazenTECH"}),Object(n.jsx)("h1",{children:"Cadastro"}),Object(n.jsx)("p",{children:"Fa\xe7a seu cadastro para ajudar o agro-neg\xf3cio local"}),Object(n.jsxs)(i.b,{className:"back-link",to:"/",children:[Object(n.jsx)(d.a,{size:16,color:"#2BDA8E"}),"J\xe1 tenho cadastro"]})]}),Object(n.jsxs)("form",{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(n.jsx)("input",{placeholder:"Nome",value:a,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("input",{placeholder:"E-mail",type:"email",value:l,onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("input",{placeholder:"Senha",type:"password",value:A,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("button",{className:"button",type:"submit",children:"Cadastrar"})]})]})})}a(64);function w(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),s=Object(h.a)(o,2),l=s[0],b=s[1],g=Object(c.useState)(""),O=Object(h.a)(g,2),A=O[0],f=O[1],x=Object(c.useState)(void 0),C=Object(h.a)(x,2),I=C[0],w=C[1];Object(j.f)();function S(){return(S=Object(u.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nome:a,preco:l,descricao:A,foto:I},e.prev=2,e.next=5,E.post("produtos",n);case 5:alert("Cadastro realizado."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Erro no cadastro, tente novamente."),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(n.jsx)("div",{className:"add-product-container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("img",{src:m,alt:"FazenTECH"}),Object(n.jsx)("h1",{children:"Cadastrar novo produto"}),Object(n.jsx)("p",{children:"Descreva o produto detalhadamente para encontrar um cliente para comprar."}),Object(n.jsxs)(i.b,{className:"back-link",to:"/products",children:[Object(n.jsx)(d.a,{size:16,color:"#2BDA8E"}),"Voltar para home"]})]}),Object(n.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(n.jsx)("input",{placeholder:"Nome do produto",value:a,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("input",{placeholder:"Pre\xe7o",value:l,onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("textarea",{placeholder:"Descri\xe7\xe3o",value:A,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("input",{placeholder:"Imagem",type:"file",value:I,onChange:function(e){return w(e.target.value)}}),Object(n.jsx)("button",{className:"button",type:"submit",children:"Cadastrar"})]})]})})}a(65);function S(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],o=Object(c.useContext)(f).logout,s=Object(j.f)();function l(){return(l=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("produtos").then((function(e){r(e.data.response)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),Object(n.jsxs)("div",{className:"product-container",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("img",{src:m,alt:"FazenTECH"}),Object(n.jsx)("span",{children:"Bem vindo"}),Object(n.jsx)(i.b,{className:"button",to:"/add-product",children:"Cadastrar novo produto"}),Object(n.jsx)("button",{onClick:function(){o(),s.push("/")},type:"button",children:Object(n.jsx)(d.c,{size:18,color:"#2BDA8E"})})]}),Object(n.jsx)("h1",{children:"Produtos"}),Object(n.jsx)("ul",{children:a.map((function(e,t){return Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"PRODUTO:"}),Object(n.jsx)("p",{children:e.nome}),Object(n.jsx)("strong",{children:"DESCRI\xc7\xc3O:"}),Object(n.jsx)("p",{children:e.descricao}),Object(n.jsx)("strong",{children:"VALOR:"}),Object(n.jsx)("p",{children:Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.preco)})]},e.id)}))})]})}function v(){var e=Object(c.useContext)(f).signed;return Object(n.jsx)(i.a,{basename:"/FazenTECH",children:Object(n.jsx)(j.c,{children:!1===e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{path:"/",exact:!0,component:C}),Object(n.jsx)(j.a,{path:"/register",component:I})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{path:"/add-product",component:w}),Object(n.jsx)(j.a,{path:"/products",component:S})]})})})}var k=function(){return Object(n.jsx)(A,{children:Object(n.jsx)(v,{})})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.571925a8.chunk.js.map