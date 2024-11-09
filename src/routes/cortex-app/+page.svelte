<script>

	// import Marquee from '$lib/components/Marquee.svelte';
	// import Project from '$lib/components/Project.svelte';
	// import SiteLogo from '$lib/components/SiteLogo.svelte';
	
	let project = {
		id: "01",
		name: "Cortex.",
		desc: "Cortex is a story-building app for managing quests and concepts for video games ideas. Build connections between characters, factions, locations, and make the story feel both richer and realer.",
		img: "/img/cortex-screen.png",
		href: "/cortex"
	};

</script>

<div class="flex flex-col items-center gap-8 max-w-4xl py-20 text-lg text-white">
	<div class="project-header max-w-[60ch] space-y-8">
		<h1 class="font-bold text-9xl text-white leading-[6.5rem] tracking-[-0.6rem]">
			<span class="">{project.name}</span>
		</h1>
		<p>{project.desc}</p>
	</div>
	<img class="rounded-lg" src={project.img} alt={project.name} />
</div>