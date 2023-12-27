"use strict";
setInterval(() => {
    const messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = "";
    if (localStorage.getItem("Is_messages")) {
        const allMessages = JSON.parse(String(localStorage.getItem("Is_messages")));
        allMessages.forEach((elem) => messagesContainer.innerHTML = messagesContainer.innerHTML + "<p>" + elem.body + "</p>");
    }
}, 100);
class message {
    constructor(body, date) {
        this.body = body;
        this.date = date;
    }
}
function send() {
    const input = document.getElementById("message-input");
    const newMessage = new message(input.value.toString(), {
        date: {
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
        },
        time: {
            sec: new Date().getSeconds(),
            min: new Date().getMinutes(),
            hrs: new Date().getHours(),
        },
    });
    if (!localStorage.getItem("Is_messages")) {
        localStorage.setItem("Is_messages", JSON.stringify([newMessage]));
        return;
    }
    const messages = JSON.parse(String(localStorage.getItem("Is_messages")));
    messages.push(newMessage);
    localStorage.setItem("Is_messages", JSON.stringify(messages));
}
