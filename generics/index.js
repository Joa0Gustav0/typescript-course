//Generics
function show(val) {
    return val;
}
console.log(show(321));
console.log(show({ item: "Hot Dog", price: 24.99 }));
//Generics in Arrays
function shift(val) {
    if (val.length < 2) {
        throw new Error("Arrays length should be greater than 1.");
    }
    val.shift();
    return val[0];
}
var myArr = [32, 786, 54, 928];
console.log(shift(myArr));
var pop = function (val) {
    if (val.length < 2) {
        throw new Error("Arrays length should be greater than 1.");
    }
    val.pop();
    return val[val.length - 1];
};
console.log("New last element: " + pop([1, 2]));
//--------------------
function getProperty(obj, objProp) {
    return obj[objProp];
}
var myUser = {
    name: "sadsada",
    age: 34,
};
console.log(getProperty(myUser, "age"));
var Cart = /** @class */ (function () {
    function Cart() {
        this.cart = [];
    }
    Cart.prototype.showCart = function () {
        console.log(this.cart);
    };
    Cart.prototype.addToCart = function (product) {
        this.cart.push(product);
        return this;
    };
    return Cart;
}());
var myCart = new Cart();
myCart.addToCart({
    item: "Pan",
    price: 21.32,
});
myCart.showCart();
var mySpecialCart = new Cart();
mySpecialCart.addToCart({
    item: "Fan",
    price: 65,
    verified: true,
});
mySpecialCart.showCart();
