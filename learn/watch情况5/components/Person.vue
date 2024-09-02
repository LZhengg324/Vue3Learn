<template>
    <div class="person">
        <h1>watch情况5: 监视上述(情况1,2,3,4)多个数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}, {{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeFirstCar">修改第一台车</button>
        <button @click="changeSecondCar">修改第二台车</button>
        <button @click="changeAllCar">修改整个车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue';

    let person = reactive({
        name: '张三',
        age: 18,
        car: {
            c1: '奔驰',
            c2:'宝马',
        }
    })

    function changeName() {
        person.name += '~'
    }
    function changeAge() {
        person.age += 1
    }
    function changeFirstCar() {
        person.car.c1 = '奥迪'
    }
    function changeSecondCar() {
        person.car.c2 = '大众'
    }
    function changeAllCar() {
        person.car = {c1: '雅迪', c2: '爱玛'}
    }

    watch([() => { return person.name }, () => { return person.car.c1 }], (newValue, oldValue) => {
        console.log('person.car变化了',newValue, oldValue)
    }, {deep: true})
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