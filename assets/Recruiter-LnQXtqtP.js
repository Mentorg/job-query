import{r as N,j as e,c as d,T as f,B as A,d as E,f as R}from"./index-2jHbxyPx.js";import{a as U}from"./index-8N1xWswI.js";import{F as C}from"./index-gR5h7Aqa.js";import{k as M,g as w,f as v,e as y}from"./index-JJk227B7.js";import{M as p,a as S,c as P}from"./Modal-izgAS3xZ.js";import{A as V}from"./AvatarUpload-Os-m0ihf.js";import{S as L,O as $}from"./Select-4SQCZgnu.js";import{T as b}from"./TextArea-_A5DQQHw.js";import{c as I}from"./countries-9UDgs9ZD.js";import{I as T}from"./index-7yxU1Okz.js";import{C as F}from"./Chip-EZOkloET.js";import{M as j}from"./Metric-fkwc5D3n.js";import{u as z}from"./useCompany-5qy1jpso.js";import{j as B}from"./job-YlKGiUrw.js";import{r as _}from"./recruiter-XSYqMn4-.js";import"./iconBase-w4Dm8VuC.js";import"./index-8_paQ_20.js";import"./LineChart-GiOMC2Lq.js";import"./company-dghI85Gw.js";const k=(s,t)=>{if(s==="name"&&(!t||!/^[a-zA-Z\s]{4,}$/.test(t)))return"Please enter a name with a minimum of 4 characters";if(s==="phone"&&(!t||!/^\+?[0-9\s-]{8,}$/.test(t)))return"Please enter a valid phone number.";if(s==="linkedin_profile"&&(!t||!/^[a-zA-Z\s]{4,}$/.test(t)))return"Please enter a link to LinkedIn profile with a minimum of 4 characters";if(s==="country"&&!t)return`Please enter an option for ${s.replace(/_/g," ")}`;if(s==="city"&&(!t||!/^[a-zA-Z\s]{4,}$/.test(t)))return"Please enter a location with a minimum of 4 characters";if(s==="expertise"&&(!t||!/^[\s\S]{10,500}$/.test(t)))return"Please provide a description of your expertise between 10 and 500 characters";if(s==="description"&&(!t||!/^[\s\S]{10,500}$/.test(t)))return"Please provide a description about you between 10 and 500 characters"};function O({profile:s,recruiter:t,onHandleProfileUpdate:l,onHandleRecruiterUpdate:x,onCloseModal:m}){const[r,o]=N.useState({avatar:"",name:"",phone:"",linkedin_profile:"",country:"",city:"",expertise:"",description:""});function a(i){const{name:n,value:c}=i.target,h=k(n,c);o({...r,[n]:h}),l({...s,[n]:c})}function u(i){const{name:n,value:c}=i.target,h=k(n,c);o({...r,[n]:h}),x({...t,[n]:c})}function g(i){i.preventDefault(),!(Object.keys(r).filter(c=>r[c]).length>0)&&(console.log("Success"),m())}return e.jsxs("form",{onSubmit:g,className:"flex flex-col gap-5 md:w-auto lg:w-auto",children:[e.jsxs("div",{className:"flex flex-col items-center gap-5",children:[e.jsx("img",{src:s==null?void 0:s.avatar,alt:"User's avatar",className:"h-[5rem] w-[5rem] rounded-full border-2 border-slate-100 p-1"}),e.jsx(V,{resource:s,onResourceUpdate:i=>l(i)}),e.jsxs("p",{className:"text-sm",children:[e.jsx("span",{className:"font-medium",children:"Note"}),": Max file size is 1MB, Minimum dimension: 136 x 136 And Suitable files are .jpg, .png & svg"]})]}),e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"flex w-full flex-col gap-y-2",children:[e.jsx(d,{htmlFor:"name",children:"Full Name"}),e.jsx(f,{name:"name",type:"text",value:s==null?void 0:s.name,onChange:a,errors:r,hasError:!!r.name})]})}),e.jsxs("div",{className:"flex flex-col gap-x-4 md:grid md:grid-cols-2",children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-2",children:[e.jsx(d,{htmlFor:"phone",children:"Phone Number"}),e.jsx(f,{name:"phone",type:"text",value:s==null?void 0:s.phone,onChange:a,errors:r,hasError:!!r.phone})]}),e.jsxs("div",{className:"flex w-full flex-col gap-y-2",children:[e.jsx(d,{htmlFor:"linkedin_profile",children:"LinkedIn Profile"}),e.jsx(f,{name:"linkedin_profile",type:"text",value:s==null?void 0:s.linkedin_profile,onChange:a,errors:r,hasError:!!r.linkedin_profile})]})]}),e.jsxs("div",{className:"flex flex-col gap-x-4 md:grid md:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(d,{htmlFor:"country",children:"Country"}),e.jsx(L,{name:"country",value:s==null?void 0:s.country,onChange:a,errors:r,hasError:!!r.country,children:I.map(i=>e.jsx($,{value:i.name,children:i.name},i.name))})]}),e.jsxs("div",{className:"flex w-full flex-col gap-y-2",children:[e.jsx(d,{htmlFor:"city",children:"City"}),e.jsx(f,{name:"city",type:"text",value:s==null?void 0:s.city,onChange:a,errors:r,hasError:!!r.city})]})]}),e.jsx("div",{className:"my-8",children:e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(d,{htmlFor:"expertise",children:"Expertise"}),e.jsx(b,{name:"expertise",value:t==null?void 0:t.expertise,onChange:u,errors:r,hasError:!!r.expertise})]})}),e.jsx("div",{className:"my-8",children:e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(d,{htmlFor:"description",children:"About Me"}),e.jsx(b,{name:"description",value:t==null?void 0:t.description,onChange:u,errors:r,hasError:!!r.description})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(A,{className:"rounded-md bg-primary px-6 py-2 text-white",children:"Confirm"})})]})}function W({team:s,user:t}){return t?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"py-4 text-xl font-medium",children:"Team"}),e.jsx("ul",{className:"flex w-full justify-center gap-10",children:s.map(l=>l.user_id!==t.id&&e.jsxs("li",{className:"flex flex-col items-center",children:[e.jsx("img",{src:l.avatar,alt:"Team member's profile picture",className:"w-fit"}),e.jsx("h4",{className:"mt-2 text-center font-medium",children:l.name})]},l.name))})]}):null}function Z({recruiterAds:s,company:t}){return t?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"py-4 text-xl font-medium",children:"Jobs Posted"}),s.map(l=>e.jsxs("div",{className:"mb-10 grid grid-cols-2 grid-rows-[1fr_1fr_auto] rounded-md border border-slate-300 px-5 py-6 sm:grid-cols-3 sm:grid-rows-[1fr_auto] sm:gap-y-4 md:grid-cols-5 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-[1fr_auto] xl:grid-cols-8 xl:grid-rows-1 xl:px-10",children:[e.jsxs("div",{className:"flex-rowlgorder-1 order-1 col-start-1 col-end-3 row-start-1 row-end-1 flex md:col-start-1 md:col-end-3 md:row-start-1 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-1 xl:col-start-1 xl:col-end-4 xl:row-start-1 xl:row-end-1",children:[e.jsx("img",{src:t==null?void 0:t.avatar,alt:`${t==null?void 0:t.name}'s logo`,className:"h-20 w-20"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h2",{className:"text-lg font-medium",children:l.position_title}),e.jsx("p",{className:"text-xs font-medium text-slate-500",children:t==null?void 0:t.name})]})]}),e.jsxs("div",{className:"order-2 col-start-1 col-end-1 row-start-2 row-end-2 flex flex-col justify-center md:col-start-3 md:col-end-3 md:row-start-1 lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-2 xl:order-2 xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-1",children:[e.jsx("h3",{className:"text-xs font-medium text-slate-500",children:"Date"}),e.jsx("p",{className:"text-sm font-medium",children:l.created_at})]}),e.jsxs("div",{className:"order-4 col-start-1 col-end-3 row-start-3 row-end-3 flex items-center gap-4 sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-2 md:col-start-4 md:col-end-5 md:row-start-1 md:flex-col md:justify-evenly md:gap-0 lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-2 lg:flex-row xl:order-3 xl:col-start-5 xl:col-end-7 xl:row-start-1 xl:row-end-1",children:[e.jsx(F,{className:"flex w-fit items-center rounded-3xl bg-blue-500 px-3 py-1",icon:e.jsx(C,{className:"text-white"}),children:l.location}),e.jsx(F,{className:"flex w-fit items-center rounded-3xl bg-red-500 px-3 py-1",icon:e.jsx(M,{className:"text-white"}),children:l.employment_type})]}),e.jsxs("div",{className:"order-3 col-start-2 col-end-2 row-start-2 row-end-2 flex w-full items-center justify-center sm:col-start-3 sm:col-end-4 sm:row-start-1 md:col-start-5 md:col-end-6 xl:order-4 xl:col-start-7 xl:col-end-9 xl:row-start-1 xl:row-end-1",children:[e.jsx(T,{className:"text-blue-500"}),e.jsx("p",{className:"h-fit text-sm text-blue-600 transition-all",children:t==null?void 0:t.website})]})]},l.id))]}):null}function D(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Jobs Posted",currentValue:"4",previousValue:"2",time:"month"}),e.jsx(j,{title:"Success Rate",currentValue:"80%",previousValue:"75%",time:"month"}),e.jsx(j,{title:"Applicants",currentValue:"200",previousValue:"180",time:"month"}),e.jsx(j,{title:"Views",currentValue:"550",previousValue:"580",time:"month"})]})}function J(){const{user:s}=E(),t=_.find(n=>n.user_id===(s==null?void 0:s.id)),[l,x]=N.useState(s),[m,r]=N.useState(t),a=_.filter(n=>n.company_id===(t==null?void 0:t.company_id)).map(n=>{const c=R.find(h=>h.id===n.user_id);return{...n,name:c?c.name:"Unknown",avatar:c?c.avatar:"Unknown"}}),u=B.filter(n=>n.recruiter_id===(s==null?void 0:s.id));function g(n){x(n)}function i(n){r(n)}return{profile:l,userData:s,recruiterData:m,recruiterAds:u,teamWithData:a,handleProfileUpdate:g,handleRecruiterUpdate:i}}function oe(){const{profile:s,userData:t,recruiterData:l,recruiterAds:x,teamWithData:m,handleProfileUpdate:r,handleRecruiterUpdate:o}=J(),{profile:a}=z();return e.jsxs("div",{className:"flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14",children:[e.jsxs("div",{className:"mt-10 flex flex-col items-center justify-center",children:[e.jsx("img",{src:s==null?void 0:s.avatar,alt:"User's avatar",className:"h-[5rem] w-[5rem] rounded-full"}),e.jsx("h1",{className:"mt-5 text-2xl font-medium",children:s==null?void 0:s.name}),e.jsx("div",{className:"flex justify-center gap-10 lg:justify-end",children:e.jsxs(p,{children:[e.jsx(p.Open,{opens:"edit",children:e.jsx(S.Button,{children:e.jsxs("span",{className:"flex items-center gap-x-2 text-xs font-medium text-green-600",children:[e.jsx(P,{}),"Edit Profile"]})})}),e.jsx(p.Window,{name:"edit",children:e.jsx(O,{profile:s,recruiter:l,onHandleProfileUpdate:r,onHandleRecruiterUpdate:o,onCloseModal:close})})]})})]}),e.jsx("div",{className:"flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:flex-row xl:flex",children:e.jsx(D,{})}),e.jsxs("div",{className:"flex flex-col gap-y-4 lg:gap-x-10 xl:flex-row",children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-4 rounded-md bg-slate-100 p-10",children:[e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("h2",{className:"text-lg font-medium",children:"Experience"}),e.jsx("p",{className:"mt-4 leading-8",children:l==null?void 0:l.expertise})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"text-lg font-medium",children:"About me"}),e.jsx("p",{className:"mt-4 leading-8",children:l==null?void 0:l.description})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-evenly gap-10 rounded-md bg-slate-100 p-10 xl:flex-col",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h2",{className:"font-medium",children:"Contact Information"}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(w,{}),e.jsx("p",{className:"ml-2",children:s==null?void 0:s.email})]}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(v,{}),e.jsx("p",{className:"ml-2",children:s==null?void 0:s.phone})]}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(C,{}),e.jsxs("p",{className:"ml-2",children:[s==null?void 0:s.city,", ",s==null?void 0:s.country]})]}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(y,{}),e.jsxs("p",{className:"ml-2",children:["@",s==null?void 0:s.linkedin_profile]})]})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h2",{className:"font-medium",children:"Company information"}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(U,{}),e.jsx("p",{className:"ml-2",children:a==null?void 0:a.name})]}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(v,{}),e.jsx("p",{className:"ml-2",children:a==null?void 0:a.phone})]}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(w,{}),e.jsx("p",{className:"ml-2",children:a==null?void 0:a.email})]}),e.jsxs("div",{className:"flex w-full items-center text-sm",children:[e.jsx(y,{}),e.jsxs("p",{className:"ml-2",children:["@",a==null?void 0:a.socials]})]})]})]})]}),e.jsx("div",{className:"mt-5 flex flex-col items-center",children:e.jsx(W,{team:m,user:t})}),e.jsx("div",{children:e.jsx(Z,{recruiterAds:x,company:a})})]})}export{oe as default};
