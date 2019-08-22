export default [
  {
    path: '/manager-add-anime',
    name: 'add-anime',
    beforeEnter: function (to, from, next) {
      const token = localStorage.getItem('userToken')

      if (!token) {
        next('/login')
      } else {
        next()
      }
    },
    component: () => import(/* webpackChunkName: "anime" */ './AnimeNew')
  }
]
