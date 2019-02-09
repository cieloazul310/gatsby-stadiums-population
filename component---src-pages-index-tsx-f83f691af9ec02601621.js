(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return S});var a=n(7),r=n.n(a),i=n(9),o=n(0),u=n(173),c=n.n(u),s=n(148),l=n.n(s),d=n(225),p=n(339),m=n.n(p),f=n(216),b=n.n(f),h=n(186),g=n.n(h),O=n(263),y=n(249),j=n(262),v=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.classes;return Object(i.d)("div",null,Object(i.d)(d.Helmet,null,Object(i.d)("title",null,"サッカースタジアムと人口"),Object(i.d)("meta",{name:"description",content:"日本国内の主要なサッカースタジアムの周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。"}),Object(i.d)("meta",{property:"og:type",content:"website"}),Object(i.d)("meta",{property:"og:title",content:"サッカースタジアムと人口"}),Object(i.d)("meta",{property:"og:url",content:"https://cieloazul310.github.io/gatsby-stadiums-population/"}),Object(i.d)("meta",{property:"og:image",content:"https://cieloazul310.github.io/img/ogp2.png"}),Object(i.d)("meta",{property:"og:site_name",content:"水戸地図"}),Object(i.d)("meta",{name:"twitter:card",content:"summary"})),Object(i.d)(m.a,null,Object(i.d)(b.a,null,Object(i.d)(g.a,{variant:"h6",color:"inherit"},"スタジアムと距離圏人口"))),Object(i.d)("div",{className:t.content},Object(i.d)(y.a,{title:"スタジアムと距離圏人口",data:this.props.data.allVenuesJson.edges,appState:this.props.location.state||j.a})))},e}(o.PureComponent);e.default=Object(O.a)(l()(function(t){return c()({root:{textAlign:"center",width:"100%"},content:{paddingTop:56}})})(v));var S="3551841905"},172:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return b}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return f});var a=n(9),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(157),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var l=n(175),d=n.n(l);n.d(e,"PageRenderer",function(){return d.a});var p=n(36);n.d(e,"parsePath",function(){return p.a});var m=i.a.createContext({}),f=function(t){return Object(a.d)(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.d)("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},175:function(t,e,n){var a;t.exports=(a=n(189))&&a.default||a},189:function(t,e,n){"use strict";n.r(e);n(56);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(61),c=n(2),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},249:function(t,e,n){"use strict";n.d(e,"b",function(){return at});n(309),n(224);var a=n(53),r=n.n(a),i=(n(56),n(7)),o=n.n(i),u=n(9),c=n(0),s=n(172),l=n(216),d=n.n(l),p=n(258),m=n.n(p),f=n(261),b=n.n(f),h=n(260),g=n.n(h),O=n(327),y=n.n(O),j=n(259),v=n.n(j),S=n(328),w=n.n(S),x=n(199),C=n.n(x),_=n(310),R=n.n(_),N=n(219),k=n.n(N),T=n(315),I=n.n(T),P=n(251),q=n.n(P),L=n(250),M=n.n(L),A=n(320),E=n.n(A),J=n(321),K=n.n(J),F=n(323),G=n.n(F),U=n(255),W=n.n(U),z=n(257),V=n.n(z),Q=n(325),D=n.n(Q),H=n(256),X=n.n(H),B=n(186),Y=n.n(B),Z=n(148),$=n.n(Z),tt=n(173),et=n.n(tt),nt=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).anchorEl=void 0,e.state=e.props.appState?Object.assign({},e.props.appState.tableState,{menuOpen:!1}):{ascSort:!1,sortKey:3,filterRule:[],menuOpen:!1},e._handleSort=function(t){e.setState(function(e){return{ascSort:e.sortKey===t&&!e.ascSort,sortKey:t}})},e._handleFilterRule=function(t){e.setState(function(e){return{filterRule:e.filterRule.indexOf(t)>=0?e.filterRule.filter(function(e){return e!==t}):[].concat(e.filterRule,[t])}})},e}return o()(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.classes,a=e.title,i=e.data,o=e.appState,c=this.state,l=c.ascSort,p=c.sortKey,f=c.filterRule,h=c.menuOpen;return Object(u.d)(C.a,{className:n.root},Object(u.d)(d.a,null,Object(u.d)("div",{style:{flex:"0 0 auto"}},Object(u.d)(Y.a,{variant:"h6"},a)),Object(u.d)("div",{style:{flex:"1 1 100%"}}),Object(u.d)("div",null,Object(u.d)("div",null,Object(u.d)(R.a,{title:"Filter"},Object(u.d)(k.a,{"aria-owns":h?"menu-list":void 0,"aria-haspopup":"true",buttonRef:function(e){t.anchorEl=e},onClick:function(){t.setState(function(t){return{menuOpen:!t.menuOpen}})}},Object(u.d)(I.a,null))),Object(u.d)(q.a,{className:n.filterMenuWrapper,anchorEl:this.anchorEl,open:h,transition:!0,disablePortal:!0,placement:"bottom-end"},function(e){var n=e.TransitionProps;return Object(u.d)(M.a,r()({id:"menu-list"},n,{style:{transformOrigin:"right top"}}),Object(u.d)(C.a,null,Object(u.d)(E.a,{onClickAway:function(e){t.anchorEl.contains(e.target)||t.setState({menuOpen:!1})}},Object(u.d)(K.a,null,["J1","J2","J3","JFL","地域","その他"].map(function(e,n){return Object(u.d)(G.a,{key:n,onClick:function(){t._handleFilterRule(e)}},Object(u.d)(W.a,null,f.indexOf(e)<0?Object(u.d)(D.a,null):Object(u.d)(X.a,null)),Object(u.d)(V.a,{inset:!0,primary:e}))})))))})))),Object(u.d)("div",{className:n.tableWrapper},Object(u.d)(m.a,{className:n.table},Object(u.d)(y.a,null,Object(u.d)(v.a,null,Object(u.d)(g.a,{className:n.indexCell,align:"right"},"i"),Object(u.d)(g.a,{className:n.nameCell},"name"),["1km","3km","5km","10km"].map(function(e,n){return Object(u.d)(g.a,{key:n,align:"right"},Object(u.d)(w.a,{active:n===p,direction:l?"asc":"desc",onClick:function(){return t._handleSort(n)}},e))}))),Object(u.d)(b.a,null,at(i,l,p,f).map(function(t,e){return Object(u.d)(v.a,{key:e},Object(u.d)(g.a,{className:n.indexCell,component:"th",scope:"row",align:"right"},e+1),Object(u.d)(g.a,{className:n.nameCell,component:"th",scope:"row"},Object(u.d)(s.Link,{to:"/"+t.node.summary.slug+"/",state:{mapState:o.mapState||null,tableState:{ascSort:l,sortKey:p,filterRule:f}}},t.node.summary.name)),Object(u.d)(g.a,{align:"right"},t.node.summary.radius1000.toLocaleString()),Object(u.d)(g.a,{align:"right"},t.node.summary.radius3000.toLocaleString()),Object(u.d)(g.a,{align:"right"},t.node.summary.radius5000.toLocaleString()),Object(u.d)(g.a,{align:"right"},t.node.summary.radius10000.toLocaleString()))})))))},e}(c.Component);function at(t,e,n,a){void 0===a&&(a=[]);var r=e?1:-1,i=0===n?"radius1000":1===n?"radius3000":2===n?"radius5000":"radius10000";return a.length?t.filter(function(t){return t.node.summary.category.some(function(t){return a.indexOf(t)<0})}).sort(function(t,e){return r*(t.node.summary[i]-e.node.summary[i])}):t.sort(function(t,e){return r*(t.node.summary[i]-e.node.summary[i])})}e.a=$()(function(t){return et()({root:{width:"100%",marginTop:3*t.spacing.unit},table:{minWidth:760},tableWrapper:{overflowX:"auto"},indexCell:{width:"2em",padding:"4px 8px 4px 8px"},nameCell:{width:"16em",padding:"4px 16px 4px 24px"},filterMenuWrapper:{zIndex:1}})})(nt)},262:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={tableState:{ascSort:!1,sortKey:3,filterRule:[]},mapState:{popVisibility:!0,bufferVisibility:!0,zoomLevel:3}}},263:function(t,e,n){"use strict";var a=n(7),r=n.n(a),i=n(9),o=n(0),u=n(200),c=n(337),s=n.n(c),l=n(329),d=n.n(l),p=n(264);e.a=function(t){return function(e){function n(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).muiPageContext=Object(p.a)(),t}r()(n,e);var a=n.prototype;return a.componentDidMount=function(){var t=document.querySelector("#jss-server-side");t&&t.parentNode&&t.parentNode.removeChild(t)},a.render=function(){return Object(i.d)(d.a,{generateClassName:this.muiPageContext.generateClassName},Object(i.d)(u.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},Object(i.d)(s.a,null),Object(i.d)(t,this.props)))},n}(o.PureComponent)}},264:function(t,e,n){"use strict";(function(t,a){n.d(e,"a",function(){return l});n(79),n(59),n(80),n(333);var r=n(195),i=n(200),o=n(336),u=n.n(o),c=Object(i.createMuiTheme)({palette:{primary:u.a},typography:{useNextVariants:!0}});function s(){return{theme:c,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function l(){return t.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=s()),a.__INIT_MATERIAL_UI__):s()}}).call(this,n(332),n(78))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f83f691af9ec02601621.js.map