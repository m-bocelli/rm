<script>
	import { onMount } from "svelte";
	import Card from "../components/Card.svelte";

	let all_chars = null;
	
	onMount(async () => {
		await fetch('http://localhost:2001/library')
		.then((res) => res.json())
		.then((data) => all_chars = data)
		.catch((err) => `Get library error: ${err.message}`);
	})

</script>

<svelte:head>
	<title>home</title>
</svelte:head>

<section>
	<h1>Library</h1>
	<div class="library_container">
		{#if all_chars}
			{#each all_chars as char}
				{#if char}
					<Card char={char}/>
				{/if}
			{/each}
		{:else}
			<h3>loading...</h3>
		{/if}
	</div>
</section>

<style>
	.library_container {
		display: flex;
		float: left;
		overflow-x: scroll;
	}
</style>