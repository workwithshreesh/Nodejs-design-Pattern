class Database{
    constructor(){
        if(!Database.instance){
            console.log("Naya Database connection banaya");
            this.connection = "connected"
            Database.instance = this
        }
        return Database.instance
    }
}

const db1 = new Database()
const db2 = new Database()

// console.log(db1)
console.log(db1 == db2)









class Logger {
    constructor() {
        if (!Logger.instance) {
            console.log("📝 Naya Logger Bana!");
            this.logs = [];
            Logger.instance = this; // ✅ Instance store kar diya
        }
        return Logger.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(`Log: ${message}`);
    }

    showLogs() {
        console.log("📜 Logs:", this.logs);
    }
}

// ✅ Pehli baar `Logger` ka object banayenge
const logger1 = new Logger();
logger1.log("Pehla log message");

console.log("------");

// ✅ Dubara naye object banane ki koshish karenge
const logger2 = new Logger();
logger2.log("Dusra log message");

console.log("------");

// ✅ Dono instances ko compare karenge
console.log(logger1 === logger2); // ✅ True, same object hai!

// ✅ Logs check karenge
logger1.showLogs();
logger2.showLogs();
