<template lang="pug">
#About-page
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 {{aboutTitle}}
    .sub-body
        div.container
            div.row
                sideNav.col-lg-2.col-md-3(v-bind:aboutList="aboutList")
                transition(name="fade" mode="out-in")
                    router-view.col-lg-10.col-md-9
</template>

<script>

import sideNav from './sideNav'

export default {
    data () {
        return {
            aboutTitle : '認識鼎談',
            aboutList: [
                {
                    name:'認識鼎談',
                    routerName: '/about/feature'
                },{
                    name:'緣起',
                    routerName: '/about/origin'
                },{
                    name:'鼎談理念',
                    routerName: '/about/concept'
                },{
                    name:'未來發展',
                    routerName: '/about/rise'
                },{
                    name:'藝文闡述',
                    routerName: '/about/reference'
                },
            ]
        }
    },
    watch: {
        '$route': function() {
            this.setTitle(this.$route.path)
        }
    },
    mounted() {
        this.setTitle(this.$route.path)
    },
    methods : {
        setTitle : function (name) {
            const vm = this
            const ls = vm.aboutList
            for( let i=0; i < ls.length; i++) {
                if(name==ls[i].routerName) {
                    vm.aboutTitle = ls[i].name 
                } else {
                    vm.aboutTitle = ls[0].name
                }
            }
        }
    },
    components : {
        sideNav
    }
} 
</script>

<style lang="stylus">
@import '../../css/variable.styl'

#About-page {
    .container {
        @media (max-width: sm-size) {
            padding-bottom: 0;
        }
    }
}
</style>
