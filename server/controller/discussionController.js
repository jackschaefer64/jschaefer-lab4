console.log("[discussionController] initialized");
let Post = require('../model/discussion');
let discussionService = require('../service/discussionService');

let posts = [];
let post1 = Post.createPost("title1", "body1", "img1");
let post2 = Post.createPost("title2", "body2", "img2");
let post3 = Post.createPost("title3", "body3", "img3");

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
        let newPost = Post.createUser(req.body.title, req.body.body, req.body.img);
        posts.push(newPost);
        res.setHeader('Content-Type', 'application/json');
    res.send(posts);
}