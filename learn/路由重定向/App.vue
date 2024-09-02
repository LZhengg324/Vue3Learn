<template>
    <div class="app">
        <Header />
        <!-- 导航区 -->
        <div class="navigate">
            <!-- RouterLink 经过编译后本质上为a标签 -->

            <!-- RouterLink to 的第一种写法 -->
            <RouterLink replace to="/home" activeClass="active">首页</RouterLink>   
            <!-- RouterLink to 的第二种写法（对象写法），写name -->
            <RouterLink replace :to="{name: 'xinwen'}" activeClass="active">新闻</RouterLink>
            <!-- RouterLink to 的第二种写法（对象写法），写path -->
            <RouterLink replace :to="{path: '/about'}" activeClass="active">关于</RouterLink>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang = "ts" name="App">
    import { RouterView, RouterLink } from 'vue-router';
    import Header from './components/Header.vue';
</script>

<style scoped>
    .title {
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg, gray, white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
    }
    .navigate {
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }
    .navigate a {
        display: block;
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: gray;
        text-decoration: none;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
    }
    .navigate a.active{
        background-color: #64967e;
        color: #ffc268;
        font-weight: 900;
        text-shadow: 0 0 1px black;
        font-family: 微软雅黑;
    }
    .main-content {
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 10px;
        width: 90%;
        height: 400px;
        border: 1px solid;
    }
</style>