console.log("[discussionController] initialized");
let Post = require('../model/discussion');
let discussionService = require('../service/discussionService');

exports.getAllPosts = async (req, res) => {
    let posts = await discussionService.getAllPosts();
    res.setHeader('Content-Type', 'application/json');
    res.json(posts);
}
exports.getPost = async (req, res) => {
    let post = await discussionService.getPost(req.params.id);
    res.json(post);
}
exports.savePost = async (req, res) => {
    await discussionService.savePost(
        req.body.title,
        req.body.body,
        req.body.img
    );
    let posts = await discussionService.getAllPosts();
    res.setHeader('Content-Type', 'application/json');
    res.json(posts);
}
exports.updatePost = async (req, res) => {
    let updated = await discussionService.updatePost(
        req.params.id,
        req.body.title,
        req.body.body,
        req.body.img
    );
    res.json(updated);
};
exports.updateImg = async (req, res) => {
    let existing = await discussionService.getPost(req.params.id);
    let updated = await discussionService.updatePost(
        req.params.id,
        existing.title,
        existing.body,
        req.body.img
    );
    res.json(updated);
};
exports.deletePost = async (req, res) => {
    await discussionService.deletePost(req.params.id);
    res.json({message: "Deleted"});
};