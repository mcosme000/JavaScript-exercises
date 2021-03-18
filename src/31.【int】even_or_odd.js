"use strict";

/* 
Create a function to determine if the sum of all the individual 
even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.

If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

Examples
evenOrOdd("22471") ➞ "Even and Odd are the same"

evenOrOdd("213613") ➞ "Even and Odd are the same"

evenOrOdd("23456") ➞ "Even is greater than Odd"
Notes
The input will be a string of numbers.

*/

function evenOrOdd(str) {
  let arr = str.split("").map(Number);

  let even = arr.filter((number) => {
    return number % 2 === 0 ? number : null;
  });
  let odd = arr.filter((number) => {
    return number % 2 !== 0 ? number : null;
  });

  let evenCount = even.reduce((a, b) => a + b);
  let oddCount = odd.reduce((a, b) => a + b);

  if (evenCount === oddCount) {
    console.log("Even and Odd are the same");
  } else {
    if (evenCount > oddCount) {
      console.log("Even is greater than Odd");
    } else {
      console.log("Odd is greater than Even");
    }
  }
}

evenOrOdd("22471");
evenOrOdd("23456");
evenOrOdd("56");
