/* const sumNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(sumNumbers(2, 2)); */

/* const array:{}[] = [{},{},{}] */

/* var student: {name: string, id:number}
student = {name: "pedro", id: 455} */

/* var allStudents: {name: string, id: number}[];

allStudents = [
    {name: "", id: 2},
]; */

/* interface loginParameters {
  username: string;
  password: number | string;
}

function login(data: loginParameters): void {
    console.log(`Hello, ${data.username}. Your password is: ${data.password}`)
}

login({username: "Ana", password: 123}) */

/* class student {
  name;
  age;
  approved;

  constructor(studentName: string, age: number, approved: boolean) {
    this.name = studentName;
    this.age = age;
    this.approved = approved;
  }

  displayData() {
    switch (this.approved) {
      case true:
        console.log(
          "O aluno: " + this.name + " possui " + this.age + " anos e foi aprovado."
        );
        break;
      case false:
        console.log(
          "O aluno: " + this.name + " possui " + this.age + " anos e foi reprovado."
        );
    }
  }
}

const choosenStudent = new student("Carlos", 26, true);

console.log(choosenStudent);
choosenStudent.displayData(); */

/* interface dataParameters {
    username: string;
    password: number;
    accessData: boolean;
    displayData(): void;
}

class login implements dataParameters {
    username;
    password;
    accessData;

    constructor(username: string, password: number, permission: boolean) {
        this.username = username;
        this.password = password;
        this.accessData = permission;
    }

    displayData(): void {
        if (this.accessData) {
            console.log("Usuário: " + this.username);
            console.log("Senha: " + this.password);
            return;
        }
        console.log("Você não possui acesso a essas informações.")
    }
}

const getLogin = new login("Xevil300", 12345, false)

getLogin.displayData() */

/* interface loginParameters {
    username: string;
    password: number | string;
    dataAccess: boolean;
}

function displayLoginData(data: loginParameters) {
    if (data.dataAccess) {
        console.log("Usuário: " + data.username);
        console.log("Senha: " + data.password);
        return;
    }
    console.log("O acesso a essas informações foi negado.")
}displayLoginData({username: "Xevil300", password: "kdajskd876867", dataAccess: false}); */

/* class login {
  username;
  password;
  accessData;
  extraDataAccess;
  age;
  name;

  constructor(
    username: string,
    password: number | string,
    accessData: boolean,
    extraDataAccess: boolean,
    name: string,
    age: number
  ) {
    this.username = username;
    this.password = password;
    this.accessData = accessData;
    this.extraDataAccess = extraDataAccess;
    this.age = age;
    this.name = name;
  }

  displayMainData(): void {
    if (this.accessData) {
      console.log(this.username);
      console.log(this.password);
      return;
    }
    console.log("Você não possui acesso a informações principais.");
  }
  displayExtraData(): void {
    if (this.extraDataAccess && this.accessData) {
      console.log("Seu nome é: " + this.name);
      console.log("Sua idade é: " + this.age);
      return;
    }
    console.log("Você não tem acesso a informações extras.");
  }
}

class userInput extends login {
  extraAccess;

  constructor(extraAccess: boolean) {
    super("Xevil300", "sadasjdasdalk", true, extraAccess, "Gustavo", 19);
    this.extraAccess = extraAccess;
  }
}

const user = new userInput(false)

user.displayMainData();
user.displayExtraData(); */

//DECORATORS

/* function loginExtraInformations (target: any):any {
    return class extends target {
        loginDate = `${new Date().getHours()}:${new Date().getMinutes()}`;
    }
}

@loginExtraInformations
class login {
  username;
  password;

  constructor(username: string, password: string | number) {
    this.username = username;
    this.password = password;
  }
}

const newLogin = new login ("Carlos", 12345)

console.log(newLogin) */
/* interface pessoas {
  nome: string;
  idade: number;
  profissao: string;
}

let pessoa1: pessoas = { nome: "", idade: 0, profissao: "" };
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz";

let pessoa2: pessoas = { nome: "", idade: 0, profissao: "" };
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3: pessoas = { nome: "laura", idade: 32, profissao: "Atriz" };

let pessoa4: pessoas = { nome: "Carlos", idade: 19, profissao: "padeiro" }; */

/* let botaoAtualizar = document.getElementById("atualizar-saldo")!;
let botaoLimpar = document.getElementById("limpar-saldo")!;
let soma = document.getElementById("soma");
let campoSaldo: HTMLElement | null = document.getElementById("campo-saldo");

if (campoSaldo) {
  campoSaldo.innerHTML = String(0);
}

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    campoSaldo.innerHTML += soma.toString();
  }
}

function limparSaldo() {
  if (campoSaldo) {
    campoSaldo.innerHTML = String(0);
  }
}

botaoAtualizar.addEventListener("click", function () {
  if (soma && soma.getAttribute("value")) {
    if (soma.getAttribute("value")) {
      somarAoSaldo(Number(soma));
    }
  }
});

botaoLimpar.addEventListener("click", function () {
  limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

/* class mainUserInfos {
  username = "Paulo";
  password = "1kjdsalkdajslo8";
  mainAcsess;
  extraAccess;

  constructor(mainPermission: boolean, extraPermission: boolean) {
    this.mainAcsess = mainPermission;
    this.extraAccess = extraPermission;
  }

  displayMainData() {
    if (!this.mainAcsess) {
      console.log("Access for main informations is denied.");
      return;
    }
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  }
}

class extraUserInfos extends mainUserInfos {
  name = "João Paulo";
  age = 15;

  displayExtraData() {
    if (!this.mainAcsess || !this.extraAccess) {
      console.log("Access for extra informations is denied.");
      return;
    }
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
  }
}

const dataAccess = new extraUserInfos(true, true);

dataAccess.displayMainData();
dataAccess.displayExtraData(); */

/* function filter<T>( arr: T[]): T[] {
  arr.pop()
  return arr;
}

console.log(filter([14, 16, 23, 25, 10]))
console.log(filter(["Gustavo", "Mariana", "Wynne"])) */

/* enum figure {
  width = 5,
  height = 12,
  hypotenuse = Math.sqrt(width**2 + height**2)
}

console.log(figure) */

/* function logger(target: any) {
  return class extends target {
    message = "O nome inserido refere-se a um estudante.";
  };
}

@logger
class student {
  constructor(name: string) {}
}

console.log(new student('Paulo')); */

/* function delay() {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = () => {
      console.log("loginTime: " + `${new Date().getHours()}:${new Date().getMinutes()}`);
    }

    return descriptor;
  }
}

class user {
  name;

  constructor (name: string) {
    this.name = name;
  }


  @delay()
  login() {
    console.log(this.name)
  }
}

new user("Paulo").login() */

//CLASS DECORATORS

function logger(): any {
  return (target: any) => {
    return class extends target {
      lastLogin =
        new Date().getHours() + "h:" + new Date().getMinutes() + "min";
    };
  };
}

@logger()
class user {
  username;
  password;

  constructor(un: string, pss: string | number) {
    this.username = un;
    this.password = pss;
  }
}

console.log(new user("Xevil300", "skjdsfsh800"));

//PROPERTIES DECORATORS

/* function tester(minL: number) {
  return (target: any, key: string) => {
    var v = target[key];

    const getter = () => v
    const setter = (value: string) => {
      if (value.length < minL) {
        throw new Error("value for " + key + "is invalid.")
      }

      v = value;
    }

    Object.defineProperty(target, key, {
      get: getter, 
      set: setter,
    })
  }
}

class movie {
  @tester(5)
  movieName;

  constructor(name: string) {
    this.movieName = name;
  }
}

console.log(new movie("d")) */

function loginWatcher() {
  return (target: any, key: string) => {
    var currentValue = target[key];

    const getter = () => currentValue;
    const setter = (value: string) => {
      currentValue = value;
      localStorage.setItem(
        "lastLogin",
        `${new Date().getHours()}h:${new Date().getMinutes()}min`
      );
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class login {
  @loginWatcher()
  lastLogin = localStorage.getItem("lastLogin");
  currentLogin = `${new Date().getHours()}h:${new Date().getMinutes()}min`;
}

console.log(new login());

//METHODS DECORATORS

/* function act(action: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const baseMethod = descriptor.value;

    const choosenAction = "walk"

    if (action === choosenAction) {
      baseMethod.apply();
    }
  }
}

class action {

  @act("drink water")
  drinkWater() {
    console.log('Você está bebendo água.')
  }

  @act("walk")
  walk() {
    console.log("Você está caminhando.")
  }
} */

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const baseMethod = descriptor.value;

    descriptor.value = function() {
      setTimeout((...args: any) => {
        baseMethod.apply(this, args)
      }, ms)
    }

    return descriptor;
  }
}

class example {
  username;

  constructor(name: string) {
    this.username = name;
  }

  @delay(5000)
  display() {
    console.log(this.username);
  }
}

new example("João").display();
