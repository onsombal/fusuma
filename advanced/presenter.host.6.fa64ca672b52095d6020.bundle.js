(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{363:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return v}),n.d(t,"b",function(){return b});var r=n(2),o=n.n(r),i=n(440),a=n(350),s=n(95);n(364),n(389);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=l(t).call(this,e),n=!o||"object"!==c(o)&&"function"!=typeof o?d(r):o,p(d(n),"changeColor",function(){n.colors=n.colors.concat(n.colors.splice(0,1)),n.setState({color:n.colors[0]})}),p(d(n),"setData",function(){window.localStorage.setItem("fusumaCanvasCoordinate",n.ref.getSaveData())}),p(d(n),"getData",function(){var e=window.localStorage.getItem("fusumaCanvasCoordinate");n.beforeData!==e&&(n.ref.loadSaveData(e,!0),n.beforeData=e)}),p(d(n),"undo",function(){n.ref.undo()}),p(d(n),"clear",function(){n.ref.clear()}),n.ref=null,n.beforeData=null,n.timerId=null,n.colors=["#444","#3498db","#ff874d","#67a2a0"],n.state={color:n.colors[0]},n}var n,r,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.props.toolbar?this.timerId=setInterval(function(){e.setData()},1e3):this.timerId=setInterval(function(){e.getData()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this,t=this.props,n=t.disabled,r=t.hideGrid,c=t.toolbar;return o.a.createElement(o.a.Fragment,null,c&&o.a.createElement("div",{className:"fusuma-canvas-toolbar"},o.a.createElement(s.b,{onClick:this.clear,size:"32"}),o.a.createElement(a.m,{onClick:this.undo}),o.a.createElement("div",{style:{background:this.state.color},onClick:this.changeColor,className:"fusuma-canvas-toolbar-color"})),o.a.createElement(i.a,{ref:function(t){return e.ref=t},className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:this.state.color,disabled:n,hideGrid:r,lazyRadius:0,brushRadius:8}))}}])&&u(n.prototype,r),m&&u(n,m),t}();function h(){return JSON.parse(window.localStorage.getItem("fusumaCanvasEvent"))}function v(e){window.addEventListener("storage",function(t){"fusumaCanvasEvent"===t.key&&e(JSON.parse(t.newValue))})}function b(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}},364:function(e,t,n){var r=n(365);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},365:function(e,t,n){},381:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a});var a=function(){function e(){var t=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"setupRecording",function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(t.handlerRecording)}),i(this,"handlerRecording",function(e){var n=[];t.stream=e,t.mediaRecorder=new MediaRecorder(e,{}),t.mediaRecorder.addEventListener("dataavailable",function(e){e.data.size>0&&n.push(e.data)}),t.mediaRecorder.addEventListener("stop",function(){t.finishedProcess=!0,t.url=URL.createObjectURL(new Blob(n,{type:"audio/webm"}))})}),i(this,"startRecording",function(){t.mediaRecorder.start(),t.finishedProcess=!1,t.url=null}),i(this,"stopRecording",function(){return new Promise(function(e){t.mediaRecorder.stop();var n=setInterval(function(){t.finishedProcess&&(clearInterval(n),e(t.url))},100)})}),i(this,"disposeRecording",function(){t.mediaRecorder.stream.getTracks().forEach(function(e){return e.stop()}),t.finishedProcess=!1,t.url=null}),!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}var t,n,a;return t=e,(n=[{key:"startCapturing",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia(t);case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e,null,[[1,7]])}),function(){var t=this,n=arguments;return new Promise(function(o,i){var a=e.apply(t,n);function s(e){r(a,o,i,s,c,"next",e)}function c(e){r(a,o,i,s,c,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"stopCapturing",value:function(e){e.srcObject.getTracks().forEach(function(e){return e.stop()}),e.srcObject=null}}])&&o(t.prototype,n),a&&o(t,a),e}()},614:function(e,t,n){var r=n(615);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},615:function(e,t,n){},643:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(601),a=n.n(i),s=n(350),c=n(95);function u(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}var t,n,r;return t=e,(n=[{key:"openView",value:function(){var e=this;return new Promise(function(t,n){"presentation"===e.apiType?(e.presentationRequest=new PresentationRequest([e.receiverQuery]),navigator.presentation.defaultRequest=e.presentationRequest,e.presentationRequest.addEventListener("connectionavailable",function(n){e.presentationConnection=n.connection,t(n.connection.id)}),e.presentationRequest.start().catch(function(e){return n(e)})):(e.windowId=window.open(e.receiverQuery,"_blank","width=800,height=600"),t())})}},{key:"changePage",value:function(e){var t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}},{key:"reconnect",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("presentation"!==this.apiType){e.next=2;break}return e.abrupt("return",this.presentationRequest.reconnect(t));case 2:return e.abrupt("return",Promise.resolve());case 3:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,s,"next",e)}function s(e){u(i,r,o,a,s,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"terminate",value:function(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}])&&l(t.prototype,n),r&&l(t,r),e}(),f=n(363);function p(e){parseInt(e%1e3/100);var t=Math.floor(e/1e3%60).toString().padStart(2,"0"),n=Math.floor(e/6e4%60).toString().padStart(2,"0"),r=Math.floor(e/36e5%24).toString().padStart(2,"0");return"".concat(r,":").concat(n,":").concat(t)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=v(t).call(this,e),n=!o||"object"!==m(o)&&"function"!=typeof o?b(r):o,w(b(n),"changeTimerState",function(e){n.setState({isStop:e})}),w(b(n),"start",function(){n.timerId=setInterval(function(){return n.update()},1e3),n.changeTimerState(!1),n.props.start()}),w(b(n),"stop",function(){clearInterval(n.timerId),n.changeTimerState(!0),n.timerId=null,n.props.stop()}),w(b(n),"reset",function(){n.timerId&&n.stop(),n.current=0,n.setState({currentTimeStr:"00:00:00"}),n.props.reset()}),w(b(n),"update",function(){n.current+=1e3,n.setState({currentTimeStr:p(n.current)})}),n.state={isStop:!0,currentTimeStr:"00:00:00"},n.current=0,n.timerId=null,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"host-timer"},o.a.createElement(s.i,{onClick:this.reset,className:this.props.disabledReset?"disabled":void 0}),this.state.isStop?o.a.createElement(s.h,{onClick:this.start,className:this.props.disabledStart?"disabled":void 0}):o.a.createElement(s.j,{onClick:this.stop,className:this.props.disabledStop?"disabled":void 0}),o.a.createElement("span",null,this.state.currentTimeStr))}}])&&h(n.prototype,r),i&&h(n,i),t}(),S=n(610);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function T(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){R(i,r,o,a,s,"next",e)}function s(e){R(i,r,o,a,s,"throw",e)}a(void 0)})}}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){var e,n,r,o,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=k(t).call(this),e=!r||"object"!==E(r)&&"function"!=typeof r?C(n):r,o=C(e),a=function(t){for(var n=0,r=0;r<e.props.items.length;r++){if(t<=e.props.items[r].time){n=r;break}}return n},(i="calcIndex")in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,e.audioRef=null,e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"getBlobDuration",value:function(){var e=T(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){t.audioRef.addEventListener("loadedmetadata",function(){if(t.audioRef.duration===1/0){t.audioRef.currentTime=Number.MAX_SAFE_INTEGER;t.audioRef.addEventListener("timeupdate",function n(){t.audioRef.currentTime=0,t.audioRef.removeEventListener("timeupdate",n),e()})}})}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=T(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.audioRef){e.next=7;break}return t=document.querySelectorAll(".ReactModalPortal section > div"),e.next=4,this.getBlobDuration();case 4:n=!1,this.audioRef.addEventListener("playing",function(){n||(r.audioRef.currentTime=0,n=!0)}),this.audioRef.addEventListener("timeupdate",function(){var e=r.calcIndex(1e3*r.audioRef.currentTime);t[e].scrollIntoView()});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=t.items,r=t.url;return o.a.createElement("div",{className:"host-timeline-container"},r&&o.a.createElement("div",{className:"host-timeline-audio"},o.a.createElement("audio",{src:r,controls:!0,ref:function(t){e.audioRef=t}})),o.a.createElement("div",{className:"host-timeline-body"},o.a.createElement(S.Timeline,null,n.map(function(e,t){var n=e.title,r=e.time,i=e.timeStr,a=e.Slide,s=e.color,c=e.Icon;return o.a.createElement(S.TimelineEvent,{key:r,title:n,createdAt:i,iconColor:s,icon:c},a&&o.a.createElement(a,null))}))))}}])&&O(n.prototype,r),i&&O(n,i),t}(),x=n(381);n(614);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function N(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){_(i,r,o,a,s,"next",e)}function s(e){_(i,r,o,a,s,"throw",e)}a(void 0)})}}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return Z}),a.a.setAppElement("#root");var q=function(e){var t=e.slideUrl,n=e.slideIndex;return o.a.createElement("iframe",{src:"".concat(t.replace(/slide=(\d?)/,"slide=".concat(n))),width:"100%",height:"100%"})},Z=function(e){function t(e){var n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=U(t).call(this,e),n=!i||"object"!==j(i)&&"function"!=typeof i?A(r):i,L(A(n),"terminate",function(){try{n.props.terminate(),n.presentationController&&n.presentationController.terminate(),n.presentationController=null}catch(e){console.error(e)}}),L(A(n),"changeCurrentSlide",function(e){if("start"===n.state.status){var t=(new Date).getTime()-n.recordedStartedTime,r=n.recordedTimeline.slice(-1)[0];n.recordedTimeline.push({slideNum:e+1,time:t,timeStr:"".concat(p(t)," (+").concat(p(t-r.time),")"),event:"changed",title:"Moved to the ".concat(e+1," slide from the ").concat(e," slide."),Slide:n.slides[e].slide,color:"#3498db",Icon:o.a.createElement(s.b,{size:"22"})})}n.props.onChangeSlideIndex(e),n.presentationController.changePage(e)}),L(A(n),"start",function(){0===n.recordedTimeline.length&&(n.recordedStartedTime=(new Date).getTime());var e=0===n.recordedTimeline.length?0:(new Date).getTime()-n.recordedStartedTime;n.recordedTimeline.push({slideNum:n.props.currentIndex+1,time:e,timeStr:p(e),event:"started",title:"Started from the ".concat(n.props.currentIndex+1," slide."),Slide:n.slides[n.props.currentIndex].slide,color:"#6fba1c",Icon:o.a.createElement(s.a,null)}),n.state.usedAudio&&(n.webrtc.startRecording(),n.audioUrl=null),n.setState({status:"start",isEmptyRecordedTimeline:!1})}),L(A(n),"stop",N(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(new Date).getTime()-n.recordedStartedTime,n.recordedTimeline.push({slideNum:n.props.currentIndex+1,time:t,timeStr:p(t),event:"stopped",title:"Stopped at the ".concat(n.props.currentIndex+1," slide."),color:"#e9546b",Icon:o.a.createElement(s.c,null)}),!n.state.usedAudio){e.next=6;break}return e.next=5,n.webrtc.stopRecording();case 5:n.audioUrl=e.sent;case 6:n.setState({status:"stop"});case 7:case"end":return e.stop()}},e)}))),L(A(n),"reset",function(){n.audioUrl=null,n.recordedTimeline=[],n.recordedStartedTime=0,n.setState({status:"prepare",isEmptyRecordedTimeline:!0})}),L(A(n),"openTimeline",function(){n.setState({isOpenTimeline:!0})}),L(A(n),"closeTimeline",function(){n.setState({isOpenTimeline:!1})}),L(A(n),"setupRecording",function(){if(!n.webrtc)try{n.webrtc=new x.a,n.webrtc.setupRecording(),n.setState({usedAudio:!0})}catch(e){alert(e)}}),L(A(n),"disposeRecording",function(){n.webrtc&&(n.webrtc.disposeRecording(),n.webrtc=null),n.setState({usedAudio:!1})}),L(A(n),"openZoomSlide",function(){n.setState({isOpenZoomSlide:!0}),Object(f.b)({status:"start"})}),L(A(n),"closeZoomSlide",function(){n.setState({isOpenZoomSlide:!1}),Object(f.b)({status:"stop"})});var a=new URL(window.location),c=a.origin,u=a.pathname;return n.slides=e.slides,n.slideUrl="".concat(c,"/").concat(u,"?sidebar=false&isLive=false#slide="),n.presentationController=new d,n.presentationApiId=null,n.recordedTimeline=[],n.recordedStartedTime=0,n.audioUrl=null,n.state={usedAudio:!1,isOpenTimeline:!1,status:"prepare",isEmptyRecordedTimeline:!0,isOpenZoomSlide:!1},document.onkeyup=function(e){"ArrowLeft"===e.key?n.changeCurrentSlide(Math.max(0,n.props.currentIndex-1)):"ArrowRight"===e.key&&n.changeCurrentSlide(Math.min(n.slides.length-1,n.props.currentIndex+1))},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){var e=N(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.presentationController.openView();case 3:this.presentationApiId=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){document.onkeyup=null,this.presentationController&&this.terminate(),this.disposeRecording()}},{key:"render",value:function(){var e=this.props.currentIndex;return o.a.createElement("div",{className:"host-container"},o.a.createElement(a.a,{isOpen:this.state.isOpenTimeline,onRequestClose:this.closeTimeline},o.a.createElement(I,{items:this.recordedTimeline,url:this.audioUrl})),o.a.createElement("div",{className:"host-left-box"},o.a.createElement("div",{className:"host-note"},this.slides&&o.a.createElement("pre",{dangerouslySetInnerHTML:{__html:this.slides[e].fusumaProps.note}}))),o.a.createElement("div",{className:"host-right-box"},o.a.createElement("div",{className:"host-slide-layer"},o.a.createElement("h2",null,"Current"),o.a.createElement(c.g,{size:28,onClick:this.openZoomSlide}),o.a.createElement(q,{slideUrl:this.slideUrl,slideIndex:e+1})),o.a.createElement(a.a,{isOpen:this.state.isOpenZoomSlide,onRequestClose:this.closeZoomSlide},this.state.isOpenZoomSlide&&o.a.createElement("div",{className:"host-slide-canvas"},o.a.createElement(f.a,{toolbar:!0,hideGrid:!0}),o.a.createElement(q,{slideUrl:this.slideUrl,slideIndex:e+1}))),o.a.createElement("div",{className:"host-slide-layer"},o.a.createElement("h2",null,"Next"),o.a.createElement(q,{slideUrl:this.slideUrl,slideIndex:e+2}))),o.a.createElement("div",{className:"host-bottom-box"},o.a.createElement(s.k,{onClick:this.terminate,className:"terminate-button"}),o.a.createElement("div",{className:"host-bottom-box-info"},o.a.createElement(g,{start:this.start,stop:this.stop,reset:this.reset,disabledStart:"stop"===this.state.status&&this.state.usedAudio&&!this.start.isEmptyRecordedTimeline,disabledStop:"stop"===this.state.status&&this.state.usedAudio&&!this.start.isEmptyRecordedTimeline,disabledReset:"start"===this.state.status&&this.state.usedAudio}),o.a.createElement("span",{className:"current-slide-num"},"".concat(e+1).padStart(2,"0")," / ","".concat(this.slides.length).padStart(2,"0")),o.a.createElement(s.e,{onClick:this.openTimeline,size:18,className:"start"===this.state.status&&this.state.usedAudio||this.state.isEmptyRecordedTimeline?"disabled":void 0}),this.state.usedAudio?o.a.createElement(s.f,{onClick:this.disposeRecording,className:"start"!==this.state.status&&this.state.isEmptyRecordedTimeline?void 0:"disabled",size:20,color:"#6fba1c"}):o.a.createElement(s.g,{onClick:this.setupRecording,className:"start"!==this.state.status&&this.state.isEmptyRecordedTimeline?void 0:"disabled",size:20}))))}}])&&D(n.prototype,r),i&&D(n,i),t}()}}]);