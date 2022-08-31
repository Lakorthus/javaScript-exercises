
const userName = Symbol("userName");
const password = Symbol("password");

const user = {
    [userName]: "julio",
    [password]: 123,
    age:27
}
console.log(user.userName)