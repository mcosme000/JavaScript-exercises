"use strict";

/*
----- Tenemos que indicar si el número es par o impar -----
*/

let number = parseInt(prompt("Type any number"));

// first, we check if the number is a valid number.
// if not, we need to type it again UNTIL there is a valid number.

while (isNaN(number)) {
  number = parseInt(prompt("Type any number"));
}

// after we get a valid number, we start the conditionals

if (number % 2 == 0) {
  alert(number + " es par");
} else {
  alert(number + " es impar");
}
