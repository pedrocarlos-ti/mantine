(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2962],{33507:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},10231:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/timeline",function(){return i(65982)}])},65982:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var n=i(85893),r=i(11151),l=i(19905),a=i(9904),o=i(67294),s=i(81110),c=i(47394);let m=`
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`,u={type:"code",component:function(){return o.createElement(s.x,{maw:320,mx:"auto"},o.createElement(c.i,null))},code:m};var d=i(57552),p=i(47779),v=i(72039),h=i(66740),f=i(47318),b=i(61736),y=(0,i(54764).Z)("video","IconVideo",[["path",{d:"M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z",key:"svg-0"}],["path",{d:"M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-1"}]]);let g=`
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<IconSun size="0.8rem" />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <IconVideo size="0.8rem" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
`,x={type:"code",centered:!0,maxWidth:320,component:function(){return o.createElement(p.T,{bulletSize:24},o.createElement(p.T.Item,{title:"Default bullet"},o.createElement(v.x,{c:"dimmed",size:"sm"},"Default bullet without anything")),o.createElement(p.T.Item,{title:"Avatar",bullet:o.createElement(h.q,{size:22,radius:"xl",src:"https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"})},o.createElement(v.x,{c:"dimmed",size:"sm"},"Timeline bullet as avatar image")),o.createElement(p.T.Item,{title:"Icon",bullet:o.createElement(b.Z,{size:"0.8rem"})},o.createElement(v.x,{c:"dimmed",size:"sm"},"Timeline bullet as icon")),o.createElement(p.T.Item,{title:"ThemeIcon",bullet:o.createElement(f.k,{size:22,variant:"gradient",gradient:{from:"lime",to:"cyan"},radius:"xl"},o.createElement(y,{size:"0.8rem"}))},o.createElement(v.x,{c:"dimmed",size:"sm"},"Timeline bullet as ThemeIcon component")))},code:g},T=(0,l.A)(a.us.Timeline);function I(e){let t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre"},(0,r.ah)(),e.components),{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"line-and-bullet-props",children:"Line and bullet props"}),"\n",(0,n.jsx)(t.p,{children:"Control timeline appearance with the following props:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"active"})," – index of current active element, all elements before this index will be highlighted with ",(0,n.jsx)(t.code,{children:"color"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"color"})," – color from theme that should be used to highlight active items, defaults to ",(0,n.jsx)(t.code,{children:"theme.primaryColor"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"lineWidth"})," – controls line width and bullet border"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"bulletSize"})," – bullet width, height and border-radius"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"align"})," – defines line and bullets position relative to content, also sets text-align"]}),"\n"]}),"\n",(0,n.jsx)(i,{data:d.g}),"\n",(0,n.jsx)(t.h2,{id:"bullet-as-react-node",children:"Bullet as React node"}),"\n",(0,n.jsx)(i,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"wrap-timelineitem",children:"Wrap Timeline.Item"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Timeline"})," component relies on ",(0,n.jsx)(t.code,{children:"Timeline.Item"})," order. Wrapping ",(0,n.jsx)(t.code,{children:"Timeline.Item"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Timeline } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return (\n    <Timeline.Item label="Nope" description="It will not work">\n      This part will not render\n    </Timeline.Item>\n  );\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Timeline active={1}>\n      <Timeline.Item title="Regular item">First item</Timeline.Item>\n      <WillNotWork />\n      <Timeline.Item title="Works as expected">\n        <WillWork />\n      </Timeline.Item>\n      <Timeline.Item title="Regular item">Third item</Timeline.Item>\n    </Timeline>\n  );\n}\n'})})]})}var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(T,Object.assign({},e,{children:(0,n.jsx)(I,e)}))}},60069:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("git-branch","IconGitBranch",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M9 18h6a2 2 0 0 0 2 -2v-5",key:"svg-4"}],["path",{d:"M14 14l3 -3l3 3",key:"svg-5"}]])},40421:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]])},25026:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("git-pull-request","IconGitPullRequest",[["path",{d:"M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M6 8l0 8",key:"svg-3"}],["path",{d:"M11 6h5a2 2 0 0 1 2 2v8",key:"svg-4"}],["path",{d:"M14 9l-3 -3l3 -3",key:"svg-5"}]])},6199:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("message-dots","IconMessageDots",[["path",{d:"M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4",key:"svg-0"}],["path",{d:"M12 11l0 .01",key:"svg-1"}],["path",{d:"M8 11l0 .01",key:"svg-2"}],["path",{d:"M16 11l0 .01",key:"svg-3"}]])},66740:function(e,t,i){"use strict";i.d(t,{q:function(){return F}});var n=i(67294);let r=(0,n.createContext)(null),l=r.Provider;var a={root:"m-f85678b6",image:"m-11f8ac07",placeholder:"m-104cd71f",group:"m-11def92b"},o=i(3154),s=i(30370),c=i(86109),m=i(81110),u=i(8586),d=i(48468),p=Object.defineProperty,v=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,i)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,y=(e,t)=>{for(var i in t||(t={}))h.call(t,i)&&b(e,i,t[i]);if(v)for(var i of v(t))f.call(t,i)&&b(e,i,t[i]);return e},g=(e,t)=>{var i={};for(var n in e)h.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&v)for(var n of v(e))0>t.indexOf(n)&&f.call(e,n)&&(i[n]=e[n]);return i};let x={},T=(0,u.Z)((e,{spacing:t})=>({group:{"--ag-spacing":(0,d.bG)(t)}})),I=(0,o.d)((e,t)=>{let i=(0,s.w)("AvatarGroup",x,e),{classNames:r,className:o,style:u,styles:d,unstyled:p,vars:v,spacing:h}=i,f=g(i,["classNames","className","style","styles","unstyled","vars","spacing"]),b=(0,c.y)({name:"AvatarGroup",classes:a,props:i,className:o,style:u,classNames:r,styles:d,unstyled:p,vars:v,varsResolver:T,rootSelector:"group"});return n.createElement(l,{value:!0},n.createElement(m.x,y(y({ref:t},b("group")),f)))});I.classes=a,I.displayName="@mantine/core/AvatarGroup";var w=Object.defineProperty,O=Object.defineProperties,k=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,M=(e,t,i)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,C=(e,t)=>{for(var i in t||(t={}))E.call(t,i)&&M(e,i,t[i]);if(j)for(var i of j(t))z.call(t,i)&&M(e,i,t[i]);return e},P=(e,t)=>O(e,k(t));function Z(e){return n.createElement("svg",P(C({},e),{"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),n.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var _=i(70405),N=Object.defineProperty,S=Object.defineProperties,A=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,D=(e,t,i)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,R=(e,t)=>{for(var i in t||(t={}))G.call(t,i)&&D(e,i,t[i]);if(V)for(var i of V(t))W.call(t,i)&&D(e,i,t[i]);return e},q=(e,t)=>S(e,A(t)),B=(e,t)=>{var i={};for(var n in e)G.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&V)for(var n of V(e))0>t.indexOf(n)&&W.call(e,n)&&(i[n]=e[n]);return i};let Y={},L=(0,u.Z)((e,{size:t,radius:i,variant:n,gradient:r,color:l})=>{let a=e.variantColorResolver({color:l||"gray",theme:e,gradient:r,variant:n||"light"});return{root:{"--avatar-size":(0,d.ap)(t,"avatar-size"),"--avatar-radius":void 0===i?void 0:(0,d.H5)(i),"--avatar-bg":l||n?a.background:void 0,"--avatar-color":l||n?a.color:void 0,"--avatar-bd":l||n?a.border:void 0}}}),F=(0,_.b)((e,t)=>{let i=(0,s.w)("Avatar",Y,e),{classNames:l,className:o,style:u,styles:d,unstyled:p,vars:v,src:h,alt:f,radius:b,color:y,gradient:g,imageProps:x,children:T}=i,I=B(i,["classNames","className","style","styles","unstyled","vars","src","alt","radius","color","gradient","imageProps","children"]),w=function(){let e=(0,n.useContext)(r);return{withinGroup:!!e}}(),[O,k]=(0,n.useState)(!h),j=(0,c.y)({name:"Avatar",props:i,classes:a,className:o,style:u,classNames:l,styles:d,unstyled:p,vars:v,varsResolver:L});return(0,n.useEffect)(()=>k(!h),[h]),n.createElement(m.x,R(q(R({},j("root")),{mod:{"within-group":w.withinGroup},ref:t}),I),O?n.createElement("span",q(R({},j("placeholder")),{title:f}),T||n.createElement(Z,null)):n.createElement("img",q(R(R({},x),j("image")),{src:h,alt:f,onError:e=>{var t;k(!0),null==(t=null==x?void 0:x.onError)||t.call(x,e)}})))});F.classes=a,F.displayName="@mantine/core/Avatar",F.Group=I},47318:function(e,t,i){"use strict";i.d(t,{k:function(){return x}});var n=i(67294),r={root:"m-7341320d"},l=i(3154),a=i(30370),o=i(86109),s=i(81110),c=i(8586),m=i(48468),u=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,i)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,f=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&h(e,i,t[i]);if(d)for(var i of d(t))v.call(t,i)&&h(e,i,t[i]);return e},b=(e,t)=>{var i={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>t.indexOf(n)&&v.call(e,n)&&(i[n]=e[n]);return i};let y={},g=(0,c.Z)((e,{size:t,radius:i,variant:n,gradient:r,color:l})=>{let a=e.variantColorResolver({color:l,theme:e,gradient:r,variant:n||"filled"});return{root:{"--ti-size":(0,m.ap)(t,"ti-size"),"--ti-radius":void 0===i?void 0:(0,m.H5)(i),"--ti-bg":l||n?a.background:void 0,"--ti-color":l||n?a.color:void 0,"--ti-bd":l||n?a.border:void 0}}}),x=(0,l.d)((e,t)=>{let i=(0,a.w)("ThemeIcon",y,e),{classNames:l,className:c,style:m,styles:u,unstyled:d,vars:p}=i,v=b(i,["classNames","className","style","styles","unstyled","vars"]),h=(0,o.y)({name:"ThemeIcon",classes:r,props:i,className:c,style:m,classNames:l,styles:u,unstyled:d,vars:p,varsResolver:g});return n.createElement(s.x,f(f({ref:t},h("root")),v))});x.classes=r,x.displayName="@mantine/core/ThemeIcon"},47779:function(e,t,i){"use strict";i.d(t,{T:function(){return R}});var n=i(67294),r=i(45763);let[l,a]=(0,r.R)("Timeline component was not found in tree");var o={root:"m-43657ece",itemTitle:"m-2ebe8099",item:"m-436178ff",itemBullet:"m-8affcee1",itemBody:"m-540e8f41"},s=i(3154),c=i(30370),m=i(43440),u=i(81110),d=i(48468),p=i(40184),v=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,x=(e,t,i)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,T=(e,t)=>{for(var i in t||(t={}))y.call(t,i)&&x(e,i,t[i]);if(b)for(var i of b(t))g.call(t,i)&&x(e,i,t[i]);return e},I=(e,t)=>h(e,f(t)),w=(e,t)=>{var i={};for(var n in e)y.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&b)for(var n of b(e))0>t.indexOf(n)&&g.call(e,n)&&(i[n]=e[n]);return i};let O={},k=(0,s.d)((e,t)=>{let i=(0,c.w)("TimelineItem",O,e),{classNames:r,className:l,style:o,styles:s,vars:v,__active:h,__align:f,__lineActive:b,__vars:y,bullet:g,radius:x,color:k,lineVariant:j,children:E,title:z}=i,M=w(i,["classNames","className","style","styles","vars","__active","__align","__lineActive","__vars","bullet","radius","color","lineVariant","children","title"]),C=a(),P=(0,m.rZ)(),Z={classNames:r,styles:s};return n.createElement(u.x,T(I(T({},C.getStyles("item",I(T({},Z),{className:l,style:o}))),{mod:{"line-active":b,active:h},ref:t,__vars:{"--tli-radius":x?(0,d.H5)(x):void 0,"--tli-color":k?(0,p.p)(k,P):void 0,"--tli-border-style":j||void 0}}),M),n.createElement(u.x,I(T({},C.getStyles("itemBullet",Z)),{mod:{"with-child":!!g,align:f,active:h}}),g),n.createElement("div",T({},C.getStyles("itemBody",Z)),z&&n.createElement("div",T({},C.getStyles("itemTitle",Z)),z),n.createElement("div",T({},C.getStyles("itemContent",Z)),E)))});k.classes=o,k.displayName="@mantine/core/TimelineItem";var j=i(86109),E=i(8586),z=i(72622),M=Object.defineProperty,C=Object.defineProperties,P=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,S=(e,t,i)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,A=(e,t)=>{for(var i in t||(t={}))_.call(t,i)&&S(e,i,t[i]);if(Z)for(var i of Z(t))N.call(t,i)&&S(e,i,t[i]);return e},V=(e,t)=>C(e,P(t)),G=(e,t)=>{var i={};for(var n in e)_.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&Z)for(var n of Z(e))0>t.indexOf(n)&&N.call(e,n)&&(i[n]=e[n]);return i};let W={active:-1,align:"left",reverseActive:!1},D=(0,E.Z)((e,{bulletSize:t,lineWidth:i,radius:n,color:r})=>({root:{"--tl-bullet-size":(0,z.h)(t),"--tl-line-width":(0,z.h)(i),"--tl-radius":void 0===n?void 0:(0,d.H5)(n),"--tl-color":r?(0,p.p)(r,e):void 0}})),R=(0,s.d)((e,t)=>{let i=(0,c.w)("Timeline",W,e),{classNames:r,className:a,style:s,styles:m,unstyled:d,vars:p,children:v,active:h,color:f,radius:b,bulletSize:y,align:g,lineWidth:x,reverseActive:T}=i,I=G(i,["classNames","className","style","styles","unstyled","vars","children","active","color","radius","bulletSize","align","lineWidth","reverseActive"]),w=(0,j.y)({name:"Timeline",classes:o,props:i,className:a,style:s,classNames:r,styles:m,unstyled:d,vars:p,varsResolver:D}),O=n.Children.toArray(v),k=O.map((e,t)=>{var i,r;return(0,n.cloneElement)(e,{unstyled:d,__align:g,__active:(null==(i=e.props)?void 0:i.active)||(T?h>=O.length-t-1:h>=t),__lineActive:(null==(r=e.props)?void 0:r.lineActive)||(T?h>=O.length-t-1:h-1>=t)})});return n.createElement(l,{value:{getStyles:w}},n.createElement(u.x,A(V(A({},w("root")),{mod:{align:g},ref:t}),I),k))});R.classes=o,R.displayName="@mantine/core/Timeline",R.Item=k},57552:function(e,t,i){"use strict";i.d(t,{g:function(){return p}});var n=i(67294),r=i(81110),l=i(47394),a=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&m(e,i,t[i]);if(o)for(var i of o(t))c.call(t,i)&&m(e,i,t[i]);return e};let d=`
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`,p={type:"configurator",component:function(e){return n.createElement(r.x,{maw:320,mx:"auto"},n.createElement(l.i,u({noIcon:!0},e)))},code:d,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"active",type:"number",initialValue:1,libraryValue:null,min:-1,max:3},{prop:"reverseActive",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"lineWidth",type:"number",initialValue:4,libraryValue:4,min:1,max:8},{prop:"bulletSize",type:"number",initialValue:20,libraryValue:20,min:12,max:30,step:2},{prop:"align",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"left",libraryValue:"left"}]}},47394:function(e,t,i){"use strict";i.d(t,{i:function(){return b}});var n=i(67294),r=i(60069),l=i(40421),a=i(25026),o=i(6199),s=i(47779),c=i(72039),m=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,v=(e,t,i)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))d.call(t,i)&&v(e,i,t[i]);if(u)for(var i of u(t))p.call(t,i)&&v(e,i,t[i]);return e},f=(e,t)=>{var i={};for(var n in e)d.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&u)for(var n of u(e))0>t.indexOf(n)&&p.call(e,n)&&(i[n]=e[n]);return i};function b(e){var{noIcon:t}=e,i=f(e,["noIcon"]);let m=!t;return n.createElement(s.T,h({active:1,bulletSize:24,lineWidth:2},i),n.createElement(s.T.Item,{bullet:m?n.createElement(r.Z,{size:"0.8rem"}):null,title:"New branch"},n.createElement(c.x,{c:"dimmed",size:"sm"},"You've created new branch"," ",n.createElement(c.x,{variant:"link",component:"span",inherit:!0},"fix-notifications")," ","from master"),n.createElement(c.x,{size:"xs",mt:4},"2 hours ago")),n.createElement(s.T.Item,{bullet:m?n.createElement(l.Z,{size:"0.8rem"}):null,title:"Commits"},n.createElement(c.x,{c:"dimmed",size:"sm"},"You've pushed 23 commits to"," ",n.createElement(c.x,{variant:"link",component:"span",inherit:!0},"fix-notifications")," ","branch"),n.createElement(c.x,{size:"xs",mt:4},"52 minutes ago")),n.createElement(s.T.Item,{title:"Pull request",bullet:m?n.createElement(a.Z,{size:"0.8rem"}):null,lineVariant:"dashed"},n.createElement(c.x,{c:"dimmed",size:"sm"},"You've submitted a pull request"," ",n.createElement(c.x,{variant:"link",component:"span",inherit:!0},"Fix incorrect notification message (#187)")," "),n.createElement(c.x,{size:"xs",mt:4},"34 minutes ago")),n.createElement(s.T.Item,{title:"Code review",bullet:m?n.createElement(o.Z,{size:"0.8rem"}):null},n.createElement(c.x,{c:"dimmed",size:"sm"},n.createElement(c.x,{variant:"link",component:"span",inherit:!0},"Robert Gluesticker")," ","left a code review on your pull request"),n.createElement(c.x,{size:"xs",mt:4},"12 minutes ago")))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=10231)}),_N_E=e.O()}]);