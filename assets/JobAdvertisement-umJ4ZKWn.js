import{a as h,b as i,r as p,j as e,B as c,N as g}from"./index-2jHbxyPx.js";import{N as f}from"./Navigation-_yOwdIXS.js";import{I as u}from"./index-T1UflV7s.js";import{F as w,a as j}from"./index-gR5h7Aqa.js";import{F as b,a as y,b as N}from"./index-JJk227B7.js";import{H as v}from"./index-8_paQ_20.js";import{C as n}from"./Chip-EZOkloET.js";import{u as k}from"./useHomePageJobAds-tcAHq6Ew.js";function S(){const[,s]=h(),a=i();return{search:l=>{s({q:l}),a(`/search?q=${encodeURIComponent(l)}`,{state:l})}}}function F(){const{search:s}=S(),[a,r]=p.useState(""),l=o=>{r(o.target.value)},t=o=>{o.preventDefault(),s(a)};return e.jsxs("form",{onSubmit:t,role:"search",className:"mt-5 flex w-full justify-center gap-y-4 space-x-4 px-4 md:flex-row",children:[e.jsx("input",{type:"search",id:"search",name:"search",onChange:l,placeholder:"Job title, keywords, or company",className:"h-auto w-fit truncate rounded-md border-2 border-slate-400 px-6 text-base lg:w-96 ","aria-label":"Search for jobs"}),e.jsxs(c,{className:"flex h-auto w-fit items-center rounded-md bg-primary px-8 text-base text-white transition-all hover:bg-primary/75",children:[e.jsx(u,{className:"h-10 w-10 p-2 md:h-5 md:w-5 md:p-0"}),e.jsx("span",{className:"ml-2 hidden md:flex",children:"Search"})]})]})}function R(){return e.jsxs("header",{className:"hero h-[75dvh] border-b border-b-slate-100 md:h-[50dvh] landscape:h-[100dvh] lg:landscape:h-[75dvh] 2xl:landscape:h-[50dvh]",children:[e.jsx(f,{}),e.jsx("div",{className:"h-full pt-[4.5rem]",children:e.jsxs("div",{className:"flex h-full flex-col items-center justify-center px-2",children:[e.jsx("p",{className:"text-base font-medium text-slate-600 lg:text-lg",children:"Empowering Your Career Growth"}),e.jsxs("h1",{className:"my-4 flex flex-col text-center text-3xl font-medium text-primary md:text-4xl lg:text-5xl xl:leading-[4rem]",children:["Discover Exceptional"," ",e.jsx("span",{className:"text-black",children:"Remote Job Opportunities & Talent"})]}),e.jsx("p",{className:"my-4 text-center text-base text-slate-600 lg:text-lg",children:"Explore jobs in Technology, Marketing, Finance, and more"}),e.jsx(F,{})]})})]})}function D({job:s}){const{apply:a,bookmark:r,user:l,companyList:t,handleBookmark:o,handleApply:m}=k({job:s}),x=i(),d=(t==null?void 0:t.avatar)||"../../../public/logos/default-logo.svg";return e.jsxs("article",{className:"my-4 flex flex-col items-center gap-y-4 space-x-4 rounded-xl bg-white px-3 py-7 sm:grid sm:grid-cols-3 sm:grid-rows-[1fr_auto] md:px-14 lg:grid-cols-5 lg:grid-rows-1 lg:p-5 xl:grid-cols-8 xl:gap-y-0 xl:py-7",children:[e.jsxs("div",{className:"flex flex-col items-center sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-1 sm:flex-row lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4",id:"company-title",children:[e.jsxs("div",{id:"logo",className:"flex basis-2/6 flex-col place-items-center justify-center",children:[e.jsx("img",{src:d,alt:`${t==null?void 0:t.name}'s logo`,className:"h-16 w-16 rounded-full sm:h-24 sm:w-24 lg:h-28 lg:w-28"}),e.jsx("h2",{className:"mt-2 text-center text-xs font-semibold",children:t==null?void 0:t.name})]}),e.jsxs("div",{id:"job-position",className:"flex basis-4/6 flex-col items-center sm:items-start md:ml-4",children:[e.jsx("h3",{className:"mb-2 text-center text-xl font-semibold transition-all hover:text-primary sm:text-left xl:text-xl",children:e.jsx(g,{to:`/job/${s.slug}`,children:s.position_title})}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{className:"flex w-fit items-center rounded-3xl bg-blue-500 px-3 py-1",icon:e.jsx(w,{className:"text-white"}),children:s.location}),e.jsx(n,{className:"flex w-fit items-center rounded-3xl bg-red-500 px-3 py-1",icon:e.jsx(j,{className:"text-white"}),children:s.employment_type}),e.jsx(n,{className:"flex w-fit items-center rounded-3xl bg-green-500 px-3 py-1",icon:e.jsx(b,{className:"text-white"}),children:s.work_preference})]})]})]}),e.jsx("div",{className:"row-start-5 row-end-6 flex justify-center font-medium sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-2 lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:h-full lg:items-baseline lg:pt-8 xl:col-start-4 xl:col-end-6 xl:row-start-1 xl:items-center xl:p-0",id:"position-salary",children:e.jsxs("h4",{children:[s.salary_from," - ",s.salary_to]})}),e.jsx("div",{className:"row-start-6 row-end-7 flex justify-center font-semibold text-slate-500 sm:col-start-2 sm:col-end-2 sm:row-start-2 sm:row-end-2 lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:h-full lg:items-end lg:pb-8 xl:col-start-6 xl:col-end-7 xl:row-start-1 xl:items-center xl:p-0",id:"post-time",children:e.jsx("h5",{children:s.created_at})}),e.jsx("div",{className:"row-start-7 row-end-8 m-0 flex justify-center gap-x-2 sm:col-start-3 sm:col-end-3 sm:row-start-2 sm:row-end-2 lg:col-start-5 lg:col-end-6 lg:row-start-1 lg:justify-self-end xl:col-start-7 xl:col-end-9 xl:row-start-1",id:"job-actions",children:l===null||l.role==="applicant"?e.jsxs(e.Fragment,{children:[l!==null&&!a&&e.jsx(c,{onClick:o,className:`${r?"bg-green-400 hover:bg-green-400/70":"bg-primary hover:bg-primary/70"} rounded-md px-5 py-2 transition-all sm:py-2`,children:r?e.jsx(y,{className:"text-white"}):e.jsx(N,{className:"text-white"})}),e.jsx(c,{onClick:()=>l===null?x(`/apply/${s.slug}`):m(),className:`${a?"bg-green-400 hover:bg-green-400/70":"bg-primary hover:bg-primary/70"} rounded-md px-5 py-2 text-sm text-white transition-all sm:px-8 sm:py-2`,children:a?"Applied":"Apply"})]}):e.jsx(e.Fragment,{children:e.jsxs("p",{className:"flex items-center text-base font-semibold leading-3",children:[e.jsx(v,{className:"h-[1rem] w-[1rem] text-primary"}),e.jsx("span",{className:"ml-1",children:s.applicants})]})})})]},s.id)}export{R as H,D as J};
