"use strict";

const employee = { work: () => console.log('working...') };

//const theAge = 21;
const age = 21;

const sam = {
  first: 'Sam',
  __proto__: employee,
//  age: theAge

//  age: age
  age
};

//sam.__proto__ = employee;

console.log(sam);
console.log(sam.__proto__);