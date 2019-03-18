// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import particles from 'particles.js'
import $ from 'jquery' ;
// import './assets/css/bootstrap.min.css'  
// import './assets/js/bootstrap.min' 
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
 //引入iconfont
 import './assets/iconfont/iconfont.js'
 import "./assets/iconfont/iconfont.css";

Vue.use(particles)
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);
import store from '../store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
//异步请求前在header里加入token
axios.interceptors.request.use(
  config => {
    if(config.url==='/jwt/login'||config.url==='/jwt'){  //如果是登录和注册操作，则不需要携带header里面的token
    }else{
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorizatior = localStorage.getItem('Authorization');
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });
//异步请求后，判断token是否过期
axios.interceptors.response.use(
  response =>{
    return response;
  },
  error => {
    if(error.response){
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization');
          this.$router.push('/');
      }
    }
  }
)
//异步请求前判断请求的连接是否需要token
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    console.log("我是浏览器本地缓存的token: "+token);
    if (token === 'null' || token === '') {
      next('/');
    } else {
      next();
    }
  }
});
 