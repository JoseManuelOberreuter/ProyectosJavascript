// Define una variable para almacenar el tiempo restante en segundos
let tiempo = 300;

// Define una variable para almacenar el ID del intervalo
let intervalo;

// Crea un objeto Audio para reproducir el sonido de alarma
const sonido = new Audio('alarma.mp3');

// Define una función para actualizar el tiempo mostrado en la pantalla
function actualizarTiempo() {
  // Calcula los minutos y segundos restantes
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  
  // Actualiza el texto del elemento que muestra el tiempo restante
  document.getElementById('tiempo').textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

// Define una función para restar un minuto al tiempo restante
function restarMinuto() {
  // Resta 60 segundos al tiempo restante
  tiempo -= 60;
  
  // Asegura que el tiempo no sea negativo
  if (tiempo < 0) tiempo = 0;
  
  // Actualiza el tiempo mostrado en la pantalla
  actualizarTiempo();
}

// Define una función para sumar un minuto al tiempo restante
function sumarMinuto() {
  // Suma 60 segundos al tiempo restante
  tiempo += 60;
  
  // Actualiza el tiempo mostrado en la pantalla
  actualizarTiempo();
}

// Define una función para iniciar el temporizador
function iniciar() {
  // Detiene cualquier intervalo en ejecución
  clearInterval(intervalo);
  
  // Inicia un nuevo intervalo para decrementar el tiempo cada segundo
  intervalo = setInterval(() => {
    // Decrementa el tiempo restante en un segundo
    tiempo--;
    
    // Si el tiempo llega a cero, detiene el intervalo y reproduce el sonido de alarma
    if (tiempo <= 0) {
      clearInterval(intervalo);
      sonido.play();
    }
    
    // Actualiza el tiempo mostrado en la pantalla
    actualizarTiempo();
  }, 1000);
}

// Define una función para detener el temporizador
function detener() {
  // Detiene el intervalo en ejecución
  clearInterval(intervalo);
}

// Define una función para reiniciar el temporizador
function reiniciar() {
  // Detiene el intervalo en ejecución
  detener();
  
  // Restablece el tiempo restante a su valor inicial
  tiempo = 300;
  
  // Actualiza el tiempo mostrado en la pantalla
  actualizarTiempo();
}
