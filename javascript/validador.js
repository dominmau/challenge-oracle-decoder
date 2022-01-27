/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var textoExpresionRegular = "^[a-z ]+$";   
var arregloTexto = [];   
var arregloValidacion = [];  

var texto = document.querySelector("#texto");
var mensaje = document.querySelector("#msg");


function validador(campo){
   
    if(campo.match(textoExpresionRegular) != null){
        for(var i = 0; i < campo.length; i++){
            // Se agrega los carácteres validados 
            arregloTexto.push(campo.substring(i,i+1));
        }

        return arregloTexto;
    }
}


function capturarTexto(){
    var form = document.querySelector("#form-texto");
    var msg = document.querySelector("#form-mensaje");
    var campoTexto = form.texto.value;  
    var campoMensaje = msg.mensaje.value; 

    if(campoMensaje != " " && campoTexto != " "){
        arregloValidacion = validador(campoTexto); 
        return arregloValidacion;
    }

    if(campoTexto != " " && campoMensaje == " "){
        arregloValidacion = validador(campoTexto);  
        return arregloValidacion;
    }
}
