<script>
	import '../app.css';
	import Overlay from '$lib/components/Overlay.svelte';
	import SiteLogo from '$lib/components/SiteLogo.svelte';
	let { children } = $props();
</script>

<main class="main flex flex-col items-center justify-start overflow-x-hidden">
	<Overlay />
	<SiteLogo class="text-magenta-500 hover:text-white fixed top-4 left-4 transition-colors" />
	{@render children()}
	<div class="absolute inset-0 grain"></div>
</main>

<style>
	.grain {
		background-image: url('/ui/grain.gif');
		mix-blend-mode: overlay;
		opacity: 10%;
		pointer-events: none;
	}
</style>