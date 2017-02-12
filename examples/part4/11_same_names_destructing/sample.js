"use strict";

const getFullName = function() {
  return {firstName: 'John', middleName: 'Quincy', lastName: 'Adams'};
}

//const {firstName: firstName, lastName: lastName, middleName: middleName} =
// getFullName();

const {firstName, lastName, middleName} = getFullName();


console.log(`${firstName} ${middleName} ${lastName}`);
