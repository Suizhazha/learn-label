import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    //路由懒加载
    component:()=>import('../views/Home.vue'),
child:[{
  path:'/son',
  component:()=>import('../views/Son')
}]
  }
]

const router = new VueRouter({
  routes
})

export default router
