<script>
    export let cards;
</script>

{#each cards as card}
    <a href="/library/card/{card.id}" data-sveltekit-preload-data>{card.name}</a>
{/each}