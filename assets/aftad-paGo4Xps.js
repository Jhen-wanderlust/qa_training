import{_ as f,g as m,q as w,c as _,w as g,a as v,s as x,b as c,d as k,e as C,M as y,f as E,h as o,i as S,j as a,v as n,k as T,l as b,r as q,o as B,m as I,p as V,n as U}from"./index-Chs1ejy9.js";const p=m(),D={data(){return{email:"",password:"",referralCode:"",examToken:""}},methods:{async login(){try{if(this.referralCode){const d=w(_(p,"users"),g("referralCode","==",this.referralCode));if((await v(d)).empty)throw new Error("Invalid Batch code")}else throw new Error("Batch code is required");await x(c,this.email,this.password);const r=c.currentUser,e=await k(C(p,"users",r.uid));if(!e.exists)throw new Error("User not found");const i=e.data();if(i.referralCode!==this.referralCode)throw new Error("Batch code has been updated.");if(i.exam_token!==this.examToken)throw new Error("Invalid Token");this.$router.push("/app/Courselist")}catch(r){console.error("Login error:",r.message),y.toast({html:"Contact Support "+r,classes:"red"})}}}},u=r=>(V("data-v-328784fc"),r=r(),U(),r),P={class:"login-container"},L={class:"login-card"},M=u(()=>o("h2",null,"Study Login",-1)),N={class:"input-group"},F={class:"input-group"},j={class:"input-group"},A={class:"input-group"},Q=u(()=>o("button",{type:"submit",class:"login-button"},"Login",-1)),W={class:"forgot-password"};function z(r,e,i,d,s,l){const h=q("router-link");return B(),E("div",P,[o("div",L,[M,o("form",{onSubmit:e[4]||(e[4]=S((...t)=>l.login&&l.login(...t),["prevent"]))},[o("div",N,[a(o("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.email=t),type:"email",placeholder:"Email",required:""},null,512),[[n,s.email]])]),o("div",F,[a(o("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.password=t),type:"password",placeholder:"Password",required:""},null,512),[[n,s.password]])]),o("div",j,[a(o("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.referralCode=t),type:"text",class:"referral-code",placeholder:"Batch Code",required:""},null,512),[[n,s.referralCode]])]),o("div",A,[a(o("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>s.examToken=t),type:"text",class:"exam-token",placeholder:"Token",required:""},null,512),[[n,s.examToken]])]),Q],32),o("p",W,[T(h,{to:"forgotPassword"},{default:b(()=>[I("Forgot Password?")]),_:1})])])])}const H=f(D,[["render",z],["__scopeId","data-v-328784fc"]]);export{H as default};
