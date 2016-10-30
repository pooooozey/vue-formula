<template>
    <div id="local">
      <transition name="" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>
<script>
export default {
    data(){
      return {
      }
    },
    created () {
        this.$store.commit("changeColumn","local");
    }
}
</script>
<style>


</style>
