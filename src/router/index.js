import { createRouter, createWebHashHistory } from 'vue-router';
import Initial from '../views/Initial.vue';
import TypeUserSignUp from '../views/TypeUserSignUp.vue';
import SignUp from '../views/SignUp.vue';
import Additionaldata from '../views/Additionaldata.vue';
import TypeUserLogin from '../views/TypeUserLogin.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import PackageDetails from '../views/PackageDetails.vue';
import CustomPackage from '../views/CustomPackage.vue';
import AgencySignUp from '../views/AgencySignUp.vue';
import AgencyLogin from '../views/AgencyLogin.vue';

const routes = [
  {
    path: '/',
    name: 'initial',
    component: Initial,
    meta: { requiresAuth: false },
  },
  {
    path: '/typeusersignup',
    name: 'typeusersignup',
    component: TypeUserSignUp,
    meta: { requiresAuth: false },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
    meta: { requiresAuth: false },
  },
  {
    path: '/additionaldata',
    name: 'additionaldata',
    component: Additionaldata,
    meta: { requiresAuth: false },
  },
  {
    path: '/typeuserlogin',
    name: 'typeuserlogin',
    component: TypeUserLogin,
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/package/:id',
    component: PackageDetails,
    meta: { requiresAuth: true },
  },
  {
    path: '/custom-package',
    component: CustomPackage,
    meta: { requiresAuth: true },
  },
  {
    path: '/agency',
    children: [
      {
        path: 'signup',
        component: AgencySignUp,
        meta: { requiresAuth: false },
      },
      {
        path: 'login',
        component: AgencyLogin,
        meta: { requiresAuth: false },
      },
    ],
  },
  // {
  //   path: "/agency/login",
  //   components: AgencyLogin,
  //   meta: { requiresAuth: false },
  // },
  // crear para cualquier ruta que no exista y redirigir a la ruta inicial
  // { path: '/:pathMatch(.*)*', redirect: '/login' },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
