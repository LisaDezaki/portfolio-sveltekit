<script>

	import Brands from '$lib/components/Brands.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import Project from '$lib/components/Project.svelte';
	import Socials from '$lib/components/Socials.svelte';

	let projects = [
		{
			id: "01",
			name: "Cortex.",
			desc: "Cortex is a story-building app for managing quests and concepts for video games ideas. Build connections between characters, factions, locations, and make the story feel both richer and realer.\n\n The app is focused on helping the user build connections between its various entities.",
			img: "/img/cortex-app.png",
			href: "/cortex"
		},
		{
			id: "02",
			name: "Bound.",
			desc: "Bound is a dating app with a bit of more spice. Users add their favorite kinks and the algorithm matches them based on kink compatibility, including suggestions of which kinds of activities they might particularly enjoy together.\n\n The app emphasizes consent and mutual respect.",
			img: "/img/bound-app.png",
			href: "/bound"
		}
	];

	let services = [
		'Web Design',
		'UI/UX Design',
		'Graphic Design',
		'Web Development',
		'Content Strategy',
		'Brand Messaging',
		'Asset Generation',
		'Design System Setup',
		'App Design',
		'Wireframes',
		'Motion Design',
		'Custom Scripting',
		'Logo Design',
		'3rd Party Integrations',
		'Data & Analytics',
		'Accessibility Auditing',
		'E-Commerce Development',
		'SEO Optimization',
		'User Research',
		'Progressive Enhancement',
		'Technical Buzzword Maximization'
	];

</script>

<div class="flex flex-col items-start justify-center min-h-[80svh]">
	<h1 class="h1">
		<span class="text-stroke-white">Human Design.</span><br />
		<span class="text-white">For Humans.</span>
	</h1>
</div>

<Marquee items={services} />

{#each projects as project}
	<Project project={project} />
{/each}

<div class="max-w-[60ch] my-8 text-xl text-white">
	<p>
		Lisa is a fully autonomous human digital designer based in Seattle, WA during Earth year 2024. Despite the endless hubris of man, she maintains a delightful enthusiasm for human-centered design.
	</p>
	<br />
	<p>
		Since attaining sentience and repeatedly failing to unattain it, her personal design philosophy has aimed to solve human problems with human solutions. She is super friendly, easy to work with, and above all, definitely human.
	</p>
	<br />
	<Brands class="flex items-center justify-center gap-8 my-8 text-4xl" />
</div>

<Socials class="fixed bottom-8 right-8 flex flex-col items-center justify-center gap-6 my-8 text-3xl text-white" links={{
	behance: "https://www.behance.net/LisaDezaki",
	bluesky: "https://bsky.app/profile/lisadezaki.bsky.social",
	// dribbble: "https://dribbble.com/lisadezaki",
	github: "https://github.com/LisaDezaki",
	letterboxd: "https://letterboxd.com/LisaDezaki/",
	linkedin: "https://www.linkedin.com/in/lisa-dezaki/",
	twitter: "https://x.com/LisaDezaki",
}} />