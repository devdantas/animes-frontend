import { routes as managerLogin } from '../views/manager/Login'
import { routes as managerHome } from '../views/manager/Home'
import { routes as managerAnime } from '../views/manager/Anime'
import { routes as managerAnimeShow } from '../views/manager/AnimeShow'
import { routes as managerAnimeNew } from '../views/manager/AnimeNew'
import { routes as erro404 } from '../components/global/404/'

export default [
  ...erro404,
  ...managerLogin,
  ...managerHome,
  ...managerAnime,
  ...managerAnimeShow,
  ...managerAnimeNew
]
