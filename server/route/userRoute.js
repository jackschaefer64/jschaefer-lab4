console.log("[userRoutes] initialized");
let userController = require('../controller/userController');
var express = require('express');
var router = express.Router();

router.route('/')
            .get((req, res) =>{
                userController.getAllUsers(req, res);
            })
            .post((req, res) => {
                userController.saveUser(req, res);
            }
        );
    
router.route('/:index')
            .get((req, res)=> {
                userController.getUser(req, res);
            }
        );


module.exports = router;