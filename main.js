document.getElementById("player").addEventListener("click", sumarPuntos)

let puntos = 0
tiempo = 60
necesarios = 100
function sumarPuntos(){
    puntos++
    document.getElementById("puntos").innerHTML = `Puntos: ` + puntos + "/100" + " --"
    let  nºrandom = Math.round(Math.random()*850)
    let  nºrandom2 = Math.round(Math.random()*850)
    document.getElementById("player").style.margin = nºrandom +"px"
    document.getElementById("player").style.marginLeft = nºrandom2 +"px"
    if(puntos == necesarios){
        alert("has ganado el juego")
    }
    

    
}
function restartiempo(){
    tiempo--
    document.getElementById("tiempo").innerHTML = "Tiempo : " + tiempo 
    if(tiempo == 0){
        alert(`se acabo el tiempo, tus puntos son: ${puntos}`)
        tiempo = 60
        clearInterval(restartiempo,1000)
    } 
    
    
    
}

setInterval(restartiempo,1000)

