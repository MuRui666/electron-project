import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Todos from './components/Todos.vue'
import Hello from './components/HelloWorld.vue'
import {myPluginEcharts,myPluginMixin} from './utils/echarts'

// Vue.config.productionTip = false
Vue.use(myPluginEcharts)
Vue.use(myPluginMixin)
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Todos
  },
  {
    path:'/hello',
    component:Hello
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
