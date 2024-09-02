<template>
    <div class="person">
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }} - {{ person.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { defineProps } from 'vue'
    import { type Persons } from '../types';
    //接收参数personList
    // let x = defineProps(['personList'])

    //接收personList限制类型
    // defineProps<{personList: Persons}>()

    //接收personList(defineProps) + 限制类型(泛型) + 限制必要性(?) + 指定默认值(withDefaults: 宏函数，无需引入)
    withDefaults(defineProps<{personList?: Persons}>(), {
        personList:() => [
            {id: '0007', name: '赵六', age: 17}
        ]
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