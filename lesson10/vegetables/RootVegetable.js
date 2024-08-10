const Vegetable = require('./Vegetable');

class RootVegetable extends Vegetable {
    constructor(name, calories, weight, isStarchy) {
        super(name, calories, weight);
        this.isStarchy = isStarchy;
    }
}

module.exports = RootVegetable;