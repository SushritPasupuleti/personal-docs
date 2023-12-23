"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9263],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),i=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=i(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return t?a.createElement(d,c(c({ref:r},p),{},{components:t})):a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8545:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(7462),n=(t(7294),t(3905));const o={},c="Remove Special Characters from Data",l={unversionedId:"sql/remove-special-chars-from-data",id:"sql/remove-special-chars-from-data",title:"Remove Special Characters from Data",description:"Problem",source:"@site/docs/sql/remove-special-chars-from-data.md",sourceDirName:"sql",slug:"/sql/remove-special-chars-from-data",permalink:"/personal-docs/docs/sql/remove-special-chars-from-data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sql/remove-special-chars-from-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Rust",permalink:"/personal-docs/docs/rust/async_rust"}},s={},i=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],p={toc:i},m="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"remove-special-characters-from-data"},"Remove Special Characters from Data"),(0,n.kt)("h2",{id:"problem"},"Problem"),(0,n.kt)("p",null,"You have a column with special characters and you want to remove them."),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"REPLACE")," function to remove the special characters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE table_name SET column_name = REPLACE(column_name, 'special_character', '');\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"--- Remove all spaces from the name column\nUPDATE users SET name = REPLACE(name, ' ', '');\n--- Remove `'` from the name column\nUPDATE users SET name = REPLACE(name, '''', '');\n")))}u.isMDXComponent=!0}}]);