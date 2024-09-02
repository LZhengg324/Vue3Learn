<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>{{ a }}</h4>
		<h4>{{ b }}</h4>
		<h4>{{ c }}</h4>
		<h4>{{ d }}</h4>
		<h4>{{ x }}</h4>
		<h4>{{ y }}</h4>
		<button @click="updateA(2)">点我a+1</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>