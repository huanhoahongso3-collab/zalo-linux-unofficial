(this.webpackJsonp=this.webpackJsonp||[]).push([[41],{"2CG1":function(e,t,r){"use strict";r.r(t);var o=r("q1tI"),n=r.n(o),l=r("PGI9"),a=r("N1xz");var c=e=>{const{safeFpsGap:t}=e||{},{isEnabled:r}=Object(l.a)(),[n,c]=Object(o.useState)(!1),s=Object(o.useRef)();return{isRecording:n,start:Object(o.useCallback)((()=>{if(!r)return;c(!0),s.current&&s.current.end();const e=a.a.UIManager.registerFpsLongSectionRecorder("metric-tool");e.start(),s.current=e}),[r,t]),end:Object(o.useCallback)((()=>{var e;if(!r)return;c(!1);return(null===(e=s.current)||void 0===e?void 0:e.end())||void 0}),[r])}},s=r("dFSO"),i=r("6Be5"),d=r("jDHv"),p=r("Mgpg"),u=r("h0S/");const v=Object(o.memo)((()=>{var e,t,r;const{isRecording:l,start:a,end:v}=c(),{containerStyle:b,btnStyle:m,contentStyle:f}={containerStyle:Object(o.useMemo)((()=>({display:"flex",flexDirection:"column",fontSize:"90%"})),[]),btnStyle:Object(o.useMemo)((()=>({padding:"1px 4px",border:"none",backgroundColor:"rgb(255 255 255 / 14%)",color:"white",borderRadius:"2px",cursor:"pointer"})),[]),contentStyle:Object(o.useMemo)((()=>({overflow:"hidden",textOverflow:"ellipsis",maxHeight:"16px",textAlign:"center"})),[])},[g,w]=Object(o.useState)(),S=n.a.useRef(d.ModuleContainer.resolve(p.ZLoggerFactory).createZLogger(u.ZLoggerNametags.metricz,["fps-tool"]));Object(o.useEffect)((()=>()=>{l&&v()}),[l,v]);const O=Object(o.useCallback)((e=>{if(e.stopPropagation(),l){const e=v();e&&S.current.zsymb(0,"Zbu7I5","fps-tool: recorded fps drop {}",e),w(e)}else w(void 0),a()}),[l,a,v]);return n.a.createElement("div",{style:b},n.a.createElement("button",{style:m,onClick:O},l?"Stop":"Record"),null!=(null==g||null===(e=g.lowestDropped)||void 0===e?void 0:e.lowestDrop)&&(null==g||null===(t=g.lowestDropped)||void 0===t?void 0:t.recoverTime)&&n.a.createElement(i.a,{arrow:!0,placement:"right-center",title:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"Lowest drop: ",g.lowestDropped.lowestDrop," FPS"),n.a.createElement("div",null,"Recover time: ",Object(s.e)(g.lowestDropped.recoverTime,1)),n.a.createElement("div",null,"Before drop: ",g.lowestDropped.beforeDrop," FPS"),n.a.createElement("div",null,"After recover: ",null===(r=g.lowestDropped)||void 0===r?void 0:r.afterRecover," FPS"),n.a.createElement("div",null,"Start time: ",g.startAt),n.a.createElement("div",null,"End time: ",g.endAt)),positionMode:"anchor"},n.a.createElement("span",{style:f},"drop: ",g.lowestDropped.lowestDrop)))}));t.default=v}}]);
//# sourceMappingURL=../sourcemaps/lazy/41.d4ae41eac2e2ff119064.js.map