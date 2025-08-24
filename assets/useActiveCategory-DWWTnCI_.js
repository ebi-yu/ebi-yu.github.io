import{c as g}from"./index-CflADgmh.js";import{r as n}from"./ui-DWaDVKx6.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],v=g("Briefcase",s);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],x=g("CodeXml",y),C=i=>{const{containerSelector:e,targetIdPrefix:a,offset:c=20,behavior:o="smooth"}=i;return{scrollToElement:n.useCallback(m=>{const t=document.getElementById(`${a}${m}`),r=document.querySelector(e);if(t&&r){const f=r.getBoundingClientRect(),u=t.getBoundingClientRect().top-f.top+r.scrollTop-c;r.scrollTo({top:u,behavior:o})}},[e,a,c,o])}},E=(i="timeline-1",e)=>{const[a,c]=n.useState(i),{scrollToElement:o}=C({containerSelector:(e==null?void 0:e.containerSelector)||".project-list-container",targetIdPrefix:(e==null?void 0:e.targetIdPrefix)||"project-card-",offset:(e==null?void 0:e.offset)||20}),d=n.useCallback(t=>{c(t),e&&o(t)},[o,e]),m=n.useCallback(t=>{c(t)},[]);return{activeCategory:a,setActiveCategory:m,setActiveCategoryWithScroll:d}};export{v as B,x as C,E as u};
