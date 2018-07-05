import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import One from '@/pages/One'
import Two from '@/pages/Two'
import Three from '@/pages/Three'
import Four from '@/pages/Four'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    ,
    {
      path: '/One',
      name: 'One',
      component: One
    },
    {
      path: '/Two',
      name: 'Two',
      component: Two
    },
    {
      path: '/Three',
      name: 'Three',
      component: Three
    },
    {
      path: '/Four',
      name: 'Four',
      component: Four
    }
  ]
})
