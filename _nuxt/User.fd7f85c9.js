import m from"./Down.44f5ef93.js";import h from"./PreServers.0a37393f.js";import{r as g,s as v,a as b,c as w,d as t,u as o,b as r,e as a,t as y,w as k,k as c,_ as S}from"./entry.2dc74bde.js";import j from"./Signout.853e580e.js";import{u as N}from"./auth.26658c2c.js";import"./_plugin-vue_export-helper.a1a6add7.js";const V={id:"profile",class:"flex flex-row lg:justify-center lg:mx-auto space-x-4 items-center h-10 lg:h-16 p-2"},C={id:"profile",class:"rounded-xl relative flex flex-col"},D={class:"flex flex-row space-x-2 items-center justify-between"},B=["src"],G={class:"flex flex-row items-center py-2 justify-start"},$={class:"text-xs mx-auto text-white tet-clip overflow-hidden"},A=t("span",{class:"px-1"},"Servers",-1),O=t("span",{class:"px-1"},"Sign Out",-1),F={__name:"User",setup(U){const s=g(!1),e=N(),i=v(),l=e.avatar?"https://cdn.discordapp.com/avatars/"+e.userID+"/"+e.avatar+".webp":"/img/user_icon.webp",u=e.username||"User",n=()=>{s.value=!s.value},d=()=>{e.clear(),i.push("/")};return(z,E)=>{const _=m,p=h,f=S,x=j;return b(),w("div",V,[t("div",C,[t("div",D,[t("div",{class:"flex flex-row h-full items-center justify-center",onClick:n},[t("img",{class:"object-cover w-7 h-7 lg:w-9 lg:h-9 rounded-full",src:o(l),alt:"user icon"},null,8,B)]),t("div",{class:"text-gray-300 cursor-pointer",onClick:n},[r(_,{class:a(`${o(s)?"transform rotate-180 transition duration-500":"transition duration-500"}`)},null,8,["class"])])]),t("div",{class:a(`${o(s)?"block":"hidden"} absolute -right-36 lg:right-0 -bottom-40 flex flex-col divide-y divide-gray-600 p-2 rounded-xl w-48 transition-all
                           duration-300
                           ease-in-out bg-frosty-button border-frosty-border border backdrop-blur-lg`)},[t("div",G,[t("span",$,y(o(u)),1)]),r(f,{to:"/dashboard",id:"signout",class:"flex flex-row items-center py-2 justify-start hover:text-discortics-blue"},{default:k(()=>[r(p),c(),A]),_:1}),t("button",{onClick:d,id:"signout",class:"cursor-pointer flex flex-row items-center py-2 justify-start hover:text-discortics-blue"},[r(x),c(),O])],2)])])}}};export{F as default};
