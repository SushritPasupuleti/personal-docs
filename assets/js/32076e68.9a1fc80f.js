"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1616],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||r;return a?o.createElement(m,l(l({ref:t},p),{},{components:a})):o.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const r={slug:"how-i-built-my-startup-as-a-solo-developer",title:"How I built my Startup as a solo developer",authors:"SushritPasupuleti",tags:["launch","guide","personal-update","announcement","fullstack","startup","mern-stack","react-js","next-js","express-js","postgresql","aws"]},l=void 0,s={permalink:"/personal-docs/blog/how-i-built-my-startup-as-a-solo-developer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/how-i-built-my-startup-as-a-solo-developer.md",source:"@site/blog/how-i-built-my-startup-as-a-solo-developer.md",title:"How I built my Startup as a solo developer",description:"This article will detail my journey from a Full Stack Engineer to Startup founder over the course of 10 months. Throughout this article I\u2019ll explain the rationale behind choosing each part of my stack and how it played out in the end.",date:"2023-02-28T13:08:04.000Z",formattedDate:"February 28, 2023",tags:[{label:"launch",permalink:"/personal-docs/blog/tags/launch"},{label:"guide",permalink:"/personal-docs/blog/tags/guide"},{label:"personal-update",permalink:"/personal-docs/blog/tags/personal-update"},{label:"announcement",permalink:"/personal-docs/blog/tags/announcement"},{label:"fullstack",permalink:"/personal-docs/blog/tags/fullstack"},{label:"startup",permalink:"/personal-docs/blog/tags/startup"},{label:"mern-stack",permalink:"/personal-docs/blog/tags/mern-stack"},{label:"react-js",permalink:"/personal-docs/blog/tags/react-js"},{label:"next-js",permalink:"/personal-docs/blog/tags/next-js"},{label:"express-js",permalink:"/personal-docs/blog/tags/express-js"},{label:"postgresql",permalink:"/personal-docs/blog/tags/postgresql"},{label:"aws",permalink:"/personal-docs/blog/tags/aws"}],readingTime:5.65,hasTruncateMarker:!1,authors:[{name:"Sushrit Pasupuleti",title:"Product Manager | Fullstack Unicorn | Coder | Blogger | Speaker | Sketcher | Entrepreneur... err \ud83e\udd14 and more \ud83d\ude43",url:"https://sushritpasupuleti.github.io/",imageURL:"https://sushritpasupuleti.github.io/assets/hero-2.jpg",key:"SushritPasupuleti"}],frontMatter:{slug:"how-i-built-my-startup-as-a-solo-developer",title:"How I built my Startup as a solo developer",authors:"SushritPasupuleti",tags:["launch","guide","personal-update","announcement","fullstack","startup","mern-stack","react-js","next-js","express-js","postgresql","aws"]},nextItem:{title:"Learn & use these 2 languages for 90% of your career and never look back",permalink:"/personal-docs/blog/learn-and-use-these-2-languages-for-90-of-your-career-and-never-look-back"}},i={authorsImageUrls:[void 0]},u=[{value:"So what is my Startup about ?",id:"so-what-is-my-startup-about-",level:2},{value:"Deciding on a Stack",id:"deciding-on-a-stack",level:2},{value:"The Stack",id:"the-stack",level:2},{value:"Why Next.js ?",id:"why-nextjs-",level:3},{value:"Authentication: next-auth",id:"authentication-next-auth",level:3},{value:"Component Library: material-ui",id:"component-library-material-ui",level:3},{value:"Admin Tools: react-admin",id:"admin-tools-react-admin",level:3},{value:"Backend: Express.js",id:"backend-expressjs",level:3},{value:"Database: PostgreSQL",id:"database-postgresql",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Closing thoughts",id:"closing-thoughts",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article will detail my journey from a Full Stack Engineer to Startup founder over the course of 10 months. Throughout this article I\u2019ll explain the rationale behind choosing each part of my stack and how it played out in the end.")),(0,n.kt)("p",null,"So strap in, it is going to be a long yet fun article!"),(0,n.kt)("blockquote",null),(0,n.kt)("h2",{id:"so-what-is-my-startup-about-"},"So what is my Startup about ?"),(0,n.kt)("p",null,"Well it took a couple weeks to get a clean pitch drafted so I\u2019ll lead with that."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"skillShack(\u26a1); is a community for software professionals looking to share the projects they are working on and get feedback. From side projects to startups!")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://braggi-free-bucket.s3.ap-south-1.amazonaws.com/banner-m-11640954836966.png",alt:"caption"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://braggi-free-bucket.s3.ap-south-1.amazonaws.com/banner-m-21640954903701.png",alt:"caption"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://braggi-free-bucket.s3.ap-south-1.amazonaws.com/banner-m-31640954903705.png",alt:"caption"})),(0,n.kt)("p",null,"With \u201cskillShack(\u26a1);\u201d I wanted to build a platform for developers to share the projects they are working on, and for those stuck in tutorial hell provide a curated list of challenges that can be built into projects to put their skills to use."),(0,n.kt)("p",null,"It has been my firm belief since the start that you can only get better at Software Development by actually DEVELOPING SOFTWARE (obvious right ?) and yet most people engage in endless sprints of watching tutorial after tutorial to add new buzz words to their Resumes. Most coding centric platforms online have catered to the problem solving aspects of programming, which while giving you a good understanding of the fundamentals of the language and engaging your intellect have diminishing returns after a while."),(0,n.kt)("p",null,"So I set out to build this platform with hopes of providing a safe space for developers to share their projects, get feedback from the community and learn from one another."),(0,n.kt)("h2",{id:"deciding-on-a-stack"},"Deciding on a Stack"),(0,n.kt)("p",null,"Once I wrote down all the features I would want to make the experience truly unique, I set out to finalise a tech stack. I needed the following attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Easy to Scale and Deploy"),(0,n.kt)("li",{parentName:"ul"},"A Good ORM with a strong API and support for formatted output on Raw Queries."),(0,n.kt)("li",{parentName:"ul"},"React on the frontend (it\u2019s 2021 or 2022 by the time you read this)"),(0,n.kt)("li",{parentName:"ul"},"Excellent SEO Support"),(0,n.kt)("li",{parentName:"ul"},"PWA Support"),(0,n.kt)("li",{parentName:"ul"},"Admin tools that were served separately from the main website"),(0,n.kt)("li",{parentName:"ul"},"Social Authentication"),(0,n.kt)("li",{parentName:"ul"},"GitHub Integration so that users can link their repositories.")),(0,n.kt)("p",null,"For each requirement I put together a list of possible technologies/frameworks."),(0,n.kt)("h2",{id:"the-stack"},"The Stack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Frontend: Next.js"),(0,n.kt)("li",{parentName:"ul"},"Backend: Express.js"),(0,n.kt)("li",{parentName:"ul"},"Database: PostgreSQL with Sequelize ORM"),(0,n.kt)("li",{parentName:"ul"},"Admin Tools: react-admin"),(0,n.kt)("li",{parentName:"ul"},"DevOps: GitHub Actions, Vercel CLI and Docker"),(0,n.kt)("li",{parentName:"ul"},"Hosting:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AWS EC2 (Backend)"),(0,n.kt)("li",{parentName:"ul"},"Vercel (Both Frontends)")))),(0,n.kt)("h3",{id:"why-nextjs-"},"Why Next.js ?"),(0,n.kt)("p",null,"As stated earlier SEO was crucial for me, and with create-react-app you subscribe to Client-Side Rendering which will not play well with Web Crawlers of Search Engines (they do not execute JS)."),(0,n.kt)("p",null,"Next.js supports SSR(Server Side Rendering), SSG (Static Site Generation) and ISR (Incremental Static Regeneration). I\u2019ll summarize each in simple terms below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SSR: Essentially serves documents with all the components rendered and populated with necessary data (from APIs). This way a bot can see all the info without the need for JavaScript execution. This makes serving pages with no real time updates like Blogs, Profile data etc simple and allows for good SEO."),(0,n.kt)("li",{parentName:"ul"},"SSG: It serves purely static pages (No API data), and offers good SEO at the same time. Useful for things like documentation."),(0,n.kt)("li",{parentName:"ul"},"ISR: It\u2019s like SSR but it periodically refreshes the static Pages with new API data. Useful for things like blogs and profiles where updates may not be frequent but do happen and must be reflected.")),(0,n.kt)("p",null,"Bonus: Next.js and Vercel have the perfect ecosystem."),(0,n.kt)("h3",{id:"authentication-next-auth"},"Authentication: next-auth"),(0,n.kt)("p",null,"It couples perfectly with Next.js, its served as a serverless function via Next.js which fully supports them and Vercel does too in production, so no extra configurations. You can even remotely monitor the function and check for errors through Vercel. It is perfect in every way, you should just look at their website to learn more."),(0,n.kt)("p",null,"The docs were simple and I was able to setup Google and GitHub authentication in under an hour (had to wait for Google to sync callback urls)."),(0,n.kt)("h3",{id:"component-library-material-ui"},"Component Library: material-ui"),(0,n.kt)("p",null,"I started the project before the Tailwind hype train hit its peak. And I did eventually try it on another project, but it\u2019s not my kind of thing. I\u2019m very good at pure CSS already so I went with material-ui, it comes with a good set of components out of the box and a few more from other community made packages like treasury, pickers etc."),(0,n.kt)("h3",{id:"admin-tools-react-admin"},"Admin Tools: react-admin"),(0,n.kt)("p",null,"It comes with a good set of tools out of the box it makes use of material-ui (so easier to customize and share components). Plus you can easily assign roles and give restricted access to different aspects of the App."),(0,n.kt)("h3",{id:"backend-expressjs"},"Backend: Express.js"),(0,n.kt)("p",null,"Express has been around since forever and it is pretty much the goto for most people. I added a few packages like express-sequelize-crud so that I could allow my admin tools to query it easily without the need for more endpoints. Secured all the endpoints with JWT authentication and setup Role Based Permissions."),(0,n.kt)("h3",{id:"database-postgresql"},"Database: PostgreSQL"),(0,n.kt)("p",null,"This project was going to have a lot of inter linked tables, so No SQL was not going to cut it. I also needed support for JSON documents to store certain nested data (Resumes). PostgreSQL also supports Full-Text Search (FTS) out of the box which made it easier to build a feature rich Search option."),(0,n.kt)("p",null,"Sequelize was good, it supported TS_Vectors out of the box which was necessary for me to build FTS supported documents. And the support for formatted Raw Queries made writing joins simpler (kind of a pain doing it through the ORM\u2019s native API)."),(0,n.kt)("h3",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"So my deployment workflow goes as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Merge a Pull Request to main to Trigger GitHub Actions."),(0,n.kt)("li",{parentName:"ul"},"Build Preview Deployments for the admin and main website on Vercel."),(0,n.kt)("li",{parentName:"ul"},"Once the Preview build is built successfully, promote it to production. (I get notifications for each step on Slack thanks to a sweet Slack Integration)."),(0,n.kt)("li",{parentName:"ul"},"In parallel a docker image is created with contents of the backend code and pushed to my EC2 instance, where its run with pm2. A script then performs necessary database migrations via sequelize-cli.")),(0,n.kt)("h2",{id:"closing-thoughts"},"Closing thoughts"),(0,n.kt)("p",null,"It was a great journey building out the whole project by myself, I learnt a lot of thing along the way including Canva and Figma. Spent a lot of time binging YC Startup School videos to figure out my pitch, website content. I also tweeted my entire journey on Twitter, which was great because I got to connect with a lot of cool people."),(0,n.kt)("p",null,"I\u2019m excited to close this article by saying skillShack(\u26a1); is live at skillshack.dev!"),(0,n.kt)("p",null,"Would love to hear your thoughts in the comments!"))}d.isMDXComponent=!0}}]);