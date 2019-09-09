export default [
  {
    path: '/animes',
    name: 'anime',
    meta: {
      title: 'Séries'
    },
    component: () => import(/* webpackChunkName: "anime" */ './Anime')
  }
]
