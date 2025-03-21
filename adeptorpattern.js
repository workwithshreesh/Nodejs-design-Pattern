// 🏦 Old Payment Gateway (Legacy System)
class OldPaymentGateway {
    payViaOldGateway(amount) {
        console.log(`Processing payment of ₹${amount} via Old Gateway`);
    }
}

// 💳 New Payment Gateway (Modern API)
class NewPaymentGateway {
    processPayment(amount, currency) {
        console.log(`Processing payment of ${currency}${amount} via New Gateway`);
    }
}

// 🔌 Adapter (Converts Old Calls to New API)
class PaymentAdapter {
    constructor(newGateway) {
        this.newGateway = newGateway;
    }

    payViaOldGateway(amount) {
        this.newGateway.processPayment(amount, "₹"); // 🛠 Converts old call to new call
    }
}

// 🎉 Implementation
const oldSystem = new OldPaymentGateway();
oldSystem.payViaOldGateway(500); // ✅ Works with old system

const newSystem = new NewPaymentGateway();
const adaptedSystem = new PaymentAdapter(newSystem);
adaptedSystem.payViaOldGateway(500); // ✅ Uses new system via adapter
