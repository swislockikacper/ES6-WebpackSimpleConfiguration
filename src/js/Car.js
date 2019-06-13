class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  printCar() {
    return `Car ${this.brand}, model ${this.model}`;
  }
}

export default Car;
