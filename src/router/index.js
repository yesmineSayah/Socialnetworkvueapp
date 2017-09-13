import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Registration from '@/components/Registration'
import Login from '@/components/Login'
import User from '@/components/user/User'
import UserRouter from './user';

Vue.use(Router)



let routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '',
    component: User,
    children: UserRouter
  }
];

export default new Router({
  routes: routes
})
