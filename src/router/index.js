import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import AuthComponent from '@/components/AuthComponent.vue'
import NgoList from '@/components/NgoList'
import InvitationComponent from '@/components/InvitationComponent.vue'
import EventDetails from '@/components/EventDetails.vue'; 

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/',
    name: 'auth',
    component: AuthComponent
  },
  {
    path: '/view-ngos',
    name: 'NgoList',
    component: NgoList,
  },{
    path: '/invitations', // Set the path for invitations
    name: 'Invitations',
    component: InvitationComponent,
  },{
    path: '/event-details',
    name: 'EventDetails',
    component: EventDetails,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
