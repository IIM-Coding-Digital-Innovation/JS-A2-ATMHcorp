const dexContainer = document.getElementById("pokedex")
//const dexleftcont  = document.getElementById("droite")
//const idpoke = url.searchParams.get("idpoke");
async function getpokebyid() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/6`);
        const data = await response.json();


        console.log(data)

        dexContainer.innerHTML = "";
            dexContainer.innerHTML +=
                `<div id="gauche">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div id="milieu">
                    <div id="haut">
                                <h2>${data.name}</h2>
                        </div>
                        <div id="divImg">
                            <img id="imgPoke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
                            <img id="imgPokeShiny"  class="active" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png" alt="${data.name}">
                        </div>
                        <div id="bas">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> 
                </div>
                <div id="droite">
                    <div id="infos">
                        <div id="types">
                            <h2>Types :</h2>
                            <div id="type">
                            
                            </div>
                        </div>
                        <div id="aspects">
                            
                        </div>
                    </div>
                </div>`;
        const infoContainer = document.getElementById("type")

        for (const type of data.types) {
            infoContainer.innerHTML +=
                `<p>${type.type.name}</p>`;
        }

        const aspectsContainer = document.getElementById("aspects")

        for (const stat of data.stats) {
            aspectsContainer.innerHTML +=
                `<div>
                    <p id="statname">${stat.stat.name}</p>
                    <p id="statstat">${stat.base_stat}</p>
                </div>`;
        }





        // SHINY


        const imgPoke = document.getElementById('imgPoke');
        const imgPokeShiny = document.getElementById('imgPokeShiny');


        window.addEventListener("keyup", function(event) {
            if (event.key == 's') {
                imgPoke.classList.add('active')
                imgPokeShiny.classList.remove('active')
            }   else if (event.key == 'n') {
                imgPokeShiny.classList.add('active')
                imgPoke.classList.remove('active')
            }
        });


    } catch (error) {
        dexContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

getpokebyid()







