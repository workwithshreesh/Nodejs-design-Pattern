class Burger {
    constructor() {
        this.ingredients = [];
    }

    addIngredient(item) {
        this.ingredients.push(item);
        return this;
    }

    build() {
        return `🍔 Ready Burger with: ${this.ingredients.join(", ")}`;
    }
}

const burger = new Burger().addIngredient("Bun").addIngredient("Cheese").addIngredient("Patty").build();
console.log(burger);








// 2nd example 

// 🔨 Burger Builder Class
class Burgers {
    constructor(builder) {
        this.bun = builder.bun;
        this.patty = builder.patty;
        this.cheese = builder.cheese;
        this.sauce = builder.sauce;
    }

    display() {
        console.log(`🍔 Burger Ready: ${this.bun} Bun | ${this.patty} Patty | ${this.cheese ? "🧀 Cheese" : "No Cheese"} | Sauce: ${this.sauce}`);
    }
}

// 👷 Builder Class
class BurgerBuilder {
    constructor() {
        this.bun = "Regular"; // Default bun
        this.patty = "Veg"; // Default patty
        this.cheese = false; // No cheese by default
        this.sauce = "Tomato"; // Default sauce
    }

    setBun(bun) {
        this.bun = bun;
        return this; // Chaining support
    }

    setPatty(patty) {
        this.patty = patty;
        return this;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    setSauce(sauce) {
        this.sauce = sauce;
        return this;
    }

    build() {
        return new Burgers(this);
    }
}

// ✅ Custom Burger Banate Hai!
const myBurger = new BurgerBuilder()
    .setBun("Sesame")
    .setPatty("Chicken")
    .addCheese()
    .setSauce("BBQ")
    .build();

myBurger.display(); // 🍔 Burger Ready: Sesame Bun | Chicken Patty | 🧀 Cheese | Sauce: BBQ
