(self["webpackChunksnippets_admin"]=self["webpackChunksnippets_admin"]||[]).push([[377],{14377:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("h4",[e._v("Avatar Upload")]),t("div",{staticClass:"demo"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-auto"},[t("avatar-upload",{staticClass:"avatar-1"})],1),t("div",{staticClass:"col-auto"},[t("avatar-upload",{staticClass:"avatar-2",attrs:{"output-width":100,"output-height":100}})],1),t("div",{staticClass:"col-auto"},[t("avatar-upload",{staticClass:"avatar-3",attrs:{"output-width":150,"output-height":150}})],1),t("div",{staticClass:"col-auto"},[t("avatar-upload",{staticClass:"avatar-4",attrs:{"aspect-ratio":.75,"output-width":150,"output-height":200}})],1)])]),t("div",{staticClass:"source"},[t("pre",{staticClass:"mb-0"},[e._v("// sfc\n"+e._s(e.content)+"\n      ")])]),t("h4",{staticClass:"mt-5"},[e._v("Materials Upload")]),t("div",{staticClass:"mb-4 demo"}),t("h4",{staticClass:"mt-5"},[e._v("Upload With CropperJS")]),t("div",{staticClass:"mb-4 demo"})])},i=[],o=function(){var e=this,t=e._self._c;return t("el-upload",{ref:"upload",staticClass:"avatar-upload",attrs:{accept:"image/*",action:e.action,"auto-upload":e.autoUpload,"show-file-list":!1,multiple:!1,"file-list":e.fileList,"before-upload":e.beforeUpload,"on-change":e.onChange,"on-success":e.handlerSuccess,"on-error":e.handlerError}},[e.url?t("div",{staticClass:"avatar-image"},[t("img",{attrs:{src:e.url,alt:e.urlName}})]):t("div",{staticClass:"d-flex align-items-center justify-content-center avatar-placeholder"},[t("custom-icon",{attrs:{name:"el-icon-user-solid"}})],1),t("cropper-modal",{ref:"modal",attrs:{"aspect-ratio":e.aspectRatio,"output-height":e.outputHeight,"output-width":e.outputWidth}})],1)},s=[],a=r(98787),l=r.n(a),u=(r(57658),r(62062),function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{width:"800px",title:"裁切图片",visible:e.visible,"append-to-body":""},on:{"update:visible":function(t){e.visible=t}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-8"},[t("div",{staticClass:"img-container"},[t("img",{ref:"image",staticClass:"img-fluid origin-image",attrs:{src:e.src,alt:e.src}})])]),t("div",{staticClass:"col-4"},[t("div",{ref:"preview1",staticClass:"image-preview-1",style:{borderRadius:1===e.aspectRatio?"50%":"8px"}}),t("div",{ref:"preview2",staticClass:"image-preview-2",style:{borderRadius:1===e.aspectRatio?"50%":"8px"}})])]),t("div",{staticClass:"text-right",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.clickConfirm}},[e._v("确定")])],1)])}),c=[],d=r(11540),p=r.n(d),f=r(92244),h=r.n(f),m=r(40255),v=r.n(m),g={name:"cropper-modal",components:{[h().name]:h(),[p().name]:p()},props:{aspectRatio:{type:Number,default:1},outputWidth:{type:Number,default:60},outputHeight:{type:Number,default:60}},data(){return{visible:!1,src:"",cropper:null,callback:null}},methods:{open(e,t){const r=this,n=new Image;this.callback=t,n.onload=function(){r.src=e,r.$nextTick((()=>{r.visible=!0,setTimeout((()=>{r.make()}))}))},n.src=e},make(){this.cropper=new(v())(this.$refs.image,{aspectRatio:this.aspectRatio,viewMode:1,dragMode:"move",preview:[this.$refs.preview1,this.$refs.preview2],autoCropArea:.6,cropBoxMovable:!1,cropBoxResizable:!1})},clickConfirm(){this.cropper&&this.cropper.getCroppedCanvas({width:this.outputWidth,height:this.outputHeight}).toBlob((e=>{"function"===typeof this.callback&&(this.visible=!1,this.callback(new File([e],Date.now()+".png",{type:"image/png"})))}),"image/png")}}},y=g,b=r(1001),_=(0,b.Z)(y,u,c,!1,null,"f5563a7c",null),C=_.exports,w={name:"avatar-upload",components:{[l().name]:l(),CropperModal:C},props:{action:{type:String,default:"http://47.106.123.18/api/minio/upload"},autoUpload:{type:Boolean,default:!1},needCropper:{type:Boolean,default:!0},fileList:{type:Array,default(){return[]}},maxSize:{type:Number,default:1048576},onSuccess:Function,onError:Function,aspectRatio:Number,outputWidth:Number,outputHeight:Number},data(){return{file:null,url:"",urlName:""}},methods:{beforeUpload(e){const t=/image\/./.test(e.type),r=e.size>this.maxSize;return t||this.$message.error("上传文件格式不对"),r&&this.$message.error("上传图片大小超过最大尺寸"+Math.ceil(this.maxSize/1024/1024)+"Mb"),t&&!r?Promise.resolve({status:"ready",name:e.name,size:e.size,percentage:0,uid:e.uid,raw:e}):Promise.reject(new Error("上传图片不合格"))},handlerSuccess(e,t,r){"function"===typeof this.onSuccess&&this.onSuccess(e,t,r)},handlerError(e,t,r){"function"===typeof this.onError&&this.onError(e,t,r)},onChange(e){if(this.file=e,!this.autoUpload&&"ready"===e.status){const t=e=>{this.beforeUpload(e).then((e=>{this.$refs.upload.clearFiles(),this.$refs.upload.uploadFiles.push(e),this.url=URL.createObjectURL(e.raw),this.urlName=""})).catch((e=>{console.error(e.message)}))};this.needCropper?this.makeCropper(e.raw).then((e=>{t(e)})):t(e.raw)}},makeCropper(e){return new Promise((t=>{URL&&this.$refs.modal.open(URL.createObjectURL(e),t)}))},submit(){this.autoUpload||this.$refs.upload.submit()}}},x=w,S=(0,b.Z)(x,o,s,!1,null,"1caaea68",null),k=S.exports,F=r(88722),$=r.n(F),E={name:"upload-index",components:{AvatarUpload:k},data(){return{content:$()}}},O=E,R=(0,b.Z)(O,n,i,!1,null,"31c20e53",null),T=R.exports},62062:function(e,t,r){"use strict";var n=r(19781),i=r(1702),o=r(47045),s=URLSearchParams.prototype,a=i(s.forEach);n&&!("size"in s)&&o(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},88722:function(e){e.exports='<template>\r\n  <el-upload\r\n    ref="upload"\r\n    class="avatar-upload"\r\n    accept="image/*"\r\n    :action="action"\r\n    :auto-upload="autoUpload"\r\n    :show-file-list="false"\r\n    :multiple="false"\r\n    :file-list="fileList"\r\n    :before-upload="beforeUpload"\r\n    :on-change="onChange"\r\n    :on-success="handlerSuccess"\r\n    :on-error="handlerError"\r\n  >\r\n    <div v-if="url" class="avatar-image">\r\n      <img :src="url" :alt="urlName">\r\n    </div>\r\n    <div v-else class="d-flex align-items-center justify-content-center avatar-placeholder">\r\n      <custom-icon name="el-icon-user-solid"></custom-icon>\r\n    </div>\r\n    <cropper-modal ref="modal" :aspect-ratio="aspectRatio" :output-height="outputHeight" :output-width="outputWidth"></cropper-modal>\r\n  </el-upload>\r\n</template>\r\n\r\n<script>\r\nimport { Upload } from \'element-ui\'\r\nimport CropperModal from \'@/components/cropper-modal\'\r\n\r\nexport default {\r\n  name: \'avatar-upload\',\r\n  components: {\r\n    [Upload.name]: Upload,\r\n    CropperModal,\r\n  },\r\n  props: {\r\n    action: {\r\n      type: String,\r\n      default: \'http://47.106.123.18/api/minio/upload\'\r\n    },\r\n    autoUpload: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    // Notes: autoUpload为 true时无效\r\n    needCropper: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    fileList: {\r\n      type: Array,\r\n      default () {\r\n        return []\r\n      }\r\n    },\r\n    // Avatar Image MaxSize (10Mb default)\r\n    maxSize: {\r\n      type: Number,\r\n      default: 1 * 1024 * 1024\r\n    },\r\n    onSuccess: Function,\r\n    onError: Function,\r\n    // Cropper Modal Output Image Size\r\n    aspectRatio: Number,\r\n    outputWidth: Number,\r\n    outputHeight: Number,\r\n  },\r\n  data () {\r\n    return {\r\n      file: null,\r\n      url: \'\',\r\n      urlName: \'\',\r\n    }\r\n  },\r\n  methods: {\r\n    beforeUpload (rawFile) {\r\n      const isImage = /image\\/./.test(rawFile.type)\r\n      const hasExceed = rawFile.size > this.maxSize\r\n      if (!isImage) {\r\n        this.$message.error(\'上传文件格式不对\')\r\n      }\r\n      if (hasExceed) {\r\n        this.$message.error(\'上传图片大小超过最大尺寸\' + Math.ceil(this.maxSize / 1024 / 1024) + \'Mb\')\r\n      }\r\n      if (isImage && !hasExceed) {\r\n        return Promise.resolve({\r\n          status: \'ready\',\r\n          name: rawFile.name,\r\n          size: rawFile.size,\r\n          percentage: 0,\r\n          uid: rawFile.uid,\r\n          raw: rawFile\r\n        })\r\n      }\r\n      return Promise.reject(new Error(\'上传图片不合格\'))\r\n    },\r\n    handlerSuccess (res, file, fileList) {\r\n      if (typeof this.onSuccess === \'function\') {\r\n        this.onSuccess(res, file, fileList)\r\n      }\r\n    },\r\n    handlerError (err, file, fileList) {\r\n      if (typeof this.onError === \'function\') {\r\n        this.onError(err, file, fileList)\r\n      }\r\n    },\r\n    onChange (file) {\r\n      this.file = file\r\n      // Make sure handler invoked on `handlerStart`.\r\n      if (!this.autoUpload && file.status === \'ready\') {\r\n        const validate = (rawFile) => {\r\n          this.beforeUpload(rawFile).then((data) => {\r\n            this.$refs.upload.clearFiles()\r\n            this.$refs.upload.uploadFiles.push(data)\r\n            this.url = URL.createObjectURL(data.raw)\r\n            this.urlName = \'\'\r\n          }).catch(err => {\r\n            console.error(err.message)\r\n          })\r\n        }\r\n        if (this.needCropper) {\r\n          this.makeCropper(file.raw).then(cropperRawFile => {\r\n            validate(cropperRawFile)\r\n          })\r\n        } else {\r\n          validate(file.raw)\r\n        }\r\n      }\r\n    },\r\n    makeCropper (rawFile) {\r\n      return new Promise((resolve) => {\r\n        if (URL) {\r\n          this.$refs.modal.open(URL.createObjectURL(rawFile), resolve)\r\n        }\r\n      })\r\n    },\r\n    submit () {\r\n      if (!this.autoUpload) {\r\n        this.$refs.upload.submit()\r\n      }\r\n    },\r\n  },\r\n}\r\n<\/script>\r\n\r\n<style lang="scss" scoped>\r\n@import "@/assets/style/mixins.scss";\r\n\r\n$avatar-width: 60px;\r\n$avatar-height: $avatar-width;\r\n.avatar-upload {\r\n  width: $avatar-width;\r\n  height: $avatar-height;\r\n  box-sizing: border-box;\r\n  border: 1px solid #efefef;\r\n  border-radius: 50%;\r\n  box-shadow: $box-shadow-sm;\r\n  overflow: hidden;\r\n  font-size: 2rem;\r\n  .avatar-image,\r\n  ::v-deep .el-upload {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n.avatar-placeholder {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: $gray-400;\r\n}\r\n.avatar-image > img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n</style>\r\n'},58737:function(e){var t=/^(attrs|props|on|nativeOn|class|style|hook)$/;function r(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce((function(e,n){var i,o,s,a,l;for(s in n)if(i=e[s],o=n[s],i&&t.test(s))if("class"===s&&("string"===typeof i&&(l=i,e[s]=i={},i[l]=!0),"string"===typeof o&&(l=o,n[s]=o={},o[l]=!0)),"on"===s||"nativeOn"===s||"hook"===s)for(a in o)i[a]=r(i[a],o[a]);else if(Array.isArray(i))e[s]=i.concat(o);else if(Array.isArray(o))e[s]=[i].concat(o);else for(a in o)i[a]=o[a];else e[s]=n[s];return e}),{})}},92244:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=82)}({0:function(e,t,r){"use strict";function n(e,t,r,n,i,o,s,a){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}r.d(t,"a",(function(){return n}))},11:function(e,t){e.exports=r(34511)},13:function(e,t){e.exports=r(63630)},4:function(e,t){e.exports=r(38816)},82:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-dialog__wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleWrapperClick(t)}}},[r("div",{key:e.key,ref:"dialog",class:["el-dialog",{"is-fullscreen":e.fullscreen,"el-dialog--center":e.center},e.customClass],style:e.style,attrs:{role:"dialog","aria-modal":"true","aria-label":e.title||"dialog"}},[r("div",{staticClass:"el-dialog__header"},[e._t("title",[r("span",{staticClass:"el-dialog__title"},[e._v(e._s(e.title))])]),e.showClose?r("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:e.handleClose}},[r("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]):e._e()],2),e.rendered?r("div",{staticClass:"el-dialog__body"},[e._t("default")],2):e._e(),e.$slots.footer?r("div",{staticClass:"el-dialog__footer"},[e._t("footer")],2):e._e()])])])},i=[];n._withStripped=!0;var o=r(13),s=r.n(o),a=r(11),l=r.n(a),u=r(4),c=r.n(u),d={name:"ElDialog",mixins:[s.a,c.a,l.a],props:{title:{type:String,default:""},modal:{type:Boolean,default:!0},modalAppendToBody:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},width:String,fullscreen:Boolean,customClass:{type:String,default:""},top:{type:String,default:"15vh"},beforeClose:Function,center:{type:Boolean,default:!1},destroyOnClose:Boolean},data:function(){return{closed:!1,key:0}},watch:{visible:function(e){var t=this;e?(this.closed=!1,this.$emit("open"),this.$el.addEventListener("scroll",this.updatePopper),this.$nextTick((function(){t.$refs.dialog.scrollTop=0})),this.appendToBody&&document.body.appendChild(this.$el)):(this.$el.removeEventListener("scroll",this.updatePopper),this.closed||this.$emit("close"),this.destroyOnClose&&this.$nextTick((function(){t.key++})))}},computed:{style:function(){var e={};return this.fullscreen||(e.marginTop=this.top,this.width&&(e.width=this.width)),e}},methods:{getMigratingConfig:function(){return{props:{size:"size is removed."}}},handleWrapperClick:function(){this.closeOnClickModal&&this.handleClose()},handleClose:function(){"function"===typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(e){!1!==e&&(this.$emit("update:visible",!1),this.$emit("close"),this.closed=!0)},updatePopper:function(){this.broadcast("ElSelectDropdown","updatePopper"),this.broadcast("ElDropdownMenu","updatePopper")},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}},mounted:function(){this.visible&&(this.rendered=!0,this.open(),this.appendToBody&&document.body.appendChild(this.$el))},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},p=d,f=r(0),h=Object(f["a"])(p,n,i,!1,null,null,null);h.options.__file="packages/dialog/src/component.vue";var m=h.exports;m.install=function(e){e.component(m.name,m)};t["default"]=m}})},47509:function(e){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=104)}({0:function(e,t,r){"use strict";function n(e,t,r,n,i,o,s,a){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}r.d(t,"a",(function(){return n}))},104:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"el-progress",class:["el-progress--"+e.type,e.status?"is-"+e.status:"",{"el-progress--without-text":!e.showText,"el-progress--text-inside":e.textInside}],attrs:{role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},["line"===e.type?r("div",{staticClass:"el-progress-bar"},[r("div",{staticClass:"el-progress-bar__outer",style:{height:e.strokeWidth+"px",backgroundColor:e.defineBackColor}},[r("div",{staticClass:"el-progress-bar__inner",style:e.barStyle},[e.showText&&e.textInside?r("div",{staticClass:"el-progress-bar__innerText",style:{color:e.textColor}},[e._v(e._s(e.content))]):e._e()])])]):r("div",{staticClass:"el-progress-circle",style:{height:e.width+"px",width:e.width+"px"}},[r("svg",{attrs:{viewBox:"0 0 100 100"}},[r("path",{staticClass:"el-progress-circle__track",style:e.trailPathStyle,attrs:{d:e.trackPath,stroke:e.defineBackColor,"stroke-width":e.relativeStrokeWidth,fill:"none"}}),r("path",{staticClass:"el-progress-circle__path",style:e.circlePathStyle,attrs:{d:e.trackPath,stroke:e.stroke,fill:"none","stroke-linecap":e.strokeLinecap,"stroke-width":e.percentage?e.relativeStrokeWidth:0}})])]),e.showText&&!e.textInside?r("div",{staticClass:"el-progress__text",style:{fontSize:e.progressTextSize+"px",color:e.textColor}},[e.status?r("i",{class:e.iconClass}):[e._v(e._s(e.content))]],2):e._e()])},i=[];n._withStripped=!0;var o={name:"ElProgress",props:{type:{type:String,default:"line",validator:function(e){return["line","circle","dashboard"].indexOf(e)>-1}},percentage:{type:Number,default:0,required:!0,validator:function(e){return e>=0&&e<=100}},status:{type:String,validator:function(e){return["success","exception","warning"].indexOf(e)>-1}},strokeWidth:{type:Number,default:6},strokeLinecap:{type:String,default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:[String,Array,Function],default:""},defineBackColor:{type:[String,Array,Function],default:"#ebeef5"},textColor:{type:[String,Array,Function],default:"#606266"},format:Function},computed:{barStyle:function(){var e={};return e.width=this.percentage+"%",e.backgroundColor=this.getCurrentColor(this.percentage),e},relativeStrokeWidth:function(){return(this.strokeWidth/this.width*100).toFixed(1)},radius:function(){return"circle"===this.type||"dashboard"===this.type?parseInt(50-parseFloat(this.relativeStrokeWidth)/2,10):0},trackPath:function(){var e=this.radius,t="dashboard"===this.type;return"\n        M 50 50\n        m 0 "+(t?"":"-")+e+"\n        a "+e+" "+e+" 0 1 1 0 "+(t?"-":"")+2*e+"\n        a "+e+" "+e+" 0 1 1 0 "+(t?"":"-")+2*e+"\n        "},perimeter:function(){return 2*Math.PI*this.radius},rate:function(){return"dashboard"===this.type?.75:1},strokeDashoffset:function(){var e=-1*this.perimeter*(1-this.rate)/2;return e+"px"},trailPathStyle:function(){return{strokeDasharray:this.perimeter*this.rate+"px, "+this.perimeter+"px",strokeDashoffset:this.strokeDashoffset}},circlePathStyle:function(){return{strokeDasharray:this.perimeter*this.rate*(this.percentage/100)+"px, "+this.perimeter+"px",strokeDashoffset:this.strokeDashoffset,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"}},stroke:function(){var e=void 0;if(this.color)e=this.getCurrentColor(this.percentage);else switch(this.status){case"success":e="#13ce66";break;case"exception":e="#ff4949";break;case"warning":e="#e6a23c";break;default:e="#20a0ff"}return e},iconClass:function(){return"warning"===this.status?"el-icon-warning":"line"===this.type?"success"===this.status?"el-icon-circle-check":"el-icon-circle-close":"success"===this.status?"el-icon-check":"el-icon-close"},progressTextSize:function(){return"line"===this.type?12+.4*this.strokeWidth:.111111*this.width+2},content:function(){return"function"===typeof this.format?this.format(this.percentage)||"":this.percentage+"%"}},methods:{getCurrentColor:function(e){return"function"===typeof this.color?this.color(e):"string"===typeof this.color?this.color:this.getLevelColor(e)},getLevelColor:function(e){for(var t=this.getColorArray().sort((function(e,t){return e.percentage-t.percentage})),r=0;r<t.length;r++)if(t[r].percentage>e)return t[r].color;return t[t.length-1].color},getColorArray:function(){var e=this.color,t=100/e.length;return e.map((function(e,r){return"string"===typeof e?{color:e,percentage:(r+1)*t}:e}))}}},s=o,a=r(0),l=Object(a["a"])(s,n,i,!1,null,null,null);l.options.__file="packages/progress/src/progress.vue";var u=l.exports;u.install=function(e){e.component(u.name,u)};t["default"]=u}})},98787:function(e,t,r){r(62062),r(57658),e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=59)}({0:function(e,t,r){"use strict";function n(e,t,r,n,i,o,s,a){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}r.d(t,"a",(function(){return n}))},11:function(e,t){e.exports=r(34511)},26:function(e,t){e.exports=r(58737)},43:function(e,t){e.exports=r(47509)},59:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition-group",{class:["el-upload-list","el-upload-list--"+e.listType,{"is-disabled":e.disabled}],attrs:{tag:"ul",name:"el-list"}},e._l(e.files,(function(t){return r("li",{key:t.uid,class:["el-upload-list__item","is-"+t.status,e.focusing?"focusing":""],attrs:{tabindex:"0"},on:{keydown:function(r){if(!("button"in r)&&e._k(r.keyCode,"delete",[8,46],r.key,["Backspace","Delete","Del"]))return null;!e.disabled&&e.$emit("remove",t)},focus:function(t){e.focusing=!0},blur:function(t){e.focusing=!1},click:function(t){e.focusing=!1}}},[e._t("default",["uploading"!==t.status&&["picture-card","picture"].indexOf(e.listType)>-1?r("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:t.url,alt:""}}):e._e(),r("a",{staticClass:"el-upload-list__item-name",on:{click:function(r){e.handleClick(t)}}},[r("i",{staticClass:"el-icon-document"}),e._v(e._s(t.name)+"\n      ")]),r("label",{staticClass:"el-upload-list__item-status-label"},[r("i",{class:{"el-icon-upload-success":!0,"el-icon-circle-check":"text"===e.listType,"el-icon-check":["picture-card","picture"].indexOf(e.listType)>-1}})]),e.disabled?e._e():r("i",{staticClass:"el-icon-close",on:{click:function(r){e.$emit("remove",t)}}}),e.disabled?e._e():r("i",{staticClass:"el-icon-close-tip"},[e._v(e._s(e.t("el.upload.deleteTip")))]),"uploading"===t.status?r("el-progress",{attrs:{type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:e.parsePercentage(t.percentage)}}):e._e(),"picture-card"===e.listType?r("span",{staticClass:"el-upload-list__item-actions"},[e.handlePreview&&"picture-card"===e.listType?r("span",{staticClass:"el-upload-list__item-preview",on:{click:function(r){e.handlePreview(t)}}},[r("i",{staticClass:"el-icon-zoom-in"})]):e._e(),e.disabled?e._e():r("span",{staticClass:"el-upload-list__item-delete",on:{click:function(r){e.$emit("remove",t)}}},[r("i",{staticClass:"el-icon-delete"})])]):e._e()],{file:t})],2)})),0)},i=[];n._withStripped=!0;var o=r(6),s=r.n(o),a=r(43),l=r.n(a),u={name:"ElUploadList",mixins:[s.a],data:function(){return{focusing:!1}},components:{ElProgress:l.a},props:{files:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},handlePreview:Function,listType:String},methods:{parsePercentage:function(e){return parseInt(e,10)},handleClick:function(e){this.handlePreview&&this.handlePreview(e)}}},c=u,d=r(0),p=Object(d["a"])(c,n,i,!1,null,null,null);p.options.__file="packages/upload/src/upload-list.vue";var f=p.exports,h=r(26),m=r.n(h);function v(e,t,r){var n=void 0;n=r.response?""+(r.response.error||r.response):r.responseText?""+r.responseText:"fail to post "+e+" "+r.status;var i=new Error(n);return i.status=r.status,i.method="post",i.url=e,i}function g(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(r){return t}}function y(e){if("undefined"!==typeof XMLHttpRequest){var t=new XMLHttpRequest,r=e.action;t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var n=new FormData;e.data&&Object.keys(e.data).forEach((function(t){n.append(t,e.data[t])})),n.append(e.filename,e.file,e.file.name),t.onerror=function(t){e.onError(t)},t.onload=function(){if(t.status<200||t.status>=300)return e.onError(v(r,e,t));e.onSuccess(g(t))},t.open("post",r,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var i=e.headers||{};for(var o in i)i.hasOwnProperty(o)&&null!==i[o]&&t.setRequestHeader(o,i[o]);return t.send(n),t}}var b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"el-upload-dragger",class:{"is-dragover":e.dragover},on:{drop:function(t){return t.preventDefault(),e.onDrop(t)},dragover:function(t){return t.preventDefault(),e.onDragover(t)},dragleave:function(t){t.preventDefault(),e.dragover=!1}}},[e._t("default")],2)},_=[];b._withStripped=!0;var C={name:"ElUploadDrag",props:{disabled:Boolean},inject:{uploader:{default:""}},data:function(){return{dragover:!1}},methods:{onDragover:function(){this.disabled||(this.dragover=!0)},onDrop:function(e){if(!this.disabled&&this.uploader){var t=this.uploader.accept;this.dragover=!1,t?this.$emit("file",[].slice.call(e.dataTransfer.files).filter((function(e){var r=e.type,n=e.name,i=n.indexOf(".")>-1?"."+n.split(".").pop():"",o=r.replace(/\/.*$/,"");return t.split(",").map((function(e){return e.trim()})).filter((function(e){return e})).some((function(e){return/\..+$/.test(e)?i===e:/\/\*$/.test(e)?o===e.replace(/\/\*$/,""):!!/^[^\/]+\/[^\/]+$/.test(e)&&r===e}))}))):this.$emit("file",e.dataTransfer.files)}}}},w=C,x=Object(d["a"])(w,b,_,!1,null,null,null);x.options.__file="packages/upload/src/upload-dragger.vue";var S,k,F=x.exports,$={inject:["uploader"],components:{UploadDragger:F},props:{type:String,action:{type:String,required:!0},name:{type:String,default:"file"},data:Object,headers:Object,withCredentials:Boolean,multiple:Boolean,accept:String,onStart:Function,onProgress:Function,onSuccess:Function,onError:Function,beforeUpload:Function,drag:Boolean,onPreview:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}},fileList:Array,autoUpload:Boolean,listType:String,httpRequest:{type:Function,default:y},disabled:Boolean,limit:Number,onExceed:Function},data:function(){return{mouseover:!1,reqs:{}}},methods:{isImage:function(e){return-1!==e.indexOf("image")},handleChange:function(e){var t=e.target.files;t&&this.uploadFiles(t)},uploadFiles:function(e){var t=this;if(this.limit&&this.fileList.length+e.length>this.limit)this.onExceed&&this.onExceed(e,this.fileList);else{var r=Array.prototype.slice.call(e);this.multiple||(r=r.slice(0,1)),0!==r.length&&r.forEach((function(e){t.onStart(e),t.autoUpload&&t.upload(e)}))}},upload:function(e){var t=this;if(this.$refs.input.value=null,!this.beforeUpload)return this.post(e);var r=this.beforeUpload(e);r&&r.then?r.then((function(r){var n=Object.prototype.toString.call(r);if("[object File]"===n||"[object Blob]"===n){for(var i in"[object Blob]"===n&&(r=new File([r],e.name,{type:e.type})),e)e.hasOwnProperty(i)&&(r[i]=e[i]);t.post(r)}else t.post(e)}),(function(){t.onRemove(null,e)})):!1!==r?this.post(e):this.onRemove(null,e)},abort:function(e){var t=this.reqs;if(e){var r=e;e.uid&&(r=e.uid),t[r]&&t[r].abort()}else Object.keys(t).forEach((function(e){t[e]&&t[e].abort(),delete t[e]}))},post:function(e){var t=this,r=e.uid,n={headers:this.headers,withCredentials:this.withCredentials,file:e,data:this.data,filename:this.name,action:this.action,onProgress:function(r){t.onProgress(r,e)},onSuccess:function(n){t.onSuccess(n,e),delete t.reqs[r]},onError:function(n){t.onError(n,e),delete t.reqs[r]}},i=this.httpRequest(n);this.reqs[r]=i,i&&i.then&&i.then(n.onSuccess,n.onError)},handleClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())},handleKeydown:function(e){e.target===e.currentTarget&&(13!==e.keyCode&&32!==e.keyCode||this.handleClick())}},render:function(e){var t=this.handleClick,r=this.drag,n=this.name,i=this.handleChange,o=this.multiple,s=this.accept,a=this.listType,l=this.uploadFiles,u=this.disabled,c=this.handleKeydown,d={class:{"el-upload":!0},on:{click:t,keydown:c}};return d.class["el-upload--"+a]=!0,e("div",m()([d,{attrs:{tabindex:"0"}}]),[r?e("upload-dragger",{attrs:{disabled:u},on:{file:l}},[this.$slots.default]):this.$slots.default,e("input",{class:"el-upload__input",attrs:{type:"file",name:n,multiple:o,accept:s},ref:"input",on:{change:i}})])}},E=$,O=Object(d["a"])(E,S,k,!1,null,null,null);O.options.__file="packages/upload/src/upload.vue";var R=O.exports,T=r(11),U=r.n(T);function P(){}var j,B,L={name:"ElUpload",mixins:[U.a],components:{ElProgress:l.a,UploadList:f,Upload:R},provide:function(){return{uploader:this}},inject:{elForm:{default:""}},props:{action:{type:String,required:!0},headers:{type:Object,default:function(){return{}}},data:Object,multiple:Boolean,name:{type:String,default:"file"},drag:Boolean,dragger:Boolean,withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:String,type:{type:String,default:"select"},beforeUpload:Function,beforeRemove:Function,onRemove:{type:Function,default:P},onChange:{type:Function,default:P},onPreview:{type:Function},onSuccess:{type:Function,default:P},onProgress:{type:Function,default:P},onError:{type:Function,default:P},fileList:{type:Array,default:function(){return[]}},autoUpload:{type:Boolean,default:!0},listType:{type:String,default:"text"},httpRequest:Function,disabled:Boolean,limit:Number,onExceed:{type:Function,default:P}},data:function(){return{uploadFiles:[],dragOver:!1,draging:!1,tempIndex:1}},computed:{uploadDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},watch:{listType:function(e){"picture-card"!==e&&"picture"!==e||(this.uploadFiles=this.uploadFiles.map((function(e){if(!e.url&&e.raw)try{e.url=URL.createObjectURL(e.raw)}catch(t){console.error("[Element Error][Upload]",t)}return e})))},fileList:{immediate:!0,handler:function(e){var t=this;this.uploadFiles=e.map((function(e){return e.uid=e.uid||Date.now()+t.tempIndex++,e.status=e.status||"success",e}))}}},methods:{handleStart:function(e){e.uid=Date.now()+this.tempIndex++;var t={status:"ready",name:e.name,size:e.size,percentage:0,uid:e.uid,raw:e};if("picture-card"===this.listType||"picture"===this.listType)try{t.url=URL.createObjectURL(e)}catch(r){return void console.error("[Element Error][Upload]",r)}this.uploadFiles.push(t),this.onChange(t,this.uploadFiles)},handleProgress:function(e,t){var r=this.getFile(t);this.onProgress(e,r,this.uploadFiles),r.status="uploading",r.percentage=e.percent||0},handleSuccess:function(e,t){var r=this.getFile(t);r&&(r.status="success",r.response=e,this.onSuccess(e,r,this.uploadFiles),this.onChange(r,this.uploadFiles))},handleError:function(e,t){var r=this.getFile(t),n=this.uploadFiles;r.status="fail",n.splice(n.indexOf(r),1),this.onError(e,r,this.uploadFiles),this.onChange(r,this.uploadFiles)},handleRemove:function(e,t){var r=this;t&&(e=this.getFile(t));var n=function(){r.abort(e);var t=r.uploadFiles;t.splice(t.indexOf(e),1),r.onRemove(e,t)};if(this.beforeRemove){if("function"===typeof this.beforeRemove){var i=this.beforeRemove(e,this.uploadFiles);i&&i.then?i.then((function(){n()}),P):!1!==i&&n()}}else n()},getFile:function(e){var t=this.uploadFiles,r=void 0;return t.every((function(t){return r=e.uid===t.uid?t:null,!r})),r},abort:function(e){this.$refs["upload-inner"].abort(e)},clearFiles:function(){this.uploadFiles=[]},submit:function(){var e=this;this.uploadFiles.filter((function(e){return"ready"===e.status})).forEach((function(t){e.$refs["upload-inner"].upload(t.raw)}))},getMigratingConfig:function(){return{props:{"default-file-list":"default-file-list is renamed to file-list.","show-upload-list":"show-upload-list is renamed to show-file-list.","thumbnail-mode":"thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan"}}}},beforeDestroy:function(){this.uploadFiles.forEach((function(e){e.url&&0===e.url.indexOf("blob:")&&URL.revokeObjectURL(e.url)}))},render:function(e){var t=this,r=void 0;this.showFileList&&(r=e(f,{attrs:{disabled:this.uploadDisabled,listType:this.listType,files:this.uploadFiles,handlePreview:this.onPreview},on:{remove:this.handleRemove}},[function(e){if(t.$scopedSlots.file)return t.$scopedSlots.file({file:e.file})}]));var n={props:{type:this.type,drag:this.drag,action:this.action,multiple:this.multiple,"before-upload":this.beforeUpload,"with-credentials":this.withCredentials,headers:this.headers,name:this.name,data:this.data,accept:this.accept,fileList:this.uploadFiles,autoUpload:this.autoUpload,listType:this.listType,disabled:this.uploadDisabled,limit:this.limit,"on-exceed":this.onExceed,"on-start":this.handleStart,"on-progress":this.handleProgress,"on-success":this.handleSuccess,"on-error":this.handleError,"on-preview":this.onPreview,"on-remove":this.handleRemove,"http-request":this.httpRequest},ref:"upload-inner"},i=this.$slots.trigger||this.$slots.default,o=e("upload",n,[i]);return e("div",["picture-card"===this.listType?r:"",this.$slots.trigger?[o,this.$slots.default]:o,this.$slots.tip,"picture-card"!==this.listType?r:""])}},M=L,N=Object(d["a"])(M,j,B,!1,null,null,null);N.options.__file="packages/upload/src/index.vue";var D=N.exports;D.install=function(e){e.component(D.name,D)};t["default"]=D},6:function(e,t){e.exports=r(83647)}})}}]);
//# sourceMappingURL=377.a5c40ebd.js.map