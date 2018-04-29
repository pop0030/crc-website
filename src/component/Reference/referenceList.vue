<template lang="pug">
#page-referenceList
    div.row
        div.col-md-6(v-for="(i,n) in list")
            div.ref-item
                div.row
                    div.col-md-5.character-circle
                        div.cover(:style="coverBg(i.cover)")
                    div.col-md-7.name
                        div
                            div
                                h4 {{i.name}}
                                p {{i.title}}
                div.intro.row
                    div.col-md-12
                        div
                            i.fa.fa-quote-left(aria-hidden="true")
                            p {{textShort(i.intro, 100)}}
                            i.fa.fa-quote-right(aria-hidden="true")
</template>

<script>
const referImgs = require.context('../../img/reference-images', false, /\.(png|jpe?g|svg)$/);
console.log(referImgs);
export default {
    data () {
        return {
            list: [
                {
                    id: "001",
                    name: "張鐵志",
                    title: "中華文總副秘書長 / 文化評論家",
                    intro: "人類的第三次工業革命已經在上個世紀後半期悄然發生，而藝文界的寒夜也隨之而至。",
                    cover: referImgs["001.jpg"],
                },{
                    id: "002",
                    name: "崔震東",
                    title: "虛擬擴增實境協會 理事長",
                    intro: "數位世界的內容究竟是什麼？全球經歷了    代工、科技、資訊、國際金融之後，正式邁向藝術文化的領域；凡舉繪畫、雕塑、音樂、文學、表演藝術、建築設計、影視創作，皆是數位內容的核心，正是藝術文化舉揚的時代。",
                    cover: referImgs["002.jpg"],
                },{
                    id: "003",
                    name: "鄧英志",
                    title: "德國柏林大學建築系 副教授",
                    intro: "藝術文化的傳承是一個國家的重要資產，營造一個健全的藝文環境，已是當今文明國家的發展重點之一；藝文活動的興盛，不僅能培養民眾文化素養，更可加強政府對於藝術文化的重視，讓更多地方文化建設興起。另一方面，也因為國人對藝文活動的品味逐漸提昇，參與藝文活動的團體數目不斷增加，無論是音樂會、舞蹈、戲劇、舞台劇、繪畫、展覽等不同類型之演出，活躍於全國各地，不斷突顯藝文在人們心目中的重要性。",
                    cover: referImgs["003.jpg"],
                },{
                    id: "004",
                    name: "白璧珍",
                    title: "宇萌數位科技 執行長",
                    intro: "數位世界的內容究竟是什麼？全球經歷了代工、科技、資訊、國際金融之後，正式邁向藝術文化的領域；凡舉繪畫、雕塑、音樂、文學、表演藝術、建築設計、影視創作，皆是數位內容的核心，正是藝術文化舉揚的時代。",
                    cover: referImgs["004.jpg"],
                },{
                    id: "005",
                    name: "王耀邦",
                    title: "文博會主題館策展人 / 格式設計展策總監",
                    intro: "讓我們同心打造創新、創意的文化體驗環境並提供在地藝術家之交流平台，帶動全國文化創意產業的全新思考模式。",
                    cover: referImgs["005.jpg"],
                },{
                    id: "006",
                    name: "于國華",
                    title: "表演藝術聯盟理事長",
                    intro: "",
                    cover: referImgs["006.jpg"],
                },{
                    id: "007",
                    name: "林鑫保",
                    title: "台灣創意設計中心執行長",
                    intro: "",
                    cover: referImgs["007.png"],
                },{
                    id: "008",
                    name: "張炳煌",
                    title: "中華民國書學會會長",
                    intro: "",
                    cover: referImgs["008.jpg"],
                },{
                    id: "009",
                    name: "陳錦誠",
                    title: "國家藝術文化基金會執行長",
                    intro: "",
                    cover: referImgs["009.jpg"],
                },{
                    id: "010",
                    name: "趙弘章",
                    title: "躍迹認知創意整合總經理",
                    intro: "",
                    cover: referImgs["010.jpg"],
                },
            ]
        }
    },
    methods : {
        textShort : function (str, length) {
            return (str.length>length)?str.substr(0,length)+'...':str
        },
        coverBg : function (coverUrl) {
            return { backgroundImage: 'url('+ coverUrl +')' }
        }
    }
}
</script>

<style lang="stylus">
@import '../../css/variable.styl'

#page-referenceList {
    .ref-item {
        height: 100%;
        border-bottom: 1px solid _gray-dark;
        margin: 0 15px;
        padding: 2rem 0;
        .character-circle{
            .cover {
                width: 100%;
                padding: 50% 0;
            }
        }
        .name {
            >div {
                display: flex;
                align-items: center;
                height: 100%;
            }
        }
        .intro {
            margin-top: 1rem;
            p {
                font-size: 1rem;
                line-height: 1.8;
                padding: 0 1rem;
            }
            i.fa {
                color: _gray;
                padding-top: 0.5rem;
            }
            >div>div{
                display: flex;
            }
        }
    }
}
</style>
