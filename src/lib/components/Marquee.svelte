<script>
	export let items;
</script>

<div class="marquee bg-magenta-500 flex font-light mb-20 py-3 text-white whitespace-nowrap w-full" data-hover-pause>
	<div class="marquee-content">
		{#each items as item, i}
			<span>
				{item}
			</span>
			<span class="mx-3 text-slate-900">✱</span>
		{/each}
	</div>
	<div class="marquee-content">
		{#each items as item, i}
			<span>
				{item}
			</span>
			<span class="mx-3 text-slate-900">✱</span>
		{/each}
	</div>
</div>

<style>
	@keyframes loop-move-left {
		to { transform: translateX(-100%); }
	}

	.marquee-content {
		animation: loop-move-left;
		animation-direction: normal;
		animation-fill-mode: both;
		animation-iteration-count: infinite;
		animation-play-state: running;
		animation-timing-function: linear;
		animation-duration: 30s;
	}
  
	[data-hover-pause]       * { animation-play-state: running; }
	[data-hover-pause]:hover * { animation-play-state: paused; }
</style>