!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n={},r={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire4c75=o),o.register("7M9cu",(function(t,n){var r=o("gK76q"),i=o("dCfNN"),a=document.querySelector("iframe"),u=new(0,r.default)(a);u.getVideoTitle().then((function(e){console.log("title:",e)})),u.on("timeupdate",e(i)((function(e){localStorage.setItem("videoplayer-current-time","".concat(e.seconds)),console.log(localStorage)}),1e3));var c=localStorage.getItem("videoplayer-current-time");c&&u.setCurrentTime(c)})),o.register("gK76q",(function(n,r){var i,a,u,c;i=n.exports,a="default",u=function(){return D},Object.defineProperty(i,a,{get:u,set:c,enumerable:!0,configurable:!0});var l=o("l5bVx");
/*! @vimeo/player v2.17.1 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=void 0!==t&&"[object global]"==={}.toString.call(t);function h(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function v(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function m(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function p(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function g(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(m(r))return"https://vimeo.com/".concat(r);if(p(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var w=void 0!==Array.prototype.indexOf,b="undefined"!=typeof window&&void 0!==window.postMessage;if(!(d||w&&b))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(t){if(!t.WeakMap){var n=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),o=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};t.WeakMap=function(){function t(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(o(this,"_id",a("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(t,r){if(!i(t)||!n.call(t,"_id"))throw new TypeError(r+" method called on incompatible receiver "+(void 0===t?"undefined":e(l)(t)))}function a(e){return e+"_"+u()+"."+u()}function u(){return Math.random().toString().substring(2)}return o(t.prototype,"delete",(function(e){if(r(this,"delete"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),o(t.prototype,"get",(function(e){if(r(this,"get"),i(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),o(t.prototype,"has",(function(e){if(r(this,"has"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),o(t.prototype,"set",(function(e,t){if(r(this,"set"),!i(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?(n[1]=t,this):(o(e,this._id,[e,t]),this)})),o(t,"_polyfill",!0),t}()}function i(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:k);var E=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(t){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var n,r,o;o=function(){var t,n,r,o=Object.prototype.toString,i="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function a(e,t){r.add(e,t),n||(n=i(r.drain))}function u(t){var n,r=void 0===t?"undefined":e(l)(t);return null==t||"object"!=r&&"function"!=r||(n=t.then),"function"==typeof n&&n}function c(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function f(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?a((function(){var r=new v(n);try{t.call(e,(function(){f.apply(r,arguments)}),(function(){d.apply(r,arguments)}))}catch(e){d.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(c,n))}catch(e){d.call(new v(n),e)}}}function d(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(c,t))}function h(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function v(e){this.def=e,this.triggered=!1}function m(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new m(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&a(c,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){f.call(t,e)}),(function(e){d.call(t,e)}))}catch(e){d.call(t,e)}}r=function(){var e,t,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(n,i){r=new o(n,i),t?t.next=r:e=r,t=r,r=void 0},drain:function(){var r=e;for(e=t=n=void 0;r;)r.fn.call(r.self),r=r.next}}}();var g=t({},"constructor",p,!1);return p.prototype=g,t(g,"__NPO__",0,!1),t(p,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),t(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),t(p,"all",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;h(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),t(p,"race",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");h(t,e,(function(e,t){n(t)}),r)}))})),p},(r=k)[n="Promise"]=r[n]||o(),t.exports&&(t.exports=r[n])})),T=new WeakMap;function x(e,t,n){var r=T.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),T.set(e.element,r)}function M(e,t){return(T.get(e.element)||{})[t]||[]}function N(e,t,n){var r=T.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],T.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),T.set(e.element,r),r[t]&&0===r[t].length}function P(e,t){var n=T.get(e);T.set(t,n),T.delete(e)}function _(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function j(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function F(e,t){var n,r=[];if((t=_(t)).event){if("error"===t.event)M(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),N(e,t.data.method,n)}));r=M(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=M(e,t);if(n.length<1)return!1;var r=n.shift();return N(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var C=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return C.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function O(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!p(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return O(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}var A,V,I,R=new WeakMap,W=new WeakMap,L={},z=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!v(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!p(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(R.has(t))return R.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new E((function(e,o){if(n._onMessage=function(t){if(p(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=_(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();F(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=S(t,r);q(y(i),i,t).then((function(e){var r=O(e,t);return n.element=r,n._originalElement=t,P(t,r),R.set(n.element,n),e})).catch(o)}}));if(W.set(this,i),R.set(this.element,this),"IFRAME"===this.element.nodeName&&j(this,"ping"),L.isEnabled){var a=function(){return L.exit()};this.fullscreenchangeHandler=function(){L.isFullscreen?x(n,"event:exitFullscreen",a):N(n,"event:exitFullscreen",a),n.ready().then((function(){j(n,"fullscreenchange",L.isFullscreen)}))},L.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,r;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new E((function(r,o){return t.ready().then((function(){x(t,e,{resolve:r,reject:o}),j(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new E((function(n,r){return e=h(e,"get"),t.ready().then((function(){x(t,e,{resolve:n,reject:r}),j(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new E((function(r,o){if(e=h(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){x(n,e,{resolve:r,reject:o}),j(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===M(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),x(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");N(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=W.get(this)||new E((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return E.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return L.isEnabled?L.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return L.isEnabled?L.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return L.isEnabled?E.resolve(L.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new E((function(t){if(W.delete(e),R.delete(e.element),e._originalElement&&(R.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),L.isEnabled&&L.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&f(t.prototype,n),r&&f(t,r),e}();d||(A=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),V={fullscreenchange:A.fullscreenchange,fullscreenerror:A.fullscreenerror},I={request:function(e){return new Promise((function(t,n){var r=function e(){I.off("fullscreenchange",e),t()};I.on("fullscreenchange",r);var o=(e=e||document.documentElement)[A.requestFullscreen]();o instanceof Promise&&o.then(r).catch(n)}))},exit:function(){return new Promise((function(e,t){if(I.isFullscreen){var n=function t(){I.off("fullscreenchange",t),e()};I.on("fullscreenchange",n);var r=document[A.exitFullscreen]();r instanceof Promise&&r.then(n).catch(t)}else e()}))},on:function(e,t){var n=V[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=V[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(I,{isFullscreen:{get:function(){return Boolean(document[A.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[A.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[A.fullscreenEnabled])}}}),L=I,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=S(e);q(y(t),t,e).then((function(t){return O(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(p(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(p(t.origin)){var n=_(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;g(i.src)&&a&&new z(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}());var D=z})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("dCfNN",(function(n,r){var i=o("l5bVx"),a="Expected a function",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,v=d||h||Function("return this")(),m=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return v.Date.now()};function w(e,t,n){var r,o,i,u,c,l,s=0,f=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var n=r,i=o;return r=o=void 0,s=t,u=e.apply(i,n)}function m(e){return s=e,c=setTimeout(E,t),f?v(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=i}function E(){var e=y();if(w(e))return T(e);c=setTimeout(E,function(e){var n=t-(e-l);return d?g(n,i-(e-s)):n}(e))}function T(e){return c=void 0,h&&r?v(e):(r=o=void 0,u)}function x(){var e=y(),n=w(e);if(r=arguments,o=this,l=e,n){if(void 0===c)return m(l);if(d)return c=setTimeout(E,t),v(l)}return void 0===c&&(c=setTimeout(E,t)),u}return t=k(t)||0,b(n)&&(f=!!n.leading,i=(d="maxWait"in n)?p(k(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),x.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=l=o=c=void 0},x.flush=function(){return void 0===c?u:T(y())},x}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function k(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=l.test(t);return r||s.test(t)?f(t.slice(2),r?2:8):c.test(t)?NaN:+t}n.exports=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),w(e,t,{leading:r,maxWait:t,trailing:o})}})),o("7M9cu")}();
//# sourceMappingURL=02-video.f5104425.js.map
