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
    meta: { title: 'DataPush - Entrar' },
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    meta: { title: 'DataPush - Cadastrar' },
    component: SignUp
  },
  {
    path: '/password-recovery',
    name: 'PasswordRecovery',
    meta: { title: 'DataPush - Recuperar senha' },
    component: PasswordRecovery
  },
  {
    path: '/',
    name: 'Home',
    meta: { title: 'DataPush - Home' },
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: { title: 'DataPush - Dashboard' },
    component: Dashboard
  },
  {
    path: '/account-details',
    name: 'Account Details',
    meta: { title: 'DataPush - Detalhes da conta' },
    component: AccountDetails
  }
]

const router = new VueRouter({
  routes
})

const DEFAULT_TITLE = 'DataPush'

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = to.meta!.title || DEFAULT_TITLE
  })
  if (!(window as any).uid && to.name !== 'SignIn' && to.name !== 'SignUp' && to.name !== 'PasswordRecovery') {
    next({ name: 'SignIn' })
  } else {
    next()
  }
})

export default router
