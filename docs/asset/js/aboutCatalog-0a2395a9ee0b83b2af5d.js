webpackJsonp([1],{413:function(t,e,a){"use strict";function o(t){a(545)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(463),n=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);var s=a(557),r=a(51),c=o,g=r(n.a,s.a,!1,c,null,null);e.default=g.exports},440:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(147),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={short:function(t,e){return t.length>e?t.substr(0,e)+"...":t},nbr:function(t){if(t)return t=t.replace(/\n/g,"<br/>")},bgImgStyle:function(t){if(Array.isArray(t)){for(var e="",a=t,o=0;o<a.length;o++)e+=a[o],o!=a.length-1&&(e+=",");return{backgroundImage:e}}return t=t||"url()",t.indexOf("url(")<0&&(t="url("+t+")"),{backgroundImage:t}},transDate:function(t){var e=new Date(t);return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日"},fetchData:function(t,e){i.default.get(t).then(function(t){console.log("[fetch]",t),e(t)}).catch(function(t){console.log("[fetch Err]",t)})},modalClick:function(t){var e=this,a=e.modalAlbum;if(e){var o=a?a.length-1:0;t>o&&(t=0),t<0&&(t=o),e.modalNum=t}}}},463:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(440),n=o(i),l=a(547),s=o(l),r=a(548),c=o(r),g=a(549),d=o(g),p=a(550),u=o(p),m=a(551),f=o(m),h=a(552),v=o(h),b=a(553),x=o(b),C=a(554),w=o(C),y=a(555),_=o(y),j=a(556),k=o(j);e.default={data:function(){return{text:"在論述的廣度上，《藝文振興鼎談》將藝術文化分為十大類，計有視覺藝術產業、表演藝術產業 (音樂及表演藝術產業)、建築設計產業、工藝產業、廣播影視與流行產業 (電影產業與廣播電視)、數位內容產業、出版產業、設計品牌時尚產業、視覺傳達設計產業、產品設計產業等。\n再依據上開十大項，細分出五十小項；如，水墨丹青、攝影、室內設計、舞台劇、工藝、陶瓷、書法、流行音樂、小說、文創商品………等。以此細膩的分類方式，將所有藝文項別均囊括入內，形成一片完整的藝文論述網，達到全面性的涵蓋度。\n在深度與高度上，《藝文振興鼎談》依據每一小項，邀請該項類五至十位菁英級藝術家，共同勾勒出屬於該類別當前最前瞻性、建設性的方向，預計連續進行五十場高密度座談。透過如此系統性的論述，達到藝文論壇的專門深度，是目前台灣所僅有僅見的藝文論壇活動。",catalogs:[{name:"視覺藝術產業",detail:"書法、水墨丹青、雕塑、攝影、油畫、版畫、新媒體藝術、插畫、水彩、複合媒材、膠彩",cover:s.default},{name:"表演藝術產業",detail:"舞台劇 (音樂、舞蹈、戲劇、兒童)、古典樂(交響、管絃樂、聲樂)、現代舞(舞蹈)、傳統戲曲、打擊樂、民俗舞蹈、布袋戲、歌仔戲",cover:c.default},{name:"工藝產業",detail:"陶瓷工藝、木工藝、金屬工藝、編織工藝、漆工藝、玻璃工藝、竹木籐工藝、交趾陶、泥塑、多媒材工藝",cover:d.default},{name:"廣播影視產業",detail:"電影、電視、動畫、國語流行音樂、台語流行音樂、電影配樂、電視音樂、數位化影視、廣播",cover:u.default},{name:"出版產業",detail:"文學、小說、散文、漫畫、雜誌、繪本、生活類圖書、兒童文學、詩、期刊、寫真書、業類圖書（法律、音樂）、教科書、傳記、MOOK",cover:f.default},{name:"廣告產業",detail:"廣告設計、廣告攝影、婚紗攝影、廣告行銷企劃",cover:v.default},{name:"產品設計產業",detail:"產品設計、包裝設計、3Ｄ列印設計、禮品設計",cover:x.default},{name:"視覺傳達設計產業",detail:"網頁設計、平面設計、商品包裝設計、廣告文宣設計、舞台設計、舞台設計",cover:w.default},{name:"設計品牌時尚產業",detail:"文創商品設計、公仔模型設計、服裝設計、玩具設計",cover:_.default},{name:"數位內容產業",detail:"數位遊戲、行動APP、電子商務、藝術產業內容數位化、VR虛擬實境、AR擴增實境、新興媒體娛樂、線上教學、內容數位化",cover:k.default}]}},computed:{},methods:{nbr:n.default.nbr,scrhandle:function(t){var e=document.getElementsByClassName("catalog-item");Array.from(e).forEach(function(t){var e=t.getBoundingClientRect(),a=e.height/2;e.top<=a&&e.top>-a?t.classList.add("on"):t.classList.remove("on")})}},created:function(){this.scrhandle(),window.addEventListener("scroll",this.scrhandle)},destroyed:function(){window.removeEventListener("scroll",this.scrhandle)}}},545:function(t,e,a){var o=a(546);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(50)("406619d3",o,!0,{})},546:function(t,e,a){e=t.exports=a(44)(!1),e.push([t.i,"#page-Catalog .catalog-items{padding:2rem 0;margin:-.5rem}#page-Catalog .catalog-items div[class*=col]{padding:.5rem}#page-Catalog .catalog-item{cursor:pointer;position:relative;width:100%;height:0;padding:50% 0}#page-Catalog .catalog-item .cover{position:absolute;top:0;left:0;width:100%;height:100%;background-position:50%;background-size:cover}#page-Catalog .catalog-item .border-line{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #52ccb0;opacity:0;transition:all .3s ease;z-index:2}#page-Catalog .catalog-item .ctx{position:absolute;top:5%;left:5%;width:90%;height:90%;padding:1rem;transition:all .3s ease;background-color:transparent;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;transition:all .5s ease}#page-Catalog .catalog-item .ctx p.name{text-align:center;font-size:2rem;font-weight:700;color:#fff;text-shadow:0 0 5px rgba(0,0,0,.5);margin-top:5rem;transition:all .3s ease}#page-Catalog .catalog-item .ctx p.detail{font-size:.8rem;line-height:2;margin:0;text-align:center;color:transparent;font-weight:200;padding:0 5px;transition:all .5s ease}#page-Catalog .catalog-item:hover .border-line{opacity:1;top:8%;left:8%;width:84%;height:84%}#page-Catalog .catalog-item:hover .ctx{background-color:rgba(0,0,0,.5)}#page-Catalog .catalog-item:hover .ctx p.name{margin-top:5rem}#page-Catalog .catalog-item:hover .ctx p.detail{margin-bottom:2rem;font-size:.8rem;color:#fff}@media (max-width:766px){#page-Catalog .catalog-item.on .border-line{opacity:1;top:8%;left:8%;width:84%;height:84%}#page-Catalog .catalog-item.on .ctx{background-color:rgba(0,0,0,.5)}#page-Catalog .catalog-item.on .ctx p.name{margin-top:5rem}#page-Catalog .catalog-item.on .ctx p.detail{margin-bottom:2rem;font-size:.8rem;color:#fff}}#page-Catalog .catalog-intro{position:relative}#page-Catalog .catalog-intro .stage-content{height:98%;width:98%;position:absolute;padding:.5rem;border:10px solid #209a7e}@media (max-width:766px){#page-Catalog .catalog-intro .stage-content{padding:1rem}}#page-Catalog .catalog-intro .stage-content p{line-height:2;margin:0;overflow-y:auto;position:absolute;top:0;left:0;width:100%;height:100%;padding:1.5rem}",""])},547:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/victoria-bilsborough-232767.jpg?e8cee607"},548:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/clem-onojeghuo-101919.jpg?2c9adba8"},549:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/alex-jones-6798.jpg?90702267"},550:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/bobby-hendry-304872.jpg?804f7360"},551:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/sergey-zolkin-403.jpg?4c14321f"},552:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/rawpixel-com-196509.jpg?a6b8ed4d"},553:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/bench-accounting-49026.jpg?5bb1b497"},554:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/markus-spiske-104910.jpg?443da2eb"},555:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/kris-atomic-73935.jpg?a92d01df"},556:function(t,e,a){t.exports=a.p+"asset/img/catalog-images/jakob-owens-335000.jpg?c2adb287"},557:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"page-Catalog"}},[t._m(0),a("div",{staticClass:"sub-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row catalog-items no-gutters"},[t._l(t.catalogs,function(e,o){return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"catalog-item"},[a("div",{staticClass:"cover",style:{backgroundImage:"url("+e.cover}}),a("div",{staticClass:"border-line"}),a("div",{staticClass:"ctx"},[a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"detail"},[t._v(t._s(e.detail))])])])])}),a("div",{staticClass:"col-md-8 catalog-intro"},[a("div",{staticClass:"stage-content"},[a("p",{domProps:{innerHTML:t._s(t.nbr(t.text))}})])])],2)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sub-header"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h2",[t._v("鼎談議題分類")])])])])])}],n={render:o,staticRenderFns:i};e.a=n}});