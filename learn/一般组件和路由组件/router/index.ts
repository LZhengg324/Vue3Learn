// 创建一个路由器，并暴露出去

// 1.引入路由器
import { createRouter, createWebHistory } from "vue-router";

// 引入所有可能要呈现的组件
import Home from "../pages/Home.vue"
import News from "../pages/News.vue";
import About from "../pages/About.vue";

//2.创建路由器
const router = createRouter({
    history: createWebHistory(),    // 路由器工作模式
    routes:[
        {
            path:'/home',
            component: Home
        },
        {
            path:'/news',
            component: News
        },
        {
            path:'/about',
            component: About
        },
    ]
})

// 暴露router出去
export default router