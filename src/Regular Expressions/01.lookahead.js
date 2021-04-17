"use strict";

/**

Lookahead are patterns that tell JS to look ahead in a string to check for patterns
further along. This is useful when we want to look for multiple patterns in the same string. 

There are two types: 

① Positive lookahead (?=...)
This will look to make sure the element in the search pattern is there, 
but WON'T MATCH IT

Estos lookahead lo que hacen es lo siguiente: 
en el ejemplo de mar(?=ia)
primero va a comprobar si hay "mar" en la string
y después va a lookahead y si hay un "ia" en la string, va a return "mar"


② Negative lookahead (?!...)
This will look to make sure the element in the search patter is NOT THERE. 
The rest of the pattern will be returned if the negative lookahead is not present. 

 */

let price = "1 bottle of milk costs 32$";
let priceRegex = /\d+(?=$)/;
console.log(price.match(/\d+(?=€)/));

let str = "Maria";
console.log(str.match(/mar(?=ia)/i));

let password = "abc123";
//we want a password that has from 3 to 6 characters and at least one number
console.log(password.match(/(?=\w{3,6})(\D*\d)/));

//password with at least 5 characters and has at least 2 numbers
//    /(?=\w{5,})(?=\D*\d{2,})/
//  \w all letters and numbers

// match passwords that are greater than 5 characters long, and have two consecutive digits.
let sample = "ae4678";
console.log(/(?=\w{6})(?=\w*\d{2})/.test(sample)); //returns true (more than 6 and two numbers)
