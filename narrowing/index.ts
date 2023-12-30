function constructFrame(d: {
  widthInfo: string | number;
  widthSize?: number;
  height: number;
}) {
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

interface animals {
  petName: string;
}
interface monkey extends animals {
  canJump: true;
  favoriteFood: "Banana";
}
interface eagle extends animals {
  canFly: true;
  favoriteFood: "Seeds";
}

class Animal<T> {
  constructor(public data: T) {}

  static identity(animal) {
    //The In Narrowing Operator
    if ("canJump" in animal.data) {
      console.log(animal.data.petName, "is a monkey!");
      return;
    }
    console.log(animal.data.petName, "is an eagle.");
  }
}

const myAnimal = new Animal<eagle>({
  petName: "Flavio",
  canFly: true,
  favoriteFood: "Seeds",
});
Animal.identity(myAnimal);

//Type Predicates
function matches(animal: Animal<eagle | monkey>) {
  return (animal as Animal<monkey>) !== undefined;
}

console.log(matches(myAnimal));

//------------
//Review

function add(val: string | number): string | number {
  if (typeof val === "string") {
    return val + "2";
  }
  return (val += 2);
}

console.log(add("ID21231-"));
console.log(add(3));

//The In Operator and Type predicates
interface student {
  name: string;
  age: number;
}

interface teacher extends student {
  teachersRoomAccess: true;
}

class SchoolPersona<T> {
  constructor(d: T) {
    this.data = d;
  }

  data;

  static checkType(sp) {
    /* if ("teachersRoomAccess" in sp.data) {
      console.log("This person is a teacher.");
      return;
    }
    console.log("This person is a student."); */

    if ((sp as SchoolPersona<teacher>).data.teachersRoomAccess) {
      console.log("This person is a teacher.");
      return;
    }
    console.log("This person is a student.");
  }
}

const newStudent = new SchoolPersona<student>({
  name: "Gustavo",
  age: 14,
});
const newTeacher = new SchoolPersona<teacher>({
  name: "Sara",
  age: 42,
  teachersRoomAccess: true,
});

SchoolPersona.checkType(newTeacher);

//----------------
//Discriminated Unions
interface _Shapes {
  kind: "circle" | "square";
}
interface Square extends _Shapes {
  sideLength: number;
}
interface Circle extends _Shapes {
  radius: number;
}
type shapes = Circle | Square;

class Shape {
  data;
  constructor(d: shapes) {
    this.data = d;
  }

  static getArea(shape: Shape): number {
    if (shape.data.kind === "square")
      return shape.data.sideLength**2;
    return Math.PI * shape.data.radius**2;
  }
}

const myShape = new Shape({kind: "circle", radius: 16});
console.log(Shape.getArea(myShape).toFixed(2));