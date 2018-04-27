<style>

</style>

<template lang="pug">
.index
    ShowReel
    eventReview
    aboutReview
    portReview
    reeReview
    newsReview
    
</template>

<script>
import { mapGetters, mapActions , mapMutations } from 'vuex';
import ShowReel from './Showreel'
import eventReview from './Index/eventReview'
import aboutReview from './Index/aboutReview'
import portReview from './Index/portReview'
import newsReview from './Index/newsReview'
import reeReview from './Index/reeReview'
export default{
	className:"Index.vue",
    data(){
        return {

        }
    },
    computed:{
    },
    methods:{
        ...mapActions(['showLoading']),
        ...mapMutations(['count']),
        clickHandler(){
            this.count();
        }
    },
    mounted(){
    },
    destroyed(){

    },
    components:{
        ShowReel,
        eventReview,
        aboutReview,
        portReview,
        newsReview,
        reeReview
    }
}
</script>