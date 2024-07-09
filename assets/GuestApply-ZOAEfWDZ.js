import{r as p,j as e,c as n,T as t,B as y}from"./index-2jHbxyPx.js";import{N as v}from"./Navigation-_yOwdIXS.js";import{S as d,O as m}from"./Select-4SQCZgnu.js";import{u as N}from"./useHomePageJobAds-tcAHq6Ew.js";import{c as E}from"./countries-9UDgs9ZD.js";import{t as F}from"./timezones-FqJocHK0.js";import"./index-T1UflV7s.js";import"./iconBase-w4Dm8VuC.js";import"./Logo-p6cXZ-Cb.js";import"./index-JJk227B7.js";import"./useMessage-2JvDPmCB.js";import"./useNotification-2Nt5-zuU.js";import"./index-xEXlmpMs.js";import"./index-8_paQ_20.js";import"./company-dghI85Gw.js";import"./job-YlKGiUrw.js";const b=(l,r)=>{if((l==="name"||l==="address")&&(!r||!/^[a-zA-Z\s]{4,}$/.test(r)))return"Please enter a name with a minimum of 4 characters";if(l==="birthday"&&(!r||!C(r)))return"Please enter a valid date in the format YYYY-MM-DD";if(l==="phone"&&(!r||!/^\+?[0-9\s-]{8,}$/.test(r)))return"Please enter a valid phone number.";if((l==="linkedin_profile"||l==="portfolio")&&(!r||!/^(ftp|http|https):\/\/[^ "]+$/.test(r)))return"Please enter a valid URL";if(l==="city"&&(!r||!/^[a-zA-Z\s]{4,}$/.test(r)))return"Please enter a city name with a minimum of 4 characters";if(l==="email"&&(!r||!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(r)))return"Please provide a valid email address";if(!r&&["country","timezone","education_level","experience"].includes(l))return"Please select an option"},C=l=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(l))return!1;const x=new Date(l);return!isNaN(x.getTime())};function Z(){const l=new Date().toISOString().slice(0,10),[r,x]=p.useState({id:0,name:"",birthday:"",email:"",phone:"",linkedin_profile:"",portfolio:"",country:"",city:"",timezone:"",address:"",education_level:"",experience:"",created_at:l}),[s,f]=p.useState({...r}),{jobList:h}=N();function a(i){const{name:o,value:c}=i.target,u=b(o,c);f({...s,[o]:u}),x(j=>({...j,[o]:c}))}function g(i){i.preventDefault(),!(Object.keys(s).filter(c=>s[c]).length>0)&&console.log("Success")}return e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsxs("div",{className:"container mx-auto flex min-h-svh flex-col px-8 py-20 lg:p-16 xl:min-h-max xl:py-[6.75rem]",children:[e.jsx("div",{className:"flex flex-col items-center text-center",children:e.jsxs("h1",{className:"text-xl",children:["You are applying for"," ",e.jsx("span",{className:"font-medium",children:h==null?void 0:h.position_title})]})}),e.jsxs("form",{onSubmit:g,className:"mt-10 bg-slate-50 p-5 md:p-10 lg:p-16",children:[e.jsxs("div",{className:"my-8 grid grid-cols-1 gap-4 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"name",children:"Full Name"}),e.jsx(t,{name:"name",type:"text",value:r.name,onChange:a,errors:s,hasError:!!s.name})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"birthday",children:"Date of Birth"}),e.jsx(t,{name:"birthday",type:"text",value:r.birthday,onChange:a,errors:s,hasError:!!s.birthday})]})]}),e.jsxs("div",{className:"my-8 grid grid-cols-1 gap-4 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"email",children:"Email Address"}),e.jsx(t,{name:"email",type:"email",value:r.email,onChange:a,errors:s,hasError:!!s.email})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"phone",children:"Phone Number"}),e.jsx(t,{name:"phone",type:"tel",value:r.phone,onChange:a,errors:s,hasError:!!s.phone})]})]}),e.jsxs("div",{className:"my-8 grid grid-cols-1 gap-4 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"linkedin_profile",children:"Linkedin Profile"}),e.jsx(t,{name:"linkedin_profile",type:"url",value:r.linkedin_profile,onChange:a,errors:s,hasError:!!s.linkedin_profile})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"portfolio",children:"Portfolio"}),e.jsx(t,{name:"portfolio",type:"url",value:r.portfolio,onChange:a,errors:s,hasError:!!s.portfolio})]})]}),e.jsxs("div",{className:"my-8 grid grid-cols-1 gap-4 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"country",children:"Country"}),e.jsx(d,{name:"country",value:r.country,onChange:a,errors:s,hasError:!!s.country,children:E.map(i=>e.jsx(m,{value:i.name,children:i.name},i.name))})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"city",children:"City"}),e.jsx(t,{name:"city",type:"text",value:r.city,onChange:a,errors:s,hasError:!!s.city})]})]}),e.jsxs("div",{className:"my-8 grid grid-cols-1 gap-4 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"timezone",children:"Time Zone"}),e.jsx(d,{name:"timezone",value:r.timezone,onChange:a,errors:s,hasError:!!s.timezone,children:F.map(i=>e.jsx(m,{value:i,children:i},i))})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"address",children:"Address"}),e.jsx(t,{name:"address",type:"text",value:r.address,onChange:a,errors:s,hasError:!!s.address})]})]}),e.jsxs("div",{className:"my-8 grid grid-cols-1 gap-4 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"education_level",children:"Education Level"}),e.jsx(d,{name:"education_level",value:r.education_level,onChange:a,errors:s,hasError:!!s.education_level,children:["High school diploma","Bachelor's","Master's","Ph.D"].map(i=>e.jsx(m,{value:i,children:i},i))})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(n,{htmlFor:"experience",children:"Minimum Qualification Level Required (YoE)"}),e.jsx(d,{name:"experience",value:r.experience,onChange:a,errors:s,hasError:!!s.experience,children:["1 Year of Experience","2 Years of Experience","3 Years of Experience","4 Years of Experience","+5 Years of Experience"].map(i=>e.jsx(m,{value:i,children:i},i))})]})]}),e.jsx("div",{className:"my-8 flex justify-center gap-4",children:e.jsx(y,{className:"rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary/70",children:"Submit"})})]})]})]})}export{Z as default};
