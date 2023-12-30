function constructFrame(d) {
    if (typeof d.widthInfo === "string") {
        if (!d.widthSize) {
            throw new Error("A width for your frame is required.");
        }
        console.log("+" + d.widthInfo.repeat(d.widthSize) + "+");
        for (var i = 0; i < d.height; i++)
            console.log(d.widthInfo + " ".repeat(d.widthSize) + d.widthInfo);
        console.log("+" + d.widthInfo.repeat(d.widthSize) + "+");
        return;
    }
    console.log("+" + "-".repeat(d.widthInfo) + "+");
    for (var i = 0; i < d.height; i++)
        console.log("-" + " ".repeat(d.widthInfo) + "-");
    console.log("+" + "-".repeat(d.widthInfo) + "+");
}
constructFrame({
    widthInfo: 10,
    widthSize: 5,
    height: 5,
});
var Animal = /** @class */ (function () {
    function Animal(data) {
        this.data = data;
    }
    Animal.identity = function (animal) {
        //The In Narrowing Operator
        if ("canJump" in animal.data) {
            console.log(animal.data.petName, "is a monkey!");
            return;
        }
        console.log(animal.data.petName, "is an eagle.");
    };
    return Animal;
}());
var myAnimal = new Animal({ petName: "Flavio", canFly: true, favoriteFood: "Seeds" });
Animal.identity(myAnimal);
//Type Predicates
function matches(animal) {
    return animal !== undefined;
}
console.log(matches(myAnimal));
