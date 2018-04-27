<template lang="pug">
#page-Reviewlist
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2
                        i.fa.fa-clock-o(aria-hidden='true')
                        | &nbsp;鼎談回顧
    .sub-body
        div.container
            div.row
                div.col-md-12.ctrl-nav(:class="listType")
                    div.listType-btn(@click="listTypeChg('list')", type="list"): i.fa.fa-list(aria-hidden='true')
                    div.listType-btn(@click="listTypeChg('cards')", type="cards"): i.fa.fa-th(aria-hidden='true')
            transition(name="fade" mode="out-in")
                section.row.event-list.no-gutters(v-if="listShow", :class="listType")
                    div(v-for="(i,n) in list", :class="itemStyle")
                        div.event-item.row.no-gutters
                            div.stage-cover(:class="stageCoverStyle")
                                div: img(:src="i.cover" @load="setRatio($event, n)")
                            div.stage-content(:class="stageContentStyle")
                                router-link.r-link(:to="'/review/'+i.id"): h4.title {{i.title}}
                                div.detail
                                    p.date {{transDate(i.date.from)}}
                                p.intro {{short(i.intro,75)}}
                            p.review-link
                                router-link.r-link.m-btn(:to="'/review/'+i.id") READ MORE
</template>

<script>
import _ from 'fn'
import axios from 'axios'
export default {
    data () {
        return {
            list: [],
            listShow: false,
            listType: 'list'//[cards/table]
        }
    },
    computed: {
        itemStyle: function(){
            switch (this.listType) {
                case 'list': return ['col-md-12'];break;
                case 'cards': return ['col-md-4'];break;
                default: return ['col-md-12'];break;
            }
        },
        stageCoverStyle: function(){
            switch (this.listType) {
                case 'list': return ['col-md-3'];break;
                case 'cards': return [''];break;
                default: return [''];break;
            }
        },
        stageContentStyle: function(){
            switch (this.listType) {
                case 'list': return ['col-md-9'];break;
                case 'cards': return [''];break;
                default: return [''];break;
            }
        },
    },
    methods : {
        fetchList : function () {
            const vm = this;
            vm.fetchData('./reviews/list.json', (res)=>{
                vm.list = res.data;
                vm.listShow = true;
            })
        },
        fetchData: _.fetchData,
        transDate: _.transDate,
        textShort : _.short,
        setRatio: function (e, n) {
            let img = e.target
            let w = img.naturalWidth
            let h = img.naturalHeight
            let ratio = (w>h)?'landscape':'portraits'
            e.target.classList.add(ratio)
        },
        bgImgStyle: _.bgImgStyle,
        listTypeChg: function(type) {
            let vm = this
            vm.listShow = false
            vm.listType = type || 'list'
            setTimeout(function() {
                vm.listShow = true
            }, 300);
        },
        short: _.short
    },
    mounted() {
        this.fetchList();
    }
}    
</script>

<style lang="stylus">
@import '../../css/variable.styl'
#page-Reviewlist {
    .event-list{
        padding: 1rem 0;
        &.list {
            .event-item {
                padding: 0;
                margin-bottom: 1.5rem;
                background-color: alpha(_gray, 0.5);
                .stage-cover {
                    border: 0px solid _green;
                }
                .stage-content {
                    padding: 2rem;
                    border: 2px solid _gray;
                    border-left: 0;
                    .intro {
                    }
                }
            }
        }
        &.cards {
            >div{
                padding-bottom: 1rem;
            }
            .event-item {
                padding: 0;
                margin: 0.5rem;
                height: 100%;
                flex-direction: column;
                border: 1px solid _gray-dark;
                border-bottom: 3px solid _green;
                background-color: alpha(_gray, 0.5);
                box-shadow: 0 0 15px -3px rgba(0,0,0,0.2);
                .stage-cover {
                    width: 100%;
                    div {
                        padding: 40% 0;
                        height: 0;
                    }
                }
                .stage-content {
                    padding: 2rem;
                }
                .review-link {
                    margin: 0;
                }
            }
        }
    }
    .event-item {
        list-style: none;
        position: relative;
        .stage-cover {
            position: relative;
            margin: 0;
            div {
                position: relative;
                width: 100%
                height: 100%;
                background-color: _gray;
                overflow: hidden;
                img {
                    position: absolute;
                    top: 0%;
                    left: 0%;
                    width: auto;
                    &.landscape {
                        height: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    &.portraits {
                        width: 100%;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }
        .stage-content {
            position: relative;
        }
        h4.title {
            font-size: 1.2rem;
            line-height: 1.6;
        }
        .detail {
            font-size: 0.8rem;
            color: #aaa;
        }
        .intro {
            text-align: justify;
            text-align-last: left;
            line-height: 2;
            font-size: 0.9rem;
        }
        .review-link {
            position: absolute;
            right: 0;
            bottom: 0;
            margin: 0;
            a {
                font-size: 0.8rem;
                background-color: _green;
            }
        }
    }

    .ctrl-nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        div.listType-btn {
            margin: 0 0.5rem;
            padding: 5px 10px;
            border: 1px solid _gray;
            cursor: pointer;
        }
        &.list {
            div.listType-btn[type="list"] {
                background: _green;
                color: _white;
            }
        }
        &.cards {
            div.listType-btn[type="cards"] {
                background: _green;
                color: _white;
            }
        }
    }
}
</style>
