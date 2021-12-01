import { createRouter, createWebHistory } from 'vue-router'
const Home = () =>
  import ('views/home/Home.vue');
const Profile = () =>
  import ('views/profile/Profile');
const Shopcar = () =>
  import ('views/shopcar/Shopcar');
const Category = () =>
  import ('views/category/Category');

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/shopcar',
  component: Shopcar
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router