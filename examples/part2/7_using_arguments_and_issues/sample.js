"use strict";

const max = function() {
  let large = arguments[0];

  for(let i = 0; i < arguments.length; i++) {
    if(large < arguments[i]) large = arguments[i];
  } 
  
  return large;
}

console.log(max(1, 2));
console.log(max(4, 3));
console.log(max(1, 7, 2));
console.log(max(1, 3, 8));

//1. arguments is not an array, it is messy
//2. the code is not intutive, not clear how many arguments are expected.
//3. varargs is hidden