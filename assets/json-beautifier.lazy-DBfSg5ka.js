import{c as S,u as b,b as O,r as i,j as t,I as R,S as f,B as a,A as d,C as j,d as z,e as V,ak as k,s as m,aj as x}from"./index-DvQtlU0V.js";import"./editorWorker-CSXiZMy3.js";const I=S("/_json/json-beautifier")({component:E});function E(){const o=b(),y=O(),l=i.useRef(null),c=i.useRef(null),n=i.useRef({json:"",formattedJson:"",lastUsed:"format",tabSize:2}),h=async()=>{var e;n.current.json=k,(e=l.current)==null||e.setValue(n.current.json)},p=e=>{var s;n.current.lastUsed="format";const u=e?n.current.json:n.current.formattedJson;try{const r=JSON.stringify(JSON.parse(u),null," ".repeat(n.current.tabSize));(s=c.current)==null||s.setValue(r),e&&o(m())}catch{o(x())}},g=e=>{var s;n.current.lastUsed="minify";const u=e?n.current.json:n.current.formattedJson;try{const r=JSON.stringify(JSON.parse(u));(s=c.current)==null||s.setValue(r),e&&o(m())}catch{o(x())}},C=()=>{const e=n.current.formattedJson;e.trim().length!==0&&y(e)},J=e=>{n.current.tabSize=e,n.current.lastUsed==="format"&&p(!1)};return t.jsx(R,{InputToolbar:t.jsxs(f,{children:[t.jsx(a,{size:"large",onClick:h,children:"Sample"}),t.jsx(a,{type:"primary",icon:t.jsx(d,{}),size:"large",onClick:()=>p(!0),children:"Format"}),t.jsx(a,{type:"primary",icon:t.jsx(d,{}),size:"large",onClick:()=>g(!0),children:"Minify"})]}),InputView:t.jsx(j,{ref:l,code:n.current.json,language:"json",onChange:e=>{n.current.json=e}}),OutputToolbar:t.jsxs(f,{children:[t.jsx(z,{defaultValue:2,options:[{value:2,label:t.jsx(t.Fragment,{children:"2 spaces"})},{value:4,label:t.jsx(t.Fragment,{children:"4 spaces"})}],onChange:J}),t.jsx(a,{icon:t.jsx(V,{}),onClick:C,children:"Copy"})]}),OutputView:t.jsx(j,{ref:c,code:n.current.formattedJson,language:"json",onChange:e=>{n.current.formattedJson=e}})})}export{I as Route};
