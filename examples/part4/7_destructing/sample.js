"use strict";

const getFullName = function() {
  return ['John', 'Quincy', 'Adams'];
}

// const name = getFullName();
// console.log(name);
// 
// const firstName = name[0];
// const middleName = name[1];
// const lastName = name[2];

const [firstName, middleName, lastName] = getFullName();

console.log(firstName);
console.log(middleName);
console.log(lastName);