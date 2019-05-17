import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        keepAlive: false
      }
    }],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
