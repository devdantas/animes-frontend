export default [
  {
    path: '/manager-home',
    name: 'home',
    meta: {
      title: 'Home'
    },
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem('userToken')

      if (!token) {
        next('/login')
      } else {
        next()
      }
    },
    component: () => import(/* webpackChunkName: "home" */ './Home')
  }
]
