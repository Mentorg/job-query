import{d as h,j as e,O as u}from"./index-gK5jVzhw.js";import{M as i,N as f}from"./Navigation-oBX10OPe.js";import{a as p,b as x,c as m,d as s,e as o,f as r,H as n,g,h as w,i as v,j as a}from"./index-Jk20eeFW.js";import{b as d}from"./index-xB3iB-V5.js";import{j}from"./job-YlKGiUrw.js";import"./index-mvWJ4mzR.js";import"./iconBase-2lTqbh99.js";import"./Logo-ZiuNZQrr.js";import"./index-ZQO93vGb.js";import"./useMessage-fqZmKCB9.js";import"./useNotification-RPSdD20j.js";import"./index-GsJ-QSZe.js";function N(){const{user:t}=h(),c=j.filter(l=>l.recruiter_id===(t==null?void 0:t.id));return e.jsx("aside",{className:"hidden w-[300px] min-w-[250px] lg:flex",children:e.jsx("div",{className:"fixed top-[70px] flex h-full w-[275px] flex-col justify-between border-r-2 border-slate-200 p-4",style:{height:"calc(100dvh - 70px)"},children:(t==null?void 0:t.role)==="recruiter"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"py-2",children:[e.jsx("h4",{className:"mb-2 text-[0.65rem] font-bold uppercase text-slate-500",children:"Menu"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i,{to:"overview",children:[e.jsx(p,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Overview"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"analytics",children:[e.jsx(x,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Analytics"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"company",children:[e.jsx(m,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Company Profile"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"user",children:[e.jsx(s,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"My Profile"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"messages",children:[e.jsx(o,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Messages"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"notifications",children:[e.jsx(r,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Notifications"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"applicants",children:[e.jsx(n,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Applicants"})]})}),e.jsx("li",{children:e.jsxs(i,{to:"jobs",children:[e.jsx(g,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Jobs"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"newJob",children:[e.jsx(w,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"New Job"})]})})]})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h4",{className:"mb-2 text-[0.65rem] font-bold uppercase text-slate-500",children:"Your recent vacancies"}),e.jsx("ul",{children:c.slice(0,5).map(l=>e.jsx("li",{children:e.jsxs(i,{to:`jobs/${l.id}`,children:[e.jsx("div",{children:e.jsx(d,{className:"h-5 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"})}),e.jsxs("p",{className:"ml-2 truncate py-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:[l.position_title," "]})]})},l.id))})]})]}),e.jsxs("div",{children:[e.jsxs(i,{to:"subscription",children:[e.jsx(v,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Pricing Plans"})]}),e.jsxs(i,{to:"settings/account",children:[e.jsx(a,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Settings"})]})]})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex h-full flex-col justify-between",children:[e.jsxs("div",{className:"py-2",children:[e.jsx("h4",{className:"mb-2 text-[0.65rem] font-bold uppercase text-slate-500",children:"Menu"}),e.jsxs("ul",{children:[e.jsx("li",{className:"group",children:e.jsxs(i,{to:"profile",children:[e.jsx(s,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"My Profile"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"messages",children:[e.jsx(o,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Messages"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"notifications",children:[e.jsx(r,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Notifications"})]})}),e.jsx("li",{className:"group",children:e.jsxs(i,{to:"jobs",children:[e.jsx(s,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Jobs"})]})})]})]}),e.jsx("div",{children:e.jsxs(i,{to:"settings",children:[e.jsx(a,{className:"h-10 w-5 hover:fill-slate-500 focus:fill-slate-500 active:fill-slate-500 group-hover:fill-white group-focus:fill-white group-active:fill-white"}),e.jsx("p",{className:"ml-2 text-sm font-medium group-hover:text-white group-focus:text-white group-active:text-white",children:"Settings"})]})})]})})})})}function S(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsxs("main",{className:"flex pt-[4.5rem]",children:[e.jsx(N,{}),e.jsx(u,{})]})]})}export{S as default};