(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{264:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),i=n(0),o=n(127),l=n.n(o),c=n(126),s=n.n(c),u=n(350),m=(n(387),n(295),n(53),n(281)),d=n(318),p=n.n(d),f=n(287),h=n.n(f),y=n(345),g=n.n(y),b=n(388),v=n.n(b),E=n(315),w=n.n(E),x=n(347),S=n.n(x),N=n(346),k=n.n(N),R=n(392),O=n.n(R),C=n(393),q=n.n(C),z=n(394),j=n.n(z),L=n(303),P=n.n(L),J=n(293),_=n.n(J),B=n(395),F=n.n(B),K=n(348),D=n.n(K),H=n(391),T=n.n(H),W=n(396),G=n.n(W),M=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state=t.props.appState?Object.assign({},t.props.appState.tableState,{menuOpen:!1}):{ascSort:!1,sortKey:3,filterRule:[],menuOpen:!1},t._handleSort=function(e){t.setState(function(t){return{ascSort:t.sortKey===e&&!t.ascSort,sortKey:e}})},t._handleMenuOpen=function(){t.setState(function(e){return{menuOpen:!e.menuOpen}})},t._handleFilterRule=function(e){t.setState(function(t){return{filterRule:t.filterRule.indexOf(e)>=0?t.filterRule.filter(function(t){return t!==e}):[].concat(t.filterRule,[e])}})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.classes,a=t.data,r=t.width,o=t.height,l=t.appState,c=this.state,s=c.ascSort,u=c.sortKey,d=c.filterRule,f=c.menuOpen,y=a;return i.createElement(p.a,{className:n.root,style:{width:r,height:o}},i.createElement("div",{className:n.header},i.createElement(g.a,{className:n.toolbar},i.createElement(h.a,{className:n.title,variant:"h6"},"スタジアムと距離圏人口"),i.createElement(v.a,{title:"フィルター"},i.createElement(w.a,{"aria-owns":f?"menu-list":void 0,"aria-haspopup":"true",buttonRef:function(t){e.anchorEl=t},onClick:this._handleMenuOpen},i.createElement(T.a,null))),i.createElement(S.a,{className:n.filterMenuWrapper,anchorEl:this.anchorEl,open:f,transition:!0,disablePortal:!0,placement:"bottom-end"},function(t){var n=t.TransitionProps;return i.createElement(k.a,Object.assign({},n,{style:{transformOrigin:"right top"}}),i.createElement(p.a,null,i.createElement(O.a,{onClickAway:function(t){e.anchorEl.contains(t.target)||e.setState({menuOpen:!1})}},i.createElement(q.a,null,["J1","J2","J3","JFL","地域","その他"].map(function(t,n){return i.createElement(j.a,{key:n,onClick:function(){e._handleFilterRule(t)}},i.createElement(P.a,null,d.indexOf(t)<0?i.createElement(F.a,null):i.createElement(D.a,{color:"disabled"})),i.createElement(_.a,{inset:!0,primary:t}))})))))})),i.createElement("div",{className:n.thead},i.createElement("div",{className:n.row},i.createElement("div",{className:n.headerRowHead},i.createElement("div",{className:n.index},"i"),i.createElement("div",{className:n.name},"name")),i.createElement("div",{className:n.headerRowBody},["1km","3km","5km","10km"].map(function(t,a){return i.createElement("div",{key:a,className:n.val},i.createElement(G.a,{active:a===u,direction:s?"asc":"desc",onClick:function(){return e._handleSort(a)}},t))}))))),i.createElement("div",{className:n.table,style:{height:o-140}},function(e,t,n,a){var r=t?1:-1,i=0===n?"radius1000":1===n?"radius3000":2===n?"radius5000":"radius10000";return a.length?e.filter(function(e){return e.node.summary.category.some(function(e){return a.indexOf(e)<0})}).sort(function(e,t){return r*(e.node.summary[i]-t.node.summary[i])}):e.sort(function(e,t){return r*(e.node.summary[i]-t.node.summary[i])})}(y,s,u,d).map(function(e,t){return i.createElement("div",{key:t,className:n.row},i.createElement("div",{className:n.rowHead},i.createElement("div",{className:n.index},t+1),i.createElement("div",{className:n.name},i.createElement(m.Link,{to:"/"+e.node.summary.slug+"/",state:{mapState:l.mapState||null,tableState:{ascSort:s,sortKey:u,filterRule:d}}},e.node.summary.name)),i.createElement("div",{className:n.category},e.node.summary.shortname.join(" "))),i.createElement("div",{className:n.rowBody},i.createElement("div",{className:n.val},e.node.summary.radius1000.toLocaleString()),i.createElement("div",{className:n.val},e.node.summary.radius3000.toLocaleString()),i.createElement("div",{className:n.val},e.node.summary.radius5000.toLocaleString()),i.createElement("div",{className:n.val},e.node.summary.radius10000.toLocaleString())))})))},t}(i.Component),A=s()(function(e){return l()({root:{fontSize:"80%",fontFamily:e.typography.fontFamily},table:{overflowY:"scroll",overflowScrolling:"touch",WebkitOverflowScrolling:"touch",zIndex:0},header:{backgroundColor:e.palette.primary.light,position:"sticky",display:"flex",flexDirection:"column",boxShadow:e.shadows[1]},toolbar:{display:"flex",flexDirection:"row",height:56},title:{flex:1},filterMenuWrapper:{zIndex:1},headerRowHead:{flex:1,display:"flex","@media (max-width: 720px)":{display:"none"}},headerRowBody:{display:"flex",justifyContent:"space-evenly"},thead:{},row:{display:"flex",flexDirection:"row","@media (max-width: 720px)":{flexDirection:"column",borderBottom:"1px solid #ddd"}},rowHead:{flex:1,display:"flex",boxSizing:"border-box",borderRight:"1px solid #eee","@media (max-width: 720px)":{borderRight:"none",borderBottom:"1px solid #eee"}},index:{width:"4em",padding:"1rem .5rem",boxSizing:"border-box",textAlign:"right"},name:{padding:"1rem",boxSizing:"border-box",flex:1,fontWeight:"bold"},category:{color:"#333",padding:"1rem",boxSizing:"border-box"},rowBody:{display:"flex",justifyContent:"space-evenly"},val:{width:"9em",padding:"1rem",boxSizing:"border-box",display:"flex",flexDirection:"row-reverse"}})})(M);var I=n(400),Q=n(316);n.d(t,"query",function(){return U});var V=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.classes;return i.createElement("div",{className:t.root},i.createElement(u.Helmet,null,i.createElement("title",null,"サッカースタジアムと人口"),i.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"}),i.createElement("meta",{name:"description",content:"日本国内の主要なサッカースタジアムの周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。"}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{property:"og:title",content:"サッカースタジアムと人口"}),i.createElement("meta",{property:"og:url",content:"https://cieloazul310.github.io/gatsby-stadiums-population/"}),i.createElement("meta",{property:"og:image",content:"https://cieloazul310.github.io/img/ogp2.png"}),i.createElement("meta",{property:"og:site_name",content:"水戸地図"}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),i.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"})),i.createElement("main",null,i.createElement("div",{className:t.content},i.createElement("div",{className:t.table},i.createElement(I.a,null,function(t){var n=t.width,a=t.height;return i.createElement(A,{width:n,height:a,data:e.props.data.allVenuesJson.edges,appState:e.props.location.state||Q.a})})))))},t}(i.PureComponent),U=(t.default=s()(function(e){return l()({root:{width:"100%"},content:{margin:"auto",maxWidth:1e3},table:{width:"100%",height:"100vh"}})})(V),"3551841905")},281:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(273),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(296),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(57);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},296:function(e,t,n){var a;e.exports=(a=n(320))&&a.default||a},316:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a,r=n(281),i={tableState:{ascSort:!1,sortKey:3,filterRule:[]},mapState:{popVisibility:!0,bufferVisibility:!0,zoomLevel:3,terrain:!1}},o=function(e,t){Object(r.navigate)(e,{state:t})};!function(e){e.radius1000="1km",e.radius3000="3km",e.radius5000="5km",e.radius10000="10km"}(a||(a={}))},320:function(e,t,n){"use strict";n.r(t);n(53);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(86),c=n(4),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-tsx-816238b631c34c3a8a63.js.map