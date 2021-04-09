<script>
	import Landing from '$lib/Landing.svelte'
</script>

<main class="container flex sm:flex-row jusitfy-between items-center py-12">
	<Landing />
</main>

<style style lang="postcss">
	main {
		@apply text-center;
		@apply mx-auto;
		background: #bdbdbd;
	}
	h2 {
		text-shadow: 0 2px 3px #000; 
	}
</style>
