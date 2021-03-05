"use strict";

// hay que hacer un programa que nos pida dos números
// nos tiene que decir cuál es el mayor, el menor y si son iguales

// PLUS: si los números son menores de 0 o no son números,
// tenemos que introducir otro dato!

var number1 = parseInt(prompt("Introduce el numero1"));
var number2 = parseInt(prompt("Introduce el numero2"));

while (number1 <= 0 || isNaN(number1)) {
  var number1 = parseInt(prompt("Introduce el numero1"));
}

while (number2 <= 0 || isNaN(number2)) {
  var number2 = parseInt(prompt("Introduce el numero2"));
}

if (number1 > number2) {
  console.log(number1 + " es el mayor.");
  console.log(number2 + " es el menor.");
} else {
  if (number2 > number1) {
    console.log(number2 + " es el mayor.");
    console.log(number1 + " es el menor.");
  } else {
    if (number2 == number1) {
      console.log("¡Los dos números que me has dado son iguales!");
    }
  }
}

// LOS TRUCOS DEL EJERCICIO //

// 1. parseInt
// por defecto, el prompt va a almacenar el resultado como un string, no como valor numérico!

// 2. el plus del ejercicio.
// tenemos que pedir que el usuario ingrese números si éstos son menores de cero o no válidos
// lo hacemos con while: siempre y cuando los números sean...
// tendremos que pedir al usuario que los escriba otra vez!
