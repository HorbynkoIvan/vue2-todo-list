import Vue from 'vue'
import Router from 'vue-router'
import Home from './Views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: () => import('./Views/Todos.vue')
    },
    {
      path: '/tabs_vertical',
      component: () => import('./Views/TabsVertical.vue')
    }
  ]
})
