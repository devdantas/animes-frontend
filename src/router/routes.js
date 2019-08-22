import { routes as managerLogin } from '../views/manager/Login'
import { routes as managerHome } from '../views/manager/Home'
import { routes as managerAnime } from '../views/manager/Anime'
import { routes as managerAnimeShow } from '../views/manager/AnimeShow'
import { routes as managerAnimeNew } from '../views/manager/AnimeNew'

export default [
  ...managerLogin,
  ...managerHome,
  ...managerAnime,
  ...managerAnimeShow,
  ...managerAnimeNew
]
