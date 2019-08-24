import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/erro-404')
  } else {
    next()
  }
})
router.beforeRouteUpdate((to, from, next) => {
  if (!to.matched.length) {
    next('/erro-404')
  } else {
    next()
  }
})

export default router
