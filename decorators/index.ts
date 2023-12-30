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

//Class Decorator
@logger
class User {
  @checkQuote()
  quote;
  data;

  constructor(username: string, password: string, quote: string) {
    this.quote = quote;
    this.data = () =>
      console.log({
        username: username,
        password: password,
      });
  }
}

const newUser = new User("Gustavo", "Gustavo2409", "Penso logo existo.");
console.log(newUser.quote);
