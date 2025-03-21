class NormalAuto {
    calculateFare(distance) {
        return distance * 10;
    }
}

class ACAuto {
    calculateFare(distance) {
        return distance * 15;
    }
}

class FareCalculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    getFare(distance) {
        return this.strategy.calculateFare(distance);
    }
}

const fareAC = new FareCalculator(new ACAuto());
console.log(`🚖 AC Auto Fare: ₹${fareAC.getFare(5)}`);  // 🚖 AC Auto Fare: ₹75










class PayPal {
    pay(amount) { console.log(`Paid ${amount} using PayPal`); }
}

class CreditCard {
    pay(amount) { console.log(`Paid ${amount} using Credit Card`); }
}

class PaymentProcessor {
    constructor(strategy) { this.strategy = strategy; }
    setStrategy(strategy) { this.strategy = strategy; }
    pay(amount) { this.strategy.pay(amount); }
}

// ✅ Client Code
const payment = new PaymentProcessor(new PayPal());
payment.pay(1000);

payment.setStrategy(new CreditCard());
payment.pay(2000);





// 3rd strategy pattern

class NormalDelivery{
    calculate(amount){
        return amount + 30;
    }
}

class FastDelivery{
    calculate(amount){
        return amount + 50;
    }
}

class SuperFastDelivery{
    calculate(amount){
        return amount + 100;
    }
}



class DeliveryCostCalculator{
    constructor(strategy){
        this.strategy = strategy
    }

    setStrategy(strategy){
        this.strategy = strategy
    }


    calculateCost(amount){
        return this.strategy.calculate(amount)
    }

}

const amount = 500
const delivery = new DeliveryCostCalculator(new NormalDelivery())
console.log("Normal Delivery Amount: ", delivery.calculateCost(amount));

delivery.setStrategy(new FastDelivery());
console.log("Fast Delivery Amount: ", delivery.calculateCost(amount))


delivery.setStrategy(new SuperFastDelivery());
console.log("SuperFast Delivery Amount: ", delivery.calculateCost(amount))




// decorator pattern practice

class Pizza{
    getDecription(){
        return "This is a Pizza cheese "
    }
}



class CheeseDecorator{
    constructor(pizza){
        this.pizza = pizza
    }

    getPizzaDescription(pizza){
        return `${this.pizza.getDecription() + pizza}`
    }
}


const cheeseDec = new CheeseDecorator(new Pizza())

const print = cheeseDec.getPizzaDescription("cheese")
console.log(print)
