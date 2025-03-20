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




