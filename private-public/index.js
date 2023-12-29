"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Private and Public
var User = /** @class */ (function () {
    function User(username, password, id) {
        var _this = this;
        this.username = username;
        this.password = password;
        this.id = id;
        this.data = function () {
            console.log(_this.username);
            console.log(_this.password);
            return "This are your information.";
        };
    }
    return User;
}());
var myUser = new User("Gustavo", "adas78978", 445);
console.log(myUser.data());
