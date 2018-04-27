<template lang="pug">
div.eventReview.container-fluid
    div.row(v-if="ready")
        div.col-lg-3.col-md-6.event-header(:style="bgImgStyle(bgImgs)")
            div
                h4 鼎談預告
                p UPCOMING EVENTS
                p.eventLink
                    router-link(to="event")  READ MORE
        div.col-lg-3.col-md-6.event-item(v-for="(i, n) in eventReview")
            router-link.eventBody(:to="'/event/'+i.id")
                p.eventNum {{'0'+(n+1)}}
                div.eventTitle 
                    h5 {{i.title}}
                    span.eventField {{i.type || transDate(i.date.from)}}
                p.eventCtx {{short(i.intro, 150)}}
            p.eventLink
                router-link(:to="'/event/'+i.id") READ MORE 
    //-
        div.col-lg-3.col-md-6.event-item(v-for="(i, n) in eventReview")
            div
                p.eventNum 01
                p.eventTitle 台灣文創十五年（文創產業化）
                p.eventField 文創領域
                p.eventCtx 自2002年《挑戰2008國家發展六年計畫》提出「文化創意產業」以來，至2017年將滿15年。從概念、旗艦計畫、五大園區到《文創法》立法、推動創新創業，政策逐漸落實中。2016年政黨輪替之後，也正是檢討與前瞻的時機。
            p.eventLink
                a(href="#") READ MORE 
        div.col-lg-3.col-md-6.event-item
            div
                p.eventNum 02
                p.eventTitle 台灣舞台戲劇的商業化潛力
                p.eventField 舞台劇領域
                p.eventCtx 台灣發展商業劇場的條件是什麼？ 放眼華人社會愈來愈大的戲劇市場，台灣的舞台劇製作，可以投資嗎？ 國外常見的觀光劇或定目劇，台灣有機會發展成功的條件是什麼？
            p.eventLink
                a(href="#") READ MORE 
        div.col-lg-3.col-md-6.event-item
            div
                p.eventNum 03
                p.eventTitle 面對國際級劇場到位後的挑戰
                p.eventField 表演藝術領域
                p.eventCtx 表演藝術的內容創新製作如何銜接國際水準？國際製作、策劃與經營人才在哪裡？如何培養？如何提升觀眾層次（劇場與市民）？如何以國際級劇場建築驅動城市的發展？
            p.eventLink
                a(href="#") READ MORE 
</template>
  
<script>
import _ from 'fn'
export default {
    data () {
        return {
            eventReview: [],
            eventArr: ['e001','e002','e003'],
            ready: false,
            bgImgs: [
                'linear-gradient(180deg, rgba(12, 134, 106, 0.8), rgba(12, 134, 106, 0.8))',
                'url("./asset/img/lib-images/mariya-georgieva-162502.jpg")'
            ]
        }
    },
    methods: {
        fetchData: _.fetchData,
        fetchList : function () {
            let vm = this;
            vm.fetchData('./events/list.json', (res)=>{
                let ls = res.data
                vm.eventArr.forEach(function(key) {
                    vm.eventReview.push(ls[key])
                });
                vm.ready = true;
            });
        },
        bgImgStyle : _.bgImgStyle,
        short: _.short,
        transDate: _.transDate
    },
    created() {
        this.fetchList()
    }
}
</script>
<style lang="stylus">
@import "../../css/variable.styl"

.eventReview {
    background-color: #eee;
    .event-header {
        //background-color: _green + -20;
        background-size: cover;
        background-position: 60%;
        color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 2rem;
        @media(max-width: md-size) {
            padding: 2rem;
        }
        div{
            text-align: left;
        }
        h4 {
            font-size: 2rem;
            font-weight: bold;
            @media(max-width: sm-size) {
                text-align: center;
            }
        }
        p {
            margin: 0;
        }
        .eventLink {
            margin-top: 5rem;
            @media(max-width: sm-size) {
                display: none;
            }
            a {
                border: 1px solid _white;
                color: #FFF;
                padding: .8rem;
                min-width: 12rem;
                text-align: center;
                display: inline-block;
                text-decoration: none;
                background-color: alpha(_green + -20, 0.5);
                transition: all 0.3s ease;
                &:hover {
                    background-color: _green;
                    border: 1px solid _green-light;
                }
            }
        }
    }
    .event-item {
        padding: 0rem 2rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: background-color 0.5s ease;
        @media(max-width: sm-size) {
            padding: 1rem;
        }
        .eventBody {
            color: _black;
            text-decoration: none;
            @media(max-width: sm-size) {
                display: flex;
                align-items: center; 
            }            
        }
        .eventNum { 
            font-size: 4rem;
            font-family: 'Arial';
            font-weight: bold;
            color: #d8d8d8;
            margin: 2rem 0 3rem;
            transition: color 0.5s ease;
            position: relative;
            &:after {
                content: '';
                display: block;
                position: absolute;
                height: 5px;
                width: 20%;
            }
            @media(max-width: sm-size) {
                font-size: 2rem;
                margin: 0;
                margin-right: 2rem;
                &:after {
                    display: none;
                }
            }
        }
        &:nth-child(2) .eventNum:after {
            background-color: _red;
        }
        &:nth-child(3) .eventNum:after{
            background-color: _blue;
        }
        &:nth-child(4) .eventNum:after{
            background-color: _green;
        }
        .eventTitle {
            margin-bottom: 1rem;
            @media(max-width: sm-size) {
                margin: 0;
            }
            h5 {
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 1rem;
                @media(max-width: sm-size) {
                    margin: 0;
                }
            }
            .eventField {
                font-size: 0.5rem;
            }
        }
        .eventCtx {
            font-size: 0.8rem;
            line-height: 2;
            @media(max-width: sm-size) {
                display: none;
            }
        }
        .eventLink{
            a {
                color: #000;
                text-decoration: none;
                transition: all 0.3s ease;
                &:hover {
                    color: _green;
                }
            }
            @media(max-width: sm-size) {
                display: none;
            }
        }
        &:hover {
            background-color:#d8d8d8;
            .eventNum{
                color: #000;
            }
        }
    }
}

</style>
