<template>
    <div class="person">
        <h1>watch情况3: 监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button class="button" @click="changeName">修改名字</button>
        <button class="button" @click="changeAge">修改年龄</button>
        <button class="button" @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue';
    let person = reactive({
        name: '张三',
        age: 18
    })

    function changeName(){
        person.name += '~'
    }
    function changeAge(){
        person.age += 1
    }
    function changePerson(){
        Object.assign(person, {name: "李四", age: 90})
    }
    // 监视【reactive】定义的【对象类型】数据，默认开启深度监视（无法关闭）
    watch(person, (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
    })
</script>

<style scoped>
    .person{
        background-color: greenyellow;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .button{
        margin: 0 10px
    }
</style>