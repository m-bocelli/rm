<script>
	import '../styles.css';
</script>

<div class="app">
	<header>header</header>
	<main><slot /></main>
	<footer>footer</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		align-items: center;
	}
</style>
