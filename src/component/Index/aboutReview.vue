<template lang="pug">
div.aboutReview.container-fluid
    div.row
        div.col-md-6.about-item
            div
                h4.aboutTitle 
                    | 關於
                    span 藝文振興鼎談
                p.aboutCtx 《藝文振興鼎談》深知藝文創作者對於開拓市場之迫切需求，因此，《藝文振興鼎談》將運用數位科技作為載具，為台灣藝文界串起整合產銷系統的價值鏈，透過介接國際市場，為台灣打造最完整的藝文雲端生態系。 《藝文振興鼎談》所連接起的虛實生態圈，將讓台灣藝文產業，向國際市場成功發聲， 也讓國際文化市場，透過《藝文振興鼎談》的雲端生態系，與台灣文化產業達到更全面性及更持續性的交流，進ㄧ步開創台灣藝文發展新價值高地！
                p.aboutLink
                    router-link(to="about") READ MORE
        div.col-md-6.about-pic(:style="aboutReviewBg")
</template>
<script>
import _ from 'fn'
export default {
    data () {
        return {
            aboutBg: 0,
            libImages: [
                'nik-macmillan-151041.jpg',
            ]
        }
    },
    computed: {
        aboutReviewBg: function () {
            return { backgroundImage: 'url(./asset/img/lib-images/'+this.libImages[this.aboutBg]+')'}
        },
    },
    methods: {
        add : function () {
            let max = this.libImages.length
            if( this.aboutBg < max-1) {
                this.aboutBg++
            } else {
                this.aboutBg = 0
            }
            this.count()
        },
        count : function () {
            const vm = this
            setTimeout(function() {
                vm.add()
            }, 5000);
        }
    },
    mounted() {
        this.count()
    }
}
</script>
<style lang="stylus">
@import "../../css/variable.styl"

.aboutReview {
    background-color: _gray+5;
    border-width: 1px 0;
    border-color: _gray-dark;
    border-style: solid;
    &.container-fluid {
        padding: 5rem;
        @media (max-width: md-size) {
            padding: 0;
        }
    }
    >div.row {
        box-shadow: 0 0 20px -5px rgba(0,0,0,1);
        border-radius: 20px;
        overflow: hidden;
        @media (max-width: md-size) {
            box-shadow: none;
            border-radius: 0;
            margin: 0;
            box-shadow: none;
        }
    }
    .about-item {
        padding: 5rem 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #FFF;
        @media (max-width: md-size) {
            padding: 3rem 2rem;
        }
        h4.aboutTitle {
            font-size: 2rem;
            margin-bottom: 2rem;
            font-weight: 200;
            span {
                font-weight: bold;
                margin-left: 1rem;
                font-size: 2rem;
            }
            @media (max-width: md-size) {
                text-align: center;
                margin-bottom: 1rem;
                
            }
        }
        .aboutCtx {
            font-size: 1rem;
            line-height: 2;
            padding: 1rem 0;
        }
        .aboutLink {
            margin: 0;
            margin-top: 2rem;
            text-align: right;
            @media (max-width: md-size) {
                text-align: center;
            }
            a {
                background-color: _green;
                color: #FFF;
                padding: .8rem 3.6rem;
                display: inline-block;
                text-decoration: none;
                transition: all 0.3s ease;
                &:hover {
                    background-color: _green-light;
                }
            }
        }
    }
    .about-pic {
        padding: 0;
        background-size: cover;
        background-position: center;
        @media (max-width:sm-size){
            min-height: 200px;
        }
    }
}
</style>

