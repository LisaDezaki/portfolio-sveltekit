<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	
	export let project;

	/** @type {HTMLElement} */
	let projectElement;
	/** @type {HTMLElement} */
	let projectNum;
	/** @type {HTMLElement} */
	let projectImage;
	/** @type {HTMLElement} */
	let projectDesc;

	onMount(async() => {

		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
		const Splitting = (await import('splitting')).default;
		gsap.registerPlugin(ScrollTrigger);

		Splitting({
			target: '.description',
			by: 'words'
		})

		const parallax_tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectElement,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			}
		});

		//	Number
		parallax_tl.fromTo( projectNum, {
			y: -150
		}, {
			y: 150,
			ease: "linear",
			duration: 3
		});

		//	Image
		parallax_tl.from( projectImage, {
			opacity: 0,
			filter: "blur(8px)",
			duration: 1
		}, "-=2.5" );

		//	Description
		parallax_tl.from( projectDesc.querySelectorAll('.word'), {
			opacity: 0,
			stagger: 0.02
		}, "-=2.5" );
	});
</script>

<div class="flex items-center justify-start h-[80svh] my-12 px-32" bind:this={projectElement}>
	<div class="project-number absolute" bind:this={projectNum}>{project.id}</div>
	<div class="relative w-2/5">
		<h2 class="font-bold text-9xl text-white leading-[6.5rem] tracking-[-0.6rem]">{project.name}</h2>
		<p class="description mt-8 text-lg text-white whitespace-pre-line" bind:this={projectDesc}>{project.desc}</p>
		<a class="bg-white/10 hover:bg-white/15 transition-colors text-white inline-block text-center uppercase tracking-widest font-bold text-sm rounded-full mt-8 py-4 w-full" href={project.href}>View Project</a>
	</div>
	<div class="flex items-center justify-center w-3/5 relative">
		<img class="" src={project.img} alt={project.name} bind:this={projectImage} />
	</div>
</div>

<style>

	.project-number {
		font-family: 'Druk Wide Trial';
		font-weight: 500;
		font-size: 50vw;
		margin-top: -0.1ch;
		margin-left: -37%;
		color: transparent;
		-webkit-text-stroke: 1px #ee2262;
		pointer-events: none;
	}

</style>