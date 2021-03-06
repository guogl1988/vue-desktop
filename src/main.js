import './config'
import Vue from 'vue'
import App from './components/App'
import router from './router'
import './filters'
import store from './vuex/store'
import { mapMutations } from 'vuex'
import utils from './utils'
import 'vx-easyui/dist/themes/icon.css'
import locale from 'vx-easyui/dist/locale/easyui-lang-zh_CN.js'
import EasyUI from 'vx-easyui'
import '../static/css/main.css'
Vue.use(EasyUI,{locale: locale})
Vue.config.productionTip = false
window.utils = utils
window.Vue = Vue

Vue.mixin({
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
      dialogWidth: document.documentElement.clientWidth,
      dialogHeight: document.documentElement.clientHeight-43,
      colors:[
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
      '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
      '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
      ]
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
    back() {
      router.goBack()
    },
    ...mapMutations({
      toggleLoading: 'TOGGLE_LOADING'
    })
  }
})

/* eslint-disable no-new */
window.App = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})