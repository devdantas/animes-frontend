export default [
  {
    path: '/equipe',
    name: 'team',
    meta: {
      title: 'Equipe'
    },
    component: () => import(/* webpackChunkName: "team" */ './Team')
  }
]
