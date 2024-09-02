<!-- 路由组件放pages/views里 -->
<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">

                <!-- query传参：第 1 种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">
                    {{ news.title }}
                </RouterLink> -->

                <!-- query传参：第 2 种写法 -->
                <RouterLink 
                    :to="{
                        name: 'xiangqing',
                        query: {
                            id: news.id,
                            title: news.title,
                            content: news.content,
                        }
                    }"
                >
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import { reactive } from 'vue';

    const newsList = reactive([
        {id: 'n00001', title: '很好的抗癌食物', content: '西兰花'},
        {id: 'n00002', title: '如何一夜暴富', content: '学it'},
        {id: 'n00003', title: '真几个，万万没想到', content: '明天是周六'},
        {id: 'n00001', title: '还有5个月', content: '快过年了'},
    ])
</script>

<style scoped>
    .news {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    .news ul {
        margin-top: 30px;
        /* list-style: none; */
        padding-left: 10px;
    }

    .news li::marker {
        color: #64967e
    }

    .news li a {
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #64967e;
        text-shadow: 0 0 1px rgb(0, 84, 0);
    }

    .news-content {
        width: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius: 10px;
    }
</style>