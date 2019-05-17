import Vue from 'vue'
import BackTop from './v-backtop/BackTop.vue'
const Components = {
    BackTop
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components