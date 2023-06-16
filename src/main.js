import Vue from 'vue'
import { Message, MessageBox } from 'element-ui'
import '@/assets/style/index.scss'
import App from './App.vue'
import router from './router'
import Icons from './icons'

Vue.config.productionTip = false
Vue.use(Icons)
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
