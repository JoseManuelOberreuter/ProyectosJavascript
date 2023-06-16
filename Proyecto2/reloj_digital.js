 // Definir función llamada updateTime
function updateTime() {
    // Crear una variable que representa la fecha y hora actuales
    var now = new Date();
    // Creando una variable con las horas de la fecha actual
    var hours = now.getHours();
    // Creando una variable con los minutos de la fecha actual
    var minutes = now.getMinutes();
    // Creando una variable con los segundos de la fecha actual
    var seconds = now.getSeconds();


    // Crear una cadena de texto que representa la hora formateada en el formato HH:MM:SS
    // La función padStart se utiliza para asegurar que cada componente tenga siempre dos dígitos
    var timeString = hours.toString().padStart(2, '0') + ':' +
                     minutes.toString().padStart(2, '0') + ':' +
                     seconds.toString().padStart(2, '0');
  
    // Obtener el elemento HTML con el ID "clock" y establecer su contenido de texto como la hora formateada
    document.getElementById('clock').textContent = timeString;
  }
  
// Ejecutar la función updateTime cada 1000 milisegundos (cada segundo) utilizando setInterval
// Esto asegura que el reloj se actualice constantemente
setInterval(updateTime, 1000);
  