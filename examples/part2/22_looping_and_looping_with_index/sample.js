"use strict";

const numbers = [1, 2, 3, 4, 5, 6];

//old and imperative
for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//better, but imperative
for(let number of numbers) {
  console.log(number);
}

//if you want the index also, then
for(let [index, number] of numbers.entries()) {
  console.log(`${index} -- ${number}`);
}

//better and functional
numbers.forEach(e => console.log(e));