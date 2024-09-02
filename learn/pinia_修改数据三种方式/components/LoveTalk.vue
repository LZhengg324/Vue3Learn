<template>
    <div class="talk">
        <button @click="getLoveTalk">获取</button>
        <ul>
            <li v-for="talk in loveTalkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import { reactive } from 'vue';
    import axios from 'axios';
    import { nanoid } from 'nanoid';
    import { useLoveTalkStore } from '@/store/loveTalk';

    const loveTalkStore = useLoveTalkStore()

    async function getLoveTalk() {
        try {
            //连续解构赋值 + 重命名
            const {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            loveTalkStore.talkList.unshift({id: nanoid(), title})
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