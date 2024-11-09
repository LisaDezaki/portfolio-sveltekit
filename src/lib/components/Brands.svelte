<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faAws, faCss3Alt, faDocker, faFigma, faHtml5, faJs, faLaravel, faPython, faReact, faSass, faVuejs, faWebflow, faWordpressSimple } from "@fortawesome/free-brands-svg-icons";

	let {
		class: className = ''
	} = $props();
</script>

<div class="{className}">
	<FontAwesomeIcon icon={faFigma} />
	<FontAwesomeIcon icon={faHtml5} />
	<FontAwesomeIcon icon={faCss3Alt} />
	<!-- <FontAwesomeIcon icon={faSass} /> -->
	<FontAwesomeIcon icon={faJs} />
	<FontAwesomeIcon icon={faReact} />
	<FontAwesomeIcon icon={faVuejs} />
	<FontAwesomeIcon icon={faWordpressSimple} />
	<FontAwesomeIcon icon={faWebflow} />
	<FontAwesomeIcon icon={faLaravel} />
	<FontAwesomeIcon icon={faPython} />
	<FontAwesomeIcon icon={faDocker} />
	<FontAwesomeIcon icon={faAws} />
</div>

