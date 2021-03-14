/*
Write function isPalindrome that checks if a given string 
(case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
*/

function isPalindrome(x) {
  let text = x.toLowerCase();
  let palindrome = text.split("").reverse().join("");
  if (palindrome === text) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome("BOb");

/* 
PROBLEMAS CON LOS QUE ME HE ENCONTRADO: 

*** CASE SENSITIVE. Cómo lo puedo borrar??
Mi solución: creo una variable y almaceno x.toLowerCase() ahí
*/

//LA SOLUCIÓN MÁS INTELIGENTE!!

function palindromeCheck(y) {
  console.log(
    y.split("").reverse().join("") === y.toLowerCase() ? true : false
  );
}

palindromeCheck("Bob");
