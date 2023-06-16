(self["webpackChunksnippets_admin"]=self["webpackChunksnippets_admin"]||[]).push([[949],{78949:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("h4",[e._v("Element Image Lazy Prop")]),t("div",{staticClass:"element-image-lazy-prop row"},e._l(e.images1,(function(e){return t("div",{key:e,staticClass:"col-12 col-md-4 col-lg-3"},[t("el-image",{staticClass:"image-box",attrs:{src:e,alt:e,fit:"cover",lazy:""}})],1)})),0),e._m(0),t("h4",{staticClass:"mt-5"},[e._v("ImageLoad Directive")]),t("div",{staticClass:"row"},e._l(e.images2,(function(e){return t("div",{key:e,staticClass:"col-12 col-md-4 col-lg-3"},[t("div",{staticClass:"image-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}],staticClass:"img-load",attrs:{alt:e,src:s(36864)}})])])})),0),t("div",{staticClass:"source"},[t("pre",{staticClass:"mb-0"},[e._v("// js\n"+e._s(e.content)+"\n      ")])])])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"source"},[t("pre",{staticClass:"mb-0"},[e._v("// https://gitee.com/ElemeFE/element/blob/dev/packages/image/src/main.vue\n...\naddLazyLoadListener() {\n  if (this.$isServer) return;\n\n  const { scrollContainer } = this;\n  let _scrollContainer = null;\n\n  if (isHtmlElement(scrollContainer)) {\n    _scrollContainer = scrollContainer;\n  } else if (isString(scrollContainer)) {\n    _scrollContainer = document.querySelector(scrollContainer);\n  } else {\n    _scrollContainer = getScrollContainer(this.$el);\n  }\n\n  if (_scrollContainer) {\n    this._scrollContainer = _scrollContainer;\n    this._lazyLoadHandler = throttle(200, this.handleLazyLoad);\n    on(_scrollContainer, 'scroll', this._lazyLoadHandler);\n    this.handleLazyLoad();\n  }\n},\n...\n      ")])])}],i=s(98155),r=s.n(i),a=s(36864),l={inserted(e,t){e.src=a;const s=t.value;if(window.IntersectionObserver){const t=e.intersectionObserver=new window.IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(e.target.src=s,t.unobserve(e.target))}))}));t.observe(e)}else console.log("IntersectionObserver API is not supported."),e.src=s},unbind(e){e.intersectionObserver&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null)}},c=s(76608),p=s.n(c),A={name:"lazy-load",components:{[r().name]:r()},directives:{lazy:l},data(){return{content:p(),images1:["https://images.pexels.com/photos/17040553/pexels-photo-17040553.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16972927/pexels-photo-16972927.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/15799202/pexels-photo-15799202.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17029375/pexels-photo-17029375.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16837989/pexels-photo-16837989.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/2490949/pexels-photo-2490949.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17206896/pexels-photo-17206896.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16664503/pexels-photo-16664503.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/9595492/pexels-photo-9595492.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/5429261/pexels-photo-5429261.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/15414191/pexels-photo-15414191.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16976842/pexels-photo-16976842.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/5748122/pexels-photo-5748122.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/13068862/pexels-photo-13068862.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/11602244/pexels-photo-11602244.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/6136711/pexels-photo-6136711.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/8554834/pexels-photo-8554834.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/7233086/pexels-photo-7233086.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/11824800/pexels-photo-11824800.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/15031202/pexels-photo-15031202.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17223590/pexels-photo-17223590/free-photo-of-hayatin-yansimasi.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/15240130/pexels-photo-15240130.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16786066/pexels-photo-16786066.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17211651/pexels-photo-17211651.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"],images2:["https://images.pexels.com/photos/10503606/pexels-photo-10503606.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/14661929/pexels-photo-14661929.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/12993519/pexels-photo-12993519.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/14179062/pexels-photo-14179062.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16013906/pexels-photo-16013906.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/8910681/pexels-photo-8910681.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16960414/pexels-photo-16960414.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17193196/pexels-photo-17193196.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/15148649/pexels-photo-15148649.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16791877/pexels-photo-16791877.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16668843/pexels-photo-16668843.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17036601/pexels-photo-17036601.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16761587/pexels-photo-16761587.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/9964659/pexels-photo-9964659.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/15721846/pexels-photo-15721846.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17039678/pexels-photo-17039678.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16500373/pexels-photo-16500373.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/13291350/pexels-photo-13291350.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16876978/pexels-photo-16876978.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17151882/pexels-photo-17151882.png","https://images.pexels.com/photos/16847813/pexels-photo-16847813.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16948300/pexels-photo-16948300.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/16978553/pexels-photo-16978553.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load","https://images.pexels.com/photos/17115338/pexels-photo-17115338.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"]}}},h=A,d=s(1001),g=(0,d.Z)(h,o,n,!1,null,"9a321da6",null),m=g.exports},76608:function(e){e.exports="import defaultImage from '@/assets/default-image.png'\r\n\r\nexport default {\r\n  inserted (el, binding) {\r\n    el.src = defaultImage\r\n    const src = binding.value\r\n    if (window.IntersectionObserver) {\r\n      const intersectionObserver = el.intersectionObserver = new window.IntersectionObserver(function (entries) {\r\n        entries.forEach(function (entry) {\r\n          if (entry.isIntersecting) {\r\n            entry.target.src = src\r\n            intersectionObserver.unobserve(entry.target)\r\n          }\r\n        })\r\n      })\r\n      intersectionObserver.observe(el)\r\n    } else {\r\n      console.log('IntersectionObserver API is not supported.')\r\n      el.src = src\r\n    }\r\n  },\r\n  unbind (el) {\r\n    if (el.intersectionObserver) {\r\n      el.intersectionObserver.disconnect()\r\n      el.intersectionObserver = null\r\n    }\r\n  },\r\n}\r\n"},98155:function(e,t,s){e.exports=function(e){var t={};function s(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=67)}({0:function(e,t,s){"use strict";function o(e,t,s,o,n,i,r,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(e,t){return l.call(t),p(e,t)}}else{var A=c.beforeCreate;c.beforeCreate=A?[].concat(A,l):[l]}return{exports:e,options:c}}s.d(t,"a",(function(){return o}))},13:function(e,t){e.exports=s(63630)},17:function(e,t){e.exports=s(31639)},2:function(e,t){e.exports=s(53766)},25:function(e,t){e.exports=s(62895)},3:function(e,t){e.exports=s(45402)},6:function(e,t){e.exports=s(83647)},67:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"el-image"},[e.loading?e._t("placeholder",[s("div",{staticClass:"el-image__placeholder"})]):e.error?e._t("error",[s("div",{staticClass:"el-image__error"},[e._v(e._s(e.t("el.image.error")))])]):s("img",e._g(e._b({staticClass:"el-image__inner",class:{"el-image__inner--center":e.alignCenter,"el-image__preview":e.preview},style:e.imageStyle,attrs:{src:e.src},on:{click:e.clickHandler}},"img",e.$attrs,!1),e.$listeners)),e.preview?[e.showViewer?s("image-viewer",{attrs:{"z-index":e.zIndex,"initial-index":e.imageIndex,"on-close":e.closeViewer,"url-list":e.previewSrcList}}):e._e()]:e._e()],2)},n=[];o._withStripped=!0;var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"viewer-fade"}},[s("div",{ref:"el-image-viewer__wrapper",staticClass:"el-image-viewer__wrapper",style:{"z-index":e.viewerZIndex},attrs:{tabindex:"-1"}},[s("div",{staticClass:"el-image-viewer__mask",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleMaskClick(t)}}}),s("span",{staticClass:"el-image-viewer__btn el-image-viewer__close",on:{click:e.hide}},[s("i",{staticClass:"el-icon-close"})]),e.isSingle?e._e():[s("span",{staticClass:"el-image-viewer__btn el-image-viewer__prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("span",{staticClass:"el-image-viewer__btn el-image-viewer__next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[s("i",{staticClass:"el-icon-arrow-right"})])],s("div",{staticClass:"el-image-viewer__btn el-image-viewer__actions"},[s("div",{staticClass:"el-image-viewer__actions__inner"},[s("i",{staticClass:"el-icon-zoom-out",on:{click:function(t){e.handleActions("zoomOut")}}}),s("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){e.handleActions("zoomIn")}}}),s("i",{staticClass:"el-image-viewer__actions__divider"}),s("i",{class:e.mode.icon,on:{click:e.toggleMode}}),s("i",{staticClass:"el-image-viewer__actions__divider"}),s("i",{staticClass:"el-icon-refresh-left",on:{click:function(t){e.handleActions("anticlocelise")}}}),s("i",{staticClass:"el-icon-refresh-right",on:{click:function(t){e.handleActions("clocelise")}}})])]),s("div",{staticClass:"el-image-viewer__canvas"},e._l(e.urlList,(function(t,o){return o===e.index?s("img",{key:t,ref:"img",refInFor:!0,staticClass:"el-image-viewer__img",style:e.imgStyle,attrs:{src:e.currentImg,referrerpolicy:"no-referrer"},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}}):e._e()})),0)],2)])},r=[];i._withStripped=!0;var a=s(2),l=s(3),c=s(13),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},A={CONTAIN:{name:"contain",icon:"el-icon-full-screen"},ORIGINAL:{name:"original",icon:"el-icon-c-scale-to-original"}},h=Object(l["isFirefox"])()?"DOMMouseScroll":"mousewheel",d={name:"elImageViewer",props:{urlList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},onSwitch:{type:Function,default:function(){}},onClose:{type:Function,default:function(){}},initialIndex:{type:Number,default:0},appendToBody:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0}},data:function(){return{index:this.initialIndex,isShow:!1,infinite:!0,loading:!1,mode:A.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},computed:{isSingle:function(){return this.urlList.length<=1},isFirst:function(){return 0===this.index},isLast:function(){return this.index===this.urlList.length-1},currentImg:function(){return this.urlList[this.index]},imgStyle:function(){var e=this.transform,t=e.scale,s=e.deg,o=e.offsetX,n=e.offsetY,i=e.enableTransition,r={transform:"scale("+t+") rotate("+s+"deg)",transition:i?"transform .3s":"","margin-left":o+"px","margin-top":n+"px"};return this.mode===A.CONTAIN&&(r.maxWidth=r.maxHeight="100%"),r},viewerZIndex:function(){var e=c["PopupManager"].nextZIndex();return this.zIndex>e?this.zIndex:e}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},currentImg:function(e){var t=this;this.$nextTick((function(e){var s=t.$refs.img[0];s.complete||(t.loading=!0)}))}},methods:{hide:function(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall:function(){var e=this;this._keyDownHandler=function(t){t.stopPropagation();var s=t.keyCode;switch(s){case 27:e.hide();break;case 32:e.toggleMode();break;case 37:e.prev();break;case 38:e.handleActions("zoomIn");break;case 39:e.next();break;case 40:e.handleActions("zoomOut");break}},this._mouseWheelHandler=Object(l["rafThrottle"])((function(t){var s=t.wheelDelta?t.wheelDelta:-t.detail;s>0?e.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):e.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})})),Object(a["on"])(document,"keydown",this._keyDownHandler),Object(a["on"])(document,h,this._mouseWheelHandler)},deviceSupportUninstall:function(){Object(a["off"])(document,"keydown",this._keyDownHandler),Object(a["off"])(document,h,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad:function(e){this.loading=!1},handleImgError:function(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown:function(e){var t=this;if(!this.loading&&0===e.button){var s=this.transform,o=s.offsetX,n=s.offsetY,i=e.pageX,r=e.pageY;this._dragHandler=Object(l["rafThrottle"])((function(e){t.transform.offsetX=o+e.pageX-i,t.transform.offsetY=n+e.pageY-r})),Object(a["on"])(document,"mousemove",this._dragHandler),Object(a["on"])(document,"mouseup",(function(e){Object(a["off"])(document,"mousemove",t._dragHandler)})),e.preventDefault()}},handleMaskClick:function(){this.maskClosable&&this.hide()},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode:function(){if(!this.loading){var e=Object.keys(A),t=Object.values(A),s=t.indexOf(this.mode),o=(s+1)%e.length;this.mode=A[e[o]],this.reset()}},prev:function(){if(!this.isFirst||this.infinite){var e=this.urlList.length;this.index=(this.index-1+e)%e}},next:function(){if(!this.isLast||this.infinite){var e=this.urlList.length;this.index=(this.index+1)%e}},handleActions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.loading){var s=p({zoomRate:.2,rotateDeg:90,enableTransition:!0},t),o=s.zoomRate,n=s.rotateDeg,i=s.enableTransition,r=this.transform;switch(e){case"zoomOut":r.scale>.2&&(r.scale=parseFloat((r.scale-o).toFixed(3)));break;case"zoomIn":r.scale=parseFloat((r.scale+o).toFixed(3));break;case"clocelise":r.deg+=n;break;case"anticlocelise":r.deg-=n;break}r.enableTransition=i}}},mounted:function(){this.deviceSupportInstall(),this.appendToBody&&document.body.appendChild(this.$el),this.$refs["el-image-viewer__wrapper"].focus()},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},g=d,m=s(0),u=Object(m["a"])(g,i,r,!1,null,null,null);u.options.__file="packages/image/src/image-viewer.vue";var f=u.exports,y=s(6),b=s.n(y),v=s(17),x=s(25),w=s.n(x),B=function(){return void 0!==document.documentElement.style.objectFit},j={NONE:"none",CONTAIN:"contain",COVER:"cover",FILL:"fill",SCALE_DOWN:"scale-down"},G="",z={name:"ElImage",mixins:[b.a],inheritAttrs:!1,components:{ImageViewer:f},props:{src:String,fit:String,lazy:Boolean,scrollContainer:{},previewSrcList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},initialIndex:Number},data:function(){return{loading:!0,error:!1,show:!this.lazy,imageWidth:0,imageHeight:0,showViewer:!1}},computed:{imageStyle:function(){var e=this.fit;return!this.$isServer&&e?B()?{"object-fit":e}:this.getImageStyle(e):{}},alignCenter:function(){return!this.$isServer&&!B()&&this.fit!==j.FILL},preview:function(){var e=this.previewSrcList;return Array.isArray(e)&&e.length>0},imageIndex:function(){var e=0,t=this.initialIndex;if(t>=0)return e=t,e;var s=this.previewSrcList.indexOf(this.src);return s>=0?(e=s,e):e}},watch:{src:function(e){this.show&&this.loadImage()},show:function(e){e&&this.loadImage()}},mounted:function(){this.lazy?this.addLazyLoadListener():this.loadImage()},beforeDestroy:function(){this.lazy&&this.removeLazyLoadListener()},methods:{loadImage:function(){var e=this;if(!this.$isServer){this.loading=!0,this.error=!1;var t=new Image;t.onload=function(s){return e.handleLoad(s,t)},t.onerror=this.handleError.bind(this),Object.keys(this.$attrs).forEach((function(s){var o=e.$attrs[s];t.setAttribute(s,o)})),t.src=this.src}},handleLoad:function(e,t){this.imageWidth=t.width,this.imageHeight=t.height,this.loading=!1,this.error=!1},handleError:function(e){this.loading=!1,this.error=!0,this.$emit("error",e)},handleLazyLoad:function(){Object(a["isInContainer"])(this.$el,this._scrollContainer)&&(this.show=!0,this.removeLazyLoadListener())},addLazyLoadListener:function(){if(!this.$isServer){var e=this.scrollContainer,t=null;t=Object(v["isHtmlElement"])(e)?e:Object(v["isString"])(e)?document.querySelector(e):Object(a["getScrollContainer"])(this.$el),t&&(this._scrollContainer=t,this._lazyLoadHandler=w()(200,this.handleLazyLoad),Object(a["on"])(t,"scroll",this._lazyLoadHandler),this.handleLazyLoad())}},removeLazyLoadListener:function(){var e=this._scrollContainer,t=this._lazyLoadHandler;!this.$isServer&&e&&t&&(Object(a["off"])(e,"scroll",t),this._scrollContainer=null,this._lazyLoadHandler=null)},getImageStyle:function(e){var t=this.imageWidth,s=this.imageHeight,o=this.$el,n=o.clientWidth,i=o.clientHeight;if(!t||!s||!n||!i)return{};var r=t/s,a=n/i;if(e===j.SCALE_DOWN){var l=t<n&&s<i;e=l?j.NONE:j.CONTAIN}switch(e){case j.NONE:return{width:"auto",height:"auto"};case j.CONTAIN:return r<a?{width:"auto"}:{height:"auto"};case j.COVER:return r<a?{height:"auto"}:{width:"auto"};default:return{}}},clickHandler:function(){this.preview&&(G=document.body.style.overflow,document.body.style.overflow="hidden",this.showViewer=!0)},closeViewer:function(){document.body.style.overflow=G,this.showViewer=!1}}},k=z,I=Object(m["a"])(k,o,n,!1,null,null,null);I.options.__file="packages/image/src/main.vue";var O=I.exports;O.install=function(e){e.component(O.name,O)};t["default"]=O}})},36864:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAFoCAIAAAA+XBJ8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEzN0JDODg4MEIyODExRUU5M0RCQ0I4RjNDQzBCNDkxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEzN0JDODg5MEIyODExRUU5M0RCQ0I4RjNDQzBCNDkxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTM3QkM4ODYwQjI4MTFFRTkzREJDQjhGM0NDMEI0OTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTM3QkM4ODcwQjI4MTFFRTkzREJDQjhGM0NDMEI0OTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5n//DqAAAVy0lEQVR42uyd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"}}]);
//# sourceMappingURL=949.b064430e.js.map