function constructFrame(d: {widthInfo: string | number, widthSize?: number, height: number }) {
  if (typeof d.widthInfo === "string") {
    if (!d.widthSize) {
      throw new Error("A width for your frame is required.")
    }
    console.log("+" + d.widthInfo.repeat(d.widthSize) + "+");
    for (var i = 0; i < d.height; i++) console.log(d.widthInfo + " ".repeat(d.widthSize) + d.widthInfo);
    console.log("+" + d.widthInfo.repeat(d.widthSize) + "+");
    return;
  }
  console.log("+" + "-".repeat(d.widthInfo) + "+");
  for (var i = 0; i < d.height; i++) console.log("-" + " ".repeat(d.widthInfo) + "-");
  console.log("+" + "-".repeat(d.widthInfo) + "+");
}

constructFrame({
  widthInfo: 10,
  widthSize: 5,
  height: 5,
});

interface animals {
  petName: string;
}
interface monkey extends animals {
  canJump: true;
}
interface eagle extends animals {
  canFly: true;
}

class Animal<T>{
  constructor(public data: T) {}
  
  static identity(animal) {
    if ("canJump" in animal.data) {
      console.log(animal.data.petName, "is a monkey!")
      return;
    }
    console.log(animal.data.petName, "is an eagle.")
  }
}

const myAnimal = new Animal<eagle>({petName: "Flavio", canFly: true})
Animal.identity(myAnimal);