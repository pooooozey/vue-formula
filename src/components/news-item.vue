<template>
	<li>
        <a @click.prevent="detail">
            <div class="img"><img :src="imgsrc"></div>
            <h3>{{title}}</h3>
            <div class="caption">{{caption}}</div>
        </a>
    </li>
</template>
<script>
export default {
    props: ['ID','caption','imgsrc','title'],
    methods : {
        detail (){
            this.$router.push({path:'/online/news-detal',query:{ID:this.ID}})
        }
    }
}
</script>
