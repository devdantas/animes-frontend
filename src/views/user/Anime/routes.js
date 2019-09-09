export default [
  {
    path: '/animes',
    name: 'animes',
    meta: {
      title: 'Séries',
      adm: 'false'
    },
    component: () => import(/* webpackChunkName: "animes" */ '../../manager/Anime/Anime.vue')
  }
]
