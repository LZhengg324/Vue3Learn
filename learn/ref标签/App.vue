<template>
    <div class="app">
        <h2 ref="type2">App里的h2</h2>
        <button @click="showH2">点我输出App的h2</button>
        <button @click="showPerson">点我输出Person里的a,b,c</button>
        <Person ref="ren"/>
    </div>
</template>

<script setup name="App">
    import Person from './components/Person.vue';
    import { ref } from 'vue';

    let type2 = ref()
    let ren = ref()

    function showH2() {
        console.log(type2.value)
    }

    function showPerson() {
        console.log(ren.value)
    }
</script>

<style>
    .app{
        background-color: powderblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>