<template>
  <div v-show="showTop" class="scrollTop" @click="toTop">
   <i class="iconfont icon-backtop"></i>
    <p>返回顶部</p> 
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  data() {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop: function() {
      const value = this.scrollTop > 200
      return value
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    toTop(e) {
      if (this.scrollState) {
        return
      }
      this.scrollState = 1
      e.preventDefault()
      //   const distance =
      //     document.documentElement.scrollTop || document.body.scrollTop
      const _this = this
      this.time = setInterval(function() {
        _this.gotoTop(_this.scrollTop - _this.dParams)
      }, 10)
    },
    gotoTop(distance) {
      this.dParams += 20
      distance = distance > 0 ? distance : 0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance
      if (this.scrollTop < 10) {
        clearInterval(this.time)
        this.dParams = 20
        this.scrollState = 0
      }
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    }
  }
}
</script>
<style scoped>
@import './fonts/iconfont.css';
.scrollTop {
  position: fixed;
  right: 40px;
  bottom: 80px;
  cursor: pointer;
  width: 50px;
  height: 55px;
  background-color: #ff8c00;
  text-align: center;
  border-radius: 3px;
}
.scrollTop img {
  width: 30px;
  height: 30px;
}
.scrollTop p {
  font-size: 12px;
  color: #333333;
  margin-top: 3px;
}
.iconfont {
 font-size: 30px;
}
</style>
