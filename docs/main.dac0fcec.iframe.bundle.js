(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{119:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var cpu=__webpack_require__.p+"static/media/cpu.ddc43efd.svg",jsx_runtime=(__webpack_require__(843),__webpack_require__(7));function categoryButton(props){return Object(jsx_runtime.jsx)("div",{className:"".concat(props.className," cat"),children:Object(jsx_runtime.jsxs)("span",{className:"cat-text",children:[Object(jsx_runtime.jsx)("img",{className:"cat-logo",src:cpu,alt:"logo"}),props.text]})})}categoryButton.__docgenInfo={description:"",methods:[],displayName:"categoryButton"};__webpack_exports__.a=categoryButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\atoms\\category-button\\category-button.js"]={name:"categoryButton",docgenInfo:categoryButton.__docgenInfo,path:"src\\components\\atoms\\category-button\\category-button.js"})},140:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(845);var _atoms_category_button_category_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(119),_atoms_button_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(141),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7);function workflow(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"workflow",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"text",children:props.text}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"btn-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_category_button_category_button__WEBPACK_IMPORTED_MODULE_2__.a,{text:"".concat(props.first)})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"btn-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_category_button_category_button__WEBPACK_IMPORTED_MODULE_2__.a,{text:"".concat(props.second)})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"btn-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_category_button_category_button__WEBPACK_IMPORTED_MODULE_2__.a,{text:"".concat(props.third)})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"btn-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_button_button__WEBPACK_IMPORTED_MODULE_3__.a,{text:"View report",size:"large",icon:"document"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"btn-spacing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_atoms_button_button__WEBPACK_IMPORTED_MODULE_3__.a,{text:"Allocation impact",backgroundColor:"success",size:"large",icon:"vector"})})]})}workflow.__docgenInfo={description:"",methods:[],displayName:"workflow"},__webpack_exports__.a=workflow,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\molecules\\workflow\\workflow.js"]={name:"workflow",docgenInfo:workflow.__docgenInfo,path:"src\\components\\molecules\\workflow\\workflow.js"})},141:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var Vector=__webpack_require__.p+"static/media/Vector.1fdc816f.svg",Vector1=__webpack_require__.p+"static/media/Vector1.d2c64cb2.svg",jsx_runtime=(__webpack_require__(840),__webpack_require__(7));function button_button_button(props){var sizeMap={small:{width:"105px",height:"40px"},medium:{width:"170px",height:"40px"},large:{width:"280px",height:"44px"}},btnStyle={backgroundColor:{primary:"#2F61BF",secondary:"#A1A1AA",success:"#D4D4D8"}[props.backgroundColor],width:sizeMap[props.size].width,height:sizeMap[props.size].height};return Object(jsx_runtime.jsx)("div",{style:btnStyle,className:"".concat(props.className," btn"),children:Object(jsx_runtime.jsxs)("span",{className:"btn-text",children:[props.icon&&Object(jsx_runtime.jsx)("img",{className:"btn-logo",src:"document"===props.icon?Vector:"vector"===props.icon?Vector1:"",alt:"logo"}),props.text]})})}button_button_button.__docgenInfo={description:"",methods:[],displayName:"button"};__webpack_exports__.a=button_button_button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\atoms\\button\\button.js"]={name:"button",docgenInfo:button_button_button.__docgenInfo,path:"src\\components\\atoms\\button\\button.js"})},164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(847);var workflow=__webpack_require__(140),upload=__webpack_require__.p+"static/media/upload.4a370e72.svg",jsx_runtime=(__webpack_require__(848),__webpack_require__(7));function upload_upload_upload(){return Object(jsx_runtime.jsx)("div",{className:"upload-logo-outer",children:Object(jsx_runtime.jsx)("img",{className:"upload-logo",src:upload,alt:"logo"})})}upload_upload_upload.__docgenInfo={description:"",methods:[],displayName:"upload"};var atoms_upload_upload=upload_upload_upload;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\atoms\\upload\\upload.js"]={name:"upload",docgenInfo:upload_upload_upload.__docgenInfo,path:"src\\components\\atoms\\upload\\upload.js"});var exit=__webpack_require__.p+"static/media/exit.0b3c60b6.svg";__webpack_require__(849);function exit_exit_exit(){return Object(jsx_runtime.jsx)("div",{className:"Exit-logo-outer",children:Object(jsx_runtime.jsx)("img",{className:"Exit-logo",src:exit,alt:"logo"})})}exit_exit_exit.__docgenInfo={description:"",methods:[],displayName:"exit"};var atoms_exit_exit=exit_exit_exit;function organisms_organisms(){return Object(jsx_runtime.jsxs)("div",{className:"org",children:[Object(jsx_runtime.jsx)(workflow.a,{text:"workflow",first:"Select component category",second:"Select component type",third:"Select region"}),Object(jsx_runtime.jsx)("hr",{className:"divider"}),Object(jsx_runtime.jsx)(workflow.a,{text:"Preference",first:"Select regions and plants",second:"Select types and components",third:"Select suppliers"}),Object(jsx_runtime.jsxs)("div",{className:"bot",children:[Object(jsx_runtime.jsx)("hr",{className:"bot-divider"}),Object(jsx_runtime.jsx)(atoms_upload_upload,{}),Object(jsx_runtime.jsx)(atoms_upload_upload,{}),Object(jsx_runtime.jsx)(atoms_exit_exit,{})]})]})}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\atoms\\exit\\exit.js"]={name:"exit",docgenInfo:exit_exit_exit.__docgenInfo,path:"src\\components\\atoms\\exit\\exit.js"}),organisms_organisms.__docgenInfo={description:"",methods:[],displayName:"organisms"};__webpack_exports__.a=organisms_organisms;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\organisms\\organisms.js"]={name:"organisms",docgenInfo:organisms_organisms.__docgenInfo,path:"src\\components\\organisms\\organisms.js"})},475:function(module,exports,__webpack_require__){__webpack_require__(476),__webpack_require__(637),__webpack_require__(638),__webpack_require__(851),__webpack_require__(852),__webpack_require__(857),__webpack_require__(858),__webpack_require__(856),__webpack_require__(853),__webpack_require__(859),__webpack_require__(854),__webpack_require__(855),__webpack_require__(860),module.exports=__webpack_require__(836)},543:function(module,exports){},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(342)},835:function(module,exports,__webpack_require__){},836:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(342).configure)([__webpack_require__(837),__webpack_require__(838)],module,!1)}).call(this,__webpack_require__(196)(module))},837:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=837},838:function(module,exports,__webpack_require__){var map={"./components/atoms/button/button.stories.jsx":839,"./components/atoms/category-button/category-button.stories.jsx":842,"./components/molecules/workflow/workflow.stories.jsx":844,"./components/organisms/organisms.stories.jsx":846,"./pages/template/template.stories.jsx":861};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=838},839:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Blue",(function(){return Blue})),__webpack_require__.d(__webpack_exports__,"Medium",(function(){return Medium})),__webpack_require__.d(__webpack_exports__,"LargeDocument",(function(){return LargeDocument})),__webpack_require__.d(__webpack_exports__,"LargeVector",(function(){return LargeVector}));var C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(49),_button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(141)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7);__webpack_exports__.default={title:"Atoms/Button",component:_button__WEBPACK_IMPORTED_MODULE_2__.a,parameters:{layout:"centered"}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.a,Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Blue=Template.bind({});Blue.args={text:"apply",size:"small",backgroundColor:"primary"};var Medium=Template.bind({});Medium.args={text:"Generate report",size:"medium",backgroundColor:"secondary"};var LargeDocument=Template.bind({});LargeDocument.args={text:"View report",size:"large",backgroundColor:"secondary",icon:"document"};var LargeVector=Template.bind({});LargeVector.args={text:"Allocation impact",size:"large",backgroundColor:"success",icon:"vector"},Blue.parameters=Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Blue.parameters),Medium.parameters=Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Medium.parameters),LargeDocument.parameters=Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},LargeDocument.parameters),LargeVector.parameters=Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},LargeVector.parameters)},840:function(module,exports,__webpack_require__){},842:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Categorybutton",(function(){return Categorybutton}));var C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(49),_category_button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(119)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7);__webpack_exports__.default={title:"Atoms/CategoryButton",component:_category_button__WEBPACK_IMPORTED_MODULE_2__.a,parameters:{layout:"centered"}};var Categorybutton=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_category_button__WEBPACK_IMPORTED_MODULE_2__.a,Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});Categorybutton.args={text:"Select component category"},Categorybutton.parameters=Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <CategoryButton {...args} />"}},Categorybutton.parameters)},843:function(module,exports,__webpack_require__){},844:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"workflow",(function(){return workflow}));var C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(49),_workflow__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(140)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7);__webpack_exports__.default={title:"Molecules/Workflow",component:_workflow__WEBPACK_IMPORTED_MODULE_2__.a,parameters:{layout:"centered"}};var workflow=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_workflow__WEBPACK_IMPORTED_MODULE_2__.a,Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});workflow.args={text:"workflow",first:"Select component category",second:"Select component type",third:"Select region"},workflow.parameters=Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Workflow {...args} />"}},workflow.parameters)},845:function(module,exports,__webpack_require__){},846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"organisms",(function(){return organisms}));var C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(49),_organisms__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(164)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7);__webpack_exports__.default={title:"Organisms/Organisms",component:_organisms__WEBPACK_IMPORTED_MODULE_2__.a,parameters:{layout:"centered"}};var organisms=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_organisms__WEBPACK_IMPORTED_MODULE_2__.a,Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});organisms.args={},organisms.parameters=Object(C_Users_leega_Desktop_github_react_storybook_tailwindcss_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Organisms {...args} />"}},organisms.parameters)},847:function(module,exports,__webpack_require__){},848:function(module,exports,__webpack_require__){},849:function(module,exports,__webpack_require__){},850:function(module,exports,__webpack_require__){},860:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(868),esm=__webpack_require__(4),parameters=(__webpack_require__(835),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},861:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"template",(function(){return template_stories_template}));var objectSpread2=__webpack_require__(49),organisms=(__webpack_require__(0),__webpack_require__(850),__webpack_require__(164)),jsx_runtime=__webpack_require__(7);function template_template(){return Object(jsx_runtime.jsxs)("div",{className:"template",children:[Object(jsx_runtime.jsx)("span",{className:"right",children:Object(jsx_runtime.jsx)(organisms.a,{})}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)("a",{href:"#temp",children:"Logo"})}),Object(jsx_runtime.jsx)("li",{style:{float:"right"},children:Object(jsx_runtime.jsx)("a",{className:"active",href:"#temp",children:"MENU ITEM"})}),Object(jsx_runtime.jsx)("li",{style:{float:"right"},children:Object(jsx_runtime.jsx)("a",{className:"active",href:"#temp",children:"MENU ITEM"})}),Object(jsx_runtime.jsx)("li",{style:{float:"right"},children:Object(jsx_runtime.jsx)("a",{className:"active",href:"#temp",children:"MENU ITEM"})}),Object(jsx_runtime.jsx)("li",{style:{float:"right"},children:Object(jsx_runtime.jsx)("a",{className:"active",href:"#temp",children:"MENU ITEM"})}),Object(jsx_runtime.jsx)("li",{style:{float:"right"},children:Object(jsx_runtime.jsx)("a",{className:"active",href:"#temp",children:"MENU ITEM"})}),Object(jsx_runtime.jsx)("li",{style:{float:"right"},children:Object(jsx_runtime.jsx)("a",{className:"active",href:"#temp",children:"MENU ITEM"})})]})]})}template_template.__docgenInfo={description:"",methods:[],displayName:"template"};var pages_template_template=template_template;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\pages\\template\\template.js"]={name:"template",docgenInfo:template_template.__docgenInfo,path:"src\\pages\\template\\template.js"});__webpack_exports__.default={title:"Template/TemplateFinal",component:pages_template_template};var template_stories_template=function Template(args){return Object(jsx_runtime.jsx)(pages_template_template,Object(objectSpread2.a)({},args))}.bind({});template_stories_template.args={},template_stories_template.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <TemplateFinal {...args} />"}},template_stories_template.parameters)}},[[475,2,3]]]);