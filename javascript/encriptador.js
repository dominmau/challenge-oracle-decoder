var palabraFraseEncriptar = document.querySelector("#btn-encriptar");

palabraFraseEncriptar.addEventListener("click", function(event){
    event.preventDefault();  

    var arregloEncriptacion = capturarTexto();  
    var nuevoTextoEncriptado = "";  

   
    if(arregloEncriptacion == null){ 
        agregarTexto("Texto no válido");
    }
    else{ 
        nuevoTextoEncriptado = intercambiarCaracteres(arregloEncriptacion, arregloVocales, vocalesEncriptado);
        
        agregarTexto("");
    }
  
    mensaje.value = nuevoTextoEncriptado;
});