
var arregloVocales = ["a", "e", "i", "o", "u"];   
var vocalesEncriptado = ["ai","enter","imes","ober","ufat"];  


function capturarMensaje(){
    var formMsg = document.querySelector("#form-mensaje");
    var campoMsg = formMsg.mensaje.value;  

    return campoMsg;
}


function intercambiarCaracteres(arregloRecibeCaracter, arregloCondicionCaracter, arregloCaracterAgregado){
    
    var i = 0;
    var textoAcumulador = "";  

    while(i < arregloRecibeCaracter.length){
   
        if(arregloRecibeCaracter[i] == arregloCondicionCaracter[0]){
            arregloRecibeCaracter[i] = arregloCaracterAgregado[0];
        }

        if(arregloRecibeCaracter[i] == arregloCondicionCaracter[1]){
            arregloRecibeCaracter[i] = arregloCaracterAgregado[1];
        }
 
        if(arregloRecibeCaracter[i] == arregloCondicionCaracter[2]){
            arregloRecibeCaracter[i] = arregloCaracterAgregado[2];
        }

        if(arregloRecibeCaracter[i] == arregloCondicionCaracter[3]){
            arregloRecibeCaracter[i] = arregloCaracterAgregado[3];
        }

        if(arregloRecibeCaracter[i] == arregloCondicionCaracter[4]){
            arregloRecibeCaracter[i] = arregloCaracterAgregado[4];
        }

    
        var textoAcumulador = textoAcumulador + arregloRecibeCaracter[i];

        i++;
    }

    return textoAcumulador;
}


function agregarTexto(nuevoTexto){
    texto.value = nuevoTexto;   
    texto.focus();
    arregloTexto = [];  
}