<template>
    <div>
        <div class="head">
            <a class="back" @click.prevent="back">&lt; 返回</a>
            平台中心
            <span class="add" v-if="!isLocal" @click="collect">收藏</span>
            <span class="edit" v-if="isLocal" @click="go_edit">修改</span>
            <span class="add" v-if="isLocal" @click="del">删除</span>
        </div>
        <div class="detail">
            <p class="tc"><img :src="img"></p>
            <div class="content">
                <h2>{{title}}</h2>
                <div class="row">
                    <div class="title">重量</div>
                    <div class="cont">
                        <input type="text" placeholder="默认：100" class="ipt"><span class="fl">克</span></div>
                </div>
                <div class="row">
                    <div class="title">配方</div>
                    <div class="cont">
                        <ul id="ingredients_list">
                            <IngredientShow v-for="item in ingredients" :key="item.id" :name="item.name" :weight="item.weight"></IngredientShow>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IngredientShow from './ingredientShow.vue'

export default {
    data () {
        return {
          isLocal: false,
          img : "/dist/loading.gif",
          title : "",
          ingredients : []
        }
    },
    created () {
        if(this.$store.state.column=="local"){
            this.isLocal = true;
        }else{
            this.isLocal = false;
        }
    },
    mounted () {
        if(this.$store.state.column=="local"){
            this.loadLocalData();
        }else{
            this.loadOnlineData();
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        collect(){
            let arr = JSON.parse(localStorage.getItem("onlineFormulaList"))||[];
            let item = this.getItemFromLocal(this.$route.query.ID,arr);
            let randomID = "ingredient"+parseInt(Math.random()*100)+new Date().getTime();
            item.id = randomID;

            let local = JSON.parse(localStorage.getItem("formulaList"))||[];

            local.push(item);
            localStorage.setItem("formulaList",JSON.stringify(local));

            this.$router.push({ path: '/local' })
        },
        del(){
            let r = confirm("是否确定删除此项");
            if(r){
                let arr = JSON.parse(localStorage.getItem("formulaList"))||[];

                for(let i=0;i<arr.length;i++){
                    if(arr[i].id==this.$route.query.ID){
                        arr.splice(i,1);
                        localStorage.setItem("formulaList",JSON.stringify(arr));
                        this.$router.push({ path: '/local' })
                        return;
                    }
                }
            }
        },
        go_edit(){
            console.log()
            this.$router.push({path:'/local/add',query:{ID:this.$route.query.ID}})
        },
        loadOnlineData(){
            let arr = JSON.parse(localStorage.getItem("onlineFormulaList"))||[];
            let item = this.getItemFromLocal(this.$route.query.ID,arr);
            this.img = item.imgsrc;
            this.title = item.title;
            let This = this;
            item.ingredients.map(function(item){
                This.ingredients.push(item);
            });
        },
        loadLocalData(){
            let arr = JSON.parse(localStorage.getItem("formulaList"))||[];
            let item = this.getItemFromLocal(this.$route.query.ID,arr);
            this.img = item.imgsrc;
            this.title = item.title;
            let This = this;
            item.ingredients.map(function(item){
                This.ingredients.push(item);
            });
        },
        pushItemIngredients(item){
            this.ingredients.push(item);
        },
        getItemFromLocal(ID,arr){
            for(let i=0;i<arr.length;i++){
                if(arr[i].id==ID){
                    return arr[i];
                }
            }
        }
    },
    components : {
        IngredientShow : IngredientShow
    }
}
</script>
<style>


.content .row{
    line-height:34px;
    padding:15px 0;
    font-size:14px;
    border-bottom:1px solid #eee;
    overflow:hidden;
}
.content .title{
    width:70px;
    float:left;
    font-weight:bold;
    text-align:right;
}
.content .cont{
    margin:0 10px 0 90px;
    line-height:34px;
}
.content .tip{
    color:#666;
    text-align:center;
}
.content .ipt{
    width:80%;
    height:36px;
    float:left;
    margin:0 5px 0 0;
    text-indent:5px;
    border:1px solid #666;
}
.content .type{
    width:38%;
    margin:0 2%;
    float:left;
}
.content .type .ipt-name{
    width:100%;
}
.content .del{
    width:20px;
    text-align:center;
    display:inline-block;
    float:left;
    font-size:20px;
    margin:0 0 0 5px;
    color:#ff0000;
}
.content .add-btn{
    width:100%;
    font-size:16px;
    line-height:50px;
    display:inline-block;
    text-align:center;
    color:#619cec;
    border-bottom:1px solid #eee;
}
.content .sub-btn{
    text-align:center;
    margin:30px 0 0 0;
}
.content .sub-btn a{
    width:120px;
    height:40px;
    line-height:40px;
    font-size:16px;
    display:inline-block;
    color:#fff;
    background:#619cec;
}
#ingredients_list{
    line-height:30px;
}
#ingredients_list li{
    padding:0 10px;
    border-bottom:1px solid #eee;
    overflow:hidden;
}
#ingredients_list li:nth-child(even){
    background:#eee;
}

</style>
