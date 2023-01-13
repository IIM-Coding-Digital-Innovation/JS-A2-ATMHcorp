const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const pokeWrapperDiv = document.getElementById('divWrapper') 
let pokemons = []
let pokemonsUrl = []
const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
let nextUrl = ""
let prevUrl = ""

async function getAllPokeLinks(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        pokemons = data.results;

        nextUrl = data.next
        prevUrl = data.previous

        pokemons.forEach( item =>{
            pokemonsUrl.push(item.url)
        })

        pokemonsUrl.forEach(item =>{
            getEachPoke(item)
        })

        console.log(pokemonsUrl)
    } catch (error) {
        console.error(error);
    }
}
async function getEachPoke(url) {
    const response = await fetch(`${url}`);
    const data = await response.json();

    pokeWrapperDiv.innerHTML += `
    <a href="singlePoke.html?id=${data.id}" class="${data.types[0].type.name}">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png">
        <h3>${data.types[0].type.name}</h3>
        <p>${data.name}</p>
    </a>
    `

    

}

getAllPokeLinks(baseUrl)

prevBtn.addEventListener('click', function() {
    pokemons = []
    pokemonsUrl = []
    pokeWrapperDiv.innerHTML = ""
    getAllPokeLinks(prevUrl)
});

nextBtn.addEventListener('click', function() {
    pokemons = []
    pokemonsUrl = []
    pokeWrapperDiv.innerHTML = ""
    getAllPokeLinks(nextUrl)
});

console.log(pokemons)

