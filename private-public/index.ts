//Private and Public
class User {
  constructor(
    public username: string,
    public password: string,
    private readonly id: number
  ) {}

  data = () => {
    console.log(this.username);
    console.log(this.password);
    return "This are your information.";
  };
}

const myUser = new User("Gustavo", "adas78978", 445);
console.log(myUser.data());

export {};
