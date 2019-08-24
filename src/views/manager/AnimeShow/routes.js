export default [
  {
    path: '/manager-show-anime/:slug',
    name: 'showanime',
    props: true,
    beforeEnter: function (to, from, next) {
      const token = sessionStorage.getItem('userToken')
      if (!token) {
        next('/login')
      } else {
        next()
      }
    },
    component: () => import(/* webpackChunkName: "anime" */ './AnimeShow')
  }
]
