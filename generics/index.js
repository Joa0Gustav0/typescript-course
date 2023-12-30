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
