<template lang="pug">
#page-Actlist
    .sub-header
            div.container
                div.row
                    div.col-md-12
                        h2 
                            i.fa.fa-clock-o(aria-hidden='true')
                            | &nbsp;鼎談交流
    .sub-body
        div.container
            section.row.ree-items
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
            list: [],
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
            ],
            listShow: false
        }
    },
    methods : {
        fetchData : _.fetchData,
        fetchList : function () {
            let vm = this
            this.fetchData('./news/list.json', (res)=> {
                vm.list = res.data
                vm.listShow = true
            })
        },
        setRatio: function (e, n) {
            let img = e.target
            let w = img.naturalWidth
            let h = img.naturalHeight
            let ratio = (w>h)?'landscape':'portraits'
            this.list[n].coverRatio = ratio
        },
        transDate: _.transDate,
        short : _.short,
        bgImgStyle : _.bgImgStyle
    },
    mounted() {
        this.fetchList();
    }
}    
</script>

<style lang="stylus">
@import '../../css/variable.styl'

#page-Actlist {
    .ree-items {
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
                margin-right: 1rem;
                a {
                    background-color: _red;
                    color: #FFF;
                    padding: .5rem 1.4rem;
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
