(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{21:function(e,n,s){"use strict";s.r(n);var t,r,a,i,c=s(1),l=s.n(c),o=s(8),d=s.n(o),h=s(2),p=s(3),f=Object(p.a)(t||(t=Object(h.a)(['\n  /* ------------------- */\n  /* Custom properties   */\n  /* ------------------- */\n\n  :root {\n    /* colors */\n    --clr-dark: 230 35% 7%;\n    --clr-light: 231 77% 90%;\n    --clr-white: 0 0% 100%;\n\n    /* font-sizes */\n    --fs-900: 9.375rem;\n    --fs-800: 6.25rem;\n    --fs-700: 3.5rem;\n    --fs-600: 2rem;\n    --fs-500: 1.75rem;\n    --fs-400: 1.125rem;\n    --fs-300: 1rem;\n    --fs-200: 0.875rem;\n    \n    /* font-families */\n    --ff-serif: "Bellefair", serif;\n    --ff-sans-cond: "Barlow Condensed", sans-serif;\n    --ff-sans-normal: "Barlow", sans-serif;\n  }\n\n  /* ------------------- */\n  /* Reset               */\n  /* ------------------- */\n\n  /* https://piccalil.li/blog/a-modern-css-reset/ */\n\n  /* Box sizing */\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  /* Reset margins */\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  p,\n  figure,\n  picture {\n    margin: 0;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  p {\n    font-weight: 400;\n  }\n\n  /* set up the body */\n  body {\n    font-family: var(--ff-sans-normal);\n    font-size: var(--fs-400);\n    background-color: hsl( var(--clr-dark) );\n    color: hsl( var(--clr-white) );\n    line-height: 1.5;\n    min-height: 100vh;\n  }\n\n  /* make images easier to work with */\n  img,\n  picutre {\n    max-width: 100%;\n    display: block;\n  }\n\n  /* make form elements easier to work with */\n  input,\n  button,\n  textarea,\n  select {\n    font: inherit;\n  }\n\n  /* remove animations for people who\'ve turned them off */\n  @media (prefers-reduced-motion: reduce) {\n    *,\n    *::before,\n    *::after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n\n  /* ------------------- */\n  /* Utility classes     */\n  /* ------------------- */\n\n  /* GENERAL */\n\n  .flex {\n    display: flex;\n    gap: var(--gap, 1rem);\n  }\n\n  .grid {\n    display: grid;\n    gap: var(--gap, 1rem);\n  }\n\n  .flow > *:where(:not(:first-child)) {\n    margin-top: var(--flow-space, 1rem);\n    outline: 1px solid red;\n  }\n\n  .container {\n    padding-inline: 2em; /* padding at left and right */\n    margin-inline: auto; /* margin at left and right */\n    max-width: 80rem;\n  }\n\n  /* screen reader only */\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap; /* added line */\n    border: 0;\n  }\n\n  /* COLORS */\n  .bg-dark { background-color: hsl( var(--clr-dark) );}\n  .bg-accent { background-color: hsl( var(--clr-light) );}\n  .bg-white { background-color: hsl( var(--clr-white) );}\n\n  .text-dark { color: hsl( var(--clr-dark) );}\n  .text-accent { color: hsl( var(--clr-light) );}\n  .text-white { color: hsl( var(--clr-white) );}\n\n  /* TYPOGRAPHY */\n  .ff-serif { font-family: var(--ff-serif); } \n  .ff-sans-cond { font-family: var(--ff-sans-cond); } \n  .ff-sans-normal { font-family: var(--ff-sans-normal); } \n\n  .letter-spacing-1 { letter-spacing: 4.75px; } \n  .letter-spacing-2 { letter-spacing: 2.7px; } \n  .letter-spacing-3 { letter-spacing: 2.35px; } \n\n  .uppercase { text-transform: uppercase; }\n\n  .fs-900 { font-size: var(--fs-900); }\n  .fs-800 { font-size: var(--fs-800); }\n  .fs-700 { font-size: var(--fs-700); }\n  .fs-600 { font-size: var(--fs-600); }\n  .fs-500 { font-size: var(--fs-500); }\n  .fs-400 { font-size: var(--fs-400); }\n  .fs-300 { font-size: var(--fs-300); }\n  .fs-200 { font-size: var(--fs-200); }\n\n  .fs-900,\n  .fs-800,\n  .fs-700,\n  .fs-600 {\n    line-height: 1.1;\n  }\n\n  .numbered-title {\n    font-family: var(--ff-sans-cond);\n    font-size: var(--fs-500);\n    text-transform: uppercase;\n    letter-spacing: 4.72px;\n  }\n\n  .numbered-title span {\n    margin-right: 0.5em;\n    font-weight: 700;\n    color: hsl( var(--clr-white) / .25 );\n  }\n']))),j=s(0),b=function(){return Object(j.jsxs)("section",{id:"colors",style:{margin:"4rem 0"},children:[Object(j.jsxs)("h2",{className:"numbered-title",children:[Object(j.jsx)("span",{children:"01 "}),"Colors"]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("div",{style:{flexGrow:1},children:[Object(j.jsx)("div",{className:"bg-dark text-white ff-serif fs-500",style:{padding:"3rem 1rem 1rem",border:"1px solid white"},children:"#0B0D17"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"text-accent",children:"RGB"})," 11, 13, 23"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"text-accent",children:"HSL"})," 230\xb0, 35%, 7%"]})]}),Object(j.jsxs)("div",{style:{flexGrow:1},children:[Object(j.jsx)("div",{className:"bg-accent text-dark ff-serif fs-500",style:{padding:"3rem 1rem 1rem",border:"1px solid white"},children:"#0B0D17"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"text-accent",children:"RGB"})," 11, 13, 23"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"text-accent",children:"HSL"})," 230\xb0, 35%, 7%"]})]}),Object(j.jsxs)("div",{style:{flexGrow:1},children:[Object(j.jsx)("div",{className:"bg-white text-dark ff-serif fs-500",style:{padding:"3rem 1rem 1rem",border:"1px solid white"},children:"#0B0D17"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"text-accent",children:"RGB"})," 11, 13, 23"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"text-accent",children:"HSL"})," 230\xb0, 35%, 7%"]})]})]})]})},m=function(){return Object(j.jsxs)("section",{id:"typography",style:{margin:"4rem 0"},children:[Object(j.jsxs)("h2",{className:"numbered-title",children:[Object(j.jsx)("span",{children:"02 "}),"Typography"]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("div",{className:"flow",style:{flexBasis:"100%","--flow-space":"4rem"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Heading 1 - Bellefair Regular - 150px"}),Object(j.jsx)("p",{className:"fs-900 ff-serif uppercase",children:"Earth"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Heading 2 - Bellefair Regular - 100px"}),Object(j.jsx)("p",{className:"fs-800 ff-serif uppercase",children:"Venus"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Heading 3 - Bellefair Regular - 56px"}),Object(j.jsx)("p",{className:"fs-700 ff-serif uppercase",children:"Jupiter & Saturn"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Heading 4 - Bellefair Regular - 32px"}),Object(j.jsx)("p",{className:"fs-600 ff-serif uppercase",children:"Uranus, Neptune, & Pluto"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space"}),Object(j.jsx)("p",{className:"text-accent fs-500 ff-sans-cond uppercase letter-spacing-1",children:"So, you want to travel to space"})]})]}),Object(j.jsxs)("div",{className:"flow",style:{flexBasis:"100%","--flow-space":"4rem"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Subheading 1 - Bellefair Regular - 28px"}),Object(j.jsx)("p",{className:"fs-500 ff-serif uppercase",children:"384,400 km"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space"}),Object(j.jsx)("p",{className:"fs-200 uppercase ff-sans-cond letter-spacing-3",children:"Avg. Distance"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space"}),Object(j.jsx)("p",{className:"fs-300 uppercase ff-sans-cond letter-spacing-2",children:"Europa"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-accent",children:"Body Text"}),Object(j.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi."," "]})]})]})]})]})},x=p.b.a(r||(r=Object(h.a)(["\n  position: relative;\n  display: grid;\n  z-index: 1;\n  place-items: center;\n  padding: 0 2em;\n  border-radius: 50%;\n  aspect-ratio: 1;\n  text-decoration: none;\n\n  ::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    opacity: 0;\n    background: hsl(var(--clr-white) / 0.15);\n    transition: opacity 500ms linear, transform 750ms ease-in-out;\n  }\n\n  :hover::after,\n  :focus::after {\n    opacity: 1;\n    transform: scale(1.5);\n  }\n"]))),u=function(){return Object(j.jsx)(x,{href:"#",className:"uppercase ff-serif fs-600 text-dark bg-white",children:"Explore"})},g=p.b.div(a||(a=Object(h.a)(["\n  > * {\n    cursor: pointer;\n    border: 0;\n    border-radius: 50%;\n    padding: 0.5em;\n    aspect-ratio: 1;\n    background-color: hsl(var(--clr-white) / 0.25);\n\n    &:hover,\n    &:focus {\n      background-color: hsl(var(--clr-white) / 0.5);\n    }\n  }\n\n  > [aria-selected='true'] {\n    background-color: hsl(var(--clr-white) / 1);\n  }\n"]))),O=function(){return Object(j.jsxs)(g,{className:"flex",children:[Object(j.jsx)("button",{"aria-selected":"true",children:Object(j.jsx)("span",{className:"sr-only",children:"Slide title"})}),Object(j.jsx)("button",{"aria-selected":"false",children:Object(j.jsx)("span",{className:"sr-only",children:"Slide title"})}),Object(j.jsx)("button",{"aria-selected":"false",children:Object(j.jsx)("span",{className:"sr-only",children:"Slide title"})})]})},v=p.b.nav(i||(i=Object(h.a)(["\n  .primary-navigation {\n    --gap: 8rem;\n    --underline-gap: 2rem;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n\n    a {\n      text-decoration: none;\n\n      > span {\n        font-weight: 700;\n        margin-right: 0.5em;\n      }\n    }\n  }\n\n  .underline-indicators {\n    > * {\n      cursor: pointer;\n      border: 0;\n      padding: var(--underline-gap, 1rem) 0;\n      border-bottom: 0.2rem solid hsl(var(--clr-white) / 0);\n\n      :hover,\n      :focus {\n        border-bottom-color: hsl(var(--clr-white) / 0.5);\n      }\n    }\n\n    .active,\n    [aria-selected='true'] {\n      border-bottom-color: hsl(var(--clr-white) / 1);\n    }\n  }\n\n  .tab-list {\n    --gap: 2rem;\n  }\n"]))),w=function(){return Object(j.jsx)(v,{children:Object(j.jsxs)("ul",{className:"primary-navigation underline-indicators flex",children:[Object(j.jsx)("li",{className:"active",children:Object(j.jsxs)("a",{className:"uppercase text-white letter-spacing-2",href:"#/",children:[Object(j.jsx)("span",{children:"01"}),"Active"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{className:"uppercase text-white letter-spacing-2",href:"#/",children:[Object(j.jsx)("span",{children:"02"}),"Hovered"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{className:"uppercase text-white letter-spacing-2",href:"#/",children:[Object(j.jsx)("span",{children:"03"}),"Idle"]})})]})})},N=function(){return Object(j.jsx)(v,{children:Object(j.jsxs)("div",{className:"tab-list underline-indicators flex",children:[Object(j.jsx)("button",{"aria-selected":"true",className:"uppercase ff-sans-cond text-accent bg-dark letter-spacing-2",children:"Moon"}),Object(j.jsx)("button",{"aria-selected":"false",className:"uppercase ff-sans-cond text-accent bg-dark letter-spacing-2",children:"Mars"}),Object(j.jsx)("button",{"aria-selected":"false",className:"uppercase ff-sans-cond text-accent bg-dark letter-spacing-2",children:"Europa"})]})})},y=function(){return Object(j.jsxs)("section",{id:"interactive-elements",style:{margin:"4rem 0"},children:[Object(j.jsxs)("h2",{className:"numbered-title",children:[Object(j.jsx)("span",{children:"02 "}),"Interactive Elements"]}),Object(j.jsx)("div",{children:Object(j.jsx)(w,{})}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{style:{marginTop:"5rem"},children:Object(j.jsx)(u,{})}),Object(j.jsxs)("div",{style:{marginBottom:"50vh","--flow-space":"4rem"},children:[Object(j.jsx)(N,{}),Object(j.jsx)(O,{})]})]})]})},k=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"uppercase",children:"Design system"}),Object(j.jsx)(b,{}),Object(j.jsx)(m,{}),Object(j.jsx)(y,{})]})};var B=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(k,{})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(n){var s=n.getCLS,t=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;s(e),t(e),r(e),a(e),i(e)}))};d.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),S()}},[[21,1,2]]]);
//# sourceMappingURL=main.a540ebf9.chunk.js.map