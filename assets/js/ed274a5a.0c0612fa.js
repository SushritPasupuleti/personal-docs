"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5942],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),g=o,d=m["".concat(u,".").concat(g)]||m[g]||p[g]||a;return t?r.createElement(d,c(c({ref:n},l),{},{components:t})):r.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=g;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},c="Concurrency State Management",i={unversionedId:"golang/concurrency-state-management",id:"golang/concurrency-state-management",title:"Concurrency State Management",description:"It is essential to properly manage state of an applicaton that utilizes concurrency. There are various ways to do them in Go.",source:"@site/docs/golang/concurrency-state-management.md",sourceDirName:"golang",slug:"/golang/concurrency-state-management",permalink:"/personal-docs/docs/golang/concurrency-state-management",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/golang/concurrency-state-management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web Development",permalink:"/personal-docs/docs/golang/web-dev"},next:{title:"Concurrency in Go",permalink:"/personal-docs/docs/golang/concurrency"}},u={},s=[{value:"Using <code>sync/atomic</code>",id:"using-syncatomic",level:2},{value:"Using <code>sync.Mutex</code>",id:"using-syncmutex",level:2}],l={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concurrency-state-management"},"Concurrency State Management"),(0,o.kt)("p",null,"It is essential to properly manage state of an applicaton that utilizes concurrency. There are various ways to do them in Go."),(0,o.kt)("h2",{id:"using-syncatomic"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"sync/atomic")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sync/atomic")," package provides low-level atomic memory primitives useful for implementing an atomic counter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var totalDone uint64\n\nvar wg sync.WaitGroup\n\nfor i := 0; i < 50; i++ {\n    wg.Add(1)\n    go func() {\n        atomic.AddUint64(&totalDone, 1) //increment by 1\n        wg.Done()\n    }()\n}\n\nwg.Wait()\n\nfmt.Println("Total done:", totalDone)\n')),(0,o.kt)("p",null,"This should print out ",(0,o.kt)("inlineCode",{parentName:"p"},"Total done: 50"),"."),(0,o.kt)("h2",{id:"using-syncmutex"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"sync.Mutex")),(0,o.kt)("p",null,"Mutexes can be allowed to manage more complex state and provide safe access to goroutines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'//create a container struct\ntype container struct {\n    //mutex must be added to the struct\n    //to enable locking and unlocking\n    mu sync.Mutex\n    counters map[string]int\n}\n\n//implement a method to increment a counter\nfunc (c *container) incrementCounter(key string) {\n    c.mu.Lock() //lock the mutex to prevent other goroutines from accessing the map as it is being modified\n    defer c.mu.Unlock() //unlock the mutex when the function returns\n    c.counters[key]++\n}\n\nfunc main(){\n    c := container{\n        //mutex requires no initialization\n        counters: make(map[string]int),\n    }\n\n    var wg sync.WaitGroup\n\n    incCounters := func(name string, n int) {\n        for i := 0; i < n; i++ {\n            //increment the particular counter\n            c.incrementCounter(name)\n        }\n    }\n\n    wg.Add(2)\n\n    go incCounters("foo", 50)\n    go incCounters("bar", 50)\n\n    wg.Wait()\n    fmt.Println(c.counters)\n}\n')),(0,o.kt)("p",null,"The above code should print out ",(0,o.kt)("inlineCode",{parentName:"p"},"map[bar:50 foo:50]"),". If the mutex was not used, the map would be in an inconsistent state, and the counters would not be accurate."))}p.isMDXComponent=!0}}]);