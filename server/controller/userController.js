console.log("[userController] initialized");
let User = require('../model/user');
let userService = require('../service/userService');

let users = [];
let jack = User.createUser("Jack", "Schaefer", "001", "js@gmail");
let alice = User.createUser("Alice", "Thompson", "002", "at@gmail");
let bob = User.createUser("Bob", "Diane", "003", "bd@gmail");
let charlie = User.createUser("Charlie", "Green", "004", "cg@gmail");
let david = User.createUser("David", "Barker", "005", "db@gmail");

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
        let newUser = User.createUser(req.body.firstName, req.body.lastName, req.body.userID, req.body.email);
        users.push(newUser);
        res.setHeader('Content-Type', 'application/json');
    res.send(users);
}
exports.updateUser = (req, res) => {
        let updatedUser = User.createUser(
            req.body.firstName,
            req.body.lastName,
            req.body.userID,
            req.body.email);
        users[req.params.index] = updatedUser;
        res.setHeader('Content-Type','application/json');
        res.send(updatedUser);
}
exports.updateUserEmail = (req, res) => {
        var updatedUser = users[req.params.index];
        if(req.body.email)
        {
            updatedUser.email = req.body.email;
        }
        users[req.params.index] = updatedUser;
        res.setHeader('Content-Type', 'application/json');
        res.send(users[req.params.index]);
        
}
exports.deleteUser = (req, res) => {
        users.splice(req.params.index, 1);
        res.setHeader('Content-Type', 'application/json');
        res.send(users);
}
exports.getUserByEmail = (req, res) => {
    let user = users.find(u => u.email === req.params.email);
    res.setHeader('Content-Type','application/json');
    res.send(user);
}