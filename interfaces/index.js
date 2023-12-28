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
var newStudent = {
    name: "Gustavo",
    age: 17,
    reagistrationId: 20150321,
    contact: 7893732432,
};
var newVerifiedStudent = {
    name: "Gustavo",
    age: 17,
    reagistrationId: 20150321,
    contact: 7893732432,
    verified: true,
    busSeat: 23,
};
