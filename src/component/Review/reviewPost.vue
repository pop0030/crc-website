<template lang="pug">
#page-Reviewpost
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 鼎談回顧｜{{post.title}}
    .sub-body(v-if="postShow")
        div.container-fluid
            div.row.justify-content-center.no-gutters
                div.col-lg-6.ctxHeader
                    div.ytVideo(v-if="post.videoStatus")
                        iframe(:src="post.video" frameborder="0" allowfullscreen)
                    div.stage-cover(:style="bgImgStyle(post.cover)" v-else)
                        div.info
                            p 藝文振興鼎談
                            h3 {{post.title}}
        div.container
            div.row
                div.col-md-9.ctxBody
                    section.intro
                        h4.title 鼎談簡介
                        div.stage-content
                            p(v-html="nbr(post.intro)")
                    section.hosts
                        h4.title 與談人
                        div.stage-content
                            div.row
                                div.col-md-3(v-for="(i,k,n) in host")
                                    router-link.r-link(:to="'/artist/'+k") 
                                        div.character-circle
                                            div.cover(:style="bgImgStyle(i.cover)")
                                        p.hostName {{i.name}}
                                        p.hostTitle {{short(i.intro, 25)}}
                    section.album
                        h4.title 鼎談紀錄
                        div.stage-content.row.no-gutters
                            div.col-md-4(v-for="(i, n) in post.album")
                                div.sm-photo(data-toggle="modal" data-target="#lg-photo"  @click="modalClick(n)")
                                    img(:src="i.img")
                    section.news
                        h4.title 媒體報導
                        div.stage-content.row
                            div.col-md-6(v-for="(i,n) in events")
                                div.event-item
                                    router-link(:to="'/news/#'")
                                        div.event-cover: img(:src="i.cover")
                                        div.event-ctx
                                            h4.title {{i.title}}
                                            div.detail
                                                p.date
                                                    i.fa.fa-calendar(aria-hidden="true")
                                                    | {{transDate(i.date.from)}}
                    section.download
                        h4.title 鼎談全文下載
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
    //- 彈出視窗
    modalPic#lg-photo(v-bind:p="modalNum" v-bind:album="post.album" v-bind:click="modalClick")
</template>         

<script>
import _ from 'fn'
import modalPic from '../modalPic'
export default {
    data () {
        return {
            post: {},
            host: {},
            events: [],
            postShow: false,
            modalNum: 0,
            id: this.$route.params.id
        }
    },
    components: {
        modalPic
    },
    computed: {
        modalAlbum: function() { return this.post.album},
    },
    methods : {
        fetchData: _.fetchData,
        fetchPost : function() {
            const vm = this;
            vm.fetchData('reviews/'+vm.id+'.json', (res)=>{
                vm.post = res.data
                vm.fetchHost(res.data.host)
            })
        },
        fetchHost : function (hostKeys=[]) {
            const vm = this;
            vm.fetchData('artists/list.json',(res)=>{
                let artists = res.data
                hostKeys.forEach(function(key) {
                    //vm.host.push(artists[key])
                    vm.host[key] = artists[key]
                });
                vm.postShow = true;
            })
        },
        nbr: _.nbr,
        short: _.short,
        transDate: _.transDate,
        bgImgStyle: _.bgImgStyle,
        modalClick: _.modalClick,
    },
    watch : {
        '$route' : function () {
            this.id = this.$route.params.id
        },
        id : function() {
            this.fetchPost()
        }
    },
    mounted() {
        this.fetchPost()        
    }    
}
    
</script>

<style lang="stylus">
@import '../../css/variable.styl'
#page-Reviewpost {
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

    .sub-body > div.container-fluid {
        background-color: _black;
        padding: 0;
    }

    .character-circle .cover {
        width: 80%;
        padding: 40% 0;
    }

    .album {
        .stage-content {
            margin: -0.3rem;
            div[class*="col-"] {
                padding: 0.3rem;
            }
        }
    }
}
</style>
