"use strict";

function reverseString(str) {
  let text = str.split("").reverse().join("");
  console.log(text);
}

reverseString("hello my name is Maria");
