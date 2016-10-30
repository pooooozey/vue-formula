<template>
	<li>
        <a @click.prevent="detail">
            <div class="img"><img :src="imgsrc"></div></div>
            <h3>{{title}}</h3>
        </a>
    </li>
</template>

<script>
export default {
    props: ['ID','imgsrc','title'],
    methods : {
        detail (){
            let column = this.$store.state.column=="local"?"local":"online";
            this.$router.push({path:'/'+column+'/formula-detal',query:{ID:this.ID}})
        }
    }
}
</script>
