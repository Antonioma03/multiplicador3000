jugador1=localStorage.getItem("jugador1");
jugador2=localStorage.getItem("jugador2");
puntosjugador1=0;
puntosjugador2=0;
document.getElementById("nombrejugador1").innerHTML=jugador1+":";
document.getElementById("nombrejugador2").innerHTML=jugador2+":";
document.getElementById("puntosjugador1").innerHTML=puntosjugador1;
document.getElementById("puntosjugador2").innerHTML=puntosjugador2;
turnodepregunta="jugador1";
turnoderespuesta="jugador2";
document.getElementById("turnodepregunta").innerHTML=jugador1;
document.getElementById("turnoderespuesta").innerHTML=jugador2;

function embiar(){

    numero1=document.getElementById("numero1").value;
    numero2=document.getElementById("numero2").value;
    respuesta=parseInt(numero1)*parseInt(numero2);
palabraelegidaporeljugador=
"<h4 id='palabra_mostrada'> Palabra. " + numero1 + "x"+ numero2 +"</h4>";
respuestaelegidaporeljugador=
"<br> Respuesta : <input type='text' id='respuesta_del_jugador'>";
botoncomprobar=
"<br><br><button id='comprobar' onclick='comprobar()'>Comprobar</button>";
resultadoturno=
palabraelegidaporeljugador+respuestaelegidaporeljugador+botoncomprobar;
document.getElementById("salida").innerHTML=resultadoturno;
document.getElementById("numero1").value="";
document.getElementById("numero2").value="";

}
function comprobar(){
obtenerrespuesta=document.getElementById("respuesta_del_jugador").value;
respuesta=obtenerrespuesta.toLowerCase();
if(respuesta==palabra){
    if(turnoderespuesta=="jugador1")
    {
        puntosjugador1=puntosjugador1+1;
        document.getElementById("puntosjugador1").innerHTML=puntosjugador1;

    }
    else{
        puntosjugador2=puntosjugador2+1;
        document.getElementById("puntosjugador2").innerHTML=puntosjugador2;

    }
    
}
if(turnodepregunta=="jugador1"){
    turnodepregunta="jugador2";
    document.getElementById("turnodepregunta").innerHTML=jugador2;
}
else{
    turnodepregunta="jugador1";
    document.getElementById("turnodepregunta").innerHTML=jugador1;
}
if(turnoderespuesta=="jugador1"){
    turnoderespuesta="jugador2";
    document.getElementById("turnoderespuesta").innerHTML=jugador2;
}
else{
    turnoderespuesta="jugador1";
    document.getElementById("turnoderespuesta").innerHTML=jugador1;
}
document.getElementById("salida").innerHTML="";
}
