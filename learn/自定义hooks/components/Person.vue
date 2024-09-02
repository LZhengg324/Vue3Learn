<template>
    <div class="person">
        <h2>当前求和：{{ sum }}</h2>
        <h2>当前求和 * 10: {{ bigSum }}</h2>
        <button @click="addSum">点击增加sum</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" alt="x" :key="index">
        <br>
        <button @click="addDog">再来一只修勾儿</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    // 太杂乱了
    // import { ref, reactive } from 'vue';
    // import axios from 'axios';

    // let sum = ref(0)
    // //https://dog.ceo/api/breed/pembroke/images/random
    // let dogList = reactive([
    //     "https://images.dog.ceo/breeds/pembroke/n02113023_4211.jpg",
    //     "https://images.dog.ceo/breeds/pembroke/n02113023_5848.jpg",
    //     "https://images.dog.ceo/breeds/pembroke/n02113023_14516.jpg"
    // ])

    // function addSum() {
    //     sum.value += 1
    // }

    // async function addDog() {
    //     try {
    //         let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    //         console.log(result.data)
    //         if (result.data.status === 'success'){
    //             dogList.push(result.data.message)
    //         }
    //     } catch (error) {
    //         alert(error)
    //     }  
    // }
    import useSum from '../hooks/useSum';
    import useDog from '../hooks/useDog';
    
    const {sum, bigSum, addSum} = useSum()
    const {dogList, addDog} = useDog()
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
    img {
        height: 100px;
        margin: 10px 10px
    }
</style>