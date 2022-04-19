// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
let futuros = [];
let hoy,eventos;

$(document).ready(function () {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
     url:"info.json"
   }).done(function(respuesta){

    //Guarda el resultado en variables
    hoy = respuesta.fechaActual
    eventos = respuesta.eventos

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    for (let i = 0; i < eventos.length; i++) {
      if(eventos[i].fecha > hoy){
        futuros.push(eventos[i])

      }
      
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    futuros = futuros.sort(function(x,y){
      if(y.fecha < x.fecha){
        return 1
      }
      return -1
    })

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlFuturos = ""

    //Recorre el arreglo y concatena el HTML para cada evento
    for (var a = 0;a < futuros.length;a++) {
      htmlFuturos+="<div class='card-body  text-center mx-auto '>";
      htmlFuturos+="<div class='card-body bg-light text-center mx-auto '>";
      htmlFuturos+="<h5 class='card-title text-primary'>";
      htmlFuturos+=futuros[a].nombre;
      htmlFuturos+="</h5>";
      htmlFuturos+="<p class='card-text  '>";
      htmlFuturos+=futuros[a].fecha + " - " +futuros[a].lugar + "</br>";
      htmlFuturos+=futuros[a].descripcion + "</br>";
      htmlFuturos+= "Invitados:  " + futuros[a].invitados ;
      htmlFuturos+="</p>";
     
      htmlFuturos+="<a href='detalle.html?id=";
      htmlFuturos+=futuros[a].id;
      htmlFuturos+="'";
      htmlFuturos+= "class='btn gradient-bg'>Ver Evento</a>";

      htmlFuturos+="</div>";
      htmlFuturos+="</div>";
    }

    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("proximos").innerHTML = htmlFuturos


  });

});
