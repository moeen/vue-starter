import axios from 'axios'
import store from '../store'
import router from '../router'

// Create an instance of axios for customization
export const axios = cngAxios.create({
  timeout: 2000
})

// Get token from store and set it to Authorization header
cngAxios.interceptors.request.use(function (config) {
  config.headers.Authorization = store.getters.getUserToken
  return config
}, function (error) {
  return Promise.reject(error)
})

// Check if response is not OK
cngAxios.interceptors.response.use(response => {
  return Promise.resolve(response)
}, error => {
  if (error.response.status !== 200) {
    window.localStorage.removeItem('user_token')
    store.commit('SET_TOKEN', '')
    router.go('/login')
    return
  }
  return Promise.reject(error)
})
