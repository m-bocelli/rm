<script>
    import { goto } from '$app/navigation';
	import CardList from '../../components/CardList.svelte';

    export let data;
    $: ({ cards, pageNum, pageSize } = data);

    let searchTerm = '';

	function handleSearch(e) {
		const target = e.target;
		searchTerm = target.value;
		fetch(`/api/searchCards?searchTerm=${searchTerm}`)
			.then((res) => res.json())
			.then((data) => {
				cards = data;
			});
	}

    function paginate(page) {
        goto(`?page=${page}`);
    }
</script>

<h1>library</h1>

<div class="search">
    <input type="search" value={searchTerm} placeholder="search..." on:keyup={handleSearch}>
    <button type="submit">find</button>
</div>

<CardList cards={cards}/>

<div class="page-control">
    <button on:click={() => paginate(--pageNum)}>prev</button>
    <div>page {pageNum}</div>
    <button on:click={() => paginate(++pageNum)}>next</button>
</div>

<style>
    .search {
        display: flex;
    }

    input {
        font-family: var(--fonts);
        border: none;
        height: 2rem;
        background-color: rgb(181, 255, 230);
        text-align: center;
    }

    button {
        background-color: var(--color-links);
        color: white;
        font-family: var(--fonts);
        cursor: pointer;
        border-radius: 0;
        transition: font-size 250ms;
    }

    button:hover {
        font-size: 16px;
    }
</style>