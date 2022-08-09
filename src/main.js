import Vue from 'vue'
import App from './App.vue'
import store from "@/views/store";
import router from "@/views/router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
