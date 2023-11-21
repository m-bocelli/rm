<script>
    export let char;
</script>

<div class="card_container">
    <h1>{char.name}</h1>
    <img class="card_img" src={char.image} alt={`Picture of ${char.name}`}>
    <div class="card_details">
        <h2 class="card_rarity">{char.rarity}</h2>
        <p>{char.status}</p>
        <p>{`${char.gender} ${char.type}`}</p>
        <p>Origin: {char.origin}</p>
        <p>Status: {char.status}</p>
    </div>
</div>

<style>
    .card_container {
        border-radius: 10px;
        display: block;
        background-color: var(--color-text);
        color: #fff;
        margin: 1rem;
        padding: 1rem;
    }

    .card_img {
        border-radius: 10px;
    }
</style>