
// Declarando funcion para cambiar color de fondo aleatoreo
function cambiarColor() {

    // Definiendo Matriz de colores
    const colores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'gray', 'brown', 'pink', 'purple', 'cyan', 'magenta', 'beige', 'bisque', 'coral', 'crimson', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange'];

    
    // Selecciona un color aleatorio de la matriz de colores
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    // Cambia el color de fondo del cuerpo del documento al color aleatorio seleccionado
    document.body.style.backgroundColor = colorAleatorio;
  }