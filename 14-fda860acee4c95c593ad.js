(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{215:function(r,e){r.exports=function(r,e){if(null==r)return{};var t,o,n={},i=Object.keys(r);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}},515:function(r,e,t){"use strict";var o={meters:6371008.8,metres:6371008.8,millimeters:6371008800,millimetres:6371008800,centimeters:637100880,centimetres:637100880,kilometers:6371.0088,kilometres:6371.0088,miles:3958.761333810546,nauticalmiles:6371008.8/1852,inches:6371008.8*39.37,yards:6371008.8/1.0936,feet:20902260.511392,radians:1,degrees:6371008.8/111325};function n(r,e,t){if(!w(t=t||{}))throw new Error("options is invalid");var o=t.bbox,n=t.id;if(void 0===r)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");o&&c(o),n&&d(n);var i={type:"Feature"};return n&&(i.id=n),o&&(i.bbox=o),i.properties=e||{},i.geometry=r,i}function i(r,e,t){if(!r)throw new Error("coordinates is required");if(!Array.isArray(r))throw new Error("coordinates must be an Array");if(r.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!h(r[0])||!h(r[1]))throw new Error("coordinates must contain numbers");return n({type:"Point",coordinates:r},e,t)}function s(r,e,t){if(!r)throw new Error("coordinates is required");for(var o=0;o<r.length;o++){var i=r[o];if(i.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<i[i.length-1].length;s++){if(0===o&&0===s&&!h(i[0][0])||!h(i[0][1]))throw new Error("coordinates must contain numbers");if(i[i.length-1][s]!==i[0][s])throw new Error("First and last Position are not equivalent.")}}return n({type:"Polygon",coordinates:r},e,t)}function a(r,e){if(null==r)throw new Error("distance is required");if(e&&"string"!=typeof e)throw new Error("units must be a string");var t=o[e||"kilometers"];if(!t)throw new Error(e+" units is invalid");return r/t}function u(r){if(null==r)throw new Error("radians is required");return 180*(r%(2*Math.PI))/Math.PI}function f(r){if(null==r)throw new Error("degrees is required");return r%360*Math.PI/180}function h(r){return!isNaN(r)&&null!==r&&!Array.isArray(r)}function w(r){return!!r&&r.constructor===Object}function c(r){if(!r)throw new Error("bbox is required");if(!Array.isArray(r))throw new Error("bbox must be an Array");if(4!==r.length&&6!==r.length)throw new Error("bbox must be an Array of 4 or 6 numbers");r.forEach(function(r){if(!h(r))throw new Error("bbox must only contain numbers")})}function d(r){if(!r)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof r))throw new Error("id must be a number or a string")}var l=function(r,e,t,o){if(!w(o=o||{}))throw new Error("options is invalid");var n=o.units,s=o.properties,h=function(r){if(!r)throw new Error("coord is required");if("Feature"===r.type&&null!==r.geometry&&"Point"===r.geometry.type)return r.geometry.coordinates;if("Point"===r.type)return r.coordinates;if(Array.isArray(r)&&r.length>=2&&void 0===r[0].length&&void 0===r[1].length)return r;throw new Error("coord must be GeoJSON Point or an Array of numbers")}(r),c=f(h[0]),d=f(h[1]),l=f(t),m=a(e,n),b=Math.asin(Math.sin(d)*Math.cos(m)+Math.cos(d)*Math.sin(m)*Math.cos(l));return i([u(c+Math.atan2(Math.sin(l)*Math.sin(m)*Math.cos(d),Math.cos(m)-Math.sin(d)*Math.sin(b))),u(b)],s)};e.a=function(r,e,t){var o=(t=t||{}).steps||64,n=t.properties;if(!r)throw new Error("center is required");if(!e)throw new Error("radius is required");if("object"!=typeof t)throw new Error("options must be an object");if("number"!=typeof o)throw new Error("steps must be a number");o=o||64,n=n||r.properties||{};for(var i=[],a=0;a<o;a++)i.push(l(r,e,-360*a/o,t).geometry.coordinates);return i.push(i[0]),s([i],n)}}}]);
//# sourceMappingURL=14-fda860acee4c95c593ad.js.map