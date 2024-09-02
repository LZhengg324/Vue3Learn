<template>
    <div class="person">
        <h1>watch情况2: 监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button class="button" @click="changeName">修改名字</button>
        <button class="button" @click="changeAge">修改年龄</button>
        <button class="button" @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue';
    let person = ref({
        name: '张三',
        age: 18
    })

    function changeName(){
        person.value.name += '~'
    }
    function changeAge(){
        person.value.age += 1
    }
    function changePerson(){
        person.value = {name: "李四", age: 90}
    }
    // 监视【ref】定义的【对象类型】数据，监视的是对象的地址值
    // 若想监视对象内部属性的变化，需手动开启
    // watch 参数列表：1.监视源，2.回调函数，3.配置
    watch(person, (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
    }, {deep: true})
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