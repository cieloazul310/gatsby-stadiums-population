(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{262:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(10),r=a.n(n),i=a(0),l=a(399),o=a(272),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props,t=e.data,a=e.location,n=e.pageContext,r=Object(o.createInitialAppState)(a);return i.createElement(l.a,{datum:t.arenasJson,edges:t.allArenasJson.edges,appState:r,group:n.group})},t}(i.PureComponent);t.default=s;var c="326103834"},272:function(e,t,a){"use strict";var n=a(287);a.d(t,"createInitialAppState",function(){return n.a}),a.d(t,"navigateWithState",function(){return n.b});var r=a(288);a.o(r,"Directions")&&a.d(t,"Directions",function(){return r.Directions}),a.o(r,"Radiuses")&&a.d(t,"Radiuses",function(){return r.Radiuses}),a.o(r,"basketballCategories")&&a.d(t,"basketballCategories",function(){return r.basketballCategories}),a.o(r,"directions")&&a.d(t,"directions",function(){return r.directions}),a.o(r,"footballCategories")&&a.d(t,"footballCategories",function(){return r.footballCategories}),a.o(r,"radiusLabels")&&a.d(t,"radiusLabels",function(){return r.radiusLabels}),a.o(r,"radiuses")&&a.d(t,"radiuses",function(){return r.radiuses});var i=a(289);a.d(t,"basketballCategories",function(){return i.a}),a.d(t,"footballCategories",function(){return i.b});var l=a(290);a.o(l,"Directions")&&a.d(t,"Directions",function(){return l.Directions}),a.o(l,"Radiuses")&&a.d(t,"Radiuses",function(){return l.Radiuses}),a.o(l,"directions")&&a.d(t,"directions",function(){return l.directions}),a.o(l,"radiusLabels")&&a.d(t,"radiusLabels",function(){return l.radiusLabels}),a.o(l,"radiuses")&&a.d(t,"radiuses",function(){return l.radiuses});var o=a(291);a.d(t,"Directions",function(){return o.a}),a.d(t,"directions",function(){return o.b});var s=a(292);a.o(s,"Radiuses")&&a.d(t,"Radiuses",function(){return s.Radiuses}),a.o(s,"radiusLabels")&&a.d(t,"radiusLabels",function(){return s.radiusLabels}),a.o(s,"radiuses")&&a.d(t,"radiuses",function(){return s.radiuses});var c=a(278);a.d(t,"Radiuses",function(){return c.a}),a.d(t,"radiusLabels",function(){return c.b}),a.d(t,"radiuses",function(){return c.c});a(293)},274:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(271),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(279),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(54);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},278:function(e,t,a){"use strict";var n;a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return i}),function(e){e[e.radius1000=1e3]="radius1000",e[e.radius3000=3e3]="radius3000",e[e.radius5000=5e3]="radius5000",e[e.radius10000=1e4]="radius10000"}(n||(n={}));var r=[n.radius1000,n.radius3000,n.radius5000,n.radius10000],i={radius1000:"1km",radius3000:"3km",radius5000:"5km",radius10000:"10km"}},279:function(e,t,a){var n;e.exports=(n=a(296))&&n.default||n},287:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return o});var n=a(274),r=a(278),i=function(e,t){Object(n.navigate)(e,{state:{appState:t}})},l={tableState:{ascSort:!1,sortKey:r.a.radius10000,filterRule:[]},mapState:{popVisibility:!0,bufferVisibility:!0,zoomLevel:r.a.radius10000,terrain:!1}},o=function(e){return null===e.state?l:Object.prototype.hasOwnProperty.call(e.state,"appState")?e.state.appState:l}},288:function(e,t){},289:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=["J1","J2","J3","JFL","地域","その他"],r=["B1","B2","B3","地域","その他"]},290:function(e,t){},291:function(e,t,a){"use strict";var n;a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),function(e){e[e.north=0]="north",e[e.northeast=1]="northeast",e[e.east=2]="east",e[e.southeast=3]="southeast",e[e.south=4]="south",e[e.southwest=5]="southwest",e[e.west=6]="west",e[e.northwest=7]="northwest"}(n||(n={}));var r=["north","northeast","east","southeast","south","southwest","west","northwest"]},292:function(e,t){},293:function(e,t){},296:function(e,t,a){"use strict";a.r(t);a(52);var n=a(0),r=a.n(n),i=a(1),l=a.n(i),o=a(83),s=a(4),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},297:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"c",function(){return o});var n=a(0),r=a(312),i=a(359),l=Object(r.c)(i.a).domain([1250,0]),o=Object(r.b)().domain([0,1e3]).range([0,8]).exponent(.5);t.b=function(e){var t=e.feature,a=e.projection,r=t.properties.val,i=a(t.geometry.coordinates)||[0,0],s=Math.abs(o(r)*Math.min(Math.max(1,a.scale()/125e3),2.5));return n.createElement("rect",{fill:l(r),fillOpacity:.6,x:i[0]-s/2,y:i[1]-s/2,width:s,height:s})}},305:function(e,t,a){"use strict";var n=a(0),r=a(126),i=a.n(r),l=a(127),o=a.n(l),s=a(273),c=a.n(s);t.a=i()(function(e){return o()({root:{backgroundColor:e.palette.primary.dark,color:"white"},inner:{display:"flex",padding:4*e.spacing.unit+"px "+1*e.spacing.unit+"px",justifyContent:"center",justifyItems:"center"}})})(function(e){var t=e.classes;return n.createElement("div",{className:t.root},n.createElement("footer",null,n.createElement("div",{className:t.inner},n.createElement(c.a,{variant:"body2",color:"inherit"},"Copyright © 2019 cieloazul310 All rights reserved."))))})},318:function(e,t,a){"use strict";a(128),a(81),a(355);var n=a(0),r=a(312),i=a(358),l=a(297),o=a(272),s=l.a.copy(),c=[8*l.a.domain()[0],0];s.domain(c);var u=Object(r.a)().domain([250,0]).range([1,0]);t.a=function(e){var t=e.item;return n.createElement("svg",{viewBox:"0 0 300 300"},t.map(function(e,t,a){return n.createElement("g",{key:t,transform:"translate(150, 150)"},o.directions.map(function(r){var l,c,m=function(e,t){var a=o.radiuses.indexOf(t);return 0===a?8*e/(Math.pow(o.radiuses[a]/1e3,2)*Math.PI):8*e/(Math.pow(o.radiuses[a]/1e3,2)*Math.PI-Math.pow(o.radiuses[a-1]/1e3,2)*Math.PI)}(0===t?e.properties[r]:e.properties[r]-a[t-1].properties[r],e.properties.radius),d=(l=o.Directions[r],c=2*Math.PI/(Object.keys(o.Directions).length/2),{startAngle:l*c-c/2,endAngle:l*c+c/2}),p=d.startAngle,f=d.endAngle,h=Object(i.a)()({startAngle:p,endAngle:f,innerRadius:292*(t+1)/10+2,outerRadius:292*(t+2)/10,padAngle:.05});return n.createElement("g",{key:r},n.createElement("path",{key:r,d:h||void 0,fill:s(m),fillOpacity:u(m)}))}))}))}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return Y});a(331),a(385),a(128),a(81),a(386),a(295),a(52);var n=a(10),r=a.n(n),i=a(0),l=a(274),o=a(270),s=a.n(o),c=a(127),u=a.n(c),m=a(126),d=a.n(m),p=a(316),f=a.n(p),h=a(273),g=a.n(h),b=a(317),E=a.n(b),y=a(388),v=a.n(y),w=a(311),x=a.n(w),S=a(354),k=a.n(S),T=a(352),j=a.n(T),I=a(390),O=a.n(I),C=a(391),N=a.n(C),R=a(392),M=a.n(R),z=a(304),L=a.n(z),D=a(298),B=a.n(D),A=a(387),P=a.n(A),_=a(393),U=a.n(_),Z=a(332),V=a.n(Z),W=a(389),q=a.n(W),F=a(394),G=a.n(F),H=a(333),Q=a.n(H),K=a(272),J=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state=t.props.appState?Object.assign({},t.props.appState.tableState,{menuOpen:!1}):{ascSort:!1,sortKey:K.Radiuses.radius10000,filterRule:[],menuOpen:!1},t.anchorEl=null,t._handleSort=function(e){t.setState(function(t){return{ascSort:t.sortKey===e&&!t.ascSort,sortKey:e}})},t._handleMenuOpen=function(){t.setState(function(e){return{menuOpen:!e.menuOpen}})},t._handleFilterRule=function(e){t.setState(function(t){return{filterRule:t.filterRule.indexOf(e)>=0?t.filterRule.filter(function(t){return t!==e}):[].concat(t.filterRule,[e])}})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.classes,n=t.edges,r=t.width,o=t.height,c=t.appState,u=t.group,m=t.title,d=this.state,p=d.ascSort,h=d.sortKey,b=d.filterRule,y=d.menuOpen,w="venues"===u?K.footballCategories:"arenas"===u?K.basketballCategories:[];return i.createElement(f.a,{className:a.root,style:{width:r,height:o}},i.createElement("div",{className:a.header},i.createElement(E.a,{className:a.toolbar}," ",i.createElement(v.a,{title:"フィルター"},i.createElement(x.a,{color:"inherit","aria-owns":y?"menu-list":void 0,"aria-haspopup":"true",buttonRef:function(t){e.anchorEl=t},onClick:this._handleMenuOpen},i.createElement(q.a,null))),i.createElement(k.a,{className:a.filterMenuWrapper,anchorEl:this.anchorEl,open:y,transition:!0,disablePortal:!0,placement:"bottom-start"},function(t){var a=t.TransitionProps;return i.createElement(j.a,Object.assign({},a,{style:{transformOrigin:"left top"}}),i.createElement(f.a,null,i.createElement(O.a,{onClickAway:function(t){null===e.anchorEl||e.anchorEl.contains(t.target)||e.setState({menuOpen:!1})}},i.createElement(N.a,null,w.map(function(t,a){return i.createElement(M.a,{key:a,onClick:function(){e._handleFilterRule(t)}},i.createElement(L.a,null,b.indexOf(t)<0?i.createElement(U.a,null):i.createElement(V.a,{color:"disabled"})),i.createElement(B.a,{inset:!0,primary:t}))})))))}),i.createElement(g.a,{className:a.title,variant:"h6",color:"inherit"},m,"と距離圏人口"),i.createElement(v.a,{title:"ダイジェスト"},i.createElement(x.a,{"aria-owns":"next",role:"button","aria-haspopup":"true",color:"inherit",onClick:function(){Object(K.navigateWithState)("/"+u+"/manholes",{mapState:c.mapState,tableState:{ascSort:p,sortKey:h,filterRule:b}})}},i.createElement(Q.a,null)))),i.createElement("div",{className:a.thead},i.createElement("div",{className:a.row},i.createElement("div",{className:a.headerRowHead},i.createElement("div",{className:a.index},"i"),i.createElement("div",{className:a.name},"name")),i.createElement("div",{className:a.headerRowBody},Object.entries(K.radiusLabels).map(function(t,n){var r;return i.createElement("div",{key:n,role:"button",className:s()(a.val,a.labelCell,(r={},r[""+a.labelCellActive]=K.Radiuses[t[0]]===h,r))},i.createElement(G.a,{classes:{root:a.labelRoot,active:a.labelActive},active:K.Radiuses[t[0]]===h,direction:p?"asc":"desc",onClick:function(){return e._handleSort(K.Radiuses[t[0]])}},t[1]))}))))),i.createElement("div",{className:a.table,style:{height:o-140}},Y(n,{ascSort:p,sortKey:h,filterRule:b}).map(function(e,t){return i.createElement("div",{key:t,className:a.row},i.createElement("div",{className:a.rowHead},i.createElement("div",{className:a.index},t+1),i.createElement("div",{className:a.name},i.createElement(l.Link,{to:e.node.fields.slug,className:a.link,state:{appState:{mapState:c.mapState,tableState:{ascSort:p,sortKey:h,filterRule:b}}}},e.node.summary.name)),i.createElement("div",{className:a.category},e.node.summary.shortname.join(" "))),i.createElement("div",{className:a.rowBody},i.createElement("div",{className:a.val},e.node.summary.radius1000.toLocaleString()),i.createElement("div",{className:a.val},e.node.summary.radius3000.toLocaleString()),i.createElement("div",{className:a.val},e.node.summary.radius5000.toLocaleString()),i.createElement("div",{className:a.val},e.node.summary.radius10000.toLocaleString())))})))},t}(i.Component);function Y(e,t){var a=t.ascSort,n=t.sortKey,r=t.filterRule,i=a?1:-1,l=K.Radiuses[n];return r.length?e.filter(function(e){return e.node.summary.category.some(function(e){return r.indexOf(e)<0})}).sort(function(e,t){return i*(e.node.summary[l]-t.node.summary[l])}):e.sort(function(e,t){return i*(e.node.summary[l]-t.node.summary[l])})}t.a=d()(function(e){return u()({root:{fontSize:"80%",fontFamily:e.typography.fontFamily},table:{overflowY:"scroll",overflowScrolling:"touch",WebkitOverflowScrolling:"touch",zIndex:0},header:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,position:"sticky",display:"flex",flexDirection:"column",boxShadow:e.shadows[1],zIndex:99},toolbar:{display:"flex",flexDirection:"row",height:56},title:{flex:1},filterMenuWrapper:{zIndex:100},headerRowHead:{flex:1,display:"flex","@media (max-width: 720px)":{display:"none"}},headerRowBody:{display:"flex",justifyContent:"space-evenly"},labelCell:{borderBottom:"2px solid rgba(255, 255, 255, 0)",transition:"border .25s","&:hover":{borderBottom:"2px solid white"}},labelCellActive:{borderBottom:"2px solid white"},labelRoot:{color:"#ddd","&:hover":{color:e.palette.primary.contrastText},"&:focus":{color:e.palette.primary.contrastText}},labelActive:{color:e.palette.primary.contrastText,"&:hover":{color:e.palette.primary.contrastText},"&:focus":{color:e.palette.primary.contrastText}},thead:{},row:{display:"flex",flexDirection:"row","@media (max-width: 720px)":{flexDirection:"column",borderBottom:"1px solid #ddd"}},rowHead:{flex:1,display:"flex",boxSizing:"border-box",borderRight:"1px solid #eee","@media (max-width: 720px)":{borderRight:"none",borderBottom:"1px solid #eee"}},index:{width:"4em",padding:"1rem .5rem",boxSizing:"border-box",textAlign:"right"},name:{padding:"1rem",boxSizing:"border-box",flex:1,fontWeight:"bold"},category:{color:"#333",padding:"1rem",boxSizing:"border-box"},rowBody:{display:"flex",justifyContent:"space-evenly"},val:{width:"9em",padding:"1rem",boxSizing:"border-box",display:"flex",flexDirection:"row-reverse"},link:{color:e.palette.primary.main,"&:visited":{color:P.a[900]},"&:hover":{color:P.a[500]}}})})(J)},334:function(e,t,a){"use strict";var n=a(335),r=a(0),i=a(274),l=a(273),o=a.n(l);t.a=function(){return r.createElement(i.StaticQuery,{query:"2933318586",render:function(e){return r.createElement("section",null,r.createElement(o.a,{variant:"h5",gutterBottom:!0},e.site.siteMetadata.title),r.createElement(o.a,{variant:"body1",paragraph:!0},e.site.siteMetadata.description),r.createElement(o.a,{variant:"body1"},"人口データ: ",r.createElement("a",{href:"https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876",target:"_blank",rel:"noopener noreferrer"},"国勢調査 2015年 5次メッシュ(250mメッシュ)")),r.createElement(o.a,{variant:"body1"},"演算: ",r.createElement("a",{href:"http://turfjs.org",target:"_blank",rel:"noopener noreferrer"},"Turf.js")),r.createElement(o.a,{variant:"body1"},"地図: ",r.createElement("a",{href:"https://maps.gsi.go.jp/development/ichiran.html",target:"_blank",rel:"noopener noreferrer"},"地理院タイル")),r.createElement(o.a,{variant:"body1"},"制作: ",r.createElement("a",{href:e.site.siteMetadata.author.url,target:"_blank",rel:"noopener noreferrer"},e.site.siteMetadata.author.siteName)),r.createElement(o.a,{variant:"body1"},"Twitter: ",r.createElement("a",{href:"https://twitter.com/"+e.site.siteMetadata.author.twitter,target:"_blank",rel:"noopener noreferrer"},"@"+e.site.siteMetadata.author.twitter)),r.createElement(o.a,{variant:"body1",paragraph:!0}),r.createElement(o.a,{variant:"h6",gutterBottom:!0},"データの利用について"),r.createElement(o.a,{variant:"body1",paragraph:!0},"本サイトに掲載しているデータは「URL または サイト名」及び「データの出典元（地域メッシュ統計）」を明記した上で、自由に利用可能です。地図を利用する際には、",r.createElement("a",{href:"http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html",target:"_blank",rel:"noopener noreferrer"},"国土地理院コンテンツ利用規約"),"を参照ください。"),r.createElement(o.a,{variant:"body2",paragraph:!0},"記載例: 「出典: 水戸地図、2015年度国勢調査250mメッシュ人口」"))},data:n})}},335:function(e){e.exports={data:{site:{siteMetadata:{title:"サッカースタジアムと人口",siteUrl:"https://cieloazul310.github.io/gatsby-stadiums-population/",description:"日本国内の主要サッカースタジアムと周辺の人口を地図で表示したサイトです。",author:{name:"cieloazul310",url:"https://cieloazul310.github.io",siteName:"水戸地図",twitter:"cieloazul310",github:"cieloazul310"}}}}}},336:function(e,t,a){"use strict";var n=a(0),r=a(126),i=a.n(r),l=a(127),o=a.n(l);t.a=i()(function(e){return o()({root:{fontFamily:e.typography.fontFamily,width:"100%",maxWidth:800,margin:"auto",padding:2*e.spacing.unit,"@global":{blockquote:{backgroundColor:"#f3f3f3",margin:2*e.spacing.unit+"px auto",padding:2*e.spacing.unit,borderLeft:"solid 4px #ddd",borderRadius:"8px"}}}})})(function(e){return n.createElement("div",{className:e.classes.root},e.children)})},337:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return o});var n=a(0),r=a(273),i=a.n(r),l=function(){return n.createElement("section",null,n.createElement(i.a,{variant:"h5",gutterBottom:!0},"人口データについて"),n.createElement(i.a,{variant:"body1",paragraph:!0},"人口データは総務省統計局の地域メッシュ統計を点データに変換したものを用いています。"),n.createElement(i.a,{variant:"body1",paragraph:!0},"データ: ",n.createElement("a",{href:"https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876",target:"_blank",rel:"noopener noreferrer"},"国勢調査 2015年 5次メッシュ(250mメッシュ) その1 人口等基本集計に関する事項"),n.createElement("br",null),"公開日: 2018年1月4日",n.createElement("br",null),"データ取得日: 2018年4月10日"),n.createElement("blockquote",null,n.createElement(i.a,{variant:"subtitle1",gutterBottom:!0},"地域メッシュ統計とは"),n.createElement(i.a,{variant:"body1",paragraph:!0},"地域メッシュ統計とは，緯度・経度に基づき地域を隙間なく網の目（メッシュ）の区域に分けて，それぞれの区域に関する統計データを編成したものです。"),n.createElement(i.a,{variant:"body2"},"引用元:"," ",n.createElement("a",{href:"https://www.stat.go.jp/data/mesh/m_tuite.html",target:"_blank",rel:"noopener noreferrer"},"総務省統計局"))),n.createElement(i.a,{variant:"h5",gutterBottom:!0},"距離円と人口データの演算"),n.createElement(i.a,{variant:"body1",paragraph:!0},"距離円および距離円に含まれる人口データは JavaScript ライブラリである"," ",n.createElement("a",{href:"https://turfjs.org",target:"_blank",rel:"noopener noreferrer"},"Turf.js")," ","で算出しました。"),n.createElement(i.a,{variant:"body1"},"人口の算出方法は、",n.createElement("a",{href:"https://midoriit.com/2014/08/qgis%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%B1%E8%A8%88%E8%A7%A3%E6%9E%904.html",target:"_blank",rel:"noopener noreferrer"},"QGISによるデータ分析(4) 合同会社 緑IT事務所"),"を参考にしています。"))},o=function(){return n.createElement("section",null,n.createElement(i.a,{variant:"h5",gutterBottom:!0},"地図について"),n.createElement(i.a,{variant:"body1",paragraph:!0},"背景地図には国土地理院の",n.createElement("a",{href:"https://maps.gsi.go.jp/development/ichiran.html",target:"_blank",rel:"noopener noreferrer"},"地理院タイル"),"を使用しています。標準モードでは電子国土基本図、地形モードでは傾斜量図を表示しています。"),n.createElement("blockquote",null,n.createElement(i.a,{variant:"subtitle1",gutterBottom:!0},"電子国土基本図"),n.createElement(i.a,{variant:"body1",paragraph:!0},"電子国土基本図（地図情報）とは、道路、建物などの電子地図上の位置の基準である項目（基盤地図情報の取得項目）と、植生、崖、岩、構造物などの土地の状況を表す項目とを一つにまとめたデータです。電子国土基本図（地図情報）は、縮尺レベル25000の精度に限定することなく、より精度の高いものを含んだ我が国全域を覆うベクトル形式の基盤データで、これまでの2万5千分1地形図に替わる新たな基本図と位置づけられるものです。"),n.createElement(i.a,{variant:"body2"},"引用元: ",n.createElement("a",{href:"http://www.gsi.go.jp/kibanjoho/mapinfo_what.html"},"国土地理院"))),n.createElement("blockquote",null,n.createElement(i.a,{variant:"subtitle1",gutterBottom:!0},"傾斜量図"),n.createElement(i.a,{variant:"body1",paragraph:!0},"地表面の傾きの量を算出し、その大きさを白黒の濃淡で表現したものです。白いほど傾斜が緩やか、黒いほど急峻であることを意味します。台地、段丘、山地、火山地形、地すべり、断層などの地形判読などにご活用いただけます。"),n.createElement(i.a,{variant:"body2"},"引用元: ",n.createElement("a",{href:"http://www.gsi.go.jp/bousaichiri/slopemap.html"},"国土地理院"))))}},379:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiAyQzguMTMgMiA1IDUuMTMgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg3LTMuMTMtNy03LTd6bTAiIGZpbGw9IiMwMDkxRUEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggZD0iTTEyIDExLjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41eiIgZmlsbD0id2hpdGUiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="},399:function(e,t,a){"use strict";a(128),a(295),a(52);var n=a(10),r=a.n(n),i=a(0),l=a(274),o=a(324),s=a(129),c=a.n(s),u=a(356),m=a.n(u),d=a(317),p=a.n(d),f=a(457),h=a.n(f),g=a(453),b=a.n(g),E=a(322),y=a.n(E),v=a(311),w=a.n(v),x=a(452),S=a.n(x),k=a(458),T=a.n(k),j=a(333),I=a.n(j),O=a(273),C=a.n(O),N=a(357),R=a.n(N),M=a(126),z=a.n(M),L=a(127),D=a.n(L),B=a(459),A=a.n(B),P=a(332),_=a.n(P),U=a(398),Z=a(462),V=(a(420),a(425)),W=a.n(V),q=a(463),F=a(461),G=a(421),H=a.n(G),Q=(a(378),a(422)),K=a.n(Q),J=(a(59),a(81),a(139),a(58),a(423),a(424)),Y=a.n(J),X=function(){function e(e){void 0===e&&(e={}),this.tileUrl=e.url||"//cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",this.maxZoom=e.maxZoom||20,this.minZoom=e.maxZoom||2,this.tileTree={}}var t=e.prototype;return t.treeIncludesTile=function(e){var t=e.x,a=e.y,n=e.z;return this.tileTree.hasOwnProperty(n.toString())&&this.tileTree[n.toString()].hasOwnProperty(t.toString())&&this.tileTree[n.toString()][t.toString()].hasOwnProperty(a.toString())},t.tile2tree=function(e){var t,a,n=e.x,r=e.y,i=e.z,l=e.url;if(this.tileTree.hasOwnProperty(i.toString()))if(this.tileTree[i.toString()].hasOwnProperty(n.toString()))this.tileTree[i.toString()][n.toString()][r.toString()]=l;else{var o;this.tileTree[i.toString()][n.toString()]=((o={})[r.toString()]=l,o)}else this.tileTree[i.toString()]=((a={})[n.toString()]=((t={})[r.toString()]=l,t),a)},t.fetchTiles=function(e){var t=this;return new Promise(function(a){var n=e.map(function(e){return t.fetchTile(e,t.tileUrl)});Promise.all(n).then(function(e){a(e)})})},t.fetchTile=function(e,t){var a=this,n=e.x,r=e.y,i=e.z,l=t.replace("{z}/{x}/{y}",i+"/"+n+"/"+r);return Y()(l).then(function(e){if(!e.ok)throw new Error;return e.blob()}).then(function(t){var n=Object.assign({},e,{url:URL.createObjectURL(t)});return a.tile2tree(n),n}).catch(function(){var t=Object.assign({},e,{url:void 0});return a.tile2tree(t),t})},t.isRequireFetch=function(e){var t=this;return!e.every(function(e){return t.treeIncludesTile(e)})},t.setTileUrlFromTree=function(e){var t=this;return e.filter(function(e){return t.treeIncludesTile(e)}).map(function(e){return Object.assign({},e,{url:t.tileTree[e.z][e.x][e.y]})})},t.updateTiles=function(){var e=K()(H.a.mark(function e(t){var a,n,r,i=this;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.setTileUrlFromTree(t.filter(function(e){return i.treeIncludesTile(e)})),n=t.filter(function(e){return!i.treeIncludesTile(e)}),e.next=4,this.fetchTiles(n);case 4:return r=e.sent,e.abrupt("return",[].concat(a,r));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),e}(),$=a(297),ee=["0.3333 0.3333 0.3333 0 0","0.3333 0.3333 0.3333 0 0","0.3333 0.3333 0.3333 0 0","0 0 0 1 0"],te=function(e){return i.createElement("filter",{id:e.id},i.createElement("feColorMatrix",{type:"matrix",values:ee.join(" ")}))},ae=a(272),ne=a(379),re=a.n(ne),ie=a(464).tile,le=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={fetchStatus:"yet"},t._tileSet=new X,t._terrain=new X({url:"//cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png"}),t._getTileCoordinates=function(e,a){void 0===a&&(a=20);var n=t.props,r=n.width,i=n.height,l=1.5,o=Math.log2(2*e.scale()*l*Math.PI/256);return o>=a+.5&&(l=Math.pow(2,a+.5-o)),ie().size([r*l,i*l]).scale(2*e.scale()*Math.PI*l).translate(e([0,0]).map(function(e){return e*l}))().map(function(e,t,a){return Object.assign({},e,{mag:l,id:e.z+"/"+e.x+"/"+e.y,scale:a.scale,translate:a.translate})})},t._fetchTiles=function(e,t){return t.updateTiles(e)},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){var e=this,t=this.props,a=t.classes,n=t.buffers,r=t.meshes,l=t.mapState,o=l.popVisibility,s=l.bufferVisibility,c=l.zoomLevel,u=l.terrain,m=this.props.width||400,d=this.props.height||400,p=n?Object(F.a)().fitExtent([[10,40],[m-10,d-40]],n[ae.radiuses.indexOf(c)]):Object(F.a)(),f=Object(F.b)(p),h=u?this._terrain:this._tileSet,g=u?this._getTileCoordinates(p,15):this._getTileCoordinates(p),b=h.setTileUrlFromTree(g),E=null;return h.isRequireFetch(g)&&(E=i.createElement(W.a,{className:a.progress,color:"secondary"}),this._fetchTiles(g,h).then(function(){e.setState({fetchStatus:"fetched"})})),i.createElement("div",{className:a.root},i.createElement("svg",{width:m,height:d},i.createElement("g",null,i.createElement(te,{id:"grayscale"}),i.createElement("g",{filter:"url(#grayscale)",className:a.tiles,style:{opacity:"fetching"!==this.state.fetchStatus?1:0}},b.map(function(e,t){return i.createElement("image",{key:t,xlinkHref:e.url,x:(e.x+e.translate[0])*e.scale/e.mag,y:(e.y+e.translate[1])*e.scale/e.mag,width:e.scale/e.mag,height:e.scale/e.mag,imageRendering:"optimizeQuality"})}))),o?i.createElement("g",{className:a.points,style:{opacity:"yet"!==this.state.fetchStatus?1:0}},r.map(function(e,t){return"Point"===e.geometry.type?i.createElement($.b,{key:t,feature:e,projection:p}):null})):null,s?i.createElement("g",null,n?n.map(function(e,t){var n=Object(q.a)(e),r=p([n[2]+(n[0]-n[2])/2,n[1]]);return i.createElement("g",{key:t,className:a.buffer},i.createElement("path",{d:f(e)||void 0,fill:"none",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:12}),i.createElement("path",{d:f(e)||void 0,fill:"none",stroke:"rgb(200, 60, 80)",strokeWidth:3}),i.createElement("text",{className:a.bufferText,x:r[0],y:r[1],dy:"1em",textAnchor:"middle",fill:"rgb(200, 60, 80)"},e.properties.radius))}):null):null,i.createElement("g",null,i.createElement("image",{xlinkHref:re.a,x:m/2,y:d/2,width:28,height:28,transform:"translate(-14, -26)"}))),E||null)},t}(i.Component),oe=z()(function(e){return D()({root:{fontFamily:e.typography.fontFamily},buffer:{opacity:.2,"&:hover":{opacity:1}},bufferText:{fontSize:"80%",fontWeight:"bold"},progress:{position:"absolute",width:"100%",top:0,left:0},points:{"@global":{rect:{mixBlendMode:"multiply"}}}})})(le),se=a(131),ce=a.n(se),ue=a(302),me=a.n(ue),de=a(303),pe=a.n(de),fe=a(304),he=a.n(fe),ge=a(298),be=a.n(ge),Ee=a(449),ye=a.n(Ee),ve=a(321),we=a.n(ve),xe=a(436),Se=a.n(xe),ke=a(437),Te=a.n(ke),je=a(429),Ie=a.n(je),Oe=a(434),Ce=a.n(Oe),Ne=a(435),Re=a.n(Ne),Me=a(438),ze=a.n(Me),Le=a(439),De=a.n(Le),Be=function(e){var t=e.mapState,a=e.handleZoomIn,n=e.handleZoomOut,r=e.handleTerrain,l=e.handlePopVisibility,o=e.handleBufferVisibility;return i.createElement(me.a,{subheader:i.createElement(we.a,null,"地図")},i.createElement(y.a,{smDown:!0,implementation:"css"},i.createElement(pe.a,{button:!0,selected:0===t.zoomLevel,onClick:a},i.createElement(he.a,null,i.createElement(Ie.a,null)),i.createElement(be.a,null,"地図を拡大")),i.createElement(pe.a,{button:!0,selected:3===t.zoomLevel,onClick:n},i.createElement(he.a,null,i.createElement(Ce.a,null)),i.createElement(be.a,{primary:"地図を縮小"}))),i.createElement(pe.a,null,i.createElement(he.a,null,i.createElement(Re.a,null)),i.createElement(be.a,{primary:"地形モード"}),i.createElement(Se.a,null,i.createElement(Te.a,{onChange:r,checked:t.terrain}))),i.createElement(pe.a,null,i.createElement(he.a,null,i.createElement(ze.a,null)),i.createElement(be.a,{primary:"人口"}),i.createElement(Se.a,null,i.createElement(Te.a,{onChange:l,checked:t.popVisibility}))),i.createElement(pe.a,null,i.createElement(he.a,null,i.createElement(De.a,null)),i.createElement(be.a,{primary:"距離円"}),i.createElement(Se.a,null,i.createElement(Te.a,{onChange:o,checked:t.bufferVisibility}))))},Ae=a(351),Pe=a.n(Ae),_e=a(329),Ue=a(350),Ze=a(440),Ve=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentWillMount=function(){_e.b.add(Ze.faTwitter)},a.render=function(){var e=this.props.color;return i.createElement(Pe.a,{color:e},i.createElement(Ue.a,{style:{verticalAlign:"0.125em"},icon:["fab","twitter"]}))},t}(i.PureComponent),We=a(441),qe=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentWillMount=function(){_e.b.add(We.faFacebook)},a.render=function(){var e=this.props.color;return i.createElement(Pe.a,{color:e},i.createElement(Ue.a,{style:{verticalAlign:"0.125em"},icon:["fab","facebook"]}))},t}(i.PureComponent),Fe=function(e){var t=e.datum;return i.createElement(me.a,{subheader:i.createElement(we.a,null,"シェア")},i.createElement(pe.a,{button:!0,component:"a",href:Ge(t),target:"_blank",rel:"noopener noreferrer"},i.createElement(he.a,null,i.createElement(Ve,null)),i.createElement(be.a,{primary:"Twitterで共有"})),i.createElement(pe.a,{button:!0,component:"a",href:He(t),target:"_blank",rel:"noopener noreferrer"},i.createElement(he.a,null,i.createElement(qe,null)),i.createElement(be.a,{primary:"Facebookで共有"})))};function Ge(e){return"https://twitter.com/intent/tweet?text="+encodeURI(e.summary.name+"周辺の人口")+"&url="+encodeURIComponent("https://cieloazul310.github.io/gatsby-stadiums-population"+e.fields.slug)}function He(e){return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent("https://cieloazul310.github.io/gatsby-stadiums-population"+e.fields.slug)}var Qe=D()({itemTitle:{fontSize:"80%",fontWeight:"bold"},itemNumber:{textAlign:"right"}}),Ke=z()(Qe)(function(e){var t,a,n,r,l,o=e.classes,s=e.slug,c=e.edges,u=e.appState;return i.createElement(me.a,{subheader:i.createElement(we.a,null,"一覧 "+(t=u.tableState,a=t.ascSort,n=t.sortKey,r=a?"昇順":"降順",l=ae.radiusLabels[ae.Radiuses[n]],l+"圏人口 "+r))},c.map(function(e){return i.createElement(pe.a,{key:e.node.summary.slug,button:!0,selected:e.node.summary.slug===s,onClick:function(){Object(ae.navigateWithState)(e.node.fields.slug,u)}},i.createElement(be.a,{primary:i.createElement(C.a,{className:o.itemTitle},e.node.summary.name),secondary:i.createElement(C.a,{component:"span",className:o.itemNumber},e.node.summary[ae.Radiuses[u.tableState.sortKey]].toLocaleString())}))}))});var Je=a(447),Ye=a.n(Je),Xe=a(448),$e=a.n(Xe),et=a(442),tt=a.n(et),at=a(444),nt=a.n(at),rt=a(446),it=a.n(rt),lt=a(445),ot=a.n(lt),st=function(e){var t=e.summary,a=t.radius1000,n=t.radius3000,r=t.radius5000,l=t.radius10000;return i.createElement("div",null,i.createElement(tt.a,null,i.createElement(nt.a,null,i.createElement(ot.a,null,i.createElement(it.a,{align:"right"},"1km圏"),i.createElement(it.a,{align:"right"},a.toLocaleString())),i.createElement(ot.a,null,i.createElement(it.a,{align:"right"},"3km圏"),i.createElement(it.a,{align:"right"},n.toLocaleString())),i.createElement(ot.a,null,i.createElement(it.a,{align:"right"},"5km圏"),i.createElement(it.a,{align:"right"},r.toLocaleString())),i.createElement(ot.a,null,i.createElement(it.a,{align:"right"},"10km圏"),i.createElement(it.a,{align:"right"},l.toLocaleString())))))},ct=z()(function(e){return D()({toolbar:e.mixins.toolbar})})(function(e){var t=e.classes,a=e.group,n=e.appState,r=e.datum,l=e.edges,o=e.handleDrawerToggle,s=ce()(e,["classes","group","appState","datum","edges","handleDrawerToggle"]),c=n.mapState;return i.createElement("div",{className:t.root},i.createElement(function(){return i.createElement("div",null,i.createElement(me.a,null,i.createElement(y.a,{mdUp:!0,implementation:"css"},i.createElement(pe.a,{button:!0,onClick:o},i.createElement(he.a,null,i.createElement(Ye.a,null)),i.createElement(be.a,{primary:"閉じる"}))),i.createElement(pe.a,{button:!0,onClick:function(){Object(ae.navigateWithState)("/"+a,n)}},i.createElement(he.a,null,i.createElement($e.a,null)),i.createElement(be.a,null,"表に戻る"))))},null),i.createElement(st,{summary:r.summary}),i.createElement(Be,Object.assign({mapState:c},s)),i.createElement(ye.a,null),i.createElement(Fe,{datum:r}),i.createElement(ye.a,null),i.createElement(Ke,{slug:r.summary.slug,edges:l,appState:n}))}),ut=z()(function(e){return D()({root:{display:"flex",flexDirection:"column",alignItems:"center"},legends:{display:"flex",justifyContent:"center",alignItems:"flex-end"},legendItem:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"80%",padding:e.spacing.unit}})})(function(e){return i.createElement("div",{className:e.classes.root},i.createElement("div",{className:e.classes.legends},[100,250,500,750,1e3,1500,2e3].map(function(t){var a=2*Object($.c)(t),n=Object($.a)(t);return i.createElement("div",{className:e.classes.legendItem,key:t},i.createElement("svg",{width:30,height:30},i.createElement("rect",{x:15-a/2,y:15-a/2,width:a,height:a,fill:n,fillOpacity:1})),i.createElement(C.a,{variant:"caption"},t))})),i.createElement(C.a,{variant:"caption"},"1メッシュ(約250m四方)に含まれる人口"))}),mt=a(330),dt=a(318),pt=a(334),ft=a(336),ht=a(337),gt=a(270),bt=a.n(gt),Et=D()({root:{width:"100%"},ad:{display:"block"}}),yt=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})},a.render=function(){var e=this.props.classes;return i.createElement("div",{className:e.root},i.createElement(C.a,{variant:"subtitle2"},"広告"),i.createElement("ins",{className:bt()("adsbygoogle",e.ad),"data-ad-client":"ca-pub-7323207940463794","data-ad-slot":3901734109,"data-ad-format":"auto","data-full-width-responsive":!0}))},t}(i.PureComponent),vt=z()(Et)(yt),wt=a(305),xt=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state=Object.assign({},t.props.appState.mapState,{drawerOpen:!1}),t.handleDrawerToggle=function(){t.setState(function(e){return{drawerOpen:!e.drawerOpen}})},t.handlePopVisibility=function(){t.setState(function(e){return{popVisibility:!e.popVisibility}})},t.handleBufferVisibility=function(){t.setState(function(e){return{bufferVisibility:!e.bufferVisibility}})},t.handleZoomIn=function(){t.setState(function(e){return{zoomLevel:e.zoomLevel!==ae.Radiuses.radius1000?ae.radiuses[ae.radiuses.indexOf(e.zoomLevel)-1]:e.zoomLevel}})},t.handleZoomOut=function(){t.setState(function(e){return{zoomLevel:e.zoomLevel!==ae.Radiuses.radius10000?ae.radiuses[ae.radiuses.indexOf(e.zoomLevel)+1]:e.zoomLevel}})},t.handleTerrain=function(){t.setState(function(e){return{terrain:!e.terrain}})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.classes,n=t.datum,r=t.edges,s=t.appState,u=t.group,d=this.state,f=d.popVisibility,g=d.bufferVisibility,E=d.zoomLevel,v=d.terrain,x=s.tableState,k=n.summary,j=n.topojson,O=Object(Z.a)(j,j.objects.points).features,N=Object(Z.a)(j,j.objects.buffers).features,M=Object(mt.b)(r,x),z=k.name,L=k.club,D=k.category,B=k.slug,P={tableState:x,mapState:{popVisibility:f,bufferVisibility:g,zoomLevel:E,terrain:v}},V=i.createElement(ct,{datum:n,edges:M,group:u,appState:P,handleDrawerToggle:this.handleDrawerToggle,handleZoomIn:this.handleZoomIn,handleZoomOut:this.handleZoomOut,handleBufferVisibility:this.handleBufferVisibility,handlePopVisibility:this.handlePopVisibility,handleTerrain:this.handleTerrain});return i.createElement("div",{className:a.root},i.createElement(c.a,null),i.createElement(o.Helmet,null,i.createElement("html",{lang:"ja"}),i.createElement("title",null,z,"周辺の人口 | サッカースタジアムと人口")),i.createElement(m.a,{className:a.appBar,position:"fixed"},i.createElement(p.a,null,i.createElement(w.a,{className:a.menuButton,role:"presentation","aria-owns":"menu","aria-haspopup":"true",onClick:this.handleDrawerToggle,color:"inherit"},i.createElement(S.a,null)),i.createElement(C.a,{color:"inherit",className:a.apptitle,component:"h1",variant:"h6"},z),i.createElement(w.a,{"aria-owns":"next",role:"button","aria-haspopup":"true",onClick:function(){var e=M.map(function(e){return e.node.summary.slug}).indexOf(B),t=e===M.length-1?M[0]:M[e+1];Object(ae.navigateWithState)(t.node.fields.slug,P)},color:"inherit"},i.createElement(I.a,null)))),i.createElement("nav",{className:a.drawer},i.createElement(y.a,{mdUp:!0,implementation:"css"},i.createElement(b.a,{variant:"temporary",open:this.state.drawerOpen,onClose:this.handleDrawerToggle,onOpen:this.handleDrawerToggle,classes:{paper:a.drawerPaper}},V)),i.createElement(y.a,{smDown:!0,implementation:"css"},i.createElement(h.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},V))),i.createElement("div",{className:a.content},i.createElement("main",null,i.createElement("div",{className:a.autoSizerWrapper},i.createElement(U.a,null,function(t){var n=t.width,r=t.height;return i.createElement("div",null,i.createElement(oe,{width:n,height:r,meshes:O,buffers:N,mapState:{popVisibility:f,bufferVisibility:g,zoomLevel:E,terrain:v}}),i.createElement(y.a,{implementation:"css",mdUp:!0},i.createElement(T.a,{className:a.fabZoomIn,color:"primary",disabled:0===E,onClick:e.handleZoomIn,role:"button"},i.createElement(A.a,null)),i.createElement(T.a,{className:a.fabZoomOut,color:"primary",disabled:3===E,onClick:e.handleZoomOut,role:"button"},i.createElement(_.a,null))))})),i.createElement(ft.a,null,i.createElement(ut,null)),i.createElement(ft.a,null,i.createElement(vt,null)),i.createElement(ft.a,null,i.createElement(C.a,{component:"h2",variant:"h5",gutterBottom:!0},z),i.createElement(C.a,{variant:"body2",gutterBottom:!0},"クラブ: ",L.join(", "),"  ","カテゴリー: ",D.join(", "))),i.createElement(ft.a,null,i.createElement(R.a,{container:!0,className:a.grid,direction:"row-reverse",alignContent:"center"},i.createElement(R.a,{item:!0,xs:12,sm:8},i.createElement(st,{summary:k})),i.createElement(R.a,{item:!0,xs:12,sm:4},i.createElement(dt.a,{item:j.objects.buffers.geometries}))))),i.createElement("aside",null,i.createElement(ft.a,null,i.createElement(pt.a,null)),i.createElement(ft.a,null,i.createElement(ht.a,null)),i.createElement(ft.a,null,i.createElement(ht.b,null),i.createElement(l.Link,{to:"/",state:{appState:P}},"トップに戻る")),i.createElement(ft.a,null,i.createElement(vt,null))),i.createElement(wt.a,null)))},t}(i.Component);t.a=z()(function(e){var t,a,n,r;return D()({root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("md")]={width:280,flexShrink:0},t),appBar:(a={marginLeft:280},a[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},a),menuButton:(n={marginRight:10},n[e.breakpoints.up("md")]={display:"none"},n),drawerPaper:{width:280},content:{flexGrow:1,paddingTop:56,"@media (min-width: 600px)":{paddingTop:64}},apptitle:(r={flexGrow:1,lineHeight:1.2},r[e.breakpoints.down("sm")]={fontSize:"90%"},r),fullWidthContainer:{width:"100%",margin:"auto",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},autoSizerWrapper:{height:"calc(100vh - 122px)","@media (min-width: 600px)":{height:"calc(100vh - 64px)"}},fabZoomIn:{position:"absolute",bottom:10*e.spacing.unit,right:2*e.spacing.unit},fabZoomOut:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit},description:{maxWidth:800,margin:"auto"},descParagraph:{paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit}})})(xt)}}]);
//# sourceMappingURL=component---src-templates-arenas-container-tsx-4bb568f2922359a2a6cb.js.map