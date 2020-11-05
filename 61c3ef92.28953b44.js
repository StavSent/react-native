(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},457:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(7),a=(n(0),n(1006)),i={id:"fast-refresh",title:"Fast Refresh"},s={unversionedId:"fast-refresh",id:"version-0.61/fast-refresh",isDocsHomePage:!1,title:"Fast Refresh",description:'Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. With Fast Refresh enabled, most edits should be visible within a second or two.',source:"@site/versioned_docs/version-0.61/fast-refresh.md",slug:"/fast-refresh",permalink:"/docs/0.61/fast-refresh",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/fast-refresh.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/docs",previous:{title:"More Resources",permalink:"/docs/0.61/more-resources"},next:{title:"Platform Specific Code",permalink:"/docs/0.61/platform-specific-code"}},l=[{value:"How It Works",id:"how-it-works",children:[]},{value:"Error Resilience",id:"error-resilience",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Tips",id:"tips",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. With Fast Refresh enabled, most edits should be visible within a second or two.'),Object(a.b)("h2",{id:"how-it-works"},"How It Works"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If you edit a module that ",Object(a.b)("strong",{parentName:"li"},"only exports React component(s)"),", Fast Refresh will update the code only for that module, and re-render your component. You can edit anything in that file, including styles, rendering logic, event handlers, or effects."),Object(a.b)("li",{parentName:"ul"},"If you edit a module with exports that ",Object(a.b)("em",{parentName:"li"},"aren't")," React components, Fast Refresh will re-run both that module, and the other modules importing it. So if both ",Object(a.b)("inlineCode",{parentName:"li"},"Button.js")," and ",Object(a.b)("inlineCode",{parentName:"li"},"Modal.js")," import ",Object(a.b)("inlineCode",{parentName:"li"},"Theme.js"),", editing ",Object(a.b)("inlineCode",{parentName:"li"},"Theme.js")," will update both components."),Object(a.b)("li",{parentName:"ul"},"Finally, if you ",Object(a.b)("strong",{parentName:"li"},"edit a file")," that's ",Object(a.b)("strong",{parentName:"li"},"imported by modules outside of the React tree"),", Fast Refresh ",Object(a.b)("strong",{parentName:"li"},"will fall back to doing a full reload"),". You might have a file which renders a React component but also exports a value that is imported by a ",Object(a.b)("strong",{parentName:"li"},"non-React component"),". For example, maybe your component also exports a constant, and a non-React utility module imports it. In that case, consider migrating the query to a separate file and importing it into both files. This will re-enable Fast Refresh to work. Other cases can usually be solved in a similar way.")),Object(a.b)("h2",{id:"error-resilience"},"Error Resilience"),Object(a.b)("p",null,"If you make a ",Object(a.b)("strong",{parentName:"p"},"syntax error")," during a Fast Refresh session, you can fix it and save the file again. The redbox will disappear. Modules with syntax errors are prevented from running, so you won't need to reload the app."),Object(a.b)("p",null,"If you make a ",Object(a.b)("strong",{parentName:"p"},"runtime error during the module initialization")," (for example, typing ",Object(a.b)("inlineCode",{parentName:"p"},"Style.create")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"StyleSheet.create"),"), the Fast Refresh session will continue once you fix the error. The redbox will disappear, and the module will be updated."),Object(a.b)("p",null,"If you make a mistake that leads to a ",Object(a.b)("strong",{parentName:"p"},"runtime error inside your component"),", the Fast Refresh session will ",Object(a.b)("em",{parentName:"p"},"also")," continue after you fix the error. In that case, React will remount your application using the updated code."),Object(a.b)("p",null,"If you have ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"error boundaries")," in your app (which is a good idea for graceful failures in production), they will retry rendering on the next edit after a redbox. In that sense, having an error boundary can prevent you from always getting kicked out to the root app screen. However, keep in mind that error boundaries shouldn't be ",Object(a.b)("em",{parentName:"p"},"too")," granular. They are used by React in production, and should always be designed intentionally."),Object(a.b)("h2",{id:"limitations"},"Limitations"),Object(a.b)("p",null,"Fast Refresh tries to preserve local React state in the component you're editing, but only if it's safe to do so. Here's a few reasons why you might see local state being reset on every edit to a file:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Local state is not preserved for class components (only function components and Hooks preserve state)."),Object(a.b)("li",{parentName:"ul"},"The module you're editing might have ",Object(a.b)("em",{parentName:"li"},"other")," exports in addition to a React component."),Object(a.b)("li",{parentName:"ul"},"Sometimes, a module would export the result of calling higher-order component like ",Object(a.b)("inlineCode",{parentName:"li"},"createNavigationContainer(MyScreen)"),". If the returned component is a class, state will be reset.")),Object(a.b)("p",null,"In longer term, as more of your codebase moves to function components and Hooks, you can expect state to be preserved in more cases."),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fast Refresh preserves React local state in function components (and Hooks) by default."),Object(a.b)("li",{parentName:"ul"},"Sometimes you might want to ",Object(a.b)("em",{parentName:"li"},"force")," the state to be reset, and a component to be remounted. For example, this can be handy if you're tweaking an animation that only happens on mount. To do this, you can add ",Object(a.b)("inlineCode",{parentName:"li"},"// @refresh reset")," anywhere in the file you're editing. This directive is local to the file, and instructs Fast Refresh to remount components defined in that file on every edit."),Object(a.b)("li",{parentName:"ul"},"You can put ",Object(a.b)("inlineCode",{parentName:"li"},"console.log")," or ",Object(a.b)("inlineCode",{parentName:"li"},"debugger;")," into the components you edit during a Fast Refresh session.")))}u.isMDXComponent=!0}}]);