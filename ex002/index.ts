//Objects
const user = {
  name: "Gustavo",
  email: "gustavo@dev.com",
  isActive: true,
};

function createUser(infos: { name: string; isAvailable: boolean }) {
  console.log("O novo usuario se chama: " + infos.name);
  console.log("Disponivel: " + infos.isAvailable);
}

createUser({ name: "Gustavo", isAvailable: true });

//Type Aliases
/* type user = { name: string; email: string; isVerified: boolean };

function validateUser(user: user) {} */

//Read Only
type user = {
    name: string,
    email: string,
    isActive: boolean,
    readonly _id: string[],
}

var newUser: user = {
    name: "Gustavo",
    email: "g@g.com",
    isActive: true,
    _id: ["Olá"],
};


export {};
