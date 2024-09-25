/**
 * @author luof
 * @date 2024/9/19 11:11
 */
import {createRouter, createWebHashHistory} from 'vue-router'
import {message} from "ant-design-vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import('../../src/views/UserLogin/UserLogin.vue')
        },
        {
            path: '/chat',
            component: () => import('../../src/views/ChatAI/ChatAI.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (!token && to.path !== '/login') {
        message.error('登录已失效，请重新登录')
        return next('/login') // 添加 return 阻止后续代码执行
    }

    if (to.path === '/login' && token) {
        return next('/chat') // 如果已登录，阻止再次访问登录页
    }

    next() // 正常放行
})



export default router
