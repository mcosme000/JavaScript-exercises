"use strict";

function array(arr) {
  var deleteComma = arr.replace(/,/g, "");
  console.log(deleteComma);
}

array("My, name, is, Maria");
