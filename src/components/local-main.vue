<template>
  <div>
    <div class="head">
      我的配方
      <router-link :to="{name:'add',params:{type:'add'}}" class="add">添加</router-link>
    </div>
    <div class="main">
      <FormulaList v-bind:formulaList="arr"></FormulaList>
    </div>
  </div>
</template>

<script>
import FormulaList from './formula-list.vue'
export default {
  data(){
    return {
      arr : []
    }
  },
  created (){
    this.arr = JSON.parse(localStorage.getItem("formulaList"))||[];
  },
  components : {
    FormulaList : FormulaList
  }
}
</script>

<style>
</style>
