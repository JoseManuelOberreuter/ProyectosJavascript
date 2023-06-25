function validarPassword() {
    var password = document.getElementById("password").value;

    // Validaciones de contraseña
    if (password.length < 8) {
      document.getElementById("mensaje").innerHTML = "La contraseña debe tener al menos 8 caracteres.";
    } else if (!/[a-z]/.test(password)) {
      document.getElementById("mensaje").innerHTML = "La contraseña debe contener al menos una letra minúscula.";
    } else if (!/[A-Z]/.test(password)) {
      document.getElementById("mensaje").innerHTML = "La contraseña debe contener al menos una letra mayúscula.";
    } else if (!/[0-9]/.test(password)) {
      document.getElementById("mensaje").innerHTML = "La contraseña debe contener al menos un número.";
    } else {
      document.getElementById("mensaje").innerHTML = "La contraseña es válida.";
      document.getElementById("mensaje").classList.remove("error");
    }
  }