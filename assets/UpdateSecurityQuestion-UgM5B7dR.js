import{r as f,j as s,c,T as m,B as y}from"./index-2jHbxyPx.js";import{S as _,O as j}from"./Select-4SQCZgnu.js";function N({resource:r,onResourceUpdate:h,onCloseModal:p}){const[e,u]=f.useState({current_password:"",new_password:"",confirm_password:""}),[n,l]=f.useState({});function d(a){const{name:o,value:i}=a.target,w=o==="current_password"||/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(i)?void 0:"Please enter a stronger password.";l(x=>({...x,[o]:w})),u(x=>({...x,[o]:i}))}function t(a){if(a.preventDefault(),e.current_password!==(r==null?void 0:r.password)){l(i=>({...i,current_password:"Current password is incorrect"}));return}if(e.new_password!==e.confirm_password){l(i=>({...i,confirm_password:"New password and confirm password do not match"}));return}Object.keys(n).filter(i=>n[i]).length>0||(h({password:e.new_password}),p())}return s.jsxs("form",{onSubmit:t,className:"flex flex-col md:flex-row md:gap-x-10",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"mt-4 flex flex-col gap-y-2",children:[s.jsx(c,{htmlFor:"current_password",children:"Current Password"}),s.jsx(m,{name:"current_password",type:"password",value:e.current_password,onChange:d,errors:n,hasError:!!n.current_password})]}),s.jsxs("div",{className:"mt-4 flex flex-col gap-y-2",children:[s.jsx(c,{htmlFor:"new_password",children:"New Password"}),s.jsx(m,{name:"new_password",type:"password",value:e.new_password,onChange:d,errors:n,hasError:!!n.new_password})]}),s.jsxs("div",{className:"mt-4 flex flex-col gap-y-2",children:[s.jsx(c,{htmlFor:"confirm_password",children:"Confirm New Password"}),s.jsx(m,{name:"confirm_password",type:"password",value:e.confirm_password,onChange:d,errors:n,hasError:!!n.confirm_password})]}),s.jsx(y,{className:"mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70",children:"Submit"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("h2",{className:"text-lg font-medium",children:"Instructions"}),s.jsxs("ul",{className:"mt-2",children:[s.jsx("li",{className:"list-inside list-disc text-sm",children:"At least one uppercase letter"}),s.jsx("li",{className:"list-inside list-disc text-sm",children:"At least one lowercase letter"}),s.jsx("li",{className:"list-inside list-disc text-sm",children:"At least one digit"}),s.jsx("li",{className:"list-inside list-disc text-sm",children:"Minimum length of 8 characters"})]})]})]})}function b({resource:r,onResourceUpdate:h,onCloseModal:p}){const[e,u]=f.useState({security_question:"",security_answer:""}),n=(t,a)=>t==="security_question"&&!a?"Please select an option":t==="security_answer"&&(!a||!/^[a-zA-Z\s]{4,}$/.test(a))?"Please enter a security answer with a minimum of 4 characters":null,l=t=>{const{name:a,value:o}=t.target,i=n(a,o);u(w=>({...w,[a]:i})),r&&h({...r,[a]:o})},d=t=>{t.preventDefault(),Object.keys(e).filter(o=>e[o]).length===0&&(console.log("Success"),p())};return s.jsxs("form",{onSubmit:d,children:[s.jsxs("div",{className:"mt-4 flex flex-col gap-y-2",children:[s.jsx(c,{htmlFor:"security_question",children:"Security question"}),s.jsx(_,{name:"security_question",value:r==null?void 0:r.security_question,onChange:l,errors:e,hasError:!!e.security_question,children:["What is the name of your first pet?","What city were you born in?","What is your favorite movie?","What is the name of your high school?"].map(t=>s.jsx(j,{value:t,children:t},t))})]}),s.jsxs("div",{className:"mt-4 flex flex-col gap-y-2",children:[s.jsx(c,{htmlFor:"security_answer",children:"Your answer"}),s.jsx(m,{name:"security_answer",type:"text",value:r==null?void 0:r.security_answer,onChange:l,errors:e,hasError:!!e.security_answer})]}),s.jsx(y,{className:"mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70",children:"submit"})]})}export{N as U,b as a};