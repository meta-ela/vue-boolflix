import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
/* import LangFlag from 'vue-lang-code-flags'; */

Vue.config.productionTip = false
/* Vue.component('lang-flag', LangFlag); */

new Vue({
  render: h => h(App),
}).$mount('#app')
