const FruitVegetable = require('./vegetables/FruitVegetable');
const LeafyVegetable = require('./vegetables/LeafyVegetable');
const RootVegetable = require('./vegetables/RootVegetable');


class Salad {
    constructor() {
        this.ingredients = [];
    }

    addIngredient(vegetable){
        this.ingredients.push(vegetable);
    }

    calculateSaladTotalCalories(){
        let totalCalories = 0;
        for ( let veg of this.ingredients){
            totalCalories += veg.getTotalCalories();
        }
        return totalCalories;
    }

    sortIngredients(parameter){
        this.ingredients.sort((a, b) => a[parameter] - b[parameter]);
    }

    findIngredientsInRange(parameter, min, max){
        return this.ingredients.filter(veg => veg[parameter] >= min && veg[parameter] <= max);
    }
}

module.exports = Salad;