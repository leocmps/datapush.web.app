import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import FirebaseVue from './firebase'
import vueDebounce from 'vue-debounce'

Vue.use(FirebaseVue)
Vue.config.productionTip = false
Vue.use(vueDebounce)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
