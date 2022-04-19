//Define las variables que necesites
let pasados = [];
let hoy,eventos;

$(document).ready(function () {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
      url:"info.json"
    }).done(function(respuesta){

    //Guarda el resultado en variables
    hoy = respuesta.fechaActual;
    eventos = respuesta.eventos;

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    for (let i = 0; i < eventos.length; i++) {
      if(eventos[i].fecha < hoy){
        pasados.push(eventos[i])

      }
      
    }

    
    //Ordena los eventos segun la fecha (los mas recientes primero)
    pasados = pasados.sort(function(x,y){
      if(x.fecha < y.fecha){
        return 1
      }
      return -1
    })

    console.log(pasados)
    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlPasados = ""

    //Recorre el arreglo y concatena el HTML para cada evento

    for(var i=0;i<pasados.length;i++){
      htmlPasados+="<div class='card  text-center mx-auto mb-3 '>";
      htmlPasados+="<div class='card-body bg-light text-center mx-auto '>";
      htmlPasados+="<h5 class='card-title text-primary'>";
      htmlPasados+=pasados[i].nombre;
      htmlPasados+="</h5>";
      htmlPasados+="<p class='card-text'>";
      htmlPasados+=pasados[i].fecha + " - " + pasados[i].lugar  + "</br>";
      htmlPasados+=pasados[i].descripcion + "</br>";
      htmlPasados+= "Invitados:  " + pasados[i].invitados ;
      htmlPasados+="</p>";
      
      htmlPasados+="<a href='detalle.html?id=";
      htmlPasados+=pasados[i].id;
      htmlPasados+="'";
    
      htmlPasados+= "class='btn gradient-bg'>Ver Evento</a>";
      htmlPasados+="</div>";
      htmlPasados+="</div>";
      
    
    }
    //Modifica el DOM agregando el html generado

    document.getElementById("pasados").innerHTML = htmlPasados
  });

});
