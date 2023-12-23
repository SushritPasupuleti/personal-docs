"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={},s="OpenStreetMaps",i={unversionedId:"osm/intro",id:"osm/intro",title:"OpenStreetMaps",description:"Utilizing OpenStreetMaps data for various purposes.",source:"@site/docs/osm/intro.md",sourceDirName:"osm",slug:"/osm/intro",permalink:"/personal-docs/docs/osm/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/osm/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OSM Data Navigation",permalink:"/personal-docs/docs/osm/data-navigation"},next:{title:"Resources",permalink:"/personal-docs/docs/resources"}},p={},l=[{value:"Data Download",id:"data-download",level:2},{value:"Importing Data",id:"importing-data",level:2},{value:"Osm2pgsql",id:"osm2pgsql",level:3},{value:"Working with data - OverpassAPI",id:"working-with-data---overpassapi",level:2},{value:"OverpassQL",id:"overpassql",level:3},{value:"OverpassAPI Docker Image",id:"overpassapi-docker-image",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"openstreetmaps"},"OpenStreetMaps"),(0,n.kt)("p",null,"Utilizing OpenStreetMaps data for various purposes."),(0,n.kt)("h2",{id:"data-download"},"Data Download"),(0,n.kt)("p",null,"Download data ",(0,n.kt)("a",{parentName:"p",href:"http://www.geofabrik.de/data/"},"from")," and extract the file."),(0,n.kt)("p",null,"Includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Raw osm data"),(0,n.kt)("li",{parentName:"ul"},"Shapefiles"),(0,n.kt)("li",{parentName:"ul"},"Geocoding"),(0,n.kt)("li",{parentName:"ul"},"etc")),(0,n.kt)("h2",{id:"importing-data"},"Importing Data"),(0,n.kt)("p",null,"Create a database ",(0,n.kt)("inlineCode",{parentName:"p"},"DB_NAME")," and import the data. Make sure you have ",(0,n.kt)("inlineCode",{parentName:"p"},"postgis")," extension installed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE EXTENSION postgis;\n")),(0,n.kt)("h3",{id:"osm2pgsql"},"Osm2pgsql"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"osm2pgsql -c -d DB_NAME -U postgres -H localhost -W <path-to-osm-file>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-W")," will prompt for password.")),(0,n.kt)("h2",{id:"working-with-data---overpassapi"},"Working with data - OverpassAPI"),(0,n.kt)("h3",{id:"overpassql"},"OverpassQL"),(0,n.kt)("p",null,"References:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/engineered-publicis-sapient/osm-overpass-api-sql-for-geography-b7ec3546088d"},"OSM Overpass API: SQL for Geography"))),(0,n.kt)("h3",{id:"overpassapi-docker-image"},"OverpassAPI Docker Image"),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wiktorn/Overpass-API"},"OverpassAPI Docker Image"),"."))}d.isMDXComponent=!0}}]);