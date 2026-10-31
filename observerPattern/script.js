class YoutubeChannel {
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(` You have subscribed the channel`);
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update("You have unsubscribed the channel");
    }

    notify(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class User {
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name}, ${data}`);
    }
}

let sher = new YoutubeChannel();
let user1 = new User("Harsh");
let user2 = new User("Shubham");

sher.subscribe(user1);
sher.subscribe(user2);

sher.notify("New video is live on the channel...");