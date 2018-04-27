<template lang="pug">
div.reeReview.container-fluid
    div.row.ree-header(:style="reeReviewBg")
        div.col-md-12
            h4 國內外藝壇交流
            p EXCHANGE
        div.col-md-12
            div.ctx
                p 《藝文振興鼎談》深知藝文創作者對於開拓市場之迫切需求，因此，《藝文振興鼎談》將運用數位科技作為載具，為台灣藝文界串起整合產銷系統的價值鏈，透過介接國際市場，為台灣打造最完整的藝文雲端生態系。 《藝文振興鼎談》所連接起的虛實生態圈，將讓台灣藝文產業，向國際市場成功發聲， 也讓國際文化市場，透過《藝文振興鼎談》的雲端生態系，與台灣文化產業達到更全面性及更持續性的交流，進ㄧ步開創台灣藝文發展新價值高地！
    div.row.ree-items
        div.col-md-4(v-for="i in reeList")
            div.ree-item
                div.ytVideo
                    iframe(:src="i.ytUrl" frameborder="0" allowfullscreen)
                div.ctx
                    h5.stage-title {{i.title}}
                    p.intro {{short(i.intro, 50)}}
                    p.reeLink
                        a(href="#") READ MORE
    
</template>

<script>
import _ from 'fn'
    export default {
        data () {
            return {
                reeReviewBgImg: './asset/img/lib-images/DAV_2383.jpg',
                reeList: [
                    {
                        title: '第三屆海峽兩岸君子之風 梅蘭竹菊風雅',
                        intro: '第三屆海峽兩岸君子之風• 梅蘭竹菊藝術雅集在此拉開帷幕。全國政協常委、台盟中央副主席、清華大學教授吳國楨，全國政協常委、中國書法家協會主席蘇士澍，全國政協書畫室副主任、中國書法家協會理事趙學敏，全國政協常委、著名話劇演員李羚，全國政協委員、著名琵琶演奏家吳玉霞，全國政協委員、著名評彈藝術家盛小雲，北京京劇院青年團團長、著名京劇表演藝術家遲小秋，著名畫家邢少臣、王玉、陳秀，詩人潘衍習等與台灣藝術家齊聚一堂，共賀此屆兩岸交流盛會。',
                        ytUrl: 'https://www.youtube.com/embed/jd9UN9ZG61A?wmode=transparent',
                    },{
                        title: '華夏書畫創作大賽 ',
                        intro: '第三屆海峽兩岸君子之風• 梅蘭竹菊藝術雅集在此拉開帷幕。全國政協常委、台盟中央副主席、清華大學教授吳國楨，全國政協常委、中國書法家協會主席蘇士澍，全國政協書畫室副主任、中國書法家協會理事趙學敏，全國政協常委、著名話劇演員李羚，全國政協委員、著名琵琶演奏家吳玉霞，全國政協委員、著名評彈藝術家盛小雲，北京京劇院青年團團長、著名京劇表演藝術家遲小秋，著名畫家邢少臣、王玉、陳秀，詩人潘衍習等與台灣藝術家齊聚一堂，共賀此屆兩岸交流盛會。',
                        ytUrl: 'https://www.youtube.com/embed/CV0V38_JO7c?list=PLk0TgSEV-XPWxxzx5P3_svuI62lKQZjP6?wmode=transparent',
                    },{
                        title: '2017書畫家新春聯歡會',
                        intro: '第三屆海峽兩岸君子之風• 梅蘭竹菊藝術雅集在此拉開帷幕。全國政協常委、台盟中央副主席、清華大學教授吳國楨，全國政協常委、中國書法家協會主席蘇士澍，全國政協書畫室副主任、中國書法家協會理事趙學敏，全國政協常委、著名話劇演員李羚，全國政協委員、著名琵琶演奏家吳玉霞，全國政協委員、著名評彈藝術家盛小雲，北京京劇院青年團團長、著名京劇表演藝術家遲小秋，著名畫家邢少臣、王玉、陳秀，詩人潘衍習等與台灣藝術家齊聚一堂，共賀此屆兩岸交流盛會。',
                        ytUrl: 'https://www.youtube.com/embed/QieGDtJSZew?list=PLk0TgSEV-XPXo5ZcP9kLxD2MzEiHViXnv?wmode=transparent',
                    }
                ]
            }
        },
        methods: {
            short: _.short
        },
        computed: {
            reeReviewBg: function () {
                let img1 = 'url(' + this.reeReviewBgImg + ')'
                let img2 = 'linear-gradient(0, rgba(0,0,0,0.8), rgba(0,0,0,0.5))'
                return { backgroundImage: img2 + ','+ img1}
            }
        }
    }
</script>

<style lang="stylus">
@import "../../css/variable.styl"

.reeReview {
    background-color: #eee;
    .ree-header {
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        padding: 5rem;
        @media(max-width:md-size ) {
            padding: 3rem 0rem;
        }
        >div{
            text-align: center;
        }
        h4 {
            font-size: 2.5rem;
            font-weight: bold;
            color: _white;
            font-family: fontMing;
            @media(max-width:md-size ) {
                font-size: 2rem;
            }
        }
        p {
            margin: 0;
            color: _white;
        }
        .ctx {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem 5rem;
            line-height: 2;
            text-align: left;
            font-weight: 200;
            @media(max-width:md-size ) {
                padding: 2rem 1.5rem;
            }
        }
    }

    
    .ree-items {
        padding: 5rem 3rem;
        @media(max-width:md-size ) {
            padding: 1rem 0rem;
        }
        >div {
            margin-bottom: 1rem;
        }
        .ree-item {
            padding: 0;
            padding-bottom: 3rem;
            border: 1px solid _gray-dark;
            height: 100%;
            position: relative;
            box-shadow: 0 0 20px -3px rgba(0,0,0,0.2);
            background-color: _gray;
            .ytVideo {
                border-bottom: 5px solid _red;
            }
            .ctx {
                padding: 2rem;
                font-size: 0.9rem;
                line-height: 2;
                h5.stage-title {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 100%;
                }
            }
            .reeLink {
                position: absolute;
                bottom: 0;
                right: 0;
                margin-top: 2rem;
                margin-right: 2rem;
                a {
                    background-color: _red;
                    color: #FFF;
                    padding: .5rem 2.4rem;
                    display: inline-block;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    &:hover {
                        background-color: _red + 50;
                    }
                }
            }
        }
    }
}
</style>
