const dexContainer = document.getElementById("milieu");
const dexleftcont  = document.getElementById("gauche");

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
                <div id="divImg" ondragstart="dragStart(event)">
                    <img id="imgPoke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
                </div>
                <div id="bas">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> `;
        dexleftcont.innerHTML = "";
        dexleftcont.innerHTML +=
            `
            <div class="team_element"</div>
            <div class="team_element"></div>
            <div class="team_element"></div>
            <div class="team_element"></div>
            <div class="team_element"></div>
            <div class="team_element"></div> 
`;



            var drag = document.getElementById("divImg");
            drag.draggable = "true";
            drag.addEventListener("dragstart", dragbeg);
            var team = document.querySelectorAll(".team_element");
            for(let element of team){
                element.addEventListener("dragover", autoriserDrop);
                element.addEventListener("drop", drop);
            }



        function dragbeg(event) {
            event.dataTransfer.setData("team", event.target.id);
        }
        function autoriserDrop(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        }
        function drop(event) {
            event.preventDefault();
            var datapoke = event.dataTransfer.getData("team");
            event.target.appendChild(document.getElementById(datapoke));
            console.log(datapoke)
        }



    } catch (error) {
        dexContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

getpokebyid()

// SHINY

