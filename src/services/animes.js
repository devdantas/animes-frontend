import { http } from './config'

export default {
  index: () => {
    return http.get('/anime')
  },
  show: (slug) => {
    return http.get(`/anime/${slug}`)
  },
  indexEp: (page) => {
    return http.get(`/episodeo/${page}`)
  },
  add: (episodeos, animeId) => {
    return http.post(`/episodeo/add-episodeo/${animeId}`, episodeos)
  },
  put: (episodeos, episodeoId) => {
    return http.put(`/episodeo/${episodeoId}`, episodeos)
  },
  createNewAnime: (anime) => {
    return http.post('/anime/register/', anime)
  },
  specificEpisodio: (slug) => {
    return http.get(`/anime/online/${slug}`)
  }
}
