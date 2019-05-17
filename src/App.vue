<style>
  #aap {
    height: 2000px;
  }
</style>
<template>
  <div id="aap">
     <BackTop />
  </div>
</template>
<script>
import BackTop from './components/v-backtop/BackTop'
  export default {
    components:{
      BackTop
    },
    data () {
      return {
        val: ''
      }
    }
  }
</script>