(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{262:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return M});n(294),n(138),n(139),n(349);var a=n(11),r=n.n(a),i=n(0),u=n(277),o=n(126),s=n.n(o),c=n(127),d=n.n(c),l=n(279),p=n.n(l),m=n(133),f=n.n(m),h=n(407),g=n.n(h),y=n(322),v=n.n(y),b=n(411),w=n.n(b),E=n(308),x=n.n(E),j=n(359),k=n(353),q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.data;return i.createElement("div",{className:t.root},i.createElement(f.a,null),i.createElement(g.a,null,i.createElement(v.a,null,i.createElement(p.a,{variant:"h6",color:"inherit"},"スタジアムと人口"))),i.createElement("div",{className:t.content},["J1","J2","J3","JFL","地域","その他"].map(function(e){return i.createElement(x.a,{key:e,className:t.paper},i.createElement(p.a,{className:t.paperTitle,variant:"h5",gutterBottom:!0},e,"のスタジアム"),i.createElement(w.a,{container:!0,className:t.container,spacing:0},n.allVenuesJson.edges.filter(function(t){return t.node.summary.category.includes(e)}).sort(function(e,t){return R(t.node.summary)-R(e.node.summary)}).map(function(e,n){return i.createElement(w.a,{key:n,item:!0,xs:6,sm:4,md:2,lg:2,className:t.edge},i.createElement(j.a,{disableHeight:!0},function(t){var n=t.width;return i.createElement(k.a,{width:n,item:e.node.topojson.objects.buffers.geometries})}),i.createElement("div",null,i.createElement(p.a,{className:t.label,variant:"caption"},i.createElement(u.Link,{to:"/"+e.node.summary.slug},e.node.summary.name))))})))})))},t}(i.Component);t.default=s()(function(e){var t;return d()({root:{flex:1},content:(t={paddingTop:64,paddingRight:2*e.spacing.unit,paddingLeft:2*e.spacing.unit,"@media (max-width: 599px)":{paddingTop:56}},t[e.breakpoints.down("xs")]={paddingRight:0,paddingLeft:0},t),container:{padding:e.spacing.unit},paper:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},paperTitle:{textAlign:"center"},edge:{padding:e.spacing.unit},label:{display:"flex",justifyContent:"center"}})})(q);var M="213718495";function R(e){var t;!function(e){e[e.radius1000=100]="radius1000",e[e.radius3000=33]="radius3000",e[e.radius5000=10]="radius5000",e[e.radius10000=1]="radius10000"}(t||(t={}));return["radius1000","radius3000","radius5000","radius10000"].reduce(function(n,a,r,i){return 0===r?n+e[a]*t[a]:n+(e[a]-e[i[r-1]])*t[a]},0)}},277:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(1),u=n.n(i),o=n(268),s=n.n(o);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(285),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var l=n(55);n.d(t,"parsePath",function(){return l.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},285:function(e,t,n){var a;e.exports=(a=n(299))&&a.default||a},293:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a,r=n(277),i={tableState:{ascSort:!1,sortKey:3,filterRule:[]},mapState:{popVisibility:!0,bufferVisibility:!0,zoomLevel:3,terrain:!1}},u=function(e,t){Object(r.navigate)(e,{state:t})};!function(e){e[e.radius1000=1e3]="radius1000",e[e.radius3000=3e3]="radius3000",e[e.radius5000=5e3]="radius5000",e[e.radius10000=1e4]="radius10000"}(a||(a={}));var o,s=[a.radius1000,a.radius3000,a.radius5000,a.radius10000];!function(e){e[e.north=0]="north",e[e.northeast=1]="northeast",e[e.east=2]="east",e[e.southeast=3]="southeast",e[e.south=4]="south",e[e.southwest=5]="southwest",e[e.west=6]="west",e[e.northwest=7]="northwest"}(o||(o={}));var c=["north","northeast","east","southeast","south","southwest","west","northwest"]},299:function(e,t,n){"use strict";n.r(t);n(53);var a=n(0),r=n.n(a),i=n(1),u=n.n(i),o=n(84),s=n(4),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c},304:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"c",function(){return o});var a=n(0),r=n(324),i=n(413),u=Object(r.c)(i.a).domain([1250,0]),o=Object(r.b)().domain([0,1e3]).range([0,8]).exponent(.5);t.b=function(e){var t=e.feature,n=e.projection,r=t.properties.val,i=n(t.geometry.coordinates),s=Math.abs(o(r)*Math.min(Math.max(1,n.scale()/125e3),2.5));return a.createElement("rect",{fill:u(r),fillOpacity:.6,x:i[0]-s/2,y:i[1]-s/2,width:s,height:s,style:{mixBlendMode:"multiply"}})}},353:function(e,t,n){"use strict";n(132),n(82),n(406);var a=n(0),r=n(324),i=n(412),u=n(304),o=n(293),s=u.a.copy();s.domain([].concat(u.a.domain()).map(function(e){return 8*e}));var c=Object(r.a)().domain([250,0]).range([1,0]);t.a=function(e){var t=e.width,n=e.item,r=t||10;return a.createElement("svg",{width:r,height:r},n.map(function(e,t,n){return a.createElement("g",{key:t,transform:"translate("+r/2+", "+r/2+")"},o.b.map(function(u){var d,l,p=function(e,t){var n=o.e.indexOf(t);return 0===n?8*e/(Math.pow(o.e[n]/1e3,2)*Math.PI):8*e/(Math.pow(o.e[n]/1e3,2)*Math.PI-Math.pow(o.e[n-1]/1e3,2)*Math.PI)}(0===t?e.properties[u]:e.properties[u]-n[t-1].properties[u],e.properties.radius),m=(d=o.a[u],l=2*Math.PI/(Object.keys(o.a).length/2),{startAngle:d*l-l/2,endAngle:d*l+l/2}),f=m.startAngle,h=m.endAngle,g=Object(i.a)()({startAngle:f,endAngle:h,innerRadius:(r-8)*(t+1)/10+2,outerRadius:(r-8)*(t+2)/10,padAngle:.05});return a.createElement("g",{key:u},a.createElement("path",{key:u,d:g||void 0,fill:s(p),fillOpacity:c(p)}))}))}))}}}]);
//# sourceMappingURL=component---src-pages-pies-tsx-37721573a4157715d35e.js.map