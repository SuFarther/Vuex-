<template>
  <div>
    <button @click="increase(2)">点击加1</button>
    <button @click="decreaseAsync()">点击延迟减1</button>
<!--    <button @click="$store.commit('reset')">复位0</button>-->
    <button @click="$store.commit('reset')">复位0</button>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex';
export default {
   name: "Btn2",
   methods: {
       ...mapMutations(['increase']),
       ...mapActions(['decreaseAsync'])
   }
}
</script>

<style scoped>

</style>