/* ORDEN DE LETRAS A ENCRIPTAR:
e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat
*/

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para que afecte a multiples lineas o parrafo
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("imgMunheco").style.display = "none";
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("textarea").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para que afecte a multiples lineas o parrafo
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("imgMunheco").style.display = "none";
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("textarea").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function copiar(){
    var contenido = document.querySelector("#textarea");
    contenido.select();
    document.execCommand("copy")
    alert("¡se copio!")
}

