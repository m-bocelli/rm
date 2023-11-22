<script>
    import Card from "../../components/Card.svelte";

    export let data;
    $: ({ cards } = data)
</script>

<h1>library</h1>

{#each cards as card}
    <h2>{card.name}</h2>
{/each}