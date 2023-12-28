function verifyUser(u) {
    console.log(u.privateAcc);
}
verifyUser({ email: "example@google.com", username: "Gustavo", id: 255 });
function newMemberUser(mu) {
    console.log(mu);
}
newMemberUser({
    username: "Gustavo2409",
    password: 21312,
    email: { name: "gustavinho", address: "@members.com" },
    getCupom: function () {
        return "members24237";
    },
});
