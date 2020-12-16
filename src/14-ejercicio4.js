"use strict";

/*
Mostrar todos los números impares introducidos entre dos números.
*/

let number1 = parseInt(prompt("Give me a number"));
let number2 = parseInt(prompt("Give me another number"));

while (number1 < number2) {
  number1++;
  if (number1 % 2 !== 0) {
    document.write("El número " + number1 + " es impar. <br>");
  }
}

while (number2 < number1) {
  number1--;
  if (number1 % 2 !== 0) {
    document.write("El número " + number1 + " es impar. <br>");
  }
}
