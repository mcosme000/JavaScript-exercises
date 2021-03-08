"use strict";

/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

*/

let array1 = [1, 2, 3];

let double = array1.map((number) => {
  return number * 2;
});

console.log(array1);
console.log(double);

let triple = array1.map((number) => {
  return number * 3;
});

console.log(triple);

let arrays = [
  [1, 2, 3],
  ["a", "b", "c"],
  [4, 5, 6],
];

console.log(arrays[1][2]);
arrays[2].push(4);
console.log(arrays);

function multiplicationTable(size) {
  let table = [];

  for (var i = 1; i <= size; i++) {
    table.push([]);
    for (var x = 1; x <= size; x++) {
      console.log(x);
      table[x].push(x);
    }
  }
  console.log(table);
}

multiplicationTable(4);
