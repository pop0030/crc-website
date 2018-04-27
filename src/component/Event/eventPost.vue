<template lang="pug">
#page-Eventpost
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 
                        i.fa.fa-podcast(aria-hidden='true')
                        | &nbsp;鼎談預告｜{{post.title}}
    .sub-body
        div.container
            div.row(v-if="postShow")
                div.col-md-12.ctxHeader
                    div.stage-cover(:style="bgImgStyle('url('+post.cover+')')")
                        div.info
                            p 藝文振興鼎談
                            h3 {{post.title}}
                div.col-md-9.ctxBody
                    section.intro
                        //- h4.title 鼎談簡介
                        h4.title 「{{post.eventName}}」鼎談簡介
                        div.stage-content
                            p(v-html="nbr(post.intro)")
                    section.hosts
                        h4.title 與談人
                        div.stage-content
                            div.host-list.row
                                div.col-md-3(v-for="(i,k,n) in host")
                                    router-link.r-link(:to="'/artist/'+k") 
                                        div.character-circle
                                            div.cover(:style="bgImgStyle('url('+i.cover+')')")
                                        p.hostName {{i.name}}
                                        p.hostTitle {{short(i.intro,25)}}
                div.col-md-3.navSide
                    div
                        section.main
                            h4.title 主題
                            div.content
                                p {{post.title}}
                        section.hosts
                            h4.title 與談人
                            div.content
                                p(v-for="i in host") {{i.name}}
                        section.date
                            h4.title 日期
                            div.content
                                p {{transDate(post.date.from)}} ～
                                p {{transDate(post.date.to)}}
                        section.loca
                            h4.title 線上直播
                            div.content
                                a(:href="post.stream" target="_blank").yt-link 
                                    i.fa.fa-youtube
</template>

<script>
import axios from 'axios'
import _ from 'fn'
export default {
    data () {
        return {
            post: {},
            host: {},
            postShow: false,
            id: this.$route.params.id
        }
    },
    methods : {
        fetchData: _.fetchData,
        fetchPost : function() {
            const vm = this;
            vm.fetchData('./events/'+vm.id+'.json', (res)=>{
                vm.post = res.data;
                this.fetchHost(res.data.host)
            })
        },
        fetchHost : function (hostKeys=[]) {
            const vm = this;
            vm.fetchData('./artists/list.json',(res)=>{
                let artists = res.data
                hostKeys.forEach(function(key) {
                    //vm.host.push(artists[key])
                    vm.host[key] = artists[key]
                });
                vm.postShow = true;
            })
        },
        nbr: function (val) {
            if (val) {
                return val.replace(/\n/g, "<br/>");
            }
        },
        transDate: function (str) {
            const date = new Date(str)
            const y = date.getFullYear() + '年'
            const m = date.getMonth() + 1 + '月'
            const d = date.getDate() + '日'
            const dayAry = ['日','一','二','三','四','五','六']
            const dd = '(' + dayAry[date.getDay()] + ')'
            const time = chk(date.getHours()) + ':' + chk(date.getMinutes())
            function chk(i) {
                return (i<10)?("0"+i):i
            }
            return y + m + d + dd + ' ' + time
        },
        bgImgStyle: _.bgImgStyle,
        short: _.short
    },
    watch : {
        '$route' : function () {
            this.id = this.$route.params.id
        },
        id : function() {
            this.fetchPost()
        }
    },
    created() {
        this.fetchPost()        
    }    
}
    
</script>

<style lang="stylus">
@import '../../css/variable.styl'

#page-Eventpost {
    .ctxHeader {
        .stage-cover {
            width: 100%;
            height: 0;
            padding: 25% 0;
            background-size: cover;
            background-position: top;
            position: relative;
            .info {
                position: absolute;
                width: 100%;
                text-align: right;
                right: 0;
                bottom: 0;
                color: _white;
                background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 75%);
                padding: 2rem 2rem 1rem 2rem;
                h3 {
                    font-size: 3rem;
                    letter-spacing: 3px;
                }
                p {
                    margin: 0;
                }
            }
        }
    }
    .navSide {
        padding-top: 1rem;
        >div {
            background-color: _green;
            padding: 1rem;
        }
        section {
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid _white;
            h4.title {
                font-size: 0.8rem;
                margin-bottom: 0.5rem;
                color: _black;
            }
            div.content {
                color: _white;
                p {
                    line-height: 1.5;
                    font-size: 1rem;
                    margin: 0;
                }
            }
        }
        .yt-link {
            color: _red;
            font-size: 2rem;
            background-color: _white;
            padding: 2px 6px;
            border-radius: 3px;
        }
    }

    .ctxBody {
        section {
            padding-bottom: 1rem;
            h4 {
                margin: 1rem 0;
                color: _green-dark;
            }
        }
        section.intro {
            div.stage-content {
                border: 5px solid _green;
                padding: 1rem;
                p {
                    margin: 0;
                }
            }
        }

        section.hosts {
            text-align:center;
            .hostName {
                line-height:1.5;
                margin: 0 0 5px 0;
            }
            .hostTitle {
                font-size: 0.8rem;
                margin: 0;
                color: lightness(_black);
            }
        }
    }

    .character-circle .cover {
        width: 80%;
        padding: 40% 0;
    }
}
</style>
