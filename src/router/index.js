import Vue from 'vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import Home from '../views/Home.vue'

import ListOfChorists from '../pages/ListOfChorists.vue'

const routes = [
  // { path: '/', name: 'Home', component: Home},
  {path: '/', name: 'list', component: ListOfChorists}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router