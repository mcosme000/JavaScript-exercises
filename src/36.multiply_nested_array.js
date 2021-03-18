"use strict";

/**
 Modify function multiplyAll 
 so that it returns the product of all the numbers in the sub-arrays of arr.
*/

function multiplyAll(arr) {
  var total = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j] * arr[i][j]);
      total *= arr[i][j];
      console.log(total);
    }
  }
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6],
]);

/**
--- No puedo empezar la variable total con 0 porque entonces da 0 siempre. 
--- Las multiplicaciones tienen que ser ACUMULATIVAS, だから *= を使う〜
*/
