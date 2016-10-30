<template>
    <div class="row type_item">
    	<a @click.prevent="del" class="del">x</a>
        <div class="type">
            <input type="text" placeholder="配料名称" ref="name" class="ipt ipt-name" :value="name">
        </div>
        <div class="type">
            <input type="text" placeholder="配料重量" ref="weight" class="ipt ipt-weight":value="weight"><span class="fl">克</span>
        </div>
    </div>
</template>
<script>
export default {
	props: ['ID','name','weight'],
	data (){
		return {
	    	
	    }
	},
    methods: {
        del() {
            this.$emit('remove',this.ID);
        }
    }
}
</script>
<style>
</style>
