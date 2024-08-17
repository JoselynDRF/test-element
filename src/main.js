import Vue from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import './assets/main.css'
import 'element-plus/dist/index.css'

Vue.use(ElementPlus)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
