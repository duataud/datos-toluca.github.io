(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{1906:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=r(t),a=r(n);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function c(e,t){if(null==e)return{};var n,r,o=s(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){return d(e)||m(e,t)||p(e,t)||v()}function d(e){if(Array.isArray(e))return e}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}function p(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],b=function(e,t){var r=e.animationData,i=e.loop,l=e.autoplay,s=e.initialSegment,d=e.onComplete,m=e.onLoopComplete,p=e.onEnterFrame,y=e.onSegmentStart,v=e.onConfigReady,b=e.onDataReady,S=e.onDataFailed,h=e.onLoadedImages,O=e.onDOMLoaded,A=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var w=c(e,g),D=f(n.useState(!1),2),j=D[0],E=D[1],P=n.useRef(),R=n.useRef(null),L=function(){var e;null===(e=P.current)||void 0===e||e.play()},C=function(){var e;null===(e=P.current)||void 0===e||e.stop()},T=function(){var e;null===(e=P.current)||void 0===e||e.pause()},x=function(e){var t;null===(t=P.current)||void 0===t||t.setSpeed(e)},I=function(e,t){var n;null===(n=P.current)||void 0===n||n.goToAndPlay(e,t)},F=function(e,t){var n;null===(n=P.current)||void 0===n||n.goToAndStop(e,t)},_=function(e){var t;null===(t=P.current)||void 0===t||t.setDirection(e)},k=function(e,t){var n;null===(n=P.current)||void 0===n||n.playSegments(e,t)},N=function(e){var t;null===(t=P.current)||void 0===t||t.setSubframe(e)},M=function(e){var t;return null===(t=P.current)||void 0===t?void 0:t.getDuration(e)},V=function(){var e;null===(e=P.current)||void 0===e||e.destroy(),P.current=void 0},B=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(R.current){null===(t=P.current)||void 0===t||t.destroy();var r=u(u(u({},e),n),{},{container:R.current});return P.current=o.default.loadAnimation(r),E(!!P.current),function(){var e;null===(e=P.current)||void 0===e||e.destroy(),P.current=void 0}}};return n.useEffect((function(){var e=B();return function(){return null===e||void 0===e?void 0:e()}}),[r,i]),n.useEffect((function(){P.current&&(P.current.autoplay=!!l)}),[l]),n.useEffect((function(){P.current&&(s?Array.isArray(s)&&s.length&&((P.current.currentRawFrame<s[0]||P.current.currentRawFrame>s[1])&&(P.current.currentRawFrame=s[0]),P.current.setSegment(s[0],s[1])):P.current.resetSegments(!0))}),[s]),n.useEffect((function(){var e=[{name:"complete",handler:d},{name:"loopComplete",handler:m},{name:"enterFrame",handler:p},{name:"segmentStart",handler:y},{name:"config_ready",handler:v},{name:"data_ready",handler:b},{name:"data_failed",handler:S},{name:"loaded_images",handler:h},{name:"DOMLoaded",handler:O},{name:"destroy",handler:A}].filter((function(e){return null!=e.handler}));if(e.length){var t=e.map((function(e){var t;return null===(t=P.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=P.current)||void 0===t||t.removeEventListener(e.name,e.handler)}}));return function(){t.forEach((function(e){return e()}))}}}),[d,m,p,y,v,b,S,h,O,A]),{View:a.default.createElement("div",u({style:t,ref:R},w)),play:L,stop:C,pause:T,setSpeed:x,goToAndStop:F,goToAndPlay:I,setDirection:_,playSegments:k,setSubframe:N,getDuration:M,destroy:V,animationContainerRef:R,animationLoaded:j,animationItem:P.current}};function S(e){var t=e.getBoundingClientRect(),n=t.top,r=t.height;return(window.innerHeight-n)/(window.innerHeight+r)}function h(e,t,n){var r=e.getBoundingClientRect(),o=r.top;return{x:(t-r.left)/r.width,y:(n-o)/r.height}}var O=function(e){var t=e.wrapperRef,r=e.animationItem,o=e.mode,a=e.actions;n.useEffect((function(){var e=t.current;if(e&&r&&a.length){r.stop();var n=function(){var t=null,n=function(){var n=S(e),o=a.find((function(e){var t=e.visibility;return t&&n>=t[0]&&n<=t[1]}));if(o){if("seek"===o.type&&o.visibility&&2===o.frames.length){var i=o.frames[0]+Math.ceil((n-o.visibility[0])/(o.visibility[1]-o.visibility[0])*o.frames[1]);r.goToAndStop(i-r.firstFrame-1,!0)}"loop"===o.type&&(null===t||t!==o.frames||r.isPaused)&&(r.playSegments(o.frames,!0),t=o.frames),"play"===o.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===o.type&&r.goToAndStop(o.frames[0]-r.firstFrame-1,!0)}};return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}},i=function(){var t=function(t,n){var o=t,i=n;if(-1!==o&&-1!==i){var u=h(e,o,i);o=u.x,i=u.y}var l=a.find((function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?o>=t.x[0]&&o<=t.x[1]&&i>=t.y[0]&&i<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&o===t.x&&i===t.y}));if(l){if("seek"===l.type&&l.position&&Array.isArray(l.position.x)&&Array.isArray(l.position.y)&&2===l.frames.length){var s=(o-l.position.x[0])/(l.position.x[1]-l.position.x[0]),c=(i-l.position.y[0])/(l.position.y[1]-l.position.y[0]);r.playSegments(l.frames,!0),r.goToAndStop(Math.ceil((s+c)/2*(l.frames[1]-l.frames[0])),!0)}"loop"===l.type&&r.playSegments(l.frames,!0),"play"===l.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(l.frames)),"stop"===l.type&&r.goToAndStop(l.frames[0],!0)}},n=function(e){t(e.clientX,e.clientY)},o=function(){t(-1,-1)};return e.addEventListener("mousemove",n),e.addEventListener("mouseout",o),function(){e.removeEventListener("mousemove",n),e.removeEventListener("mouseout",o)}};switch(o){case"scroll":return n();case"cursor":return i()}}}),[o,r])},A=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,o=r.animationItem,a=r.View,i=r.animationContainerRef;return O({actions:t,animationItem:o,mode:n,wrapperRef:i}),a},w=["style","interactivity"],D=function(e){var t,r,o,a=e.style,i=e.interactivity,u=c(e,w),l=b(u,a),s=l.View,f=l.play,d=l.stop,m=l.pause,p=l.setSpeed,y=l.goToAndStop,v=l.goToAndPlay,g=l.setDirection,S=l.playSegments,h=l.setSubframe,O=l.getDuration,D=l.destroy,j=l.animationContainerRef,E=l.animationLoaded,P=l.animationItem;return n.useEffect((function(){e.lottieRef&&(e.lottieRef.current={play:f,stop:d,pause:m,setSpeed:p,goToAndPlay:v,goToAndStop:y,setDirection:g,playSegments:S,setSubframe:h,getDuration:O,destroy:D,animationContainerRef:j,animationLoaded:E,animationItem:P})}),[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),A({lottieObj:{View:s,play:f,stop:d,pause:m,setSpeed:p,goToAndStop:y,goToAndPlay:v,setDirection:g,playSegments:S,setSubframe:h,getDuration:O,destroy:D,animationContainerRef:j,animationLoaded:E,animationItem:P},actions:null!==(r=null===i||void 0===i?void 0:i.actions)&&void 0!==r?r:[],mode:null!==(o=null===i||void 0===i?void 0:i.mode)&&void 0!==o?o:"scroll"})};Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return o.default}}),e.default=D,e.useLottie=b,e.useLottieInteractivity=A,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5269),n(959))}}]);