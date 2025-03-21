class Database{
    constructor(){
        if(!Database.instance){
            console.log("New Database connection")
            this.connect = "Connected";
            Database.instance = this
        }
        return Database.instance
    }
}


const db1 = new Database()
const db2 = new Database()

console.log(db1 == db2)




// singleton practice with logger

class Logger{
    constructor(){
        if(!Logger.instance){
            console.log("New log create huaa");
            this.logs = []
            Logger.instance = this
        }
        return Logger.instance
    }
    
    log(message){
        this.logs.push(message);
        console.log(`message: ${message}`)
    }

    showLog(){
        console.log(`Logs: ${this.logs}`)
    }
}



const logger1  = new Logger();
logger1.log("First log message")
logger1.showLog()

const logger2 = new Logger();
logger2.log("Second log message")
logger2.showLog()


console.log(logger1 == logger2)



// Observer Pattern

class YoutubeChannel{
    constructor(){
        this.subscribers = []
    }

    subscribe(user){
        this.subscribers.push(user)
    }

    notify(video){
        this.subscribers.forEach((user)=>console.log(`Hey ${user} New Video! ${video}`))
    }
}


const youtubeSystem = new YoutubeChannel()

youtubeSystem.subscribe("Amit")
youtubeSystem.subscribe("Rahul")

youtubeSystem.notify("Gaming Video")




// practice factory pattern

class Auto{
    constructor(type){
        this.type = type
    }

    ride(){
        console.log(`This is ${this.type} Auto`)
    }
}

function autoGen(type){
    return new Auto(type)
}

const auto1 = autoGen("Ac")
const auto2 = autoGen("Normal")

auto1.ride()
auto2.ride()




// single ton practice again

class Databases{
    constructor(){
        if(!Database.instance){
            console.log("New Database Connection")
            this.connected = "Connected"
            Database.instance = this
        }
        return Database.instance
    }
}


const dba1 = new Databases()
const dba2 = new Databases()

console.log(dba1 == dba2)


// single ton

class Loggers{
    constructor(){
        if(!Loggers.instance){
            console.log("New Log Message")
            this.logs = []
            Loggers.instance = this
        }
        return Loggers.instance
    }

    log(message){
        this.logs.push(message)
        console.log(`This is new ${message}`)
    }

    showLog(){
        console.log(`Logs: ${this.logs}`)
    }
}

const logger12 = new Loggers()
logger12.log("First Logs")
logger12.showLog()


const logger21 = new Loggers()
logger21.log("Second Message")
logger21.showLog()



// Hence proof
console.log(logger1 == logger2)







// Builder Pattern

class Burger{
    constructor(){
        this.ingrediants = []
    }

    addIngrediants(item){
        this.ingrediants.push(item);
        return this
    }


    build(){
        return `Ready Burger with: ${this.ingrediants.join(", ")}`
    }
}


const burgger = new Burger().addIngrediants("Bun").addIngrediants("Cheese").addIngrediants("Patty").build()
console.log(burgger)






// 2 nd method to create a builder pattern

class BurgerBuilder{
    constructor(builder){
        this.bun = builder.bun;
        this.patty = builder.patty;
        this.cheese = builder.cheese
    }

    display(){
        console.log(`Ready Burger with: ${this.bun} | ${this.cheese ? "Cheese" : "No Cheese"} | ${this.patty}`);
    }
}



class Burgers{
    constructor(){
        this.bun = "Regular";
        this.patty = "Aloo";
        this.cheese = false;
    }

    setBun(bun){
        this.bun = bun;
        return this
    }

    setPatty(patty){
        this.patty = patty
        return this
    }

    
    setCheese(cheese){
        this.cheese = cheese
        return this
    }

    orderAll(){
        return new BurgerBuilder(this)
    }
}


myBurger = new Burgers().setBun("Regular")
                    .setCheese(true)
                    .setPatty("Aloo")
                    .orderAll()

myBurger.display()



// strategy pattern 

class NormalDelivery{
    calculate(amount){
        return amount + 30
    }
}


class FastDelivery{
    calculate(amount){
        return amount + 50
    }
}


class SuperFastDelivery{
    calculate(amount){
        return amount + 100
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


var amount = 500
const mydelivery = new DeliveryCostCalculator(new NormalDelivery())
console.log("Normal Delivery:", mydelivery.calculateCost(amount))

mydelivery.setStrategy(new FastDelivery())
console.log("Fast Delivery:", mydelivery.calculateCost(amount))