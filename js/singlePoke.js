const dexContainer = document.getElementById("pokedex")
//const dexleftcont  = document.getElementById("droite")
let urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id')


if (localStorage.getItem('myTeamArray') == null) {
    let dictionnary = []
    localStorage.setItem('myTeamArray', JSON.stringify(dictionnary))
}

async function getpokebyid() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();


        //console.log(data)

        dexContainer.innerHTML = "";
            dexContainer.innerHTML +=
                `<div id="gauche">
                    <div class="team_element slot1"></div>
                    <div class="team_element slot2"></div>
                    <div class="team_element slot3"></div>
                    <div class="team_element slot4"></div>
                    <div class="team_element slot5"></div>
                    <div class="team_element slot6"></div>
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
                            <p>Types </p>
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

        document.addEventListener('keyup', function(e) {
            if (e.key === 's') {
                document.addEventListener('keyup', function(e) {
                    if (e.key === 'h') {
                        document.addEventListener('keyup', function (e) {
                            if (e.key === 'i') {
                                document.addEventListener('keyup', function (e){
                                    if (e.key === 'n') {
                                        document.addEventListener('keyup', function (e){
                                            if (e.key === 'y'){
                                                imgPoke.classList.toggle('active')
                                                imgPokeShiny.classList.toggle('active')
                                                body.classList.toggle('bgbase')
                                                body.classList.toggle('bgshinny')
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                });
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
        drag()


        // clique = baston

        const messageMechant = document.getElementById('milieu')

        let i = 0

        imgPoke.addEventListener('click', function () {
            i++
            if (i == 5) {
                messageMechant.innerHTML +=
                    `<div id="message1" class="message">
                    <p>Sympa tes baskets, tu me les files ? :)<br> Sinon petit <span style="color:red;">${data.abilities[0].ability.name}</span> dans ta tronche</p>
                </div>`;
            }
            console.log(i)




        })




    } catch (error) {
        console.error(error);
    }
}
function drag() {
    const drag = document.getElementById("imgPoke");
    drag.draggable = true;

    drag.addEventListener("dragstart", dragbeg);
    let team = document.querySelectorAll(".team_element");
    for(let element of team){
        element.addEventListener("dragstart", dragbeg)
        element.addEventListener("dragover", autoriserDrop);
        element.addEventListener("drop", drop);
    }




    function dragbeg(event) {
        event.dataTransfer.setData("text", event.target.id);
    }
    function autoriserDrop(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }
    function drop(event) {
        event.preventDefault();
        const datapoke = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(datapoke));


        let pokeArray = localStorage.getItem('myTeamArray')
        let pokeArrayParse = JSON.parse(pokeArray)
        console.log(pokeArrayParse)

        pokeArrayParse.push(id)


        let pokeArrayString = JSON.stringify(pokeArrayParse)
        localStorage.setItem('myTeamArray', pokeArrayString)


        //let localId = localStorage.getItem('pokeId');
        console.log(localStorage)

    }
}
/*
function displayTeam() {
    let showarraypoke = localStorage.getItem("myTeamArray");
    let showarraypokeparse = JSON.parse(showarraypoke);
    let Teamdisplay1 = document.querySelectorAll(".team_element");
    console.log(showarraypokeparse)


    for (let i = 0; i < showarraypokeparse.length; i++) {

        var pic_poke = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ showarraypokeparse[i] +".png";
        let solopoke = document.createElement("img");
        Teamdisplay1.appendChild(solopoke)
        solopoke.src = pic_poke ;

        for (let i = 0; i < Teamdisplay1.length; i++) {
            Teamdisplay1.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Teamdisplay1[i]}.png"/>
            `
        }
    }

}
*/
const delBtn = document.getElementById('delBtn')

delBtn.addEventListener('click', function (){
    localStorage.clear()
    console.log(localStorage)
})
getpokebyid()













