"use strict";

/* 
Tabla de multiplicar del número introducido
*/

do {
  var number = parseInt(prompt("Number"));
} while (number <= 0);
{
  for (var i = 0; i <= 10; i++) {
    var multi = number * i;
    console.log(number + " por " + i + ": " + multi);
  }
}
