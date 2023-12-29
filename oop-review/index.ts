//Constructor Function - Inheritance and Prototype Inheritance ✅
function Account(d: { name: string; password: string }) {
  this.name = d.name;
  this.password = d.password;

  this.data = () => {
    console.log(this.name);
    console.log(this.password);
  };
}

function PaidAccount(
  d: { name: string; password: string },
  creditCard: { cnum: number; cval: [number, number]; cvc: number }
) {
  Account.call(this, d);
  this.hasLicense = true;
  this.creditCard = creditCard;
}

const newAccount = new Account({
  name: "Gustavo",
  password: "gustavo2409",
});
const newPaidAccount = new PaidAccount(
  {
    name: "Gustavo",
    password: "gustavo2409",
  },
  { cnum: 2312317879, cval: [12, 25], cvc: 328 }
);

console.log(newAccount);
console.log(newPaidAccount);

//Factory Function - Prototype Inheritance ✅
function createUser(d: { u: string; p: string }) {
  return {
    data: {
      name: d.u,
      password: d.p,
    },
    displayData: function () {
      console.log(this.data.name);
      console.log(this.data.password);
    },
  };
}

function createMemberUser(d: { u: string; p: string }) {
  return Object.create(createUser(d), {
    membershipID: {
        value: "2312321ID"
    }
  });
}

const newUser = createUser({ u: "Xevil300", p: "asdsa87878" });
const newMemberUser = createMemberUser({ u: "Xevil300", p: "asdsa87878" });

console.log(newUser);
console.log(newMemberUser);
