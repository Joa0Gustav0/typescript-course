//Abstract Classes
/* interface userParams {
    username: string,
    password: string,
}

class User implements userParams {
  constructor(
    public username: string,
    public password: string,
  ) {}
}

const newUser = new User("asdsad", "dsadada");
console.log(newUser.username); */

abstract class UserModel {
  constructor(public username: string, public password: string) {}

  abstract data(): {};
}

class User extends UserModel {
  constructor(u: string, p: string) {
    super(u, p);
  }

  data() {
    return { username: this.username, password: this.password };
  }
}

const myUser = new User("Gustavo", "asddas45345");
console.log(myUser.data());
