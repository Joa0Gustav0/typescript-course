"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger(constructor) {
    Object.seal(User);
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.loginTime = new Date().getHours() + "h:" + new Date().getMinutes() + "min";
        }
    };
}
function checkQuote() {
    return (constructor, propKey) => {
        var propertyVal = constructor[propKey];
        const getter = () => propertyVal;
        const setter = (value) => {
            switch (value) {
                case "Penso logo existo.":
                    propertyVal = "Isso foi pensado por René Descartes.";
                    break;
                case "Só sei que nada sei.":
                    propertyVal = "Isso foi pensado por Sócrates.";
                    break;
                default:
                    propertyVal = "Realmente só sei que nada sei...";
            }
        };
        Object.defineProperty(constructor, propKey, { get: getter, set: setter });
    };
}
//Class Decorator
let User = class User {
    constructor(username, password, quote) {
        this.quote = quote;
        this.data = () => console.log({
            username: username,
            password: password,
        });
    }
};
__decorate([
    checkQuote()
], User.prototype, "quote", void 0);
User = __decorate([
    logger
], User);
const newUser = new User("Gustavo", "Gustavo2409", "Penso logo existo.");
console.log(newUser.quote);
