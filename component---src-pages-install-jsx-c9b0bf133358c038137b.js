"use strict";(self.webpackChunkunittestbot_web=self.webpackChunkunittestbot_web||[]).push([[7656],{85489:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(87462),l=a(63366),r=a(75900),i=a.n(r),s=a(15007),o=a(25513),d=a(44731),c=a(99541),u=a(563),f=s.default.forwardRef((function(e,t){var a=e.label,r=e.onClick,o=e.className,d=(0,l.Z)(e,["label","onClick","className"]);return s.default.createElement("button",(0,n.Z)({ref:t,type:"button",className:i()("close",o),onClick:r},d),s.default.createElement("span",{"aria-hidden":"true"},"×"),s.default.createElement("span",{className:"sr-only"},a))}));f.displayName="CloseButton",f.defaultProps={label:"Close"};var m=f,Z=a(16132),p=a(38870),b=a(36306),v=(0,Z.Z)("h4");v.displayName="DivStyledAsH4";var y=(0,p.Z)("alert-heading",{Component:v}),h=(0,p.Z)("alert-link",{Component:b.Z}),N={show:!0,transition:u.Z,closeLabel:"Close alert"},C=s.default.forwardRef((function(e,t){var a=(0,o.Ch)(e,{show:"onClose"}),r=a.bsPrefix,f=a.show,Z=a.closeLabel,p=a.className,b=a.children,v=a.variant,y=a.onClose,h=a.dismissible,N=a.transition,C=(0,l.Z)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),g=(0,c.vE)(r,"alert"),_=(0,d.Z)((function(e){y&&y(!1,e)})),E=!0===N?u.Z:N,P=s.default.createElement("div",(0,n.Z)({role:"alert"},E?void 0:C,{ref:t,className:i()(p,g,v&&g+"-"+v,h&&g+"-dismissible")}),h&&s.default.createElement(m,{onClick:_,label:Z}),b);return E?s.default.createElement(E,(0,n.Z)({unmountOnExit:!0},C,{ref:void 0,in:f}),P):f?P:null}));C.displayName="Alert",C.defaultProps=N,C.Link=h,C.Heading=y;var g=C},17502:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(87462),l=a(63366),r=a(75900),i=a.n(r),s=a(15007),o=a(99541),d=a(38870),c=a(16132),u=a(29503),f=s.default.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,d=e.variant,c=e.as,u=void 0===c?"img":c,f=(0,l.Z)(e,["bsPrefix","className","variant","as"]),m=(0,o.vE)(a,"card-img");return s.default.createElement(u,(0,n.Z)({ref:t,className:i()(d?m+"-"+d:m,r)},f))}));f.displayName="CardImg",f.defaultProps={variant:null};var m=f,Z=(0,c.Z)("h5"),p=(0,c.Z)("h6"),b=(0,d.Z)("card-body"),v=(0,d.Z)("card-title",{Component:Z}),y=(0,d.Z)("card-subtitle",{Component:p}),h=(0,d.Z)("card-link",{Component:"a"}),N=(0,d.Z)("card-text",{Component:"p"}),C=(0,d.Z)("card-header"),g=(0,d.Z)("card-footer"),_=(0,d.Z)("card-img-overlay"),E=s.default.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,d=e.bg,c=e.text,f=e.border,m=e.body,Z=e.children,p=e.as,v=void 0===p?"div":p,y=(0,l.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,o.vE)(a,"card"),N=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return s.default.createElement(u.Z.Provider,{value:N},s.default.createElement(v,(0,n.Z)({ref:t},y,{className:i()(r,h,d&&"bg-"+d,c&&"text-"+c,f&&"border-"+f)}),m?s.default.createElement(b,null,Z):Z))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=m,E.Title=v,E.Subtitle=y,E.Body=b,E.Link=h,E.Text=N,E.Header=C,E.Footer=g,E.ImgOverlay=_;var P=E},563:function(e,t,a){var n,l=a(87462),r=a(63366),i=a(75900),s=a.n(i),o=a(15007),d=a(5160),c=a(61831),u=a(49059),f=((n={})[d.d0]="show",n[d.cn]="show",n),m=o.default.forwardRef((function(e,t){var a=e.className,n=e.children,i=(0,r.Z)(e,["className","children"]),m=(0,o.useCallback)((function(e){(0,u.Z)(e),i.onEnter&&i.onEnter(e)}),[i]);return o.default.createElement(d.ZP,(0,l.Z)({ref:t,addEndListener:c.Z},i,{onEnter:m}),(function(e,t){return o.default.cloneElement(n,(0,l.Z)({},t,{className:s()("fade",a,n.props.className,f[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.Z=m},16132:function(e,t,a){var n=a(87462),l=a(15007),r=a(75900),i=a.n(r);t.Z=function(e){return l.default.forwardRef((function(t,a){return l.default.createElement("div",(0,n.Z)({},t,{ref:a,className:i()(t.className,e)}))}))}},82207:function(e,t,a){a(15007);var n=a(17502),l=a(8156),r=function(e){var t=e.title?e.title:"",a=e.mainBody?e.mainBody:[],r=e.footerBody?e.footerBody:[],i=e.className?e.className:"";return(0,l.tZ)(n.Z,{className:"thirdCard "+i,bg:"light"},(0,l.tZ)(n.Z.Header,{as:"h3"},t),(0,l.tZ)(n.Z.Body,null,(0,l.tZ)(n.Z.Text,null,a)),!!r.length&&(0,l.tZ)(n.Z.Footer,null,r))};t.Z=r,r&&r===Object(r)&&Object.isExtensible(r)&&!Object.prototype.hasOwnProperty.call(r,"__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"ThirdCard",filename:"src/components/cards/ThirdCard.jsx"}})},41561:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});a(15007);var n=a(85489),l=a(17502),r=a(46594),i=a(35903),s=a(68270),o=a(30775),d=a(81277),c=a(8156),u=function(e){var t=e.title?e.title:"",a=e.mainBody?e.mainBody:[],n=e.footerBody?e.footerBody:[],r=e.className?e.className:"";return(0,c.tZ)(l.Z,{className:"primaryCard "+r,bg:"light"},(0,c.tZ)(l.Z.Header,{as:"h1"},t),(0,c.tZ)(l.Z.Body,null,(0,c.tZ)(l.Z.Text,null,a)),!!n.length&&(0,c.tZ)(l.Z.Footer,null,n))},f=u;u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"PrimaryCard",filename:"src/components/cards/PrimaryCard.jsx"}});var m=a(82207),Z=(0,a(80235).Z)((function(){var e=(0,s.$)(),t=e.t,a=(e.i18n,[]);a.push((0,c.tZ)("p",{dangerouslySetInnerHTML:{__html:t("install.mainPart1")}})),a.push((0,c.tZ)("p",{dangerouslySetInnerHTML:{__html:t("install.mainPart2")}}));var u=[(0,c.tZ)(n.Z,{variant:"warning",dangerouslySetInnerHTML:{__html:t("install.cppAlert")}}),(0,c.tZ)("p",null,t("install.cppPart1")),(0,c.tZ)("p",null,t("install.cppPart2")),(0,c.tZ)("p",null,t("install.cppPart3"))],Z=[(0,c.tZ)(l.Z.Link,{as:i.Link,to:"/docs/cpp/installation/installing-the-utbot-server",href:"/docs/cpp/installation/installing-the-utbot-server"},t("install.cppGuide"))],p=(0,i.useStaticQuery)("318294280");return(0,c.tZ)(o.Z,null,(0,c.tZ)("div",{className:"pageFlexContainer"},(0,c.tZ)(d.Z,{title:"Install"}),(0,c.tZ)(f,{title:"Install UnitTestBot",mainBody:a}),(0,c.tZ)(m.Z,{title:t("install.cpp"),mainBody:u,footerBody:Z}),(0,c.tZ)("div",{className:"innerFlexContainer"},(0,c.tZ)(l.Z,{className:"releaseCard",bg:"info",text:"white"},(0,c.tZ)(l.Z.Header,{as:"h5"},t("install.release")),(0,c.tZ)(l.Z.Body,null,(0,c.tZ)(l.Z.Subtitle,null,"v1.0.93"),(0,c.tZ)(l.Z.Text,null),(0,c.tZ)("div",{className:"buttonsContainerCpp"},(0,c.tZ)(r.Z,{variant:"primary",className:"getButton",href:p.site.siteMetadata.utbot_cpp_releases_link,as:"a",target:"_blank"},t("install.get"))))))))})),p=Z;void 0!==Z&&Z&&Z===Object(Z)&&Object.isExtensible(Z)&&!Object.prototype.hasOwnProperty.call(Z,"__filemeta")&&Object.defineProperty(Z,"__filemeta",{configurable:!0,value:{name:"__DOCZ_DUMMY_EXPORT_DEFAULT",filename:"src/pages/install.jsx"}})}}]);
//# sourceMappingURL=component---src-pages-install-jsx-c9b0bf133358c038137b.js.map