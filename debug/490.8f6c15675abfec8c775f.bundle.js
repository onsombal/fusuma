(self.webpackChunkdebug=self.webpackChunkdebug||[]).push([[490],{2490:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var a=n(5032),s=n(4427),r=n.n(s),i=n(2511),o=n(5716);class l{constructor(){this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}openView(){return new Promise(((e,t)=>{"presentation"===this.apiType?(this.presentationRequest=new PresentationRequest([this.receiverQuery]),navigator.presentation.defaultRequest=this.presentationRequest,this.presentationRequest.addEventListener("connectionavailable",(t=>{this.presentationConnection=t.connection,e(t.connection.id)})),this.presentationRequest.start().catch((e=>t(e)))):(this.windowId=window.open(this.receiverQuery,"_blank","width=800,height=600"),e())}))}changePage(e){const t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}async reconnect(e){return"presentation"===this.apiType?this.presentationRequest.reconnect(e):Promise.resolve()}terminate(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}var c=n(9547);let d=["#444","#3498db","#ff874d","#67a2a0"],m=null,u=null;const h=(0,a.memo)((({toolbar:e,disabled:t,hideGrid:n})=>{const s=(0,a.useRef)(),[r,l]=(0,a.useState)(d[0]),h=()=>{window.localStorage.setItem("fusumaCanvasCoordinate",s.current.getSaveData())},p=()=>{const e=window.localStorage.getItem("fusumaCanvasCoordinate");m!==e&&(s.current.loadSaveData(e,!0),m=e)};return(0,a.useEffect)((()=>(u=e?setInterval(h,1e3):setInterval(p,1e3),()=>{u&&clearInterval(u)})),[]),a.createElement(a.Fragment,null,e&&a.createElement("div",{className:"fusuma-canvas-toolbar"},a.createElement(o.ZkW,{onClick:()=>{s.current.clear()},size:"32"}),a.createElement(i.wXW,{onClick:()=>{s.current.undo()}}),a.createElement("div",{style:{background:r},onClick:()=>{d=d.concat(d.splice(0,1)),l(d[0])},className:"fusuma-canvas-toolbar-color"})),a.createElement(c.Z,{ref:s,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:r,disabled:t,hideGrid:n,lazyRadius:0,brushRadius:8}))}));function p(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}function v(e){const t=Math.floor(e/1e3%60).toString().padStart(2,"0"),n=Math.floor(e/6e4%60).toString().padStart(2,"0");return`${Math.floor(e/36e5%24).toString().padStart(2,"0")}:${n}:${t}`}let E=0,f=null;const g=(0,a.memo)((({start:e,stop:t,reset:n,disabledStart:s,disabledStop:r,disabledReset:o})=>{const[l,c]=(0,a.useState)(!0),[d,m]=(0,a.useState)("00:00:00");return(0,a.useEffect)((()=>()=>{f&&clearInterval(f)}),[]),a.createElement("div",{className:"host-timer"},a.createElement(i.xrw,{onClick:()=>{f&&t(),E=0,m("00:00:00"),n()},className:o?"disabled":void 0}),l?a.createElement(i.gmG,{onClick:()=>{f=setInterval((()=>(E+=1e3,void m(v(E)))),1e3),c(!1),e()},className:s?"disabled":void 0}):a.createElement(i.JuG,{onClick:()=>{clearInterval(f),c(!0),f=null,t()},className:r?"disabled":void 0}),a.createElement("span",null,d))}));var w=n(3749);const b=({items:e,url:t})=>{const n=(0,a.useRef)();return(0,a.useEffect)((()=>{if(n.current){const t=n.current,a=async()=>new Promise((e=>{t.addEventListener("loadedmetadata",(()=>{if(t.duration===1/0){t.currentTime=Number.MAX_SAFE_INTEGER;const n=()=>{t.currentTime=0,t.removeEventListener("timeupdate",n),e()};t.addEventListener("timeupdate",n)}}))})),s=document.querySelectorAll(".ReactModalPortal section > div");a();{let e=!1;t.addEventListener("playing",(()=>{e||(t.currentTime=0,e=!0)}))}t.addEventListener("timeupdate",(()=>{const n=(t=>{let n=0;for(let a=0;a<e.length;a++){const{time:s}=e[a];if(t<=s){n=a;break}}return n})(1e3*t.currentTime);s[n].scrollIntoView()}))}}),[]),a.createElement("div",{className:"host-timeline-container"},t&&a.createElement("div",{className:"host-timeline-audio"},a.createElement("audio",{src:t,controls:!0,ref:n})),a.createElement("div",{className:"host-timeline-body"},a.createElement(w.TY,null,e.map((({title:e,time:t,timeStr:n,Slide:s,color:r,Icon:i})=>a.createElement(w.BJ,{key:t,title:e,createdAt:n,iconColor:r,icon:i},s&&a.createElement(s,null)))))))};var S=n(9134);r().setAppElement("#root");const R=({slideUrl:e,slideIndex:t})=>a.createElement("iframe",{src:`${e.replace(/slide-(\d?)/,`slide-${t}`)}`,width:"100%",height:"100%"});let y=null,C=null,N=null,I=[],k=0,T=null;const P=(0,a.memo)((({slides:e,currentIndex:t,terminate:n,onChangeSlideIndex:s})=>{if(!N){const{origin:e,pathname:t}=new URL(window.location);C=`${e}${t}?sidebar=false&reference=false#slide-`,N=new l}const[c,d]=(0,a.useState)("prepare"),[m,u]=(0,a.useState)(!1),[E,f]=(0,a.useState)(!1),[w,P]=(0,a.useState)(!0),[$,L]=(0,a.useState)(!1),x=()=>{try{n(),N&&(N.terminate(),N=null)}catch(e){console.error(e)}},M=t=>{if("start"===c){const n=(new Date).getTime()-k,s=I.slice(-1)[0];I.push({slideNum:t+1,time:n,timeStr:`${v(n)} (+${v(n-s.time)})`,event:"changed",title:`Moved to the ${t+1} slide from the ${t} slide.`,Slide:e[t].slide,color:"#3498db",Icon:a.createElement(i.PS5,{size:"22"})})}s(t),N.changePage(t)},q=()=>{0===I.length&&(k=(new Date).getTime());const n=0===I.length?0:(new Date).getTime()-k;I.push({slideNum:t+1,time:n,timeStr:v(n),event:"started",title:`Started from the ${t+1} slide.`,Slide:e[t].slide,color:"#6fba1c",Icon:a.createElement(i.qL$,null)}),m&&(y.startRecording(),T=null),P(!1),d("start")},D=()=>{y&&(y.disposeRecording(),y=null),u(!1)};return(0,a.useEffect)((()=>(async function(){try{if(!N)throw new Error("Not found PresenterController.");await N.openView()}catch(e){console.error(e)}}(),()=>{document.onkeyup=null,N&&x(),D()})),[]),(0,a.useEffect)((()=>{document.onkeyup=n=>{"ArrowLeft"===n.key?M(Math.max(0,t-1)):"ArrowRight"===n.key&&M(Math.min(e.length-1,t+1))}})),a.createElement("div",{className:"host-container"},a.createElement(r(),{isOpen:E,onRequestClose:()=>{f(!1)}},a.createElement(b,{items:I,url:T})),a.createElement("div",{className:"host-left-box"},a.createElement("div",{className:"host-note"},e&&a.createElement("pre",{dangerouslySetInnerHTML:{__html:e[t].fusumaProps.note}}))),a.createElement("div",{className:"host-right-box"},a.createElement("div",{className:"host-slide-layer"},a.createElement("h2",null,"Current"),a.createElement(o.e$R,{size:28,onClick:()=>{L(!0),p({status:"start"})}}),a.createElement(R,{slideUrl:C,slideIndex:t+1})),a.createElement(r(),{isOpen:$,onRequestClose:()=>{L(!1),p({status:"stop"})}},$&&a.createElement("div",{className:"host-slide-canvas"},a.createElement(h,{toolbar:!0,hideGrid:!0}),a.createElement(R,{slideUrl:C,slideIndex:t+1}))),a.createElement("div",{className:"host-slide-layer"},a.createElement("h2",null,"Next"),a.createElement(R,{slideUrl:C,slideIndex:t+2}))),a.createElement("div",{className:"host-bottom-box"},a.createElement(i.aHS,{onClick:x,className:"terminate-button"}),a.createElement("div",{className:"host-bottom-box-info"},a.createElement(g,{start:q,stop:async()=>{const e=(new Date).getTime()-k;I.push({slideNum:t+1,time:e,timeStr:v(e),event:"stopped",title:`Stopped at the ${t+1} slide.`,color:"#e9546b",Icon:a.createElement(i.IkZ,null)}),m&&(T=await y.stopRecording()),d("stop")},reset:()=>{T=null,I=[],k=0,d("prepare"),P(!0)},disabledStart:"stop"===c&&m&&!q.isEmptyRecordedTimeline,disabledStop:"stop"===c&&m&&!q.isEmptyRecordedTimeline,disabledReset:"start"===c&&m}),a.createElement("span",{className:"current-slide-num"},`${t+1}`.padStart(2,"0")," / ",`${e.length}`.padStart(2,"0")),a.createElement(i.ceS,{onClick:()=>{f(!0)},size:18,className:"start"===c&&m||w?"disabled":void 0}),m?a.createElement(i.kOf,{onClick:D,className:"start"!==c&&w?void 0:"disabled",size:20,color:"#6fba1c"}):a.createElement(i.WzD,{onClick:()=>{if(!y)try{y=new S.u,y.setupRecording(),u(!0)}catch(e){alert(e)}},className:"start"!==c&&w?void 0:"disabled",size:20}))))}))},9134:(e,t,n)=>{"use strict";n.d(t,{u:()=>a});class a{constructor(){if(!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}setupRecording(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.handlerRecording)}handlerRecording(e){const t=[];this.stream=e,this.mediaRecorder=new MediaRecorder(e,{}),this.mediaRecorder.addEventListener("dataavailable",(e=>{e.data.size>0&&t.push(e.data)})),this.mediaRecorder.addEventListener("stop",(()=>{this.finishedProcess=!0,this.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))}))}startRecording(){this.mediaRecorder.start(),this.finishedProcess=!1,this.url=null}stopRecording(){return new Promise((e=>{this.mediaRecorder.stop();const t=setInterval((()=>{this.finishedProcess&&(clearInterval(t),e(this.url))}),100)}))}disposeRecording(){this.mediaRecorder.stream.getTracks().forEach((e=>e.stop())),this.finishedProcess=!1,this.url=null}async startCapturing(e){let t=null;try{t=await navigator.mediaDevices.getDisplayMedia(e)}catch(e){console.error(e)}return t}stopCapturing(e){e.srcObject.getTracks().forEach((e=>e.stop())),e.srcObject=null}}}}]);