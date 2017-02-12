"use strict";

const getFullName = function() {
  return {firstName: 'John', middleName: 'Quincy', lastName: 'Adams'};
}

const {firstName: first, lastName: last, middleName: middle} = getFullName();
//property: variableName


console.log(`${first} ${middle} ${last}`);
