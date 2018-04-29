<template lang="pug">
div.portReview.container-fluid
    div.row.port-header
        div.col-md-12
            h4 鼎談人作品
            p PORTIFILIO
    div.row.port-body
        div.col-md-4.port-item(v-for="p in portDatas")
            div(:style="p.pic")
                div.portAttr
                    p.portName {{p.name}}
                    p.portAuthor {{p.author}}
    div.row.port-footer
        div.col-md-12
            p.portLink
                a(href="#") READ MORE
</template>

<script>

export default {
    data () {
        return {
            portDatas : [
                {author: '林惠蘭', name:"作品名稱", nColor: this.bgColor('#2f3740'), pic: this.bgPic('port-cover-01.jpg'), link: '#1'},
                {author: '林惠蘭', name:"作品名稱", nColor: this.bgColor('#33731a'), pic: this.bgPic('port-cover-02.png'), link: '#2'},
                {author: '林惠蘭', name:"作品名稱", nColor: this.bgColor('#7e0043'), pic: this.bgPic('port-cover-03.jpg'), link: '#3'}
            ]
        }
    },
    methods : {
        bgPic : function (imgUrl) {
            const img = require(`../../img/port-images/${ imgUrl }`);
            return { backgroundImage: `url(${img})` }
        },
        bgColor : function (hsa) {
            return {backgroundColor: hsa}
        }
    }
}
</script>

<style lang="stylus">
@import "../../css/variable.styl"

.portReview {
    background-color: #eee;
    padding: 0;
    .port-header {
        padding: 3rem 1rem;
        >div{
            text-align: center;
        }
        h4 {
            font-size: 2.5rem;
            font-weight: 800;
            font-family: fontMing;
            letter-spacing: 1px;
        }
        p {
            margin: 0;
        }
        
    }
    .port-item {
        padding: 0;
        position: relative;
        background-color: _white;
        overflow: hidden;
        >div{
            height:100%;
            width:100%;
            background-size:cover;
            min-height: 500px;
            @media (max-width: md-size) {
                min-height: 300px;
            }
            @media (max-width: sm-size) {
                min-height: 400px;
            }     
        }
        .portAttr {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1.5rem 1rem 1rem 1rem;
            background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 75%);
            letter-spacing: 1px;
            text-align: right;
            color: #FFF;
            opacity: 1;
            transition: opacity 0.5s ease;
            @media (max-width: md-size) {
                opacity: 1;
            }
        }
        .portName {
            font-size: 1rem;
            margin:0;
        }
        .portAuthor {
            font-size: 0.8rem;
            margin:0;
        }
    }
    .port-footer {
        padding: 3rem 1rem;
        text-align: center;
        .portLink {
            margin: 0;
            a {
                background-color: _green;
                color: _white;
                padding: .8rem 3.6rem;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s ease;
                &:hover {
                    background-color: _green-light;
                }
            }
        }
    }
    @media (max-width: sm-size) {
        div.row {
        }
    }
}
</style>
