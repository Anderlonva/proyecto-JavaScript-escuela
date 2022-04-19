// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
let pasados = [];
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

    //Clasifica los eventos segun la fecha actual del JSON

    //Ordena los eventos futuros segun la fecha (los mas cercanos primero)
      for (let i = 0; i < eventos.length; i++) {
        if(eventos[i].fecha > hoy){
          futuros.push(eventos[i])

        }
        
      }

      futuros = futuros.sort(function(x,y){
        if(y.fecha < x.fecha){
          return 1
        }
        return -1
      })

    //Extrae solo dos eventos
      console.log(futuros)
      

    //Ordena los eventos pasados segun la fecha (los mas cercanos primero)
    for (let i = 0; i < eventos.length; i++) {
      if(eventos[i].fecha < hoy){
        pasados.push(eventos[i])

      }
      
    }

    pasados = pasados.sort(function(x,y){
      if(x.fecha < y.fecha){
        return 1
      }
      return -1
    })

    //Extrae solo dos eventos
    console.log(pasados)

    //Crea un string que contenga el HTML que describe el detalle del evento
      var htmlFuturos = ""
     
    //Recorre el arreglo y concatena el HTML para cada evento
  
    for(var i=0;i<2;i++){
      htmlFuturos+="<div class='card-body  text-center mx-auto '>";
      htmlFuturos+="<div class='card-body bg-light text-center mx-auto '>";
      htmlFuturos+="<h5 class='card-title text-primary'>";
      htmlFuturos+=futuros[i].nombre;
      htmlFuturos+="</h5>";
      htmlFuturos+="<p class='card-text'>";
      htmlFuturos+=futuros[i].fecha;
      htmlFuturos+="</p>";
      htmlFuturos+="<p class='card-text'>";
      htmlFuturos+=futuros[i].descripcion;
      htmlFuturos+="</p>";
      htmlFuturos+="<a href='detalle.html?id=";
      htmlFuturos+=futuros[i].id;
      htmlFuturos+="'";
    
      htmlFuturos+= "class='btn gradient-bg '>Ver Evento</a>";
      htmlFuturos+="</div>";
      htmlFuturos+="</div>";
      
    
    }

    document.getElementById("proximos").innerHTML = htmlFuturos
  
    

    //Crea un string que contenga el HTML que describe el detalle del evento
      var htmlPasados = ""  ////no tocar pasados hasta que resuelva como poner futuros primero//////7

    //Recorre el arreglo y concatena el HTML para cada evento

   for(var i=0;i<2;i++){
      htmlPasados+="<div class='card-body  text-center mx-auto '>";
      htmlPasados+="<div class='card-body bg-light text-center mx-auto '>";
      htmlPasados+="<h5 class='card-title text-primary'>";
      htmlPasados+=pasados[i].nombre;
      htmlPasados+="</h5>";
      htmlPasados+="<p class='card-text'>";
      htmlPasados+=pasados[i].fecha;
      htmlPasados+="</p>";
      htmlPasados+="<p class='card-text'>";
      htmlPasados+=pasados[i].descripcion;
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
