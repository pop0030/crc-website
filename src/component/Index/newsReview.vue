<template lang="pug">
div.newsReview.container-fluid
    div.row
        div.col-lg-4.col-md-6.news-header(:style="headerBgStyle")
            div
                h4 媒體報導
                p   LAST NEWS
                p.newsLink
                    router-link(to="news")  READ MORE
        div.col-lg-4.col-md-6.news-item(v-for="n in newsDatas")
            div
                p.newsAttr 
                    span {{n.type}}
                    span {{n.date}}
                p.newsTitle {{n.title}}
            p.newsCtx {{n.ctx}}
            p.newsLink
                a(:href="n.link") READ MORE
</template>

<script>
export default {
    data () {
        return {
            newsDatas : [
                { type:'藝文新聞', date:'2017/05/05', link:'#',title:'桃園春聯 請來張炳煌、張穆希揮毫', ctx:'【自由時報】桃園市長鄭文燦今天在八德區三元宮發表桃園市丁酉年春聯，鄭文燦表示，今年以「金雞迎春」、「吉慶豐年」為春聯主題，邀請兩位書法家張炳煌、張穆希揮毫，並由他及議長邱奕勝共同署名，代表府會的密切合作。'  },
                { type:'鼎談報導', date:'2017/06/05', link:'#',title:'乙未臺灣書法年展 發揚書法藝術兼具傳承與現代書藝創作', ctx:'【中華時報】頗負盛名的「中華民國書學會」，自即日起至4月3日(星期日)止在臺中市港區藝術中心舉辦「乙未臺灣書法年展」，本次展出作品為邀請臺灣名書法家及甄選兩種方式，書作中呈現傳統（篆、隸、楷、行、草）與視覺（現代書藝、創作）及書家自我的造詣展現。'  },
                { type:'鼎談報導', date:'2017/05/05', link:'#',title:'桃園春聯 請來張炳煌、張穆希揮毫', ctx:'【自由時報】桃園市長鄭文燦今天在八德區三元宮發表桃園市丁酉年春聯，鄭文燦表示，今年以「金雞迎春」、「吉慶豐年」為春聯主題，邀請兩位書法家張炳煌、張穆希揮毫，並由他及議長邱奕勝共同署名，代表府會的密切合作。'  },
                { type:'藝文新聞', date:'2017/06/05', link:'#',title:'乙未臺灣書法年展 發揚書法藝術兼具傳承與現代書藝創作', ctx:'【中華時報】頗負盛名的「中華民國書學會」，自即日起至4月3日(星期日)止在臺中市港區藝術中心舉辦「乙未臺灣書法年展」，本次展出作品為邀請臺灣名書法家及甄選兩種方式，書作中呈現傳統（篆、隸、楷、行、草）與視覺（現代書藝、創作）及書家自我的造詣展現。'  },
                { type:'鼎談報導', date:'2017/05/05', link:'#',title:'桃園春聯 請來張炳煌、張穆希揮毫', ctx:'【自由時報】桃園市長鄭文燦今天在八德區三元宮發表桃園市丁酉年春聯，鄭文燦表示，今年以「金雞迎春」、「吉慶豐年」為春聯主題，邀請兩位書法家張炳煌、張穆希揮毫，並由他及議長邱奕勝共同署名，代表府會的密切合作。'  }
            ]
        }
    },
    computed: {
        headerBgStyle : function () {
            let p1 = 'url(./asset/img/reporter_unsplash.jpg)'
            let p2 = 'linear-gradient(0, rgba(0,0,0,.5),rgba(0,0,0,.5))'
            return { backgroundImage: p2 + ',' + p1 }
        }
    }
}
</script>

<style lang="stylus">
@import "../../css/variable.styl"

.newsReview {
    border-width: 2rem;
    border-style: solid;
    border-color: _green;
    .news-header {
        padding: 5rem 2rem;
        background-color: _black;
        background-size: cover;
        background-position: center;
        color:#FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            text-align: left;
        }
        h4 {
            font-size: 2rem;
            font-weight: bold;
        }
        .newsLink {
            margin-top: 5rem;
            a {
                border: 1px solid _white;
                color: #FFF;
                padding: .8rem 3.6rem;
                display: inline-block;
                text-decoration: none;
                background-color: rgba(0,0,0,0.5);
                transition: all 0.3s ease;
                &:hover {
                    background-color: _green;
                    border: 1px solid _green-light;
                }
            }
        }
    }
    .news-item {
        padding: 5rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: background-color 0.5s ease;
        @media(max-width:sm-size) {
            padding: 2rem 2rem;
        }
        &:nth-child(2n-1) {
            background-color: #eee;
            &:hover {
                background-color: #ddd;
            }
        }
        &:nth-child(2n) {
            background-color: #fff;
            &:hover {
                background-color: #ddd;
            }
        }
        .newsAttr {
            font-size: 0.8rem;
            span {
                margin-right: 1rem;
            }
        }
        .newsTitle {
            font-size: 1.2rem;
            font-weight:bold;
            line-height: 2;
        }
        .newsCtx {
            font-size: 0.8rem;
            line-height: 1.8;
        }
        .newsLink {
            a {
                color: #000;
            }
        }
    }
}
</style>
