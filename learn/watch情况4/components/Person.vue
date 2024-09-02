<template>
    <div class="person">
        <h1>watch情况4: 监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
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

    // watch第一个参数监视源只可以是：
    // 1. 一个函数，返回一个值（getter）
    // 2. ref
    // 3. reactive
    // 4. 任何一个由上面三个组成的数组

    // 监视【ref】或【reactive】定义的【对象类型】数据中的某个基本类型属性
    watch(() => { return person.name }, (newValue, oldValue) => {
        console.log('person.name变化了',newValue, oldValue)
    })

    // 监视【ref】或【reactive】定义的【对象类型】数据中的某个对象类型属性
    watch(() => { return person.car }, (newValue, oldValue) => {
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