import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Router Guard

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.authModule.token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

// Change document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

// Check if token is available in local storage, if it was, save it in vuex
if (window.localStorage) {
  let token = window.localStorage.getItem('user_token')
  if (token === '' || token === null || token === undefined) {
    store.commit('SET_TOKEN', '')
  } else {
    store.commit('SET_TOKEN', token)
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
