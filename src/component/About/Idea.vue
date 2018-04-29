<template lang="pug">
#page-Idea
    //- div.row.idea-nav
        div.col-md-3(v-for="(i, n) in ideas" @click="ideaNavClick(n)" :class="{active:i.active}")
            div.bg(:style="coverBg(i.cover)")
            div.ctx
                p.title {{i.title}}
                p.text {{i.subTitle}}
    div.row.idea-part
        div.item.col-md-12(v-for="(i, n) in ideas" v-bind:style="{ backgroundImage: `url(${i.cover}` }")
            p.title {{i.title}}
            div.ctx(v-bind:eq="n")
                p.sub-title {{i.subTitle}}
                p.text(v-html="nbr(i.text)")
</template>

<script>
import _ from 'fn'
import ideaImg0 from '../../img/idea-images/01.jpg';
import ideaImg1 from '../../img/idea-images/02.jpg';
import ideaImg2 from '../../img/idea-images/03.jpg';
import ideaImg3 from '../../img/idea-images/04.jpg';

export default {
    data () {
        return {
            ideas : [
                {
                    title: '寒夜',
                    subTitle: '「盜版侵權」與「版稅短收」-台灣藝文界的困境',
                    active: false,
                    cover: ideaImg0,
                    text: '人類的第三次工業革命已經在上個世紀後半期悄然發生，而藝文界的寒夜也隨之而至。\nInternet網路流通，像一場惡夢，各種書籍、圖像、文字、影像化為數位內容，毫無保護地在各種平台轉載、播出。眼看著心血被侵權濫用，創作者只能對著冰冷的電腦屏幕，淌下無聲的淚，消融在看不見的雲端裡。\n回頭來看，幾個歲月芳華所交付的出版品，卻又遭受出版產業畸形的潛規則欺凌。身為作者，銷售數字永遠是那個在天邊不能說的秘密，真正的版稅收入，是如霧般的謎，沒有真相，只能寄望出版商的良心。\n網路侵權、出版生態畸形，台灣的藝文界猶如經歷了無數個寒冷的夜。',
                },
                {
                    title: '曙光',
                    subTitle: '漲潮出文化曙光，領航美學經濟',
                    active: false,
                    cover: ideaImg1,
                    text: '1996年，e-mail甫問世的時期，整個世界還在新資訊革命的動盪裡暈眩著，摸不清方向。微軟總裁Bill Gates瞬時發出了驚人一語 ”Content is King”  (內容為王)，前瞻性地勾勒出數位世界的未來指標。\n數位世界的內容究竟是什麼？全球經歷了代工、科技、資訊、國際金融之後，正式邁向藝術文化的領域；凡舉繪畫、雕塑、音樂、文學、表演藝術、建築設計、影視創作，皆是數位內容的核心，正是藝術文化舉揚的時代。\n在經歷Internet盜版侵權的混亂之後，數位內容保護的呼聲抬頭，新的保護機制正在孕育，將掀起另一波雲端經濟效應。藝文人士的國際能見度提升，同時也需要更進一步的曝光平台，快速與國際銜接。\n於是，《藝文振興鼎談》誕生了。這裡提供亞洲各在地藝術創作者、表演者與研究者，一個交流、凝聚共識、與展望未來趨勢的機會，同時利用專業雲端平台銜接國際銷售的橋樑，將藝術創作者推向全球市場，進一步實踐「數位內容」的真正意涵。\n數位內容保護出現、國際接軌平台誕生，黑暗即將過去。曙光，已然到來。',
                },
                {
                    title: '耕耘',
                    subTitle: '保留一片田，一片創作的田， 耕耘創新的甜',
                    active: false,
                    cover: ideaImg2,
                    text: '1980年代末期，有位留著小鬍子的學生在東京藝術大學的校園裡漫步，深思著他的畢業作品。從大學念到研究所博士，深厚的學術基礎奠定了成熟的技法與美學素養，但是，他更關心著如何將作品與更大的市場銜接，他就是村上隆。\n當時日本正在盛行抽象表現主義，日本藝術界相對保守，與村上隆所嗅到的國際脈動大不相同。嚴重被排擠的村上隆開始向國際尋找出路。幾年的努力後，他的作品在2008年的拍賣會上，以十萬美元成交。\n藝術家必須有天分、但還要努力、勤勞，願意走出窠臼。最重要的是，擁有國際觀，一如村上隆的眼光與思考角度。\n所謂的藝術銷售拓展，在找到對的通路與銷售手法之前，更重要的是藝術家本身是否有國際曝光和銜接國際通路的意願。如果台灣整個藝術界氛圍都像一個孤島，儘管世外吵得紛紛擾攘，卻仍守舊於自身的想法與邏輯中，甚至沈溺在自我良好的感覺裡，故步自封的情結，勢必隔絕於外界的的潮流中，等待被淹沒。\n一旦意願形成，藝術家們便需要後繼的強大隊伍，將作品推向世界各方。包括經紀、展示平台、新媒體載具、聯合策展、以及結合國際銷售管道等。有了這個後盾，台灣的藝術家才能停止閉門造車，偕同打造屬於台灣人的藝術能見度，共同耕耘出一片創新的田。\n在《藝文振興鼎談》這個場域中，將匯集藝文家們的創見，集結成領航觀點，作為後續發展的指標。不能缺少的，是藝術家們的親身參與，以大師的高度與深度，積極投入尋找台灣藝文新思維。\n我們期待一片田，我們期待幕後的孕育推動，更需要有生命力、有開創性的藝術家，共同來耕耘這片創作的田，孕育創新的甜。',
                },
                {
                    title: '同心',
                    subTitle: '搭台展藝，共創藝術家、展演者養成及發表平台',
                    active: false,
                    cover: ideaImg3,
                    text: '台灣藝術家一直處在孤軍奮鬥的窘境裡。\n儘管偶有大師之作被國際市場重視，卻也如零星的燈火，在漫漫暗夜中，散出寥寥火光，無法通透照射，引起國際上成片的注視度。\n中生代、新生代的一群藝術家們，孜孜矻矻地經營著一片天空，徒有充沛的創作能量，然缺乏嶄露頭角的舞台、國際銜接的通路、與藏家互動的場域、以及具有前瞻性的市場帶領，如一塊未琢磨的璞玉，少人問津。\n長此以往，沒有串連、銜接、更沒有群聚效應，台灣人才的國際能見度黯淡了，藝文市場的成交量萎縮了，藝文產業的價值更是遠遠地被低估。\n《藝文振興鼎談》即是一個匯聚菁英級、中生代、與新生代藝術家的生態場域。由菁英大師發起領航作用，接續後俊之秀的腳步，讓台灣的藝術圈形成群聚效應，突破單打獨鬥的困境。\n《藝文振興鼎談》向上，形成論述，成為政府文化政策的骨幹；向下，將協助藝術家銜接國際市場，開拓銷售視野。\n台灣的藝術和文化之美，不應該在世界藝術文化的舞臺上缺席，台灣創作者的能量，更不應該被忽略。我們期許統整各領域的菁英力量，讓台灣在國際場域上，以藝術突圍，用文化脫困！',
                },
            ]
        }
    },
    computed : {
        
    },
    methods : {
        bgImgStyle: _.bgImgStyle,
        nbr: _.nbr,
    },
    watch : {
        
    },
    mounted() {
        
    }
}
</script>

<style lang="stylus">
@import '../../css/variable.styl'
#page-Idea {
    @media (max-width: sm-size) {
        padding: 0;
    }
    .idea-nav {
        z-index: 2;
        position: relative;
        >div{
            display: flex;
            justify-content: center;
            cursor: pointer;
            position: relative;
            background-color: rgba(0,0,0,0.4);
            transition: background-color 0.3s ease;
            &:hover {
                background-color: rgba(0,0,0,0.1);
            }
            &.active {
                background-color: rgba(0,0,0,0);
                div.bg {
                    border-bottom: 10px solid _green-light;
                }
            }
        }
        div.bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-size: cover;
            background-position: center;
            border-bottom: 0px solid transparent;
            transition: border-bottom .5s ease;
            z-index: -1;
            &:after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        div.ctx {
            //writing-mode: vertical-rl;
            padding: 3rem 3rem;
            display: flex;
            flex-direction: column;
            //height: 100vh;
            .title {
                font-size: 3rem;
                font-weight: 800;
            }
            .text {
                height: 80%;
                font-weight: 200;
            }
        }
        p {
            color: _white;
            margin: 0;
        }
    }
    .idea-part {
        padding-top: 1rem;
        margin: 0;
        .item {
            width: 100%;
            padding: 0;
            background-color: rgba(255,255,255,0.0);
            background-size: cover;
            background-position: bottom
            background-attachment: fixed;
            position: relative;
            margin: 1rem 15px;
            border: 15px solid _green;
            @media (max-width: sm-size) {
                border-width: 10px;
                margin: 0;
                background-attachment: scroll;
                background-size: 100%;
                background-position: top;
            }
            p.title {
                font-size: 3rem;
                font-weight: 400;
                text-shadow: 0 0 10px rgba(0,0,0,0.5);
                color: _white;
                margin: 1.5rem 1.5rem 15rem 1.5rem;
                line-height: 1;
                letter-spacing: 0.5rem;
                writing-mode: vertical-lr;
                &:after {
                    content: '。'
                    vertical-align: super;
                    letter-spacing: 0;
                    margin-top: -15px;
                }
                @media (max-width: sm-size) {
                    margin-bottom: 1.5rem;
                }
            }

            div.ctx {
                padding: 2rem 3rem 2rem 3rem;
                background-color: alpha(_white, 1);
                width: 100%;
                margin: 0;
                @media (max-width: sm-size) {
                    padding: 1rem;
                }
            }
            
            p.sub-title {
                font-size: 2rem;
                margin-bottom: 2rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid _gray-dark;
                line-height: 2;
                @media (max-width: sm-size) {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                }
            }
            p.text {
                font-size: 1rem;
                line-height: 2;
            }
        }
    }
}
</style>