<script>
    export let data;
    $:({ card } = data);
</script>

<h1>{card.name}</h1>

<img src={card.image} alt="image of {card.name}">

<main>
    <div>{card.status}</div>
</main>
    
<style>
    img {
        border-radius: 10px;
        margin: 1rem;
    }
</style>