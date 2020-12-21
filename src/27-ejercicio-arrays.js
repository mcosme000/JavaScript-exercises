"use strict";

/* 

MAKE A PROGRAM THAT SHOWS THE FOLLOWING: 
1. Aks for 6 numbers and puts them inside an array. 
2. It shows the whole array, all its elements, both in the html body and the console. 
3. We need to show the array in order. 
4. Change the order of the elements inside the array and show it. 
5. Show how many elements the array has. 
6. Search for an specific element inside the array. 
The program needs to tell us if that element exists or not. 
If true, show us its index. 
*/

//

// To show the array elements in the HTML body I will be using the code below,
// so I created a function so that I can repeat it as many times as I need.

function showArray(element, text = "") {
  document.write("<h3> Array content " + text + "</h3>");
  element.forEach((element, index) => {
    document.write(index + " - " + element + "<br>");
  });
}

//① Add the 6 numbers to the array
var numbers = [];

do {
  var newNumber = parseInt(prompt("Give me any number!"));
  numbers.push(newNumber);
} while (numbers.length <= 5);

//

//② Show the numbers of the array on the console
console.log(numbers);

//

//③ Show the numbers of the array on the HTML body
showArray(numbers);

//

// ④ Sort the elements
numbers.sort(function (a, b) {
  return a - b;
});
showArray(numbers, "sorted");
// I also add the "extra text"
/*
With this function we can sort the numbers 
function(a,b) {return a-b}; 
if we don't write it, the numbers only will be sorted alfabetically. 
*/

//

// ⑤ Reverse the order of the elements
numbers.reverse();
showArray(numbers, "reversed");

//

// ⑥ Show how many elements there are in the array
document.write("<h3>This array has " + numbers.length + " elements");

//

// ⑦ Look for a specific element inside the array
var look = parseInt(prompt("Look for a number"));

// -* -* -* -* -* -* -* -* -* -* -* -* -* -* -* -* -* -* -*
