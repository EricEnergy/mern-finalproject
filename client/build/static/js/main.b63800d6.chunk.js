(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,a,t){e.exports=t.p+"static/media/greentrees.4ca27279.jpg"},126:function(e,a,t){e.exports=t(157)},131:function(e,a,t){},138:function(e,a,t){},157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(131),t(53)),i=t(44),m=t(8),s=t(69),u=t(70);function p(){var e=Object(s.a)([""]);return p=function(){return e},e}function d(){var e=Object(s.a)([""]);return d=function(){return e},e}function g(){var e=Object(s.a)([""]);return g=function(){return e},e}var f=u.a.div.attrs({className:"collpase navbar-collapse"})(g()),E=u.a.div.attrs({className:"navbar-nav mr-auto"})(d()),h=u.a.div.attrs({className:"collpase navbar-collapse"})(p());var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(h,null,r.a.createElement(o.b,{style:{color:"white"},to:"/",className:"d-inline p-2 text-white"},"Home")))))},v=t(99),y=t(206),N=t(208),O=t(209),j=t(100),w=t.n(j),C=t(212),x=t(105),S=Object(v.a)((function(e){return{root:{backgroundColor:"red"},menuButton:{},title:{},bar:{backgroundColor:"#1f3236",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},logo:{margin:"auto",textAlign:"center",height:"6vh"},logoHorizontallyCenter:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));function k(){var e=S(),a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],i=r.a.useState(null),s=Object(m.a)(i,2),u=s[0],p=s[1],d=Boolean(u),g=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){return c(null!==g)}),[g]);return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{className:e.bar,position:"static"},r.a.createElement(N.a,null,r.a.createElement(b,null),r.a.createElement("div",{className:e.logoHorizontallyCenter},r.a.createElement("img",{alt:"logo",className:e.logo,src:"./servICON.png",title:"Logo"})),l?r.a.createElement("div",null,r.a.createElement(O.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit"},r.a.createElement(w.a,null)),r.a.createElement(x.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){p(null)}},r.a.createElement(C.a,{onClick:function(){window.location.href="/companyView"}},"Profile"),r.a.createElement(C.a,{onClick:function(){return localStorage.removeItem("user"),void(window.location.href="/")}},"Log Out"))):r.a.createElement("div",null,r.a.createElement(o.b,{style:{color:"white"},to:"/signin",className:"d-inline p-2 text-white"},"Sign")))))}t(138);var I=t(2),z=t(31),W=t.n(z),B=function(){return W.a.get("/api/posts")},D=function(e,a){return W.a.put("/api/posts/"+e,a)},T=function(e){return W.a.put("/api/posts/"+e)},L=function(e){return W.a.post("/api/posts",e)},_=function(){return W.a.get("/api/appts")},U=function(e){return W.a.post("/api/appts",e)},R=function(){return W.a.get("/api/accounts")},F=function(e){return W.a.post("/api/accounts/login",e)},P=function(e){return W.a.post("/api/accounts/signup",e)};function A(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function H(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function J(e){var a=e.size,t=e.children;return r.a.createElement("div",{className:a.split(" ").map((function(e){return"col-"+e})).join(" ")},t)}var q=t(219),V=t(103),Y=t(15),M=t(236),K=t(211),G=t(159),Q=t(214),X=t(215),Z=t(216),$=t(55),ee=t(244),ae=t(104),te=t(224),ne=t(225),re=t(4),le=t(217),ce=t(240),oe=t(213),ie=t(218),me=t(223),se=t(101),ue=t.n(se),pe=t(242),de=["Barbershop","Salon","Beauty","Tattoo","Nails","Piercings","Photography"],ge=Object(v.a)((function(e){return{card:{paddingTop:"5vh",maxHeight:"90vh",overflowY:"scroll",backgroundColor:"rgba(187,208,213,0)"},details:{color:"White"},cover:{width:"100%",height:"100%"},coverImage:{width:"90%",margin:"5% 5%"},controls:{},gridList:{margin:"5vh auto",backgroundColor:"rgba(255, 255, 255, 0)",width:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{height:300},btn:{maxHeight:"85vh",paddingTop:"5vh"},description:{overflowY:"scroll",height:"20vh"},companyName:{marginBottom:"2vh",textShadow:"2px 2px 4px #000000"},companyINFO:{marginBottom:"2vh",color:"white",fontWeight:"bold",fontSize:"1.5rem"},senders:{color:"#4fa19a"},dater:{marginBottom:"5vh"},MuiPickersToolbar:{backgroundColor:"black"},small:{width:e.spacing(5),height:e.spacing(5)},large:{width:e.spacing(7),height:e.spacing(7)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})),fe=function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}};function Ee(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(new Date),p=Object(m.a)(u,2),d=p[0],g=p[1],f=ge(),E=Object(n.useState)("none"),h=Object(m.a)(E,2),b=h[0],v=h[1],y=Object(n.useState)(),N=Object(m.a)(y,2),j=N[0],w=N[1],C=Object(n.useState)("none"),x=Object(m.a)(C,2),S=x[0],k=x[1],z=Object(n.useState)(),W=Object(m.a)(z,2),D=W[0],T=W[1],L=r.a.useState(!1),_=Object(m.a)(L,2),F=_[0],P=_[1],se=Object(n.useState)(),Ee=Object(m.a)(se,2),he=Ee[0],be=Ee[1],ve=Object(n.useState)(),ye=Object(m.a)(ve,2),Ne=ye[0],Oe=ye[1];function je(e){if("back"===e){v("none"),k("none");var a=t.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)===a}));s(a)}else if(de.includes(e)){v("block"),k("block");var n=t.filter((function(a){return a.companyCategory===e})).map((function(e){return e.companyName}));s(n)}else{var r=t.filter((function(a){return a.companyName===e})),l=r[0]._id,c=he.filter((function(e){return e.accountID===l}));w(r),Oe(c[0])}}var we=Object(re.a)(fe)((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(I.a)(e,["children","classes","onClose"]);return r.a.createElement(oe.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement($.a,{variant:"h6"},a),n?r.a.createElement(O.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(ue.a,null)):null)})),Ce=function(){P(!1);var e=d.toString(),a=e.substring(0,3),t=e.substring(4,15),n=e.substring(16,21);j&&U({fullName:D,day:a,date:t,time:n,accountID:j[0]._id})};return Object(n.useEffect)((function(){R().then((function(e){l(e.data);var a=e.data.map((function(e){return e.companyCategory})).filter((function(e,a,t){return t.indexOf(e)===a}));s(a)})).catch((function(e){return console.log(e)})),B().then((function(e){return be(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:f.root},r.a.createElement(A,{fluid:!0},r.a.createElement(H,null,r.a.createElement(J,{size:"xs-12 sm-4 md-4 lg-2"},i?r.a.createElement("div",{className:f.btn},r.a.createElement(K.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(G.a,{style:{display:b},key:1,button:!0,onClick:function(){return je("back")}},r.a.createElement(Q.a,{primary:"Categories"}),r.a.createElement("hr",null)),i.map((function(e){return r.a.createElement(G.a,{key:e,button:!0,onClick:function(){return je(e)}},r.a.createElement(ee.a,{style:{display:S},alt:"Remy Sharp",src:"https://res.cloudinary.com/ericnrgnash/image/upload/v1580676864/serv/s_xhmmky.png",className:f.small}),r.a.createElement(Q.a,{primary:e.replace(/^\w/,(function(e){return e.toUpperCase()}))}))})))):r.a.createElement("div",null)),r.a.createElement(J,{size:"xs-12 sm-8 md-8 lg-10"},r.a.createElement(X.a,{className:f.card},r.a.createElement(H,null,r.a.createElement(J,{size:"xs-12 sm-12 md-12 lg-4 xl-4"},r.a.createElement("div",{className:f.cover},r.a.createElement("img",{alt:"cover",className:f.coverImage,src:Ne?Ne.companyImageURL:"./servICON.png",title:"Live from space album cover"}))),r.a.createElement(J,{size:"xs-12 sm-12 md-12 lg-8"},r.a.createElement("div",{className:f.details},r.a.createElement(Z.a,{className:f.content},r.a.createElement(H,null,r.a.createElement(J,{size:"xs-6 md-6"},r.a.createElement($.a,{component:"h3",variant:"h3",className:f.companyName},j?j[0].companyName:"Welcome To Serv"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Category: ",j?j[0].companyCategory:""),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.companyINFO},"Location: ",j?"".concat(j[0].companyCity,", ").concat(j[0].companyState):"")),r.a.createElement(J,{size:"xs-6 md-6"},j?r.a.createElement("div",null,r.a.createElement(le.a,{variant:"outlined",style:{borderColor:"white",color:"white"},color:"secondary",onClick:function(){P(!0)}},"Appointment"),r.a.createElement(ce.a,{onClose:Ce,"aria-labelledby":"customized-dialog-title",open:F},r.a.createElement(we,{id:"customized-dialog-title",onClose:Ce},"Set Appointment"),r.a.createElement(ie.a,{dividers:!0},r.a.createElement(Y.a,{utils:V.a},r.a.createElement(q.a,{container:!0,justify:"space-around",className:f.dater},r.a.createElement(M.a,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"MM/dd/yyyy",value:d,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement("form",{className:f.root,noValidate:!0,autoComplete:"off"},r.a.createElement(pe.a,{onChange:function(e){return T(e.target.value)},id:"outlined-basic",label:"Name",variant:"outlined"}))),r.a.createElement(me.a,null,r.a.createElement(le.a,{autoFocus:!0,onClick:Ce,color:"primary"},"Save changes")))):r.a.createElement("div",null,r.a.createElement(le.a,{variant:"outlined",disabled:!0},"Appointment")))),r.a.createElement(H,null,r.a.createElement(J,{size:"md-12"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:f.description},"Description: ",j?j[0].companyDescription:"Our team at Serv wanted to bring the services of trademen and women to one place where you can find them and they can showcase their craft."))))))),r.a.createElement(H,null,r.a.createElement(J,{size:"md-2"},r.a.createElement("div",null)),r.a.createElement(J,{size:"md-8"},r.a.createElement("div",{className:f.gridList},r.a.createElement(te.a,{cellHeight:300,cols:3,style:{width:"200"}},Ne?Ne.postImageURL.map((function(e){return r.a.createElement(ne.a,{key:e,style:{width:300}},r.a.createElement(ae.a,{smallSrcSet:e,large:e,alt:"Name"}))})):r.a.createElement("p",null),") }"))),r.a.createElement(J,{size:"md-2"})))))))}var he=function(e){var a=e.children;return r.a.createElement("div",{style:{height:700,clear:"both",margin:40,textAlign:"center"},className:"jumbotron"},a)},be=t(30),ve=t(227),ye=t(226),Ne=t(245),Oe=t(222),je=t(239),we=t(241),Ce=t(237),xe=["Barbershop","Salon","Beauty","Tattoo","Nails","Piercings","Photography"];function Se(e){return r.a.createElement(Ce.a,Object.assign({elevation:6,variant:"filled"},e))}var ke=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function Ie(){var e=ke(),a=r.a.useState(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],o=function(e,a){"clickaway"!==a&&c(!1)},i=Object(n.useState)({email:"",password:"",companyName:"",companyCategory:"",companyDescription:"",companyCity:"",companyState:""}),s=Object(m.a)(i,2),u=s[0],p=s[1];var d=r.a.useRef(null),g=r.a.useState(0),f=Object(m.a)(g,2),E=f[0],h=f[1];return r.a.useEffect((function(){h(d.current.offsetWidth)}),[]),r.a.createElement(ye.a,{component:"main",maxWidth:"xs"},r.a.createElement(ve.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(q.a,{container:!0,spacing:2},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(pe.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"compName",label:"Company Name",autoFocus:!0,onChange:function(e){return p(Object(be.a)({},u,{companyName:e.target.value}))}})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(pe.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return p(Object(be.a)({},u,{email:e.target.value}))}})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(pe.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return p(Object(be.a)({},u,{password:e.target.value}))}})),r.a.createElement(q.a,{item:!0,xs:12,sm:6},r.a.createElement(pe.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",onChange:function(e){return p(Object(be.a)({},u,{companyCity:e.target.value}))}})),r.a.createElement(q.a,{item:!0,xs:12,sm:6},r.a.createElement(pe.a,{required:!0,id:"state",name:"state",label:"State",onChange:function(e){return p(Object(be.a)({},u,{companyState:e.target.value}))},fullWidth:!0})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(Oe.a,{variant:"outlined",className:e.formControl},r.a.createElement(Ne.a,{ref:d,id:"demo-simple-select-outlined-label"},"Categories"),r.a.createElement(je.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:u.companyCategory,onChange:function(e){return p(Object(be.a)({},u,{companyCategory:e.target.value}))},labelWidth:E},r.a.createElement(C.a,{value:""},r.a.createElement("em",null,"None")),xe.map((function(e){return r.a.createElement(C.a,{value:e},e)}))))),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(pe.a,{id:"outlined-multiline-static",multiline:!0,fullWidth:!0,rows:"4",variant:"outlined",label:"Company Description",onChange:function(e){return p(Object(be.a)({},u,{companyDescription:e.target.value}))}})," ")),r.a.createElement(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),P(u).then(console.log("created !")),c(!0)}(e)}},"Sign Up"),r.a.createElement(q.a,{container:!0,justify:"flex-end"}))),r.a.createElement("div",{className:e.root},r.a.createElement(we.a,{open:l,autoHideDuration:3e3,onClose:o},r.a.createElement(Se,{onClose:o,severity:"success"},"You are signed up!"))))}var ze=t(228),We=t(238),Be=Object(v.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function De(){var e=Be(),a=Object(n.useState)({email:"",password:""}),t=Object(m.a)(a,2),l=t[0],c=t[1];return r.a.createElement(ye.a,{component:"main",maxWidth:"xs"},r.a.createElement(ve.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(Object(be.a)({},l,{email:e.target.value}))}}),r.a.createElement(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return c(Object(be.a)({},l,{password:e.target.value}))}}),r.a.createElement(ze.a,{control:r.a.createElement(We.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){return function(e){e.preventDefault(),F(l).then((function(e){localStorage.setItem("user",JSON.stringify(e))})).then((function(e){return window.location.href="/companyview"}))}(e)}},"Sign In"),r.a.createElement(q.a,{container:!0}))))}function Te(){return r.a.createElement(A,{fluid:!0},r.a.createElement(H,null,r.a.createElement(J,{size:"md-6"},r.a.createElement(he,null,r.a.createElement(Ie,null))),r.a.createElement(J,{size:"md-6"},r.a.createElement(he,null,r.a.createElement(De,null)))))}var Le=t(235),_e=t(232),Ue=t(234),Re=t(230),Fe=t(231),Pe=t(233),Ae=t(229),He=t(75),Je=t(67),qe=t.n(Je);function Ve(e){var a=Object(n.useState)({url:""}),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)("block"),i=Object(m.a)(o,2),s=i[0],u=i[1];Object(n.useEffect)((function(){}),[l]);var p=JSON.parse(localStorage.getItem("user"));return r.a.createElement("div",{className:"main",style:{display:s}},r.a.createElement("div",{className:"upload"},r.a.createElement(qe.a,{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(a,t){a?console.log(a):(c(t[0].url),console.log(l),L({accountID:p.data.user._id,companyImageURL:t[0].url}),u("none"),e.callback({newImages:"changed!"}))}))},className:"upload-button"})))}var Ye=t(19);function Me(e){var a=Object(n.useState)(),t=Object(m.a)(a,2),l=t[0],c=t[1],o=JSON.parse(localStorage.getItem("user"));Object(n.useEffect)((function(){l?console.log("we have images here"):T(o.data.user._id).then((function(e){return c(e.data.postImageURL)})).catch((function(e){return console.log(e)}))}),[l,o.data.user._id]),Object(n.useEffect)((function(){D(o.data.user._id,{postImageURL:l}).catch((function(e){return console.log(e)}))}),[l]),Object(n.useEffect)((function(){}),[l]);return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"upload"},r.a.createElement(qe.a,{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:"ericnrgnash",upload_preset:"Erics-preset-serv",tags:["company"]},(function(a,t){a?console.log(a):(c([].concat(Object(Ye.a)(l),[t[0].url])),e.callback({newImages:"changed!"}))}))},className:"upload-button"})))}var Ke=t(76),Ge=t(102),Qe=t.n(Ge),Xe=[{url:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",title:""}],Ze=Object(v.a)((function(e){return{input:{display:"none"},coverImage:{width:"60%",alignItems:"center",justifyContent:"center",borderRadius:"360px",margin:"10% 20%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},gridList:{margin:"5vh auto",width:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},img:{width:"100%"},table:{overflowY:"scroll",marginTop:"5vh",marginBottom:"5vh"},TOTtable:{marginBottom:"5vh"},companyName:{textAlign:"center",fontWeight:"bolder"},companyINFO:{marginBottom:"2vh"},description:{overflowY:"scroll",height:"20vh",marginBottom:"5vh"},imageButton:{position:"absolute",left:0,right:"100px",top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white}}}));function $e(){var e=Ze(),a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(),i=Object(m.a)(o,2),s=i[0],u=i[1],p=Object(n.useState)(),d=Object(m.a)(p,2),g=d[0],f=d[1],E=JSON.parse(localStorage.getItem("user")),h=E.data.user._id,b=Object(n.useState)(),v=Object(m.a)(b,2),y=v[0],N=v[1];function j(e){N(e)}function w(){return g?g.postImageURL.map((function(a){return r.a.createElement(ne.a,{key:a,style:{width:"50%",height:"inherit"}},r.a.createElement("img",{className:e.img,src:a,alt:a.title}),"} />")})):r.a.createElement("img",{className:"anon",src:Qe.a,alt:"placeholder"})}return Object(n.useEffect)((function(){T(E.data.user._id).then((function(e){return f(e.data)})).catch((function(e){return console.log(e)}))}),[y]),Object(n.useEffect)((function(){R().then((function(e){var a=e.data.filter((function(e){return e._id===h}));u(a)})).catch((function(e){return console.log(e)}))}),[h]),Object(n.useEffect)((function(){w()}),[]),Object(n.useEffect)((function(){_().then((function(e){var a=e.data.filter((function(e){return e.accountID===h}));c(a)})).catch((function(e){return console.log(e)}))}),[h]),r.a.createElement(A,null,r.a.createElement(q.a,null,r.a.createElement(H,null,r.a.createElement(J,{size:"xs-12 sm-12 md-12 lg-12"},r.a.createElement("div",{className:e.cover},g?r.a.createElement("img",{alt:"cover",className:e.coverImage,src:g.companyImageURL}):r.a.createElement("img",{alt:"cover",className:e.coverImage,src:Xe.url}),r.a.createElement(Ke.a,{focusRipple:!0,key:Xe.title,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:Xe.width}},r.a.createElement("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(Xe.url,")")}}),r.a.createElement("span",{className:e.imageBackdrop}),r.a.createElement("span",{className:e.imageButton},r.a.createElement(Ve,{callback:j}))))))),r.a.createElement(q.a,null,r.a.createElement(H,null,r.a.createElement(J,{size:"xs-12 xs-12 md-12 lg-12"},r.a.createElement($.a,{component:"h3",variant:"h3",className:e.companyName},s?s[0].companyName:"Name"," ",r.a.createElement("hr",null)))),r.a.createElement(H,null,r.a.createElement(J,{size:"xs-12 xs-12 md-6 lg-6"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Category: ",s?s[0].companyCategory:"Category"),r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.companyINFO},"Location: ",s?"".concat(s[0].companyCity,", ").concat(s[0].companyState):"Nashville, TN")),r.a.createElement(J,{size:"xs-12 xs-12 md-6 lg-6"},r.a.createElement($.a,{variant:"subtitle1",color:"textSecondary",className:e.description},"Description: ",s?s[0].companyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),r.a.createElement(q.a,null,r.a.createElement(H,null,r.a.createElement(J,{size:"md-12"},r.a.createElement(Fe.a,{component:He.a,className:e.TOTtable},r.a.createElement(_e.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(Pe.a,null,r.a.createElement(Ae.a,null,r.a.createElement(Re.a,null,"Name"),r.a.createElement(Re.a,{align:"right"},"Day"),r.a.createElement(Re.a,{align:"right"},"Date"),r.a.createElement(Re.a,{align:"right"},"Time"))),r.a.createElement(Ue.a,null,l.length>=1?l.map((function(e){return r.a.createElement(Ae.a,{key:e._id},r.a.createElement(Re.a,{component:"th",scope:"row"},e.fullName),r.a.createElement(Re.a,{align:"right"},e.day),r.a.createElement(Re.a,{align:"right"},e.date),r.a.createElement(Re.a,{align:"right"},e.time))})):r.a.createElement(Ae.a,null,r.a.createElement(Re.a,{align:"center"}," ","No appointments found"," ")))))))),r.a.createElement(q.a,null,r.a.createElement(H,null,r.a.createElement(J,{size:"md-12"},r.a.createElement("div",{className:e.gridList},r.a.createElement(te.a,{cellHeight:"auto",cellWidth:"100%",cols:3},r.a.createElement(ne.a,{key:Xe[0].title,style:{width:"50%",height:"inherit"}},r.a.createElement("img",{className:e.img,src:Xe[0].url,alt:Xe[0].title}),r.a.createElement(Le.a,{title:Xe[0].title,subtitle:r.a.createElement("span",null,"Upload "),actionIcon:r.a.createElement(O.a,{"aria-label":"info about ".concat(Xe[0].title),className:e.icon},r.a.createElement("input",{accept:"image/*",className:e.input,id:"icon-button-file",type:"file"}),r.a.createElement("label",{htmlFor:"icon-button-file"},r.a.createElement(Me,{callback:j})))})),w()))))))}t(156);var ea=function(){var e=JSON.parse(localStorage.getItem("user")),a=!1;return function(){switch(e||(e={data:{message:"No User"}}),e.data.message){case"Token Issued!":return a=!0;default:console.log("User not found")}}(),r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:Ee}),r.a.createElement(i.a,{exact:!0,path:"/signin",component:Te}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:Te}),r.a.createElement(i.a,{exact:!0,path:"/search",component:Ee}),r.a.createElement(i.a,{exact:!0,path:"/companyview"},a?r.a.createElement($e,null):r.a.createElement(Te,null))))};c.a.render(r.a.createElement(ea,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.b63800d6.chunk.js.map