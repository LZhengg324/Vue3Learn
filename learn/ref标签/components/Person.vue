<template>
    <div class="person">
        <h1>中国</h1>  
        <h2 ref="type2">北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showH2">点我输出h2元素</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue';

    let type2 = ref()
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    function showH2() {
        console.log(type2.value)
    }

    defineExpose({a_val: a.value, b_val: b.value, c_val: c.value})
</script>

<style scoped>
    .person{
        background-color: greenyellow;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 10px
    }
</style>