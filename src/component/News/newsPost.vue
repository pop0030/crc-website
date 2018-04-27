<template lang="pug">
#page-Newspost
    div.row(v-if="postShow")
        div.col-md-12
            h3.title {{post.title}}
            div.stage-cover(:style="bgImgStyle(post.cover)")
            div.detial
                p.author 【{{post.author}}】
                p.date {{transDate(post.date.est)}}
            p.stage-content(v-html="nbr(post.intro)")
            p: a(:href="post.source", target="_blank") 新聞來源
            section.album
                div.stage-content.row
                    div.col-md-4(v-for="(i, n) in post.album")
                        div.sm-photo(data-toggle="modal" data-target="#lg-photo"  @click="modalClick(n)")
                            img(:src="i.img")
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
            postShow: false,
            modalNum: 0,
            id: this.$route.params.id
        }
    },
    components: {
        modalPic
    },
    computed: {
        modalAlbum: function() { return this.post.album }
    },
    methods : {
        fetchData: _.fetchData,
        fetchPost : function() {
            let vm = this
            vm.fetchData('./news/list.json', (res)=>{
                vm.post = res.data[vm.id]
                vm.postShow = true
            })
        },
        nbr: _.nbr,
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
@import '../../css/variable.styl';

#page-Newspost {
    margin-top: 2rem;
    .title {
        margin-bottom: 1rem;
    }
    .detial {
        font-size: 0.9rem;
        margin: 1rem 0;
        display: flex;
        border-bottom: 1px solid _green;
    }
    .stage-cover {
        width: 100%;
        height: 0;
        padding: 25% 0;
        background-size: cover;
        background-position: center;
        position: relative;
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
