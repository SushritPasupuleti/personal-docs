"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1},o="Getting Started",s={unversionedId:"environment-setup/getting-started",id:"environment-setup/getting-started",title:"Getting Started",description:"By following this guide you can setup a development environment that is similar to mine. This guide is not meant to be a one size fits all solution, but rather a starting point for you to build your own development environment.",source:"@site/docs/environment-setup/getting-started.md",sourceDirName:"environment-setup",slug:"/environment-setup/getting-started",permalink:"/dots-n-docs/docs/environment-setup/getting-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/environment-setup/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Environment Setup",permalink:"/dots-n-docs/docs/category/environment-setup"},next:{title:"(Optional) Windows Development Environment",permalink:"/dots-n-docs/docs/environment-setup/windows"}},l={},p=[{value:"What&#39;s included",id:"whats-included",level:2},{value:"Custom Scripts",id:"custom-scripts",level:3},{value:"Setup",id:"setup",level:2},{value:"tmux",id:"tmux",level:3},{value:"Run Installation Scripts",id:"run-installation-scripts",level:3},{value:"Manage Exports",id:"manage-exports",level:3},{value:"Change Default Shell",id:"change-default-shell",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"By following this guide you can setup a development environment that is similar to mine. This guide is not meant to be a one size fits all solution, but rather a starting point for you to build your own development environment."),(0,i.kt)("h2",{id:"whats-included"},"What's included"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unix system Compatibile (WSL2, MacOS, Linux) dotfiles.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installation scripts via Homebrew for MacOS and Linux (partially)."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Check ",(0,i.kt)("a",{parentName:"p",href:"/docs/environment-setup/windows"},"Windows Setup")," for a Windows specific setup.")),(0,i.kt)("h3",{id:"custom-scripts"},"Custom Scripts"),(0,i.kt)("p",null,"Apart from the setup scripts, there are a few scripts that I created to make my life easier."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/sp.sh")," - fuzzy find and navigate to a given TMUX session.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/sims.sh")," - fuzzy find and start an iOS simulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/emus.sh")," - fuzzy find and start an Android simulator."))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Start by cloning the ",(0,i.kt)("inlineCode",{parentName:"p"},"dots")," repository (it is not mandatory to clone this into your home directory, setup scripts will create symlinks where appropriate):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/SushritPasupuleti/dots\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please do not clone this repo, it will most likely break your setup, this is customized for my usecases. Feel free to look around for inspiration though.")),(0,i.kt)("h3",{id:"tmux"},"tmux"),(0,i.kt)("p",null,"Setup oh-my-tmux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd\ngit clone https://github.com/gpakosz/.tmux.git\ngit clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm\n")),(0,i.kt)("h3",{id:"run-installation-scripts"},"Run Installation Scripts"),(0,i.kt)("p",null,"Setup Applications/Utilities and setup symlinks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x setup.sh\nchmod +x pre-setup.sh\n./pre-setup.sh\n./setup.sh\n")),(0,i.kt)("h3",{id:"manage-exports"},"Manage Exports"),(0,i.kt)("p",null,"Export Environment Variables in fish by creating a file at: ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/fish/conf.d/exports.fish")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-fish"},'set -gx ENV_VAR "value"\n')),(0,i.kt)("h3",{id:"change-default-shell"},"Change Default Shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chsh -s $(which fish)\n")),(0,i.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,i.kt)("p",null,"With this, you should have a working development environment."),(0,i.kt)("p",null,"Make sure to reopen your terminal to see the changes."))}m.isMDXComponent=!0}}]);