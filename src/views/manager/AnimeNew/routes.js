export default [
  {
    path: '/animes/adicionar',
    name: 'add-anime',
    beforeEnter: function (to, from, next) {
      const token = sessionStorage.getItem('userToken')

      if (!token) {
        next('/login')
      } else {
        next()
      }
    },
    component: () => import(/* webpackChunkName: "animenew" */ './AnimeNew')
  }
]
