"use strict";

//Find the longest word in a string

function findLongestWordLength(str) {
  let words = str.split(" ");
  let arr = words.map((word) => word.length);
  console.log(Math.max(...arr));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/**
1. Primero divido el string en palabras
2. Creo un array con la longitud de cada palabra
- - - Al principio lo hice con un loop, pero el método map es más fácil y rápido.
3. Con Math.max(...arr) puedo devolver el número más algo dentro del array. 
- - - quiero usar Math.max en un array, así que necesito spread operator
 */
