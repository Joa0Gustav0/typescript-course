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

//-----------------

enum orderStatus {
  confirmation = "Confirming",
  preparing = "Preparing",
  deliverying = "Deliverying",
}

interface orderInfos {
  item: string;
  price: number;
}
interface advancedOrderInfos extends orderInfos {
  status: orderStatus;
}

class order implements advancedOrderInfos {
  item;
  price;
  status: orderStatus;

  display() {
    return "Pedido: { item: " + this.item + "; valor: R$" + this.price + "; status: " + this.status + " }";
  }

  updateStatus() {
    if (this.status === orderStatus.confirmation) {
      this.status = orderStatus.preparing;
    } else {
      this.status = orderStatus.deliverying;
    }
    return this.display();
  }

  constructor(d: orderInfos) {
    this.item = d.item.toUpperCase();
    this.price = d.price.toFixed(2);
    this.status = orderStatus.confirmation;
  }
}

const newOrder = new order({
  item: "ba",
  price: 15.6,
});

console.log(newOrder.display());
