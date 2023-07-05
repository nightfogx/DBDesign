import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../views/mainpage.vue'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: mainpage
  },
  {
    path: '/evaluatepage',
    name: 'evaluatepage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/evaluatepage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
