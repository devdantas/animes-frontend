export default [
  {
    path: '/manager-animes',
    name: 'anime',
    meta: {
      title: 'Séries'
    },
    beforeEnter: function (to, from, next) {
      const token = sessionStorage.getItem('userToken')

      if (!token) {
        next('/login')
      } else {
        next()
      }
    },
    component: () => import(/* webpackChunkName: "anime" */ './Anime')
  }
]
