<template lang="pug">
#app
    Loading
    HeaderDiv
    transition(name="fade" mode="out-in")
        router-view
    FooterDiv
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Loading from './Loading';
import HeaderDiv from "./Header";
import FooterDiv from "./Footer";
export default {
    data() {
        return {
        }
    },
    methods:{
        ...mapActions(['showLoading']),
    },
    mounted(){
    },
    components:{
        Loading,
        HeaderDiv,
        FooterDiv
    }
}
</script>

<style lang="stylus" src="entry.styl"></style>
