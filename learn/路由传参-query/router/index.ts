// 创建一个路由器，并暴露出去

// 1.引入路由器
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

// 引入所有可能要呈现的组件
import Home from "../pages/Home.vue"
import News from "../pages/News.vue";
import About from "../pages/About.vue";
import NewsDetail from "../pages/NewsDetail.vue";

//2.创建路由器
const router = createRouter({
    // 路由器工作模式
    history: createWebHistory(),    //history模式
    // history: createWebHashHistory(),    //哈希模式
    //路径
    routes:[    
        {
            name:'zhuye',
            path:'/home',
            component: Home
        },
        {
            name:'xinwen',
            path:'/news',
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    path: "detail",
                    component: NewsDetail
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component: About
        },
        
    ]
})

// 暴露router出去
export default router