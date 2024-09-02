<template>
    <div class="count">
        <h2>当前求和为: {{ sum }}, 放大十倍: {{ bigSum }}</h2>
        <h3>欢迎来到: {{ school }}, 大写: {{ upperSchool }}</h3>
        <h3>坐落于: {{ address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { ref } from 'vue';
    import { useCountStore } from '../store/count'
    import { toRefs } from 'vue';
    import { storeToRefs } from 'pinia';

    const countStore = useCountStore()

    // toRef会把pinia里的所有包括方法都变成ref
    // const {sum, school, address} = toRefs(countStore)

    // 应用storeToRefs, 只关注store中的数据
    const {sum, school, address, bigSum, upperSchool} = storeToRefs(countStore)

    let n = ref(1)  //倍数

    function add() {
        countStore.increment(n.value)
    }

    function minus() {
        countStore.decrement(n.value)
    }
</script>   

<style scoped>
    .count{
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    select, button {
        margin:0 5px;
        height: 25px;
    }
    
</style>