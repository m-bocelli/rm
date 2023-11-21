<script>
    import Card from "../../components/Card.svelte";

    const character = {id: 1, name: 'Mikey', rarity: 99, status: 'Dead', gender: 'Male', type: 'Human', origin: 'PA'};
</script>

<h1>library</h1>

<main>
    <Card char={character}></Card>
</main>