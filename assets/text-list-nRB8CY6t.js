import{c as l}from"./index-Bf_tA2qF.js";import{r as s,j as m}from"./ui-DWaDVKx6.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],k=l("Briefcase",u);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],T=l("CodeXml",x),h=o=>{const{containerSelector:e,targetIdPrefix:r,offset:t=20,behavior:a="smooth"}=o;return{scrollToElement:s.useCallback(i=>{const c=document.getElementById(`${r}${i}`),n=document.querySelector(e);if(c&&n){const g=n.getBoundingClientRect(),f=c.getBoundingClientRect().top-g.top+n.scrollTop-t;n.scrollTo({top:f,behavior:a})}},[e,r,t,a])}},j=(o="timeline-1",e)=>{const[r,t]=s.useState(o),{scrollToElement:a}=h({containerSelector:(e==null?void 0:e.containerSelector)||".project-list-container",targetIdPrefix:(e==null?void 0:e.targetIdPrefix)||"project-card-",offset:(e==null?void 0:e.offset)||20}),d=s.useCallback(c=>{t(c),e&&a(c)},[a,e]),i=s.useCallback(c=>{t(c)},[]);return{activeCategory:r,setActiveCategory:i,setActiveCategoryWithScroll:d}},E=({keyPrefix:o,items:e,className:r=""})=>m.jsx("div",{className:`flex flex-col gap-1 ${r}`,children:e.map((t,a)=>m.jsx("div",{className:"flex min-w-0 items-start",children:m.jsx("span",{className:"min-w-0 break-all text-size-sm",children:t})},`${o}-${a}`))});export{k as B,T as C,E as T,j as u};
