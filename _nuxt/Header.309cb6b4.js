import{r as b,g as F,h as W,a as s,c as l,d as t,e as a,u as n,F as k,i as w,j as p,w as f,t as u,b as m,k as $,l as B,_ as q}from"./entry.2dc74bde.js";import U from"./Down.44f5ef93.js";import{_ as J}from"./Tag.vue_vue_type_script_setup_true_lang.b0a586cb.js";import K from"./User.fd7f85c9.js";import Q from"./client-only.1f024fe8.js";import X from"./Discord.f1fdd11b.js";import Y from"./ArrowLeft.282d110d.js";import{_ as Z}from"./Login.vue_vue_type_script_setup_true_lang.79b43ab3.js";import{u as R}from"./openItems.ff2daa1e.js";import{u as tt}from"./auth.26658c2c.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./PreServers.0a37393f.js";import"./Signout.853e580e.js";const A=[{name:"Home",route:"/",key:"home",left:!0},{name:"Dashboard",tag:"Beta",route:"/dashboard",key:"dash",left:!0},{name:"Commands",route:"/commands",key:"commands",left:!0},{name:"Premium",route:"https://patreon.com/discortics",key:"premium",right:!0},{name:"More",route:[{name:"Support",route:"https://discord.gg/buHBCtE",key:"support",right:!0},{name:"Status",route:"javascript:void(0)",key:"status",left:!0},{name:"Server List",route:"https://v1.discortics.com/servers",key:"not-home",left:!0},{name:"Privacy Policy",route:"/privacy",key:"privacy",left:!0},{name:"Refund Policy",route:"/refund",key:"refund",left:!0}],key:"more",right:!0}],et=t("div",{class:"h-0"},null,-1),st={class:"max-w-9xl mx-auto px-2 md:px-6 lg:px-8 md:pt-2 z-40 backdrop-blur-lg"},ot={class:"relative flex items-center justify-between h-20 z-40"},rt={class:"relative inset-y-0 left-0 flex items-center z-40"},it=t("span",{class:"sr-only"},"Open menu",-1),at={class:"block h-8 w-8",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 24","aria-hidden":"true"},lt=["d"],nt={class:"flex-1 flex flex-col z-40 lg:flex-row fixed md:static items-center md:items-stretch"},ct={class:"mt-4 lg:ml-0 lg:mt-0 flex flex-col justify-center space-y-1 lg:flex-row lg:space-y-0 lg:space-x-1 w-full"},dt={class:"flex flex-col lg:flex-row justify-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6"},ut={class:"py-1"},ft={key:1},xt=["href","onClick"],pt={class:"flex flex-row space-x-4 items-center"},mt={class:"py-1"},_t=["href"],ht={class:"py-1"},gt={class:"flex-shrink-0 flex items-center"},yt=["src"],vt={class:"flex flex-col lg:flex-row justify-end lg:items-center space-y-4 lg:space-y-0 lg:space-x-6"},bt={class:"py-1"},kt={key:1},wt=["href","onClick"],$t={class:"flex flex-row space-x-4 items-center"},At={class:"py-1"},Ct=["href"],jt={class:"py-1"},zt={class:"flex items-center transition-all duration-500 hover:transition-all space-x-3 group relative rounded-xl border border-frosty-border bg-frosty-button hover:border-discortics-blue hover:bg-discortics-blue py-3 px-6"},Mt=t("span",{class:"font-quicksand font-bold transition-all duration-500 hover:transition-all ease-in-out text-xs uppercase text-discortics-blue group-hover:text-discortics-100"},"Login",-1),Ft={__name:"Header",props:["title"],setup(x){const L=b(tt()),c=b(A.map(o=>o.key).reduce((o,v)=>(o[v]=!1,o),{}));F();const C=R(),g=W(()=>C.navOpen),j=b(null),z=b(0),V=()=>{var o;z.value=(o=j.value)==null?void 0:o.offsetTop};setInterval(()=>{V()},1e3);function P(){C.toggleNav()}function y(o){c.value[o]||T(),c.value[o]=!c.value[o]}function T(){c.value=A.map(o=>o.key).reduce((o,v)=>(o[v]=!1,o),{})}return(o,v)=>{var S;const _=q,M=U,N=J,D=K,O=Q,G=X,H=Y,I=Z;return s(),l("div",{ref_key:"header",ref:j,class:a(`
    ${n(g)?"bg-discortics-100":""}
    ${n(z)?`${n(g)?"lg:":""}bg-frosty-navbar shadow-md`:"bg-transparent"}
    max-w-full transition duration-500 ease-in-out
    fixed
    w-full
    sticky
    top-0
    z-50
  `)},[et,t("div",st,[t("div",ot,[t("div",rt,[t("button",{class:a(`
            inline-flex
            items-center
            justify-center
            p-2
            rounded-md
            text-white 
            hover:text-gold-700
           stroke-white lg:hidden stroke-[3px]
          `),onClick:P},[it,(s(),l("svg",at,[t("path",{class:"transition-all duration-500 transform ease-in-out","stroke-linecap":"round","stroke-linejoin":"round",d:n(g)?"M6 18L18 6M6 6l12 12":"M4 6h16M4 14h24M4 22h16"},null,8,lt)]))])]),t("div",nt,[t("div",{class:a(`overflow-y-auto lg:overflow-y-visible left-0 top-20 lg:top-0 z-40 block w-full dark:text-white lg:bg-none
           fixed lg:static transform transition duration-500 ease-in-out ${n(g)?"translate-x-0 bg-discortics-100 h-screen":"-translate-x-[200rem] bg-frosty-navbar"} lg:h-full lg:translate-x-0 py-4 text-sm lg:text-base text-white`)},[t("div",ct,[(s(),l("div",{class:"flex space-y-4 w-full flex-col mx-20 lg: grid lg:grid-cols-3 text-center lg:text-left lg:space-y-0 lg:justify-between",key:o.$route.path},[t("div",dt,[(s(!0),l(k,null,w(n(A).filter(d=>d.left),({name:d,route:e,key:r,tag:h})=>(s(),l("div",{class:"flex flex-row space-x-1 items-center",key:r},[typeof e=="string"&&e.startsWith("/")?(s(),p(_,{key:0,to:typeof e=="string"?e:"#",class:a((x.title===r?"text-discortics-blue ":"border-transparent ")+(Array.isArray(e)?"group ":"")+"transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4  hover:text-discortics-blue")},{default:f(()=>[t("span",ut,u(d),1)]),_:2},1032,["to","class"])):Array.isArray(e)?(s(),l("div",ft,[t("a",{href:"javascript:void(0)",onClick:i=>y(r),class:a((e.map(i=>i.key).includes(x.title)?"text-discortics-blue ":" ")+(Array.isArray(e)?"group ":"")+"relative  transition duration-500 ease-in-out tracking-wide px-3 flex flex-col space-y-4  hover:text-discortics-blue")},[t("div",pt,[t("span",mt,u(d),1),t("span",{class:a(`transition duration-500 ease-in-out block transform ${n(c)[r]?"rotate-180":"rotate-0"}`)},[m(M)],2)])],10,xt),t("div",{class:a(`
                           flex lg:absolute lg:shadow-md top-16 bg-zinc-900
                           w-48
                           overflow-y-auto
                           text-xs
                           flex-col
                           ${n(c)[r]?"py-2 max-h-[20rem]":"py-0 max-h-0"}
                           transition-all
                           duration-300
                           ease-in-out
                    `)},[(s(!0),l(k,null,w(e,i=>(s(),p(_,{key:`${r}_${i.key}`,class:a(`
                      p-2
                      flex flex-nowrap
                      ${x.title===i.key?"text-discortics-blue":"text-white"}
                      transition
                      duration-500
                      ease-in-out
                      block ml-2 py-4 text-xs hover:text-discortics-blue`),to:i.route,onClick:E=>y(r)},{default:f(()=>[$(u(i.name),1)]),_:2},1032,["class","to","onClick"]))),128))],2)])):(s(),l("a",{key:2,href:typeof e=="string"?e:"#",target:"_blank",class:a((x.title===r?"text-discortics-blue":" ")+"transition duration-500 ease-in-out tracking-wide px-3 hover:text-discortics-blue flex flex-row space-x-4")},[t("span",ht,u(d),1)],10,_t)),h?(s(),p(N,{key:3},{default:f(()=>[$(u(h),1)]),_:2},1024)):B("",!0)]))),128))]),t("div",gt,[m(_,{class:"lg:mx-auto",to:"/"},{default:f(()=>[t("img",{class:"h-16 w-auto hidden lg:block",src:"/icon.webp",alt:"Placeholder"},null,8,yt)]),_:1})]),t("div",vt,[(s(!0),l(k,null,w(n(A).filter(d=>d.right),({name:d,route:e,key:r,tag:h})=>(s(),l("div",{class:"flex flex-row space-x-1 items-center",key:r},[typeof e=="string"&&e.startsWith("/")?(s(),p(_,{key:0,to:typeof e=="string"?e:"#",class:a((x.title===r?"text-discortics-blue ":"border-transparent ")+(Array.isArray(e)?"group ":"")+"transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4  hover:text-discortics-blue")},{default:f(()=>[t("span",bt,u(d),1)]),_:2},1032,["to","class"])):Array.isArray(e)?(s(),l("div",kt,[t("a",{href:"javascript:void(0)",onClick:i=>y(r),class:a((e.map(i=>i.key).includes(x.title)?"text-discortics-blue ":" ")+(Array.isArray(e)?"group ":"")+(n(c)[r]?"text-discortics-blue ":"")+"relative  transition duration-500 ease-in-out tracking-wide px-3 flex flex-col space-y-4  hover:text-discortics-blue")},[t("div",$t,[t("span",At,u(d),1),t("span",{class:a(`transition duration-500 ease-in-out block transform ${n(c)[r]?"rotate-180":"rotate-0"}`)},[m(M)],2)])],10,wt),t("div",{class:a(`
                           flex lg:absolute lg:shadow-md top-20 bg-transparent lg:backdrop-blur-lg lg:bg-frosty-button lg:overflow-hidden lg:rounded-xl border-frosty-border
                           w-48
                           pl-4
                           overflow-y-auto
                           flex-col
                           ${n(c)[r]?"py-2 max-h-[20rem] lg:border":"py-0 max-h-0"}
                           transition-all
                           duration-300
                           ease-in-out
                    `)},[(s(!0),l(k,null,w(e,i=>(s(),p(_,{key:`${r}_${i.key}`,class:a(`
                      p-2
                      flex flex-nowrap
                      ${x.title===i.key?"text-discortics-blue":"text-white"}
                      transition
                      duration-500
                      ease-in-out
                      block ml-2 py-2 hover:text-discortics-blue`),to:i.route,onClick:E=>y(r)},{default:f(()=>[$(u(i.name),1)]),_:2},1032,["class","to","onClick"]))),128))],2)])):(s(),l("a",{key:2,href:typeof e=="string"?e:"#",target:"_blank",class:a((x.title===r?"text-discortics-blue":" ")+"transition duration-500 ease-in-out tracking-wide px-3 hover:text-discortics-blue flex flex-row space-x-4")},[t("span",jt,u(d),1)],10,Ct)),h?(s(),p(N,{key:3},{default:f(()=>[$(u(h),1)]),_:2},1024)):B("",!0)]))),128)),(S=L.value)!=null&&S.token?(s(),p(O,{key:0},{default:f(()=>[m(D)]),_:1})):(s(),p(I,{key:1},{default:f(()=>[t("button",zt,[m(G,{class:"text-discortics-blue block transition-all duration-500 hover:transition-all ease-in-out w-8 group-hover:w-0"}),Mt,m(H,{class:"transition-all duration-500 hover:transition-all w-0 text-discortics-100 block ease-in-out group-hover:w-8",size:24})])]),_:1}))])]))])],2)])])])],2)}}};export{Ft as default};
