<template lang="pug">
#page-Origin
    div.col-md-12
        h3.stage-title 台灣的藝術市場、藝術發展漸漸在國際邊緣化。
        div.stage-content
            p.float-right-img
                img(:src="'./asset/img/lib-images/design-1502191_3.jpg'")
            p 當各國藝術家正大量在國際平台上串連的同時，台灣藝文創作者卻受困於市場規模，沒有開放性平台可供推廣，國際能見度逐年降低，空有實力，卻無法與國際接軌。藝文發展環境之艱困，猶如雪上加霜。
            p 近年來，雖有政府大力推動文創產業，但是整體GDP產值仍遠不及鄰近的韓國、甚至中國大陸。更重要的，文化入侵的現象更是讓人憂心，年輕人聽不懂客家歌曲，但是對於韓劇主題歌卻琅琅上口。
            p 長此以往，屬於台灣的藝術文化特色將處在國際劣勢無法發光，人民的藝文素養與自信心亦隨之低落；下一代的台灣人，在闡述自身文化時，將找不到能夠代表台灣人藝文的典範icon。
            p 職此之故，長期關注台灣藝術的專業人士組成了「台灣藝文振興委員會」，包括中華民國書學會會長張炳煌先生、元智大學藝術與設計學系主任沈禎、國立台灣戲曲學院院長張瑞濱、前國家藝術化基金會執行長陳錦誠、台灣創意設計中心執行長林鑫保、躍迹認知創意整合總經理趙弘章、以及表演藝術聯盟理事長于國華等。自2016年起，籌劃了《藝文振興鼎談》，期待以座談會的方式，提供藝文名家自由論談的空間，鼓勵振興藝文領域之思想，並進ㄧ步在異中求同，凝聚共識，發展未來，找出台灣藝文的新方向。
            p 在不久的未來，更計畫以雲端平台的方式，將藝術家們推向國際舞台。與各國藝術家、展場接軌，在實際作為上，讓台灣藝文能見度確實拓展到世界各地。《藝文振興鼎談》需要您的參與和意見。期待在各界的灌溉耕耘下，為灣藝文植入嶄新力量，提攜藝文界新進人才，創造另一波讓新一代台灣人驕傲的藝術之光。
    div.col-md-12
        h3.stage-title 顧問群
        div.stage-content.row
            div.col-md-4.col-6.character-circle(v-for="c in consultants")
                div.cover(:style="c.cover")
                p.name {{c.name}}
                p.title {{c.title}}
</template>

<script>

export default {
    data () {
        return {
            consultants : [
                { name: '張炳煌' , title: '中華民國書學會會長', cover: this.coverBg('張炳煌.jpg')},
                //{ name: '鄭秋霜' , title: '經濟日報編輯部出版總監', cover: this.coverBg()},
                { name: '陳錦誠' , title: '國家藝術文化基金會執行長', cover: this.coverBg('陳錦誠.jpg')},
                { name: '林鑫保' , title: '台灣創意設計中心執行長', cover: this.coverBg('林鑫保.png')},
                { name: '趙弘章' , title: '躍迹認知創意整合總經理', cover: this.coverBg('趙弘章.jpg')},
                { name: '于國華' , title: '表演藝術聯盟理事長', cover: this.coverBg('于國華.jpg')}
            ]
        }
    },
    methods : {
        coverBg : function (coverUrl='nouser.jpg') {
            let url = './asset/img/cover-images/'+coverUrl;
            return { backgroundImage: 'url('+ url +')' }
        }
    }
}
</script>

<style lang="stylus">
#page-Origin {
    .float-right-img {
        float: right;
        display: inline-block;
        width: 50%;
        padding: 0 0 1rem 1rem;
        margin: 0;
        img {
            width: 100%;
        }
    }
}
</style>
