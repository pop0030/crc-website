<template lang="pug">
footer
    div.container
        div.row.footerCtx
            div.col-md-6
                div.subscribe
                    p 訂閱我們的最新資訊
                    p.sub-form
                        input(type="email")
                        button 訂閱
                div.socialmedia
                    a(href="#")
                        i.fa.fa-facebook(aria-hidden="true")
                    a(href="#")
                        i.fa.fa-twitter(aria-hidden="true")
                    a(href="#")
                        i.fa.fa-pinterest(aria-hidden="true")
            div.col-md-6
                div.contact
                    p 聯絡我們
                    p 藝文振興鼎談
                    p 地址：台北市內湖區堤頂大道501號6樓
                    p 電話：(02) 1234-5678
                    p EMAIL：NAME@EMAIL.COM
    div.container-fluid
        div.copyright.row
            p.col-md-12 Copyright © Cultural Renaissance Conference 2016
</template>

<script>
    
</script>

<style lang="stylus">
@import "../css/variable.styl"

footer {
    background-color: #000;
    color: #FFF;
    letter-spacing: 1px;
    .footerCtx {
        padding: 3rem;
        >div {
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
        }
    }
    .subscribe {
        text-align: center;
        .sub-form {
            font-size: 0.8rem;
            input {
                width: 12rem;
                margin-right: 0.5rem;
                outline: 0;
                border: 1px solid #FFF;
                padding: 3px;
            }
            button {
                background-color: #000;
                border: 1px solid #FFF;
                outline: 0;
                color: #FFF;
                &:hover {
                    background-color: #333;
                }
                &:active {
                    transform: scale(0.8);
                    transition: all .3s ease;
                }
            }
        }
    }
    .socialmedia {
        letter-spacing: 1.2rem;
        padding-left: 1.2rem;
        >a {
            color: #FFF;
            font-size: 1.5rem;
        }
    }
    .contact {
        text-align: center;
        p {
            font-size: 0.8rem;
            margin-bottom: 0.1rem;
            &:first-child {
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }
        }
    }
    .copyright {
        background-color: #333;
        >p {
            text-align: center;
            font-size: 0.8rem;
            padding: 1.6rem 0;
            margin: 0;
        }
    }
}
</style>
