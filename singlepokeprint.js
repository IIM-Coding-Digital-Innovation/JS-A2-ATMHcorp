const dexContainer = document.getElementById("milieu")
const dexleftcont  = document.getElementById("droite")
const idpoke = url.searchParams.get("idpoke");
async function getpokebyid(idpoke) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idpoke}`);
        const data = await response.json();

        dexContainer.innerHTML = "";
        for (const pokemon of data.results) {
            dexContainer.innerHTML +=
                `<h2>${pokemon.name}</h2>">
                <div class="search-card">
                        
                </div>
                <div>
                </div>
`;
        }
    } catch (error) {
        dexContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

getpokebyid(genreId)