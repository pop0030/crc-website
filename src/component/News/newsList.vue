<template lang="pug">
#page-Newslist
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 
                        i.fa.fa-clock-o(aria-hidden='true')
                        | &nbsp;媒體曝光
    .sub-body
        div.container
            section.event-list.row.no-gutters(v-if="listShow")
                div.event-item.col-md-12(v-for="(i,n) in list")
                    router-link.row.no-gutters.r-link(:to="'/news/article/'+i.id")
                        div.col-md-4.stage-cover
                            div(:style="bgImgStyle(i.cover)")
                            div.hover
                                p READ MORE
                        div.col-md-8.stage-content
                            h4.title {{i.title}}
                            div.detail
                                p.date 日期：{{transDate(i.date.est)}}
                            p.intro {{short(i.intro, 75)}}
</template>

<script>
import _ from 'fn'
export default {
    data () {
        return {
            list: [],
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
#page-Newslist {
    .event-item {
        padding: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid _gray-dark;
        @media (max-width: sm-size) {
            padding-top: 0rem;
            padding-bottom: 1rem;
        }

        .stage-cover {
            position: relative;
            div {
                width: 100%
                height: 100%;
                background-size: cover;
                background-position: center;
                @media (max-width: sm-size) {
                    padding: 29% 0;
                }
            }
            .hover {
                position: absolute;
                top: 0;
                left: 0;
                background-color: alpha(_black, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.25s ease;
                &:hover {
                    opacity: 1;
                }
                p {
                    color: _white;
                    font-weight: 100;
                    font-size: 0.9rem;
                    letter-spacing: 2px;
                }
            }
        }
        .stage-content {
            padding: 4rem 0 4rem 2rem;
            @media (max-width: sm-size) {
                padding: 1rem 1rem;
            }
            h4.title {
                font-size: 1.2rem;
                color: _black;
                line-height: 2;
            }
            .detail {
                font-size: 0.8rem;
                color: _gray-dark;
            }
            .intro {
                font-size: 0.9rem;
                line-height: 2;
                margin: 0;
                color: _black;
            }
        }
    }
}
</style>
