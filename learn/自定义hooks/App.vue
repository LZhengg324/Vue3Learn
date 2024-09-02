<template>
    <div class="app">
        <Person :personList="personList"/>
    </div>
</template>

<script setup lang = "ts" name="App">
    import Person from './components/Person.vue';
    import { reactive } from 'vue';
    import { type Persons } from './types' 
    
    let personList = reactive<Persons>([
        {id: '0001', name: '张三', age: 18},
        {id: '0002', name: '李四', age: 19},
        {id: '0003', name: '王五', age: 16},
    ])

    console.log(personList)
</script>

<style>
    .app{
        background-color: powderblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>