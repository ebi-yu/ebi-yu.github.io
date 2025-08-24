import{c as d}from"./index-CagMUyRW.js";import{r as n}from"./ui-DWaDVKx6.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],x=d("Briefcase",s),y=i=>{const{containerSelector:e,targetIdPrefix:a,offset:c=20,behavior:r="smooth"}=i;return{scrollToElement:n.useCallback(g=>{const t=document.getElementById(`${a}${g}`),o=document.querySelector(e);if(t&&o){const u=o.getBoundingClientRect(),m=t.getBoundingClientRect().top-u.top+o.scrollTop-c;o.scrollTo({top:m,behavior:r})}},[e,a,c,r])}},E=(i="timeline-1",e)=>{const[a,c]=n.useState(i),{scrollToElement:r}=y({containerSelector:(e==null?void 0:e.containerSelector)||".project-list-container",targetIdPrefix:(e==null?void 0:e.targetIdPrefix)||"project-card-",offset:(e==null?void 0:e.offset)||20}),f=n.useCallback(t=>{c(t),e&&r(t)},[r,e]),g=n.useCallback(t=>{c(t)},[]);return{activeCategory:a,setActiveCategory:g,setActiveCategoryWithScroll:f}};export{x as B,E as u};
