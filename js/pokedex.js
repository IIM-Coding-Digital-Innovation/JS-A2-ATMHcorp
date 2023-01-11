const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const pokeWrapperDiv = document.getElementById('divWrapper') 
let pokemons = []
const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
let nextUrl = ""
let prevUrl = ""

async function getAllPokeLinks(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        pokemons = data.results;
        nextUrl = data.next
        prevUrl = data.previous
        document.dispatchEvent(new Event('pokemonsFetched'));
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener('pokemonsFetched', displayPokemons);

function displayPokemons() {
    pokeWrapperDiv.innerHTML = ""
    pokemons.forEach( pokemon =>{
        pokeWrapperDiv.innerHTML += `
        <li>${pokemon.name}</li>`
    })}

getAllPokeLinks(baseUrl)

prevBtn.addEventListener('click', function() {
    pokemons = []
    getAllPokeLinks(prevUrl)
});

nextBtn.addEventListener('click', function() {
    pokemons = []
    getAllPokeLinks(nextUrl)
});