/*


Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

function oddOrEven(array) {
  let sum = array.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(sum % 2 === 0 ? "even" : "odd");
}

oddOrEven([1, 2, 3]);
oddOrEven([1, 2, 2]);
oddOrEven([]);

// para evitar errores cuando mandamos un array vacío,
// añado un 0 como default value.
// 0 = even!!

// LA SOLUCIÓN RÁPIDA:

function oddEven(array) {
  console.log(array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd");
}

oddEven([1, 3, 5]);
oddEven([2, 2, 2]);
