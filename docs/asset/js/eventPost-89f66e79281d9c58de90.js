webpackJsonp([15],{416:function(t,e,s){"use strict";function a(t){s(564)}Object.defineProperty(e,"__esModule",{value:!0});var o=s(466),i=s.n(o);for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);var r=s(566),c=s(51),l=a,d=c(i.a,r.a,!1,l,null,null);e.default=d.exports},440:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(147),o=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={short:function(t,e){return t.length>e?t.substr(0,e)+"...":t},nbr:function(t){if(t)return t=t.replace(/\n/g,"<br/>")},bgImgStyle:function(t){if(Array.isArray(t)){for(var e="",s=t,a=0;a<s.length;a++)e+=s[a],a!=s.length-1&&(e+=",");return{backgroundImage:e}}return t=t||"url()",t.indexOf("url(")<0&&(t="url("+t+")"),{backgroundImage:t}},transDate:function(t){var e=new Date(t);return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日"},fetchData:function(t,e){o.default.get(t).then(function(t){console.log("[fetch]",t),e(t)}).catch(function(t){console.log("[fetch Err]",t)})},modalClick:function(t){var e=this,s=e.modalAlbum;if(e){var a=s?s.length-1:0;t>a&&(t=0),t<0&&(t=a),e.modalNum=t}}}},466:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(147),i=(a(o),s(440)),n=a(i);e.default={data:function(){return{post:{},host:{},postShow:!1,id:this.$route.params.id}},methods:{fetchData:n.default.fetchData,fetchPost:function(){var t=this,e=this;e.fetchData("./events/"+e.id+".json",function(s){e.post=s.data,t.fetchHost(s.data.host)})},fetchHost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this;e.fetchData("./artists/list.json",function(s){var a=s.data;t.forEach(function(t){e.host[t]=a[t]}),e.postShow=!0})},nbr:function(t){if(t)return t.replace(/\n/g,"<br/>")},transDate:function(t){function e(t){return t<10?"0"+t:t}var s=new Date(t);return s.getFullYear()+"年"+(s.getMonth()+1)+"月"+s.getDate()+"日("+["日","一","二","三","四","五","六"][s.getDay()]+") "+e(s.getHours())+":"+e(s.getMinutes())},bgImgStyle:n.default.bgImgStyle,short:n.default.short},watch:{$route:function(){this.id=this.$route.params.id},id:function(){this.fetchPost()}},created:function(){this.fetchPost()}}},564:function(t,e,s){var a=s(565);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(50)("6dedd2ee",a,!0,{})},565:function(t,e,s){e=t.exports=s(44)(!1),e.push([t.i,"#page-Eventpost .ctxHeader .stage-cover{width:100%;height:0;padding:25% 0;background-size:cover;background-position:top;position:relative}#page-Eventpost .ctxHeader .stage-cover .info{position:absolute;width:100%;text-align:right;right:0;bottom:0;color:#fff;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.8) 75%);padding:2rem 2rem 1rem}#page-Eventpost .ctxHeader .stage-cover .info h3{font-size:3rem;letter-spacing:3px}#page-Eventpost .ctxHeader .stage-cover .info p{margin:0}#page-Eventpost .navSide{padding-top:1rem}#page-Eventpost .navSide>div{background-color:#209a7e;padding:1rem}#page-Eventpost .navSide section{margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #fff}#page-Eventpost .navSide section h4.title{font-size:.8rem;margin-bottom:.5rem;color:#000}#page-Eventpost .navSide section div.content{color:#fff}#page-Eventpost .navSide section div.content p{line-height:1.5;font-size:1rem;margin:0}#page-Eventpost .navSide .yt-link{color:#b3132a;font-size:2rem;background-color:#fff;padding:2px 6px;border-radius:3px}#page-Eventpost .ctxBody section{padding-bottom:1rem}#page-Eventpost .ctxBody section h4{margin:1rem 0;color:#34675b}#page-Eventpost .ctxBody section.intro div.stage-content{border:5px solid #209a7e;padding:1rem}#page-Eventpost .ctxBody section.intro div.stage-content p{margin:0}#page-Eventpost .ctxBody section.hosts{text-align:center}#page-Eventpost .ctxBody section.hosts .hostName{line-height:1.5;margin:0 0 5px}#page-Eventpost .ctxBody section.hosts .hostTitle{font-size:.8rem;margin:0;color:0}#page-Eventpost .character-circle .cover{width:80%;padding:40% 0}",""])},566:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"page-Eventpost"}},[s("div",{staticClass:"sub-header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("h2",[s("i",{staticClass:"fa fa-podcast",attrs:{"aria-hidden":"true"}}),t._v(" 鼎談預告｜"+t._s(t.post.title))])])])])]),s("div",{staticClass:"sub-body"},[s("div",{staticClass:"container"},[t.postShow?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 ctxHeader"},[s("div",{staticClass:"stage-cover",style:t.bgImgStyle("url("+t.post.cover+")")},[s("div",{staticClass:"info"},[s("p",[t._v("藝文振興鼎談")]),s("h3",[t._v(t._s(t.post.title))])])])]),s("div",{staticClass:"col-md-9 ctxBody"},[s("section",{staticClass:"intro"},[s("h4",{staticClass:"title"},[t._v("「"+t._s(t.post.eventName)+"」鼎談簡介")]),s("div",{staticClass:"stage-content"},[s("p",{domProps:{innerHTML:t._s(t.nbr(t.post.intro))}})])]),s("section",{staticClass:"hosts"},[s("h4",{staticClass:"title"},[t._v("與談人")]),s("div",{staticClass:"stage-content"},[s("div",{staticClass:"host-list row"},t._l(t.host,function(e,a,o){return s("div",{staticClass:"col-md-3"},[s("router-link",{staticClass:"r-link",attrs:{to:"/artist/"+a}},[s("div",{staticClass:"character-circle"},[s("div",{staticClass:"cover",style:t.bgImgStyle("url("+e.cover+")")})]),s("p",{staticClass:"hostName"},[t._v(t._s(e.name))]),s("p",{staticClass:"hostTitle"},[t._v(t._s(t.short(e.intro,25)))])])],1)}))])])]),s("div",{staticClass:"col-md-3 navSide"},[s("div",[s("section",{staticClass:"main"},[s("h4",{staticClass:"title"},[t._v("主題")]),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.post.title))])])]),s("section",{staticClass:"hosts"},[s("h4",{staticClass:"title"},[t._v("與談人")]),s("div",{staticClass:"content"},t._l(t.host,function(e){return s("p",[t._v(t._s(e.name))])}))]),s("section",{staticClass:"date"},[s("h4",{staticClass:"title"},[t._v("日期")]),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.transDate(t.post.date.from))+" ～")]),s("p",[t._v(t._s(t.transDate(t.post.date.to)))])])]),s("section",{staticClass:"loca"},[s("h4",{staticClass:"title"},[t._v("線上直播")]),s("div",{staticClass:"content"},[s("a",{staticClass:"yt-link",attrs:{href:t.post.stream,target:"_blank"}},[s("i",{staticClass:"fa fa-youtube"})])])])])])]):t._e()])])])},o=[],i={render:a,staticRenderFns:o};e.a=i}});