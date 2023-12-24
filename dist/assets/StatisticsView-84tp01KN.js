import{_ as f,C as i,o as g,a as _,c as m,F as x,p as N,b as C,d as t,t as d,r as q,e as u,f as v}from"./index-rwc9qLl9.js";const T=a=>(N("data-v-2bf3116b"),a=a(),C(),a),S=T(()=>t("h1",{id:"header"},"Chart:",-1)),F=T(()=>t("div",{id:"chart-container"},[t("canvas",{id:"myChart"})],-1)),I={__name:"ChartComponent",props:{hobby:{type:Number,required:!0},taxes:{type:Number,required:!0},repairs:{type:Number,required:!0},housing:{type:Number,required:!0},transportation:{type:Number,required:!0},income:{type:Number,required:!0}},setup(a){const s=a;i.defaults.font.family="'Roboto', sans-serif",i.defaults.font.size=16,i.defaults.font.weight="bold",i.defaults.color="#1f2937",i.defaults.maintainAspectRatio=!1,i.defaults.responsive=!0;const l={type:"bar",data:{labels:["Hobby","Taxes","Repairs","Housing","Transportation"],datasets:[{label:"Expenses relative to total income",backgroundColor:"rgba(255, 0, 0, 0.5)",data:[]}]},options:{scales:{y:{ticks:{callback:o=>`${o}€`}}},layout:{padding:25}}};return g(()=>{setTimeout(()=>{const o=new i(document.getElementById("myChart"),l);o.config.options.scales.y.max=s.income,o.data.datasets[0].data[0]=s.hobby,o.data.datasets[0].data[1]=s.taxes,o.data.datasets[0].data[2]=s.repairs,o.data.datasets[0].data[3]=s.housing,o.data.datasets[0].data[4]=s.transportation,o.update()},100)}),(o,b)=>(_(),m(x,null,[S,F],64))}},$=f(I,[["__scopeId","data-v-2bf3116b"]]),c=a=>(N("data-v-5096ad87"),a=a(),C(),a),B=c(()=>t("h1",{id:"header"},"Spendings:",-1)),H={id:"stats-container"},M={class:"balance-container"},k=c(()=>t("h2",null,"Hobbys:",-1)),w={class:"balance-container"},R=c(()=>t("h2",null,"Taxes:",-1)),E={class:"balance-container"},V=c(()=>t("h2",null,"Repairs:",-1)),z={class:"balance-container"},A=c(()=>t("h2",null,"Housing:",-1)),D={class:"balance-container"},J=c(()=>t("h2",null,"Transportation:",-1)),O={__name:"CategoryBalance",props:{hobby:{type:Number,required:!0},taxes:{type:Number,required:!0},repairs:{type:Number,required:!0},housing:{type:Number,required:!0},transportation:{type:Number,required:!0}},setup(a){return(s,p)=>(_(),m(x,null,[B,t("div",H,[t("div",M,[k,t("h1",null,d(a.hobby)+"€",1)]),t("div",w,[R,t("h1",null,d(a.taxes)+"€",1)]),t("div",E,[V,t("h1",null,d(a.repairs)+"€",1)]),t("div",z,[A,t("h1",null,d(a.housing)+"€",1)]),t("div",D,[J,t("h1",null,d(a.transportation)+"€",1)])])],64))}},j=f(O,[["__scopeId","data-v-5096ad87"]]),G={class:"about"},L={__name:"StatisticsView",setup(a){const s=q([]);g(()=>{const e=JSON.parse(localStorage.getItem("transactions"));e&&(s.value=e)});const p=u(()=>s.value.filter(e=>e.amount>0).reduce((e,r)=>e+r.amount,0).toFixed(2)),h=u(()=>s.value.filter(e=>e.expenseType==="Hobby").reduce((e,r)=>{let n=e-r.amount;return Math.abs(n)},0).toFixed(2)),l=u(()=>s.value.filter(e=>e.expenseType==="Taxes").reduce((e,r)=>{let n=e-r.amount;return Math.abs(n)},0).toFixed(2)),o=u(()=>s.value.filter(e=>e.expenseType==="Repairs").reduce((e,r)=>{let n=e-r.amount;return Math.abs(n)},0).toFixed(2)),b=u(()=>s.value.filter(e=>e.expenseType==="Housing").reduce((e,r)=>{let n=e-r.amount;return Math.abs(n)},0).toFixed(2)),y=u(()=>s.value.filter(e=>e.expenseType==="Transportation").reduce((e,r)=>{let n=e-r.amount;return Math.abs(n)},0).toFixed(2));return(e,r)=>(_(),m("div",G,[v(j,{hobby:+h.value,taxes:+l.value,repairs:+o.value,housing:+b.value,transportation:+y.value},null,8,["hobby","taxes","repairs","housing","transportation"]),v($,{hobby:+h.value,taxes:+l.value,repairs:+o.value,housing:+b.value,transportation:+y.value,income:+p.value},null,8,["hobby","taxes","repairs","housing","transportation","income"])]))}};export{L as default};