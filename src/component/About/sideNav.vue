<template lang="pug">
.sideNav
    ul
        li(v-for="i in aboutList")
            router-link.r-link(:to="i.routerName") {{i.name}} 
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: [
        'aboutList'
    ],
    methods: {
    },
    mounted () {
    }
}
</script>

<style lang="stylus">
@import '../../css/variable.styl'
.sideNav {
    margin: 2rem 0;
    @media (max-width: sm-size) {
        margin: 0;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        @media (max-width: sm-size) {
            display: flex;
            overflow-y: scroll;
        }
        li {
            margin-bottom: 0.5rem;
            @media (max-width: sm-size) {
                margin-right: 1rem;
            }
        }
        a.r-link{
            transition: all 0.3s ease;
            @media (max-width: sm-size) {
                white-space: nowrap;
            }
            &:before {
                content: "\f061";
                color: transparent;
                display: inline-block;
                width: 0;
                overflow: hidden;
                font-weight: 100;
	            font: normal normal normal 14px/1 FontAwesome;
	            font-size: inherit;
	            text-rendering: auto;
                transition: all 0.3s ease;
                -webkit-font-smoothing: antialiased;
	            -moz-osx-font-smoothing: grayscale;
            }
            &:hover {
                &:before {
                    width: 1rem;
                    color: _red+100;
                }
            }
            &.router-link-active {
                &:before {
                    width: 1.4rem;
                    color: _red;
                }
                color: _green*0.8;
                font-weight: 600;             
            }
        }
    }
    
}
</style>
