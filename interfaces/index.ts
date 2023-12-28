//Interfaces
interface user {
  email: string;
  username: string;
  privateAcc?: true;
  readonly id: number;
}

function verifyUser(u: user) {
  console.log(u.privateAcc);
}

verifyUser({ email: "example@google.com", username: "Gustavo", id: 255 });

//Interfaces + Type Aliases

type email = {
  name: string;
  address: "@members.com";
};

interface memberUser {
  username: string;
  password: string | number;
  email: email;

  getCupom(): string;
}

function newMemberUser(mu: memberUser) {
  console.log(mu);
}

newMemberUser({
  username: "Gustavo2409",
  password: 21312,
  email: { name: "gustavinho", address: "@members.com" },
  getCupom() {
    return "members24237";
  },
});

//Reopening the interface
interface student {
  name: string;
  age: number;
  readonly reagistrationId: number;
}

interface student {
    contact: string | number;
}

var newStudent: student = {
    name: "Gustavo",
    age: 17,
    reagistrationId: 20150321,
    contact: 7893732432,
}
