import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import AuthComponent from '@/components/AuthComponent.vue'
import NgoList from '@/components/NgoList'
import InvitationComponent from '@/components/InvitationComponent.vue'
import EventDetails from '@/components/EventDetails.vue'; 
import AddEventPage from '@/components/AddEventPage.vue'; 
import UpcomingEvents from '@/components/UpcomingEvents.vue';
import EventDescription from '@/components/EventDescription.vue'
import ChatPage from '@/components/ChatPage.vue'
import ChatHistoryPage from '@/components/ChatHistoryPage.vue'

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
    path: '/event-details/',
    name: 'EventDetails',
    component: EventDetails,
    // props: true
  },
  {
    path: '/add-event',
    name: 'AddEventPage',
    component: AddEventPage,
  },
  {
    path: '/upcoming-events',
    name: 'UpcomingEvents',
    component: UpcomingEvents,
  },
  {
    path: '/event-description/:event/',
    name: 'EventDescription',
    component: EventDescription,
    props: true,
  },
  {
    path: '/chats',
    name: 'Chats',
    component: ChatPage,
  },
  {
    path: '/chats/history/:ngoName',
    name: 'ChatHistoryPage',
    component: ChatHistoryPage,
  },
  // {
  //   path: '/add-ngo/:eventId',
  //   name: 'AddNGO',
  //   component: AddNGO,
  //   props: true,
  // },
  // {
  //   path: '/add-invitee/:eventId',
  //   name: 'AddInvitee',
  //   component: AddInvitee,
  //   props: true,
  // },
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
