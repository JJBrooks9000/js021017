"use strict";

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  toString() {
    return `you called toString`;
  }
}

const turing = new Person('Alan', 'Turing');

for(let prop in turing) {
  console.log(prop);
}