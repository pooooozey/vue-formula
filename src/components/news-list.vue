<template>
	<dl>
        <dt>最新资讯</dt>
        <dd>
            <ul class="news_list">
                <newsItem v-for="item in arr" :ID="item.id" :key="item.id" :imgsrc="item.imgsrc" :title="item.title" :caption="item.caption" :cont="item.cont"></newsItem>
            </ul>
        </dd>
    </dl>
</template>
<script>
import newsItem from './news-item.vue'
export default {
  data(){
    return {
      arr : []
    }
  },
  created (){
    this.arr = JSON.parse(localStorage.getItem("newsList"))||[];
  },
  components : {
    newsItem : newsItem
  }
}
</script>
<style>
.news_list li {
    width: 100%;
    overflow: hidden;
    background: #fff;
    padding: 10px 0;
    margin: 0 0 5px 0;
}

.news_list .img {
    width: 40%;
    padding: 25% 0 0 0;
    position: relative;
    overflow: hidden;
    margin: 0 10px;
    float: left;
}

.news_list .img img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.news_list h3 {
    color: #666;
    margin: 10px 0 0 0;
    font-size: 14px;
    line-height: 24px;
}

.news_list .caption {
    font-size: 13px;
    line-height: 20px;
    color: #666;
}

</style>
