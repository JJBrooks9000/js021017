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

//JavaScript does not have class base inheritance (because it actually does
//not have class).

//It actually has protypal inheritance.

//That means, if A inherits from B, then we have a chain of A's proto refering
//to an instance of B.

class SuperPerson extends Person {
  constructor(first, last, power) {
    super(first, last);
    this.power = power;
  }
  
  toString() {
    return `${super.toString()} has power ${this.power}`;
  }
}

let flash = new SuperPerson('Barry', 'Alan', 'speed');
console.log(flash.toString());  
                                                 

//super means walk to the left (or right) the object prototype chain
//and not a class hiearchy chain like in other language.

