/*!
 * Front-End => Jadg Design <jadg.design@gmail.com>
 */

 // CSS
import '../stylus/index.styl';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import App from '../vue/index.vue';

new Vue({
  render: h => h(App)
}).$mount('#index');