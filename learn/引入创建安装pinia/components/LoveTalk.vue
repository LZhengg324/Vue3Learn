<template>
    <div class="talk">
        <button @click="getLoveTalk">获取</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import { reactive } from 'vue';
    import axios from 'axios';
    import { nanoid } from 'nanoid';

    let talkList = reactive([
        {id: '0001', title: '今天你有点怪，哪里怪？怪好看的'},
        {id: '0002', title: '草莓蓝莓蔓越莓，你今天想我了没'},
        {id: '0003', title: '心里给你留了一块地，我的死心塌地'}
    ])

    async function getLoveTalk() {
        try {
            //连续解构赋值 + 重命名
            const {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            talkList.unshift({id: nanoid(), title})
        } catch (error) {
            console.error(error)
        }
    }
</script>

<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>