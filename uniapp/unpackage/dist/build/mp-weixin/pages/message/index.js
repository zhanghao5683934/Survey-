(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/index"],{"110b":function(t,n,e){"use strict";e.r(n);var a=e("2357"),i=e("dfb2");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("4fd8");var u,r=e("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=s.exports},2357:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"4fd8":function(t,n,e){"use strict";var a=e("b913"),i=e.n(a);i.a},"8cdb":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("89dc"));function i(t){return t&&t.__esModule?t:{default:t}}var o=getApp(),u={data:function(){return{page:1,list:[],isBottom:!1}},onLoad:function(){var t=this,n=o.globalData.userInfo.id,e=o.globalData.userInfo.token,i=o.globalData.site_url+"/appapi/?s=User.Msg";a.default.requestApi(i,{uid:n,token:e,p:1}).then((function(n){t.list=n.data.info[0].list}))},onReachBottom:function(){var n=this,e=this;if(1!=this.isBottom){var i=this.page+1;this.page=i;var u=o.globalData.site_url+"/appapi/?s=User.Msg";a.default.requestApi(u,{uid:uid,token:token,p:i}).then((function(t){t.data.info[0].list.length<10&&(e.isBottom=!0);for(var a=n.list,i=0;i<t.data.info[0].list.length;i++)a.push(t.data.info[0][i]);n.list=a}))}else t.showToast({title:"已经到底部了",icon:"none"})},methods:{}};n.default=u}).call(this,e("543d")["default"])},b40c:function(t,n,e){"use strict";(function(t){e("c5a6");a(e("66fd"));var n=a(e("110b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},b913:function(t,n,e){},dfb2:function(t,n,e){"use strict";e.r(n);var a=e("8cdb"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a}},[["b40c","common/runtime","common/vendor"]]]);