"use strict";

/* 

MAKE A PROGRAM THAT SHOWS THE FOLLOWING: 
1. Aks for 6 numbers and puts them inside an array. 
2. It shows the whole array, all its elements, both in the html body and the console. 
3. We need to show the array in order. 
4. Change the order of the elements inside the array and show it. 
5. Show how many elements the array has. 
6. Search for an specific element inside the array. 
The program needs to tell us if that element exists or not. 
If true, show us its index. 

*/

var numeros = [];

do {
  var newNumber = parseInt(prompt("Give me a number!"));
  numeros.push(newNumber);
} while (numeros.length <= 5);
{
  console.log(numeros);
  for (var i = 0; i < numeros.length; i++) {
    document.write(numeros[i] + "<br>");
  }
}

// ordenar los elementos del array:
console.log(numeros.sort());

// invertir el orden de los elementos:

console.log(numeros.reverse());
