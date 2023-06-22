// Declarando funcion 
function generarContrasena() {
  // Obtiene el valor de la longitud de la contraseña ingresada por el usuario
  var longitud = document.getElementById("longitud").value;

  // Define una cadena de caracteres que se utilizarán para generar la contraseña
  var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Variable para almacenar la contraseña generada
  var contrasena = "";

  // Bucle que genera cada carácter de la contraseña
  for (var i = 0; i < longitud; i++) {

    // Genera un índice aleatorio para seleccionar un carácter de la cadena de caracteres
    /*
    Math.random() devuelve un número aleatorio decimal entre 0 y 1
    Al multiplicar este número por caracteres.length, obtenemos un 
    valor decimal que va desde 0 hasta caracteres.length - 1, ya que 
    Math.random() nunca alcanza el valor 1. Luego, Math.floor() se utiliza para redondear 
    el número decimal resultante hacia abajo al entero más cercano. Esto asegura que 
    obtengamos un número entero dentro del rango válido de índices para acceder a los 
    caracteres de la cadena caracteres.
    */ 
    var randomIndex = Math.floor(Math.random() * caracteres.length);

    // Obtiene el carácter correspondiente al índice aleatorio y lo agrega a la contraseña
    contrasena += caracteres.charAt(randomIndex);
  }

  // Asigna la contraseña generada al campo de texto "resultado" en la interfaz
  document.getElementById("resultado").value = contrasena;
}
