var player = /** @class */ (function () {
    function player(d) {
        this.name = d.name;
        this.tag = d.tag;
    }
    player.prototype.walk = function () {
        return this.name + " is walking..." + "(player_tag: " + this.tag + ")";
    };
    player.prototype.shoot = function () {
        return this.name + " is shooting..." + "(player_tag: " + this.tag + ")";
    };
    return player;
}());
var myPlayer = new player({ name: "Gustavo", tag: "455" });
//-----------------
var orderStatus;
(function (orderStatus) {
    orderStatus["confirmation"] = "Confirming";
    orderStatus["preparing"] = "Preparing";
    orderStatus["deliverying"] = "Deliverying";
})(orderStatus || (orderStatus = {}));
var order = /** @class */ (function () {
    function order(d) {
        this.item = d.item.toUpperCase();
        this.price = d.price.toFixed(2);
        this.status = orderStatus.confirmation;
    }
    order.prototype.display = function () {
        return "Pedido: { item: " + this.item + "; valor: R$" + this.price + "; status: " + this.status + " }";
    };
    order.prototype.updateStatus = function () {
        if (this.status === orderStatus.confirmation) {
            this.status = orderStatus.preparing;
        }
        else {
            this.status = orderStatus.deliverying;
        }
        return this.display();
    };
    return order;
}());
var newOrder = new order({
    item: "ba",
    price: 15.6,
});
console.log(newOrder.display());
