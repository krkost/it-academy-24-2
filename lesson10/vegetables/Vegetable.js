class Vegetable {
    constructor(name, calories, weight) {
        this.name = name;
        this.calories = calories; // per 100 g
        this.weight = weight;
    }

    getTotalCalories() {
        return (this.calories * this.weight) / 100;
    }
}

module.exports = Vegetable;