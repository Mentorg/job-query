import{j as e,B as n,L as m}from"./index-2jHbxyPx.js";import{a as h,b as g,c as y,d as f,e as u}from"./index-JJk227B7.js";import{H as N}from"./index-8_paQ_20.js";import{N as w}from"./Navigation-_yOwdIXS.js";import{u as j}from"./useHomePageJobAds-tcAHq6Ew.js";import"./iconBase-w4Dm8VuC.js";import"./index-T1UflV7s.js";import"./Logo-p6cXZ-Cb.js";import"./useMessage-2JvDPmCB.js";import"./useNotification-2Nt5-zuU.js";import"./index-xEXlmpMs.js";import"./company-dghI85Gw.js";import"./job-YlKGiUrw.js";function a({title:t,content:l}){return e.jsx("div",{className:"container mx-auto",children:e.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-12",children:[e.jsx("div",{className:"col-start-1 col-end-3",children:e.jsx("h2",{className:"text-lg font-medium",children:t})}),e.jsx("div",{className:"col-start-3 col-end-12 mt-2 lg:m-0",children:e.jsx("p",{children:l})})]})})}function S(){const{user:t,slug:l,navigate:d,apply:i,jobList:s,bookmark:x,companyData:r,advertisementText:c,handleBookmark:p,handleApply:o}=j();return e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx("section",{className:"pt-[4.5rem]",children:e.jsxs("div",{className:"container mx-auto flex h-4/5 flex-col items-center justify-between p-4 md:grid md:h-4/6 md:grid-cols-2 md:grid-rows-2 landscape:h-[85dvh] lg:landscape:h-4/5",children:[e.jsxs("div",{className:"order-first flex w-full flex-col items-center md:items-start",children:[e.jsx("h1",{className:"my-2 text-center text-3xl font-medium text-black sm:text-left sm:text-3xl lg:text-4xl",children:s==null?void 0:s.position_title}),e.jsxs("h4",{className:"text-lg text-slate-500 lg:text-xl",children:[s==null?void 0:s.salary_from," - ",s==null?void 0:s.salary_to," /"," ",e.jsx("span",{className:"text-base",children:s==null?void 0:s.salary_frequency})]}),e.jsxs("ul",{className:"my-2 flex flex-wrap justify-center divide-x divide-gray-400 text-xs font-medium tracking-widest text-slate-900 md:justify-start md:text-sm",children:[e.jsx("li",{className:"pr-2",children:r==null?void 0:r.name}),e.jsx("li",{className:"px-2",children:s==null?void 0:s.location}),e.jsx("li",{className:"px-2",children:s==null?void 0:s.employment_type}),e.jsx("li",{className:"px-2",children:s==null?void 0:s.work_preference})]})]}),e.jsx("div",{className:"order-last flex justify-center gap-x-2 sm:justify-end md:order-2",children:t===null||t.role==="applicant"?e.jsxs(e.Fragment,{children:[t!==null&&!i&&e.jsx(n,{onClick:p,className:`${x?"bg-green-400 hover:bg-green-400/70":"bg-primary hover:bg-primary/70"} rounded-md px-5 py-2 transition-all sm:py-2`,children:x?e.jsx(h,{className:"text-white"}):e.jsx(g,{className:"text-white"})}),e.jsx(n,{onClick:()=>t===null?d(`/apply/${s==null?void 0:s.slug}`):o(),className:`${i?"bg-green-400 hover:bg-green-400/70":"bg-primary hover:bg-primary/70"} rounded-md px-5 py-2 text-sm text-white transition-all sm:px-8 sm:py-2`,children:i?"Applied":"Apply"})]}):e.jsx(e.Fragment,{children:e.jsxs("p",{className:"flex items-center text-base font-semibold leading-3",children:[e.jsx(N,{className:"h-[1rem] w-[1rem] text-primary"}),e.jsx("span",{className:"ml-1",children:s==null?void 0:s.applicants})]})})}),e.jsxs("div",{className:"order-2 flex flex-wrap justify-center gap-x-4 gap-y-2 md:order-3 md:justify-start",children:[e.jsxs("p",{className:"w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm",children:[s==null?void 0:s.seniority," Level"]}),e.jsx("p",{className:"w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm",children:s==null?void 0:s.experience}),e.jsxs("p",{className:"w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm",children:[s==null?void 0:s.education," degree"]}),(s==null?void 0:s.requires_visa_sponsorship)&&e.jsx("p",{className:"w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm",children:"Visa sponsorship"}),e.jsxs("p",{className:"w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm",children:["Posted ",s==null?void 0:s.created_at]})]}),e.jsxs("div",{className:"order-3 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end md:order-4",children:[e.jsxs(m,{to:"https://www.facebook.com/sharer/sharer.php",className:"flex items-center rounded-md bg-primary/70 px-4 py-1 transition-all hover:bg-primary/65",children:[e.jsx(y,{className:"text-white"}),e.jsx("span",{className:"ml-2 text-xs text-white sm:ml-10 md:text-sm",children:"Share"})]}),e.jsxs(m,{to:`https://twitter.com/intent/tweet?text=${c}`,className:"flex items-center rounded-md bg-primary/70 px-4 py-1 transition-all hover:bg-primary/65",children:[e.jsx(f,{className:"text-white"}),e.jsx("span",{className:"ml-2 text-xs text-white sm:ml-10 md:text-sm",children:"Tweet"})]}),e.jsxs(m,{to:`https://www.linkedin.com/sharing/share-offsite/?url=${l}`,className:"flex items-center rounded-md bg-primary/70 px-4 py-1 transition-all hover:bg-primary/65",children:[e.jsx(u,{className:"text-white"}),e.jsx("span",{className:"ml-2 text-xs text-white sm:ml-10 md:text-sm",children:"Share"})]})]})]})}),e.jsx("section",{className:"h-full px-5 py-10",children:e.jsx(a,{title:"Overview",content:s==null?void 0:s.position_overview})}),e.jsx("section",{className:"h-full bg-slate-100 px-5 py-10",children:e.jsx(a,{title:"Responsibilities",content:s==null?void 0:s.responsibilities})}),e.jsx("section",{className:"h-full bg-slate-100 px-5 py-10",children:e.jsx(a,{title:"Qualifications",content:s==null?void 0:s.qualifications})}),e.jsx("section",{className:"h-full px-5 py-10",children:e.jsx(a,{title:"About the company",content:r==null?void 0:r.description})})]})}export{S as default};
