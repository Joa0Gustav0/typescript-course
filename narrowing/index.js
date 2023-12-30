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
var myAnimal = new Animal({
    petName: "Flavio",
    canFly: true,
    favoriteFood: "Seeds",
});
Animal.identity(myAnimal);
//Type Predicates
function matches(animal) {
    return animal !== undefined;
}
console.log(matches(myAnimal));
//------------
//Review
function add(val) {
    if (typeof val === "string") {
        return val + "2";
    }
    return (val += 2);
}
console.log(add("ID21231-"));
console.log(add(3));
var SchoolPersona = /** @class */ (function () {
    function SchoolPersona(d) {
        this.data = d;
    }
    SchoolPersona.checkType = function (sp) {
        /* if ("teachersRoomAccess" in sp.data) {
          console.log("This person is a teacher.");
          return;
        }
        console.log("This person is a student."); */
        if (sp.data.teachersRoomAccess) {
            console.log("This person is a teacher.");
            return;
        }
        console.log("This person is a student.");
    };
    return SchoolPersona;
}());
var newStudent = new SchoolPersona({
    name: "Gustavo",
    age: 14,
});
var newTeacher = new SchoolPersona({
    name: "Sara",
    age: 42,
    teachersRoomAccess: true,
});
SchoolPersona.checkType(newTeacher);
var Shape = /** @class */ (function () {
    function Shape(d) {
        this.data = d;
    }
    Shape.getArea = function (shape) {
        if (shape.data.kind === "square")
            return Math.pow(shape.data.sideLength, 2);
        return Math.PI * Math.pow(shape.data.radius, 2);
    };
    return Shape;
}());
var myShape = new Shape({ kind: "circle", radius: 16 });
console.log(Shape.getArea(myShape).toFixed(2));
