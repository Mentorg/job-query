import{b as j,j as e,r as h}from"./index-2jHbxyPx.js";import{u,E as f,V as w}from"./useFilters-kZ-vs5Xg.js";import{u as v,R as N,a as g,b as C,A as y}from"./ApplicantsTable-51YsBHoi.js";import{k as M}from"./index-8_paQ_20.js";import{M as o,a as n,L as c,b as x}from"./Modal-izgAS3xZ.js";import{b as k}from"./index-8N1xWswI.js";import{S as b}from"./StatusChip-NCCKxj9g.js";import{ApplicantContext as A}from"./ApplicantContext-femygFXx.js";import"./index-T1UflV7s.js";import"./iconBase-w4Dm8VuC.js";import"./index-xEXlmpMs.js";import"./useSortableData-yN9MNo2P.js";import"./index-gR5h7Aqa.js";import"./Chip-EZOkloET.js";import"./experience-sy-kMHdE.js";import"./TextArea-_A5DQQHw.js";import"./job-YlKGiUrw.js";import"./applicant-RmsKs6c1.js";import"./application-vugV2d0r.js";function B({applicant:i}){const{users:s,currentApplicant:r,userApplication:l,handleMarkInterview:t,handleMarkOnhold:a,handleMarkShortlisted:d,handleMarkRejected:p}=v(i),m=j();return e.jsxs("div",{className:"flex rounded-md border-2 border-slate-100 p-4",children:[e.jsxs("div",{className:"w-[90%]",children:[e.jsxs("div",{className:"flex",children:[e.jsx("img",{src:s==null?void 0:s.avatar,alt:`${s==null?void 0:s.name}'s avatar`}),e.jsxs("div",{className:"ml-4 flex min-w-0 flex-col justify-center",children:[e.jsx("h2",{className:"text-lg font-semibold",children:s==null?void 0:s.name}),e.jsx("p",{className:"truncate text-sm text-slate-500",children:s==null?void 0:s.email})]})]}),e.jsx("div",{className:"my-4 flex justify-between",children:e.jsxs("h3",{className:"mr-4 flex flex-col text-sm font-medium text-slate-500",children:["Applied for:",e.jsx("span",{className:"line-clamp-1 text-base font-medium text-primary",children:l==null?void 0:l.position_title})]})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("p",{className:"flex flex-row items-baseline text-sm",children:["Date:",e.jsx("span",{className:"ml-2 font-medium text-slate-500",children:i.created_at})]}),e.jsx(b,{children:r==null?void 0:r.status})]})]}),e.jsx("div",{className:"w-[10%]",children:e.jsx(o,{children:e.jsxs(n.Menu,{children:[e.jsx(n.Toggle,{id:i.id.toString()}),e.jsxs(n.List,{id:i.id.toString(),children:[e.jsx(o.Open,{opens:"view",children:e.jsxs(n.Button,{type:"option",children:[e.jsx(M,{}),e.jsx("span",{children:"See Details"})]})}),e.jsxs(n.Button,{type:"option",onClick:()=>m("/dashboard/messages/newMessage"),children:[e.jsx(N,{}),e.jsx("span",{children:"Contact"})]}),e.jsxs(n.Button,{type:"option",onClick:t,children:[e.jsx(c,{}),e.jsx("span",{children:"Mark as Interview"})]}),e.jsxs(n.Button,{type:"option",onClick:a,children:[e.jsx(x,{}),e.jsx("span",{children:"Mark as On Hold"})]}),e.jsxs(n.Button,{type:"option",onClick:d,children:[e.jsx(c,{}),e.jsx("span",{children:"Mark as Shortlisted"})]}),e.jsxs(n.Button,{type:"option",onClick:p,children:[e.jsx(x,{}),e.jsx("span",{children:"Mark as Rejected"})]}),e.jsx(o.Open,{opens:"addNote",children:e.jsxs(n.Button,{type:"option",children:[e.jsx(k,{}),e.jsx("span",{children:"Update Note"})]})})]}),e.jsx(o.Window,{name:"view",children:e.jsx(g,{applicant:i})}),e.jsx(o.Window,{name:"addNote",children:e.jsx(C,{applicant:i,onCloseModal:close})})]})})})]},s==null?void 0:s.id)}function E({sort:i}){const s=h.useContext(A);if(!s)throw new Error("ApplicantContext is not provided");const{filteredApplications:r}=s,l=[...r].sort((t,a)=>{switch(i){case"date-desc":return a.created_at.localeCompare(t.created_at);case"date-asc":return t.created_at.localeCompare(a.created_at);case"status-interview":return t.status==="interview"?-1:a.status==="interview"?1:0;case"status-on-hold":return t.status==="on-hold"?-1:a.status==="on-hold"?1:0;case"status-shortlisted":return t.status==="shortlisted"?-1:a.status==="shortlisted"?1:0;case"status-rejected":return t.status==="rejected"?-1:a.status==="rejected"?1:0;default:return 0}});return e.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:e.jsx(n,{children:l.map(t=>e.jsx(B,{applicant:t},t.id))})})}function K(){const{gridView:i,sort:s,applicantFilter:r,handleOrder:l,handleGridView:t}=u();return e.jsxs("div",{className:"flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14",children:[e.jsxs(f,{title:"Applicants",children:[i&&e.jsx("select",{value:s,onChange:l,className:"rounded-md border-2 px-5 py-2",children:Object.entries(r).map(([a,d])=>e.jsx("option",{value:a,children:d},a))}),e.jsx(w,{onClick:t,gridView:i})]}),i?e.jsx(E,{sort:s}):e.jsx("div",{className:"w-[90dvw] lg:w-[65dvw] xl:w-[70dvw]",children:e.jsx(y,{})})]})}export{K as default};
