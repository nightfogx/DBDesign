import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../views/mainpage.vue'
import loginMain from '../views/login_register/loginMain'
const routes = [
  {
    path: '/',
    name: 'loginMain',
    component:loginMain
  },
  {
    path: '/mainpage',
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
  },
  {//个人主页
    path: '/MainHome',
    name: 'MainHome',
    component: () => import(/*webpackChunkName:'MainHome'*/ '../views/home/MainHome/MainHome.vue'),
    redirect: '/OwnPage',
    children: [
      {//个人主页
        path: '/OwnPage',
        name: 'OwnPage',
        component: () => import(/*webpackChunkName:'OwnPage'*/ '../views/home/MainHome/OwnPage.vue')
      },
      {//我的订单
        path: '/OrderCenter',
        name: 'OrderCenter',
        component: () => import(/*webpackChunkName:'OOrderCenter'*/ '../views/home/OrderCenter/OrderCenter.vue')
      },
      {//我的邮寄地址
        path: '/MyAddress',
        name: 'MyAddress',
        component: () => import(/*webpackChunkName:'MyAddress'*/ '../views/home/MailAddress/MyAddress.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
