(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,t,r){"use strict";var a=r(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var n=a(r(198)),o=a(r(53)),i=a(r(7)),s=a(r(57)),l=a(r(54)),f=a(r(4)),d=a(r(0)),c=r(25),u=r(167);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/gatsby-stadiums-population/"+e)}var g={activeClassName:f.default.string,activeStyle:f.default.object},h=function(e){function t(t){var r;r=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(r)),"defaultGetProps",function(e){return e.isCurrent?{className:[r.props.className,r.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},r.props.style,r.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),r.state={IOSupported:a},r.handleRef=r.handleRef.bind((0,s.default)((0,s.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,u.parsePath)(this.props.to).pathname)},r.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,u.parsePath)(this.props.to).pathname)},r.handleRef=function(e){var t,r,a,n=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,r=function(){___loader.enqueue((0,u.parsePath)(n.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),r())})})).observe(t))},r.render=function(){var e=this,t=this.props,r=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,l=t.onMouseEnter,f=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),g=t.replace,h=(0,n.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=p(r);return d.default.createElement(c.Link,(0,o.default)({to:m,state:f,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,u.parsePath)(r).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(r,{state:f,replace:g})),!0}},h))},t}(d.default.Component);h.propTypes=(0,o.default)({},g,{innerRef:f.default.func,onClick:f.default.func,to:f.default.string.isRequired,replace:f.default.bool});var m=h;t.default=m;var b=function(e,t){window.___navigate(p(e),t)};t.navigate=b;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},197:function(e,t,r){"use strict";var a=r(0),n=r(67),o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i=Object(n.a)(function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),s=r(60),l=r.n(s),f=r(9),d=r(18),c=r(15),u=i,p=function(e){return"theme"!==e&&"innerRef"!==e},g=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?u:p};t.a=function e(t,r){var n,o,i;void 0!==r&&(n=r.label,i=r.target,o=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var s=t.__emotion_real===t,u=s&&t.__emotion_base||t;"function"!=typeof o&&s&&(o=t.__emotion_forwardProp);var p=o||g(u),h=!p("as");return function(){var m=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&b.push("label:"+n+";"),null==m[0]||void 0===m[0].raw)b.push.apply(b,m);else{b.push(m[0][0]);for(var v=m.length,y=1;y<v;y++)b.push(m[y],m[0][y])}var w=Object(f.e)(function(e,t,r){return Object(a.createElement)(f.b.Consumer,null,function(n){var s=h&&e.as||u,l="",f=[],m=e;if(null==e.theme){for(var v in m={},e)m[v]=e[v];m.theme=n}"string"==typeof e.className&&(l+=Object(d.a)(t.registered,f,e.className));var y=Object(c.a)(b.concat(f),t.registered,m);Object(d.b)(t,y,"string"==typeof s),l+=t.key+"-"+y.name,void 0!==i&&(l+=" "+i);var w=h&&void 0===o?g(s):p,k={};for(var _ in e)h&&"as"===_||w(_)&&(k[_]=e[_]);return k.className=l,k.ref=r||e.innerRef,Object(a.createElement)(s,k)})});return w.displayName=void 0!==n?n:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=u,w.__emotion_styles=b,w.__emotion_forwardProp=o,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,a){return e(t,void 0!==a?l()({},r||{},a):r).apply(void 0,b)},w}}},198:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}},574:function(e,t,r){},580:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",function(){return I});function n(e){return Math.round(255*e)}function o(e,t,r){return n(e)+","+n(t)+","+n(r)}function i(e,t,r,a){if(void 0===a&&(a=o),0===t)return a(r,r,r);var n=e%360/60,i=(1-Math.abs(2*r-1))*t,s=i*(1-Math.abs(n%2-1)),l=0,f=0,d=0;n>=0&&n<1?(l=i,f=s):n>=1&&n<2?(l=s,f=i):n>=2&&n<3?(f=i,d=s):n>=3&&n<4?(f=s,d=i):n>=4&&n<5?(l=s,d=i):n>=5&&n<6&&(l=i,d=s);var c=r-i/2;return a(l+c,f+c,d+c)}var s={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var l=/^#[a-fA-F0-9]{6}$/,f=/^#[a-fA-F0-9]{8}$/,d=/^#[a-fA-F0-9]{3}$/,c=/^#[a-fA-F0-9]{4}$/,u=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,p=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,g=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,h=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;function m(e){if("string"!=typeof e)throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return s[t]?"#"+s[t]:e}(e);if(t.match(l))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(f)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(d))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(c)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=u.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=p.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var m=g.exec(t);if(m){var b="rgb("+i(parseInt(""+m[1],10),parseInt(""+m[2],10)/100,parseInt(""+m[3],10)/100)+")",v=u.exec(b);if(!v)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+b+".");return{red:parseInt(""+v[1],10),green:parseInt(""+v[2],10),blue:parseInt(""+v[3],10)}}var y=h.exec(t);if(y){var w="rgb("+i(parseInt(""+y[1],10),parseInt(""+y[2],10)/100,parseInt(""+y[3],10)/100)+")",k=u.exec(w);if(!k)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+w+".");return{red:parseInt(""+k[1],10),green:parseInt(""+k[2],10),blue:parseInt(""+k[3],10),alpha:parseFloat(""+y[4])}}throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")}var b=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function v(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function y(e,t,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r)return b("#"+v(e)+v(t)+v(r));if("object"==typeof e&&void 0===t&&void 0===r)return b("#"+v(e.red)+v(e.green)+v(e.blue));throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")}function w(e,t,r,a){if("string"==typeof e&&"number"==typeof t){var n=m(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof r&&"number"==typeof a)return a>=1?y(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if("object"==typeof e&&void 0===t&&void 0===r&&void 0===a)return e.alpha>=1?y(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")}function k(e){return function e(t,r,a){return function(){var n=a.concat(Array.prototype.slice.call(arguments));return n.length>=r?t.apply(this,n):e(t,r,n)}}(e,e.length,[])}function _(e,t,r){return Math.max(e,Math.min(t,r))}function x(e,t){var r=m(t);return w(a({},r,{alpha:_(0,1,(100*("number"==typeof r.alpha?r.alpha:1)-100*parseFloat(e))/100)}))}var I=k(x)}}]);
//# sourceMappingURL=9-4ef6e705a4751319ee01.js.map