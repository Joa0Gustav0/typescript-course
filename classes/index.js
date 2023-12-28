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
        return this.display();
    };
    return order;
}());
var newOrder = new order({
    item: "ba",
    price: 15.6,
});
console.log(newOrder.display());
//----------------------
function logger() {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: function () { return target[key]; },
            set: function () { return "empty"; },
        });
    };
}
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
var newMember = new memberCostumer("Gustavo", 24, 32, ["daily-cupoms", "discount"]);
console.log(newCostumer);
console.log(newMember);
