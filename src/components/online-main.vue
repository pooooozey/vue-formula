<template>
    <div>
        <div class="head">平台中心</div>
        <div class="main">
            <NewsList v-bind:newsList="newsList"></NewsList>
            <FormulaList v-bind:formulaList="onlineFormulaList"></FormulaList>
        </div>
    </div>
</template>
<script>
import NewsList from './news-list.vue'
import FormulaList from './formula-list.vue'
export default {
  data(){
    return {
      newsList : [
        {
            "id" : 0,
            "imgsrc" : "./dist/news.jpg",
            "title" : "vue版配方助手上线了",
            "caption" : "vue版配方助手上线了",
            "cont" : "&emsp;&emsp;历尽千辛万苦，vue版配方助手终于上线了!<br>&emsp;&emsp;只需要在已录入的配方中输入重量就能显示出对应的配料重量！"
        },
        {
            "id" : 1,
            "imgsrc" : "./dist/news.jpg",
            "title" : "配方助手新功能预告",
            "caption" : "配方助手新功能",
            "cont" : "配方助手将上线做菜步骤功能！"
        }
      ],
      onlineFormulaList : [
        {
            "id" : 0,
            "imgsrc" : "./dist/1.jpg",
            "title" : "水煮鱼",
            "ingredients" : [
                {
                    "name" : "鱼",
                    "total" : 70,
                    "weight" : 70
                },
                {
                    "name" : "豆芽",
                    "total" : 5,
                    "weight" : 5
                },
                {
                    "name" : "香葱",
                    "total" : 0.1,
                    "weight" : 0.1
                },
                {
                    "name" : "干辣椒",
                    "total" : 1,
                    "weight" : 1
                }
            ]
        },
        {
            "id" : 1,
            "imgsrc" : "./dist/2.jpg",
            "title" : "麻婆豆腐",
            "ingredients" : [
                {
                    "name" : "豆腐",
                    "total" : 50,
                    "weight" : 50
                },
                {
                    "name" : "肉沫",
                    "total" : 40,
                    "weight" : 40
                },
                {
                    "name" : "豆瓣酱",
                    "total" : 3,
                    "weight" : 3
                },
                {
                    "name" : "花椒粉",
                    "total" : 0.1,
                    "weight" : 0.1
                }
            ]
        },
        {
            "id" : 2,
            "imgsrc" : "./dist/3.jpg",
            "title" : "鱼香肉丝",
            "ingredients" : [
                {
                    "name" : "猪里脊肉",
                    "total" : 30,
                    "weight" : 30
                },
                {
                    "name" : "胡萝卜",
                    "total" : 30,
                    "weight" : 30
                },
                {
                    "name" : "青椒",
                    "total" : 30,
                    "weight" : 30
                }
            ]
        },
        {
            "id" : 3,
            "imgsrc" : "./dist/4.jpg",
            "title" : "宫保鸡丁",
            "ingredients" : [
                {
                    "name" : "鸡脯肉",
                    "total" : 50,
                    "weight" : 50
                },
                {
                    "name" : "花生米",
                    "total" : 40,
                    "weight" : 40
                },
                {
                    "name" : "大葱",
                    "total" : 5,
                    "weight" : 5
                }
            ]
        }
      ]
    }
  },
  components : {
    NewsList : NewsList,
    FormulaList : FormulaList
  },
    created () {
        localStorage.setItem("newsList",JSON.stringify(this.newsList));
        localStorage.setItem("onlineFormulaList",JSON.stringify(this.onlineFormulaList));
    }
}
</script>
<style>


</style>
