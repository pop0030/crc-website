webpackJsonp([18],{423:function(t,s,e){"use strict";function n(t){e(585)}Object.defineProperty(s,"__esModule",{value:!0});var o=e(473),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(s,t,function(){return o[t]})}(i);var c=e(587),r=e(51),u=n,l=r(a.a,c.a,!1,u,null,null);s.default=l.exports},473:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(147),o=function(t){return t&&t.__esModule?t:{default:t}}(n);s.default={data:function(){return{post:{},postShow:!1,id:this.$route.params.id}},methods:{fetchPost:function(){var t=this;o.default.get("./events/"+t.id+".json").then(function(s){t.post=s.data,t.postShow=!0}).catch(function(s){console.log(s),t.post=null,t.postShow=!1})},nbr:function(t){if(t)return t.replace(/\n/g,"<br/>")},transDate:function(t){function s(t){return t<10?"0"+t:t}var e=new Date(t);return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日("+["日","一","二","三","四","五","六"][e.getDay()]+") "+s(e.getHours())+":"+s(e.getMinutes())}},watch:{$route:function(){this.id=this.$route.params.id},id:function(){this.fetchPost()}},mounted:function(){this.fetchPost()}}},585:function(t,s,e){var n=e(586);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(50)("21f681bc",n,!0,{})},586:function(t,s,e){s=t.exports=e(44)(!1),s.push([t.i,"",""])},587:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"page-Eventpost"}},[e("div",{staticClass:"sub-header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h2",[t._v("鼎談交流｜"+t._s(t.post.title))])])])])]),e("div",{staticClass:"sub-body"},[e("div",{staticClass:"container"},[t.postShow?e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"stage-cover"},[e("img",{attrs:{src:t.post.cover}})]),e("section",[e("h3",{staticClass:"stage-title"},[t._v(t._s(t.post.title))]),e("p",{staticClass:"stage-content",domProps:{innerHTML:t._s(t.nbr(t.post.intro))}})]),e("section",[e("h4",{staticClass:"stage-title"},[t._v("與談人簡介")]),e("p",{staticClass:"stage-content"}),t._l(t.post.host,function(s,n){return e("div",[e("p",[t._v(t._s(s))]),e("p",{domProps:{innerHTML:t._s(t.nbr(t.post.hostIntro[n]))}})])}),e("p")],2),e("section",[e("h4",{staticClass:"stage-title"},[t._v("與談人作品")]),e("p",{staticClass:"stage-content"}),t._l(t.post.hostWorks,function(s){return e("div",[e("p",[t._v(t._s(s.name))]),e("p",[t._v(t._s(s.author))]),e("p",[e("img",{attrs:{src:s.img}})])])}),e("p")],2)]),e("div",{staticClass:"col-md-3"},[e("h4",{staticClass:"stage-title"},[t._v("活動時間")]),e("div",{staticClass:"stage-content"},[e("section",[e("h5",[t._v("主講人")]),t._l(t.post.host,function(s){return e("p",[t._v(t._s(s))])})],2),e("section",[e("h5",[t._v("日期")]),e("p",[t._v(t._s(t.transDate(t.post.date.from)))]),e("p",[t._v(t._s(t.transDate(t.post.date.to)))])]),e("section",[t._v("地點"),e("p",[t._v(t._s(t.post.location))])])])])]):t._e()])])])},o=[],a={render:n,staticRenderFns:o};s.a=a}});