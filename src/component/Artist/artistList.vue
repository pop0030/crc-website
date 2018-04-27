<template lang="pug">
#page-Artists
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 鼎談藝術家
    .sub-body
        div.container
            ul.row.no-gutters
                li.col-lg-3.col-sm-6(v-for="(i,n) in ls")
                    div.artist-item
                        router-link.r-link.stage-cover(:to="'/artist/'+n", :style="bgImgStyle(i.cover)")
                        div.stage-content
                            h4.a-name {{i.name}}
                            p.a-title {{i.title}}
                            //- p.a-intro {{short(i.intro, 25)}}
                        //- div.stage-link
                            router-link.r-link(:to="'/artist/'+n") READ MORE
</template>

<script>
import _ from 'fn'
export default {
    data () {
        return {
            ls: null
        }
    },
    methods : {
        fetchData: _.fetchData,
        bgImgStyle: _.bgImgStyle,
        short: _.short
    },
    mounted() {
        const vm = this;
        vm.fetchData('./artists/list.json', (res)=>{
            vm.ls = res.data
        });
    }
}    
</script>

<style lang="stylus">
@import '../../css/variable.styl'
#page-Artists {
    ul.row {
        margin: 0 -1rem;
        padding: 0;
        >li {
            padding: 0rem 1rem 2rem 1rem;
            list-style: none;
        }
    }
    .artist-item {
        border: 2px solid _gray;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 10px -3px alpha(_black, 0.2);
        position: relative;
        width: 100%;
        height: 100%;
        transition: box-shadow 0.2s ease;
        &:hover {
            box-shadow: 0 0 5px 3px alpha(_black, 0.3);
        }

        .stage-cover {
            display: block;
            position: relative;
            width: 100%;
            height: 0;
            padding: 50% 0;
            background-size: cover;
            background-position: center;
            border: 10px solid _white;
            //border-bottom: 5px solid _green;
        }

        .stage-content {
            padding: 1rem;
            .a-name {
                font-size: 1.2rem;
                white-space: nowrap;
                overflow: hidden;
                width: 100%;
                text-overflow: ellipsis;
                letter-spacing: 1px;
                margin:0;
            }
            .a-title {
                font-size: 0.8rem;
                color: _blue;
                white-space: nowrap;
                overflow: hidden;
                width: 100%;
                text-overflow: ellipsis;
                line-height: 1;
                margin: 5px 0;
            }
            .a-intro {
                font-size: 0.9rem;
                line-height: 1.8;
            }
        }

        .stage-link {
            position: absolute;
            bottom: 0;
            right: 0;
            a {
                padding: 1rem;
                display: inline-block;
                font-size:0.8rem;
                line-height: 1;
                color: _blue;
            }
        }
    }
}
</style>
