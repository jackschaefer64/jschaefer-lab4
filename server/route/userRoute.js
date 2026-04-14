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
                userController.getUser(req, res);
            }
        );


