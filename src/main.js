import Vue from 'vue'
import App from './App.vue'
import VuePlyr from 'vue-plyr'
import VueDisqus from 'vue-disqus'
import router from './router'

import 'vue-plyr/dist/vue-plyr.css'
import './assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(VuePlyr)
Vue.use(VueDisqus)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
