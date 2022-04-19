// Hemos omitido los acentos en los comentarios por compatibilidad
function limpiarErrores() {
  var errores = document.getElementsByClassName("text-danger");
  for (var i = 0; i < errores.length; i++) {
      errores[i].innerHTML = "";
  }
}


function validar(formulario) {

  limpiarErrores();

  //Expresion regular del correo
     
  var regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;


  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerText = " Este campo obligatorio";
    return false
  }

  if (!regexEmail.test(formulario.email.value)) {
      document.getElementById("errorEmail").innerText = "Campo invalido";
      return false
  }
  if (formulario.contrasena.value.length == 0 || formulario.contrasena.value.length < 7) {
       document.getElementById("errorContrasena").innerText = "Debe tener al menos 7 caracteres";
       return false
     
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
      document.getElementById("errorConfirmacion").innerText = "No coincide contraseña ";
     
      return false
  }

  if (formulario.tipo.value == -1) {
      document.getElementById("errorTipo").innerText = "Este campo obligatorio";
      return false
  }

 
  if (!formulario.acepto.checked) {
       document.getElementById("errorAcepto").innerText = "Este campo obligatorio";
      return false
  }

  alert("Registro Exitoso");

  return true;

}
