"use strict";

class Vehicle {}
Vehicle.prototype.miles = 0;

class Car extends Vehicle {
  constructor(color) { 
    super();
    this.color = color;
  }
  drive(distance) {
    this.miles += distance;
    console.log('drive called...');
  }
}

const car1 = new Car('orange');

for(let prop in car1) {
  console.log(prop + "----" + car1.hasOwnProperty(prop));
}

car1.drive(10);
for(let prop in car1) {
  console.log(prop + "----" + car1.hasOwnProperty(prop));
}





