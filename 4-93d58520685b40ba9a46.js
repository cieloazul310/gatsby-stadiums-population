(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{281:function(e,t,n){"use strict";var a=n(299);n.d(t,"createInitialAppState",function(){return a.a}),n.d(t,"navigateWithState",function(){return a.b});var r=n(300);n.o(r,"Directions")&&n.d(t,"Directions",function(){return r.Directions}),n.o(r,"Radiuses")&&n.d(t,"Radiuses",function(){return r.Radiuses}),n.o(r,"basketballCategories")&&n.d(t,"basketballCategories",function(){return r.basketballCategories}),n.o(r,"directionToKanji")&&n.d(t,"directionToKanji",function(){return r.directionToKanji}),n.o(r,"directions")&&n.d(t,"directions",function(){return r.directions}),n.o(r,"footballCategories")&&n.d(t,"footballCategories",function(){return r.footballCategories}),n.o(r,"getItemsDiff")&&n.d(t,"getItemsDiff",function(){return r.getItemsDiff}),n.o(r,"radiusLabels")&&n.d(t,"radiusLabels",function(){return r.radiusLabels}),n.o(r,"radiuses")&&n.d(t,"radiuses",function(){return r.radiuses});var i=n(301);n.d(t,"basketballCategories",function(){return i.a}),n.d(t,"footballCategories",function(){return i.b});var o=n(302);n.o(o,"Directions")&&n.d(t,"Directions",function(){return o.Directions}),n.o(o,"Radiuses")&&n.d(t,"Radiuses",function(){return o.Radiuses}),n.o(o,"directionToKanji")&&n.d(t,"directionToKanji",function(){return o.directionToKanji}),n.o(o,"directions")&&n.d(t,"directions",function(){return o.directions}),n.o(o,"getItemsDiff")&&n.d(t,"getItemsDiff",function(){return o.getItemsDiff}),n.o(o,"radiusLabels")&&n.d(t,"radiusLabels",function(){return o.radiusLabels}),n.o(o,"radiuses")&&n.d(t,"radiuses",function(){return o.radiuses});var u=n(303);n.d(t,"Directions",function(){return u.a}),n.d(t,"directionToKanji",function(){return u.b}),n.d(t,"directions",function(){return u.c}),n.d(t,"getItemsDiff",function(){return u.d});var s=n(304);n.o(s,"Radiuses")&&n.d(t,"Radiuses",function(){return s.Radiuses}),n.o(s,"radiusLabels")&&n.d(t,"radiusLabels",function(){return s.radiusLabels}),n.o(s,"radiuses")&&n.d(t,"radiuses",function(){return s.radiuses});var c=n(287);n.d(t,"Radiuses",function(){return c.a}),n.d(t,"radiusLabels",function(){return c.b}),n.d(t,"radiuses",function(){return c.c});n(305)},285:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),u=n(53),s=n.n(u);n.d(t,"a",function(){return s.a}),n.d(t,"c",function(){return u.navigate});n(296);var c=r.a.createContext({}),l=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},287:function(e,t,n){"use strict";var a;n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return i}),function(e){e[e.radius1000=1e3]="radius1000",e[e.radius3000=3e3]="radius3000",e[e.radius5000=5e3]="radius5000",e[e.radius10000=1e4]="radius10000"}(a||(a={}));var r=[a.radius1000,a.radius3000,a.radius5000,a.radius10000],i={radius1000:"1km",radius3000:"3km",radius5000:"5km",radius10000:"10km"}},296:function(e,t,n){var a;e.exports=(a=n(316))&&a.default||a},299:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var a=n(285),r=n(287),i=function(e,t){Object(a.c)(e,{state:{appState:t}})},o={tableState:{ascSort:!1,sortKey:r.a.radius10000,filterRule:[]},mapState:{popVisibility:!0,bufferVisibility:!0,zoomLevel:r.a.radius10000,terrain:!1}},u=function(e){return null===e.state||void 0===e.state?o:void 0===e.state.appState?o:e.state.appState}},300:function(e,t){},301:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=["J1","J2","J3","JFL","地域","その他"],r=["B1","B2","B3","地域"]},302:function(e,t){},303:function(e,t,n){"use strict";var a;n.d(t,"a",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return o}),function(e){e[e.north=0]="north",e[e.northeast=1]="northeast",e[e.east=2]="east",e[e.southeast=3]="southeast",e[e.south=4]="south",e[e.southwest=5]="southwest",e[e.west=6]="west",e[e.northwest=7]="northwest"}(a||(a={}));var r=["north","northeast","east","southeast","south","southwest","west","northwest"];function i(e){return"north"===e?"北":"northeast"===e?"北東":"east"===e?"東":"southeast"===e?"南東":"south"===e?"南":"southwest"===e?"南西":"west"===e?"西":"northwest"===e?"北西":""}function o(e){var t={};return r.forEach(function(n){t[n]=e.map(function(e,t,a){return{radius:e.properties.radius,population:e.properties[n],diff:0===t?e.properties[n]:e.properties[n]-a[t-1].properties[n]}})}),t}},304:function(e,t){},305:function(e,t){},309:function(e,t,n){var a=n(40).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(25)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},311:function(e,t,n){"use strict";var a=n(10),r=n.n(a),i=n(0),o=n(295),u=n.n(o),s=n(290),c=n(294),l=n(349),d=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentWillMount=function(){s.b.add(l.faTwitter)},n.render=function(){return i.createElement(u.a,this.props,i.createElement(c.a,{style:{verticalAlign:"0.125em"},icon:["fab","twitter"]}))},t}(i.PureComponent);t.a=d},312:function(e,t,n){"use strict";var a=n(10),r=n.n(a),i=n(0),o=n(295),u=n.n(o),s=n(290),c=n(294),l=n(350),d=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentWillMount=function(){s.b.add(l.faFacebook)},n.render=function(){return i.createElement(u.a,this.props,i.createElement(c.a,{style:{verticalAlign:"0.125em"},icon:["fab","facebook"]}))},t}(i.PureComponent);t.a=d},316:function(e,t,n){"use strict";n.r(t);n(54);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),u=n(84),s=n(4),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},317:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"c",function(){return s});var a=n(0),r=n(308),i=n(342),o=n(421),u=Object(i.c)(o.a).domain([1250,0]),s=Object(i.b)().domain([0,1e3]).range([0,8]).exponent(.5);t.b=function(e){var t=e.feature,n=e.projection,i=t.properties.val,o=n(t.geometry.coordinates)||[0,0],c=Math.abs(s(i)*Math.min(Math.max(1,n.scale()/125e3),2.5));return a.createElement("rect",{fill:Object(r.a)(u(i)).hex(),fillOpacity:.6,x:(o[0]-c/2).toFixed(2),y:(o[1]-c/2).toFixed(2),width:c.toFixed(2),height:c.toFixed(2)})}},321:function(e,t,n){"use strict";var a=n(0),r=n(127),i=n.n(r),o=n(128),u=n.n(o);t.a=i()(function(e){return u()({root:{fontFamily:e.typography.fontFamily,width:"100%",maxWidth:800,margin:"auto",padding:2*e.spacing.unit,"@global":{blockquote:{backgroundColor:"#f3f3f3",margin:2*e.spacing.unit+"px auto",padding:2*e.spacing.unit,borderLeft:"solid 4px #ddd",borderRadius:"8px"}}}})})(function(e){return a.createElement("div",{className:e.classes.root},e.children)})},322:function(e,t,n){"use strict";var a=n(10),r=n.n(a),i=n(0),o=n(280),u=n.n(o),s=n(128),c=n.n(s),l=n(127),d=n.n(l),f=n(282),p=n.n(f),m=c()({root:{width:"100%",minHeight:60},ad:{display:"block"}}),g=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})},n.render=function(){var e=this.props.classes;return i.createElement("div",{className:e.root},i.createElement(p.a,{variant:"subtitle2"},"広告"),i.createElement("ins",{className:u()("adsbygoogle",e.ad),"data-ad-client":"ca-pub-7323207940463794","data-ad-slot":3901734109,"data-ad-format":"auto","data-full-width-responsive":!0}))},t}(i.PureComponent);t.a=d()(m)(g)},323:function(e,t,n){"use strict";var a=n(0),r=n(127),i=n.n(r),o=n(128),u=n.n(o),s=n(282),c=n.n(s);t.a=i()(function(e){return u()({root:{backgroundColor:e.palette.primary.dark,color:"white"},inner:{display:"flex",padding:4*e.spacing.unit+"px "+1*e.spacing.unit+"px",justifyContent:"center",justifyItems:"center"}})})(function(e){var t=e.classes;return a.createElement("div",{className:t.root},a.createElement("footer",null,a.createElement("div",{className:t.inner},a.createElement(c.a,{variant:"body2",color:"inherit"},"Copyright © 2019 cieloazul310 All rights reserved."))))})},324:function(e,t,n){"use strict";var a=n(0),r=n(128),i=n.n(r),o=n(127),u=n.n(o),s=n(307),c=n.n(s),l=n(311),d=n(312),f=n(10),p=n.n(f),m=n(295),g=n.n(m),b=n(290),h=n(294),v=n(360),y=function(e){function t(){return e.apply(this,arguments)||this}p()(t,e);var n=t.prototype;return n.componentWillMount=function(){b.b.add(v.faGithub)},n.render=function(){return a.createElement(g.a,this.props,a.createElement(h.a,{style:{verticalAlign:"0.125em"},icon:["fab","github"]}))},t}(a.PureComponent),E=i()({root:{display:"flex",alignItems:"center",justifyContent:"center"}});t.a=u()(E)(function(e){var t=e.classes,n=e.title,r=e.url;return a.createElement("div",{className:t.root},a.createElement(c.a,{"aria-label":"Share on Twitter",href:"https://twitter.com/intent/tweet?text="+encodeURI(n)+"&url="+encodeURIComponent(r),target:"_blank",rel:"noopener noreferrer"},a.createElement(l.a,{fontSize:"large"})),a.createElement(c.a,{"aria-label":"Share on Facebook",href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(r),target:"_blank",rel:"noopener noreferrer"},a.createElement(d.a,{fontSize:"large"})),a.createElement(c.a,{"aria-label":"View on GitHub",href:"https://github.com/cieloazul310/gatsby-stadiums-population",target:"_blank",rel:"noopener noreferrer"},a.createElement(y,{fontSize:"large"})))})},336:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(406))},337:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(407))},352:function(e,t,n){"use strict";var a=n(16),r=n(42),i=n(41),o=n(24),u=[].sort,s=[1,2,3];a(a.P+a.F*(o(function(){s.sort(void 0)})||!o(function(){s.sort(null)})||!n(403)(u)),"Array",{sort:function(e){return void 0===e?u.call(i(this)):u.call(i(this),r(e))}})},356:function(e,t,n){"use strict";n(129),n(82),n(415);var a=n(0),r=n(342),i=n(420),o=n(317),u=n(281),s=o.a.copy(),c=[8*o.a.domain()[0],0];s.domain(c);var l=Object(r.a)().domain([250,0]).range([1,0]);t.a=function(e){var t=e.item;return a.createElement("svg",{viewBox:"0 0 300 300"},t.map(function(e,t,n){return a.createElement("g",{key:t,transform:"translate(150, 150)"},u.directions.map(function(r){var o,c,d=function(e,t){var n=u.radiuses.indexOf(t);return 0===n?8*e/(Math.pow(u.radiuses[n]/1e3,2)*Math.PI):8*e/(Math.pow(u.radiuses[n]/1e3,2)*Math.PI-Math.pow(u.radiuses[n-1]/1e3,2)*Math.PI)}(0===t?e.properties[r]:e.properties[r]-n[t-1].properties[r],e.properties.radius),f=(o=u.Directions[r],c=2*Math.PI/(Object.keys(u.Directions).length/2),{startAngle:o*c-c/2,endAngle:o*c+c/2}),p=f.startAngle,m=f.endAngle,g=Object(i.a)()({startAngle:p,endAngle:m,innerRadius:292*(t+1)/10+2,outerRadius:292*(t+2)/10,padAngle:.05});return a.createElement("g",{key:r},a.createElement("path",{key:r,d:g||void 0,fill:s(d),fillOpacity:l(d)}))}))}))}},403:function(e,t,n){"use strict";var a=n(24);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},406:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(12)),i=a(n(15)),o=a(n(6)),u=a(n(0)),s=(a(n(2)),a(n(280))),c=(a(n(11)),n(19),a(n(127))),l=function(e){var t={};return e.shadows.forEach(function(e,n){t["elevation".concat(n)]={boxShadow:e}}),(0,o.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function d(e){var t=e.classes,n=e.className,a=e.component,c=e.square,l=e.elevation,d=(0,i.default)(e,["classes","className","component","square","elevation"]),f=(0,s.default)(t.root,t["elevation".concat(l)],(0,r.default)({},t.rounded,!c),n);return u.default.createElement(a,(0,o.default)({className:f},d))}t.styles=l,d.defaultProps={component:"div",elevation:2,square:!1};var f=(0,c.default)(l,{name:"MuiPaper"})(d);t.default=f},407:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(6)),i=a(n(12)),o=a(n(15)),u=a(n(0)),s=(a(n(2)),a(n(280))),c=a(n(127)),l=function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:e.mixins.gutters(),regular:e.mixins.toolbar,dense:{minHeight:48}}};function d(e){var t=e.children,n=e.classes,a=e.className,c=e.disableGutters,l=e.variant,d=(0,o.default)(e,["children","classes","className","disableGutters","variant"]),f=(0,s.default)(n.root,n[l],(0,i.default)({},n.gutters,!c),a);return u.default.createElement("div",(0,r.default)({className:f},d),t)}t.styles=l,d.defaultProps={disableGutters:!1,variant:"regular"};var f=(0,c.default)(l,{name:"MuiToolbar"})(d);t.default=f},479:function(e,t,n){"use strict";n(309),n(140),n(141),n(352);var a=n(10),r=n.n(a),i=n(0),o=n(285),u=n(343),s=n(127),c=n.n(s),l=n(128),d=n.n(l),f=n(282),p=n.n(f),m=n(134),g=n.n(m),b=n(416),h=n.n(b),v=n(337),y=n.n(v),E=n(418),w=n.n(E),k=n(336),j=n.n(k),x=n(307),C=n.n(x),R=n(644),M=n.n(R),P=n(356),N=n(321),O=n(324),S=n(323),I=n(281),L=n(322),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.edges,a=e.appState,r=e.group,s="venues"===r?I.footballCategories:"arenas"===r?I.basketballCategories:[],c="venues"===r?"スタジアム":"arenas"===r?"アリーナ":"",l="https://cieloazul310.github.io/gatsby-stadiums-population/"+r+"/manholes/";return i.createElement("div",{className:t.root},i.createElement(g.a,null),i.createElement(u.Helmet,null,i.createElement("html",{lang:"ja"}),i.createElement("title",null,c,"と距離圏人口 | 水戸地図"),i.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,minimal-ui"}),i.createElement("meta",{name:"description",content:"日本国内の主要な"+c+"の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。"}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{property:"og:title",content:c+"と人口"}),i.createElement("meta",{property:"og:url",content:l}),i.createElement("meta",{property:"og:image",content:"https://cieloazul310.github.io/img/ogp2.png"}),i.createElement("meta",{property:"og:site_name",content:"水戸地図"}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"twitter:description",content:"日本国内の主要な"+c+"の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。"}),i.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),i.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"})),i.createElement(h.a,null,i.createElement(y.a,null,i.createElement(C.a,{color:"inherit",onClick:function(){Object(I.navigateWithState)("/"+r,a)}},i.createElement(M.a,null)),i.createElement(p.a,{variant:"h6",color:"inherit"},c,"と距離圏人口"))),i.createElement("div",{className:t.content},s.map(function(e){return i.createElement(j.a,{key:e,className:t.paper},i.createElement(p.a,{className:t.paperTitle,variant:"h5",gutterBottom:!0},"地域"!==e?e:"地域リーグ","の",c),i.createElement(w.a,{container:!0,className:t.container,spacing:0},n.filter(function(t){return t.node.summary.category.includes(e)}).sort(function(e,t){return D(t.node.summary)-D(e.node.summary)}).map(function(e,n){return i.createElement(w.a,{key:n,item:!0,xs:6,sm:4,md:2,lg:2,className:t.edge},i.createElement(P.a,{item:e.node.topojson.objects.buffers.geometries}),i.createElement("div",null,i.createElement(p.a,{className:t.label,variant:"caption"},i.createElement(o.a,{to:e.node.fields.slug,state:{appState:a}},e.node.summary.name))))})))})),i.createElement(N.a,null,i.createElement(O.a,{title:c+"と人口",url:l})),i.createElement(N.a,null,i.createElement(L.a,null)),i.createElement(S.a,null))},t}(i.Component);function D(e){var t;!function(e){e[e.radius1000=100]="radius1000",e[e.radius3000=33]="radius3000",e[e.radius5000=10]="radius5000",e[e.radius10000=1]="radius10000"}(t||(t={}));return["radius1000","radius3000","radius5000","radius10000"].reduce(function(n,a,r,i){return 0===r?n+e[a]*t[a]:n+(e[a]-e[i[r-1]])*t[a]},0)}t.a=c()(function(e){var t;return d()({root:{flex:1},content:(t={paddingTop:64,paddingRight:2*e.spacing.unit,paddingLeft:2*e.spacing.unit,"@media (max-width: 599px)":{paddingTop:56}},t[e.breakpoints.down("xs")]={paddingRight:0,paddingLeft:0},t),container:{padding:e.spacing.unit},paper:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},paperTitle:{textAlign:"center"},edge:{padding:e.spacing.unit},label:{display:"flex",justifyContent:"center"}})})(T)},644:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(0,a(n(289)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"ArrowBack");t.default=i}}]);
//# sourceMappingURL=4-93d58520685b40ba9a46.js.map