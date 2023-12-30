function logger(constructor: any): any {
  Object.seal(User);
  return class extends constructor {
    loginTime = (new Date().getHours() + "h:" + new Date().getMinutes() + "min");
  }
}

//Class Decorator
@logger
class User {
  data;

  constructor(
    public username: string,
    public password: string,
  ) {
    this.data = () => console.log({
      username: username,
      password: password,
    });
  }

}

const newUser = new User("Gustavo", "Gustavo2409")
if ("loginTime" in newUser)
  console.log(newUser.loginTime);