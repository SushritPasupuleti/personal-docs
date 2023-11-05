"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),l=(n(7294),n(3905));const r={},a="Tool Installation",s={unversionedId:"dotnet/tool-install",id:"dotnet/tool-install",title:"Tool Installation",description:"Use this guide to locally install tools. In some cases, globally installed tools may fail to work or have different versions than the ones used for the build.",source:"@site/docs/dotnet/tool-install.md",sourceDirName:"dotnet",slug:"/dotnet/tool-install",permalink:"/personal-docs/docs/dotnet/tool-install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dotnet/tool-install.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resources for .NET and C",permalink:"/personal-docs/docs/dotnet/resources"},next:{title:"Linux",permalink:"/personal-docs/docs/category/linux"}},i={},c=[{value:"Initialize Manifest",id:"initialize-manifest",level:2},{value:"Install Tools",id:"install-tools",level:2},{value:"Run Tools",id:"run-tools",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tool-installation"},"Tool Installation"),(0,l.kt)("p",null,"Use this guide to locally install tools. In some cases, globally installed tools may fail to work or have different versions than the ones used for the build."),(0,l.kt)("h2",{id:"initialize-manifest"},"Initialize Manifest"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new tool-manifest\n")),(0,l.kt)("p",null,"This adds a ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet-tools.json")," file to the project under the ",(0,l.kt)("inlineCode",{parentName:"p"},".config")," folder."),(0,l.kt)("p",null,"Contents of ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet-tools.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "isRoot": true,\n  "tools": {}\n}\n')),(0,l.kt)("h2",{id:"install-tools"},"Install Tools"),(0,l.kt)("p",null,"For the example, let's install ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet-aspnet-codegenerator"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet tool install --local dotnet-aspnet-codegenerator\n")),(0,l.kt)("p",null,"Now the tool is installed and the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet-tools.json")," file is updated:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 1,\n  "isRoot": true,\n  "tools": {\n    "dotnet-aspnet-codegenerator": {\n      "version": "5.0.0",\n      "commands": [\n        "dotnet-aspnet-codegenerator"\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"run-tools"},"Run Tools"),(0,l.kt)("p",null,"Normally globally installed tools can be run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet")," command. Locally installed tools need to be run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet tool run")," command."),(0,l.kt)("p",null,"To run the tool, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet tool run dotnet-aspnet-codegenerator [options]\n")))}u.isMDXComponent=!0}}]);