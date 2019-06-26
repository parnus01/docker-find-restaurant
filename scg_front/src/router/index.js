import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Number from '@/components/Number'
import FindRestaurants from '@/components/FindRestaurants'

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: Main,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/number',
          name: 'Number',
          component: Number
        },
        {
          path: '/find-restaurants',
          name: 'FindRestaurants',
          component: FindRestaurants
        }
      ]
    }
  ]
})
