"use strict";(self.webpackChunkopengarlic_site=self.webpackChunkopengarlic_site||[]).push([[1904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(r),f=n,p=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(p,s(s({ref:t},c),{},{components:r})):a.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={},s="GIFs",i={unversionedId:"Tutorial/gifs",id:"Tutorial/gifs",title:"GIFs",description:"You can create GIFs of your game mode for download.",source:"@site/docs/Tutorial/gifs.md",sourceDirName:"Tutorial",slug:"/Tutorial/gifs",permalink:"/docs/Tutorial/gifs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Events",permalink:"/docs/Tutorial/events"}},l={},m=[{value:"Create Frames for the GIF",id:"create-frames-for-the-gif",level:2},{value:"Provided Frames",id:"provided-frames",level:2},{value:"Frame Functions",id:"frame-functions",level:2},{value:"Create the Maker for your mode",id:"create-the-maker-for-your-mode",level:2},{value:"Import your maker",id:"import-your-maker",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gifs"},"GIFs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can create GIFs of your game mode for download.")),(0,n.kt)("h2",{id:"create-frames-for-the-gif"},"Create Frames for the GIF"),(0,n.kt)("p",null,"Konva and Canvas are available on the server for designing your frames.\nSome prebuilt frames for displaying text or an image are provided."),(0,n.kt)("p",null,"To make compatible frames:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All frames should be named as follows: ",(0,n.kt)("em",{parentName:"li"},"username.frame0000.png")),(0,n.kt)("li",{parentName:"ul"},"Username should be the name of the user who started that series."),(0,n.kt)("li",{parentName:"ul"},"Frames should be saved in the directory provided (see ",(0,n.kt)("a",{parentName:"li",href:"#create-the-maker-for-your-mode"},"Maker"),")"),(0,n.kt)("li",{parentName:"ul"},"For quality, it's suggested to save frames as png.\nCanvas will automatically use png if you use 'toDataURL'")),(0,n.kt)("h2",{id:"provided-frames"},"Provided Frames"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/FrameMakers/TextFrame.js"',title:'"modules/FrameMakers/TextFrame.js"'},"// Creates a png frame that display text\n// stageSize - { width:number, height:number }\n// slices - List of slices for the background generation.\n// colors - List of colors for background generation.\n// frameData - Text to display and username. { value:string, name:string }\n// savePath - Path to save the frame.\ncreateFrame:function(stageSize:object, slices:Array<object>, colors:Array<string>, frameData:object, savePath:string)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/FrameMakers/ImageFrame.js"',title:'"modules/FrameMakers/ImageFrame.js"'},"// stageSize:object { width:number, height:number }\n// slices - List of slices for the background generation.\n// colors - List of colors for background generation.\n// frameData - Text to display and username. { value:string, name:string }\n// savePath - Path to save the frame.\n// tmpPath - Path to save temporary intermediate image (auto deleted).\ncreateFrame:function(stageSize:object, slices:Array<object>, colors:Array<string>, frameData:object, savePath:string, tmpPath:string)\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Currently these frames are mostly calculated for the Standard mode,\nwhich uses 1000x600 size canvas. If you want to use a different size,\nyou may need to create your own.")),(0,n.kt)("h2",{id:"frame-functions"},"Frame Functions"),(0,n.kt)("p",null,"There are also some premade functions available to help with designing\nyour frames."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/FrameFunctions.js"',title:'"modules/FrameFunctions.js"'},"// In order to provide better randomization and avoid clustering\n// you provide grid slices in which to generate.\n\n// Creates a colored background with random stars.\n// stageSize - { width:number, height:number }\n// layer - The layer object on which to draw.\n// slices - List of slice objects passed to createStars.\n// colors - List of colors, one is randomly selected for\n//              the background, the rest used for stars.\ncreateBackground:function(stageSize:object, layer:Konva.Layer, slices:Array<object>, colors:Array<string>)\n\n// Creates random 4 and 8 pointed stars on the given layer.\n// slice - { startX:number, endX:number, startY:number, endY: number }\n// starColors - ['#000','#F00', ...] List of randomly selected colors\n// layer - The layer object on which to draw\ncreateStars:function(slice:object, starColors:Array<string>, layer:Konva.Layer)\n\n// Creates a chat bubble in which to display text.\n// Note: currently some of the calculations for placement may only work for Standard stage size.\n// stageSize - { width:number, height:number }\n// position - Upper-left corner of the bubble. { x:number, y:number }\n// layer - The layer object on which to draw.\ncreateTextBubble:function(stageSize:object, position:object, layer:Konva.Layer)\n\n// Creates an anonymous user icon.\n// position - Position to place the icon. { x:number, y:number }\n// layer - The layer object on which to draw.\ncreateUserIcon:function(position:object, layer:Konva.Layer)\n\n// Calculate width of text to display with the given font.\n// text - The text to measure.\n// font - Size & Font (ex. '12px sans-serif')\ngetTextWidth:function(text:string, font:string)\n\n// Creates a box for displaying a username.\n// position - Upper-left corner of the box. { x:number, y: number }\n// width - Width of the box. (getTextWidth can be useful for this)\n// height - Height of the box.\n// layer - The layer object on which to draw.\ncreateUserNameBox:function(position:object, width:number, height:number, layer:Konva.Layer)\n")),(0,n.kt)("h2",{id:"create-the-maker-for-your-mode"},"Create the Maker for your mode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create your color Array"),(0,n.kt)("li",{parentName:"ul"},"Create your Array of slices for the canvas"),(0,n.kt)("li",{parentName:"ul"},"Create your stage size"),(0,n.kt)("li",{parentName:"ul"},"Export a function named 'generateFrames' (see below)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/FrameMakers/MyExampleMaker.js"',title:'"modules/FrameMakers/MyExampleMaker.js"'},"import * as Lobby from '../Lobby.js'\n\n/**\n * @param {string} lobbyCode The code for the lobby\n * @param {string} playerName The name of the user who started the series\n * @param {string} outputDir The directory where the frames should be saved\n */\nexport const generateFrames = async (lobbyCode, playerName, outputDir) => {\n\n    // Get the data you saved for the lobby\n    const lobby = await Lobby.getLobbyData(lobbyCode);\n\n    // Process your data creating frames from the functions/modules\n    // provided or you create.\n\n}\n")),(0,n.kt)("p",null,"After your frames have been generated, the GIF will be automatically built\nfrom the frames and saved as ",(0,n.kt)("em",{parentName:"p"},"username.gif")," in the same directory. This will\nthen be converted to via into a data URL. This is then passed to the front-end\nin the 'GIFCreated' event. You can listen to this event on your end screen to\nreceive the image and start the download."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="client/src/components/screens/MyEndGame.js"',title:'"client/src/components/screens/MyEndGame.js"'},"const events = {\n        GIFCreated: (data, filename) => {\n            console.log('GIF Created');\n            setGifButtonDisabled(false);\n            let link = document.createElement('a');\n            link.href = data;\n            link.download = filename;\n            link.style = 'display:none';\n            document.body.appendChild(link);\n            link.click();\n            document.body.removeChild(link);\n        }\n    };\n\n    useEffect(() => {\n        for(const name in events) {\n            socket.on(name, events[name]);\n        }\n\n        return () => {\n            for(const name in events) {\n                socket.off(name, events[name]);\n            }\n        }\n        // eslint-disable-next-line\n    }, []);\n")),(0,n.kt)("h2",{id:"import-your-maker"},"Import your maker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modules/FrameMakers.js"',title:'"modules/FrameMakers.js"'},"import * as StandardFrameMaker from './FrameMakers/StandardFrameMaker.js';\nimport * as MyExampleMaker from './FrameMakers/MyExampleMaker.js';\n\nconst FrameMakers = {\n    'Standard': StandardFrameMaker\n    'MyExampleMode': MyExampleMaker     // The key should match the name of the mode saved in lobby.mode\n};\n\nexport default FrameMakers;\n")))}d.isMDXComponent=!0}}]);