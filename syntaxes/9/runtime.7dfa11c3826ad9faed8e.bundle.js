(()=>{"use strict";var e,t,r,a,n,o={},f={};function i(e){if(f[e])return f[e].exports;var t=f[e]={exports:{}};return o[e].call(t.exports,t,t.exports,i),t.exports}i.m=o,i.x=e=>{},i.F={},i.E=e=>{Object.keys(i.F).map((t=>{i.F[t](e)}))},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var n=Object.create(null);i.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var f=2&a&&r;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,i.d(n,o),n},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"."+{49:"5e8a670be5952da87148",116:"4d6daac93b67610b05f8",119:"8b1eab4fc213ab0a112c",163:"1c5c4ff0a74706c31bdb",337:"bb8a72441735645ba5de",446:"aeb6f4caafa13bbc1965",519:"2d0dfc29c1c729f64512",597:"30d12f96d9e05d942cac",744:"cf7a6127fffb2580f2a0"}[e]+".bundle.js",i.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{49:"5e8a670be5952da87148",116:"4d6daac93b67610b05f8",163:"1c5c4ff0a74706c31bdb",179:"ff8b8f4cd248379ba231",446:"aeb6f4caafa13bbc1965",736:"114df5b6c6bfa6e0bf36"}[e]+".css"),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},i.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var o,f;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")=="6:"+a){o=d;break}}o||(f=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack","6:"+a),o.src=e),r[e]=[t];var u=(t,a)=>{o.onerror=o.onload=null,clearTimeout(s);var n=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(a))),t)return t(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),f&&document.head.appendChild(o)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/fusuma/syntaxes/9/",a=e=>new Promise(((t,r)=>{var a=i.miniCssF(e),n=i.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(f=r[a]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(n===e||n===t))return f}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var f;if((n=(f=o[a]).getAttribute("data-href"))===e||n===t)return f}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var f=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=f,l.request=i,n.parentNode.removeChild(n),a(l)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),n={666:0},i.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{49:1,116:1,163:1,446:1}[e]&&t.push(n[e]=a(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={666:0},t=[];i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise(((r,n)=>{a=e[t]=[r,n]}));r.push(a[2]=n);var o=i.p+i.u(t),f=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,a[1](f)}}),"chunk-"+t,t)}},i.F.j=t=>{if(!i.o(e,t)||void 0===e[t]){e[t]=null;var r=document.createElement("link");i.nc&&r.setAttribute("nonce",i.nc),r.rel="prefetch",r.as="script",r.href=i.p+i.u(t),document.head.appendChild(r)}};var r=e=>{},a=(a,n)=>{for(var o,f,[l,c,d,u]=n,s=0,b=[];s<l.length;s++)f=l[s],i.o(e,f)&&e[f]&&b.push(e[f][0]),e[f]=0;for(o in c)i.o(c,o)&&(i.m[o]=c[o]);for(d&&d(i),a&&a(n);b.length;)b.shift()();return u&&t.push.apply(t,u),r()},n=self.webpackChunk_6=self.webpackChunk_6||[];function o(){for(var r,a=0;a<t.length;a++){for(var n=t[a],o=!0,f=1;f<n.length;f++){var l=n[f];0!==e[l]&&(o=!1)}o&&(t.splice(a--,1),r=i(i.s=n[0]))}return 0===t.length&&(i.x(),i.x=e=>{}),r}n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n));var f=i.x;i.x=()=>(i.x=f||(e=>{}),(r=o)())})();i.x()})();