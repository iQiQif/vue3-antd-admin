(window.webpackJsonp=window.webpackJsonp||[]).push([["demos-button~21833f8f"],{"43b0":function(e,t,o){},"5eb2":function(e,t,o){"use strict";o("43b0")},"6cf3":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n.withScopeId)("data-v-53313dbd");Object(n.pushScopeId)("data-v-53313dbd");var i={class:"btn-rows"},a=Object(n.createTextVNode)("primary"),r=Object(n.createTextVNode)("warning"),l=Object(n.createTextVNode)("success");Object(n.popScopeId)();var d,u=c((function(e,t,o,d,u,s){var b=Object(n.resolveComponent)("a-alert"),m=Object(n.resolveComponent)("a-button"),p=Object(n.resolveComponent)("a-card");return Object(n.openBlock)(),Object(n.createBlock)("div",null,[Object(n.createVNode)(b,{message:"可扩展antd按钮样式功能",description:"继承自原ant-design-vue的a-button，轻易扩展按钮的type定制不同颜色，详细看@/components/button/button.vue",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),Object(n.createVNode)(p,null,{default:c((function(){return[Object(n.createVNode)("div",i,[Object(n.createVNode)(m,{type:"primary"},{default:c((function(){return[a]})),_:1}),Object(n.createVNode)(m,{type:"warning"},{default:c((function(){return[r]})),_:1}),Object(n.createVNode)(m,{type:"success"},{default:c((function(){return[l]})),_:1})])]})),_:1})])})),s=(o("b0c0"),o("ade3")),b=o("2c92"),m=o("cdeb"),p=o("b95b"),O=Object(n.defineComponent)({name:"custom-modal",components:(d={},Object(s.a)(d,b.a.name,b.a),Object(s.a)(d,m.a.name,m.a),Object(s.a)(d,"AButton",p.a),d)});o("c5ef"),O.render=u,O.__scopeId="data-v-53313dbd",t.default=O},"7a8f":function(e,t,o){},9634:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n.withScopeId)("data-v-6de5f68e");Object(n.pushScopeId)("data-v-6de5f68e");var i=Object(n.createTextVNode)(" 示意图："),a=Object(n.createTextVNode)(" (例如：//at.alicdn.com/t/font_1166867_7zdsgx6x88l.js) "),r=Object(n.createTextVNode)(" （例如：icon-huanfu1、icon-zhutipifu、icon-xinwendongtai1） "),l={key:1};Object(n.popScopeId)();var d=c((function(e,t,o,d,u,s){var b=Object(n.resolveComponent)("a-alert"),m=Object(n.resolveComponent)("preview-modal"),p=Object(n.resolveComponent)("a-input"),O=Object(n.resolveComponent)("a-form-item"),j=Object(n.resolveComponent)("icon-font"),f=Object(n.resolveComponent)("a-form"),v=Object(n.resolveComponent)("a-card");return Object(n.openBlock)(),Object(n.createBlock)("div",null,[Object(n.createVNode)(b,{message:"自定义图标",description:"使用阿里图标库，可以有效减小项目的体积，支持离线本地图标和在线图标",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),Object(n.createVNode)(v,null,{default:c((function(){return[i,Object(n.createVNode)("img",{onClick:t[1]||(t[1]=function(){return e.showPreview&&e.showPreview.apply(e,arguments)}),class:"image-demo",src:"http://ww1.sinaimg.cn/large/005IOlAWgy1gl8bm4ot9dj314r0opabq.jpg"}),e.visible?(Object(n.openBlock)(),Object(n.createBlock)(m,{key:0,type:"image",visible:e.visible,"onUpdate:visible":t[2]||(t[2]=function(t){return e.visible=t}),url:e.imageUrl},null,8,["visible","url"])):Object(n.createCommentVNode)("",!0),Object(n.createVNode)(f,null,{default:c((function(){return[Object(n.createVNode)(O,{label:"阿里图标路径"},{default:c((function(){return[Object(n.createVNode)(p,{value:e.scriptUrl,"onUpdate:value":t[3]||(t[3]=function(t){return e.scriptUrl=t}),style:{width:"400px"},placeholder:"请输入你的阿里巴巴矢量图标库项目图标的路径"},null,8,["value"]),a]})),_:1}),Object(n.createVNode)(O,{label:"图标名字"},{default:c((function(){return[Object(n.createVNode)(p,{value:e.iconName,"onUpdate:value":t[4]||(t[4]=function(t){return e.iconName=t}),placeholder:"请输入图标的名字",style:{width:"200px"}},null,8,["value"]),r]})),_:1}),Object(n.createVNode)(O,{label:"效果"},{default:c((function(){return[e.scriptUrl&&e.iconName?(Object(n.openBlock)(),Object(n.createBlock)(j,{key:0,"script-url":e.scriptUrl,type:e.iconName,size:"30"},null,8,["script-url","type"])):(Object(n.openBlock)(),Object(n.createBlock)("span",l,"可以复制示例的地址和图标查看效果"))]})),_:1})]})),_:1})]})),_:1})])})),u=(o("b0c0"),o("5530")),s=o("ade3"),b=o("2c92"),m=o("7d88"),p={key:0,class:"toolbar"};o("d3b7"),o("ac1f"),o("3ca3"),o("5319"),o("1276"),o("ddb0"),o("2b3d");var O=o("8592"),j=o("c124"),f=o("c4bc"),v=o("1212"),g=o("56ae"),y=o("411c"),h=o("a54f"),k=Object(n.defineComponent)({name:"preview-modal",emits:["update:visible"],components:Object(s.a)({ZoomInOutlined:j.a,ZoomOutOutlined:f.a,RedoOutlined:v.a,DownloadOutlined:g.a,CloseCircleOutlined:y.a,OneToOneOutlined:h.a},O.a.name,O.a),props:{visible:{type:Boolean,default:!1},type:{type:String,default:"image"},url:{type:String,default:""}},setup:function(e,t){var o,c=t.emit,i=Object(n.ref)(null),a=Object(n.reactive)({timer:null,loading:!1,rotateDeg:0,imgScale:1,scaleCV:.07,initWidth:0,initHeight:0,contentStyle:{width:"60vw",height:"60vh"},imgStyle:{width:"",height:"",transform:"rotate(0)"}}),r=Object(n.computed)({get:function(){return e.visible},set:function(e){return c("update:visible",e)}}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scale";a.imgStyle.width=a.initWidth*a.imgScale+"px",a.imgStyle.height=a.initHeight*a.imgScale+"px","init"===e?(a.imgStyle.maxWidth="",a.imgStyle.maxHeight=""):(a.imgStyle.maxWidth="none!important",a.imgStyle.maxHeight="none!important"),clearTimeout(o),o=setTimeout((function(){return i.value.classList.remove("active")}),1400),i.value.classList.add("active"),a.contentStyle={}};return Object(u.a)(Object(u.a)({},Object(n.toRefs)(a)),{},{imgScaleMask:i,isVisible:r,rotateImg:function(){a.rotateDeg-=90,a.imgStyle.transform="rotate(".concat(a.rotateDeg,"deg)")},saveImg:function(e){var t=new Blob([""],{type:"application/octet-stream"}),o=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download=e.replace(/(.*\/)*([^.]+.*)/gi,"$2").split("?")[0];var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(c),URL.revokeObjectURL(o)},zoomInImg:function(){a.imgScale+=a.scaleCV,l()},zoomOutImg:function(){a.imgScale-=a.scaleCV,l()},handZoom:l,imgLoaded:function(e){var t;if(null!==(t=e.currentTarget)&&void 0!==t&&t.complete){var o=getComputedStyle(e.currentTarget),n=o.width,c=o.height;a.imgStyle.width=n,a.imgStyle.height=c,a.initWidth=parseFloat(n),a.initHeight=parseFloat(c)}},resetImg:function(){a.imgScale=1,l()}})}});o("5eb2"),k.render=function(e,t,o,c,i,a){var r=Object(n.resolveComponent)("close-circle-outlined"),l=Object(n.resolveComponent)("a-spin"),d=Object(n.resolveComponent)("zoom-in-outlined"),u=Object(n.resolveComponent)("zoom-out-outlined"),s=Object(n.resolveComponent)("one-to-one-outlined"),b=Object(n.resolveComponent)("redo-outlined"),m=Object(n.resolveComponent)("download-outlined");return Object(n.openBlock)(),Object(n.createBlock)(n.Teleport,{to:"body"},[e.isVisible?(Object(n.openBlock)(),Object(n.createBlock)("div",{key:0,onClick:t[6]||(t[6]=Object(n.withModifiers)((function(t){return e.isVisible=!1}),["self"])),class:"preview-modal"},[Object(n.createVNode)(r,{onClick:t[1]||(t[1]=function(t){return e.isVisible=!1}),class:"close-icon"}),Object(n.createVNode)("div",{class:"preview-content",style:e.contentStyle},[Object(n.createVNode)(l,{spinning:e.loading},{default:Object(n.withCtx)((function(){return["image"===e.type?(Object(n.openBlock)(),Object(n.createBlock)("img",{key:0,onLoad:t[2]||(t[2]=Object(n.withModifiers)((function(){return e.imgLoaded&&e.imgLoaded.apply(e,arguments)}),["stop"])),ref:"img",style:e.imgStyle,src:e.url,alt:""},null,44,["src"])):Object(n.createCommentVNode)("",!0),"video"===e.type?(Object(n.openBlock)(),Object(n.createBlock)("video",{key:1,ref:"video",onCanplay:t[3]||(t[3]=function(t){return e.loading=!1}),onLoadstart:t[4]||(t[4]=function(t){return e.loading=!0}),src:e.url,controls:"",autoplay:""},null,40,["src"])):Object(n.createCommentVNode)("",!0),Object(n.createVNode)("div",{ref:"imgScaleMask",class:"img-scale-mask"},Object(n.toDisplayString)(~~(100*e.imgScale)+"%"),513)]})),_:1},8,["spinning"])],4),"image"===e.type?(Object(n.openBlock)(),Object(n.createBlock)("div",p,[Object(n.createVNode)(d,{onClick:e.zoomInImg,title:"放大"},null,8,["onClick"]),Object(n.createVNode)(u,{onClick:e.zoomOutImg,title:"缩放"},null,8,["onClick"]),Object(n.createVNode)(s,{onClick:e.resetImg,title:"原始比例"},null,8,["onClick"]),Object(n.createVNode)(b,{onClick:e.rotateImg,title:"旋转"},null,8,["onClick"]),Object(n.createVNode)(m,{onClick:t[5]||(t[5]=function(t){return e.saveImg(e.url)}),title:"下载"})])):Object(n.createCommentVNode)("",!0)])):Object(n.createCommentVNode)("",!0)])};var C,w=k,V=Object(n.defineComponent)({name:"custom-modal",components:(C={},Object(s.a)(C,b.a.name,b.a),Object(s.a)(C,"IconFont",m.a),Object(s.a)(C,"PreviewModal",w),C),setup:function(){var e=Object(n.reactive)({scriptUrl:"",iconName:"",visible:!1,imageUrl:""});return Object(u.a)(Object(u.a)({},Object(n.toRefs)(e)),{},{showPreview:function(t){e.imageUrl=t.target.currentSrc,e.visible=!0}})}});o("c3f1"),V.render=d,V.__scopeId="data-v-6de5f68e",t.default=V},c3f1:function(e,t,o){"use strict";o("e220")},c5ef:function(e,t,o){"use strict";o("7a8f")},e220:function(e,t,o){}}]);