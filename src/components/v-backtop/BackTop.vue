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
      scrollState: 0,
      timer: 0
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
      const _this = this
      clearInterval(this.timer)
      this.timer = setInterval(function() {
        _this.gotoTop()
      }, 8)
    },
    gotoTop() {
      let leader =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      let step = (0 - leader) / 10
      step = leader > 0 ? Math.floor(step) : Math.ceil(step)
      leader = leader + step
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = leader
      if (leader === 0) {
        clearInterval(this.timer)
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
