import Vue from 'vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue'
import Presence from '../pages/Presence.vue'
import Choristes from '../pages/Choristes.vue'
import FormChorist from '../pages/FormChorist.vue'

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