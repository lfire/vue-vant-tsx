import Vue from 'vue';
import 'vue-tsx-support/enable-check';
import App from './App';
import router from './router';
import store from './store';
import '@/mock';
import '@/plugins/vant';
import '@/plugins/fragment';
// class-component-hooks.js
import Component from 'vue-class-component';

// Register the router hooks with their names
Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate']);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
