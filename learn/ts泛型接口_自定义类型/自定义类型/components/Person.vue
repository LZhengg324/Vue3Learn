<template>
    <div class="person">

    </div>
</template>

<script lang="ts" setup name="Person">
    import { type PersonInter, type Persons } from '../types'

    // let person: PersonInter = {id: 'asdasdsd', name: '张三', age: 20}
    let personList: Persons = [
        {id: 'asdasdsd', name: '张三', age: 20},
        {id: 'asdasdse', name: '李四', age: 22},
        {id: 'asdasdsf', name: '王五', age: 23},
    ]

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