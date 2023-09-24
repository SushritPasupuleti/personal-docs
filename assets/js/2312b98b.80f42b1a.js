"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,g=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},i="Removing a file from Git History",l={unversionedId:"git-magic/remove-file-from-history",id:"git-magic/remove-file-from-history",title:"Removing a file from Git History",description:"Usually applicable when you want to remove a committed .env file from your git history.",source:"@site/docs/git-magic/remove-file-from-history.md",sourceDirName:"git-magic",slug:"/git-magic/remove-file-from-history",permalink:"/personal-docs/docs/git-magic/remove-file-from-history",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git-magic/remove-file-from-history.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git Tricks",permalink:"/personal-docs/docs/category/git-tricks"},next:{title:"Golang",permalink:"/personal-docs/docs/category/golang"}},c={},s=[{value:"Procedure",id:"procedure",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"removing-a-file-from-git-history"},"Removing a file from Git History"),(0,n.kt)("p",null,"Usually applicable when you want to remove a committed ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file from your git history."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," This will rewrite your git history, so make sure you know what you're doing. And it is advisable to only do this, if your repo is not public (and has no changes pushed to it yet), because chances are someone has scraped or taken a look at it. Either way always regenerate any secrets/keys if exposed."),(0,n.kt)("h2",{id:"procedure"},"Procedure"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Update your ",(0,n.kt)("inlineCode",{parentName:"li"},".gitignore")," file to ignore the file you want to remove from history.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"echo '.env' >> .gitignore\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Remove file from git")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git rm --cached .env\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Remove file from git history")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Force push to remote")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git push --force\n")))}u.isMDXComponent=!0}}]);