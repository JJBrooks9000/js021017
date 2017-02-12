"use strict";

class Vehicle {}
Vehicle.prototype.miles = 0;

class Car extends Vehicle {
  drive(distance) {
    this.miles += distance;
  }
}

const car1 = new Car();
const car2 = new Car();

console.log(car1.__proto__ === Car.prototype); //true
console.log(car2.__proto__ === Car.prototype); //true
console.log(car1.__proto__ === car2.__proto__); //true

console.log(car1.miles);
console.log(car2.miles);

car1.drive(10);
console.log(car1.miles);  
console.log(car2.miles);








