(this.webpackJsonp=this.webpackJsonp||[]).push([[50],{YQdx:function(e,a,t){"use strict";t.r(a);var l=t("iuhU"),s=t("q1tI"),n=t.n(s),c=t("V7B8"),r=t("Vp9m"),o=t("zRkS"),u=t("egaF"),i=t("z0WU"),d=t("b7Wo"),m=t("/I+Z"),g=t("u3Jf"),p=t("VteK"),b=t("iA9X"),f=t("9uGz"),v=t("UwMY");function _(e,a,t){return JSON.stringify(e,a,t)}const E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function y(e){const a={mode:{name:"javascript",json:!0,statementIndent:2},lineWrapping:!0,indentWithTabs:!0,tabSize:2,scrollbarStyle:null,readOnly:!0},t=n.a.useCallback(((e,a)=>{!function(e){i.default.copyTextToClipboard(e)}(a),r.default.show({noBackground:!0,textKey:"Copied to clipboard!",type:r.TOAST_TYPE.SUCCESS,duration:1500})}),[]),s=e.data.map((e=>{let s,r=!1,u=e.value;return Object(m.b)(e.value)?(u=_(e.value,void 0,2),r=!0,s=n.a.createElement(c.UnControlled,{value:u,options:a})):("time"===e.type&&(u=`${u} (${function(e){const a=new Date(+e);if(isNaN(a.getTime()))return"";const t=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0"),s=String(a.getSeconds()).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0"),c=a.getMonth();return`${t}:${l}:${s} - ${E[c]} ${n}, ${a.getFullYear()}`}(u)})`),u+="",s=n.a.createElement("div",{className:"h100 truncate-5"},u)),n.a.createElement(g.d,{className:"debug-message-info__row"},n.a.createElement("div",{className:"debug-message-info__cell-wrapper"},n.a.createElement(g.b,{className:Object(l.a)("debug-message-info__property-cell","debug-message-info__property-cell--hoverable","clickable"),vCenter:!0,onClick:a=>{t(a,_({[e.property]:e.value},void 0,2))},title:e.property},n.a.createElement("div",{className:"truncate"},e.property))),n.a.createElement("div",{className:"debug-message-info__cell-wrapper debug-message-info__cell-wrapper--value"},n.a.createElement(g.b,{className:Object(l.a)("debug-message-info__value-cell","debug-message-info__value-cell--hoverable",r&&"debug-message-info__value-cell--no-padding","clickable"),onClick:a=>{t(a,_(e.value,void 0,2))}},s,n.a.createElement(o.a,{className:Object(l.a)("Copy_24_Line","debug-message-info__value-cell-copy-icon",r&&"debug-message-info__value-cell-copy-icon--top")}))))}));return n.a.createElement(g.a,{className:"debug-message-info__table"},n.a.createElement(g.c,{className:"debug-message-info__header"},n.a.createElement("div",{className:"debug-message-info__cell-wrapper"},n.a.createElement(g.b,{className:Object(l.a)("debug-message-info__property-cell","debug-message-info__property-cell--header"),vCenter:!0},"Property")),n.a.createElement("div",{className:"debug-message-info__cell-wrapper"},n.a.createElement(g.b,{className:Object(l.a)("debug-message-info__value-cell","debug-message-info__value-cell--header"),vCenter:!0},"Value"))),n.a.createElement("div",null,s))}a.default=function(e){var a;const{data:t}=e;if(null==t||!t.message||!v.a.includes(t.message.msgType))return null;const[l,c]=Object(s.useState)({}),[r,o]=Object(s.useState)([]),i=[{property:"Over 14 days",value:Date.now()-(null==t||null===(a=t.message)||void 0===a?void 0:a.sendDttm)>12096e5?"true":"false",type:""}],m=Object.keys(l||{}).sort(),g=["mediaInfo","msgInfo","encryptInfo"],_=["ts"],E=n.a.useRef(0);return r.forEach(((e,a)=>{i.push({property:`LocalPath_${a}:`,value:e,type:""})})),m.forEach((e=>{const a=l[e];if(void 0===a)return;let t=a;g.includes(e)&&(t=Object(d.a)(a));let s="";_.forEach((a=>{e.includes(a)&&(s="time")})),i.push({property:e,value:t,type:s})})),Object(s.useEffect)((()=>{Object(b.d)("info for message",t)}),[]),Object(s.useEffect)((()=>{p.a.getCloudItem(null==t?void 0:t.message).then(c).catch((e=>{Object(b.d)("Get cloud info failed",e)}))}),[]),Object(s.useEffect)((()=>{let{message:e}=t||{};if(e){let a=(new f.a(e).withRawResult(!0).run()||[]).map((e=>null==e?void 0:e.path));o(a)}}),[t]),n.a.createElement(u.b,{onScroll:e=>{var a,t,l;if((null===(a=e.srcElement)||void 0===a?void 0:a.scrollTop)>=10){if(E.current<10){const e=document.getElementById("DebugMessageInfoNavbar");e&&e.classList.add("debug-message-info__navbar--shadow")}}else if(E.current>=10){const e=document.getElementById("DebugMessageInfoNavbar");e&&e.classList.remove("debug-message-info__navbar--shadow")}E.current=null!==(t=null===(l=e.srcElement)||void 0===l?void 0:l.scrollTop)&&void 0!==t?t:E.current}},n.a.createElement("div",{className:"debug-message-info"},n.a.createElement("div",{id:"DebugMessageInfoNavbar",className:"debug-message-info__navbar"},n.a.createElement("h2",{className:"text-center"},"ZCloud Info")),n.a.createElement("div",{className:"debug-message-info__content-section"},n.a.createElement(y,{data:i}))))}}}]);
//# sourceMappingURL=../sourcemaps/lazy/50.bc28144e5345fd739f24.js.map