import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import One from '@/pages/One'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/One',
      name: 'One',
      component: One
    }
  ]
})
