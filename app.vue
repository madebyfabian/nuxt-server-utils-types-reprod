<template>
	<div>
		<pre>{{ data }}</pre>
	</div>
</template>

<script lang="ts" setup>
	const { data } = await useAsyncData(async () => {
		const res = await $fetch('/api/example')
		const data = res.response // no types

		const resImproved = await $fetch('/api/example-improved')
		const dataImproved = resImproved.response // better, still TS complains about `response` not being defined in `{ err: never }`

		return { data, dataImproved }
	})
</script>
