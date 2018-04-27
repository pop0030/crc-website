<template lang="pug">
nav(role="navigation").navbar
    ul.nav(v-bind:class="{ show: menuShowMob }")
        li.nav-item.dropdown(@mouseenter="dropHover" @mouseleave="dropHover")
            router-link.nav-link(to="/about" data-toggle="dropdown" aria-haspopup="true" aria-expand="false") 關於
            div.dropdown-menu
                router-link.dropdown-item(to="/about/feature") 認識鼎談
                router-link.dropdown-item(to="/about/origin") 緣起
                router-link.dropdown-item(to="/about/concept") 鼎談理念
                router-link.dropdown-item(to="/about/rise") 未來發展
                router-link.dropdown-item(to="/about/reference") 藝文闡述
        li.nav-item
            router-link.nav-link(to="/catalog") 鼎談分類
        li.nav-item
            router-link.nav-link(to="/event") 鼎談預告
        li.nav-item
            router-link.nav-link(to="/artist") 與談藝術家
        li.nav-item
            router-link.nav-link(to="/review") 鼎談回顧
        li.nav-item
            router-link.nav-link(to="/activity") 藝壇交流
        li.nav-item
            router-link.nav-link(to="/news") 媒體曝光
        li.nav-item
            router-link.nav-link(to="/recommend") 我要推薦議題
        li.nav-item
            a.nav-link(to="/index")
                i.fa.fa-search(aria-hidden="true")
        li.nav-item
            router-link.nav-link(to="/index") EN
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	className: "Navigation.vue",
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['menuShowMob'])
    },
    methods: {
        dropHover : function (e) {
            if(e.type == 'mouseenter') {
                $(e.target).addClass('show')
            } else {
                $(e.target).removeClass('show')
            }
        }
    },
    watch: {
        menuShowMob: function () {
            var $menu = $('ul.nav');
            var scrollH = $menu[0].scrollHeight;
            var vm = this;
            $menu.css('height',scrollH);
            if(this.menuShowMob){
                setTimeout(function() {
                    $menu.css('height','auto');
                    vm.$emit('navFixed');
                }, 500);
            }else{
                setTimeout(function() {
                    $menu.css('height',0);
                    setTimeout(function() {
                        $menu.removeAttr('style');
                        vm.$emit('navFixed');
                    }, 500);
                }, 100);
            }
        }
    },
    mounted() {
        
    },
    components: {

    }
}
</script>

<style lang="stylus">
@import "../css/variable.styl"

nav[role="navigation"] {
    display: flex;
    justify-content: flex-end;
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
    @media (max-width: md-size) {
        overflow: hidden;
        padding: 0;
        z-index: 1000;
    }
    a.nav-link {
        color: _black;
        font-size: 1rem;
        padding: 1.6rem 0.6rem;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            bottom: 1rem;
            left: 0;
            padding: 0 0.6rem;
            background-clip: content-box;
            width: 0%;
            height: 5px;
            background-color: _green;
            @media (max-width: sm-size) {
                display: none;
            }
        }
        &:hover {
            color: _green;
        }
        &.router-link-active {
            &:after {
                width: 100%;
            }
        }
        @media (max-width: lg-size) {
            padding: 1.6rem 0.6rem;
        }
        @media (max-width: md-size) {
            padding: 0.8rem 1.6rem;
            border-bottom: 1px solid _gray+10;
        }
    }
    ul.nav {
        display: inline-flex;
        justify-content: flex-end;
        @media (max-width: lg-size) {
            justify-content: flex-start;
        }
        @media (max-width: md-size) {
            flex-direction: column;
            height: 0;
            overflow: hidden;
            display: flex;
            transition: height 500ms ease;
            &.show {
                height: initial;
            }
        }
        li.nav-item{
            white-space: nowrap;
            @media (max-width: md-size) {
                display: block;
            }
        }
    }
    li.nav-item {
        .dropdown-menu {
            border: 1px solid _gray-dark;
            border-left: 5px solid _green * 1.2;
            border-radius: 0px;
            margin: 0 0 0 0.6rem;
            padding: 0;
            font-size: 1rem;
            transition: all 0.5s ease;
            .dropdown-item {
                padding: 0.6rem 1rem;
                &:hover {
                    background-color: transparent;
                    color: _green;
                }
                &:active {
                    background-color: transparent;
                    color: _green;
                }
                &:last-child {
                }
            }
            @media (max-width: md-size) {
                position: relative;
                width: 100%;
                height: 0;
                transition: height 500ms ease;
            }
        }
        &.show {
            .dropdown-menu {
                @media (max-width: md-size) {
                    height: auto;
                }
            }
        }
    }
}

</style>