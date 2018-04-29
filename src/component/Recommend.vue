<template lang="pug">
#page-Recommend
    .sub-header
        div.container
            div.row
                div.col-md-12
                    h2 我要推薦議題
    .sub-body
        div.container-fluid
            div.row
                div.col-md-12.stage-cover(:style="bgImgStyle(cover)")
        div.container
            div.row.justify-content-center
                Loading(:show="ajaxSta")
                div.col-md-8
                    form#rec-form(novalidate v-on:submit="submitAct" v-on:reset="resetAct")
                        section.form-group
                            label(for="rec-name") 您的姓名：
                            input#rec-name.form-control(v-model="name" type="name" v-bind:class="nameValid")
                        section.form-group
                            label(for="rec-email") 電子信箱：
                            input#rec-email.form-control(v-model="email" type="email" placeholder="example@email.com" v-bind:class="emailValid")
                        section.form-group
                            label(for="rec-artObject") 您想暸解的藝術項目是：
                            select#rec-artObject.form-control(v-model="artObj" v-bind:class="artObjValid")
                                option(value="視覺藝術") 視覺藝術
                                option(value="表演藝術") 表演藝術
                                option(value="工藝") 工藝
                                option(value="廣播影視") 廣播影視
                                option(value="出版") 出版
                                option(value="廣告") 廣告
                                option(value="產品設計") 產品設計
                                option(value="視覺傳達設計") 視覺傳達設計
                                option(value="設計品牌時尚") 設計品牌時尚
                                option(value="數位內容產業") 數位內容產業
                                option(value="其他") 其他
                        section.form-group
                            label(for="rec-artist") 想聽到的藝術家與談人：
                            input#rec-artist.form-control(v-model="artist" type="text" v-bind:class="artistValid")
                        section.form-group
                            label(for="rec-issue") 希望聽到的鼎談議題：
                            textarea#rec-issue.form-control(v-model="issue" rows="5" v-bind:class="issueValid")
                        section.btns-group
                            button.btn.btn-success(type="submit") 送出
                            button.btn.btn-danger(type="reset") 取消
</template>

<script>
import _ from 'fn';
import axios from 'axios';
import Loading from 'Loading';
import cover from '../img/lib-images/toa-heftiba-250946.jpg';
export default {
    data() {
        return {
            cover,
            artObj: '',
            artist: '',
            issue : '',
            email : '',
            name  : '',
            ajaxSta: false,
            validSta: false
        }
    },
    computed: {
        artObjValid: function() {
            if (this.validSta) {
                return this.artObj.length>0?['is-valid']:['is-invalid']
            } else {
                return this.artObj.length>0?true:false
            }
        },
        artistValid: function() {
            if (this.validSta) {
                return this.artist.length>0?['is-valid']:['is-invalid']
            } else {
                return this.artist.length>0?true:false
            }
        },
        issueValid : function() {
            if (this.validSta) {
                return this.issue.length>0?['is-valid']:['is-invalid']
            } else {
                return this.issue.length>0?true:false
            }
        },
        emailValid : function() {
            if (this.validSta) {
                return this.email.length>0?['is-valid']:['is-invalid']
            } else {
                return this.email.length>0?true:false
            }
        },
        nameValid  : function() {
            if (this.validSta) {
                return this.name.length>0?['is-valid']:['is-invalid']
            } else {
                return this.name.length>0?true:false
            }   
        },
        allValid: function() {
            if (this.validSta) {
                return this.artObjValid == 'is-valid' && 
                       this.artistValid == 'is-valid' &&
                       this.issueValid  == 'is-valid' && 
                       this.emailValid  == 'is-valid' && 
                       this.nameValid   == 'is-valid'  
            } else {
                return this.artObjValid && this.artistValid && this.issueValid && this.emailValid && this.nameValid
            } 
        }
    },
    methods: {
        bgImgStyle: _.bgImgStyle,
        submitAct: function () {
            let vm = this
            if (vm.allValid) {
                vm.doAjax()
            } else {
                vm.showValid()
            }
        },
        resetAct: function () {
            let vm = this
            vm.validSta = false
            vm.artObj = ''
            vm.artist = ''
            vm.issue  = ''
            vm.email  = ''
            vm.name   = ''
        },
        doAjax: function() {
            let vm = this
            let apiURL = 'https://script.google.com/macros/s/AKfycbytxX6FjAqM1uNUTqfEk9Ae68LoZ0es-bh0YkTUmW_tZnbUY0Y/exec'
            vm.ajaxSta = true
            axios.get(apiURL, {
                params: {
                    n: vm.name,
                    e: vm.email,
                    a: vm.artObj,
                    t: vm.artist,
                    i: vm.issue
                }
            }).then(function (response) {
                console.log(response);
                vm.ajaxSta = false;
                vm.resetAct()
            }).catch(function (error) {
                console.log(error);
            });
        },
        showValid: function() {
            let vm = this
            vm.validSta = true
        }
    },
    components: {
        Loading
    }
}
</script>

<style lang="stylus">
@import '../css/variable.styl'
#page-Recommend {
    .stage-cover {
        padding: 10% 0;
        background-size: cover;
        background-position: center;
    }
    .btns-group {
        display: flex;
        justify-content: center;
        button {
            margin: 5px;
            cursor: pointer;
        }
    }
    .is-valid {
        border-color: _green
    }
    .is-invalid {
        border-color: _red
    }
}
</style>
