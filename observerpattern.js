class YouTubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
    }

    notify(video) {
        this.subscribers.forEach(user => console.log(`📢 Hey ${user}, naya video aaya: ${video}`));
    }
}

const channel = new YouTubeChannel();
channel.subscribe("Rahul");
channel.subscribe("Priya");

channel.notify("Mast Coding Tutorial!"); 






// Subject (Publisher)
class Subject {
    constructor() {
        this.observers = [];  // List of subscribers
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer
class Observers {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received notification: ${data}`);
    }
}

// Example Usage
const newsChannel = new Subject();

const user1 = new Observers("User 1");
const user2 = new Observers("User 2");

newsChannel.subscribe(user1);
newsChannel.subscribe(user2);

newsChannel.notify("Breaking News: Mumbai me heavy rainfall!");
