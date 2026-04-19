console.log("[userRoutes] initialized");
let userController = require('../controller/userController');
var express = require('express');
var router = express.Router();
module.exports = router;
router.route('/')
            .get((req, res) =>{
                console.log("Getting all users");
                userController.getAllUsers(req, res);
            })
            .post((req, res) => {
                console.log("Saving user");
                userController.saveUser(req, res);
            }
        );
router.get('/email/:email', (req, res) => {
            userController.getUserByEmail(req, res);
        });  
router.route('/:index')
            .get((req, res)=> {
                console.log("Getting individual user");
                userController.getUser(req, res);
            })
            .put((req, res)=> {
                console.log("Fully updating user");
                userController.updateUser(req, res);
            })
            .patch((req, res)=> {
                console.log("Partial updating user");
                userController.updateUserEmail(req, res);
            })
            .delete((req, res) => {
                console.log("Deleting user");
                userController.deleteUser(req, res);
            }
        );




