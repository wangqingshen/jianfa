// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
axios.defaults.withCredentials=true;
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
	next()
	// if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
	// 	if (localStorage.getItem('username')) {// 判断是否登录
	// 		next()
	// 	} else {// 没登录则跳转到登录界面
	// 		next({
	// 		  	path: '/login',
	// 		  	query: {redirect: to.fullPath}
	// 		})
	// 	}
	// } else if(to.matched.some(res => res.meta.requireLogin)){ 
	// 	if(localStorage.getItem('username')) {
	// 		//登录了则跳转home页面
	//  		next({
	// 		  	path: '/home',
	// 		  	query: {redirect: to.fullPath}
	// 		})
	// 	}else{
	// 		next()
	// 	}
	// }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


