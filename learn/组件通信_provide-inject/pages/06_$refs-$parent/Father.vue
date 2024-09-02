<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产: {{ house }}</h4>
		<button @click="changeToy">点我修改child1的玩具</button>
		<button @click="changeComputer">点我修改child2的电脑</button>
		<button @click="getAllChild($refs)">获取所有子组件实例对象, 并增加书本数量</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
	import { ref } from 'vue';

	let house = ref(4)

	let c1 = ref()
	let c2 = ref()

	function changeToy() {
		console.log(c1.value)
		c1.value.toy = '小猪佩奇'
	}

	function changeComputer() {
		c2.value.computer = '华为'
	}

	function getAllChild(refs: {[key: string]: any} /** 或 any*/) {
		for (let key in refs) {
			refs[key].book += 2
		}
	}

	defineExpose({house})
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

