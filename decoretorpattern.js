class Pizza {
    getDescription() {
        return "🍕 Basic Pizza";
    }
}

class CheeseDecorator {
    constructor(pizza) {
        this.pizza = pizza;
    }

    getDescription() {
        return `${this.pizza.getDescription()} + 🧀 Cheese`;
    }
}

const pizza = new Pizza();
const cheesePizza = new CheeseDecorator(pizza);
console.log(cheesePizza.getDescription());  // 🍕 Basic Pizza + 🧀 Cheese





// real life example

class Coffee {
    cost() { return 50; }
}

class MilkDecorator {
    constructor(coffee) { this.coffee = coffee; }
    cost() { return this.coffee.cost() + 20; }
}

class SugarDecorator {
    constructor(coffee) { this.coffee = coffee; }
    cost() { return this.coffee.cost() + 10; }
}

// ✅ Base Coffee
let myCoffee = new Coffee();
console.log("☕ Plain Coffee Cost:", myCoffee.cost());

// ✅ Add Milk
myCoffee = new MilkDecorator(myCoffee);
console.log("☕ Coffee + Milk Cost:", myCoffee.cost());

// ✅ Add Sugar
myCoffee = new SugarDecorator(myCoffee);
console.log("☕ Coffee + Milk + Sugar Cost:", myCoffee.cost());
