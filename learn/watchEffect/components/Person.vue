<template>
    <div class="person">
        <h2>当水温达到60℃或水位达到80cm时给服务器发请求</h2>
        <h2>当前水温为: {{ temp }}℃</h2>
        <h2>当前水位为: {{ height }} cm</h2>
        <button @click="changeTemp">点击加水温</button>
        <button @click="changeHeight">点击加水位</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch, watchEffect } from 'vue';

    let height = ref(0)
    let temp = ref(10)

    function changeTemp() {
        temp.value += 10
    }

    function changeHeight(){
        height.value += 10
    }

    // watch([temp, height], (value) => {
    //     console.log("有变化", value)
    //     let [newTemp, newHeight] = value
    //     if(newTemp >= 60 || newHeight >= 80) {
    //         console.log("给服务器发请求")
    //     }
    // })
    watchEffect(() => {
        if(temp.value >= 60 || height.value >= 80) {
            console.log("给服务器发请求")
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
    button{
        margin: 0 10px
    }
</style>