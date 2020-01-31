import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //@ 就代表的是src目录
import Home from '@/pages/home/home'
import List from '@/pages/list/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },

  ]
})
