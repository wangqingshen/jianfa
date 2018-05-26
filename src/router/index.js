import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import ChangePwd from '@/components/ChangePwd'
import CheckIn from '@/components/CheckIn'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { 
        requireLogin: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { 
        requireAuth: true
      },
      children: [
      	{
	      path: 'changePwd',
	      name: 'ChangePwd',
	      component: ChangePwd,
	      meta: { 
	        requireAuth: true
	      }
	    },
	    {
	      path: 'checkIn',
	      name: 'CheckIn',
	      component: CheckIn,
	      meta: { 
	        requireAuth: true
	      }
	    },
	    {
	      path: 'search',
	      name: 'Search',
	      component: Search,
	      meta: { 
	        requireAuth: true
	      }
	    }
      ]
    },
    
  ]
})
