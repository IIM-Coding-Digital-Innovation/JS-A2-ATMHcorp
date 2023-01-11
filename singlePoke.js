const dexContainer = document.getElementById("milieu")
//const dexleftcont  = document.getElementById("droite")
//const idpoke = url.searchParams.get("idpoke");
async function getpokebyid() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/6`);
        const data = await response.json();

        console.log(data)


        dexContainer.innerHTML = "";
            dexContainer.innerHTML +=
                `<div id="haut">
                        <h2>${data.name}</h2>
                </div>
                <div id="divImg">
                    <img id="imgPoke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
                </div>
                <div id="bas">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> `;

    } catch (error) {
        dexContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

getpokebyid()

// SHINY

