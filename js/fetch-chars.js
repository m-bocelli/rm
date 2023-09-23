console.log("before fetch");

const fetch_chars = async () => {
    let chars = await fetch('https://rickandmortyapi.com/api/character', {method: 'GET'})
        .then((res) => {
            console.log('Fetch successful')
            return res.json()
        })
        .then(chars => console.log(chars))
        .catch(err => console.log(`Failed to fetch RM chars ${err}`));
}

console.log("after fetch");
