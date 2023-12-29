//Generics
function show<T>(val: T): T {
    return val;
}

console.log(show(321))

interface order {
    item: string,
    price: number,
}

console.log(show<order>({ item: "Hot Dog", price: 24.99}));
