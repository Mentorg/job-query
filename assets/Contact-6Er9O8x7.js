import{r as i,j as e,c as m,T as c,B as p}from"./index-2jHbxyPx.js";import{T as u}from"./TextArea-_A5DQQHw.js";import{N as g}from"./Navigation-_yOwdIXS.js";import"./index-T1UflV7s.js";import"./iconBase-w4Dm8VuC.js";import"./Logo-p6cXZ-Cb.js";import"./index-JJk227B7.js";import"./useMessage-2JvDPmCB.js";import"./useNotification-2Nt5-zuU.js";import"./index-xEXlmpMs.js";import"./index-8_paQ_20.js";const j=(t,a)=>{if(t==="name"&&(!a||!/^[a-zA-Z\s]{4,}$/.test(a)))return"Please enter a name with a minimum of 4 characters";if(t==="email"&&(!a||!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a)))return"Please provide a valid email address";if(t==="message"&&(!a||!/^[\s\S]{10,500}$/.test(a)))return"Please provide a company overview between 10 and 500 characters"};function P(){const[t,a]=i.useState({name:"",email:"",message:""}),[s,x]=i.useState({...t});function n(o){const{name:r,value:l}=o.target,h=j(r,l);x({...s,[r]:h}),a(f=>({...f,[r]:l}))}function d(o){o.preventDefault(),!(Object.keys(s).filter(l=>s[l]).length>0)&&console.log("Success")}return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsxs("div",{className:"container mx-auto flex min-h-svh flex-col px-8 py-20 lg:p-16 xl:min-h-max xl:py-[6.75rem]",children:[e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("h1",{className:"text-2xl font-medium md:text-3xl",children:"Get in Touch"}),e.jsx("p",{className:"mt-5 text-base",children:"Have a question, comment, or concern? We're here to help! Fill out the form below and we'll get back to you as soon as possible. Thank you for using our job board app!"})]}),e.jsxs("form",{onSubmit:d,className:"mt-10 bg-slate-50 p-5 md:p-10 lg:p-16",children:[e.jsxs("div",{className:"flex flex-col gap-5 md:gap-10 lg:flex-row",children:[e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx(m,{htmlFor:"name",children:"Name"}),e.jsx(c,{name:"name",type:"text",value:t.name,onChange:n,errors:s,hasError:!!s.name})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx(m,{htmlFor:"email",children:"Email"}),e.jsx(c,{name:"email",type:"email",value:t.email,onChange:n,errors:s,hasError:!!s.email})]})]}),e.jsxs("div",{className:"mt-5 flex w-full flex-col md:mt-10",children:[e.jsx(m,{htmlFor:"message",children:"Message"}),e.jsx(u,{name:"message",value:t.message,onChange:n,errors:s,hasError:!!s.message})]}),e.jsx("div",{className:"mt-10 flex w-full justify-center md:justify-start",children:e.jsx(p,{className:"rounded-md bg-primary px-6 py-2 text-sm text-white transition-all hover:bg-primary/70 md:text-base",children:"Send Message"})})]})]})]})}export{P as default};
