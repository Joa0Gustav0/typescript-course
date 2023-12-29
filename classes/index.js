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
var player = /** @class */ (function () {
    function player(d) {
        this.name = d.name;
        this.tag = d.tag;
    }
    //Instance Methods
    player.prototype.walk = function () {
        return this.name + " is walking..." + "(player_tag: " + this.tag + ")";
    };
    player.prototype.shoot = function () {
        return this.name + " is shooting..." + "(player_tag: " + this.tag + ")";
    };
    return player;
}());
var myPlayer = new player({ name: "Gustavo", tag: "455" });
//-----------------
var orderStatus;
(function (orderStatus) {
    orderStatus["confirmation"] = "Confirming";
    orderStatus["preparing"] = "Preparing";
    orderStatus["deliverying"] = "Deliverying";
})(orderStatus || (orderStatus = {}));
var order = /** @class */ (function () {
    function order(d) {
        this.item = d.item.toUpperCase();
        this.price = d.price.toFixed(2);
        this.status = orderStatus.confirmation;
    }
    order.prototype.display = function () {
        return ("Pedido: { item: " +
            this.item +
            "; valor: R$" +
            this.price +
            "; status: " +
            this.status +
            " }");
    };
    order.prototype.updateStatus = function () {
        if (this.status === orderStatus.confirmation) {
            this.status = orderStatus.preparing;
        }
        else {
            this.status = orderStatus.deliverying;
        }
        return this;
    };
    return order;
}());
var newOrder = new order({
    item: "ba",
    price: 15.6,
});
console.log(newOrder.updateStatus().display());
//----------------------
var user = /** @class */ (function () {
    function user() {
        this.name = "dashdjkah";
        this.password = "sadas7687678";
    }
    Object.defineProperty(user.prototype, "display", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "p", {
        set: function (d) {
            this.name = d.n;
            this.password = d.p;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var newUser = new user();
newUser.p = { n: "Gustavo", p: "gustavo2409" };
console.log(newUser.display);
//------------------
var child = /** @class */ (function () {
    function child(n, a) {
        this.name = n;
        this.age = a;
    }
    child.compareAge = function (c1, c2) {
        if (c1.age > c2.age) {
            return c1.name + " is older than " + c2.name;
        }
        return c2.name + " is older than " + c1.name;
    };
    return child;
}());
var child1 = new child("Robert", 7);
var child2 = new child("Julia", 4);
console.log(child.compareAge(child1, child2));
//-----------------------
var costumer = /** @class */ (function () {
    function costumer(n, a, nos) {
        this.name = n;
        this.age = a;
        this.numberOfSales = nos;
    }
    return costumer;
}());
var memberCostumer = /** @class */ (function (_super) {
    __extends(memberCostumer, _super);
    function memberCostumer(n, a, nos, b) {
        var _this = _super.call(this, n, a, nos) || this;
        _this.benefits = b;
        return _this;
    }
    memberCostumer.prototype.displayBenefits = function () {
        return this.benefits;
    };
    return memberCostumer;
}(costumer));
var newCostumer = new costumer("Gustavo", 24, 32);
var newMember = new memberCostumer("Gustavo", 24, 32, [
    "daily-cupoms",
    "discount",
]);
console.log(newCostumer);
console.log(newMember);
//-----------------
//Factory function
function Cat(name) {
    return {
        name: function () { return console.log(name); },
        sound: function () { return console.log("Meow..."); },
    };
}
var myCat = Cat("Julio");
myCat.name();
myCat.sound();
//Constructor function
function Rat(name) {
    //const this = {};
    this.name = function () { return console.log(name); };
    this.eat = function () { return console.log(name, "is eating carrot..."); };
    //return this;
}
var myRat = new Rat("René");
myRat.eat();
//Inheritance in factory function
function ninja(n) {
    return {
        name: function () { return console.log(n); },
        atack: function () { return console.log(n, "atacked!"); },
    };
}
function specialNinja(n) {
    return Object.create(ninja(n), {
        specialAtack: {
            value: function () { return console.log(n, "used special atack!!!"); },
        },
    });
}
var mySamurai = specialNinja("Hiruzen");
mySamurai.specialAtack();
//Inheritance in constructor function
function Car(c) {
    this.brand = c.brand;
    this.model = c.model;
    this.color = c.color;
    this.show = function () {
        return console.log("Esse é um carro", c.color, c.model, "da marca", c.brand + ".");
    };
}
function SuperCar(c) {
    this.__proto__ = new Car(c);
    this.turbo = function () { return console.log("WOOOOOOOW! MODO TURBO ATIVADO!"); };
}
var mySuperCar = new SuperCar({
    brand: "Volkswagen",
    model: "SUV",
    color: "red",
});
mySuperCar.show();
mySuperCar.turbo();
/* function createUser(d: { u: string; p: string }) {
  return {
    username: d.u,
    password: d.p,

    data() {
      console.log(this.username);
      console.log(this.password);
    },
  };
}

function createMemberUser(d: { u: string; p: string }) {
  return Object.create(createUser(d), {
    benefits: {
      value: ["free-cupoms"],
    },
  });
}

const myUser = createUser({ u: "xevil300", p: "sada32323" });
myUser.data();
const myMemberUser = createMemberUser({ u: "xevil300", p: "sada32323" });
myMemberUser.data();
console.log(myMemberUser.benefits); */
/* function User(d: { u: string; p: string }) {
  this.username = d.u;
  this.password = d.p;

  this.data = () => {
    console.log(this.username);
    console.log(this.password);
  };
}

function MemberUser(d: { u: string; p: string }) {
  User.call(this, d);
  this.benefits = () => console.log(["free-cupoms"])
}

const myUser = new User({ u: "xevil300", p: "sadsa788" })
myUser.data();
const myMemberUser = new MemberUser({ u: "xevil300", p: "sadsa788" })
myMemberUser.data();
myMemberUser.benefits(); */
