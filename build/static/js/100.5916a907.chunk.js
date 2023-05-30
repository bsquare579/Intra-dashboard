"use strict";(self.webpackChunkintra=self.webpackChunkintra||[]).push([[100],{8452:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(3967),r=i(68),s=i(533),a=i(43),l=i(3044),c=i(184);var o=e=>{let{color:t,outline:i,size:r,sx:s,...a}=e;const o=(0,n.Z)(),d=t&&!i&&{color:o.palette.background.paper,bgcolor:`${t}.main`},h=i&&{color:t?`${t}.main`:"primary.main",bgcolor:o.palette.background.paper,border:"2px solid",borderColor:t?`${t}.main`:"primary.main"};let m={};switch(r){case"badge":m={width:o.spacing(3.5),height:o.spacing(3.5)};break;case"xs":m={width:o.spacing(4.25),height:o.spacing(4.25)};break;case"sm":m={width:o.spacing(5),height:o.spacing(5)};break;case"lg":m={width:o.spacing(9),height:o.spacing(9)};break;case"xl":m={width:o.spacing(10.25),height:o.spacing(10.25)};break;case"md":m={width:o.spacing(7.5),height:o.spacing(7.5)};break;default:m={}}return(0,c.jsx)(l.Z,{sx:{...d,...h,...m,...s},...a})};var d=e=>{let{title:t,link:i,icon:l}=e;const d=(0,n.Z)();return(0,c.jsx)(r.Z,{title:t||"Reference",placement:"left",children:(0,c.jsxs)(s.Z,{disableRipple:!0,children:[!l&&(0,c.jsx)(o,{component:a.Z,href:i,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&(0,c.jsx)(o,{component:a.Z,href:i,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}},3100:function(e,t,i){i.r(t);var n=i(1889),r=i(43),s=i(890),a=i(928),l=i(3735),c=i(8452),o=i(1923),d=i(2791),h=i(5568),m=i(184);t.default=()=>{const[e,t]=(0,d.useState)([]);return(0,d.useEffect)((()=>{fetch("https://humlog.ng/api/getlatlng").then((e=>e.json())).then((e=>{console.log(e),t(e)}))}),[]),(0,m.jsx)(l.Z,{title:"Users Table",secondary:(0,m.jsx)(c.Z,{link:"https://next.material-ui.com/system/typography/"}),children:(0,m.jsxs)(n.ZP,{container:!0,spacing:o.dv,children:[(0,m.jsx)(n.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(a.Z,{title:"Heading",children:(0,m.jsxs)(n.ZP,{container:!0,direction:"column",spacing:1,children:[(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"h1",gutterBottom:!0,children:"h1. Heading"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"h2",gutterBottom:!0,children:"h2. Heading"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"h3",gutterBottom:!0,children:"h3. Heading"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:"h4. Heading"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:"h5. Heading"})}),(0,m.jsxs)(n.ZP,{item:!0,children:[(0,m.jsx)(s.Z,{variant:"h6",gutterBottom:!0,children:"h6. Heading"}),(0,m.jsx)(s.Z,{variant:"h6",gutterBottom:!0,children:(0,m.jsx)(h.default,{apiKey:"AIzaSyDuAySsU56eFj3o_IbeY18jo2fZNLzJ9CY",onPlaceSelected:e=>console.log(e)})})]})]})})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(a.Z,{title:"Sub title",children:(0,m.jsxs)(n.ZP,{container:!0,direction:"column",spacing:1,children:[e.length>0&&(0,m.jsx)(n.ZP,{item:!0,children:e.map((e=>(0,m.jsx)(s.Z,{variant:"subtitle1",gutterBottom:!0,children:e.name},e.id)))}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"subtitle2",gutterBottom:!0,children:"subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur"})})]})})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(a.Z,{title:"Body",children:(0,m.jsxs)(n.ZP,{container:!0,direction:"column",spacing:1,children:[(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."})})]})})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(a.Z,{title:"Extra",children:(0,m.jsxs)(n.ZP,{container:!0,direction:"column",spacing:1,children:[(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"button",display:"block",gutterBottom:!0,children:"button text"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"caption",display:"block",gutterBottom:!0,children:"caption text"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"overline",display:"block",gutterBottom:!0,children:"overline text"})}),(0,m.jsx)(n.ZP,{item:!0,children:(0,m.jsx)(s.Z,{variant:"body2",color:"primary",component:r.Z,href:"https://intra.ng",target:"_blank",display:"block",underline:"hover",gutterBottom:!0,children:"https://intra.ng"})})]})})})]})})}}}]);
//# sourceMappingURL=100.5916a907.chunk.js.map