(self.webpackChunkplain=self.webpackChunkplain||[]).push([[179],{6267:(e,t,n)=>{"use strict";n.d(t,{B:()=>f});var s=n(5032),r=n(3606),a=n.n(r),l=n(7077),o=n(1447),c=n(7257),i=n(9644),u=n(8296),d=n(6552);setTimeout(n.n(d)().highlightAll);var m=n(8219);const p=[l.Z,o.Z];c.Z.use(p);const f=()=>{const{state:{slides:e}}=(0,m.re)(),[t]=function(){const[e,t]=(0,s.useState)(null);return[e]}();return(0,s.useEffect)((()=>{e.some((({fusumaProps:e})=>!!e.hasExecutableCode))&&async function(){n.e(868).then(n.bind(n,4868));const{createContext:e,runInNewContext:t}=await n.e(104).then(n.t.bind(n,3104,23));Array.from(document.querySelectorAll(".executable-code-button")).forEach((n=>{n.addEventListener("click",(n=>{const s=n.target.nextSibling;"none"===s.style.display&&(s.style.display="block");const r=e({console:{log:(...e)=>{const t=document.createElement("p");t.innerText=`- ${e.join(" ")}`,s.appendChild(t)}}});t(n.target.dataset.value,r)}))}))}()}),[]),s.createElement(i.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:window.innerWidth<=768,slidesPerView:1,hashNavigation:{watchState:!0},pagination:{}},e.map((({slide:e,fusumaProps:{classes:t,sectionTitle:n,background:r}},l)=>s.createElement(u.o,{key:l,className:a()(t,n?"section-title":void 0),"data-hash":`slide-${l+1}`},r&&s.createElement("div",{className:"slide-background",style:r}),s.createElement("div",{className:"slide-internal-box"},s.createElement(e,null))))))}},8219:(e,t,n)=>{"use strict";n.d(t,{BP:()=>m,Gw:()=>i,PM:()=>c,$L:()=>u,re:()=>d});var s=n(5032);var r=n(2356);const a={mode:location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common",currentIndex:function(){const e=new URL(window.location.href).hash.match(/^#slide-(.+?)$/);return null!==e?e[1]-1:0}(),slides:[],contentsList:[],timeline:[]},l=(0,s.createContext)(a),o=(e,t)=>{switch(t.type){case"SET_MODE":return{...e,mode:t.payload};case"ADD_SLIDES":return{...e,...t.payload};case"UPDATE_CURRENT_INDEX":return{...e,currentIndex:(0,r.W)(t.payload,e.slides.length-1,e.currentIndex)};default:return e}},c=e=>({type:"SET_MODE",payload:e}),i=e=>({type:"ADD_SLIDES",payload:e}),u=e=>({type:"UPDATE_CURRENT_INDEX",payload:e}),d=()=>(0,s.useContext)(l),m=({children:e})=>{const[t,n]=(0,s.useReducer)(o,a);return s.createElement(l.Provider,{value:{state:t,dispatch:n}},e)}},7002:(e,t,n)=>{"use strict";var s=n(5032),r=n(4998),a=n(8219);var l=n(5716),o=n(6267);const c=(0,s.memo)((()=>{const{state:{currentIndex:e,timeline:t},dispatch:n}=(0,a.re)(),r=(0,s.useRef)(e);(0,s.useEffect)((()=>{const{swiper:t}=document.querySelector(".swiper-container");t?.slideTo(e)}),[e]);const l=({key:e})=>{Array.isArray(t[r.current])||("ArrowRight"===e?n((0,a.$L)("+")):"ArrowLeft"===e&&n((0,a.$L)("-")))};return(0,s.useEffect)((()=>(document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)})),[]),(0,s.useEffect)((()=>{r.current=e}),[e]),s.createElement(o.B,null)}));function i(e){const[t,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{if("common"===e){if("false"!==new URL(window.location.href).searchParams.get("sidebar")||!1){const{Sidebar:e}=await Promise.all([n.e(426),n.e(860),n.e(925)]).then(n.bind(n,3925));r(e)}}else r(null)})()}),[e]),t}const u=({slidesProps:e})=>{const[t,r]=(0,s.useState)(!1),{state:{mode:o,slides:u},dispatch:d}=(0,a.re)(),m=function(e){const[t,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{if("common"===e)r(c);else if("view"===e){const{default:e}=await n.e(103).then(n.bind(n,5103));r(e)}else if("host"===e){const{default:e}=await Promise.all([n.e(426),n.e(399),n.e(91)]).then(n.bind(n,91));r(e)}else r(null)})()}),[e]),t}(o),p=i(o);return(0,s.useEffect)((()=>{d((0,a.Gw)(e))}),[e]),(0,s.useEffect)((()=>{"common"!==o&&t&&r(!1)}),[o,t]),s.createElement(s.Fragment,null,p&&s.createElement(s.Fragment,null,s.createElement(p,{isOpen:t,onStateChange:({isOpen:e})=>r(e)}),s.createElement(l.xXU,{className:"btn-sidebar",onClick:()=>r(!0)})),m&&s.createElement(m,{slides:u}))},d=({list:e})=>()=>s.createElement("div",{className:"toc"},s.createElement("ol",null,e.map((({index:e,title:t})=>s.createElement("li",{key:t},s.createElement("a",{href:`#slide-${e}`,title:t},s.createElement("span",{className:"chapter"},t)))))));function m(e){const t=[],n=[],s=[],r=[],a=[],l={};return e.forEach((({slides:e,fusumaProps:l,backgrounds:o,fragmentSteps:c})=>{t.push(...e),n.push(...l),s.push(...o),r.push(c),a.push(...c)})),n.reduce(((e,{sectionTitle:t},n)=>(t&&e.push({title:t,index:n+1}),e)),l.contentsList=[]),l.slides=t.map(((e,t)=>{const r=n[t],a=0===s[t]?null:s[t].includes("/")?{backgroundImage:`url('${s[t]}')`}:{backgroundColor:s[t]};return r.classes&&(r.classes=Array.isArray(r.classes)?r.classes[0].split(","):r.classes.split(",")),{slide:r.contents?d({list:l.contentsList}):e,fusumaProps:{...r,background:a}}})),l.timeline=a,l}var p,f;!function(e=[]){(0,r.hydrate)(s.createElement(a.BP,null,s.createElement(u,{slidesProps:m(e)})),document.getElementById("root"))}((p=n(3447),{id:(f=p).id,slides:f.keys().sort().map((e=>f(e)))}).slides),document.addEventListener("click",(e=>{if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},3179:(e,t,n)=>{if("/Users/hiroppy/Programming/fusuma/samples/plain/style.css".match(/\+*.css$/i))try{n(5031)}catch(e){console.error(e)}},2356:(e,t,n)=>{"use strict";function s(e,t,n){let s=e;return"+"===e?s=Math.min(n+1,t):"-"===e&&(s=Math.max(n-1,0)),s}n.d(t,{W:()=>s})},743:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>l,backgrounds:()=>o,fusumaProps:()=>c,default:()=>u});var s=n(5032),r=n(3077);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const l=[e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("h1",null,"Hello😃")),e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("h2",null,"Bye👋"))],o=[0,0],c=[{classes:"title"},{sectionTitle:"Bye👋"}],i={};function u({components:e,...t}){return(0,r.kt)("wrapper",a({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Hello😃"),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"Bye👋"))}u.isMDXComponent=!0},5031:(e,t,n)=>{"use strict";n.r(t)},3447:(e,t,n)=>{var s={"./0-title.md":743};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=3447}},function(e){"use strict";var t;t=e.x,e.x=()=>{var n=t();return[426,860,925].map(e.E),n}},[[757,666,736],[7002,666,736],[3179,666,736]]]);