export default [
  {
    path: '/online/:slug',
    name: 'player',
    props: true,
    component: () => import(/* webpackChunkName: "player" */ './Player')
  }
]
