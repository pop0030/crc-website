<template lang="pug">
div.showreelDiv.container-fluid
    div.row
        div.showreel.owl-carousel
            div.item(v-for="i in items")
                div.showImg(:style="i.imgStyle" :class="{ ZoomIn : i.type=='zoomIn' }")
                div.showCard(v-show="i.showCard" v-bind:class="i.type")
                    h3 {{i.title}}
                    p {{i.ctx}}
                    p.showLink
                        a(:href='i.link') 
                            span READ MORE
                            i(class="fa fa-chevron-circle-down" aria-hidden="true")
</template>

<script>
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'

export default {
    data() {
        return {
            items: [
                { 
                    title: '', 
                    ctx: '', 
                    link: '#' ,
                    showCard: false,
                    type: 'zoomIn',
                    imgStyle:this.showImgStyle('main-logo-lg.jpg','center','50%') 
                },
                { 
                    title: '2017台灣書畫家新春聯歡會', 
                    ctx: '- 攝於台北大三元酒樓', 
                    link: '#' ,
                    showCard: true,
                    type: 'figure',
                    imgStyle:this.showImgStyle('DAV_2686.jpg',0,'50%') 
                },
                { 
                    title: '台灣十大經典漫畫家聯合出版簽約', 
                    ctx: '- 攝於藝文振興鼎談內湖總部', 
                    link: '#' ,
                    showCard: true,
                    type: 'figure',
                    imgStyle:this.showImgStyle('106-DAV_1164.JPG',0,'25%') 
                },
                { 
                    title: '第三屆海峽兩岸藝術雅集開幕', 
                    ctx: '- 攝於台北圓山飯店', 
                    link: '#' ,
                    showCard: true,
                    type: 'figure',
                    imgStyle:this.showImgStyle('150-DAV_6643.JPG',0,'50%') 
                },
                { 
                    title: '引領文創產業新時代', 
                    ctx: '《藝文振興鼎談》深知藝文創作者對於開拓市場之迫切需求，因此，《藝文振興鼎談》將運用數位科技作為載具，為台灣藝文界串起整合產銷系統的價值鏈，透過介接國際市場，為台灣打造最完整的藝文雲端生態系。 ', 
                    link: '#' ,
                    showCard: true,
                    type: 'normal',
                    imgStyle:this.showImgStyle('sr_001.jpg',0,'50%') 
                },
                { 
                    title: '開創台灣藝文發展新價值高地', 
                    ctx: '《藝文振興鼎談》所連接起的虛實生態圈，將讓台灣藝文產業，向國際市場成功發聲， 也讓國際文化市場，透過《藝文振興鼎談》的雲端生態系，與台灣文化產業達到更全面性及更持續性的交流，進ㄧ步開創台灣藝文發展新價值高地！', 
                    link: '#' ,
                    showCard: true,
                    type: 'normal',
                    imgStyle:this.showImgStyle('liz99-263671.jpg',0,'80%') 
                }
            ]
        }
    },
    methods: {
        showImgStyle: function (imgUrl, x=0, y=0) {
            return {
                'background-position': x+' '+y,
                'background-image': 'url('+'./asset/img/showreel/'+imgUrl+')'
            }
        }
    },
    mounted() {
        $('.showreel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            autoplaySpeed: 1000,
            animateOut: 'fadeOut'
        })
    }
}
    
</script>

<style lang="stylus">
@import "../css/variable.styl"

.showreel {
    background-color: #FFF;
    .item {
        width: 100%;
        height: 0;
        padding: 20% 0;
        position: relative;
        @media(max-width: md-size) {
            padding: 25% 0;
        }
        @media(max-width: sm-size) {
            padding: 30% 0;
        }
        .showImg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            &.ZoomIn {
                animation-name: ZoomIn;
                animation-duration: 8s;
                animation-iteration-count: 1;
                animation-timing-function: ease;
                animation-fill-mode: forwards;
                z-index: -1;
                @keyframes ZoomIn {
                    0% { 
                        transform: scale(1) 
                    }
                    100% {
                        transform: scale(1.1)
                    }
                }
            }
        }
        .showCard {
            position: absolute;
            
            &.normal {
                max-width: 800px;
                width: 50%;
                bottom: 50%;
                right: 3rem;
                background-color: rgba(255,255,255,0.5);
                box-shadow: 0 0 12px 2px rgba(0,0,0,0.05);
                padding: 2rem;
                transition: opacity 0.5s ease, background-color 0.3s ease;
                transform: translateY(50%);
                opacity: 0;
                &:hover {
                    background-color: rgba(255,255,255,0.8);
                }
                h3 {
                    font-size: 1.8rem;
                    line-height: 1.6;
                    letter-spacing: 1px;
                    @media(max-width: sm-size) {
                        font-size: 1.4rem;
                        text-align: center;
                    }
                }
                p {
                    font-size: 1rem;
                    line-height: 1.6;
                    margin: 1rem 0;
                    @media(max-width: sm-size) {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                @media(max-width: md-size) {
                    left: 50%;
                    transform: translateX(-50%) translateY(50%);
                    width: 90%;
                }

                p.showLink {
                    margin-top: 2rem;
                    margin-bottom: 0;
                    @media(max-width: sm-size) {
                        text-align: center;
                        margin-top: 0;
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
                        @media(max-width: sm-size) {
                            padding: 0;
                            background-color: _white;
                            position: absolute;
                            bottom: -1rem;
                            left: 50%;
                            transform: translateX(-50%);
                            border-radius: 2rem;
                            width: 2rem;
                            height: 2rem;
                            &:hover {
                                background-color: transparent;
                            }
                        }
                        span {
                            @media(max-width: sm-size) {
                                display: none;
                            }
                        }
                        i {
                            display: none;
                            color: _green;
                            font-size: 2rem;
                            @media(max-width: sm-size) {
                                display: inline-block;
                            }
                        }
                    }
                }
            }

            &.figure {
                width: 100%;
                text-align: right;
                right: 0;
                bottom: 0;
                color: _white;
                background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 75%);
                padding: 1rem 2rem 0.5rem 2rem;
                h3 {
                    font-size: 1.6rem;
                    font-weight: 200;
                    letter-spacing: 1px;
                }
                p {
                    font-size: 0.8rem;
                }
                p.showLink {
                    display: none;
                }
            }
        }
    }
    .owl-item.active {
        .showCard {
            /*bottom: 50%;*/
            opacity: 1;
        }
    }
    .owl-nav {
        position: absolute;
        padding: 0 1rem;
        width: 100%;
        top: 50%;
        left: 0;
        display: flex;
        justify-content: space-between;
        opacity: 0;
        transform: translateY(-50%)
        i.fa {
            font-size: 5rem;
            color: _white;
            text-shadow: 0 0 10px rgba(0,0,0,0.5);
            opacity: 0.5;
            &:hover {
                opacity: 1;
            }
        }
    }
    &:hover {
        .owl-nav {
            opacity: 1;
        }
    }
}

</style>
