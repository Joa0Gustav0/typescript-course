//Declaring a variable
//annotation - most prefered to be used into functions
let greetings: string = "Hello, World!";

//Inference
let greetings2 = "Hello, World!";

//Working with functions
function sum(num1: number, num2: number) {
  console.log(num1 + num2);
}

sum(1, 2);

//Arrays
let myArr: number[] = [1, 2, 2, 2, 233, 23, 23, 2, 2];

//Tuples
let myArr2: [number, string, boolean] = [2, "name", false];

let tupleArr: [string, number, boolean][] = [
  ["Gustavo", 18, true],
  ["Paulo", 21, false],
];

function gretting() {
    return (target: any, descriptor: PropertyDescriptor) => {
        
    }
}

class student {
    username;
    gender;

    constructor(u: string, g: string) {
        this.username = u;
        this.gender = g;
    }

    grettings() {}
}


