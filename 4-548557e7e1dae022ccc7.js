(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{272:function(e,t,a){"use strict";var r=a(287);a.d(t,"initialAppState",function(){return r.a}),a.d(t,"navigateWithState",function(){return r.b});var n=a(288);a.o(n,"Directions")&&a.d(t,"Directions",function(){return n.Directions}),a.o(n,"Radiuses")&&a.d(t,"Radiuses",function(){return n.Radiuses}),a.o(n,"basketballCategories")&&a.d(t,"basketballCategories",function(){return n.basketballCategories}),a.o(n,"directions")&&a.d(t,"directions",function(){return n.directions}),a.o(n,"footballCategories")&&a.d(t,"footballCategories",function(){return n.footballCategories}),a.o(n,"radiusLabels")&&a.d(t,"radiusLabels",function(){return n.radiusLabels}),a.o(n,"radiuses")&&a.d(t,"radiuses",function(){return n.radiuses});var i=a(289);a.d(t,"basketballCategories",function(){return i.a}),a.d(t,"footballCategories",function(){return i.b});var o=a(290);a.o(o,"Directions")&&a.d(t,"Directions",function(){return o.Directions}),a.o(o,"Radiuses")&&a.d(t,"Radiuses",function(){return o.Radiuses}),a.o(o,"directions")&&a.d(t,"directions",function(){return o.directions}),a.o(o,"radiusLabels")&&a.d(t,"radiusLabels",function(){return o.radiusLabels}),a.o(o,"radiuses")&&a.d(t,"radiuses",function(){return o.radiuses});var l=a(291);a.d(t,"Directions",function(){return l.a}),a.d(t,"directions",function(){return l.b});var s=a(292);a.o(s,"Radiuses")&&a.d(t,"Radiuses",function(){return s.Radiuses}),a.o(s,"radiusLabels")&&a.d(t,"radiusLabels",function(){return s.radiusLabels}),a.o(s,"radiuses")&&a.d(t,"radiuses",function(){return s.radiuses});var c=a(278);a.d(t,"Radiuses",function(){return c.a}),a.d(t,"radiusLabels",function(){return c.b}),a.d(t,"radiuses",function(){return c.c});a(293)},274:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(1),o=a.n(i),l=a(271),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(279),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(54);a.d(t,"parsePath",function(){return d.a});var m=n.a.createContext({}),p=function(e){return n.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},278:function(e,t,a){"use strict";var r;a.d(t,"a",function(){return r}),a.d(t,"c",function(){return n}),a.d(t,"b",function(){return i}),function(e){e[e.radius1000=1e3]="radius1000",e[e.radius3000=3e3]="radius3000",e[e.radius5000=5e3]="radius5000",e[e.radius10000=1e4]="radius10000"}(r||(r={}));var n=[r.radius1000,r.radius3000,r.radius5000,r.radius10000],i={radius1000:"1km",radius3000:"3km",radius5000:"5km",radius10000:"10km"}},279:function(e,t,a){var r;e.exports=(r=a(296))&&r.default||r},287:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return o});var r=a(274),n=a(278),i=function(e,t){Object(r.navigate)(e,{state:{appState:t}})},o={tableState:{ascSort:!1,sortKey:n.a.radius10000,filterRule:[]},mapState:{popVisibility:!0,bufferVisibility:!0,zoomLevel:n.a.radius10000,terrain:!1}}},288:function(e,t){},289:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return n});var r=["J1","J2","J3","JFL","地域","その他"],n=["B1","B2","B3","地域","その他"]},290:function(e,t){},291:function(e,t,a){"use strict";var r;a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n}),function(e){e[e.north=0]="north",e[e.northeast=1]="northeast",e[e.east=2]="east",e[e.southeast=3]="southeast",e[e.south=4]="south",e[e.southwest=5]="southwest",e[e.west=6]="west",e[e.northwest=7]="northwest"}(r||(r={}));var n=["north","northeast","east","southeast","south","southwest","west","northwest"]},292:function(e,t){},293:function(e,t){},296:function(e,t,a){"use strict";a.r(t);a(52);var r=a(0),n=a.n(r),i=a(1),o=a.n(i),l=a(83),s=a(4),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},305:function(e,t,a){"use strict";var r=a(0),n=a(126),i=a.n(n),o=a(127),l=a.n(o),s=a(273),c=a.n(s);t.a=i()(function(e){return l()({root:{backgroundColor:e.palette.primary.dark,color:"white"},inner:{display:"flex",padding:4*e.spacing.unit+"px "+1*e.spacing.unit+"px",justifyContent:"center",justifyItems:"center"}})})(function(e){var t=e.classes;return r.createElement("div",{className:t.root},r.createElement("footer",null,r.createElement("div",{className:t.inner},r.createElement(c.a,{variant:"body2",color:"inherit"},"Copyright © 2019 cieloazul310 All rights reserved."))))})},330:function(e,t,a){"use strict";a.d(t,"b",function(){return X});a(331),a(385),a(128),a(81),a(386),a(295),a(52);var r=a(10),n=a.n(r),i=a(0),o=a(274),l=a(270),s=a.n(l),c=a(127),u=a.n(c),d=a(126),m=a.n(d),p=a(316),f=a.n(p),h=a(273),b=a.n(h),g=a(317),E=a.n(g),v=a(388),y=a.n(v),w=a(311),x=a.n(w),k=a(354),S=a.n(k),R=a(352),C=a.n(R),N=a(390),j=a.n(N),B=a(391),L=a.n(B),_=a(392),O=a.n(_),z=a(304),T=a.n(z),q=a(298),A=a.n(q),D=a(387),I=a.n(D),M=a(393),K=a.n(M),Q=a(332),F=a.n(Q),P=a(389),W=a.n(P),J=a(394),U=a.n(J),G=a(333),H=a.n(G),Y=a(272),V=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state=t.props.appState?Object.assign({},t.props.appState.tableState,{menuOpen:!1}):{ascSort:!1,sortKey:Y.Radiuses.radius10000,filterRule:[],menuOpen:!1},t.anchorEl=null,t._handleSort=function(e){t.setState(function(t){return{ascSort:t.sortKey===e&&!t.ascSort,sortKey:e}})},t._handleMenuOpen=function(){t.setState(function(e){return{menuOpen:!e.menuOpen}})},t._handleFilterRule=function(e){t.setState(function(t){return{filterRule:t.filterRule.indexOf(e)>=0?t.filterRule.filter(function(t){return t!==e}):[].concat(t.filterRule,[e])}})},t}return n()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.classes,r=t.edges,n=t.width,l=t.height,c=t.appState,u=t.group,d=t.title,m=this.state,p=m.ascSort,h=m.sortKey,g=m.filterRule,v=m.menuOpen,w="venues"===u?Y.footballCategories:"arenas"===u?Y.basketballCategories:[];return i.createElement(f.a,{className:a.root,style:{width:n,height:l}},i.createElement("div",{className:a.header},i.createElement(E.a,{className:a.toolbar}," ",i.createElement(y.a,{title:"フィルター"},i.createElement(x.a,{color:"inherit","aria-owns":v?"menu-list":void 0,"aria-haspopup":"true",buttonRef:function(t){e.anchorEl=t},onClick:this._handleMenuOpen},i.createElement(W.a,null))),i.createElement(S.a,{className:a.filterMenuWrapper,anchorEl:this.anchorEl,open:v,transition:!0,disablePortal:!0,placement:"bottom-start"},function(t){var a=t.TransitionProps;return i.createElement(C.a,Object.assign({},a,{style:{transformOrigin:"left top"}}),i.createElement(f.a,null,i.createElement(j.a,{onClickAway:function(t){null===e.anchorEl||e.anchorEl.contains(t.target)||e.setState({menuOpen:!1})}},i.createElement(L.a,null,w.map(function(t,a){return i.createElement(O.a,{key:a,onClick:function(){e._handleFilterRule(t)}},i.createElement(T.a,null,g.indexOf(t)<0?i.createElement(K.a,null):i.createElement(F.a,{color:"disabled"})),i.createElement(A.a,{inset:!0,primary:t}))})))))}),i.createElement(b.a,{className:a.title,variant:"h6",color:"inherit"},d,"と距離圏人口"),i.createElement(y.a,{title:"ダイジェスト"},i.createElement(x.a,{"aria-owns":"next",role:"button","aria-haspopup":"true",color:"inherit",onClick:function(){Object(Y.navigateWithState)("/"+u+"/manholes",{mapState:c.mapState,tableState:{ascSort:p,sortKey:h,filterRule:g}})}},i.createElement(H.a,null)))),i.createElement("div",{className:a.thead},i.createElement("div",{className:a.row},i.createElement("div",{className:a.headerRowHead},i.createElement("div",{className:a.index},"i"),i.createElement("div",{className:a.name},"name")),i.createElement("div",{className:a.headerRowBody},Object.entries(Y.radiusLabels).map(function(t,r){var n;return i.createElement("div",{key:r,role:"button",className:s()(a.val,a.labelCell,(n={},n[""+a.labelCellActive]=Y.Radiuses[t[0]]===h,n))},i.createElement(U.a,{classes:{root:a.labelRoot,active:a.labelActive},active:Y.Radiuses[t[0]]===h,direction:p?"asc":"desc",onClick:function(){return e._handleSort(Y.Radiuses[t[0]])}},t[1]))}))))),i.createElement("div",{className:a.table,style:{height:l-140}},X(r,{ascSort:p,sortKey:h,filterRule:g}).map(function(e,t){return i.createElement("div",{key:t,className:a.row},i.createElement("div",{className:a.rowHead},i.createElement("div",{className:a.index},t+1),i.createElement("div",{className:a.name},i.createElement(o.Link,{to:e.node.fields.slug,className:a.link,state:{appState:{mapState:c.mapState,tableState:{ascSort:p,sortKey:h,filterRule:g}}}},e.node.summary.name)),i.createElement("div",{className:a.category},e.node.summary.shortname.join(" "))),i.createElement("div",{className:a.rowBody},i.createElement("div",{className:a.val},e.node.summary.radius1000.toLocaleString()),i.createElement("div",{className:a.val},e.node.summary.radius3000.toLocaleString()),i.createElement("div",{className:a.val},e.node.summary.radius5000.toLocaleString()),i.createElement("div",{className:a.val},e.node.summary.radius10000.toLocaleString())))})))},t}(i.Component);function X(e,t){var a=t.ascSort,r=t.sortKey,n=t.filterRule,i=a?1:-1,o=Y.Radiuses[r];return n.length?e.filter(function(e){return e.node.summary.category.some(function(e){return n.indexOf(e)<0})}).sort(function(e,t){return i*(e.node.summary[o]-t.node.summary[o])}):e.sort(function(e,t){return i*(e.node.summary[o]-t.node.summary[o])})}t.a=m()(function(e){return u()({root:{fontSize:"80%",fontFamily:e.typography.fontFamily},table:{overflowY:"scroll",overflowScrolling:"touch",WebkitOverflowScrolling:"touch",zIndex:0},header:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,position:"sticky",display:"flex",flexDirection:"column",boxShadow:e.shadows[1],zIndex:99},toolbar:{display:"flex",flexDirection:"row",height:56},title:{flex:1},filterMenuWrapper:{zIndex:100},headerRowHead:{flex:1,display:"flex","@media (max-width: 720px)":{display:"none"}},headerRowBody:{display:"flex",justifyContent:"space-evenly"},labelCell:{borderBottom:"2px solid rgba(255, 255, 255, 0)",transition:"border .25s","&:hover":{borderBottom:"2px solid white"}},labelCellActive:{borderBottom:"2px solid white"},labelRoot:{color:"#ddd","&:hover":{color:e.palette.primary.contrastText},"&:focus":{color:e.palette.primary.contrastText}},labelActive:{color:e.palette.primary.contrastText,"&:hover":{color:e.palette.primary.contrastText},"&:focus":{color:e.palette.primary.contrastText}},thead:{},row:{display:"flex",flexDirection:"row","@media (max-width: 720px)":{flexDirection:"column",borderBottom:"1px solid #ddd"}},rowHead:{flex:1,display:"flex",boxSizing:"border-box",borderRight:"1px solid #eee","@media (max-width: 720px)":{borderRight:"none",borderBottom:"1px solid #eee"}},index:{width:"4em",padding:"1rem .5rem",boxSizing:"border-box",textAlign:"right"},name:{padding:"1rem",boxSizing:"border-box",flex:1,fontWeight:"bold"},category:{color:"#333",padding:"1rem",boxSizing:"border-box"},rowBody:{display:"flex",justifyContent:"space-evenly"},val:{width:"9em",padding:"1rem",boxSizing:"border-box",display:"flex",flexDirection:"row-reverse"},link:{color:e.palette.primary.main,"&:visited":{color:I.a[900]},"&:hover":{color:I.a[500]}}})})(V)},334:function(e,t,a){"use strict";var r=a(335),n=a(0),i=a(274),o=a(273),l=a.n(o);t.a=function(){return n.createElement(i.StaticQuery,{query:"2933318586",render:function(e){return n.createElement("section",null,n.createElement(l.a,{variant:"h5",gutterBottom:!0},e.site.siteMetadata.title),n.createElement(l.a,{variant:"body1",paragraph:!0},e.site.siteMetadata.description),n.createElement(l.a,{variant:"body1"},"人口データ: ",n.createElement("a",{href:"https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876",target:"_blank",rel:"noopener noreferrer"},"国勢調査 2015年 5次メッシュ(250mメッシュ)")),n.createElement(l.a,{variant:"body1"},"演算: ",n.createElement("a",{href:"http://turfjs.org",target:"_blank",rel:"noopener noreferrer"},"Turf.js")),n.createElement(l.a,{variant:"body1"},"地図: ",n.createElement("a",{href:"https://maps.gsi.go.jp/development/ichiran.html",target:"_blank",rel:"noopener noreferrer"},"地理院タイル")),n.createElement(l.a,{variant:"body1"},"制作: ",n.createElement("a",{href:e.site.siteMetadata.author.url,target:"_blank",rel:"noopener noreferrer"},e.site.siteMetadata.author.siteName)),n.createElement(l.a,{variant:"body1"},"Twitter: ",n.createElement("a",{href:"https://twitter.com/"+e.site.siteMetadata.author.twitter,target:"_blank",rel:"noopener noreferrer"},"@"+e.site.siteMetadata.author.twitter)),n.createElement(l.a,{variant:"body1",paragraph:!0}),n.createElement(l.a,{variant:"h6",gutterBottom:!0},"データの利用について"),n.createElement(l.a,{variant:"body1",paragraph:!0},"本サイトに掲載しているデータは「URL または サイト名」及び「データの出典元（地域メッシュ統計）」を明記した上で、自由に利用可能です。地図を利用する際には、",n.createElement("a",{href:"http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html",target:"_blank",rel:"noopener noreferrer"},"国土地理院コンテンツ利用規約"),"を参照ください。"),n.createElement(l.a,{variant:"body2",paragraph:!0},"記載例: 「出典: 水戸地図、2015年度国勢調査250mメッシュ人口」"))},data:r})}},335:function(e){e.exports={data:{site:{siteMetadata:{title:"サッカースタジアムと人口",siteUrl:"https://cieloazul310.github.io/gatsby-stadiums-population/",description:"日本国内の主要サッカースタジアムと周辺の人口を地図で表示したサイトです。",author:{name:"cieloazul310",url:"https://cieloazul310.github.io",siteName:"水戸地図",twitter:"cieloazul310",github:"cieloazul310"}}}}}},336:function(e,t,a){"use strict";var r=a(0),n=a(126),i=a.n(n),o=a(127),l=a.n(o);t.a=i()(function(e){return l()({root:{fontFamily:e.typography.fontFamily,width:"100%",maxWidth:800,margin:"auto",padding:2*e.spacing.unit,"@global":{blockquote:{backgroundColor:"#f3f3f3",margin:2*e.spacing.unit+"px auto",padding:2*e.spacing.unit,borderLeft:"solid 4px #ddd",borderRadius:"8px"}}}})})(function(e){return r.createElement("div",{className:e.classes.root},e.children)})},337:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return l});var r=a(0),n=a(273),i=a.n(n),o=function(){return r.createElement("section",null,r.createElement(i.a,{variant:"h5",gutterBottom:!0},"人口データについて"),r.createElement(i.a,{variant:"body1",paragraph:!0},"人口データは総務省統計局の地域メッシュ統計を点データに変換したものを用いています。"),r.createElement(i.a,{variant:"body1",paragraph:!0},"データ: ",r.createElement("a",{href:"https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876",target:"_blank",rel:"noopener noreferrer"},"国勢調査 2015年 5次メッシュ(250mメッシュ) その1 人口等基本集計に関する事項"),r.createElement("br",null),"公開日: 2018年1月4日",r.createElement("br",null),"データ取得日: 2018年4月10日"),r.createElement("blockquote",null,r.createElement(i.a,{variant:"subtitle1",gutterBottom:!0},"地域メッシュ統計とは"),r.createElement(i.a,{variant:"body1",paragraph:!0},"地域メッシュ統計とは，緯度・経度に基づき地域を隙間なく網の目（メッシュ）の区域に分けて，それぞれの区域に関する統計データを編成したものです。"),r.createElement(i.a,{variant:"body2"},"引用元:"," ",r.createElement("a",{href:"https://www.stat.go.jp/data/mesh/m_tuite.html",target:"_blank",rel:"noopener noreferrer"},"総務省統計局"))),r.createElement(i.a,{variant:"h5",gutterBottom:!0},"距離円と人口データの演算"),r.createElement(i.a,{variant:"body1",paragraph:!0},"距離円および距離円に含まれる人口データは JavaScript ライブラリである"," ",r.createElement("a",{href:"https://turfjs.org",target:"_blank",rel:"noopener noreferrer"},"Turf.js")," ","で算出しました。"),r.createElement(i.a,{variant:"body1"},"人口の算出方法は、",r.createElement("a",{href:"https://midoriit.com/2014/08/qgis%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%B1%E8%A8%88%E8%A7%A3%E6%9E%904.html",target:"_blank",rel:"noopener noreferrer"},"QGISによるデータ分析(4) 合同会社 緑IT事務所"),"を参考にしています。"))},l=function(){return r.createElement("section",null,r.createElement(i.a,{variant:"h5",gutterBottom:!0},"地図について"),r.createElement(i.a,{variant:"body1",paragraph:!0},"背景地図には国土地理院の",r.createElement("a",{href:"https://maps.gsi.go.jp/development/ichiran.html",target:"_blank",rel:"noopener noreferrer"},"地理院タイル"),"を使用しています。標準モードでは電子国土基本図、地形モードでは傾斜量図を表示しています。"),r.createElement("blockquote",null,r.createElement(i.a,{variant:"subtitle1",gutterBottom:!0},"電子国土基本図"),r.createElement(i.a,{variant:"body1",paragraph:!0},"電子国土基本図（地図情報）とは、道路、建物などの電子地図上の位置の基準である項目（基盤地図情報の取得項目）と、植生、崖、岩、構造物などの土地の状況を表す項目とを一つにまとめたデータです。電子国土基本図（地図情報）は、縮尺レベル25000の精度に限定することなく、より精度の高いものを含んだ我が国全域を覆うベクトル形式の基盤データで、これまでの2万5千分1地形図に替わる新たな基本図と位置づけられるものです。"),r.createElement(i.a,{variant:"body2"},"引用元: ",r.createElement("a",{href:"http://www.gsi.go.jp/kibanjoho/mapinfo_what.html"},"国土地理院"))),r.createElement("blockquote",null,r.createElement(i.a,{variant:"subtitle1",gutterBottom:!0},"傾斜量図"),r.createElement(i.a,{variant:"body1",paragraph:!0},"地表面の傾きの量を算出し、その大きさを白黒の濃淡で表現したものです。白いほど傾斜が緩やか、黒いほど急峻であることを意味します。台地、段丘、山地、火山地形、地すべり、断層などの地形判読などにご活用いただけます。"),r.createElement(i.a,{variant:"body2"},"引用元: ",r.createElement("a",{href:"http://www.gsi.go.jp/bousaichiri/slopemap.html"},"国土地理院"))))}},460:function(e,t,a){"use strict";var r=a(10),n=a.n(r),i=a(0),o=a(129),l=a.n(o),s=a(127),c=a.n(s),u=a(126),d=a.n(u),m=a(324),p=a(330),f=a(336),h=a(334),b=a(337),g=a(305),E=a(398),v=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.group,r=e.edges,n=e.appState,o="venues"===a?"スタジアム":"arenas"===a?"アリーナ":"";return i.createElement("div",{className:t.root},i.createElement(l.a,null),i.createElement(m.Helmet,null,i.createElement("html",{lang:"ja"}),i.createElement("title",null,o,"と人口"),i.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,minimal-ui"}),i.createElement("meta",{name:"description",content:"日本国内の主要な"+o+"の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。"}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{property:"og:title",content:o+"と人口"}),i.createElement("meta",{property:"og:url",content:"https://cieloazul310.github.io/gatsby-stadiums-population/"}),i.createElement("meta",{property:"og:image",content:"https://cieloazul310.github.io/img/ogp2.png"}),i.createElement("meta",{property:"og:site_name",content:"水戸地図"}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),i.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"})),i.createElement("main",null,i.createElement("div",{className:t.content},i.createElement("div",{className:t.table},i.createElement(E.a,null,function(e){var t=e.width,l=e.height;return i.createElement(p.a,{width:t,height:l,edges:r,group:a,appState:n,title:o})})))),i.createElement("aside",null,i.createElement("div",{className:t.aside},i.createElement(f.a,null,i.createElement(h.a,null)),i.createElement(f.a,null,i.createElement(b.a,null)))),i.createElement(g.a,null))},t}(i.PureComponent);t.a=d()(function(e){var t;return c()({root:{width:"100%"},content:{margin:"auto",maxWidth:1e3},table:(t={width:"100%",height:"100vh"},t[e.breakpoints.down("xs")]={height:"calc(100vh - 66px)"},t),aside:{paddingTop:4*e.spacing.unit,paddingBottom:4*e.spacing.unit}})})(v)}}]);
//# sourceMappingURL=4-548557e7e1dae022ccc7.js.map