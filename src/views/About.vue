<template>
  <div class="about">
<!--    <h2>About页面的数字: {{num}}</h2>-->
    <h3>About页面的数字: {{$store.getters.getNum}}</h3>
    <button @click="increase()">About的按钮,点击加1</button>
  </div>
</template>

<script>

import {mapGetters,mapMutations} from 'vuex'
import {MUTATIONS_TYPE} from "@/store/mutations_type";
export default {
    computed: {
      ...mapGetters(['getNum'])
    },
    methods: {
      ...mapMutations([MUTATIONS_TYPE.INCREASE,MUTATIONS_TYPE.RESET])

      // 方法二：
      /* increase(){
        this.$store.commit(MUTATIONS_TYPE.INCREASE)
      } */
    }
}
</script>