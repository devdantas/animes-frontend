import { http } from './config'

export default {
  indexType: () => {
    return http.get('/tipos/')
  },
  indexTypeRaw: () => {
    return http.get('/versao/')
  },
  indexGender: () => {
    return http.get('/generos/')
  }
}
