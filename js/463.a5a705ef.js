"use strict";(self["webpackChunksnippets_admin"]=self["webpackChunksnippets_admin"]||[]).push([[463],{73463:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("h2",[t._v("Isotope")]),t._m(0),e("h4",[t._v("Filter")]),e("p",[t._v("Isotope can hide and show item elements with the filter option. Items that match that filter will be shown. Items that do not match will be hidden.")]),e("div",{staticClass:"button-group"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.clickFilterButton("*")}}},[t._v("Show All")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.clickFilterButton(".berry")}}},[t._v("Berry")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.clickFilterButton(".melon")}}},[t._v("Melon")]),e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.clickFilterButton(".acorn")}}},[t._v("Acorn")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.clickFilterButton(".drupe")}}},[t._v("Drupe")]),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.clickFilterButton(".kernel")}}},[t._v("Kernel")])]),e("div",{staticClass:"row no-gutters",staticStyle:{"margin-left":"-2px","margin-right":"-2px"},attrs:{id:"filter-layout"}},t._l(t.fruits,(function(o){return e("div",{key:o.value,staticClass:"col-4 col-md-3 col-lg-2",class:o.type},[e("div",{staticClass:"demo"},[t._v(t._s(o.value))])])})),0),e("h4",{staticClass:"mt-5"},[t._v("SortBy")]),e("p",[t._v("Isotope can rearrange the order of item elements based on their data.")]),e("div",{staticClass:"button-group"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.clickSortButton("original-order")}}},[t._v("Original Order")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.clickSortButton("asc")}}},[t._v("ASC Order")]),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.clickSortButton("desc")}}},[t._v("DESC Order")]),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.clickSortButton("random")}}},[t._v("Random Order")])]),e("div",{staticClass:"row no-gutters",staticStyle:{"margin-left":"-2px","margin-right":"-2px"},attrs:{id:"sort-by-layout"}},t._l(t.numbers,(function(o,r){return e("div",{key:r,staticClass:"col-4 col-md-3 col-lg-2"},[e("div",{staticClass:"demo"},[t._v(t._s(o))])])})),0),e("h4",{staticClass:"mt-5"},[t._v("Layout Mode")]),t._m(1),e("div",{staticClass:"row no-gutters",staticStyle:{"margin-left":"-2px","margin-right":"-2px"},attrs:{id:"layout-layout"}},t._l(t.heights,(function(o,r){return e("div",{key:r,staticClass:"col-4 col-md-3 col-lg-2"},[e("div",{staticClass:"demo",style:{height:o+"px"}},[t._v(t._s(o)+" "),e("span",{staticStyle:{"font-size":".8rem","font-family":"sans-serif"}},[t._v("px")])])])})),0)])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"blockquote"},[t._v(" Filter & sort magical layouts "),e("a",{attrs:{href:"https://isotope.metafizzy.co/",target:"_blank"}},[t._v("https://isotope.metafizzy.co//")])])},function(){var t=this,e=t._self._c;return e("p",[e("code",[t._v("masonry")]),t._v(", "),e("code",[t._v("fitRows")]),t._v(", and "),e("code",[t._v("vertical")]),t._v(" are included in Isotope by default. All other layout modes need to installed separately.")])}],s=(o(57658),o(30028)),a=o.n(s);const i={berry:["Strawberries","mulberries","cranberries","blueberries","blackberries","raspberries","red vinegarberries"],melon:["Watermelon","melon","cantaloupe"],acorn:["Tangerine","orange","kumquat","lemon","grapefruit","pomelo"],drupe:["Cherry","peach","plum","jujube","olive","longan","lychee"],kernel:["apple","pear","persimmon","loquat"]};var l={name:"isotope-layout",data(){return{fruits:Object.keys(i).reduce(((t,e)=>{const o=i[e];return o.forEach((o=>{t.push({type:e,value:o})})),t}),[]),numbers:[3,2,4,5,6,7,8,1,11,12,21,-1,-5],heights:Array(100).fill(1).map((()=>Math.round(300*Math.random()+100))),filterIsotope:null,sortByIsotope:null,layoutIsotope:null}},beforeDestroy(){this.filterIsotope.destroy(),this.filterIsotope=null,this.sortByIsotope.destroy(),this.sortByIsotope=null},mounted(){this.makeIsotope()},methods:{makeIsotope(){this.filterIsotope=new(a())("#filter-layout"),this.sortByIsotope=new(a())("#sort-by-layout",{getSortData:{asc:function(t){return parseFloat(t.querySelector(".demo").textContent)},desc:function(t){return parseFloat(t.querySelector(".demo").textContent)}}}),this.layoutIsotope=new(a())("#layout-layout")},clickFilterButton(t){this.filterIsotope&&this.filterIsotope.arrange({filter:t})},clickSortButton(t){this.sortByIsotope&&this.sortByIsotope.arrange({sortBy:t,sortAscending:"desc"!==t})}}},c=l,u=o(1001),p=(0,u.Z)(c,r,n,!1,null,"58425cc0",null),d=p.exports}}]);
//# sourceMappingURL=463.a5a705ef.js.map