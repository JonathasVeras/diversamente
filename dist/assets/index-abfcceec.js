import{r as i,u,j as e}from"./index-403726c9.js";function c(){const[r,t]=i.useState({username:"",email:"",password:"",role:""}),n=u(),s=o=>{t({...r,[o.target.name]:o.target.value})},l=o=>{o.preventDefault();let a=JSON.parse(localStorage.getItem("users"))||[];a.push(r),localStorage.setItem("users",JSON.stringify(a)),localStorage.setItem("user",JSON.stringify(r)),r.role==="aluno"?n("/aluno-menu"):r.role==="professor"&&n("/professor-menu")},d=()=>{n("/")};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-300 py-12 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-md w-full space-y-8",children:[e.jsx("div",{children:e.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign up"})}),e.jsxs("form",{className:"mt-8 space-y-6",onSubmit:l,children:[e.jsx("input",{type:"hidden",name:"remember",defaultValue:"true"}),e.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",children:"Username"}),e.jsx("input",{id:"username",name:"username",type:"text",autoComplete:"username",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Username",value:r.username,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email-address",children:"Email address"}),e.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:r.email,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",value:r.password,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"role",children:"Você é..."}),e.jsxs("select",{id:"role",name:"role",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",value:r.role,onChange:s,children:[e.jsx("option",{value:"",children:"---"}),e.jsx("option",{value:"aluno",children:"Aluno"}),e.jsx("option",{value:"professor",children:"Professor"})]})]})]}),e.jsxs("div",{children:[e.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4",children:"Sign up"}),e.jsx("button",{onClick:d,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Ir para o Login"})]})]})]})})}const p=()=>e.jsx(e.Fragment,{children:e.jsx(c,{})});export{p as default};
