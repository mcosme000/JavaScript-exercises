"use strict";

/*
You are given a list of character sequences as a comma separated string. 
Write a function which returns another string containing all the character sequences 
except the first and the last ones, separated by spaces. 
If the input string is empty, or the removal of the first and last items would cause the string to be empty, 
return a null value.
*/

function array(arr) {
  if (arr.includes(" ")) {
    let text = arr.replace(/[ ,]/g, "").split("");
    console.log(text);
    text.pop();
    text.shift();
    console.log(text.length >= 1 ? text.toString() : null);
  } else {
    let text = arr.replace(/,/g, " ").split(" ");
    text.pop();
    text.shift();
    console.log(text.length >= 1 ? text.toString() : null);
  }
}

array("1, 2, 3, 4");
array("1, 2, 3");
array("a,b,cde");
array("hola,Maria");

let animals = ["dog", "cat", "mouse"];
animals.pop();

animals.shift();
console.log(animals);
