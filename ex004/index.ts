//Union Types
var password: string | number = "dasdjkashdk7687887";
password = 37231287319;

var myArray: Array<string | number> = [];
var myArray2: (string | number)[] = [];

myArray.push("ahdasjkdh");
myArray.push(21312321321);

type nonPaidUser = {
  name: string;
  isActive: boolean;
};
type paidUser = {
  name: string;
  isActive: boolean;
  benefits: string[];
};

function logger(user: nonPaidUser | paidUser) {
  console.log(user.name);
  user.isActive ? console.log("Active") : console.log("Unactive");
}

logger({ name: "ashdsajkdas", isActive: true, benefits: ["dsadksal"] });

export {};
