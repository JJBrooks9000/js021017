"use strict";

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  
  toString() {
    return `${this.first} ${this.last}`;
  }
}

const turing = new Person('Alan', 'Turing');
console.log(turing);
console.log(turing.toString());