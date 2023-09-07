import { createRouter, createWebHistory } from 'vue-router';
import Balmostory from '../views/BalmostoryView.vue';
import Inputv from '../views/InputvView.vue';
import Todos from '../views/TodosView.vue';
import HomeView from '../views/HomeView.vue';
import AboutViewCopy from '../views/AboutViewCopy.vue';

const About = () => {
  return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Inputv',
    name: 'Inputv',
    component: Inputv,
  },
  {
    path: '/Todos',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/Balmostory',
    name: 'Balmostory',
    component: Balmostory,
  },
  {
    path: '/AboutViewCopy',
    name: 'AboutViewCopy',
    component: AboutViewCopy,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
