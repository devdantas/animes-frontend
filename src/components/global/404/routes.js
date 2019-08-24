export default [
  {
    path: '/erro-404',
    name: 'erro',
    component: () => import(/* webpackChunkName: "notfound" */ './NotFound')
  }
]
