import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Resume from '../views/Resume.vue'
import Blog from '../views/Blog.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
      meta: {title: 'Elvis Izuegbu | About'}
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
      meta: {title: 'Elvis Izuegbu | Resume'}
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: {title: 'Elvis Izuegbu | Portfolio'}
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {title: 'Elvis Izuegbu | Blog'}
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {title: 'Elvis Izuegbu | Contact'}
    },
  ],
})

export default router
