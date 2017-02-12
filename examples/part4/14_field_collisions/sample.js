"use strict";

const addresses = {
  mailing: {
    street: '101 Main Street'
  },
  shipping: {
    street: '404 Smith Street'
  }
};

// const { mailing: { street }} = addresses;
// 
// console.log(street);
//console.log(mailing); //ERROR

const { mailing: {street: mstreet}, shipping: {street: sstreet}} = addresses;

console.log(mstreet);
console.log(sstreet);

//console.log(mailing); //ERROR