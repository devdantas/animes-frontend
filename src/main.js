import Vue from 'vue'
import App from './App.vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import router from './router'

import './assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(VuePlyr)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
