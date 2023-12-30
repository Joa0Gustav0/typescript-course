function logger(constructor: any): any {
  Object.seal(User);
  return class extends constructor {
    loginTime = new Date().getHours() + "h:" + new Date().getMinutes() + "min";
  };
}

function checkQuote() {
  return (constructor: any, propKey: string) => {
    var propertyVal = constructor[propKey];

    const getter = () => propertyVal;
    const setter = (value: string) => {
      switch (value) {
        case "Penso logo existo.":
          propertyVal = "Isso foi pensado por René Descartes.";
          break;
        case "Só sei que nada sei.":
          propertyVal = "Isso foi pensado por Sócrates.";
          break;
        default:
          propertyVal = "Realmente só sei que nada sei...";
      }
    };

    Object.defineProperty(constructor, propKey, { get: getter, set: setter });
  };
}

function dataChanger<T>() {
  return (
    constructor: any,
    methodKey: string,
    descriptor: PropertyDescriptor
  ): any => {
    const originalMethod: () => {} = descriptor.value;

    descriptor.value = ( ...args: any) => {
      switch (args[0]) {
        case "username":
          if (args[1].length < 4) {
            throw new Error(
              args[1] +
                " is invalid. Data for " +
                args[0] +
                " should have at least 4 characters."
            );
          }
        case "password":
          if (args[1].length < 6) {
            throw new Error(
              args[1] +
                " is invalid. Data for " +
                args[0] +
                " should have at least 6 characters."
            );
          }
      }
      originalMethod.apply(args[2], args)
      return descriptor;
    };
  };
}

//Class Decorator
@logger
class User {
  //Property Decorator
  @checkQuote()
  quote;

  //Method Decorator
  @dataChanger()
  changeData(dataKey: "username" | "password", newData: string, current: User) {
    this.data[dataKey] = newData;
  }

  constructor(
    public data: { username: string; password: string },
    quote: string
  ) {
    this.quote = quote;
  }
}

const newUser = new User(
  { username: "Gustavo", password: "Gustavo2409" },
  "Penso logo existo."
);
console.log(newUser.quote);
newUser.changeData("password", "2409Gustavo2409", newUser);
console.log(newUser.data);
