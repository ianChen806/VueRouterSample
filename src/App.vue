<template>
	<div>
		<div>App</div>
		<hr>
		<div>
			<router-link to="/">HelloWorld</router-link>
		</div>
		<div>
			<router-link :to="{name:'Test'}">About</router-link>
		</div>
		<div>
			<router-link to="/Detail">Detail</router-link>
		</div>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        name: "App",
    }
</script>

<style>

</style>
