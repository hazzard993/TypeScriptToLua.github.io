(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5,27],{187:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),r=a.n(n),l=a(214),c=a(218),o=a(45),i=a(293),s=a(90),m=a(2),u=a(231),d=a.n(u),p=a(393),b=a(396),f=a(397),h=a(395),g=a(239),E=a(275),v=a(99),y=a.n(v);function k({item:e,onItemClick:t,collapsible:a,activePath:l,...c}){const{items:o,href:i,label:s,type:u}=e,[p,b]=Object(n.useState)(e.collapsed),[f,h]=Object(n.useState)(null);e.collapsed!==f&&(h(e.collapsed),b(e.collapsed));const v=Object(n.useCallback)(e=>{e.preventDefault(),e.target.blur(),b(e=>!e)});switch(u){case"category":return o.length>0&&r.a.createElement("li",{className:d()("menu__list-item",{"menu__list-item--collapsed":p}),key:s},r.a.createElement("a",Object(m.a)({className:d()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!e.collapsed}),href:"#!",onClick:a?v:void 0},c),s),r.a.createElement("ul",{className:"menu__list"},o.map(e=>r.a.createElement(k,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(g.a,Object(m.a)({className:d()("menu__link",{"menu__link--active":i===l}),to:i},Object(E.a)(i)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),s))}}var O=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:l,hideOnScroll:o=!1}={}}}={},isClient:i}=Object(c.a)(),{logoLink:s,logoLinkProps:u,logoImageUrl:E,logoAlt:v}=Object(f.a)(),{isAnnouncementBarClosed:O}=Object(p.a)(),{scrollY:N}=Object(h.a)(),{docsSidebars:_,path:w,sidebar:C,sidebarCollapsible:j}=e;if(Object(b.a)(t),!C)return null;const P=_[C];if(!P)throw new Error(`Cannot find the sidebar "${C}" in the sidebar config!`);return j&&P.forEach(e=>function e(t,a){const{items:n,href:r,type:l}=t;switch(l){case"category":{const r=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!r,r}case"link":default:return r===a}}(e,w)),r.a.createElement("div",{className:d()(y.a.sidebar,{[y.a.sidebarWithHideableNavbar]:o})},o&&r.a.createElement(g.a,Object(m.a)({tabIndex:"-1",className:y.a.sidebarLogo,to:s},u),null!=E&&r.a.createElement("img",{key:i,src:E,alt:v}),null!=l&&r.a.createElement("strong",null,l)),r.a.createElement("div",{className:d()("menu","menu--responsive",y.a.menu,{"menu--show":t,[y.a.menuWithAnnouncementBar]:!O&&0===N})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?r.a.createElement("span",{className:d()(y.a.sidebarMenuIcon,y.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:y.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},P.map(e=>r.a.createElement(k,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),a(!1)},collapsible:j,activePath:w})))))},N=a(338),_=(a(100),a(101)),w=a.n(_);var C=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(c.a)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:d()("anchor",{[w.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):r.a.createElement(e,a)},j=a(102),P=a.n(j),x={code:e=>{const{children:t}=e;return"string"==typeof t?r.a.createElement(N.a,e):t},a:e=>/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(g.a,e),pre:e=>r.a.createElement("div",Object(m.a)({className:P.a.mdxCodeBlock},e)),h1:C("h1"),h2:C("h2"),h3:C("h3"),h4:C("h4"),h5:C("h5"),h6:C("h6")},I=a(390),L=a(307),T=a(103),S=a.n(T);t.default=function(e){const{route:t,docsMetadata:a,location:n,content:m}=e,{permalinkToSidebar:u,docsSidebars:d,version:p,isHomePage:b,homePagePath:f}=a,h=b?{}:t.routes.find(e=>Object(L.a)(n.pathname,e))||{},g=b?m.metadata.sidebar:u[h.path],{siteConfig:{themeConfig:{sidebarCollapsible:E=!0}={}}={},isClient:v}=Object(c.a)();return b||0!==Object.keys(h).length?r.a.createElement(i.a,{version:p,key:v},r.a.createElement("div",{className:S.a.docPage},g&&r.a.createElement("div",{className:S.a.docSidebarContainer},r.a.createElement(O,{docsSidebars:d,path:b?f:h.path,sidebar:g,sidebarCollapsible:E})),r.a.createElement("main",{className:S.a.docMainContainer},r.a.createElement(l.a,{components:x},b?r.a.createElement(s.default,{content:m}):Object(o.a)(t.routes))))):r.a.createElement(I.default,e)}},214:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,b=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return a?r.a.createElement(b,o(o({ref:t},s),{},{components:a})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},294:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return o}));var n=a(308),r=a.n(n);function l(){if(window.location.hash.startsWith("#src=")){const e=window.location.hash.replace("#src=","").trim();return decodeURIComponent(e)}if(window.location.hash.startsWith("#code/")){const e=window.location.hash.replace("#code/","").trim();return r.a.decompressFromEncodedURIComponent(e)||""}return"// Declare exposed API\ntype Vector = [number, number, number];\n\ndeclare function findUnitsInRadius(this: void, center: Vector, radius: number): Unit[];\ndeclare interface Unit {\n    isEnemy(other: Unit): boolean;\n    kill(): void;\n}\n\n\n// Use declared API in code\nfunction onAbilityCast(this: void, caster: Unit, targetLocation: Vector) {\n    const units = findUnitsInRadius(targetLocation, 500);\n    const enemies = units.filter(unit => caster.isEnemy(unit));\n\n    for (const enemy of enemies) {\n        enemy.kill();\n    }\n}\n"}function c(e){const t="code/"+r.a.compressToEncodedURIComponent(e);window.history.replaceState({},"","#"+t)}function o(e){return"/play/#code/"+r.a.compressToEncodedURIComponent(e)}},338:function(e,t,a){"use strict";var n=a(2),r=a(239),l=a(218),c=a(276),o=a(231),i=a.n(o),s=a(398),m=a.n(s),u=a(399),d=a.n(u),p=a(465),b=a(400),f=a(0),h=a.n(f),g=a(294),E=a(339),v=a.n(E);t.a=({children:e,className:t,metastring:a=""})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(l.a)(),{prismTheme:s,mounted:u}=function(e){const[t,a]=Object(f.useState)(!1);Object(f.useEffect)(()=>{a(!0)},[]);const{isDarkTheme:n}=Object(c.a)(),r=e.theme||b.a,l=e.darkTheme||r;return{prismTheme:n?l:r,mounted:t}}(o),{showCopied:E,handleCopyCode:y,target:k,button:O}=function(){const e=Object(f.useRef)(null),t=Object(f.useRef)(null),[a,n]=Object(f.useState)(!1);return Object(f.useEffect)(()=>{let a;return t.current&&(a=new m.a(t.current,{target:()=>e.current})),()=>{a&&a.destroy()}},[t.current,e.current]),{showCopied:a,handleCopyCode:()=>{window.getSelection().empty(),n(!0),setTimeout(()=>n(!1),2e3)},target:e,button:t}}(),N=e.trim(),[,_]=a.match(/title=(.+)( |$)/)||[],[,w]=a.match(/{([\d,-]+)}/)||[],C=null!=w?d.a.parse(w).filter(e=>e>0):[];let j=t&&t.replace(/language-/,"");!j&&o.defaultLanguage&&(j=o.defaultLanguage);const P="ts"===j||"typescript"===j;return h.a.createElement(p.a,Object(n.a)({},p.b,{key:u,theme:s,code:N,language:j}),({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:c})=>h.a.createElement(h.a.Fragment,null,_&&h.a.createElement("div",{className:v.a.title},_),h.a.createElement("pre",{className:i()(e,v.a.codeBlock,_&&v.a.hasTitle)},h.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:v.a.copyButton,onClick:y},E?"Copied":"Copy"),P&&h.a.createElement(r.a,{"aria-label":"Open code on playground",className:v.a.playgroundButton,to:Object(g.b)(N),target:"_blank"},"Playground"),h.a.createElement("code",{ref:k,className:v.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return C.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),h.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>h.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))))})))))}},339:function(e,t,a){e.exports={codeBlock:"codeBlock_222H",hasTitle:"hasTitle_1PmY",title:"title_1twf",codeBlockLines:"codeBlockLines_3zpG",copyButton:"copyButton_ujp3",playgroundButton:"playgroundButton_3DKR"}},390:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(293);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(337),c=a(275),o=a(218),i=a(261),s=a(239);var m=function(e){const{metadata:t}=e;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var u=function(e,t,a){const[r,l]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function o(){const o=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const r=n[e],{top:l}=r.getBoundingClientRect();l>=0&&l<=a&&(t=r),e+=1}return t}();if(o){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:i}=e,s=decodeURIComponent(i.substring(i.indexOf("#")+1));o.id===s&&(r&&r.classList.remove(t),e.classList.add(t),l(e),n=!0),a+=1}}}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}})},d=a(231),p=a.n(d),b=a(91),f=a.n(b);function h({headings:e}){return u("table-of-contents__link","table-of-contents__link--active",100),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:f.a.tableOfContents},r.a.createElement(g,{headings:e})))}function g({headings:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(g,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(o.a)(),{url:a,title:n}=t,{content:s}=e,{metadata:u}=s,{description:d,title:b,permalink:g,editUrl:E,lastUpdatedAt:v,lastUpdatedBy:y,version:k}=u,{frontMatter:{image:O,keywords:N,hide_title:_,hide_table_of_contents:w}}=s,C=b?`${b} | ${n}`:n;let j=a+Object(i.a)(O);return Object(c.a)(O)||(j=O),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("title",null,C),r.a.createElement("meta",{property:"og:title",content:C}),d&&r.a.createElement("meta",{name:"description",content:d}),d&&r.a.createElement("meta",{property:"og:description",content:d}),N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:j}),O&&r.a.createElement("meta",{property:"twitter:image",content:j}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),g&&r.a.createElement("meta",{property:"og:url",content:a+g}),g&&r.a.createElement("link",{rel:"canonical",href:a+g})),r.a.createElement("div",{className:p()("container padding-vert--lg",f.a.docItemWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:p()("col",{[f.a.docItemCol]:!w})},r.a.createElement("div",{className:f.a.docItemContainer},r.a.createElement("article",null,k&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",k)),!_&&r.a.createElement("header",null,r.a.createElement("h1",{className:f.a.docTitle},b)),r.a.createElement("div",{className:"markdown"},r.a.createElement(s,null))),(E||v||y)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},E&&r.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(v||y)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",v&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*v).toISOString(),className:f.a.docLastUpdatedAt},new Date(1e3*v).toLocaleDateString()),y&&" "),y&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,y)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(m,{metadata:u})))),!w&&s.rightToc&&r.a.createElement(h,{headings:s.rightToc}))))}}}]);