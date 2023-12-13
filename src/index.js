/* const sumNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(sumNumbers(2, 2)); */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
function logger(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.message = "O nome inserido refere-se a um estudante.";
            return _this;
        }
        return class_1;
    }(target));
}
var student = function () {
    var _classDecorators = [logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var student = _classThis = /** @class */ (function () {
        function student_1(name) {
        }
        return student_1;
    }());
    __setFunctionName(_classThis, "student");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        student = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return student = _classThis;
}();
console.log(new student('Paulo'));
