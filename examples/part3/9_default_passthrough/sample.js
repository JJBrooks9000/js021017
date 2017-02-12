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

class CoolPerson extends Person {
  // constructor(first, last) {
  //   super(first, last);
  // }
}

console.log(new CoolPerson('Awesome', 'Dude'));