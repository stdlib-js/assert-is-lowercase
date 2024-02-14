// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,a,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(a=(-s).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=s.toString(r),s||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":p(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=f.call(a,y,"$1e"),a=f.call(a,b,"e"),a=f.call(a,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,d,"e-0$1"),e.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,w,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===u.call(e.specifier)?u.call(a):l.call(a)}function k(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var a=r-e.length;return a<0?e:e=i?e+k(a):k(a)+e}var E=String.fromCharCode,S=isNaN,V=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _(e){var r,i,a,n,o,p,l,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(a=e[u]))p+=a;else{if(r=void 0!==a.precision,!(a=$(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(l=a.mapping),i=a.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[l],10),l+=1,S(a.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[l],10),l+=1,S(a.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[l],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!S(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=S(o)?String(a.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=m(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=x(a.arg,a.width,a.padRight)),p+=a.arg||"",l+=1}return p}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,a,t;for(i=[],t=0,a=F.exec(e);a;)(r=e.slice(t,F.lastIndex-a[0].length)).length&&i.push(r),i.push(I(a)),t=F.lastIndex,a=F.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function C(e){return"string"==typeof e}function R(e){var r,i;if(!C(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return _.apply(null,r)}var A=Object.prototype,j=A.toString,Z=A.__defineGetter__,O=A.__defineSetter__,W=A.__lookupGetter__,L=A.__lookupSetter__;var P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var a,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===j.call(i))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(W.call(e,r)||L.call(e,r)?(a=e.__proto__,e.__proto__=A,delete e[r],e[r]=i.value,e.__proto__=a):e[r]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Z&&Z.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};function G(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function U(e){return"string"==typeof e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return N&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X()?function(e){var r,i,a,t,n;if(null==e)return M.call(e);i=e[B],n=B,r=null!=(t=e)&&z.call(t,n);try{e[B]=void 0}catch(r){return M.call(e)}return a=M.call(e),r?e[B]=i:delete e[B],a}:function(e){return M.call(e)},H=String.prototype.valueOf;var J=X();function K(e){return"object"==typeof e&&(e instanceof String||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function Q(e){return U(e)||K(e)}function Y(e){return"number"==typeof e}function ee(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function re(e,r,i){var a=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+ee(t):ee(t)+e,a&&(e="-"+e)),e}G(Q,"isPrimitive",U),G(Q,"isObject",K);var ie=String.prototype.toLowerCase,ae=String.prototype.toUpperCase;function te(e){var r,i,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,a=parseInt(i,10),!isFinite(a)){if(!Y(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(i=(-a).toString(r),e.precision&&(i=re(i,e.precision,e.padRight)),i="-"+i):(i=a.toString(r),a||e.precision?e.precision&&(i=re(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ae.call(e.specifier)?ae.call(i):ie.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ne(e){return"string"==typeof e}var oe=Math.abs,se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase,pe=String.prototype.replace,le=/e\+(\d)$/,ue=/e-(\d)$/,fe=/^(\d+)$/,ge=/^(\d+)e/,de=/\.0$/,he=/\.0*e/,we=/(\..*[^0])0*e/;function ve(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!Y(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":oe(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=pe.call(i,we,"$1e"),i=pe.call(i,he,"e"),i=pe.call(i,de,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=pe.call(i,le,"e+0$1"),i=pe.call(i,ue,"e-0$1"),e.alternate&&(i=pe.call(i,fe,"$1."),i=pe.call(i,ge,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)}function be(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ye(e,r,i){var a=r-e.length;return a<0?e:e=i?e+be(a):be(a)+e}var me=String.fromCharCode,ke=isNaN,xe=Array.isArray;function Ee(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Se(e){var r,i,a,t,n,o,s,c,p;if(!xe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ne(a=e[c]))o+=a;else{if(r=void 0!==a.precision,!(a=Ee(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),i=a.flags,p=0;p<i.length;p++)switch(t=i.charAt(p)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===a.width){if(a.width=parseInt(arguments[s],10),s+=1,ke(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[s],10),s+=1,ke(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=te(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!ke(a.arg)){if((n=parseInt(a.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=ke(n)?String(a.arg):me(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=ve(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=re(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=ye(a.arg,a.width,a.padRight)),o+=a.arg||"",s+=1}return o}var Ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _e(e){var r,i,a,t;for(i=[],t=0,a=Ve.exec(e);a;)(r=e.slice(t,Ve.lastIndex-a[0].length)).length&&i.push(r),i.push($e(a)),t=Ve.lastIndex,a=Ve.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function Fe(e){return"string"==typeof e}function Ie(e){var r,i;if(!Fe(e))throw new TypeError(Ie("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_e(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Se.apply(null,r)}function Te(e){if(!U(e))throw new TypeError(Ie("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}function Ce(e){return"number"==typeof e}function Re(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ae(e,r,i){var a=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+Re(t):Re(t)+e,a&&(e="-"+e)),e}var je=String.prototype.toLowerCase,Ze=String.prototype.toUpperCase;function Oe(e){var r,i,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,a=parseInt(i,10),!isFinite(a)){if(!Ce(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(i=(-a).toString(r),e.precision&&(i=Ae(i,e.precision,e.padRight)),i="-"+i):(i=a.toString(r),a||e.precision?e.precision&&(i=Ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ze.call(e.specifier)?Ze.call(i):je.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function We(e){return"string"==typeof e}var Le=Math.abs,Pe=String.prototype.toLowerCase,Ge=String.prototype.toUpperCase,Ue=String.prototype.replace,Ne=/e\+(\d)$/,Xe=/e-(\d)$/,Me=/^(\d+)$/,ze=/^(\d+)e/,qe=/\.0$/,Be=/\.0*e/,De=/(\..*[^0])0*e/;function He(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!Ce(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":Le(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=Ue.call(i,De,"$1e"),i=Ue.call(i,Be,"e"),i=Ue.call(i,qe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ue.call(i,Ne,"e+0$1"),i=Ue.call(i,Xe,"e-0$1"),e.alternate&&(i=Ue.call(i,Me,"$1."),i=Ue.call(i,ze,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ge.call(e.specifier)?Ge.call(i):Pe.call(i)}function Je(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ke(e,r,i){var a=r-e.length;return a<0?e:e=i?e+Je(a):Je(a)+e}var Qe=String.fromCharCode,Ye=isNaN,er=Array.isArray;function rr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ir(e){var r,i,a,t,n,o,s,c,p;if(!er(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(We(a=e[c]))o+=a;else{if(r=void 0!==a.precision,!(a=rr(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),i=a.flags,p=0;p<i.length;p++)switch(t=i.charAt(p)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===a.width){if(a.width=parseInt(arguments[s],10),s+=1,Ye(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[s],10),s+=1,Ye(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=Oe(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!Ye(a.arg)){if((n=parseInt(a.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=Ye(n)?String(a.arg):Qe(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=He(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=Ae(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=Ke(a.arg,a.width,a.padRight)),o+=a.arg||"",s+=1}return o}var ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function tr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function nr(e){var r,i,a,t;for(i=[],t=0,a=ar.exec(e);a;)(r=e.slice(t,ar.lastIndex-a[0].length)).length&&i.push(r),i.push(tr(a)),t=ar.lastIndex,a=ar.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function or(e){return"string"==typeof e}function sr(e){var r,i;if(!or(e))throw new TypeError(sr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[nr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return ir.apply(null,r)}function cr(e){if(!U(e))throw new TypeError(sr("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}function pr(e){return U(e)&&e===Te(e)&&e!==cr(e)}export{pr as default};
//# sourceMappingURL=mod.js.map
