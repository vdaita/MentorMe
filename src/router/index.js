import Vue from 'vue'
import VueRouter from 'vue-router'
import FindMentors from '../views/FindMentors.vue'
import Me from '../views/Me.vue'
import Login from '../views/Login.vue'
import Mail from '../views/Mail.vue'
import TinderFindMentors from "../views/TinderFindMentors.vue"


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'FindMentors',
    component: FindMentors
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: "/mail/:email",
    name: 'Mail',
    component: Mail
  },
  {
    path: "/tfm",
    name: 'Tinder',
    component: TinderFindMentors
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
