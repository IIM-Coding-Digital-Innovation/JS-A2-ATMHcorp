const dexContainer = document.getElementById("pokedex")
//const dexleftcont  = document.getElementById("droite")
var urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id')

async function getpokebyid() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
                </div>
                <div id="droite"  >
                    <div id="infos" >
                        <p>Numéro : <span> ${data.id}</span></p>
                        <div id="types" >
                            <p>Types :</p>
                            <div id="type">
                            
                            </div>
                        </div>
                        <p>Poids : <span>${data.weight}</span></p>
                        <p>Compétences</p>
                        <div id="competences">
                        
                        </div>
                        <div class="btn">
                            <button class="btnnext"></button>
                            <button  id="btn1" class="btnprev"></button>
                        </div>
                    </div>
                    <div id="stats" class="active">
                        <div id="aspects">
                            
                        </div>
                        <div class="btn">
                            <button id="btn2" class="btnprev"></button>
                            <button class="btnnext"></button>
                        </div>
                    </div>
                </div>`;
        const infoContainer = document.getElementById("type")

        for (const type of data.types) {
            infoContainer.innerHTML +=
                `<p>${type.type.name}</p>`;
        }

        const competencesContainer = document.getElementById("competences")

        for (const abilitie of data.abilities) {
            competencesContainer.innerHTML +=
                `<p>${abilitie.ability.name}</p>`;
        }

        const aspectsContainer = document.getElementById("aspects")

        for (const stat of data.stats) {
            aspectsContainer.innerHTML +=
                `<div>
                    <p id="statname">${stat.stat.name}</p>
                    <p id="statstat"><span>${stat.base_stat}</span></p>
                </div>`;
        }





        // SHINY


        const imgPoke = document.getElementById('imgPoke');
        const imgPokeShiny = document.getElementById('imgPokeShiny');
        const body = document.getElementById('body')


        window.addEventListener("keyup", function(event) {
            if (event.key == 's') {
                imgPoke.classList.add('active')
                imgPokeShiny.classList.remove('active')
                body.classList.remove('bgbase')
                body.classList.add('bgshinny')
            }   else if (event.key == 'n') {
                imgPokeShiny.classList.add('active')
                imgPoke.classList.remove('active')
                body.classList.add('bgbase')
                body.classList.remove('bgshinny')
            }
        });

        // btn

        const btn1 = document.getElementById('btn1')
        const btn2 = document.getElementById('btn2')
        let info = document.getElementById('infos')
        let stats = document.getElementById('stats')

        btn1.addEventListener('click', function (){
            info.classList.toggle('active');
            stats.classList.toggle('active');
        })

        btn2.addEventListener('click', function (){
            info.classList.toggle('active');
            stats.classList.toggle('active');
        })


    } catch (error) {
        dexContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

getpokebyid()







