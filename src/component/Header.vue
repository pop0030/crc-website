<template lang="pug">
header
    div.container
        div.row
            div.col-lg-3.col-md-12.main-logo
                router-link(to="/")
                    img(:src="mainLogo" alt="藝文振興鼎談")
                button.btn.menu-toggle(@click="menuShowToggle")
                    i.fa.fa-bars(aria-hidden="true")
            Navigation.col-lg-9.col-md-12
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Navigation from './Navigation';
    import mainLogo from '../img/main_logo.svg';
    export default {
        data() {
            return {
                mainLogo
            }
        },
        methods: {
            ...mapActions(['menuShowToggle'])
        },
        mounted() {
        },
        destroyed() {
        },
        components: {
            Navigation
        }
    }
</script>

<style lang="stylus">
@import "../css/variable.styl"

header {
    background-color: #FFF;
    width: 100%;
    border-bottom: 1px solid _gray-dark;
    border-top: 5px solid _green;
    div.row{
        align-items: center;
        padding: 0;
        position: relative;
    }
    .main-logo {
        padding-top:1rem;
        padding-bottom:1rem;
        img {
            height: 5rem;
            max-width: 100%;
        }
        @media (max-width: lg-size) {
            padding-bottom:0rem;
            flex: 0 0 100%;
            max-width: 100%;
        }
        @media (max-width: md-size) {
            padding-bottom:1rem;
            flex: 0 0 100%;
            max-width: 100%;
            text-align: center;
        }
    }
    nav.navbar {
        @media (max-width: lg-size) {
            flex: 0 0 100%;
            max-width: 100%;
        }
        @media (max-width: md-size) {
            top:0;
            right:0;
        }
    }

    button.btn.menu-toggle {
        display: none;
        box-shadow: 0 0 0 transparent;
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
        cursor: pointer;
        @media (max-width: md-size) {
            display: block;
            background-color: transparent;
            position: absolute;
            right: 0;
            top: 0;
        }
    }
}
</style>
