// 入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 导入axios
import axios from 'axios'
axios.defaults.withCredentials=true
axios.defaults.baseURL="http://127.0.0.1:3000"
// 将axios注册为vue的实例
Vue.prototype.axios=axios

// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入MintUI组件
import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 1.3导入自己的router.js路由模块
import router from './router'

// 导入App组件
import app from './App.vue'

var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router//1.4挂载路由对象到vm实例上
})