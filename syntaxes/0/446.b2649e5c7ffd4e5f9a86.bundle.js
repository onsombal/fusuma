(self.webpackChunk_0=self.webpackChunk_0||[]).push([[446],{3446:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var s=n(5459);class a{constructor(){this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}registerEvent(e,t){navigator.presentation.receiver.connectionList.then((n=>{n.connections.forEach((n=>{n.addEventListener(e,t)})),n.addEventListener("connectionavailable",(e=>{t(e.connection)}))}))}setUp(){this.registerEvent("close",(e=>{console.log(e)}))}onChangePage(e){"presentation"===this.apiType?this.registerEvent("message",(t=>{const n=JSON.parse(t.data).page;e(n)})):window.addEventListener("storage",(t=>{if("page"===t.key){const n=JSON.parse(t.newValue).page;e(n)}}))}}var r=n(5557),i=n(7554);const o=(0,s.memo)((()=>{const{state:{currentIndex:e},dispatch:t}=(0,i.re)(),[n,o]=(0,s.useState)(null);return(0,s.useEffect)((()=>{n?.onChangePage((e=>{t((0,i.$L)(e))}))}),[n]),(0,s.useEffect)((()=>{window.onload=()=>{o(new a)}}),[]),(0,s.useEffect)((()=>{const{swiper:t}=document.querySelector(".swiper-container");t?.slideTo(e)}),[e]),s.createElement("div",{className:"fusuma-presenter-view"},s.createElement(r.B,null))}))}}]);