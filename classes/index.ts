//Classes
interface playerParams {
  name: string;
  tag: string;
}

class player {
  name;
  tag;

  constructor(d: playerParams) {
    this.name = d.name;
    this.tag = d.tag;
  }

  walk() {
    return this.name + " is walking..." + "(player_tag: " + this.tag + ")";
  }
  shoot() {
    return this.name + " is shooting..." + "(player_tag: " + this.tag + ")";
  }
}

const myPlayer = new player({ name: "Gustavo", tag: "455" });

export {};
