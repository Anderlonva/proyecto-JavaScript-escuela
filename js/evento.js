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
      htmlFuturos += `
         ${futuros[a].nombre}
         ${futuros[a].fecha} - ${futuros[a].lugar}
         ${futuros[a].descripcion}
         Costo: ${futuros[a].precio} 
        `
    }

    //Modifica el DOM agregando el html generado dentro del div con id=evento

    
  });

});

document.getElementById("evento").addEventListener("click", function(){

  var htmlEvento1 = ""
  
  htmlEvento1 += `
  ${futuros[0].nombre}
   ${futuros[0].fecha}
   ${futuros[0].descripcion}
   ${futuros[0].lugar}
   ${futuros[0].invitados}
   ${futuros[0].precio}
  `
 document.getElementById("evento").innerText = htmlEvento1



})


/*
    let eventoFuturos1 = getElementById("botonevento1")
eventoFuturos1.addEventListener("click", evento1)

function evento1(){
  
  var htmlEvento1 = ""
  
  htmlEvento1 += `
  ${futuros[0].nombre}
   ${futuros[0].fecha}
   ${futuros[0].descripcion}
   ${futuros[0].lugar}
   ${futuros[0].invitados}
   ${futuros[0].precio}
  `
 document.getElementById("evento").innerText = htmlEvento1
}
*/