<template lang="pug">
#page-Future
    div.row
        h3.stage-title 目標
        div.stage-content.goal.col-md-12
            section
                h4 《藝文振興鼎談》七大目標
                ul.row
                    li.col-lg-6.col-md-12(v-for="(i, n) in goals") 
                        div 
                            span {{n+1}}
                            h5.title {{i.title}}
                            p.ctx {{i.ctx}}
            section
                h4 《藝文振興鼎談》未來將為台灣藝術圈興起的作用
                div
                    p(v-for="i in effects") {{i}}

        h3.stage-title 未來發展
        div.stage-content.future.col-md-12
            section.phaseOne
                div.bg(:style="{ backgroundImage: `url(${phaseOneImg})` }")
                div.ctx
                    h4 從大師到菁英、從菁英到才俊
                    p(v-html="nbr(phaseOne)")
            section.phaseTwo
                h4 台灣走向亞洲，從亞洲走向全球
                p: img(:src="phaseTwoImg")
                p(v-html="nbr(phaseTwo)")
</template>

<script>
import phaseOneImg from '../../img/future_bg.jpg';
import phaseTwoImg from '../../img/lib-images/small_image_2.jpg';
export default {
    data () {
        return {
            phaseOneImg,
            phaseTwoImg,
            goals : [
                { 
                    title:'聯合向政府取得輔導與協助', 
                    ctx: '藉由匯集藝文人士之共識，達到共同向政府取得實質輔導及協助振興台灣藝文產業的目標。'
                },{ 
                    title:'提高國內外文宣能見度及知名度', 
                    ctx: '透過《藝文振興鼎談》的整合，在雲端生態系上形成台灣藝文群聚，共同向國際宣傳並提高知名度，組成強而有力的藝文艦隊航向國際市場。'
                },{ 
                    title:'銜接國際市場通路及商機', 
                    ctx: '台灣藝文人士普遍面臨缺乏國際銷售通路的困境，《藝文振興鼎談》將協助銜接國際通路，開拓廣大商機。'
                },{ 
                    title:'協助突破藝術創作瓶頸', 
                    ctx: '藉由藝文領域跨領域之交流，《藝文振興鼎談》將協助藝文人士突破更多創作之瓶頸，再創藝術巔峰。'
                },{ 
                    title:'協助數位內容保護及授權機制', 
                    ctx: '《藝文振興鼎談》所打造之藝文雲端生態系，具備數位內容保護及授權機制，提供完整商業模式，讓藝術家得以安心創作，不需擔心盜版，取得應有報償。'
                },{ 
                    title:'提升國際視野，促進國際交流合作', 
                    ctx: '讓藝術走入生活，帶領台灣文化進入國際，是《藝文振興鼎談》最重要的使命，藉由國際交流，將讓台灣藝術文化在國發光發熱！'
                },{ 
                    title:'協助展開國際展覽推廣', 
                    ctx: '透過《藝文振興鼎談》，藝術家不必再擔心拓展國際市場會面臨進入障礙，可以輕鬆推廣作品。'
                }
            ],
            effects: [
                '振興台灣藝文產業:《藝文振興鼎談》匯集台灣藝文界的老中青及學生，綜合台灣藝術文化產業各意見領袖，針對不同的藝術產業，藉由舉辦鼎談會的方式，留下歷史的紀錄見證，以達到振興台灣藝術文化之想法，達到傳承藝文產業之目的。',
                '兩岸暨國際交流:《藝文振興鼎談》匯集台灣藝文名家並將進一步推動兩岸暨跨國之文化交流，成為台灣文化藝術家面向海外的重要平台，共創華人文化藝術之榮景!',
                '形成文化政策:《藝文振興鼎談》形成論述，向政府提出提振藝文界整體之建議及諫言，並以推動形成適切之藝術文化政策為主要方向。',
                '行銷台灣優秀藝術家，共同打造台灣文化出口大國: 近年來，不論是韓國或是中國，挾政府暨企業龐大的資金以及行銷資源，向台灣持續輸入文化。台灣的藝術文化因長期缺少政府及企業資源協助，不僅在國內顯得相對弱勢，更遑論文化出口。因此，《藝文振興鼎談》匯集藝術家之集體力量，達到對外行銷台灣藝文產業的目的，也讓台灣文化得以走向國際，成為如同英國、韓國、日本及中國之文化出口大國。'
            ],
            phaseOne: '目前，《藝文振興鼎談》規劃了三個階段，以及三個地域目標。\n第一階段中將進行大師級的思想對話。藉由經驗分享，建構一個典範平台，讓後起之秀可以瞻仰、可以崇景、可以內省、可以壯大內在的創作原力。共計五十場，為期一整年。\n\n第二階段將於第二年舉行。菁英壯年的藝術家們開始回應，在《藝文振興鼎談》展開第二波論述。新起的眼識，反省的哲思，甚或有令人驚艷的創見，代表另一個世代的思潮將在這裡展現。在前人的鋪路開創下，菁英壯年的藝術家們可以跟隨，亦可以推翻既有，揮灑自我。\n\n在第三階段進入到第三年，《藝文振興鼎談》將集結剛從千禧世代長成的才華青年前來論述。他們代表這些世紀轉換期，帶著反動因子的年輕藝術家們前衛性的思潮。將論述台灣藝術創作的未來性，對外宣告下一個藝術浪潮的面貌。從大師到菁英，才華青年被灌溉著，他們帶著飽滿的養分，準備發出銳利的一擊。',
            phaseTwo: '《藝文振興鼎談》將在三年中，集結150場的藝術家對話，已然建構出代表台灣的藝術論點。\n\n於是，在第二階段，《藝文振興鼎談》計畫進行兩岸藝術家對談。台灣的藝術家需要讓大陸看到具有海島能量的拓展性格，大陸藝術家也要讓台灣人領會到廣袤斑斕的層次性，讓同為華人血脈的藝術家們，在不同的文化背景下相互激盪，譜出屬於新世代兩岸的共同藝文觀點。\n\n在兩岸華人藝術觀點版圖整合的同時，其他如日本、韓國、馬來西亞等國亦在大亞洲生活藝文圈內，彼此參酌、相望著。因此，讓台灣藝術家的心血結晶與其他亞洲藝術菁英交流，是《藝文振興鼎談》中期目標。屆時，亞洲共同的藝文語彙不再僅僅侷限於幾個來自於歐美觀點的拍賣會，或是藝術博覽會，我們將樹立亞洲觀點出發的藝文眼界，向世界展現來自亞洲的藝術基因。\n\n《藝文振興鼎談》最後目標，是邀請來自全球各地藝術家，舉行具有全球性觀點的藝術論壇，讓台灣站在世界的浪潮上，與各形色文化的藝術菁英擴大性進行論述交換。《藝文振興鼎談》將展現全球多元面貌與跨度，形成無地域邊界的藝術論壇典範，即是將台灣藝文推向國際舞台極致時刻。'
        }
    },
    methods : {
        nbr: function (val) {
            if (val) {
                return val.replace(/\n/g, "<br/>");
            }
        }
    }
}
    
</script>

<style lang="stylus">
@import '../../css/variable.styl'

#page-Future {
    section {
        margin-bottom: 1rem;
        h4 {
            font-size: 2rem;
            line-height: 1.6;
            font-weight: 400;
            margin-bottom: 2rem;
            text-align: center;
            @media (max-width: sm-size) {
                font-size: 1.2rem;
            }
        }
    }

    div.stage-content.goal {
        margin-bottom: 3rem;
        @media (max-width: sm-size) {
            margin: 0;
        }
        h4 {
            border-bottom: 1px solid _black;
            padding-bottom: 1rem;
        }
        ul {
            padding: 0;
            list-style: none;
            li {
                margin-bottom: 2rem;
                @media (max-width: sm-size) {
                    margin-bottom: 1rem;
                }
                div {
                    width: 100%;
                    height: 100%;
                    padding: 1rem 2rem;
                    padding-left: 6.5rem;
                    background-color: _gray;
                    border: 1px solid _green;
                    border-left: 5px solid _green;
                    position: relative;
                    overflow: hidden;
                    &:hover {
                        span {
                            color: alpha(_green, 0.8)
                        }
                    }
                    @media (max-width: sm-size) {
                    }
                    span {
                        color: alpha(_black, 0.1);
                        font-size: 9rem;
                        line-height: 0;
                        position: absolute;
                        top: 45%;
                        left: 0px;
                        font-style: italic;
                        transition: color 0.3s ease;
                        @media (max-width: sm-size) {
                        }
                    }
                    h5.title{
                        color: alpha(_green, 1);
                        position: relative;
                    }
                    p.ctx {
                        margin-top: 2rem;
                        font-size: 0.9rem;
                        color: alpha(_black, 0.8);
                        position: relative;
                        @media (max-width: sm-size) {
                        }
                    }
                }
            }
        }
    }
    div.stage-content.future {
        @media (max-width: sm-size) {
            padding: 0;
        }
    }
    section.phaseOne {
        position: relative;
        padding: 3rem;
        @media (max-width: sm-size) {
            padding: 1rem;
            margin: 0;
        }
        .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        .ctx {
            position: relative;
            color: _white;
            width: 100%;
            padding: 3rem 3rem;
            line-height: 2;
            background-color: rgba(0,0,0,0.6);
            border: 1px solid _green;
            @media (max-width: sm-size) {
                padding: 1rem;
            }
            h4 {
                font-size: 2rem;
                font-weight: 100;
                border-bottom: 1px solid _white;
                padding-bottom: 0.5rem;
                @media (max-width: sm-size) {
                    font-size: 1.2rem;
                }
            }
        }
    }

    section.phaseTwo {
        border: 5px solid _green;
        padding: 3rem;
        margin-top: 2rem;
        @media (max-width: sm-size) {
            margin: 0;
            padding: 1rem;
            border: 1rem solid _green;
        }
        h4 {
            padding-bottom: 1rem;
            border-bottom: 1px solid _green;
        }
        p>img {
            width: 100%;
        }
    }
}
</style>
