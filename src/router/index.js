import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../App.vue'
import HistoryPage from '../views/HistoryPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import LandingPage from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryPage,
    meta: { transitionName: 'slide' }
  },
  {
    path: '/landing',
    name: 'landing',
    component: LandingPage,
    meta: { transitionName: 'slide' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta: { transitionName: 'slide' }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
