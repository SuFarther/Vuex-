<template>
  <div class="about">
    <h4>About2页面的数字: {{getNum}}</h4>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
    computed : {
        ...mapGetters(['getNum'])
    }
}
</script>