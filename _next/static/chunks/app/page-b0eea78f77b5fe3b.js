(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{519:(e,t,n)=>{Promise.resolve().then(n.bind(n,5498)),Promise.resolve().then(n.bind(n,3644)),Promise.resolve().then(n.bind(n,9617)),Promise.resolve().then(n.bind(n,2588)),Promise.resolve().then(n.t.bind(n,3971,23)),Promise.resolve().then(n.t.bind(n,2266,23)),Promise.resolve().then(n.t.bind(n,5619,23)),Promise.resolve().then(n.t.bind(n,2736,23)),Promise.resolve().then(n.t.bind(n,9597,23))},1595:(e,t,n)=>{"use strict";n.d(t,{Bm:()=>a,Im:()=>l,VR:()=>r,bD:()=>function e(t,n){return t&&n&&"object"==typeof t&&"object"==typeof n?Object.keys(t).length===Object.keys(n).length&&Object.keys(t).reduce((o,r)=>o&&e(t[r],n[r]),!0):t===n},nL:()=>s,nT:()=>c,xW:()=>i});let o={}.hasOwnProperty;function r(e){let t=document.body;t.classList.forEach(e=>{e.startsWith("theme-")&&t.classList.remove(e)}),e?t.classList.add(e):t.classList.add("theme-light")}function l(e){return 0!==e&&(!e||"object"==typeof e||0===e.length||!(e=e.toString()).trim())}function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=[];for(let e=0;e<arguments.length;e++){let t=arguments[e];if(!t)continue;let n=typeof t;if("string"===n||"number"===n)r.push(t);else if(Array.isArray(t)){if(t.length){let e=i.apply(null,t);e&&r.push(e)}}else if("object"===n){if(t.toString!==Object.prototype.toString)r.push(t.toString());else for(let e in t)o.call(t,e)&&t[e]&&r.push(e)}}return r.join(" ")}let a=e=>!!(e&&e instanceof HTMLElement)&&e.matches('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'),s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"next";if(!e)return null;let n=Array.from(document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]')),o=n.indexOf(e);if(-1!==o){let e="next"===t?(o+1)%n.length:(o-1+n.length)%n.length;return n[e]}return null},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"next";if(!e)return null;let o=Array.from(e.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'));if(0===o.length)return null;let r=0;if(t){let e=o.indexOf(t);-1!==e&&(r="next"===n?e+1:e-1)}return r>=0&&r<o.length?o[r]:null}},5498:(e,t,n)=>{"use strict";n.d(t,{default:()=>c});var o=n(5155),r=n(983),l=n.n(r),i=n(2115),a=n(1595),s=n(2588);let c=e=>{let{defaultValue:t=!1,title:n,children:r}=e,[c,d]=i.useState(t),u=i.useRef(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.default,{ref:u,tabIndex:0,role:"button",onClick:()=>{d(e=>!e)},"aria-expanded":c,children:(0,o.jsxs)("div",{className:a.xW(l().flex,c?l().active:void 0),children:[(0,o.jsx)("span",{className:l().icon,children:c?"▾":"▸"}),(0,o.jsx)("span",{className:l().content,children:n})]})}),c&&(0,o.jsx)(s.default,{style:{paddingLeft:"1ch"},children:r})]})}},3644:(e,t,n)=>{"use strict";n.d(t,{default:()=>d});var o=n(5155),r=n(4625),l=n.n(r),i=n(2115);let a={r:98,g:98,b:98,a:.5},s={r:168,g:168,b:168,a:.5};function c(e,t,n){return{r:Math.round(e.r+n*(t.r-e.r)),g:Math.round(e.g+n*(t.g-e.g)),b:Math.round(e.b+n*(t.b-e.b)),a:e.a+n*(t.a-e.a)}}let d=e=>{let{data:t}=e,n=i.useRef(null),r=i.useRef(t);i.useEffect(()=>{var e,o,i;let a=(null===(e=n.current)||void 0===e?void 0:e.querySelectorAll("tr"))||[];for(let e=1;e<t.length;e++){let n=null===(o=a[e])||void 0===o?void 0:o.querySelectorAll("td");if(n)for(let o=0;o<t[e].length;o++){let a=n[o],s=(null===(i=r.current[e])||void 0===i?void 0:i[o])!==t[e][o];a&&s&&(a.classList.remove(l().changed),a.offsetWidth,a.classList.add(l().changed))}}r.current=t},[t]);let d={r:255,g:255,b:255,a:.45},u={r:255,g:255,b:255,a:.45};return(0,o.jsx)("table",{className:l().root,ref:n,onKeyDown:e=>{let t=document.activeElement;if(t)switch(e.key){case"Enter":e.preventDefault(),t instanceof HTMLTableCellElement&&t.click();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":var o;if(e.preventDefault(),!(t instanceof HTMLTableCellElement))return;let r="ArrowUp"===e.key||"ArrowLeft"===e.key?"previous":"next",l=Array.from((null===(o=n.current)||void 0===o?void 0:o.querySelectorAll("td"))||[]),i=l.indexOf(t);if(-1===i)return;let a="next"===r?i+1:i-1;"previous"===r?a<0&&(a=l.length-1):a>=l.length&&(a=0),l[a].focus()}},children:(0,o.jsx)("tbody",{className:l().body,children:t.map((e,n)=>(0,o.jsx)("tr",{className:l().row,tabIndex:0,onClick:()=>window.open("https://www.nasdaq.com/market-activity/stocks/"+e[1],"_blank"),children:e.map((r,i)=>{let h;if(0===n){let t=c(a,d,e.length>1?i/(e.length-1):0);h="rgba(".concat(t.r,", ").concat(t.g,", ").concat(t.b,", ").concat(t.a.toFixed(2),")")}else{let o=c(s,u,(n-1+i)/(t.length-1-1+(e.length-1)||1));h="rgba(".concat(o.r,", ").concat(o.g,", ").concat(o.b,", ").concat(o.a.toFixed(2),")")}return(0,o.jsx)("td",{className:l().column,style:{backgroundColor:h},children:r},i)})},n))})})}},2588:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var o=n(5155),r=n(9057),l=n.n(r);let i=n(2115).forwardRef((e,t)=>{let{children:n,...r}=e;return(0,o.jsx)("section",{className:l().row,ref:t,...r,children:n})});i.displayName="Row";let a=i},9617:(e,t,n)=>{"use strict";n.d(t,{default:()=>J});var o=n(5155),r=n(1801),l=n.n(r),i=n(2115),a=n(1595);let s=["shift","alt","meta","mod","ctrl"],c={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function d(e){return(e&&c[e]||e||"").trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return e.split(t)}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+",n=arguments.length>2?arguments[2]:void 0,o=e.toLocaleLowerCase().split(t).map(e=>d(e)),r={alt:o.includes("alt"),ctrl:o.includes("ctrl")||o.includes("control"),shift:o.includes("shift"),meta:o.includes("meta"),mod:o.includes("mod")},l=o.filter(e=>!s.includes(e));return{...r,keys:l,description:n,hotkey:e}}"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{void 0!==e.key&&v([d(e.key),d(e.code)])}),document.addEventListener("keyup",e=>{void 0!==e.key&&p([d(e.key),d(e.code)])})),window.addEventListener("blur",()=>{f.clear()});let f=new Set;function m(e){return Array.isArray(e)}function v(e){let t=Array.isArray(e)?e:[e];f.has("meta")&&f.forEach(e=>!s.includes(e)&&f.delete(e.toLowerCase())),t.forEach(e=>f.add(e.toLowerCase()))}function p(e){let t=Array.isArray(e)?e:[e];"meta"===e?f.clear():t.forEach(e=>f.delete(e.toLowerCase()))}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{target:n,composed:o}=e,r=null;return(r=n.tagName&&!n.tagName.startsWith("-")&&n.tagName.includes("-")&&o?e.composedPath()[0]&&e.composedPath()[0].tagName:n&&n.tagName,m(t))?!!(r&&t&&t.some(e=>e.toLowerCase()===(null==r?void 0:r.toLowerCase()))):!!(r&&t&&t)}let b=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{alt:o,meta:r,mod:l,shift:i,ctrl:a,keys:s}=t,{key:c,code:u,ctrlKey:h,metaKey:v,shiftKey:p,altKey:g}=e,b=d(u),_=c.toLowerCase();if(!(null==s?void 0:s.includes(b))&&!(null==s?void 0:s.includes(_))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(b))return!1;if(!n){if(!g===o&&"alt"!==_||!p===i&&"shift"!==_)return!1;if(l){if(!v&&!h)return!1}else if(!v===r&&"meta"!==_&&"os"!==_||!h===a&&"ctrl"!==_&&"control"!==_)return!1}return!!(s&&1===s.length&&(s.includes(_)||s.includes(b)))||(s?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return(m(e)?e:e.split(t)).every(e=>f.has(e.trim().toLowerCase()))}(s):!s)},_=(0,i.createContext)(void 0),y=()=>(0,i.useContext)(_),w=(0,i.createContext)({hotkeys:[],enabledScopes:[],toggleScope:()=>{},enableScope:()=>{},disableScope:()=>{}}),x=()=>(0,i.useContext)(w),k=e=>{e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},L=i.useLayoutEffect;function C(e,t,n,o){let[r,l]=(0,i.useState)(null),s=(0,i.useRef)(!1),c=n instanceof Array?o instanceof Array?void 0:o:n,f=m(e)?e.join(null==c?void 0:c.splitKey):e,_=n instanceof Array?n:o instanceof Array?o:void 0,w=(0,i.useCallback)(t,null!=_?_:[]),C=(0,i.useRef)(w);_?C.current=w:C.current=t;let A=function(e){let t=(0,i.useRef)(void 0);return a.bD(t.current,e)||(t.current=e),t.current}(c),{enabledScopes:j}=x(),E=y();return L(()=>{var e;if((null==A?void 0:A.enabled)===!1||(e=null==A?void 0:A.scopes,0===j.length&&e?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!1):!(!e||j.some(t=>e.includes(t))||j.includes("*"))))return;let t=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!g(e,["input","textarea","select"])||g(e,null==A?void 0:A.enableOnFormTags)){if(null!==r){let t=r.getRootNode();if((t instanceof Document||t instanceof ShadowRoot)&&t.activeElement!==r&&!r.contains(t.activeElement)){k(e);return}}(null===(t=e.target)||void 0===t||!t.isContentEditable||(null==A?void 0:A.enableOnContentEditable))&&u(f,null==A?void 0:A.splitKey).forEach(t=>{var o,r,l,i;let a=h(t,null==A?void 0:A.combinationKey);if(b(e,a,null==A?void 0:A.ignoreModifiers)||(null===(o=a.keys)||void 0===o?void 0:o.includes("*"))){if((null==A?void 0:null===(r=A.ignoreEventWhen)||void 0===r?void 0:r.call(A,e))||n&&s.current)return;if(("function"==typeof(l=null==A?void 0:A.preventDefault)&&l(e,a)||!0===l)&&e.preventDefault(),"function"==typeof(i=null==A?void 0:A.enabled)?!i(e,a):!0!==i&&void 0!==i){k(e);return}C.current(e,a),n||(s.current=!0)}})}},n=e=>{void 0!==e.key&&(v(d(e.code)),((null==A?void 0:A.keydown)===void 0&&(null==A?void 0:A.keyup)!==!0||(null==A?void 0:A.keydown))&&t(e))},o=e=>{void 0!==e.key&&(p(d(e.code)),s.current=!1,(null==A?void 0:A.keyup)&&t(e,!0))},l=r||(null==c?void 0:c.document)||document;return l.addEventListener("keyup",o),l.addEventListener("keydown",n),E&&u(f,null==A?void 0:A.splitKey).forEach(e=>E.addHotkey(h(e,null==A?void 0:A.combinationKey,null==A?void 0:A.description))),()=>{l.removeEventListener("keyup",o),l.removeEventListener("keydown",n),E&&u(f,null==A?void 0:A.splitKey).forEach(e=>E.removeHotkey(h(e,null==A?void 0:A.combinationKey,null==A?void 0:A.description)))}},[r,f,A,j]),l}var A=n(312),j=n.n(A),E=n(8404),N=n.n(E),S=n(8951),D=n.n(S);let R=i.forwardRef((e,t)=>{let{onClick:n,hotkey:r,children:l,style:i,rootStyle:s,isSelected:c}=e;return(0,o.jsxs)("div",{className:a.xW(D().root,c?D().selected:null),style:s,onClick:n,tabIndex:0,ref:t,role:"button",children:[a.Im(r)?null:(0,o.jsx)("span",{className:D().hotkey,children:r}),(0,o.jsx)("span",{className:D().content,style:i,children:l})]})});R.displayName="ActionButton";var P=n(1711),M=n.n(P),T=n(2151),O=n.n(T),I=n(2266),B=n.n(I);let H=e=>{let{href:t,target:n,onClick:r,children:l,icon:i,style:a}=e;return t?(0,o.jsxs)("a",{className:B().item,href:t,target:n,style:a,tabIndex:0,role:"link",children:[(0,o.jsx)("figure",{className:B().icon,children:i}),(0,o.jsx)("span",{className:B().text,children:l})]}):(0,o.jsxs)("div",{className:B().item,onClick:r,style:a,tabIndex:0,role:"button",children:[(0,o.jsx)("figure",{className:B().icon,children:i}),(0,o.jsx)("span",{className:B().text,children:l})]})};var W=n(8232);let K=function(e){let{children:t,modal:n,modalProps:o={}}=e,{open:r}=(0,W.U)();return i.cloneElement(t,{onClick:()=>{r(n,o)}})},q=i.forwardRef((e,t)=>{let{onClose:n,items:r,style:l,...i}=e;return C("space",()=>{n&&n()}),(0,o.jsxs)("div",{ref:t,className:O().root,style:l,...i,children:[r&&r.map((e,t)=>e.modal?(0,o.jsx)(K,{modal:e.modal,modalProps:e.modalProps,children:(0,o.jsx)(H,{children:e.children,icon:e.icon})},"action-items-".concat(t)):(0,o.jsx)(H,{children:e.children,icon:e.icon,href:e.href,target:e.target,onClick:()=>{e.onClick&&e.onClick(),n&&n()}},"action-items-".concat(t))),(0,o.jsxs)("footer",{className:O().footer,children:["Press space to"," ",(0,o.jsx)(R,{hotkey:"␣",onClick:()=>{n&&n()},children:"Close"})]})]})});q.displayName="DropdownMenu";let U=e=>{let{className:t,children:n,onOutsideEvent:r,style:l}=e,a=i.useRef(null),s=i.useCallback(e=>{e.target instanceof Element&&!e.target.hasAttribute("data-detector-ignore")&&a.current&&!a.current.contains(e.target)&&r(e)},[r]);return i.useEffect(()=>(document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}),[s]),(0,o.jsx)("div",{ref:a,className:t,style:l,children:n})};var F=n(7650);let G=function(e){let{children:t,items:n,hotkey:r}=e,[l,s]=i.useState(!1),[c,d]=i.useState(!1),[u,h]=i.useState(!1),[f,m]=i.useState("bottom"),[v,p]=i.useState({top:0,left:0}),g=i.useRef(null),b=i.useRef(null),_=i.useCallback(e=>{e.preventDefault(),s(!0)},[]),y=i.useCallback(()=>s(!1),[]),w=i.useCallback(()=>h(!0),[]);r&&C(r,()=>{s(!l)}),i.useEffect(()=>{if(c){let e=b.current;if(e){let t=a.nT(e);t?t.focus():e.focus()}d(!1)}},[c]),i.useEffect(()=>{u&&(s(!1),h(!1))},[u]),i.useEffect(()=>{if(!l||!g.current||!b.current)return;let e=()=>{let{placement:e,position:t}=function(e,t){let n,o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.scrollX,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.scrollY;e&&(n=e.getBoundingClientRect()),t&&(o=t.getBoundingClientRect());let i=n.top,a=window.innerHeight-n.bottom,s=n.left,c=window.innerWidth-n.right,d=.4*window.innerHeight,u=.4*window.innerWidth,h="bottom",f=0,m=0;return o?(i>=d&&i>=o.height?(h="top",f=n.top+l-o.height,m=n.left+r+(n.width-o.width)/2):a>=d&&a>=o.height?(h="bottom",f=n.bottom+l,m=n.left+r+(n.width-o.width)/2):c>=u&&c>=o.width?(h="right",f=n.top+l+(n.height-o.height)/2,m=n.right+r):s>=u&&s>=o.width?(h="left",f=n.top+l+(n.height-o.height)/2,m=n.left+r-o.width):(h="bottom",f=n.bottom+l,m=n.left+r+(n.width-o.width)/2),m<0?m=0:m+o.width>window.innerWidth&&(m=window.innerWidth-o.width),f<0?f=0:f+o.height>window.innerHeight+l&&(f=window.innerHeight+l-o.height),{placement:h,position:{top:f,left:m}}):{placement:h,position:{top:0,left:0}}}(g.current,b.current);m(e),p(t)};e(),d(!0);let t=()=>e(),n=new MutationObserver(()=>e());return n.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),()=>{window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0),n.disconnect()}},[l]);let x=l?(0,F.createPortal)((0,o.jsx)(U,{onOutsideEvent:y,children:(0,o.jsx)(q,{onClose:w,ref:b,items:n,style:{position:"absolute",top:"".concat(v.top,"px"),left:"".concat(v.left,"px"),zIndex:"var(--z-index-page-dropdown-menus)"},role:"dialog","aria-modal":"true"})}),document.body):null;return(0,o.jsxs)("div",{className:M().root,children:[i.cloneElement(t,{tabIndex:0,onClick:_,ref:g}),x]})},z=e=>e.items?(0,o.jsx)("div",{className:a.xW(N().root,e.isFull?N().full:null),children:e.items.map(e=>e.items?(0,o.jsx)(G,{items:e.items,hotkey:e.openHotkey,children:(0,o.jsx)(R,{hotkey:e.hotkey,isSelected:e.selected,children:e.body})},e.body):(0,o.jsx)(R,{onClick:e.onClick,hotkey:e.hotkey,isSelected:e.selected,children:e.body},e.body))}):null,V=e=>{let{items:t}=e;return(0,o.jsx)("div",{className:j().root,children:(0,o.jsx)(z,{items:t})})},Q=()=>{let e=e=>{let t=e.target;a.Bm(t)&&(e.preventDefault(),t.click())},t=e=>{let t=e.target;if(a.Bm(t)){e.preventDefault();let n=a.nL(t,"next");n&&n.focus()}},n=e=>{let t=e.target;if(a.Bm(t)){e.preventDefault();let n=a.nL(t,"previous");n&&n.focus()}};C("ArrowDown",t),C("ArrowUp",n),C("ArrowRight",t),C("ArrowLeft",n),C("Enter",e),C(" ",e)},J=e=>{let{items:t=[]}=e,[n,r]=i.useState(!1);return Q(),(0,o.jsx)("div",{className:l().root,children:(0,o.jsx)(V,{items:[{body:n?"Switch to Light Theme":"Switch to Dark Theme",onClick:()=>{r(!n),a.VR(n?"":"theme-dark")},selected:n},...t]})})}},8232:(e,t,n)=>{"use strict";n.d(t,{U:()=>a,Z:()=>i});var o=n(5155),r=n(2115);let l=r.createContext(null),i=e=>{let{children:t}=e,[n,i]=r.useState([]);return(0,o.jsx)(l.Provider,{value:{modalStack:n,open:(e,t)=>{let n="modal-".concat(Date.now(),"-").concat(Math.random()),o={key:n,component:e,props:t};return i(e=>[...e,o]),n},close:e=>{i(t=>e?t.filter(t=>t.key!==e):t.slice(0,-1))}},children:t})},a=()=>{let e=r.useContext(l);if(!e)throw Error("useModals must be used within a ModalProvider and use client");return e}},3971:()=>{},983:e=>{e.exports={flex:"Accordion_flex__NjGtE",icon:"Accordion_icon___3fpj",content:"Accordion_content__MsGhh",active:"Accordion_active__b7b8d"}},312:e=>{e.exports={root:"ActionBar_root__UG4k_"}},8951:e=>{e.exports={hotkey:"ActionButton_hotkey__H8HW0",content:"ActionButton_content__crCUa",root:"ActionButton_root__mVVS_",selected:"ActionButton_selected__DF4fS"}},2266:e=>{e.exports={item:"ActionListItem_item__rTQlb",icon:"ActionListItem_icon__VY1FA",text:"ActionListItem_text__fGsZi"}},8404:e=>{e.exports={full:"ButtonGroup_full__AQ5Wh"}},5619:e=>{e.exports={card:"Card_card__roE_8",children:"Card_children__uFd2l",action:"Card_action__5zfLi",left:"Card_left__21wPW",leftCorner:"Card_leftCorner__xOXqQ",right:"Card_right__RdLAu",rightCorner:"Card_rightCorner__HD9lr",title:"Card_title___SZ_d"}},4625:e=>{e.exports={root:"DataTable_root__dULbX",row:"DataTable_row__tr6JL",column:"DataTable_column__1giGI",changed:"DataTable_changed__xJPbK",flash:"DataTable_flash__aweyY"}},2151:e=>{e.exports={root:"DropdownMenu_root__4UyPe",footer:"DropdownMenu_footer__ulicg"}},1711:e=>{e.exports={root:"DropdownMenuTrigger_root__TR6Jx"}},9597:e=>{e.exports={grid:"Grid_grid__SyTcQ"}},9057:e=>{e.exports={row:"Row_row__w1H__"}},1801:e=>{e.exports={root:"DefaultActionBar_root__xqdtI"}},2736:e=>{e.exports={body:"DefaultLayout_body__7xiM0",pixel:"DefaultLayout_pixel__mKKBp"}}},e=>{var t=t=>e(e.s=t);e.O(0,[541,441,517,358],()=>t(519)),_N_E=e.O()}]);