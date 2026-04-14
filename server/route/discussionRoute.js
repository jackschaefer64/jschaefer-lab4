console.log("[discussionRoutes] initialized");
let discussionController = require('../controller/discussionController');
var express = require('express');
var router = express.Router();
module.exports = router;
router.route('/')
            .get((req, res) =>{
                console.log("getting all posts");
                discussionController.getAllPosts(req, res);
            })
            .post((req, res) => {
                console.log("saving user");
                discussionController.savePost(req, res);
            }
        );
    
router.route('/:index')
            .get((req, res)=> {
                discussionController.getPost(req, res);
            }
        );