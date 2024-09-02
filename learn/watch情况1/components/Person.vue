<template>
    <div class="person">
        <h1>watch情况1: 监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">click for sum + 1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue';   

    let sum = ref(0)

    function changeSum() {
        sum.value += 1
    }

    // 情况1: 监视【ref】定义的【基本类型】数据
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log("sum变化", newValue, oldValue)
        if (sum.value >= 10) {
            stopWatch()
        }
    })
</script>

<style scoped>
    .person{
        background-color: greenyellow;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>