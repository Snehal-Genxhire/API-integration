import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import defaultLayout from '../layouts/defaultLayout.vue'
import { isUserLoggedIn } from './utils'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta:{ layout: defaultLayout}
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout : 'blank'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/position',
    name: 'Position',
    meta: {layout : 'blank'},
    component: () => import('../views/Position.vue'),
    meta:{ layout: defaultLayout}
  },
  {
    path: '/submissions',
    name: 'Submissions',
    meta: {layout : 'blank'},
    component: () => import('../views/Submission.vue'),
    meta:{ layout: defaultLayout}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const isLoggedIn = isUserLoggedIn()
  if (to.name !== 'login' && !isLoggedIn) next({ name: 'login' })
  else next()

  if(to.name === 'login' && isLoggedIn) next({name: 'Home'})
})


export default router
