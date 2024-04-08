// 路由
// createRouter 用于创建 vue-router 示例对象
// RouteRecordRaw 用于规范 路由规则，增加路由对象类型限制
// createWebHashHistory 用于 指定路由工作的模式（Hash
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
// 引入store 的 userStore
import { userStore } from '../store/user'

// 创建路由规则
const route: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
]

// 创建 路由的示例对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
    console.log(to,from)
    const store = userStore()
    if(store.token) {
        next()
    }else {
        next()
    }
})

export default router