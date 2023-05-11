import { createRouter, createWebHistory } from 'vue-router'
import Editor from '../views/MonacoEditorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Editor
    },
    {
      path: '/diff',
      name: 'diff',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MonacoDiffEditorView.vue')
    }
  ]
})

export default router
