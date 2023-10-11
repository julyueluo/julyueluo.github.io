
import { createRouter, createWebHistory } from "vue-router";

// Layout
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  // {
  //   path: 'redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect/index')
  //     }
  //   ]
  // },
  // {
  //   path: 'redirect',
  //   component: () => import('@/views/login/index'),
  //   hidden: true,
  // },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    // redirect: '/home',
    children: [
      {
        // 默认根路径 / 匹配到首页
        path: "/",
        // 重定向 将根路径 / 匹配到home
        redirect: '/home',
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        // meta: { title: 'Home', icon: 'home', affix: true }
        meta: { title: 'Arya Home'}
      }
    ]
  },
]
})

export default router