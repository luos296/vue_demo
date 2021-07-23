import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import api from './api/api'

Vue.config.productionTip = false
Vue.prototype.$api=api

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
