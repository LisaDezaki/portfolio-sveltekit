<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faBehance, faBluesky, faDiscord, faDribbble, faGithubAlt, faLetterboxd, faLinkedin, faRedditAlien, faSignalMessenger, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

	let {
		class: className = '',
		links = {}
	} = $props();

</script>

<div class="{className}">
	{#if links.behance}
		<a class="social-link" href={links.behance.toString()} aria-label="Behance">
			<FontAwesomeIcon icon={faBehance} />
		</a>
	{/if}
	{#if links.bluesky}
		<a class="social-link" href={links.bluesky.toString()} aria-label="BlueSky">
			<FontAwesomeIcon icon={faBluesky} />
		</a>
	{/if}
	{#if links.discord}
		<a class="social-link" href={links.discord.toString()} aria-label="Discord">
			<FontAwesomeIcon icon={faDiscord} />
		</a>
	{/if}
	{#if links.dribbble}
		<a class="social-link" href={links.dribbble.toString()} aria-label="Dribbble">
			<FontAwesomeIcon icon={faDribbble} />
		</a>
	{/if}
	{#if links.github}
		<a class="social-link" href={links.github.toString()} aria-label="GitHub">
			<FontAwesomeIcon icon={faGithubAlt} />
		</a>
	{/if}
	{#if links.linkedin}
		<a class="social-link" href={links.linkedin.toString()} aria-label="LinkedIn">
			<FontAwesomeIcon icon={faLinkedin} />
		</a>
	{/if}
	{#if links.reddit}
		<a class="social-link" href={links.reddit.toString()} aria-label="Reddit">
			<FontAwesomeIcon icon={faRedditAlien} />
		</a>
	{/if}
	{#if links.signal}
		<a class="social-link" href={links.signal.toString()} aria-label="Signal">
			<FontAwesomeIcon icon={faSignalMessenger} />
		</a>
	{/if}
	{#if links.telegram}
		<a class="social-link" href={links.telegram.toString()} aria-label="Telegram">
			<FontAwesomeIcon icon={faTelegram} />
		</a>
	{/if}
	{#if links.twitter}
		<a class="social-link" href={links.twitter.toString()} aria-label="Twitter">
			<FontAwesomeIcon icon={faXTwitter} />
		</a>
	{/if}
	{#if links.letterboxd}
		<a class="social-link" href={links.letterboxd.toString()} aria-label="Letterboxd">
			<FontAwesomeIcon icon={faLetterboxd} />
		</a>
	{/if}

</div>

<style>
	.social-link:hover {
		transform: scale(1.2);
	}
</style>
