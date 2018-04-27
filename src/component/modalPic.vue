<template lang="pug">
div.modal(tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true")
    div.modal-dialog.modal-lg(role="document")
        div.modal-content
            div.modal-header
                button.close(type="button" data-dismiss="modal" aria-label="Close")
                    span.close(aria-hidden="true") &times;
            div.modal-body
                div.lg-photo(:style="bgImgStyle(img)")
                div.attr {{attr}}
            div.modal-nav
                button.prev(@click="click(p-1)"): i.fa.fa-angle-left(aria-hidden="true")
                button.next(@click="click(p+1)"): i.fa.fa-angle-right(aria-hidden="true")
</template>

<script>
import _ from 'fn'
export default {
    data() {
        return {}
    },
    props: ['p','album','click'],
    methods: {
        bgImgStyle: _.bgImgStyle,
    },
    computed: {
        img: function () {
            let album = this.album
            let p = this.p
            if (Array.isArray(album)) {
                return album[p].img
            }
        },
        attr: function () {
            let album = this.album
            let p = this.p
            if (Array.isArray(album)) {
                return album[p].attr
            }
        }
    }
}
</script>

<style lang="stylus">
@import '../css/variable.styl'
.modal{
    padding: 2rem;
    text-align: center;
    .lg-photo {
        height: 100%;
        width: 100%;
        background-size:contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .modal-dialog{
        max-width: 100%;
        height: 100%;
        margin: 0;
    }
    .modal-content {
        height: 100%;
    }
    .modal-header {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1500;
        border: 0;
        .close {
            line-height: 0.5;
            margin: 0;
        }
    }
    .modal-body {
        height: 100%;
        display: flex;
        flex-direction: column;
        .lg-photo {
            margin-bottom: 10px;
        }
        .attr {
            margin: 0;
        }
    }
    .modal-nav {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        button {
            border: 0;
            outline: 0;
            background: alpha(_white, 0.3);
            font-size: 2rem;
            width: 3rem;
            height: 3rem;
            line-height: 0;
            cursor: pointer;
            border-radius: 100%
            box-shadow: 0 0 15px -3px alpha(_black, 0.3);
            &:hover {
                i{ color: _green;}
            }
        }
    }
}
</style>
