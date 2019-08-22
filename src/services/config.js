import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://animes-api.herokuapp.com'
})

export const setAuthHeader = (token) => {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

setAuthHeader(localStorage.getItem('userToken'))
