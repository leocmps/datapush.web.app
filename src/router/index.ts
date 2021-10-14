import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import AccountDetails from '../views/AccountDetails.vue'
import SignIn from '../views/SignIn.vue'
import PasswordRecovery from '../views/PasswordRecovery.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/password-recovery',
    name: 'PasswordRecovery',
    component: PasswordRecovery
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/account-details',
    name: 'Account Details',
    component: AccountDetails
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!(window as any).uid && to.name !== 'SignIn') {
    next({ name: 'SignIn' })
  } else {
    next()
  }
})

export default router
