import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home.vue';
import DogDetails from '../views/DogDetails.vue'
// import About from '../views/About.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
        path: '/dog-details/:name',
        name: 'dogDetails',
        component: DogDetails,
      },
	// {
	// 	path: '/about',
	// 	name: 'about',
	// 	component: About,
	// }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router