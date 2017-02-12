"use strict";

const getNames = function() {
  return ['Tom', 'Jerry', 'Tyke'];
}

const [first, second, third, fourth = '----'] = getNames();

console.log(`${first} ${second} ${third} ${fourth}`);