(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(292)},152:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c=n(1),l=n.n(c),h=n(4),s=n.n(h),u=n(295),g=n(10),p=n(22),d=(n(152),n(36)),m=n(51),b=n(57),f=n(52),k=n(58),v=n(297),j=n(294),O=n(54),w=(n(102),n(142)),C=(n(154),n(130)),E=n(55),x=O.a.div.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-1g0pxxk-0"})(["width:100%;background:",";border-bottom:1px solid ",";padding:10px;transition:.2s;.header-content{width:960px;margin:0 auto;padding:0 20px;.header-brand{font-size:20px;font-weight:bold;color:","}}.right-menus{float:right;.locale-button{margin-left:15px;background-color:",";color:",";}}"],function(e){return"light"===e.theme?"#fff":"#1e1f28"},function(e){return"light"===e.theme?"#d9d9d9":"#444"},function(e){return"light"===e.theme?"#072":"#a6a6a6"},function(e){return"light"===e.theme?"#fff":"#2b2b2b"},function(e){return"light"===e.theme?"rgba(0,0,0,0.65)":"#fff"}),y=Object(E.b)()(a=Object(p.b)("globalConfigStore")(a=Object(p.c)(a=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleThemeChange=function(e){var t=n.props.globalConfigStore.changeTheme;t(e?"dark":"light")},n.handleLocaleChange=function(){var e=n.props.globalConfigStore,t=e.locale,a=e.changeLocale,r=n.props.i18n;"zh"===t?(r.changeLanguage("en"),a("en")):(r.changeLanguage("zh"),a("zh"))},n}return Object(k.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.globalConfigStore,t=e.theme,n=e.locale,a=this.props.t,r="zh"===n?"English":"\u4e2d\u6587";return l.a.createElement(x,{theme:t},l.a.createElement("div",{className:"header-content"},l.a.createElement("span",{className:"header-brand"},a("title")),l.a.createElement("div",{className:"right-menus"},l.a.createElement(C.a,{checkedChildren:"\u9ed1",unCheckedChildren:"\u767d",size:"small",checked:"dark"===t,onChange:this.handleThemeChange}),l.a.createElement(w.a,{size:"small",className:"locale-button",onClick:this.handleLocaleChange},r))))}}]),t}(c.Component))||a)||a)||a,z=(n(115),n(77)),S=(n(293),n(99)),I=n(64),L=n.n(I),N=n(98),T=(n(226),n(144)),_=n(296),A=n(133),H=n.n(A),B=[{name:"\u4e0a\u6d77",id:"shanghaizufang"},{name:"\u5317\u4eac",id:"beijingzufang"},{name:"\u6df1\u5733",id:"106955"},{name:"\u5357\u4eac",id:"zf365"},{name:"\u676d\u5dde",id:"HZhome"},{name:"\u5e7f\u5dde",id:"gz020"},{name:"\u6210\u90fd",id:"CDzufang"},{name:"\u6b66\u6c49",id:"134539"}],D=n(134),J=n.n(D).a.create({baseURL:"https://douban.xiadd.me/group",params:{apikey:"0df993c66c0c636e29ecbb5344252a4a"}});function P(e){return J.request({method:"GET",url:"/".concat(e,"/topics")})}var W,q=T.a.CheckableTag,G=O.a.div.withConfig({displayName:"Home__ListContainer",componentId:"sc-1xrm2j2-0"})(["width:960px;margin:0 auto;padding:20px;transition:.2s;.title-link{color:",";;text-decoration:none;}.ant-tag-checkable-checked{background-color:",";}.ant-list-bordered{border:1px solid ",";.ant-list-item,.ant-list-header{border-bottom:1px solid ","!important;}}.post-list{background-color:",";.ant-list-split .ant-list-header{border-bottom:1px solid #403f3f}}.ant-tag{color:",";}.ant-tag-checkable-checked{color:#fff;}.ant-tag-checkable{&:active{background-color:",";}&:not(.ant-tag-checkable-checked):hover{color:",";}}"],function(e){return"light"===e.theme?"#000":"#b3b3b3"},function(e){return"light"===e.theme?"#072":"#9c9c9c"},function(e){return"light"===e.theme?"#e8e8e8":"#403f3f"},function(e){return"light"===e.theme?"#e8e8e8":"#403f3f"},function(e){return"light"===e.theme?"#fff":"#1b1c23"},function(e){return"light"===e.theme?"rgba(0, 0, 0, 0.65)":"#9c9c9c"},function(e){return"light"===e.theme?"rgba(0, 0, 0, 0.65)":"#9c9c9c"},function(e){return"light"===e.theme?"#072":"#9c9c9c"}),M=(r=Object(E.b)(),o=Object(p.b)("globalConfigStore"),r(i=Object(_.a)(i=o(i=Object(p.c)(i=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={spinning:!0,groupId:"shanghaizufang",topics:[]},n.handleCheckableTagChange=function(){var e=Object(N.a)(L.a.mark(function e(t,a){var r,o;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return e.next=3,n.setState({spinning:!0});case 3:return e.next=5,P(a);case 5:r=e.sent,o=r.data,n.setState({groupId:a,topics:o.topics,spinning:!1}),n.props.history.push({pathname:"/",search:"?groupId=".concat(a)});case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(k.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(L.a.mark(function e(){var t,n,a,r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.a.parse(this.props.location.search),n=t.groupId||this.state.groupId,e.next=4,P(n);case 4:a=e.sent,r=a.data,this.setState({groupId:n,topics:r.topics,spinning:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.globalConfigStore.theme,n=this.props.t;return l.a.createElement(G,{theme:t},l.a.createElement(z.a,{spinning:this.state.spinning},l.a.createElement(S.a,{className:"post-list",header:l.a.createElement(function(){return B.map(function(t){return l.a.createElement(q,{key:t.id,checked:e.state.groupId===t.id,color:"#072",onChange:function(n){return e.handleCheckableTagChange(n,t.id)}},n(t.name))})},null),bordered:!0,dataSource:this.state.topics,renderItem:function(e){return l.a.createElement(S.a.Item,null,l.a.createElement("a",{className:"title-link",href:e.alt,target:"_blank",rel:"noopener noreferrer"},e.title))}})))}}]),t}(c.Component))||i)||i)||i)||i),R=O.a.div.withConfig({displayName:"App__HomeContainer",componentId:"sc-1el5vix-0"})(["min-height:100vh;transition:.2s;background:",";"],function(e){return"light"===e.theme?"#f5f5f5":"#121417"}),U=Object(p.b)("globalConfigStore")(W=Object(p.c)(W=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.globalConfigStore.theme;return l.a.createElement(R,{className:"App",theme:e},l.a.createElement(y,null),l.a.createElement(v.a,null,l.a.createElement(j.a,{exact:!0,path:"/",component:M})))}}]),t}(c.Component))||W)||W,V=function(){return l.a.createElement("div",{className:"App"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z,$,F,K,Q,X=n(65),Y=n(66),ee=(n(275),new(Z=function e(){Object(d.a)(this,e),Object(X.a)(this,"theme",$,this),Object(X.a)(this,"locale",F,this),Object(X.a)(this,"changeTheme",K,this),Object(X.a)(this,"changeLocale",Q,this)},$=Object(Y.a)(Z.prototype,"theme",[g.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"light"}}),F=Object(Y.a)(Z.prototype,"locale",[g.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.localStorage.getItem("i18nextLng")||"zh"}}),K=Object(Y.a)(Z.prototype,"changeTheme",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.theme=t}}}),Q=Object(Y.a)(Z.prototype,"changeLocale",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.locale=t}}}),Z)),te=n(100),ne=n(140),ae=n.n(ne),re=n(141),oe=n.n(re);te.a.use(ae.a).use(oe.a).use(E.a).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});te.a;var ie={globalConfigStore:ee};window._APP_STATE_=ie,Object(g.e)({enforceActions:"never"}),s.a.render(l.a.createElement(u.a,{basename:"/"},l.a.createElement(p.a,ie,l.a.createElement(function(){return l.a.createElement(c.Suspense,{fallback:l.a.createElement(V,null)},l.a.createElement(U,null))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,1,2]]]);
//# sourceMappingURL=main.12801eca.chunk.js.map