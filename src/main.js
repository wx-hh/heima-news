import Vue from 'vue'
import App from './App.vue'

// import Vant from 'vant'
import { Button, Field } from 'vant'
import 'vant/lib/index.css'
// rem
import 'amfe-flexible'
// 关闭控制台生产提示
Vue.config.productionTip = false
// Vue.use(Vant)
// 按需加载只需要使用需要的
Vue.use(Button)
Vue.use(Field)
new Vue({
  render: h => h(App)
}).$mount('#app')
