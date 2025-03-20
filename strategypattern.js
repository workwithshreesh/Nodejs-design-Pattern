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
