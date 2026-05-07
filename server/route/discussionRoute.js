console.log("[discussionRoutes] initialized");
let discussionController = require('../controller/discussionController');
var express = require('express');
var router = express.Router();
module.exports = router;
router.route('/')
            .get((req, res) =>{
                console.log("Getting all posts");
                discussionController.getAllPosts(req, res);
            })
            .post((req, res) => {
                console.log("Saving post");
                discussionController.savePost(req, res);
            }
        );
router.route('/:id')
            .get((req, res)=> {
                console.log("Getting individual post");
                discussionController.getPost(req, res);
            })
            .put((req, res)=> {
                console.log("Fully updating post");
                discussionController.updatePost(req, res);
            })
            .patch((req, res) => {
                console.log("Partially updating post");
                discussionController.updateImg(req, res);
            })
            .delete((req, res) => {
                console.log("Deleting post");
                discussionController.deletePost(req, res);
            }
        );
