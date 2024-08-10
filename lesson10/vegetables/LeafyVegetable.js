const Vegetable = require('./Vegetable');

class LeafyVegetable extends Vegetable {
    constructor(name, calories, weight, isGreen) {
        super(name, calories, weight);
        this.isGreen = isGreen;
    }
}

module.exports = LeafyVegetable;