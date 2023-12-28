"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Objects
var user = {
    name: "Gustavo",
    email: "gustavo@dev.com",
    isActive: true,
};
function createUser(infos) {
    console.log("O novo usuario se chama: " + infos.name);
    console.log("Disponivel: " + infos.isAvailable);
}
createUser({ name: "Gustavo", isAvailable: true });
var newUser = {
    name: "Gustavo",
    email: "g@g.com",
    isActive: true,
    _id: ["Olá"],
};
