<template>
	<div>
		<div>App</div>
		<hr>
		<div>
			<router-link to="/">Home</router-link>
		</div>
		<div>
			<router-link to="/About">About</router-link>
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
