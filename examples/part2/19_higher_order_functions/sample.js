"use strict";
              
//higher-order functions

//a function can receive objects
//can create objects
//can return objects

//a higher-order function may 
//receive a function
//may create a function within
//may return a function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//find the total of double of even numbers

let result = 0;

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0) {
    result += numbers[i] * 2;
  }
}

console.log(result);



console.log(
  numbers
  .filter(function(e) { return e % 2 === 0 })
  .map(function(e) { return e * 2; })
  .reduce(function(sum, e) { return sum + e; } ));


console.log(
  numbers
  .filter(e => e % 2 === 0)
  .map(e => e * 2)
  .reduce((sum, e) => sum + e ));









