/*!
 * Front-End => Jadg Design <jadg.design@gmail.com>
 *
 */

 // CSS
import 'stylus/app.styl'

// Vue
import Vue from 'vue'
import App from '../vue/app.vue'
import store from './tools/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')