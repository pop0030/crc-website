<template lang="pug">
#page-Catalog
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 鼎談議題分類
    .sub-body
        div.container
            div.row.catalog-items.no-gutters
                div.col-md-4(v-for="(i, n) in catalogs")
                    div.catalog-item
                        div.cover(:style="bgImgStyle(imgFolder+i.cover)")
                        div.border-line
                        div.ctx
                            p.name {{i.name}}
                            p.detail {{i.detail}}
                div.col-md-8.catalog-intro
                    div.stage-content
                        p(v-html="nbr(text)")
</template>

<script>
import _ from 'fn'
export default {
    data() {
        return {
            text: '在論述的廣度上，《藝文振興鼎談》將藝術文化分為十大類，計有視覺藝術產業、表演藝術產業 (音樂及表演藝術產業)、建築設計產業、工藝產業、廣播影視與流行產業 (電影產業與廣播電視)、數位內容產業、出版產業、設計品牌時尚產業、視覺傳達設計產業、產品設計產業等。\n再依據上開十大項，細分出五十小項；如，水墨丹青、攝影、室內設計、舞台劇、工藝、陶瓷、書法、流行音樂、小說、文創商品………等。以此細膩的分類方式，將所有藝文項別均囊括入內，形成一片完整的藝文論述網，達到全面性的涵蓋度。\n在深度與高度上，《藝文振興鼎談》依據每一小項，邀請該項類五至十位菁英級藝術家，共同勾勒出屬於該類別當前最前瞻性、建設性的方向，預計連續進行五十場高密度座談。透過如此系統性的論述，達到藝文論壇的專門深度，是目前台灣所僅有僅見的藝文論壇活動。',
            imgFolder: './asset/img/catalog-images/',
            catalogs : [
                { 
                    name:'視覺藝術產業', 
                    detail: '書法、水墨丹青、雕塑、攝影、油畫、版畫、新媒體藝術、插畫、水彩、複合媒材、膠彩', 
                    cover: 'victoria-bilsborough-232767.jpg'
                },{ 
                    name:'表演藝術產業', 
                    detail: '舞台劇 (音樂、舞蹈、戲劇、兒童)、古典樂(交響、管絃樂、聲樂)、現代舞(舞蹈)、傳統戲曲、打擊樂、民俗舞蹈、布袋戲、歌仔戲', 
                    cover: 'clem-onojeghuo-101919.jpg'
                },{ 
                    name:'工藝產業', 
                    detail: '陶瓷工藝、木工藝、金屬工藝、編織工藝、漆工藝、玻璃工藝、竹木籐工藝、交趾陶、泥塑、多媒材工藝', 
                    cover: 'alex-jones-6798.jpg'
                },{ 
                    name:'廣播影視產業', 
                    detail: '電影、電視、動畫、國語流行音樂、台語流行音樂、電影配樂、電視音樂、數位化影視、廣播', 
                    cover: 'bobby-hendry-304872.jpg'
                },{ 
                    name:'出版產業', 
                    detail: '文學、小說、散文、漫畫、雜誌、繪本、生活類圖書、兒童文學、詩、期刊、寫真書、業類圖書（法律、音樂）、教科書、傳記、MOOK', 
                    cover: 'sergey-zolkin-403.jpg'
                },{ 
                    name:'廣告產業', 
                    detail: '廣告設計、廣告攝影、婚紗攝影、廣告行銷企劃', 
                    cover: 'rawpixel-com-196509.jpg'
                },{ 
                    name:'產品設計產業', 
                    detail: '產品設計、包裝設計、3Ｄ列印設計、禮品設計', 
                    cover: 'bench-accounting-49026.jpg'
                },{ 
                    name:'視覺傳達設計產業', 
                    detail: '網頁設計、平面設計、商品包裝設計、廣告文宣設計、舞台設計、舞台設計', 
                    cover: 'markus-spiske-104910.jpg'
                },{ 
                    name:'設計品牌時尚產業', 
                    detail: '文創商品設計、公仔模型設計、服裝設計、玩具設計', 
                    cover: 'kris-atomic-73935.jpg'
                },{ 
                    name:'數位內容產業', 
                    detail: '數位遊戲、行動APP、電子商務、藝術產業內容數位化、VR虛擬實境、AR擴增實境、新興媒體娛樂、線上教學、內容數位化', 
                    cover: 'jakob-owens-335000.jpg'
                }
            ],
        }
    },
    computed: {
        
    },
    methods : {
        bgImgStyle: _.bgImgStyle,
        nbr: _.nbr,
        scrhandle: function (e) {
            let items = document.getElementsByClassName('catalog-item')
            let itemArr = Array.from(items)
            itemArr.forEach(function(e) {
                let eRect = e.getBoundingClientRect()
                let h = eRect.height / 2
                if (eRect.top<=h && eRect.top>-h) {
                    e.classList.add('on')
                }else{
                    e.classList.remove('on')
                }
            });
        }
    },
    created() {
        this.scrhandle()
        window.addEventListener('scroll', this.scrhandle)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrhandle)
    }
}
    
</script>

<style lang="stylus">
@import '../../css/variable.styl'
#page-Catalog {
    .catalog-items {
        padding: 2rem 0;
        margin: -0.5rem;
        div[class*='col']{
            padding: 0.5rem;
        }
    }
    .catalog-item {
        cursor: pointer;
        position: relative;
        width: 100%;
        height: 0;
        padding: 50% 0;
        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
        }
        .border-line {
            position: absolute;
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
            border: 1px solid _green-light;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 2;
        }
        .ctx {
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 90%;
            padding: 1rem;
            transition: all 0.3s ease;
            background-color: alpha( _black, 0);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.5s ease;
            p.name {
                text-align: center;
                font-size: 2rem;
                font-weight: bold;
                color: _white;
                text-shadow: 0 0 5px alpha(_black, 0.5);
                margin-top: 5rem;
                transition: all 0.3s ease;
            }
            p.detail {
                font-size: 0.8rem;
                line-height: 2;
                margin: 0;
                text-align: center;
                color: transparent;
                font-weight: 200;
                padding: 0 5px;
                transition: all 0.5s ease;
            }
        }
        &:hover {
            .border-line {
                opacity: 1;
                top: 8%;
                left: 8%;
                width: 84%;
                height: 84%;
            }
            .ctx {
                background-color: alpha( _black, 0.5);
                p.name {
                    margin-top: 5rem;
                }
                p.detail {
                    margin-bottom: 2rem;
                    font-size: 0.8rem;
                    color: _white;
                }
            }
        }
        @media (max-width: sm-size) {
            &.on {
                .border-line {
                    opacity: 1;
                    top: 8%;
                    left: 8%;
                    width: 84%;
                    height: 84%;
                }
                .ctx {
                    background-color: alpha( _black, 0.5);
                    p.name {
                        margin-top: 5rem;
                    }
                    p.detail {
                        margin-bottom: 2rem;
                        font-size: 0.8rem;
                        color: _white;
                    }
                }
            }
        }
    }
    .catalog-intro {
        position: relative;
        .stage-content {
            height: 98%;
            width: 98%;
            position: absolute;
            padding: 0.5rem;
            border: 10px solid _green;
            @media (max-width: sm-size) {
                padding: 1rem;
            }
            p {
                line-height: 2;
                margin: 0;
                overflow-y: auto;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 1.5rem;                
            }
        }
    }
}
</style>
