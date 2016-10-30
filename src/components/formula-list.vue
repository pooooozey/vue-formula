<template>
	<dl>
        <dt v-if="showTitle">别人家的配方</dt>
        <dd>
            <ul class="formula_list">
                <FormulaItem v-for="item in formulaList" :ID="item.id" :key="item.id" :imgsrc="item.imgsrc" :title="item.title" ></FormulaItem>
            </ul>
        </dd>
    </dl>
</template>

<script>
import FormulaItem from './formula-item.vue'
export default {
    props: ['formulaList'],
    data () {
        return {
          showTitle: false
        }
    },
    created () {
        console.log(this.formulaList)
        if(this.$store.state.column=="local"){
            this.showTitle = false;
        }else{
            this.showTitle = true;
        }
    },
    methods : {
        detail (){
            let column = this.$store.state.column=="local"?"local":"online";
            this.$router.push({path:'/'+column+'/formula-detal'})
        }
    },
    components : {
        FormulaItem : FormulaItem
    }
}
</script>

<style>
.formula_list li {
    width: 50%;
    background: #fff;
    overflow: hidden;
    margin: 0 0 5px 0;
    float: left;
}

.formula_list .img {
    margin: 10px;
    padding: 55% 0 0 0;
    position: relative;
}

.formula_list .img img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.formula_list h3 {
    text-align: center;
    margin: 10px 0 10px 10px;
    font-size: 14px;
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    color: #333;
}

</style>
