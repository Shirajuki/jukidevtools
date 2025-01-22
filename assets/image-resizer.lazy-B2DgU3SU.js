import{c as v,u as N,r as g,j as t,I as R,S as f,B as x,A as O,E as A,aj as F,s as M}from"./index-DvQtlU0V.js";import{i as m,f as z,U as B,a as S,b as w,I as j,D as C,B as E}from"./fromBlob-BQSRR0k5.js";import{F as d}from"./index-wn8s8z4S.js";import{I as b}from"./index-C_cLUI8I.js";import{C as P}from"./index-BrskZHWF.js";import"./editorWorker-CSXiZMy3.js";import"./useForceUpdate-xiK0No7a.js";import"./index-Bj3jwalg.js";const V=h=>new Promise(o=>{m(h).then(e=>{const s=new Image;s.onload=()=>{o({width:s.width,height:s.height})},s.src=e})}),D=async(h,o,e)=>new Promise(s=>{z(h,void 0,o,e).then(c=>{m(c).then(u=>{s(u)})})}),Q=v("/_image/image-resizer")({component:T});function T(){const h=N(),[o]=d.useForm(),[e,s]=g.useState({file:null,originalWidth:null,originalHeight:null,width:null,height:null,lockAspectRatio:!0}),[c,u]=g.useState(""),[l,I]=g.useState(null),y=()=>{var p;if(!l||!e.file)return;let a="png";const i=(p=/^data:image\/\w+;/.exec(l.base64))==null?void 0:p[0];i&&(a=i.slice(11,-1));const n=document.createElement("a");n.href=l.base64;const r=e.file.name.split(".");r.pop(),n.download=`${r.join(".")}.${a}`,n.click()},H=async()=>{if(!e.file||!e.originalWidth||!e.originalHeight||!e.width||!e.height){h(F("Need to select an image"));return}let a=e.width,i=e.height;a&&!i?i=Math.round(e.originalHeight/e.originalWidth*a):!a&&i?a=Math.round(e.originalWidth/e.originalHeight*i):!a&&!i&&(a=e.originalWidth,i=e.originalHeight);const n=await D(e.file,a,i);I({base64:n,width:a,height:i}),h(M())},W=async a=>{if(!a.file.originFileObj)return;const i=a.file.originFileObj,n=await m(i),r=await V(i);u(n),s({...e,file:i,originalWidth:r.width,originalHeight:r.height,width:r.width,height:r.height})},k=a=>{let i={...a};e.lockAspectRatio&&(i.width===null||i.height===null)?i={...e,width:null,height:null}:(i={...e,...i},i.lockAspectRatio&&e.file&&e.originalWidth&&e.originalHeight&&(i.width&&!i.height?i.height=Math.round(e.originalHeight/e.originalWidth*i.width):!i.width&&i.height?i.width=Math.round(e.originalWidth/e.originalHeight*i.height):i.width&&i.height?i.width!==e.width?i.height=Math.round(e.originalHeight/e.originalWidth*i.width):i.height!==e.height?i.width=Math.round(e.originalWidth/e.originalHeight*i.height):e.lockAspectRatio||(i.height=Math.round(e.originalHeight/e.originalWidth*i.width)):(i.width=null,i.height=null))),s({...e,...i})};return g.useEffect(()=>{o.setFieldsValue(e)},[o,e]),t.jsx(R,{InputToolbar:t.jsx(f,{children:t.jsx(x,{type:"primary",icon:t.jsx(O,{}),size:"large",onClick:H,children:"Resize"})}),InputView:t.jsxs(d,{form:o,layout:"vertical",size:"large",requiredMark:"optional",initialValues:e,validateMessages:{required:"This field is required"},onValuesChange:k,children:[t.jsx(B,{name:"image",accept:"image/*",listType:"picture-card",showUploadList:!1,onChange:W,customRequest:()=>{},children:t.jsxs("button",{type:"button",children:[t.jsx(S,{}),t.jsx("div",{className:"mt-2",children:"Select image"})]})}),w(c)&&t.jsx("div",{className:"mt-8 border border-solid border-gray-300 leading-0",children:t.jsx(j,{src:c})}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(d.Item,{label:"Width",name:"width",className:"mt-8",children:t.jsx(b,{min:1,precision:0,placeholder:"auto",className:"w-full",addonAfter:"px"})}),t.jsx(d.Item,{label:"Height",name:"height",className:"mt-8",children:t.jsx(b,{min:1,precision:0,placeholder:"auto",className:"w-full",addonAfter:"px"})})]}),t.jsx(d.Item,{name:"lockAspectRatio",valuePropName:"checked",children:t.jsx(P,{children:"Lock aspect ratio"})})]}),OutputToolbar:l===null?t.jsx(t.Fragment,{}):t.jsx(f,{children:t.jsx(x,{icon:t.jsx(C,{}),onClick:y,children:"Download"})}),OutputView:l&&w(l.base64)?t.jsx("div",{className:"border border-solid border-gray-300 leading-0",children:t.jsx(E.Ribbon,{color:"green",text:t.jsxs(t.Fragment,{children:["Width: ",l.width,"px",t.jsx("br",{}),"Height: ",l.height,"px"]}),children:t.jsx(j,{src:l.base64})})}):t.jsx("div",{className:"h-full min-h-[250px] flex items-center justify-center border border-solid border-gray-300",children:t.jsx(A,{})})})}export{Q as Route};
