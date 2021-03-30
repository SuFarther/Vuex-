<template>
  <div class="home">
<!--     <h2>Home页面的数字: {{$store.state.num}}</h2>-->
<!--     <h3>Home页面的数字: {{$store.getters.getNum}}</h3>-->
     <h3>Home页面的数字: {{num}}</h3>
     <li>{{$store.state.users.nickName}}</li>
     <button @click="changeNickName()">将孙悟空改为猪八戒</button>
  </div>
</template>

<script>

import {mapState,mapMutations} from  'vuex';
export default {
  computed: {
    ...mapState(['num'])
  },
  methods: {
    // changeNickName属于users下面的方法
    ...mapMutations({
      'changeNickName': 'users/changeNickName'
    })
  }
}
</script>
