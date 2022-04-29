import { createRouter,createWebHistory } from 'vue-router';
const MainLayout = () => import('../layouts/MainLayout.vue');
const Home = () => import('../views/Home.vue');
export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: MainLayout,
			children: [{ path: '', component: Home }]
		},
	],
});
