//Classes
interface playerParams {
  name: string;
  tag: string;
}

class player {
  //Instance Properties
  name;
  tag;

  constructor(d: playerParams) {
    this.name = d.name;
    this.tag = d.tag;
  }

  //Instance Methods
  walk() {
    return this.name + " is walking..." + "(player_tag: " + this.tag + ")";
  }
  shoot() {
    return this.name + " is shooting..." + "(player_tag: " + this.tag + ")";
  }
}

const myPlayer = new player({ name: "Gustavo", tag: "455" });

//-----------------

enum orderStatus {
  confirmation = "Confirming",
  preparing = "Preparing",
  deliverying = "Deliverying",
}

interface orderInfos {
  item: string;
  price: number;
}
interface advancedOrderInfos extends orderInfos {
  status: orderStatus;
}

class order implements advancedOrderInfos {
  item;
  price;
  status: orderStatus;

  display() {
    return (
      "Pedido: { item: " +
      this.item +
      "; valor: R$" +
      this.price +
      "; status: " +
      this.status +
      " }"
    );
  }

  updateStatus() {
    if (this.status === orderStatus.confirmation) {
      this.status = orderStatus.preparing;
    } else {
      this.status = orderStatus.deliverying;
    }
    return this;
  }

  constructor(d: orderInfos) {
    this.item = d.item.toUpperCase();
    this.price = d.price.toFixed(2);
    this.status = orderStatus.confirmation;
  }
}

const newOrder = new order({
  item: "ba",
  price: 15.6,
});

console.log(newOrder.updateStatus().display());

//----------------------

class user {
  name = "dashdjkah";
  password = "sadas7687678";

  get display() {
    return this.password;
  }
  set p(d: { n: string; p: string }) {
    this.name = d.n;
    this.password = d.p;
  }
}

const newUser = new user();
newUser.p = { n: "Gustavo", p: "gustavo2409" };
console.log(newUser.display);

//------------------

class child {
  name;
  age;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  static compareAge(c1: child, c2: child) {
    if (c1.age > c2.age) {
      return c1.name + " is older than " + c2.name;
    }
    return c2.name + " is older than " + c1.name;
  }
}

const child1 = new child("Robert", 7);
const child2 = new child("Julia", 4);
console.log(child.compareAge(child1, child2));

//-----------------------

class costumer {
  name;
  age;
  numberOfSales;

  constructor(n: string, a: number, nos: number) {
    this.name = n;
    this.age = a;
    this.numberOfSales = nos;
  }
}

class memberCostumer extends costumer {
  benefits;

  constructor(n: string, a: number, nos: number, b: Array<string>) {
    super(n, a, nos);
    this.benefits = b;
  }

  displayBenefits() {
    return this.benefits;
  }
}

const newCostumer = new costumer("Gustavo", 24, 32);
const newMember = new memberCostumer("Gustavo", 24, 32, [
  "daily-cupoms",
  "discount",
]);

console.log(newCostumer);
console.log(newMember);

//-----------------

//Factory function
function Cat(name: string) {
  return {
    name: () => console.log(name),
    sound: () => console.log("Meow..."),
  };
}

const myCat = Cat("Julio");
myCat.name();
myCat.sound();

//Constructor function
function Rat(name: string) {
  //const this = {};
  this.name = () => console.log(name);
  this.eat = () => console.log(name, "is eating carrot...");
  //return this;
}

const myRat = new Rat("René");
myRat.eat();

//Inheritance in factory function
function ninja(n: string) {
  return {
    name: () => console.log(n),
    atack: () => console.log(n, "atacked!"),
  };
}

function specialNinja(n: string) {
  return Object.create(ninja(n), {
    specialAtack: {
      value: () => console.log(n, "used special atack!!!"),
    },
  });
}

const mySamurai = specialNinja("Hiruzen");
mySamurai.specialAtack();

//Inheritance in constructor function
function Car(c: { brand: string; model: string; color: string }) {
  this.brand = c.brand;
  this.model = c.model;
  this.color = c.color;

  this.show = () =>
    console.log("Esse é um carro", c.color, c.model, "da marca", c.brand + ".");
}

function SuperCar(c: { brand: string; model: string; color: string }) {
  this.__proto__ = new Car(c);
  this.turbo = () => console.log("WOOOOOOOW! MODO TURBO ATIVADO!");
}

const mySuperCar = new SuperCar({
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
