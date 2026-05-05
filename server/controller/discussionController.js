console.log("[discussionController] initialized");
let Post = require('../model/discussion');
let discussionService = require('../service/discussionService');

let posts = [];
let post1 = Post.createPost("Help with brewing potions?", "Looking for some assistance with brewing up some new potions", "/img/wizard.png");
let post2 = Post.createPost("Nearby battles?", "Does anyone know of some battles or crusades going on? Trying to practice my spells", "/img/wizard2.png");
let post3 = Post.createPost("FREE STAFF", "Found and old staff while cleaning. Up for grabs (not cursed)", "/img/wizard3.png");

posts.push(post1);
posts.push(post2);
posts.push(post3);

console.log(posts);
exports.getAllPosts = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(posts);
}
exports.getPost = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(posts[req.params.index]);
}
exports.savePost = (req, res) => {
        let newPost = Post.createPost(req.body.title, req.body.body, req.body.img);
        posts.push(newPost);
        res.setHeader('Content-Type', 'application/json');
    res.send(posts);
}
exports.updatePost = (req, res) => {
        var updatedPost = posts[req.params.index];
        if(req.body.title)
        {
            updatedPost.title = req.body.title;
        }
        if(req.body.body)
        {
            updatedPost.body = req.body.body;
        }
        if(req.body.img)
        {
            updatedPost.img = req.body.img;
        }
        posts[req.params.index] = updatedPost;
        res.setHeader('Content-Type','application/json');
        res.send(posts[req.params.index]);
}
exports.updateImg = (req, res) => {
        var updatedPost = posts[req.params.index];
        if(req.body.img)
        {
            updatedPost.img = req.body.img;
        }
        posts[req.params.index] = updatedPost;
        res.setHeader('Content-Type','application/json');
        res.send(posts[req.params.index]);
}
exports.deletePost = (req, res) => {
        posts.splice(req.params.index, 1);
        res.setHeader('Content-Type', "application/json");
        res.send(posts);
}