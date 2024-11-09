<script>

	// import Marquee from '$lib/components/Marquee.svelte';
	// import Project from '$lib/components/Project.svelte';
	// import SiteLogo from '$lib/components/SiteLogo.svelte';
	
	let project = {
		id: "02",
		name: "Bound.",
		desc: "Bound is a dating app with a bit of more spice. Users add their favorite kinks and the algorithm matches them based on kink compatibility, including suggestions of which kinds of activities they might particularly enjoy together.\n\n The app emphasizes consent and mutual respect.",
		img: "/img/bound-screen.png",
		href: "/bound"
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