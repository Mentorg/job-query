import{r as f,u as j,j as e}from"./index-gK5jVzhw.js";import{H as N,J as b}from"./JobAdvertisement-nNhrYKC8.js";import{j as w}from"./job-YlKGiUrw.js";import{c as y}from"./company-ZnYdRKnL.js";import"./Navigation-oBX10OPe.js";import"./index-mvWJ4mzR.js";import"./iconBase-2lTqbh99.js";import"./Logo-ZiuNZQrr.js";import"./index-ZQO93vGb.js";import"./useMessage-fqZmKCB9.js";import"./useNotification-RPSdD20j.js";import"./index-GsJ-QSZe.js";import"./index-Jk20eeFW.js";import"./index-xB3iB-V5.js";import"./Chip-RxkCiOL4.js";import"./useHomePageJobAds-f3gB-R0-.js";function g(s){return{searchValue:f.useMemo(()=>w.filter(o=>{const{position_title:a,location:c,work_preference:l,company_id:m}=o,n=y.find(x=>x.id===m),d=n?n.name.toLowerCase():"",p=a.toLowerCase(),u=c.toLowerCase(),h=l.toLowerCase(),i=s==null?void 0:s.toLowerCase();return p.includes(i)||u.includes(i)||h.includes(i)||d.includes(i)}),[s])}}function W(){const t=j().state,{searchValue:r}=g(t);return e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx("section",{className:"h-full bg-slate-100 py-10",children:e.jsx("div",{className:"container mx-auto px-4",children:r.length>0?e.jsx(e.Fragment,{children:r.map(o=>e.jsx(b,{job:o},o.id))}):e.jsxs("div",{className:"flex h-full flex-col items-center",children:[e.jsxs("h2",{className:"text-2xl",children:["The search ",e.jsx("span",{className:"font-semibold",children:t})," ","did not match any jobs."]}),e.jsx("p",{className:"mt-8 font-semibold",children:"Search suggestions"}),e.jsxs("ul",{className:"mt-4",children:[e.jsx("li",{className:"list-inside list-disc",children:"Try more general keywords"}),e.jsx("li",{className:"list-inside list-disc",children:"Check your spelling"}),e.jsx("li",{className:"list-inside list-disc",children:"Replace abbreviations with the entire word"})]})]})})})]})}export{W as default};