(self.webpackChunkthemes=self.webpackChunkthemes||[]).push([[226],{6226:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var s=n(5032),i=n(4427),r=n.n(i),a=n(2511),o=n(1970);const l={currentIndex:0},c=(0,s.createContext)(l),d=(e,t)=>(t.type,e),m=({children:e})=>{const[t,n]=(0,s.useReducer)(d,l);return s.createElement(c.Provider,{value:{state:t,dispatch:n}},e)};class u{constructor(){this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}openView(){return new Promise(((e,t)=>{"presentation"===this.apiType?(this.presentationRequest=new PresentationRequest([this.receiverQuery]),navigator.presentation.defaultRequest=this.presentationRequest,this.presentationRequest.addEventListener("connectionavailable",(t=>{this.presentationConnection=t.connection,e(t.connection.id)})),this.presentationRequest.start().catch((e=>t(e)))):(this.windowId=window.open(this.receiverQuery,"_blank","width=800,height=600"),e())}))}changePage(e){const t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}async reconnect(e){return"presentation"===this.apiType?this.presentationRequest.reconnect(e):Promise.resolve()}terminate(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}function h(e){const t=Math.floor(e/1e3%60).toString().padStart(2,"0"),n=Math.floor(e/6e4%60).toString().padStart(2,"0");return`${Math.floor(e/36e5%24).toString().padStart(2,"0")}:${n}:${t}`}let p=0,E=null;const v=(0,s.memo)((({start:e,stop:t,reset:n,disabledStart:i,disabledStop:r,disabledReset:o})=>{const[l,c]=(0,s.useState)(!0),[d,m]=(0,s.useState)("00:00:00");return(0,s.useEffect)((()=>()=>{E&&clearInterval(E)}),[]),s.createElement("div",{className:"host-timer"},s.createElement(a.xrw,{onClick:()=>{E&&t(),p=0,m("00:00:00"),n()},className:o?"disabled":void 0}),l?s.createElement(a.gmG,{onClick:()=>{E=setInterval((()=>(p+=1e3,void m(h(p)))),1e3),c(!1),e()},className:i?"disabled":void 0}):s.createElement(a.JuG,{onClick:()=>{clearInterval(E),c(!0),E=null,t()},className:r?"disabled":void 0}),s.createElement("span",null,d))}));var f=n(3749);const g=({items:e,url:t})=>{const n=(0,s.useRef)();return(0,s.useEffect)((()=>{if(n.current){const t=n.current,s=async()=>new Promise((e=>{t.addEventListener("loadedmetadata",(()=>{if(t.duration===1/0){t.currentTime=Number.MAX_SAFE_INTEGER;const n=()=>{t.currentTime=0,t.removeEventListener("timeupdate",n),e()};t.addEventListener("timeupdate",n)}}))})),i=document.querySelectorAll(".ReactModalPortal section > div");s();{let e=!1;t.addEventListener("playing",(()=>{e||(t.currentTime=0,e=!0)}))}t.addEventListener("timeupdate",(()=>{const n=(t=>{let n=0;for(let s=0;s<e.length;s++){const{time:i}=e[s];if(t<=i){n=s;break}}return n})(1e3*t.currentTime);i[n].scrollIntoView()}))}}),[]),s.createElement("div",{className:"host-timeline-container"},t&&s.createElement("div",{className:"host-timeline-audio"},s.createElement("audio",{src:t,controls:!0,ref:n})),s.createElement("div",{className:"host-timeline-body"},s.createElement(f.TY,null,e.map((({title:e,time:t,timeStr:n,Slide:i,color:r,Icon:a})=>s.createElement(f.BJ,{key:t,title:e,createdAt:n,iconColor:r,icon:a},i&&s.createElement(i,null)))))))};class w{constructor(){navigator.mediaDevices.getUserMedia||console.warn("Not supported"),this.url=null,this.finishedProcess=!1}async setupRecording(){const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});return this.handlerRecording(e),e}handlerRecording(e){const t=[];this.stream=e,this.mediaRecorder=new MediaRecorder(e,{}),this.mediaRecorder.addEventListener("dataavailable",(e=>{e.data.size>0&&t.push(e.data)})),this.mediaRecorder.addEventListener("stop",(()=>{this.finishedProcess=!0,this.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))}))}startRecording(){this.mediaRecorder.start(),this.finishedProcess=!1,this.url=null}stopRecording(){return new Promise((e=>{this.mediaRecorder.stop();const t=setInterval((()=>{this.finishedProcess&&(clearInterval(t),e(this.url))}),100)}))}disposeRecording(){this.mediaRecorder.stream.getTracks().forEach((e=>e.stop())),this.finishedProcess=!1,this.url=null}}const S=({slideUrl:e,slideIndex:t})=>s.createElement("iframe",{src:`${e.replace(/slide-(\d?)/,`slide-${t}`)}`,width:"100%",height:"100%"});let R=[],b=0;const y=()=>{const{state:{slides:e,currentIndex:t},dispatch:n}=(0,o.re)(),[i,l]=(0,s.useState)(null),[c,d]=(0,s.useState)("prepare"),[m,p]=(0,s.useState)(null),[E,f]=(0,s.useState)(null),[y,N]=(0,s.useState)(!1),[I,k]=(0,s.useState)(null),[C,P]=(0,s.useState)(!1),[T,L]=(0,s.useState)(!0),$=(0,s.useRef)(m),x=()=>{try{m&&(m.terminate(),p(null))}catch(e){console.error(e)}finally{n((0,o.PM)("common"))}},q=()=>{0===R.length&&(b=(new Date).getTime());const n=0===R.length?0:(new Date).getTime()-b;R.push({slideNum:t+1,time:n,timeStr:h(n),event:"started",title:`Started from the ${t+1} slide.`,Slide:e[t].slide,color:"#6fba1c",Icon:s.createElement(a.qL$,null)}),y&&(I.startRecording(),f(null)),L(!1),d("start")};(0,s.useEffect)((()=>{I?.setupRecording()}),[I]);const M=()=>{I&&(I.disposeRecording(),k(null)),N(!1)};return(0,s.useEffect)((()=>{if($.current=m,m)(async()=>{try{await(m?.openView())}catch(e){console.error(e)}})();else{const{origin:e,pathname:t}=new URL(window.location);l(`${e}${t}?sidebar=false&reference=false#slide-`),p(new u)}}),[m]),(0,s.useEffect)((()=>{n((0,o.oA)());const e=({key:e})=>{"ArrowLeft"===e?(n((0,o.$L)("-")),$.current.changePage("-")):"ArrowRight"===e&&(n((0,o.$L)("+")),$.current.changePage("+"))};return document.addEventListener("keydown",e,!1),()=>{$.current&&x(),M(),document.removeEventListener("keydown",e)}}),[]),(0,s.useEffect)((()=>{if(m&&m.changePage(t),"start"===c){const n=(new Date).getTime()-b,i=R.slice(-1)[0];R.push({slideNum:t+1,time:n,timeStr:`${h(n)} (+${h(n-i.time)})`,event:"changed",title:`Moved to the ${t+1} slide from the ${t} slide.`,Slide:e[t].slide,color:"#3498db",Icon:s.createElement(a.PS5,{size:"22"})})}}),[t]),s.createElement("div",{className:"host-container"},s.createElement(r(),{isOpen:C,onRequestClose:()=>P(!1)},s.createElement(g,{items:R,url:E})),s.createElement("div",{className:"host-left-box"},s.createElement("div",{className:"host-note"},e&&s.createElement("pre",{dangerouslySetInnerHTML:{__html:e[t].fusumaProps.note}}))),s.createElement("div",{className:"host-right-box"},s.createElement("div",{className:"host-slide-layer"},s.createElement("h2",null,"Current"),i&&s.createElement(S,{slideUrl:i,slideIndex:t+1})),s.createElement("div",{className:"host-slide-layer"},s.createElement("h2",null,"Next"),i&&s.createElement(S,{slideUrl:i,slideIndex:t+2}))),s.createElement("div",{className:"host-bottom-box"},s.createElement(a.aHS,{onClick:x,className:"terminate-button"}),s.createElement("div",{className:"host-bottom-box-info"},s.createElement(v,{start:q,stop:async()=>{const e=(new Date).getTime()-b;R.push({slideNum:t+1,time:e,timeStr:h(e),event:"stopped",title:`Stopped at the ${t+1} slide.`,color:"#e9546b",Icon:s.createElement(a.IkZ,null)}),y&&f(await I.stopRecording()),d("stop")},reset:()=>{f(null),R=[],b=0,d("prepare"),L(!0)},disabledStart:"stop"===c&&y&&!q.isEmptyRecordedTimeline,disabledStop:"stop"===c&&y&&!q.isEmptyRecordedTimeline,disabledReset:"start"===c&&y}),s.createElement("span",{className:"current-slide-num"},`${t+1}`.padStart(2,"0")," / ",`${e.length}`.padStart(2,"0")),s.createElement(a.ceS,{onClick:()=>P(!0),size:18,className:"start"===c&&y||T?"disabled":void 0}),y?s.createElement(a.kOf,{onClick:M,className:"start"!==c&&T?void 0:"disabled",size:20,color:"#6fba1c"}):s.createElement(a.WzD,{onClick:()=>{I||(k(new w),N(!0))},className:"start"!==c&&T?void 0:"disabled",size:20}))))},N=(0,s.memo)((()=>s.createElement(m,null,s.createElement(y,null))))}}]);