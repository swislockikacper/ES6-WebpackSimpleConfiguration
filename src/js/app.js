import Car from "./Car.js";

let car = new Car("Dodge", "Challenger");

document.getElementById("description").innerHTML = car.printCar();
