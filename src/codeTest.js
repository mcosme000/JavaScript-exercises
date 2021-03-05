"use strict";

// string to array

function toArray(text) {
  let array = text.split("");
  console.log(array);
  // reverse array
  console.log(array.reverse());
}
toArray("maria");

// convert array to string

// things to do with arrays

var animals = ["dog", "cat", "bird"];

/*animals.push("crocodile");
animals.unshift("horse");
console.log(`Adding new elements to the array: ${animals}`);

animals.shift();
animals.pop();
console.log(`Deleting elements: ${animals}`);
*/

// COMPROBAR ELEMENTOS DE ARRAY //
animals.forEach((animal) => {
  if (animal === "dog") {
    console.log("Yes");
  }
});

let animalCheck = animals.includes("crocodile");
console.log(animalCheck);
