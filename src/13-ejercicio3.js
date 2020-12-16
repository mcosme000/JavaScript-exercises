"use strict";

// Hacer un programa que muestre todos los números que hay
// entre dos números que va a introducir el usuario.

let number1 = parseInt(prompt("Type a number!"));
let number2 = parseInt(prompt("Type a second numer. "));

if (number1 > number2) {
  for (var i = number1 - 1; i >= number2 + 1; i--) {
    console.log(
      "Entre los números " + number1 + " y " + number2 + " están: " + i
    );
  }
} else {
  if (number1 < number2) {
    for (var i = number1 + 1; i <= number2 - 1; i++) {
      console.log(
        "Entre los números " + number1 + " y " + number2 + " están: " + i
      );
    }
  }
}
