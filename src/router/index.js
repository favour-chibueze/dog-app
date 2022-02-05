import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
        path: '/profile',
        name: 'profile',
        component: Profile,
      },
	{
		path: '/about',
		name: 'about',
		component: About,
	}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router