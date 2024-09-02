<template>
    <div class="talk">
        <button @click="getLoveTalk">获取</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import { useLoveTalkStore } from '@/store/loveTalk';
    import { storeToRefs } from 'pinia';

    const loveTalkStore = useLoveTalkStore()
    const {talkList} = storeToRefs(loveTalkStore)
    loveTalkStore.$subscribe((mutate, state) => {
        console.log('loveTalkStore发生了变化', mutate, state)
        localStorage.setItem('talkList', JSON.stringify(state.talkList))
    })

    function getLoveTalk() {
        loveTalkStore.getLoveTalk()
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