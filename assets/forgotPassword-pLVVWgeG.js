import{_ as i,t as l,b as c,o as p,f as _,h as e,i as u,j as m,v as h,k as w,l as f,m as v,r as g,p as P,n as k}from"./index-DlV5R_sG.js";const b={data(){return{email:""}},methods:{async resetPassword(){try{await l(c,this.email),alert("Password reset email sent!")}catch(s){console.error("Password reset error:",s.message)}}}},r=s=>(P("data-v-538d6ed8"),s=s(),k(),s),x={class:"forgot-password-container"},S={class:"forgot-password-card"},y=r(()=>e("h2",null,"Forgot Password",-1)),B={class:"input-group"},I=r(()=>e("button",{type:"submit",class:"reset-button"},"Send Reset Link",-1)),V={class:"forgot-password"},E=r(()=>e("br",null,null,-1));function N(s,t,q,C,a,d){const n=g("router-link");return p(),_("div",x,[e("div",S,[y,e("form",{onSubmit:t[1]||(t[1]=u((...o)=>d.resetPassword&&d.resetPassword(...o),["prevent"]))},[e("div",B,[m(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.email=o),type:"email",placeholder:"Email",required:""},null,512),[[h,a.email]])]),I],32),e("p",V,[w(n,{to:"/app/qa_login"},{default:f(()=>[v("Back to Study Login?")]),_:1}),E])])])}const M=i(b,[["render",N],["__scopeId","data-v-538d6ed8"]]);export{M as default};
