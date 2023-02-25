import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import b from '../views/about/bbb.vue'
import c from '../views/about/ccc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      children:[
        {
          path:'aaa',
          name:'aaa',
          component: () => import('../views/about/aaa.vue')
        },
       {
          path:'bbb',
          name:'bbb',
          component: b,
        },
        {
          path:'ccc',
          name:'ccc',
          component: c,
        }
      ],
    },
    {
      path:'/address',
      name:'address',
      component:()=> import('../views/AddressView.vue')
    },
    {
      path:'/:id',
      name:'userdata',
      component:()=> import('../views/[id].vue'),
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404.vue'),
    }
  ]
})

export default router
