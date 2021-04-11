"use strict";

/**
The following function is supposed to create a two-dimensional array 
with m rows and n columns of zeroes. 
Unfortunately, it's not producing the expected output because 
the row variable isn't being set back to an empty array in the outer loop. 
Fix the code so it returns a correct 3x2 array of zeroes, 
which looks like [[0, 0], [0, 0], [0, 0]].
 */

function matrix(a, b) {
  let array = [];
  for (let i = 0; i < a; i++) {
    let row = [];
    for (let j = 0; j < b; j++) {
      row.push(0);
    }
    array.push(row);
  }
  console.log(array);
}

console.log(matrix(4, 2));
