/*!
 * Front-End => Jadg Design <jadg.design@gmail.com>
 *
 */

 // CSS
import '../stylus/index.styl';

// Vue
import Vue from 'vue';
import Index from '../vue/index.vue';
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Index)
}).$mount('#index');