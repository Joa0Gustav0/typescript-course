//Generics
function show<T>(val: T): T {
  return val;
}

console.log(show(321));

interface order {
  item: string;
  price: number;
}

console.log(show<order>({ item: "Hot Dog", price: 24.99 }));

//Generics in Arrays
function shift<T>(val: Array<T>): T {
  if (val.length < 2) {
    throw new Error("Arrays length should be greater than 1.")
  }
  val.shift();
  return val[0];
}

const myArr = [32, 786, 54, 928];
console.log(shift(myArr));

const pop = <T>(val: T[]): T => {
  if (val.length < 2) {
    throw new Error("Arrays length should be greater than 1.")
  }
  val.pop();
  return val[val.length - 1];
}

console.log("New last element: " + pop([1, 2]));

//--------------------

function getProperty<T, Tprop extends keyof T>(obj: T, objProp: Tprop) {
  return obj[objProp];
}

const myUser = {
  name: "sadsada",
  age: 34,
}

console.log(getProperty(myUser, "age"));

//--------------------

interface products {
  item: string,
  price: number,
}

interface specialProducts extends products {
  verified: true,
}

class Cart<T>{
  cart: T[] = [];

  showCart() {
    console.log(this.cart);
  }
  addToCart(product: T) {
    this.cart.push(product);
    return this;
  }
} 

const myCart = new Cart<products>();
myCart.addToCart({
  item: "Pan",
  price: 21.32,
});
myCart.showCart();

const mySpecialCart = new Cart<specialProducts>();
mySpecialCart.addToCart({
  item: "Fan",
  price: 65,
  verified: true,
})
mySpecialCart.showCart();
