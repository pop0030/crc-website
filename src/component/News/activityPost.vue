<template lang="pug">
#page-Eventpost
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 鼎談交流｜{{post.title}}
    .sub-body
        div.container
            div.row(v-if="postShow")
                div.col-md-9
                    div.stage-cover
                        img(:src="post.cover")
                    section
                        h3.stage-title {{post.title}}
                        p.stage-content(v-html="nbr(post.intro)")
                    section
                        h4.stage-title 與談人簡介
                        p.stage-content
                             div(v-for="(i, n) in post.host")
                                p {{i}}
                                p(v-html="nbr(post.hostIntro[n])")
                    section
                        h4.stage-title 與談人作品
                        p.stage-content
                             div(v-for="i in post.hostWorks")
                                p {{i.name}}
                                p {{i.author}}
                                p
                                    img(:src="i.img") 
                div.col-md-3
                    h4.stage-title 活動時間
                    div.stage-content
                        section
                            h5 主講人
                            p(v-for="i in post.host") {{i}}
                        section
                            h5 日期
                            p {{transDate(post.date.from)}}
                            p {{transDate(post.date.to)}}
                        section 地點
                            p {{post.location}}
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            post: {},
            postShow: false,
            id: this.$route.params.id
        }
    },
    methods : {
        fetchPost : function() {
            const vm = this;
            axios.get('./events/'+vm.id+'.json').then((res)=>{
                vm.post = res.data;
                vm.postShow = true;
            }).catch((err)=>{
                console.log(err)
                vm.post = null
                vm.postShow = false
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
        }
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

</style>
