"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger() {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.lastLogin = new Date().getHours() + "h:" + new Date().getMinutes() + "min";
            }
        };
    };
}
let user = class user {
    constructor(un, pss) {
        this.username = un;
        this.password = pss;
    }
};
user = __decorate([
    logger()
], user);
console.log(new user("Xevil300", "skjdsfsh800"));
function loginWatcher() {
    return (target, key) => {
        var currentValue = target[key];
        const getter = () => currentValue;
        const setter = (value) => {
            currentValue = value;
            localStorage.setItem("lastLogin", `${new Date().getHours()}h:${new Date().getMinutes()}min`);
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class login {
    constructor() {
        this.lastLogin = localStorage.getItem("lastLogin");
        this.currentLogin = `${new Date().getHours()}h:${new Date().getMinutes()}min`;
    }
}
__decorate([
    loginWatcher()
], login.prototype, "lastLogin", void 0);
console.log(new login());
function delay(ms) {
    return (target, key, descriptor) => {
        const baseMethod = descriptor.value;
        descriptor.value = function () {
            setTimeout((...args) => {
                baseMethod.apply(this, args);
            }, ms);
        };
        return descriptor;
    };
}
class example {
    constructor(name) {
        this.username = name;
    }
    display() {
        console.log(this.username);
    }
}
__decorate([
    delay(5000)
], example.prototype, "display", null);
new example("João").display();
