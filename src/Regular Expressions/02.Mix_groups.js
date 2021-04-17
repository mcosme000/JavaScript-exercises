"use stric";

//We want to make match of the repeatNum string
let repeatNum = "42 42 42";
let reRegex = /(\d{2})\s\1\s\1/; // Change this line
let result = reRegex.test(repeatNum);
console.log(repeatNum.match(reRegex));
console.log(result);

/**

Lo que estamos buscando es (\d{2}), dos números seguidos.
Si queremos buscar lo mismo otra vez, no hace falta escribir lo mismo, 
con \1 ya hacemos referencia a ese grupo de búsqueda. 
 */

// - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt
 * in a case sensitive manner and it should make concessions for middle names.
 * Then fix the code so that the regex that you have created
 * is checked against myString and either true or false
 * is returned depending on whether the regex matches.
 */

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/i; // Change this line
let result2 = myRegex.test(myString); // Change this line
console.log(result2);
console.log(myString.match(myRegex));
// el .* hace referencia a que puede o no haber otras letras entre el nombre y el apellido!!
