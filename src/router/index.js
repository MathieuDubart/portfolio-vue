import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import projectsData from "../projects.json"

let defaultRouter = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/works',
      name: 'works',
      component:()=> import('../views/WorksView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component:()=> import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
}

let dynamicRouter;
dynamicRouter= Object.assign({}, defaultRouter)

for(let project of projectsData) {
  dynamicRouter.routes.push({
      path:project.route,
      name:project.title,
      component: () => import('../views/SingleProjectView.vue')
  })

  defaultRouter = dynamicRouter
}

const router = createRouter(dynamicRouter)

export default router