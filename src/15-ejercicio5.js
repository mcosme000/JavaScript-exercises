"use strict";

/*
programa que muestre todos los números divisores de un número introducido en el prompt
*/

var number1 = parseInt(prompt("Number1"));

for (var i = 1; i < number1; i++) {
  if (number1 % i == 0) {
    console.log(i + " es divisor de " + number1);
  }
}

/* Un número es divisor cuando al estar divido da como resultado 0 */
