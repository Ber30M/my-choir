import Vue from 'vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Presence from '../views/Presence.vue'
import Choristes from '../views/Choristes.vue'
import FormChorist from '../views/FormChorist.vue'

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/Presence', name: 'Presence', component: Presence},
  { path: '/Choristes', name: 'Choristes', component: Choristes},
  { path: '/Formchorist', name: 'formchorist', component: FormChorist},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router