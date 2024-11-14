function pkmnAttack

function startGame() {
    let pkmnSelectedPlayer = document.getElementById("buttonpkmnselected")
pkmnSelectedPlayer.addEventListener("click", selectedPmknByPlayer)

    let buttonFireAttack=document.getElementById("fireattack")
    buttonFireAttack.addEventListener("click", )

    let buttonPlantAttack=document.getElementById("planattack")
    buttonPlantAttack.addEventListener("click", )

    let buttonWaterAttack=document.getElementById("waterattack")
    buttonWaterAttack.addEventListener("click", )
}

window.addEventListener("load", startGame)

function selectedPmknByPlayer() {
   
    let pkmnPirtacor=document.getElementById("pirtacor")
    let pkmnInteipe=document.getElementById("inteipe")
    let pkmnAlubive=document.getElementById("alubive")
    let pkmnRegilaise=document.getElementById("regilaise")
    let pkmnNapaler=document.getElementById("napaler")
    let pkmnUnilat=document.getElementById("unilat")
    let spanPkmnPlayer=document.getElementById("pkmnnameplayer")

    if(pkmnPirtacor.checked){
        spanPkmnPlayer.innerHTML="🔥Pirtacor🔥"
    } else if(pkmnInteipe.checked){
        spanPkmnPlayer.innerHTML="🌿Inteipe🌿"
    } else if(pkmnAlubive.checked){
        spanPkmnPlayer.innerHTML="💧Alubive💧"
    } else if(pkmnRegilaise.checked){
        spanPkmnPlayer.innerHTML="Regilaise🔥🌿"
    } else if(pkmnNapaler.checked){
        spanPkmnsPlayer.innerHTML="Napaler🌿💧"
    } else if(pkmnUnilat.checked){
        spanPkmnPlayer.innerHTML="Unilat💧🔥"
    } else {
        alert("You need choose a PKMN")
    } selectedPmknByOpponent()
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectedPmknByOpponent(){
    let pkmnRandom = random(1, 6)
    let spanPkmnOpponent=document.getElementById("pkmnnameopponent")    
    
    if (pkmnRandom == 1) {
        spanPkmnOpponent.innerHTML="🔥Pirtacor🔥"
    } else if (pkmnRandom == 2) {
        spanPkmnOpponent.innerHTML="🌿Inteipe🌿"
    } else if (pkmnRandom == 3) {
        spanPkmnOpponent.innerHTML="💧Alubive💧"
    } else if (pkmnRandom == 4){
        spanPkmnOpponent.innerHTML="Regilaise🔥🌿"
    } else if (pkmnRandom == 5) {
        spanPkmnOpponent.innerHTML="Napaler🌿💧"
    } else if (pkmnRandom == 6) {
        spanPkmnOpponent.innerHTML="Unilat💧🔥"
    } else {
        alert("Opponent need choose a PKMN")
    }    
}

function fireAttack