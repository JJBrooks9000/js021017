"use strict";

const addresses = {
  mailing: {
    street: '101 Main Street'
  },
  shipping: {
    street: '404 Smith Street'
  }
};

// const printStreet = function(addresses) {
//   console.log(addresses.mailing.street);
// }

const printStreet = function({ mailing: { street }}) {
  console.log(street);
}

printStreet(addresses);