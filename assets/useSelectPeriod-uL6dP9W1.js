import{R as d,j as c,r as Z}from"./index-2jHbxyPx.js";import{u as ee,a as te,b as ae,i as x,c as ie,d as ne,e as T,w as _,g as H,f as J,h as Y,C as X,j as re,k as le,B as F,X as N,Y as W,l as ce,R,L as oe,T as q,m as Q,n as I,o as K}from"./LineChart-GiOMC2Lq.js";var se=["x1","y1","x2","y2","key"],he=["offset"];function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}function L(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,a)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?L(Object(i),!0).forEach(function(a){fe(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):L(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function fe(e,t,i){return t=ue(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ue(e){var t=de(e,"string");return w(t)=="symbol"?t:String(t)}function de(e,t){if(w(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t||"default");if(w(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},b.apply(this,arguments)}function V(e,t){if(e==null)return{};var i=ve(e,t),a,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function ve(e,t){if(e==null)return{};var i={},a=Object.keys(e),n,l;for(l=0;l<a.length;l++)n=a[l],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}var me=function(t){var i=t.fill;if(!i||i==="none")return null;var a=t.fillOpacity,n=t.x,l=t.y,o=t.width,f=t.height;return d.createElement("rect",{x:n,y:l,width:o,height:f,stroke:"none",fill:i,fillOpacity:a,className:"recharts-cartesian-grid-bg"})};function U(e,t){var i;if(d.isValidElement(e))i=d.cloneElement(e,t);else if(T(e))i=e(t);else{var a=t.x1,n=t.y1,l=t.x2,o=t.y2,f=t.key,m=V(t,se),s=re(m,!1);s.offset;var r=V(s,he);i=d.createElement("line",b({},r,{x1:a,y1:n,x2:l,y2:o,fill:"none",key:f}))}return i}function ye(e){var t=e.x,i=e.width,a=e.horizontal,n=a===void 0?!0:a,l=e.horizontalPoints;if(!n||!l||!l.length)return null;var o=l.map(function(f,m){var s=v(v({},e),{},{x1:t,y1:f,x2:t+i,y2:f,key:"line-".concat(m),index:m});return U(n,s)});return d.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function xe(e){var t=e.y,i=e.height,a=e.vertical,n=a===void 0?!0:a,l=e.verticalPoints;if(!n||!l||!l.length)return null;var o=l.map(function(f,m){var s=v(v({},e),{},{x1:f,y1:t,x2:f,y2:t+i,key:"line-".concat(m),index:m});return U(n,s)});return d.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function ge(e){var t=e.horizontalFill,i=e.fillOpacity,a=e.x,n=e.y,l=e.width,o=e.height,f=e.horizontalPoints,m=e.horizontal,s=m===void 0?!0:m;if(!s||!t||!t.length)return null;var r=f.map(function(h){return Math.round(h+n-n)}).sort(function(h,u){return h-u});n!==r[0]&&r.unshift(0);var g=r.map(function(h,u){var j=!r[u+1],y=j?n+o-h:r[u+1]-h;if(y<=0)return null;var p=u%t.length;return d.createElement("rect",{key:"react-".concat(u),y:h,x:a,height:y,width:l,stroke:"none",fill:t[p],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return d.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},g)}function pe(e){var t=e.vertical,i=t===void 0?!0:t,a=e.verticalFill,n=e.fillOpacity,l=e.x,o=e.y,f=e.width,m=e.height,s=e.verticalPoints;if(!i||!a||!a.length)return null;var r=s.map(function(h){return Math.round(h+l-l)}).sort(function(h,u){return h-u});l!==r[0]&&r.unshift(0);var g=r.map(function(h,u){var j=!r[u+1],y=j?l+f-h:r[u+1]-h;if(y<=0)return null;var p=u%a.length;return d.createElement("rect",{key:"react-".concat(u),x:h,y:o,width:y,height:m,stroke:"none",fill:a[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return d.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},g)}var be=function(t,i){var a=t.xAxis,n=t.width,l=t.height,o=t.offset;return H(J(v(v(v({},X.defaultProps),a),{},{ticks:Y(a,!0),viewBox:{x:0,y:0,width:n,height:l}})),o.left,o.left+o.width,i)},we=function(t,i){var a=t.yAxis,n=t.width,l=t.height,o=t.offset;return H(J(v(v(v({},X.defaultProps),a),{},{ticks:Y(a,!0),viewBox:{x:0,y:0,width:n,height:l}})),o.top,o.top+o.height,i)},k={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function G(e){var t,i,a,n,l,o,f=ee(),m=te(),s=ae(),r=v(v({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:k.stroke,fill:(i=e.fill)!==null&&i!==void 0?i:k.fill,horizontal:(a=e.horizontal)!==null&&a!==void 0?a:k.horizontal,horizontalFill:(n=e.horizontalFill)!==null&&n!==void 0?n:k.horizontalFill,vertical:(l=e.vertical)!==null&&l!==void 0?l:k.vertical,verticalFill:(o=e.verticalFill)!==null&&o!==void 0?o:k.verticalFill,x:x(e.x)?e.x:s.left,y:x(e.y)?e.y:s.top,width:x(e.width)?e.width:s.width,height:x(e.height)?e.height:s.height}),g=r.x,h=r.y,u=r.width,j=r.height,y=r.syncWithTicks,p=r.horizontalValues,E=r.verticalValues,O=ie(),P=ne();if(!x(u)||u<=0||!x(j)||j<=0||!x(g)||g!==+g||!x(h)||h!==+h)return null;var $=r.verticalCoordinatesGenerator||be,D=r.horizontalCoordinatesGenerator||we,A=r.horizontalPoints,z=r.verticalPoints;if((!A||!A.length)&&T(D)){var M=p&&p.length,C=D({yAxis:P?v(v({},P),{},{ticks:M?p:P.ticks}):void 0,width:f,height:m,offset:s},M?!0:y);_(Array.isArray(C),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(w(C),"]")),Array.isArray(C)&&(A=C)}if((!z||!z.length)&&T($)){var B=E&&E.length,S=$({xAxis:O?v(v({},O),{},{ticks:B?E:O.ticks}):void 0,width:f,height:m,offset:s},B?!0:y);_(Array.isArray(S),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(w(S),"]")),Array.isArray(S)&&(z=S)}return d.createElement("g",{className:"recharts-cartesian-grid"},d.createElement(me,{fill:r.fill,fillOpacity:r.fillOpacity,x:r.x,y:r.y,width:r.width,height:r.height}),d.createElement(ye,b({},r,{offset:s,horizontalPoints:A,xAxis:O,yAxis:P})),d.createElement(xe,b({},r,{offset:s,verticalPoints:z,xAxis:O,yAxis:P})),d.createElement(ge,b({},r,{horizontalPoints:A})),d.createElement(pe,b({},r,{verticalPoints:z})))}G.displayName="CartesianGrid";var je=le({chartName:"BarChart",GraphicalChild:F,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:N},{axisType:"yAxis",AxisComp:W}],formatAxisMap:ce});function Ne({period:e,onHandleChange:t}){return c.jsx("div",{children:c.jsxs("select",{value:e,onChange:t,className:"rounded-md border-2 px-5 py-2",children:[c.jsx("option",{value:"weekly",children:"This week"},"weekly"),c.jsx("option",{value:"monthly",children:"This Month"},"monthly"),c.jsx("option",{value:"annual",children:"This Year"},"annual")]})})}function ke({data:e}){return c.jsx(R,{width:"100%",height:400,children:c.jsxs(oe,{width:500,height:300,data:e,margin:{top:5,right:30,left:20,bottom:5},children:[c.jsx(G,{strokeDasharray:"3 3"}),c.jsx(N,{dataKey:"name"}),c.jsx(W,{}),c.jsx(q,{}),c.jsx(Q,{}),c.jsx(I,{type:"monotone",dataKey:"vacancies",stroke:"#8884d8",activeDot:{r:8}}),c.jsx(I,{type:"monotone",dataKey:"applicants",stroke:"#82ca9d"})]})})}function Oe({data:e}){return c.jsx(R,{width:"100%",height:400,children:c.jsxs(je,{width:500,height:300,data:e,margin:{top:5,right:30,left:20,bottom:5},children:[c.jsx(G,{strokeDasharray:"3 3"}),c.jsx(N,{dataKey:"name"}),c.jsx(W,{}),c.jsx(q,{}),c.jsx(Q,{}),c.jsx(F,{dataKey:"filled",fill:"#8884d8",activeBar:c.jsx(K,{fill:"pink",stroke:"blue"})}),c.jsx(F,{dataKey:"active",fill:"#82ca9d",activeBar:c.jsx(K,{fill:"gold",stroke:"purple"})})]})})}const Pe=[{name:"Mon",applicants:10,vacancies:5},{name:"Tue",applicants:15,vacancies:6},{name:"Wed",applicants:18,vacancies:7},{name:"Thu",applicants:12,vacancies:4},{name:"Fri",applicants:20,vacancies:8},{name:"Sat",applicants:25,vacancies:10},{name:"Sun",applicants:22,vacancies:9}],Ae=[{name:"Week 1",applicants:75,vacancies:30},{name:"Week 2",applicants:90,vacancies:36},{name:"Week 3",applicants:80,vacancies:32},{name:"Week 4",applicants:100,vacancies:40}],ze=[{name:"Jan",applicants:250,vacancies:100},{name:"Feb",applicants:280,vacancies:112},{name:"Mar",applicants:320,vacancies:128},{name:"Apr",applicants:300,vacancies:120},{name:"May",applicants:350,vacancies:140},{name:"Jun",applicants:380,vacancies:152},{name:"Jul",applicants:400,vacancies:160},{name:"Aug",applicants:430,vacancies:172},{name:"Sep",applicants:450,vacancies:180},{name:"Oct",applicants:480,vacancies:192},{name:"Nov",applicants:520,vacancies:208},{name:"Dec",applicants:550,vacancies:220}],Ce=[{name:"Mon",active:10,filled:5},{name:"Tue",active:12,filled:7},{name:"Wed",active:15,filled:9},{name:"Thu",active:14,filled:8},{name:"Fri",active:12,filled:7},{name:"Sat",active:15,filled:9},{name:"Sun",active:10,filled:5}],Se=[{name:"Week 1",active:500,filled:300},{name:"Week 2",active:600,filled:350},{name:"Week 3",active:650,filled:400},{name:"Week 4",active:650,filled:400}],Ee=[{name:"Jan",active:50,filled:30},{name:"Feb",active:60,filled:35},{name:"Mar",active:65,filled:40},{name:"Apr",active:70,filled:45},{name:"May",active:75,filled:50},{name:"Jun",active:80,filled:55},{name:"Jul",active:65,filled:40},{name:"Aug",active:70,filled:45},{name:"Sep",active:75,filled:50},{name:"Oct",active:65,filled:40},{name:"Nov",active:70,filled:45},{name:"Dec",active:75,filled:50}];function We({period:e}){return c.jsxs("div",{className:"flex flex-col gap-5 2xl:flex-row",children:[c.jsxs("div",{className:"h-full w-full rounded-md bg-slate-100 p-6",children:[c.jsx("h2",{className:"mb-4 font-semibold",children:"Applicant/Vacancy Trend"}),c.jsx(ke,{data:e==="weekly"?Pe:e==="monthly"?Ae:ze})]}),c.jsxs("div",{className:"h-full w-full rounded-md bg-slate-100 p-6",children:[c.jsx("h2",{className:"mb-4 font-semibold",children:"Active vacancies and filled vacancies"}),c.jsx(Oe,{data:e==="weekly"?Ce:e==="monthly"?Se:Ee})]})]})}function Ge(){const[e,t]=Z.useState("weekly");function i(a){t(a.target.value)}return{period:e,handleChange:i}}export{We as A,Ne as S,Ge as u};