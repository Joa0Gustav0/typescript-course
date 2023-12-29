//Abstract Classes
/* interface userParams {
    username: string,
    password: string,
}

class User implements userParams {
  constructor(
    public username: string,
    public password: string,
  ) {}
}

const newUser = new User("asdsad", "dsadada");
console.log(newUser.username); */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserModel = /** @class */ (function () {
    function UserModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return UserModel;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(u, p) {
        return _super.call(this, u, p) || this;
    }
    User.prototype.data = function () {
        return { username: this.username, password: this.password };
    };
    return User;
}(UserModel));
var myUser = new User("Gustavo", "asddas45345");
console.log(myUser.data());
