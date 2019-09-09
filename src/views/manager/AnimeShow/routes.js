export default [
  {
    path: '/animes/:slug',
    name: 'showanime',
    props: true,
    component: () => import(/* webpackChunkName: "anime" */ './AnimeShow')
  }
]
