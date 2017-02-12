"use strict";

const max = function(...numbers) {
  let large = numbers[0];

  for(let i = 0; i < numbers.length; i++) {
    if(large < numbers[i]) large = numbers[i];
  } 
  
  return large;
}

console.log(max(1, 2));
console.log(max(4, 3));
console.log(max(1, 7, 2));
console.log(max(1, 3, 8));

//1. intention is clear
//2. argument is an array
//3. you can have more named arguments before zero or one rest argument.

const foo = function(a, b, ...rest) {
  
}


