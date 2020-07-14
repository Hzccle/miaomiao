import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入公共样式
import '@/assets/less/common.less'
// 引入rem
// import '@/utils/rem'

//去除eslint 删除extends '@vue/standard'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
