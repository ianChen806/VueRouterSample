<template>
	<div>
		<div>About</div>
		<div>
			<div>
				<router-link to="/About/us">us</router-link>
			</div>
			<div>
				<router-link to="/About/you">you</router-link>
			</div>
		</div>
		<hr>
<!--		<router-view ></router-view>-->
		<router-view name="default"></router-view>
		<router-view name="Test2"></router-view>
	</div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>