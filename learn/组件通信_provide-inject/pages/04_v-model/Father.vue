<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <!-- v-model应用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->

    <!-- v-model 底层逻辑实现:value配合@input -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
    <!-- v-model用在组件标签 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- 底层逻辑实现 -->
    <!-- <AtguiguInput :modelValue="username" @update:modelValue="username = $event"/> -->
     <!-- 修改modelValue -->
     <AtguiguInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from 'vue';
  import AtguiguInput from './AtguiguInput.vue';

  let username = ref('zhangsan')
  let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
