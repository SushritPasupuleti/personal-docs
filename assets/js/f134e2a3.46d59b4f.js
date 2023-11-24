"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},l=void 0,o={unversionedId:"nix/nix-shell",id:"nix/nix-shell",title:"nix-shell",description:"Immediately setup an isolated environment to test packages.",source:"@site/docs/nix/nix-shell.md",sourceDirName:"nix",slug:"/nix/nix-shell",permalink:"/personal-docs/docs/nix/nix-shell",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nix/nix-shell.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Nix (Package Manager)",permalink:"/personal-docs/docs/nix/intro"},next:{title:"Useful Nix Commands (Maybe NixOS specific)",permalink:"/personal-docs/docs/nix/useful-commands"}},s={},c=[{value:"Creating a Shell Environment",id:"creating-a-shell-environment",level:2},{value:"Reproducible Shells",id:"reproducible-shells",level:2},{value:"Using Scripts",id:"using-scripts",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Immediately setup an isolated environment to test packages."),(0,i.kt)("h2",{id:"creating-a-shell-environment"},"Creating a Shell Environment"),(0,i.kt)("p",null,"This example will create a shell environment with ",(0,i.kt)("inlineCode",{parentName:"p"},"neofetch"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nix-shell -p neofetch\n")),(0,i.kt)("p",null,"Exit the shell with ",(0,i.kt)("inlineCode",{parentName:"p"},"exit"),"."),(0,i.kt)("h2",{id:"reproducible-shells"},"Reproducible Shells"),(0,i.kt)("p",null,"A package version can be specified by pointing to the source."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nix-shell -p git -I nixpkgs=https://github.com/NixOS/nixpkgs/archive/2a601aafdc5605a5133a2ca506a34a3a73377247.tar.gz\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-I")," specifies the source from where the particular version of the package must be built."),(0,i.kt)("h3",{id:"using-scripts"},"Using Scripts"),(0,i.kt)("p",null,"To create a script that spins up a ",(0,i.kt)("inlineCode",{parentName:"p"},"nix-shell"),", follow the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#!/usr/bin/env nix-shell\n#! nix-shell -i bash --pure\n#! nix-shell -p bash cowsay\n\ncowsay Hello There\n")),(0,i.kt)("p",null,"Run the script as usual."),(0,i.kt)("p",null,"This can be used to quickly run scripts with dependencies you do not want to install on your system."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--pure")," allows you to ignore most unnecessary Environment Variables from your Host system."))}d.isMDXComponent=!0}}]);