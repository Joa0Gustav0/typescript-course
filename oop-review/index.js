//Constructor Function - Inheritance and Prototype Inheritance ✅
function Account(d) {
    var _this = this;
    this.name = d.name;
    this.password = d.password;
    this.data = function () {
        console.log(_this.name);
        console.log(_this.password);
    };
}
function PaidAccount(d, creditCard) {
    Account.call(this, d);
    this.hasLicense = true;
    this.creditCard = creditCard;
}
var newAccount = new Account({
    name: "Gustavo",
    password: "gustavo2409",
});
var newPaidAccount = new PaidAccount({
    name: "Gustavo",
    password: "gustavo2409",
}, { cnum: 2312317879, cval: [12, 25], cvc: 328 });
console.log(newAccount);
console.log(newPaidAccount);
//Factory Function - Prototype Inheritance ✅
function createUser(d) {
    return {
        data: {
            name: d.u,
            password: d.p,
        },
        displayData: function () {
            console.log(this.data.name);
            console.log(this.data.password);
        },
    };
}
function createMemberUser(d) {
    return Object.create(createUser(d), {
        membershipID: {
            value: "2312321ID"
        }
    });
}
var newUser = createUser({ u: "Xevil300", p: "asdsa87878" });
var newMemberUser = createMemberUser({ u: "Xevil300", p: "asdsa87878" });
console.log(newUser);
console.log(newMemberUser);
