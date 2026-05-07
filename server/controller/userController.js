console.log("[userController] initialized");
let User = require('../model/user');
let userService = require('../service/userService');

exports.getAllUsers = async (req, res) => {
    let users = await userService.getAllUsers();
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
}
exports.getUser = async (req, res) => {
    let user = await userService.getUser(req.params.id);
    res.json(user);
}
exports.saveUser = async (req, res) => {
    await userService.saveUser(
        req.body.firstName,
        req.body.lastName,
        req.body.email
    );
    let users = await userService.getAllUsers();
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
}
exports.updateUser = async (req, res) => {
        let updatedUser = await userService.updateUser(
            req.params.id,
            req.body.firstName,
            req.body.lastName,
            req.body.email
        );
        res.json(updatedUser);
}
exports.updateUserEmail = async (req, res) => {
       let existingUser = await userService.getUser(req.params.id);
       let updated = await userService.updateUser(
            req.params.id,
            existingUser.firstName,
            existingUser.lastName,
            req.body.email
       );
       res.json(updated)
        
}
exports.deleteUser = async (req, res) => {
        await userService.deleteUser(req.params.id);
        res.json({message: "Deleted"});
}
exports.getUserByEmail = (req, res) => {
    let user = users.find(u => u.email === req.params.email);
    res.setHeader('Content-Type','application/json');
    res.send(user);
}