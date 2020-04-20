(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return N}));var a=n(1),s=n(7),c=n(0),o=n.n(c),r=n(125),i=n(121);var l=function(){return Object(c.useContext)(i.a)},d=n(113),b=n.n(d),u=n(106),p=n.n(u);const m=37,h=39;var v=function(e){const{block:t,children:n,defaultValue:a,values:s,groupId:r}=e,{tabGroupChoices:i,setTabGroupChoices:d}=l(),[u,v]=Object(c.useState)(a);if(null!=r){const e=i[r];null!=e&&e!==u&&v(e)}const j=e=>{v(e),null!=r&&d(r,e)},f=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:b()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:b()("tab-item",p.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case h:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},c.Children.toArray(n).filter(e=>e.props.value===u)[0]))};var j=function(e){return o.a.createElement("div",null,e.children)},f={id:"index",title:"Sandbox",sidebar_label:"Sandbox"},O={id:"index",title:"Sandbox",description:"## \u697d\u66f2\u30c7\u30fc\u30bf\u306e\u53d6\u5f97",source:"@site/docs/index.md",permalink:"/docs/docs/index",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/index.md",sidebar_label:"Sandbox"},g=[{value:"\u697d\u66f2\u30c7\u30fc\u30bf\u306e\u53d6\u5f97",id:"\u697d\u66f2\u30c7\u30fc\u30bf\u306e\u53d6\u5f97",children:[]}],x={rightToc:g};function N(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},x,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u697d\u66f2\u30c7\u30fc\u30bf\u306e\u53d6\u5f97"},"\u697d\u66f2\u30c7\u30fc\u30bf\u306e\u53d6\u5f97"),Object(r.b)(v,{defaultValue:"http",values:[{label:"HTTP",value:"http"},{label:"Node.js",value:"js"}],mdxType:"Tabs"},Object(r.b)(j,{value:"http",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl \\\n-H "Authorization: Basic " \\\n-H \'Content-Type: application/json\' \\\n-X POST \\\n-d "{ \\"query\\": \\"query { collections( range: { after: \\\\\\"0\\\\\\", first: 1 } filters: { asset_xids: { kind: \\\\\\"ISRC\\\\\\", values: { eq: [\\\\\\"DEH490100067\\\\\\"] } } } ) { edges { node { details { assets { asset { files { type download_url } } } } } } } }\\"}" \\\nhttps://dev-jpstore-242604.uc.r.appspot.com/graphql\n'))),Object(r.b)(j,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { GraphQLClient } = require('graphql-request');\n\nconst graphQLClient = new GraphQLClient('https://dev-jpstore-242604.uc.r.appspot.com/graphql', {\n  headers: {\n    authorization: 'Basic ',\n  },\n});\n\nconst query = `{\n    collections(\n      range: {\n        after: \"0\",\n        first: 1\n      }\n      filters: {\n        asset_xids: {\n          kind: \"ISRC\",\n          values: {\n            eq: [\"DEH490100067\"]\n          }\n        }\n      }\n    ) {\n      edges {\n        node {\n          details {\n              assets {\n                asset {\n                  files {\n                    type\n                    download_url\n                  }\n                }\n              }\n            }\n        }\n      }\n    }\n  }`\n  \ngraphQLClient.request(query).then(data => console.log(JSON.stringify(data)));\n")))),Object(r.b)("p",null,"\u5b9f\u884c"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Sandbox\u74b0\u5883\u306f\u5916\u90e8\u304b\u3089\u4e0d\u7528\u610f\u306b\u53e9\u304b\u308c\u306a\u3044\u3088\u3046Basic\u8a8d\u8a3c\u3092\u639b\u3051\u3066\u3044\u307e\u3059\u3002\u5b9f\u969b\u30ed\u30fc\u30ab\u30eb\u304b\u3089\u4e0a\u8a18\u306eURI\u306b\u5bfe\u3057\u3066\u30af\u30a8\u30ea\u3092\u6295\u3052\u3066\u3082\u8a8d\u8a3c\u30a8\u30e9\u30fc\u304c\u8fd4\u3063\u3066\u304f\u308b\u306e\u3067\u6ce8\u610f\u3057\u3066\u4e0b\u3055\u3044\u3002"))))}N.isMDXComponent=!0}}]);