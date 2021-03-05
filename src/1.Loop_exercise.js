"use strict";

// - - -  PROBLEM #2 - - - //

/*
Use a loop to ask the user to type numbers. 
The loop will stop after the user types a number = 0 or a negative number. 
After the loop stops, show the following: 
--- El total de números introducidos
--- La suma de los números
--- La media de los números
*/

// if number < 0, ejecutamos suma().

var suma = 0;
var contador = 0;

/* ejecutamos un bloque do while. Con esto:
La condición es que el número > 0
Cuando número < 0, se ejecuta la suma. 
*/

do {
  var numero = parseInt(
    prompt("Introduce algunos números y al final un número negativo")
  );
  if (numero > 0) {
    contador = contador + 1;
    suma = suma + numero;
    var media = suma / contador;
  }
} while (numero > 0);
{
  // this is the code that will execute if the while condition doesn't match.
  document.write("Total numbers: " + contador + "<br>");
  document.write("La suma total de los números: " + suma + "<br>");
  document.write("La media de los números es: " + media + "<br>");
}

/* 
We need to add a condition if number > 0 inside the do loop
because we don't want to count 0 as a number. 
When we type 0 or a number below 0, the loop stops, so that number doesn't count!
*/
