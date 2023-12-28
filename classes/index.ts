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
