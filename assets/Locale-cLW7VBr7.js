import{r as f,j as e,c as b,B as v}from"./index-gK5jVzhw.js";import{M as r,a as p,c as j}from"./Modal-CoWiFoLe.js";import{U as C}from"./UpdateLanguage-cH5jpHQH.js";import{S as N,O as w}from"./Select-TTI9W5Of.js";import{t as U}from"./timezones-FqJocHK0.js";import{c as g,u as E}from"./useAccount-7f0z_Ykj.js";import"./index-Jk20eeFW.js";import"./iconBase-2lTqbh99.js";function L({resource:s,onResourceUpdate:l,onCloseModal:o}){const[m,x]=f.useState((s==null?void 0:s.timezone)||""),[a,d]=f.useState({timezone:""});function h(t){const{name:n,value:i}=t.target;x(i);const c=!i&&"Please select an option.";d({...a,[n]:c}),l({timezone:i})}function u(t){t.preventDefault(),!(Object.keys(a).filter(i=>a[i]).length>0)&&(console.log("Success",s),o())}return e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"mt-4 flex flex-col gap-y-2",children:[e.jsx(b,{htmlFor:"timezone",children:"Time Zone"}),e.jsx(N,{name:"timezone",value:m,onChange:h,errors:a,hasError:!!a.timezone,children:U.map(t=>e.jsx(w,{value:t,children:t},t))})]}),e.jsx(v,{className:"mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70",children:"Submit"})]})}function O({resource:s,onResourceUpdate:l,onCloseModal:o}){const m=(s==null?void 0:s.currency_id)||0,[x,a]=f.useState(m),[d,h]=f.useState({currency_id:0});function u(n){const{name:i,value:c}=n.target;a(parseInt(c,10));const S=!c&&"Please select an option";h({...d,[i]:S});const y=g.find(z=>z.id===Number(c));y&&l({currency_id:y.id})}function t(n){n.preventDefault(),!(Object.keys(d).filter(c=>d[c]).length>0)&&(console.log("Success"),o())}return e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-2",children:[e.jsx(b,{htmlFor:"currency_id",children:"Currency"}),e.jsx(N,{name:"currency_id",value:x,onChange:u,errors:d,hasError:!!d.currency_id,children:g.map(n=>e.jsxs(w,{value:n.id,children:[n.symbol," - ",n.name]},n.id))})]}),e.jsx(v,{className:"mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70",children:"Submit"})]})}function k(){const{account:s,userCurrency:l,handleUpdateLanguage:o,handleUpdateTimezone:m,handleUpdateCurrency:x}=E();return e.jsxs("div",{className:"mt-10 w-full xl:w-[75%]",children:[e.jsxs("div",{className:"flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20",children:[e.jsxs("div",{className:"flex flex-[1] flex-col",children:[e.jsx("h3",{className:"font-medium",children:"Language"}),e.jsx("p",{className:"mt-2 text-sm lg:mt-6",children:"Set the preferred language for the app"})]}),e.jsx("div",{className:"flex flex-[1] justify-center",children:e.jsx("p",{children:s==null?void 0:s.language})}),e.jsx("div",{className:"flex flex-[1] justify-end gap-4",children:e.jsxs(r,{children:[e.jsx(r.Open,{opens:"edit",children:e.jsxs(p.Button,{type:"edit",children:["Edit",e.jsx("span",{children:e.jsx(j,{})})]})}),e.jsx(r.Window,{name:"edit",children:e.jsx(C,{resource:s,onResourceUpdate:o,onCloseModal:close})})]})})]}),e.jsxs("div",{className:"flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20",children:[e.jsxs("div",{className:"flex flex-[1] flex-col",children:[e.jsx("h3",{className:"font-medium",children:"Time zone"}),e.jsx("p",{className:"mt-2 text-sm lg:mt-6",children:"Select the time zone that best matches your current location"})]}),e.jsx("div",{className:"flex flex-[1] justify-center",children:e.jsx("p",{children:s==null?void 0:s.timezone})}),e.jsx("div",{className:"flex flex-[1] justify-end gap-4",children:e.jsxs(r,{children:[e.jsx(r.Open,{opens:"edit",children:e.jsxs(p.Button,{type:"edit",children:["Edit",e.jsx("span",{children:e.jsx(j,{})})]})}),e.jsx(r.Window,{name:"edit",children:e.jsx(L,{resource:s,onResourceUpdate:m,onCloseModal:close})})]})})]}),e.jsxs("div",{className:"flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20",children:[e.jsxs("div",{className:"flex flex-[1] flex-col",children:[e.jsx("h3",{className:"font-medium",children:"Base currency"}),e.jsx("p",{className:"mt-2 text-sm lg:mt-6",children:"Select the base currency for job listings and salary information."})]}),e.jsx("div",{className:"flex flex-[1] justify-center",children:e.jsxs("p",{children:[l==null?void 0:l.name," - (",l==null?void 0:l.symbol,")"]})}),e.jsx("div",{className:"flex flex-[1] justify-end gap-4",children:e.jsxs(r,{children:[e.jsx(r.Open,{opens:"edit",children:e.jsxs(p.Button,{type:"edit",children:["Edit",e.jsx("span",{children:e.jsx(j,{})})]})}),e.jsx(r.Window,{name:"edit",children:e.jsx(O,{resource:s,onResourceUpdate:x,onCloseModal:close})})]})})]})]})}export{k as default};