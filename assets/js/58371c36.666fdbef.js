"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Web Development",l={unversionedId:"golang/web-dev",id:"golang/web-dev",title:"Web Development",description:"This section will house resources related to web development in Go.",source:"@site/docs/golang/web-dev.md",sourceDirName:"golang",slug:"/golang/web-dev",permalink:"/personal-docs/docs/golang/web-dev",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/golang/web-dev.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Golang",permalink:"/personal-docs/docs/category/golang"},next:{title:"Concurrency State Management",permalink:"/personal-docs/docs/golang/concurrency-state-management"}},c={},s=[{value:"Server-Side",id:"server-side",level:2},{value:"Struct Validation via <code>validator</code> - Validate structs using tags.",id:"struct-validation-via-validator---validate-structs-using-tags",level:3},{value:"RBAC, ACL, ABAC with <code>casbin</code> - Authorization library.",id:"rbac-acl-abac-with-casbin---authorization-library",level:3},{value:"http-swagger - Swagger 2.0 implementation for go-chi.",id:"http-swagger---swagger-20-implementation-for-go-chi",level:3}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-development"},"Web Development"),(0,r.kt)("p",null,"This section will house resources related to web development in Go."),(0,r.kt)("h2",{id:"server-side"},"Server-Side"),(0,r.kt)("h3",{id:"struct-validation-via-validator---validate-structs-using-tags"},(0,r.kt)("a",{parentName:"h3",href:"https://pkg.go.dev/github.com/go-playground/validator/v10"},"Struct Validation via ",(0,r.kt)("inlineCode",{parentName:"a"},"validator"))," - Validate structs using tags."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "fmt"\n  "github.com/go-playground/validator/v10"\n)\n\ntype User struct {\n  FirstName string `validate:"required"`\n  LastName  string `validate:"required"`\n  Age       int    `validate:"gte=0,lte=130"`\n  Email     string `validate:"required,email"`\n}\n\nfunc main() {\n  user := User{\n      FirstName: "John",\n      LastName:  "Doe",\n      Age:       30,\n      Email:     "doe@john.com",\n  }\n\n  validate := validator.New()\n\n  err := validate.Struct(user)\n\n  for _, err := range err.(validator.ValidationErrors) {\n      fmt.Println("Errors: ", err)\n  }\n\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Also supports adding custom ",(0,r.kt)("inlineCode",{parentName:"li"},"validator")," functions. (Ex: ",(0,r.kt)("inlineCode",{parentName:"li"},'validate:"customFunc"'),")")),(0,r.kt)("h3",{id:"rbac-acl-abac-with-casbin---authorization-library"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/casbin/casbin"},"RBAC, ACL, ABAC with ",(0,r.kt)("inlineCode",{parentName:"a"},"casbin"))," - Authorization library."),(0,r.kt)("p",null,"Define policies in a ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, /route1, GET\np, bob, /route1, POST\np, admin, /route1, *\np, admin, /route2, *\n")),(0,r.kt)("p",null,"With a ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = r.sub == p.sub && keyMatch(r.obj, p.obj) && (r.act == p.act || p.act == "*")\n')),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"enforcer")," can be created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"model.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.csv")," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/casbin/casbin/v2"\n    "github.com/casbin/casbin/v2/model"\n    "github.com/casbin/casbin/v2/persist"\n    "github.com/casbin/casbin/v2/persist/file-adapter"\n)\n\nfunc main() {\n    m, _ := model.NewModelFromFile("model.conf")\n    a, _ := fileadapter.NewAdapter("policy.csv")\n\n    e, _ := casbin.NewEnforcer(m, a)\n\n    sub := "alice"\n    obj := "/route1"\n    act := "GET"\n\n    if e.Enforce(sub, obj, act) {\n        fmt.Println("Access granted")\n    } else {\n        fmt.Println("Access denied")\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The rules can also be read from a database.")),(0,r.kt)("h3",{id:"http-swagger---swagger-20-implementation-for-go-chi"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/swaggo/http-swagger"},"http-swagger")," - Swagger 2.0 implementation for go-chi."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "net/http"\n\n    "github.com/go-chi/chi"\n    "github.com/swaggo/http-swagger/v2"\n    _ "github.com/swaggo/http-swagger/example/go-chi/docs" // docs is generated by Swag CLI, you have to import it.\n)\n\n// @title Swagger Example API\n// @version 1.0\n// @description This is a sample server Petstore server.\n// @termsOfService http://swagger.io/terms/\n\n// @contact.name API Support\n// @contact.url http://www.swagger.io/support\n// @contact.email support@swagger.io\n\n// @license.name Apache 2.0\n// @license.url http://www.apache.org/licenses/LICENSE-2.0.html\n\n// @host petstore.swagger.io\n// @BasePath /v2\nfunc main() {\n    r := chi.NewRouter()\n\n    r.Get("/swagger/*", httpSwagger.Handler(\n        httpSwagger.URL("http://localhost:5000/swagger/doc.json"), //The url pointing to API definition\n    ))\n\n    http.ListenAndServe(":5000", r)\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docs can be generated with ",(0,r.kt)("inlineCode",{parentName:"li"},"swag init"),".")))}g.isMDXComponent=!0}}]);