"use strict";

const dumbledore = Symbol.for('wizard');

console.log(dumbledore);

const wizard2 = Symbol.keyFor(dumbledore);
console.log(wizard2);

const wizard3 = Symbol.keyFor(dumbledore);
console.log(wizard3);

console.log(wizard2 === wizard3);

const confidant = Symbol.for('confidant');

const potter = {
  first: 'Harry',
  [confidant]: 'Hagrid'
}

console.log(potter);  

console.log(Object.getOwnPropertySymbols(potter));




