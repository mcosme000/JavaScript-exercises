"use strict";

let string = "My name is Maria";
let name = /Maria/;
let result = string.replace(name, "Joana");
console.log(result);

let weather = "The sky is grey today";
let weatherChange = /grey/;
console.log(weather.replace(weatherChange, "blue"));

// - - - I can also replace capture groups!
// You can also access capture groups in the replacement string with dollar signs ($).
let str = "One two three";
let strRegex = /(\w+)\s(\w+)\s(\w+)/;
let newStr = str.replace(strRegex, "$3 $2 $1");
console.log(str);
console.log(newStr);
