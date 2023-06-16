document.addEventListener('DOMContentLoaded', function() {
    // CONSTANTE RESULTADO INPUT
    const result = document.getElementById('result');
    // CONSTANTES BOTONES NUMEROS
    const sevenButton = document.getElementById('seven');
    const eightButton = document.getElementById('eight');
    const nineButton = document.getElementById('nine');
    const fourButton = document.getElementById('four');
    const fiveButton = document.getElementById('five');
    const sixButton = document.getElementById('six');
    const oneButton = document.getElementById('one');
    const twoButton = document.getElementById('two');
    const threeButton = document.getElementById('three');
    const zeroButton = document.getElementById('zero');
    // CONSTANTES BOTONES OPERADORES MATEMATICOS
    const subtractButton = document.getElementById('subtract');
    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const decimalButton = document.getElementById('decimal');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
  
    //EVENTOS PARA ESCUCHAR A LOS BOTONES CUANDO SE HACE CLIC E INGRESAR EL NUMERO EN EL INPUT 
    sevenButton.addEventListener('click', function() {
      result.value += '7';
    });
  
    eightButton.addEventListener('click', function() {
      result.value += '8';
    });
  
    nineButton.addEventListener('click', function() {
      result.value += '9';
    });
  
    fourButton.addEventListener('click', function() {
      result.value += '4';
    });
  
    fiveButton.addEventListener('click', function() {
      result.value += '5';
    });
  
    sixButton.addEventListener('click', function() {
      result.value += '6';
    });
  
    oneButton.addEventListener('click', function() {
      result.value += '1';
    });
  
    twoButton.addEventListener('click', function() {
      result.value += '2';
    });
  
    threeButton.addEventListener('click', function() {
      result.value += '3';
    });
  
    zeroButton.addEventListener('click', function() {
      result.value += '0';
    });
  
    subtractButton.addEventListener('click', function() {
      result.value += '-';
    });
  
    addButton.addEventListener('click', function() {
      result.value += '+';
    });
  
    multiplyButton.addEventListener('click', function() {
      result.value += '*';
    });
  
    divideButton.addEventListener('click', function() {
      result.value += '/';
    });
  
    decimalButton.addEventListener('click', function() {
      result.value += '.';
    });
  
    // FUNCION PARA CALCULAR EL RESULTADO DEL INPUT INGRESADO
    function calculateResult() {
      const expression = result.value;
      const resultValue = eval(expression);
      result.value = resultValue;
    }
    // CUANDO SE HACE CLIC EN EL BOTON = SE LLAMA A LA FUNCION
    equalsButton.addEventListener('click', calculateResult);

    // FUNCION PARA LIMPIAR RESULTADO
    function clearResult() {
        result.value = ''; // Limpia el campo de entrada
      }
    // LLAMANDO A LA FUNCION AL HACER CLIC EN EL BOTON C
    clearButton.addEventListener('click', clearResult);
});
  