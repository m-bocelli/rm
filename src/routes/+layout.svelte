<script>
	import '../styles.css';
</script>

<div class="app">
	<main><slot /></main>
	<footer>footer things</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		align-items: center;
	}
</style>
