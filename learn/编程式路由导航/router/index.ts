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
                    // params传参要占位，参数optional加?
                    path: "detail",
                    component: NewsDetail,

                    // 第一种写法：将路由收到的所有params参数作为props传给路由组件
                    // props: true

                    // 第二种写法：函数写法，可以自己决定将什么作为props传给路由组件(query / params 都可以)
                    props(route) {
                        return route.query
                    }

                    // 第三种写法：对象写法，可以自己决定将什么作为props传给路由组件
                    // props: {

                    // }
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