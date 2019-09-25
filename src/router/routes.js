import { routes as Login } from '../views/manager/Login'
import { routes as Home } from '../views/manager/Home'
import { routes as Anime } from '../views/manager/Anime'
import { routes as AnimeShow } from '../views/manager/AnimeShow'
import { routes as AnimeNew } from '../views/manager/AnimeNew'
import { routes as Player } from '../views/manager/Player'
import { routes as Team } from '../views/manager/Teams'
import { routes as erro404 } from '../components/global/404/'

export default [
  ...erro404,
  ...Login,
  ...Home,
  ...Anime,
  ...AnimeShow,
  ...AnimeNew,
  ...Player,
  ...Team
]
