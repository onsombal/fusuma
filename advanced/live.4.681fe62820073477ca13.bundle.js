(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{460:function(e,t,n){var r=n(461);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(63)(r,o);r.locals&&(e.exports=r.locals)},461:function(e,t,n){},641:function(e,t,n){"use strict";n.r(t),n.d(t,"CommentsList",function(){return d});var r=n(2),o=n.n(r),a=n(636),c=n(637);n(460);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=a.a.ul({}),b=a.a.li({enter:{opacity:1},exit:{opacity:0}}),v=new c.a,d=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=u(this,f(t).call(this));var n=window.location.hostname;e.state={comments:[]},e.ws=new WebSocket("ws://".concat(n,":").concat(void 0)),e.listenWS();var r=v.format(new Date);return console.log(r),e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"listenWS",value:function(){var e=this;this.ws.onmessage=function(t){var n=t.data,r=JSON.parse(n);if(Array.isArray(r)&&0!==r.length)if("Rate limit exceeded"===r[0].message);else if("hello:)"===r[0].message);else{var o=r.reverse().map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},e,{createdAt:v.format(e.createdAt)})});e.setState({comments:[].concat(s(e.state.comments),s(o))})}}}},{key:"render",value:function(){return o.a.createElement("div",{className:"comments-list"},o.a.createElement("div",{className:"comments-list-title"},o.a.createElement("span",null,"Private Mode"),o.a.createElement("span",{className:"comments-list-total"},this.state.comments.length," comments")),o.a.createElement(y,{className:"comments-list-ul"},o.a.createElement("div",null,this.state.comments.map(function(e){var t=e.id,n=e.avatar,r=e.text,a=e.screenName,c=e.createdAt;return o.a.createElement(b,{key:t,className:"comments-list-li"},n&&o.a.createElement("img",{src:n,className:"comments-list-li-avatar"}),o.a.createElement("div",{className:"comments-list-li-body"},o.a.createElement("div",{className:"comments-list-li-body-info"},o.a.createElement("span",{className:"comments-list-li-screen-name"},"@",a),o.a.createElement("span",{className:"comments-list-li-time-ago"},c)),o.a.createElement("span",{className:"comments-list-li-comment"},r)))}))))}}])&&m(n.prototype,r),a&&m(n,a),t}()}}]);