<template lang="pug">
#page-Eventlist
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 
                        i.fa.fa-podcast(aria-hidden='true')
                        | &nbsp;鼎談預告
    .sub-body
        transition(name="fade" mode="out-in")
            div.container.event-list(v-if="listShow")
                //- 熱門
                div.row.hot-events
                    div.col-md-12(v-for="(i,n) in listHot")
                        div.event-item
                            div.event-cover: img(:src="i.cover")
                            div.event-card
                                div.detail
                                    p {{i.catalog}} / {{i.subCatalog}}
                                h4.title: router-link.r-link(:to="'/event/'+i.id") {{i.title}} : {{i.subTitle}}
                                div.detail
                                    p.date {{transDate(i.date.from)}}
                                p.intro {{short(i.intro, 150)}}
                            
                //- 最新
                div.row.new-events
                    div.col-md-6(v-for="(i,n) in listNew")
                        div.event-item
                            div.event-cover: img(:src="i.cover")
                            div.event-ctx
                                h4.title: router-link.r-link(:to="'/event/'+i.id") {{i.title}}
                                div.detail
                                    p.date
                                        i.fa.fa-calendar(aria-hidden="true")
                                        | {{transDate(i.date.from)}}
                                p.intro {{short(i.intro, 100)}}
                            p.event-link
                                router-link.r-link.m-btn(:to="'/event/'+i.id") READ MORE

                //- 所有
                div.row.other-events
                    div.col-md-12
                        div.event-item
                            h4.title
                                span.hash #
                                | 鼎談主題
                            p.date 舉辦日期
                            p.event-link 詳細
                    div.col-md-12(v-for="(i,k,n) in listAll")
                        div.event-item
                            h4.title
                                span.hash {{n+1}}
                                router-link.r-link(:to="'/event/'+i.id") {{i.title}}
                            p.date {{transDate(i.date.from)}}
                            p.event-link
                                router-link.r-link.m-btn(:to="'/event/'+i.id") READ MORE
</template>

<script>
import _ from 'fn'
import axios from 'axios'

export default {
    data () {
        return {
            listHot: [],
            listNew: [],
            listAll: {},
            newArr: ['e002','e003','e004','e005'],
            hotArr: ['e001'],
            listShow: false
        }
    },
    methods : {
        fetchData: _.fetchData,
        fetchList : function () {
            const vm = this;
            vm.fetchData('./events/list.json', (res)=>{
                let ls = res.data
                vm.listAll = ls
                vm.newArr.forEach(function(key) {
                    vm.listNew.push(ls[key])
                });
                vm.hotArr.forEach(function(key) {
                    vm.listHot.push(ls[key])
                });
                vm.listShow = true;
            });
        },
        transDate: function (str) {
            let date = new Date(str)
            let y = date.getFullYear() + '年'
            let m = date.getMonth() + 1 + '月'
            let d = date.getDate() + '日'
            let dayAry = ['日','一','二','三','四','五','六']
            let dd = '(' + dayAry[date.getDay()] + ')'
            let time = chk(date.getHours()) + ':' + chk(date.getMinutes())
            function chk(i) {
                return (i<10)?("0"+i):i
            }
            return y + m + d + dd + ' ' + time
        },
        short: _.short, 
        setRatio: function (e, i) {
            let img = e.target
            let w = img.naturalWidth
            let h = img.naturalHeight
            let ratio = (w>h)?'landscape':'portraits'
            i.coverRatio = ratio
        }
    },
    mounted() {
        this.fetchList();
    }
}    
</script>

<style lang="stylus">
@import '../../css/variable.styl'
#page-Eventlist {
    .event-item {
        border-bottom: 1px solid _gray-dark;
        .event-cover {
            width: 100%
            position: relative;
            height: 0;
            overflow: hidden;
            padding: 40% 0;
            img {
                position: absolute;
                top: 0%;
                left: 0;
                &.landscape { height: 100%; }
                &.portraits { width: 100%; }
            }
        }
        .detail {
            display: flex;
            font-size: 0.8rem;
            >p {
                margin-right: 1rem;
                i {
                    letter-spacing: 5px;
                }
            }
        }
        .intro {
            line-height: 2;
            font-size: 0.9rem;
        }
        .event-link {
            text-align: right;
            a.m-btn {
                background-color: _green;
                &:hover {
                    background-color: _green * 1.2;
                }
            }
        }
    }

    .hot-events {
        margin-bottom: 2rem;
        .event-item {
            padding: 1rem;
            position: relative;
            overflow: hidden;
            h4>.r-link {
                color: _white;
                font-size: 2rem;
                line-height: 1.6;
            }
            @media (max-width: sm-size) {
                padding: 0;
            }
        }
        .event-cover {
            position: absolute;
            width: 100%;
            height: 0;
            top: 0;
            left: 0;
            padding: 100% 0;
            img {
                width: 100%;
            }
        }
        .event-card {
            margin-top: 20rem;
            padding: 1rem;
            border: 1px solid _white;
            background-color: alpha(_black, 0.5);
            position: relative;
            color: _white;
            @media ( max-width: sm-size) {
                margin-top: 0rem;
            } 
        }

    }

    .new-events {
        margin-bottom: 2rem;
        >div {
            padding-bottom: 2rem;
        }
        .event-item {
            border: 1px solid _gray;
            box-shadow: 0 0 15px -3px rgba(0,0,0,0.2);
            height: 100%;
            padding: 0;
            padding-bottom: 5rem;
            position: relative;
            .event-cover {
                padding: 30% 0;
                img {
                    width: 100%;
                }
            }
            h4.title {
                margin: 1rem 0;
                line-height: 1.6;
            }
            .event-ctx {
                padding: 1rem 2rem;
            }
            .event-link {
                position: absolute;
                bottom: 1rem;
                right: 2rem;
            }
        }
    }

    .other-events {
        border: 1px solid _green;
        .event-item {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            
            h4.title {
                width: 40%;
                font-size: 1rem;
                margin: 0;
                .hash {
                    margin-right: 1rem;
                }
            }
            p.date {
                width: 30%;
                margin: 0;
            }
            .event-link {
                width: 30%;
                margin: 0;
            }
            
        }
    }
}

</style>
