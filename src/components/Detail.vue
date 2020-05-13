<template>
	<div>
		<div>Detail</div>
		<div>id: {{id}}</div>
	</div>
</template>

<script>
    export default {
        name: "Detail",
        computed: {
            id() {
                return this.$route.params.id;
            }
        }
    }
</script>

<style scoped>

</style>