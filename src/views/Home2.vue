<template>
  <div class="home">
     <h4>Home2页面的数字: {{num}}</h4>
  </div>
</template>

<script>
//映射
import {mapState} from 'vuex';
export default {
    computed : {
       ...mapState(['num'])
    }
}
</script>
