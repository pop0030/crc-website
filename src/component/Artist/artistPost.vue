<template lang="pug">
#page-Artistpost
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 
                        i.fa.fa-podcast(aria-hidden='true')
                        | &nbsp; 與談藝術家｜{{post.name}}
    .sub-body
        div.container
            div.row(v-if="postShow")
                div.post-side.col-md-3
                    div.row.artist-header
                        div.character-circle.col-md-12
                            div.cover(:style="bgImgStyle(post.cover)")
                        div.col-md-12
                            h3 {{post.name}}
                            p {{post.title}}
                div.post-ctx.col-md-9
                    div.artist-ctx
                        h4.title 關於
                        p.intro {{post.intro}}
                    div.artist-port
                        h4.title 作品
                        div.row.no-gutters
                            div.col-md-4(v-for="(i,n) in post.port")
                                div.port-item(data-toggle="modal" data-target="#lg-photo"  @click="modalClick(n)")
                                    div.stage-cover(:style="bgImgStyle(i.img)")
                                    div.stage-content
                                        h5.portName 《{{i.portName}}》
                                        p.portAuthor {{i.portAuthor}}
                                        p.portAttr {{i.portAttr}}
                    div.artist-event
                        h4.title 相關鼎談會
                        div.row
                            div.col-md-6(v-for="(i,n) in events")
                                div.event-item
                                    router-link(:to="'/event/'+i.id")
                                        div.event-cover: img(:src="i.cover")
                                        div.event-ctx
                                            h4.title {{i.title}}
                                            div.detail
                                                p.date
                                                    i.fa.fa-calendar(aria-hidden="true")
                                                    | {{transDate(i.date.from)}}
                                                
    modalPic#lg-photo(v-bind:p="modalNum" v-bind:album="post.port" v-bind:click="modalClick")
</template>

<script>
import _ from 'fn'
import modalPic from 'modalPic'
export default {
    data () {
        return {
            post: {},
            events: [],
            postShow: false,
            modalNum: 0,
        }
    },
    computed: {
        modalAlbum: function() { return this.post.port},
        id: function() { return this.$route.params.id}
    },
    methods: {
        fetchData: _.fetchData,
        fetchPost : function() {
            const vm = this
            vm.fetchData('./artists/'+vm.id+'.json', (res)=>{
                vm.post = res.data
                vm.fetchEvent(res.data.event)
                vm.postShow = true
            })
        },
        fetchEvent : function (eventKeys=[]) {
            const vm = this;
            vm.fetchData('./events/list.json',(res)=>{
                let ls = res.data
                eventKeys.forEach(function(key) {
                    vm.events.push(ls[key])
                })
            })
        },
        bgImgStyle: _.bgImgStyle,
        transDate: _.transDate,
        short: _.short,
        modalClick:  _.modalClick
    },
    mounted () {
        this.fetchPost()
    },
    watch : {
        '$route' : function () {
            this.id = this.$route.params.id
        },
        id : function() {
            this.fetchPost()
        }
    },
    components: {
        modalPic
    }
}
</script>

<style lang="stylus">
@import '../../css/variable.styl'
#page-Artistpost {
    .post-ctx {
        h4 {
            margin: 1rem 0;
            color: _green-dark;
        }
        >div {
            margin-bottom: 2rem;
        }
    }
    .artist-header {
        align-items: center;
        text-align: center;
        .character-circle .cover {
            width: 100%;
            padding: 50% 0;
            border-radius: 0;
        }
        h3 {
            font-size: 1.5rem;
        }
        p {
            color: _green;
        }
    }
    .artist-ctx {
        p.intro {
            border: 5px solid _green;
            padding: 1rem;
            line-height: 2;
        }
    }
    .artist-port {
        div[class*='row']{
            margin: -0.5rem;
        }
        div[class*='col-'] {
            padding: 0.5rem;
        }
        .port-item {
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 100%;
            border-width: 1px;
            border-style: solid;
            border-color: _gray;
            .stage-cover {
                position: relative;
                width: 100%;
                height: 0;
                padding: 50% 0;
                background-size: cover;
                background-position: center;
            }
            .stage-content {
                padding: 1rem;
                
                .portName {
                    font-size: 1.2rem;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 100%;
                    text-overflow: ellipsis;
                    letter-spacing: 2px;
                    font-weight: 600;
                    line-height: 1.8;
                    margin: 0;
                }
                .portAuthor {
                    font-size: 0.8rem;
                    line-height: 2;
                    margin: 0;
                    color: light(_black);
                }
                .portAttr {
                    font-size: 0.5rem;
                    line-height: 1.5;
                    margin: 0;
                    color: light(_black);
                    font-weight: 200;
                }
            }
        }
    }

    .artist-event {
        .event-item {
            border-bottom: 1px solid _gray-dark;
            border: 1px solid _gray;
            box-shadow: 0 0 15px -3px rgba(0,0,0,0.2);
            height: 100%;
            padding: 0;
            position: relative;
            >a {
                text-decoration: none;
                color: _black;
            }
            .event-cover {
                width: 100%
                position: relative;
                height: 0;
                overflow: hidden;
                padding: 25% 0;
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                }
            }
            h4.title {
                margin: 1rem 0;
                color: _black;
            }
            .event-ctx {
                padding: 0.5rem 1.5rem;
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
        }
    }
}
</style>
