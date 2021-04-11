"use strict";

/**
We have defined a function, 
copyMachine which takes arr (an array) and num (a number) as arguments. 
The function is supposed to return a new array made up of num copies of arr. 
Modify the function using spread syntax so that it works correctly. 
 */

let numbers = [1, 2, 3, 4, 5];

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  console.log(newArr);
}

copyMachine(numbers, 3);

/**
En este caso intenté hacerlo con un ciclo for, pero si la var i siempre empieza desde 0
no hay manera posible de hacerlo... 
 */
