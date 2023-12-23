"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(a),k=p,g=u["".concat(i,".").concat(k)]||u[k]||c[k]||n;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,s=new Array(n);s[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:p,s[1]=o;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=a(7462),p=(a(7294),a(3905));const n={sidebar_position:1},s="References",o={unversionedId:"pass/setup",id:"pass/setup",title:"References",description:"- Official Docs",source:"@site/docs/pass/setup.md",sourceDirName:"pass",slug:"/pass/setup",permalink:"/personal-docs/docs/pass/setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pass/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Password-Store",permalink:"/personal-docs/docs/category/password-store"},next:{title:"Arduino",permalink:"/personal-docs/docs/category/arduino"}},i={},l=[{value:"Key Setup",id:"key-setup",level:2},{value:"Generate a new GPG key",id:"generate-a-new-gpg-key",level:3},{value:"Export the public key",id:"export-the-public-key",level:3},{value:"Import the public key",id:"import-the-public-key",level:3},{value:"Edit <code>trust</code> of the key",id:"edit-trust-of-the-key",level:3},{value:"Edit the expiry date of the key",id:"edit-the-expiry-date-of-the-key",level:3},{value:"<code>pass</code> Setup",id:"pass-setup",level:2},{value:"Init <code>pass</code> with the GPG key",id:"init-pass-with-the-gpg-key",level:3},{value:"Init git repo for <code>pass</code>",id:"init-git-repo-for-pass",level:3},{value:"Add a new password",id:"add-a-new-password",level:2},{value:"View a password",id:"view-a-password",level:2},{value:"Edit a password",id:"edit-a-password",level:2},{value:"Copy a password to clipboard",id:"copy-a-password-to-clipboard",level:2},{value:"Generate a new password",id:"generate-a-new-password",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...a}=e;return(0,p.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"references"},"References"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"Official Docs"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://qtpass.org/"},"GUI Client")))),(0,p.kt)("h1",{id:"setup"},"Setup"),(0,p.kt)("p",null,"The process is as follows: ",(0,p.kt)("inlineCode",{parentName:"p"},"(generate gpg key) -> (init pass with gpg key) -> (init git repo for pass)")),(0,p.kt)("h2",{id:"key-setup"},"Key Setup"),(0,p.kt)("h3",{id:"generate-a-new-gpg-key"},"Generate a new GPG key"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --full-generate-key\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note"),": Make note of the ",(0,p.kt)("inlineCode",{parentName:"p"},"uid")," as it will be required for operations."),(0,p.kt)("h3",{id:"export-the-public-key"},"Export the public key"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir exported-keys\ncd exported-keys\ngpg --output public.pgp --armor --export <uid>\ngpg --output private.pgp --armor --export-secret-key <uid>\n")),(0,p.kt)("h3",{id:"import-the-public-key"},"Import the public key"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --import public.pgp\ngpg --import private.pgp\n")),(0,p.kt)("h3",{id:"edit-trust-of-the-key"},"Edit ",(0,p.kt)("inlineCode",{parentName:"h3"},"trust")," of the key"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --edit-key <uid>\n# Enters the gpg shell\ntrust\n# Select trust value from prompt\nsave\n")),(0,p.kt)("h3",{id:"edit-the-expiry-date-of-the-key"},"Edit the expiry date of the key"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --edit-key <uid>\n# Enters the gpg shell\nexpire\n# Select expiry value from prompt\nsave\n")),(0,p.kt)("h2",{id:"pass-setup"},(0,p.kt)("inlineCode",{parentName:"h2"},"pass")," Setup"),(0,p.kt)("h3",{id:"init-pass-with-the-gpg-key"},"Init ",(0,p.kt)("inlineCode",{parentName:"h3"},"pass")," with the GPG key"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pass init <uid>\n")),(0,p.kt)("h3",{id:"init-git-repo-for-pass"},"Init git repo for ",(0,p.kt)("inlineCode",{parentName:"h3"},"pass")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pass git init\n")),(0,p.kt)("h1",{id:"usage"},"Usage"),(0,p.kt)("h2",{id:"add-a-new-password"},"Add a new password"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pass insert <path/to/password>\n# Example: pass insert github/personal\n# Example: pass insert github/work\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note"),": Avoid using ",(0,p.kt)("inlineCode",{parentName:"p"},"emails")," in the path as a safety measure."),(0,p.kt)("h2",{id:"view-a-password"},"View a password"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pass show <path/to/password>\n")),(0,p.kt)("h2",{id:"edit-a-password"},"Edit a password"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pass edit <path/to/password>\n")),(0,p.kt)("h2",{id:"copy-a-password-to-clipboard"},"Copy a password to clipboard"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pass -c <path/to/password>\n")),(0,p.kt)("h2",{id:"generate-a-new-password"},"Generate a new password"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pass generate <path/to/password> <length>\n# Example: pass generate github/personal 20\n")))}c.isMDXComponent=!0}}]);