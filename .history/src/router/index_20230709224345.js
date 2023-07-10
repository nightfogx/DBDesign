import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../views/mainpage.vue'
import loginMain from '../views/login_register/loginMain'


import RepairPage from '../views/home/DetailePage/repairpage.vue'
import RecyclePrice from '../views/home/DetailePage/recycleprice.vue'
import PricePage from '../views/home/DetailePage/pricepage.vue'
import PayPage from '../views/home/DetailePage/paypage.vue'
import CenterPage from '../views/home/CenterPage/CenterPage.vue'
import CenterPageGoBack from '../views/home/CenterPage/CenterPage.vue'
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
  },

   {//查看商品详情
    path: '/DetailsPage',
    name: 'DetailsPage',
    component: () => import(/* webpackChunkName: "DetailsPage" */ '../views/home/DetailePage/DetailsPage.vue')
  },
  {//进入回收页
<<<<<<< HEAD
    path: '/recoverypage',
    name: 'recoverypage',
    component: () => import(/* webpackChunkName: "DetailsPage" */ '../views/home/DetailePage/RecoveryPage.vue')

  },

=======
    path: '/RecoveryPage',
    name: 'RecoveryPage',
    component: () => import(/* webpackChunkName: "DetailsPage" */ '../views/home/DetailePage/RecoveryPage.vue')
  },


>>>>>>> 47f5e6460ec9df49bc9d7b6f7182896a49838c8e
  {
    path: '/repairpage',
    name: 'repairpage',
    component: RepairPage
  },
  {
    path: '/pricepage',
    name: 'pricepage',
    component: PricePage
  },
  {
<<<<<<< HEAD
    path: '/recycleprice',
    name: 'recycleprice',
    component: RecyclePrice
  },
  {
=======
>>>>>>> 47f5e6460ec9df49bc9d7b6f7182896a49838c8e
    path: '/paypage',
    name: 'paypage',
    component: PayPage
  },
  {
    path: '/CenterPage',
    name: 'CenterPage',
    component: CenterPage
  },
<<<<<<< HEAD
  {
    path: '/repairpage',
    name: 'CenterPageGoBack',
    component: CenterPageGoBack
  },
=======
>>>>>>> 47f5e6460ec9df49bc9d7b6f7182896a49838c8e
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
