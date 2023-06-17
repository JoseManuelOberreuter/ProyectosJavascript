 // Array para almacenar las tareas
 var tasks = [];

 // Función para agregar una tarea
 function addTask() {
   var taskInput = document.getElementById("taskInput");
   var description = taskInput.value.trim();
   if (description !== "") {
     var task = { description: description, completed: false };
     tasks.push(task);
     taskInput.value = "";
     renderTasks();
   }
 }

 // Función para eliminar una tarea
 function deleteTask(index) {
   tasks.splice(index, 1);
   renderTasks();
 }

 // Función para marcar una tarea como completada
 function markTaskCompleted(index) {
   tasks[index].completed = true;
   renderTasks();
 }

// Función para renderizar las tareas en la lista
function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (tasks.length === 0) {

    // Verificar si no hay tareas
    var noTasksItem = document.createElement("li");
    noTasksItem.textContent = "No hay tareas pendientes.";
    taskList.appendChild(noTasksItem);
  } else {

    // Iterar sobre cada tarea en el array de tareas
    tasks.forEach(function (task, index) {
      var taskItem = document.createElement("li");

      // Crear un botón para eliminar la tarea
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.style.backgroundColor = '#E06469'


      // Asignar una función de eliminación a la tarea actual
      deleteButton.onclick = function () {
        deleteTask(index);
      };
      taskItem.appendChild(deleteButton);

      // Crear un botón para marcar la tarea como completada
      var completeButton = document.createElement("button");
      completeButton.textContent = "Completada";
      // Agregando estilos al boton
      completeButton.style.marginLeft = '5px'
      completeButton.style.backgroundColor = '#A0C49D'

      // Asignar una función de marca como completada a la tarea actual
      completeButton.onclick = function () {
        markTaskCompleted(index);
      };
      taskItem.appendChild(completeButton);

      // Crear un elemento de texto para mostrar la descripción de la tarea
      var taskText = document.createElement("span");
      taskText.textContent = task.description;
      taskText.style.marginLeft = "20px"

      if (task.completed) {
        
        // Agregar una clase CSS al elemento de texto para mostrar que la tarea está completada
        taskText.classList.add("completed");
      }

      // Agregar el elemento de texto a la tarea
      taskItem.appendChild(taskText);

      // Agregar la tarea completa a la lista de tareas
      taskList.appendChild(taskItem);
    });
  }
}



 // Renderizar las tareas iniciales
 renderTasks();