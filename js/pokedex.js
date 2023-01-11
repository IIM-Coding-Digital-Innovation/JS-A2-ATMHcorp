const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

    const pokeWrapperDiv = document.getElementById('divWrapper') 


let pokemons = []
const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
let nextUrl = ""
let prevUrl = ""


async function getAllPoke(link) {
    try {
        const response = await fetch(`${link}`);
        const data = await response.json();
        
        pokemons.push(data);

    } catch (error) {
        console.error(error);
    }
}



console.log(pokemons)

    async function getAllPokeLinks(url) {
        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            

            data.results.forEach(element => {
                getAllPoke(element.url)

            });
            //console.log(data.next)
            nextUrl = data.next
            prevUrl = data.previous
            
        } catch (error) {
            console.error(error);
        }
    }

    getAllPokeLinks(baseUrl)



    function displayPokemons() {
        console.log(pokemons)
        pokemons.forEach( pokemon =>{
            pokeWrapperDiv.innerHTML = `
            <p>${pokemon.name}</p>`
        })
    }
    
    
    
    prevBtn.addEventListener('click', function() {
        pokemons.splice(0, 150,)
        getAllPokeLinks(prevUrl)
        displayPokemons();
        
    });
    
    nextBtn.addEventListener('click', function() {
        pokemons.splice(0, 150,)
        getAllPokeLinks(nextUrl)
        displayPokemons();
    });