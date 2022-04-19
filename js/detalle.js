// Hemos omitido los acentos en los comentarios por compatibilidad
var urlId,id,mostrar;
var peticion= new XMLHttpRequest();
var evento = [];
var eventos = [];
var dato;


$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  urlId = location.href;
  console.log(urlId)
  id = parseInt(urlId.slice(urlId.length-1,urlId.length));

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url:"info.json"
  }).done(function(respuesta){

    

    //Guarda el resultado en una variable
    
    eventos = respuesta.eventos;

    //Busca el elemento en el arreglo
    for (var a = 0; a < eventos.length; a++) {
      if(eventos[a].id == id){
        evento.push(eventos[a]);

      }
      
    }

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlEvento = "";

    for(var i=0;i<evento.length;i++){
      htmlEvento+="<div class=' card mx-auto p-3'  >";
      htmlEvento+="<div class='card-body bg-light text-center  '>";

      htmlEvento+="<h5 class='card-title text-primary'>";
      htmlEvento+= evento[i].nombre;
      htmlEvento+="</h5>";
      htmlEvento+="<p class='card-text'>";
      htmlEvento+= "Fecha:  " + evento[i].fecha + "</br>" ;
      htmlEvento+=evento[i].descripcion + "</br>";
      htmlEvento+= "Lugar:  " + evento[i].lugar + "</br>";
      htmlEvento+= "Invitados:  " + evento[i].invitados + "</br>" ;
      htmlEvento+= "Precio:  " + evento[i].precio + "</br>";
      htmlEvento+="</p>";
      
      htmlEvento+="</div>";
      htmlEvento+="</div>";
      
    
    }


    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML=htmlEvento;

  });

});
