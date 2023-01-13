var storeteam = JSON.parse(localStorage.getItem("team_content"));

console.log(storeteam)

for(var i=0;i<storeteam.length;i++){
    var node = storeteam[i].cloneNode(true);
    document.getElementById("gouzi").appendChild(node);
}

