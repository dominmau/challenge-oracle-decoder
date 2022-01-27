var palabraFraseDesencriptar = document.querySelector("#btn-desencriptar");
var arregloCorregido = []; 


palabraFraseDesencriptar.addEventListener("click", function(event){
    event.preventDefault();  

    var arregloDesencriptacion = capturarTexto();  
    var nuevoTextoDesencriptado = "";  
    var acumulaTexto = "";  
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;

    
    if(arregloDesencriptacion == null){ 
        agregarTexto("Texto no válido");
    }
    else{  
        while(i < arregloDesencriptacion.length){   
            while(j < vocalesEncriptado.length){
                var vocalArregloEncriptado = vocalesEncriptado[j];  
                var vocalEncriptado = vocalArregloEncriptado.substring(k,k+1);  
                var interruptor = false;   
              
                if(arregloDesencriptacion[i] == vocalEncriptado){
                    i++;
                    k++;
                    acumulaTexto = acumulaTexto + vocalEncriptado; 
                   
                    if(vocalArregloEncriptado == acumulaTexto){  
                        j = 0;
                        k = 0;
                        interruptor = true;   
                        arregloCorregido[l] = acumulaTexto;  
                        acumulaTexto = "";
                        
                        if(i < arregloDesencriptacion.length){
                            l++;
                        }                       
                    }
                }
                else{   
                    j++;
                }                
            }
           
            if(interruptor == false){
                if(i < arregloDesencriptacion.length){
                    arregloCorregido[l] = arregloDesencriptacion[i];            
                    j = 0;  
                    i++;
                    l++;
                }                                     
            }       
        }


        nuevoTextoDesencriptado = intercambiarCaracteres(arregloCorregido, vocalesEncriptado, arregloVocales);
        
        agregarTexto("");
    }
  
    mensaje.value = nuevoTextoDesencriptado;
});
