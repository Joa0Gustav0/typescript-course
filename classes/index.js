"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
