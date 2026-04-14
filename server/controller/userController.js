console.log("[userController] initialized");
let User = require('../model/user');
let userService = require('../service/userService');

let users = [];
let jack = User.createUser("Jack", "Schaefer");
let alice = User.createUser("Alice", "Thompson");
let bob = User.createUser("Bob", "Diane");
let charlie = User.createUser("Charlie", "Green");
let david = User.createUser("David", "Barker");

users.push(jack);
users.push(alice);
users.push(bob);
users.push(charlie);
users.push(david);

console.log(users);
exports.getAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}
exports.getUser = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.index]);
}
exports.saveUser = (req, res) => {
        let newUser = User.createUser(req.body.firstName, req.body.lastName);
        users.push(newUser);
        res.setHeader('Content-Type', 'application/json');
    res.send(users);
}