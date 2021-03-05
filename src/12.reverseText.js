"use strict";

function reverse(text) {
  var toArray = text.split("");
  var reverseArray = toArray.reverse();
  var toString = reverseArray.join("");
  console.log(toString);
}

reverse("hello");
reverse("hello world");
reverse("My name is Maria");

// otra manera de hacerlo con código MÁS SIMPLE:

function darVuelta(frase) {
  var resultado = frase.split("").reverse().join("");
  console.log(resultado);
}

darVuelta("¡A este texto le voy a dar la vuelta!");

//DOCUMENTACIÓN:
// https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
