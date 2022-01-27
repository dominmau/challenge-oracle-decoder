var palabraFraseCopiar = document.querySelector("#btn-copy");


palabraFraseCopiar.addEventListener("click", function(event){
    event.preventDefault();
    fmensaje.mensaje.select();  
    
    var mensajeCapturado = capturarMensaje();   

    navigator.clipboard.writeText(mensajeCapturado);   
});