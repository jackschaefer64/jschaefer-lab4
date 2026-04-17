console.log("[userRoutes] initialized");
let userController = require('../controller/userController');
var express = require('express');
var router = express.Router();
module.exports = router;
router.route('/')
            .get((req, res) =>{
                console.log("getting all users");
                userController.getAllUsers(req, res);
            })
            .post((req, res) => {
                console.log("saving user");
                userController.saveUser(req, res);
            }
        );
    
router.route('/:index')
            .get((req, res)=> {
                console.log("getting individual");
                userController.getUser(req, res);
            })
            .put((req, res)=> {
                console.log("Fully saving");
                userController.updateUser(req, res);
            })
            .patch((req, res)=> {
                console.log("Partial saving");
                userController.updateUserEmail(req, res);
            })
            .delete((req, res) => {
                console.log("Deleting user");
                userController.deleteUser(req, res);
            }
        );



