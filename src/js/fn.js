import axios from 'axios'
export default {
    short : function (str, length) {
        return (str.length>length)?str.substr(0,length)+'...':str
    },
    nbr : function (str) {
        if (str) {
            str = str.replace(/\n/g, "<br/>");
            return str
        }
    },
    bgImgStyle : function ( imgUrl ) {
        if (Array.isArray(imgUrl)) {
            let img = '';
            let ar = imgUrl
            for (let i=0; i<ar.length; i++) {
                img = img + ar[i]
                if (i!=ar.length-1)
                    img = img + ','
            }
            return { backgroundImage: img }
        } else {
            imgUrl = imgUrl || 'url()'
            let t = imgUrl.indexOf('url(')
            if(t<0) {
                imgUrl = 'url(' + imgUrl + ')'
            }
            return { backgroundImage: imgUrl }
        }
    },
    transDate: function (str) {
        let date = new Date(str)
        let y = date.getFullYear() + '年'
        let m = date.getMonth() + 1 + '月'
        let d = date.getDate() + '日'
        let dayAry = ['日','一','二','三','四','五','六']
        let dd = '(' + dayAry[date.getDay()] + ')'
        let time = chk(date.getHours()) + ':' + chk(date.getMinutes())
        function chk(i) {
            return (i<10)?("0"+i):i
        }
        //return y + m + d + dd + ' ' + time
        return y + m + d
    },
    fetchData : function (url, cb) {
        axios.get(url).then((res)=>{
            console.log('[fetch]',res)
            cb(res)
        }).catch((err)=>{
            console.log('[fetch Err]',err)
        })
    },
    modalClick: function (val) {
        let vm = this
        let album = vm.modalAlbum
        if(vm) {
            let min = 0
            let max = (album)?album.length - 1:0
            if(val>max)
                val = 0
            if(val<0)
                val = max
            vm.modalNum = val
        }
    }
}