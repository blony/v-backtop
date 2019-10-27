<style>
  #app {
    height: 2000px;
  }
</style>
<template>
  <div id="app">
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