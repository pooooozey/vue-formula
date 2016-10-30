<template>
    <div>
        <div class="head">
        	<a class="back" @click.prevent="back">&lt; 返回</a>
            资讯
        </div>
        <div class="detail">
            <p class="tc"><img :src="img"></p>
            <div class="detail_box">
                <h2 class="title">{{title}}</h2>
                <div class="cont" v-html="cont"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      img : "./loading.gif",
      title : "",
      cont : ""
    }
  },
  created () {
    this.loadOnlineData();
  },
  methods : {
    back () {
        this.$router.go(-1)
    },
    loadOnlineData(){
        let arr = JSON.parse(localStorage.getItem("newsList"))||[];
        let item = this.getItemFromLocal(this.$route.query.ID,arr);
        this.img = item.imgsrc;
        this.title = item.title;
        this.cont = item.cont;
        
    },
    getItemFromLocal(ID,arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i].id==ID){
                return arr[i];
            }
        }
    }
  }
}
</script>
<style>

</style>
