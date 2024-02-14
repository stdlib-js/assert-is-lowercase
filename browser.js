// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+x(t):x(t)+e}var E=String.fromCharCode,S=isNaN,V=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _(e){var r,i,t,n,o,p,l,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,i,t,a;for(i=[],a=0,t=T.exec(e);t;)(r=e.slice(a,T.lastIndex-t[0].length)).length&&i.push(r),i.push(F(t)),a=T.lastIndex,t=T.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function C(e){return"string"==typeof e}function R(e){var r,i;if(!C(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return _.apply(null,r)}var A=Object.prototype,j=A.toString,Z=A.__defineGetter__,O=A.__defineSetter__,W=A.__lookupGetter__,L=A.__lookupSetter__,P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===j.call(i))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(W.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=A,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Z&&Z.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};function G(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function U(e){return"string"==typeof e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return N&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X()?function(e){var r,i,t,a,n;if(null==e)return M.call(e);i=e[B],n=B,r=null!=(a=e)&&z.call(a,n);try{e[B]=void 0}catch(r){return M.call(e)}return t=M.call(e),r?e[B]=i:delete e[B],t}:function(e){return M.call(e)},H=String.prototype.valueOf,J=X();function K(e){return"object"==typeof e&&(e instanceof String||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function Q(e){return U(e)||K(e)}function Y(e){return"number"==typeof e}function ee(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function re(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ee(a):ee(a)+e,t&&(e="-"+e)),e}G(Q,"isPrimitive",U),G(Q,"isObject",K);var ie=String.prototype.toLowerCase,te=String.prototype.toUpperCase;function ae(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Y(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=re(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=re(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===te.call(e.specifier)?te.call(i):ie.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ne(e){return"string"==typeof e}var oe=Math.abs,se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase,pe=String.prototype.replace,le=/e\+(\d)$/,ue=/e-(\d)$/,fe=/^(\d+)$/,ge=/^(\d+)e/,de=/\.0$/,he=/\.0*e/,we=/(\..*[^0])0*e/;function be(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Y(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":oe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=pe.call(i,we,"$1e"),i=pe.call(i,he,"e"),i=pe.call(i,de,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=pe.call(i,le,"e+0$1"),i=pe.call(i,ue,"e-0$1"),e.alternate&&(i=pe.call(i,fe,"$1."),i=pe.call(i,ge,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)}function ve(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ye(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ve(t):ve(t)+e}var me=String.fromCharCode,xe=isNaN,ke=Array.isArray;function Ee(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Se(e){var r,i,t,a,n,o,s,c,p;if(!ke(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ne(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Ee(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,xe(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,xe(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ae(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!xe(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=xe(n)?String(t.arg):me(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=be(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=re(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ye(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _e(e){var r,i,t,a;for(i=[],a=0,t=Ve.exec(e);t;)(r=e.slice(a,Ve.lastIndex-t[0].length)).length&&i.push(r),i.push($e(t)),a=Ve.lastIndex,t=Ve.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function Te(e){return"string"==typeof e}function Fe(e){var r,i;if(!Te(e))throw new TypeError(Fe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_e(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Se.apply(null,r)}function Ie(e){if(!U(e))throw new TypeError(Fe("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}function Ce(e){return"number"==typeof e}function Re(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ae(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Re(a):Re(a)+e,t&&(e="-"+e)),e}var je=String.prototype.toLowerCase,Ze=String.prototype.toUpperCase;function Oe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ce(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ze.call(e.specifier)?Ze.call(i):je.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function We(e){return"string"==typeof e}var Le=Math.abs,Pe=String.prototype.toLowerCase,Ge=String.prototype.toUpperCase,Ue=String.prototype.replace,Ne=/e\+(\d)$/,Xe=/e-(\d)$/,Me=/^(\d+)$/,ze=/^(\d+)e/,qe=/\.0$/,Be=/\.0*e/,De=/(\..*[^0])0*e/;function He(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ce(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Le(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ue.call(i,De,"$1e"),i=Ue.call(i,Be,"e"),i=Ue.call(i,qe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ue.call(i,Ne,"e+0$1"),i=Ue.call(i,Xe,"e-0$1"),e.alternate&&(i=Ue.call(i,Me,"$1."),i=Ue.call(i,ze,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ge.call(e.specifier)?Ge.call(i):Pe.call(i)}function Je(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ke(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Je(t):Je(t)+e}var Qe=String.fromCharCode,Ye=isNaN,er=Array.isArray;function rr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ir(e){var r,i,t,a,n,o,s,c,p;if(!er(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(We(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=rr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ye(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ye(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Oe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ye(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ye(n)?String(t.arg):Qe(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=He(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ke(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var tr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ar(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function nr(e){var r,i,t,a;for(i=[],a=0,t=tr.exec(e);t;)(r=e.slice(a,tr.lastIndex-t[0].length)).length&&i.push(r),i.push(ar(t)),a=tr.lastIndex,t=tr.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function or(e){return"string"==typeof e}function sr(e){var r,i;if(!or(e))throw new TypeError(sr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[nr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return ir.apply(null,r)}function cr(e){if(!U(e))throw new TypeError(sr("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}return function(e){return U(e)&&e===Ie(e)&&e!==cr(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isLowercase=r();
//# sourceMappingURL=browser.js.map
