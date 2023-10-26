(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},79357:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/typescript",function(){return t(12025)}])},12025:function(e,n,t){"use strict";t.r(n);var o=t(85893),r=t(11151),s=t(19905),i=t(9904);let c=(0,s.A)(i.us.TypeScript);function a(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usage-with-typescript",children:"Usage with TypeScript"}),"\n",(0,o.jsxs)(n.p,{children:["All ",(0,o.jsx)(n.code,{children:"@mantine/*"})," packages are fully compatible with TypeScript. All examples in the documentation\nare written in TypeScript – you can copy-paste them to your project without any changes."]}),"\n",(0,o.jsxs)(n.p,{children:["This guide will help you get familiar with types that ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package exports."]}),"\n",(0,o.jsx)(n.h2,{id:"components-props-types",children:"Components props types"}),"\n",(0,o.jsxs)(n.p,{children:["Each ",(0,o.jsx)(n.code,{children:"@mantine/"})," package that exports components, exports props types for these components as well.\nYou can import component props types by adding ",(0,o.jsx)(n.code,{children:"Props"})," to the component name,\nfor example, you can import Button and DatePicker components props like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import type { ButtonProps } from '@mantine/core';\nimport type { DatePickerProps } from '@mantine/dates';\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that there are two variations of props types: for polymorphic components and for regular components.\nRegular components props types include ",(0,o.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'X'>"}),", where ",(0,o.jsx)(n.code,{children:"X"})," is the root element\ntype, for example ",(0,o.jsx)(n.code,{children:"'div'"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Example of extending regular component props:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { GroupProps, Group } from '@mantine/core';\n\n// Interface includes `React.ComponentPropsWithoutRef<'div'>`\ninterface MyGroupProps extends GroupProps {\n  spacing: number;\n}\n\nfunction MyGroup({ spacing, ...others }: MyGroupProps) {\n  return <Group my={spacing} {...others} />;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/guides/polymorphic",children:"Polymorphic components"})," props types do not include ",(0,o.jsx)(n.code,{children:"React.ComponentPropsWithoutRef<'X'>"}),"\nbecause their root element depends on the ",(0,o.jsx)(n.code,{children:"component"})," prop value."]}),"\n",(0,o.jsxs)(n.p,{children:["Example of extending ",(0,o.jsx)(n.a,{href:"/guides/polymorphic",children:"polymorphic components"})," props:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { ButtonProps, Button, ElementProps } from '@mantine/core';\n\ninterface MyButtonProps extends ButtonProps, ElementProps<'button', keyof ButtonProps> {\n  height: number;\n}\n\nfunction MyButton({ height, ...others }: MyButtonProps) {\n  return <Button style={{ height }} {...others} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"elementprops-type",children:"ElementProps type"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ElementProps"})," is a utility type similar to ",(0,o.jsx)(n.code,{children:"React.ComponentPropsWithoutRef"}),", but with additional\nfeatures. It replaces native elements ",(0,o.jsx)(n.code,{children:"style"})," prop with Mantine ",(0,o.jsx)(n.a,{href:"/styles/style",children:"style prop"})," and\nallows omitting properties that are passed as a second type."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { ElementProps, ButtonProps } from '@mantine/core';\n\n// Equivalent of `React.ComponentPropsWithoutRef<'button'>`\ntype ButtonElementProps = ElementProps<'button'>;\n\n// Equivalent of `Omit<React.ComponentPropsWithoutRef<'button'>, 'color' | 'onClick'>`\ntype OmitColor = ElementProps<'button', 'color' | 'onClick'>;\n\n// Removes all Mantine component props from React component props\n// to avoid props types conflicts\n// Equivalent of `Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonProps>`\ntype OmitButtonProps = ElementProps<'button', keyof ButtonProps>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mantinetheme-type",children:"MantineTheme type"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MantineTheme"})," is a type of ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme object"}),". You can use it to add types\nto functions that accept theme object as an argument:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineTheme, useMantineTheme } from '@mantine/core';\n\nfunction getPrimaryColor(theme: MantineTheme) {\n  return theme.colors.blue[5];\n}\n\nfunction Demo() {\n  const theme = useMantineTheme();\n  return <div style={{ color: getPrimaryColor(theme) }} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mantinethemeoverride-type",children:"MantineThemeOverride type"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MantineThemeOverride"})," type is a deep partial of ",(0,o.jsx)(n.code,{children:"MantineTheme"}),". It can be used in functions\nthat accept theme override as an argument:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineThemeOverride, createTheme, mergeThemeOverrides } from '@mantine/core';\n\nconst baseTheme = createTheme({\n  fontFamily: 'Helvetica, sans-serif',\n});\n\nfunction mergeThemes(themes: MantineThemeOverride[]) {\n  return mergeThemeOverrides(baseTheme, ...themes);\n}\n\nconst overrideTheme = createTheme({\n  primaryColor: 'blue',\n});\n\nconst overrideTheme2 = createTheme({\n  cursorType: 'pointer',\n});\n\nconst mergedTheme = mergeThemes([overrideTheme, overrideTheme2]);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mantinecolorscheme-type",children:"MantineColorScheme type"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MantineColorScheme"})," is a union of ",(0,o.jsx)(n.code,{children:"'light' | 'dark' | 'auto'"})," values. You can use to add types\nto function that accept color scheme as an argument:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineColorScheme, useMantineColorScheme } from '@mantine/core';\n\nfunction getComputedColorScheme(colorScheme: MantineColorScheme) {\n  return colorScheme === 'auto' ? 'light' : colorScheme;\n}\n\nfunction Demo() {\n  const { colorScheme } = useMantineColorScheme();\n  const computed = getComputedColorScheme(colorScheme);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mantinesize-type",children:"MantineSize type"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"MantineSize"})," type is a union of ",(0,o.jsx)(n.code,{children:"'xs' | 'sm' | 'md' | 'lg' | 'xl'"})," values. You can use to add types\nto various props that accept size as an argument, for example, ",(0,o.jsx)(n.code,{children:"radius"}),", ",(0,o.jsx)(n.code,{children:"shadow"}),", ",(0,o.jsx)(n.code,{children:"p"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineSize, Paper } from '@mantine/core';\n\ninterface DemoProps {\n  size: MantineSize;\n  radius: MantineSize | (string & {}) | number;\n  shadow: MantineSize | string;\n}\n\nfunction Demo({ size, radius, shadow }: DemoProps) {\n  return <Paper radius={radius} shadow={shadow} p={size} m={size} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"theme-object-declarations",children:"Theme object declarations"}),"\n",(0,o.jsxs)(n.p,{children:["You can change ",(0,o.jsx)(n.code,{children:"theme.other"})," and ",(0,o.jsx)(n.code,{children:"theme.colors"})," types by extending ",(0,o.jsx)(n.code,{children:"MantineTheme"})," interface\nin ",(0,o.jsx)(n.code,{children:".d.ts"})," file. Create ",(0,o.jsx)(n.code,{children:"mantine.d.ts"})," anywhere in your project (must be included in ",(0,o.jsx)(n.code,{children:"tsconfig.json"}),")\nto extend theme object types."]}),"\n",(0,o.jsxs)(n.p,{children:["To override ",(0,o.jsx)(n.code,{children:"theme.other"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// mantine.d.ts\ndeclare module '@mantine/core' {\n  export interface MantineThemeOther {\n    myCustomProperty: string;\n    myCustomFunction: () => void;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To override ",(0,o.jsx)(n.code,{children:"theme.colors"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { MantineColorsTuple, DefaultMantineColor } from '@mantine/core';\n\ntype ExtendedCustomColors = 'primaryColorName' | 'secondaryColorName' | DefaultMantineColor;\n\ndeclare module '@mantine/core' {\n  export interface MantineThemeColorsOverride {\n    colors: Record<ExtendedCustomColors, MantineColorsTuple>;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note that extending theme type is not required, it is only needed if you want to\nmake your theme object types more strict and add autocomplete in your editor."})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(c,Object.assign({},e,{children:(0,o.jsx)(a,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=79357)}),_N_E=e.O()}]);