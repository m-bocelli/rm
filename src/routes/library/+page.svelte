<script>
    import Card from "../../components/Card.svelte";

    export let data;
    $: ({ cards } = data)
</script>

<h1>library</h1>

{#each cards as card}
    <a href="/library/{card.id}" data-sveltekit-preload-data>{card.name}</a>
{/each}