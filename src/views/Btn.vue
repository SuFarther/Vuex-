<template>
  <div>
    <button @click="$store.commit('increase',2)">点击加1</button>
    <button @click="$store.dispatch('decreaseAsync')">点击延迟减1</button>
    <button @click="$store.commit('reset')">复位0</button>
  </div>
</template>

<script>
export default {
   name: "Btn",
   methods: {
      // addFn(){
      //   //调用store中的mutations里的increase方法
      //   //传参的话,使用play load
      //   this.$store.commit('increase',2);
      // }
     // reduceFn(){
     //   this.$store.dispatch('decreaseAsync');
     // }
   }
}
</script>

<style scoped>

</style>