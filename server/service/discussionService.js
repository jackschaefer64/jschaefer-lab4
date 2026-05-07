console.log("[discussionService] initialized");
const pool = require('../db/database');
const Post = require('../model/discussion');

exports.getAllPosts = async function () {
    let sqlText = "SELECT * FROM posts";
    let res = await pool.query(sqlText);
    let posts = [];
    for(let i = 0; i < res.rows.length; i++)
    {
        posts.push(Post.createPost(
            res.rows[i].id,
            res.rows[i].title,
            res.rows[i].body,
            res.rows[i].img
            )
        );
    }
    console.log(posts);
    return posts;
};
exports.savePost = async function(title, body, img){
    let sqlText = 'INSERT INTO posts(title, body, img) VALUES($1, $2, $3) RETURNING *';
    let res = await pool.query(sqlText, [title, body, img]);
    return res.rows[0];
};
exports.deletePost = async function(id) {
    let sqlText = "DELETE FROM posts WHERE id  = $1";
    await pool.query(sqlText, [id]);
};
exports.updatePost = async function(id, title, body, img){
    let sqlText = 
    'UPDATE posts SET title = $1, body = $2, img = $3 WHERE id = $4 RETURNING *';
    let res = await pool.query(sqlText, [title, body, img, id]);

    return res.rows[0];
}
exports.getPost = async function(id){
    let sqlText = "SELECT * FROM posts WHERE id = $1";
    let res = await pool.query(sqlText, [id]);
    return res.rows[0];
};
