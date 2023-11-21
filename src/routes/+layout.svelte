<script>
	import '../styles.css';
</script>

<nav>
	<div><a href="/">home</a></div>
	<div><a href="/market">market</a></div>
	<div><a href="/library" data-sveltekit-preload-data>library</a></div>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
		width: 100vw;
	}

	nav div, a {
		padding: 1rem;
		text-decoration: none;
		color: var(--color-links);
		font-weight: bolder;
		transition-property: color font-size;
		transition-duration: 500ms;
	}

	a:hover {
		color: black;
		font-size: larger;
		box-shadow: 10px 10px black;
	}
</style>

