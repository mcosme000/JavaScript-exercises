"use strict";

/**
Delete white space from the beginning and end of an string.
Normalmente se hace con .trim() method, pero esto es un challenge y hay que eliminarlo
usando string methods. 
 */

let str = "   Soy una frase con muchos espacios   ";
let noSpaces = /(^\s+|\s+$)/g;
let result = str.replace(noSpaces, "");
console.log(result);

//lo que hago es hacer un match de los espacios que hay al principio y al final
//después los reemplazo por... nada. Y ya.

//DON'T FORGET TO ADD THE G FLAG TO MAKE IT GLOBAL !!!

let hello = "   Hello, World!  ";
let wsRegex = /(^\s+|\s+$)/g; // Change this line
let result2 = hello.replace(wsRegex, "");
console.log(result2);
