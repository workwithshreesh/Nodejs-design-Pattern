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