<template>
    <div id="online">
      <transition name="" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>
<script>
export default {
  created () {
      this.$store.commit("changeColumn","online");
  }
}
</script>
<style>


</style>
