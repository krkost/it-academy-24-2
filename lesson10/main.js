/*Chef. Determine the hierarchy of vegetables. Make a salad. Calculate calories. Sort vegetables for a salad based on
one of the parameters. Find vegetables in the salad that correspond to a given range of parameters.*/

const FruitVegetable = require('./vegetables/FruitVegetable');
const LeafyVegetable = require('./vegetables/LeafyVegetable');
const RootVegetable = require('./vegetables/RootVegetable');
const Salad = require('./Salad');

let spinach = new LeafyVegetable('Spinach', 23, 100, true);
let carrot = new RootVegetable('Carrot', 41, 150, true);
let tomato = new FruitVegetable('Tomato', 18, 120, true);

let mySalad = new Salad();
mySalad.addIngredient(spinach);
mySalad.addIngredient(carrot);
mySalad.addIngredient(tomato);

console.log(`---Total calories in salad: ${mySalad.calculateSaladTotalCalories()}`);

mySalad.sortIngredients('weight');
console.log('---Ingredients sorted by weight:');
mySalad.ingredients.forEach(veg => console.log(veg.name, veg.weight));

let lowCaloriesVeggies = mySalad.findIngredientsInRange('calories', 0, 30);

console.log('---Ingredients with calories less than 30: ');
lowCaloriesVeggies.forEach(veg => console.log(veg.name));