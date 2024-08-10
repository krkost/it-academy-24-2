const Vegetable = require('./Vegetable');

class FruitVegetable extends Vegetable{
    constructor(name, calories, weight, isSeedless) {
        super(name, calories, weight);
        this.isSeedless = isSeedless;
    }
}

module.exports = FruitVegetable;