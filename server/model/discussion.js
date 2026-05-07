console.log("[discussionModel] initialized");
class Post{
    constructor(id, title, body, img){
        this.id = id;
        this.title = title;
        this.body = body;
        this.img = img;
        
        
    }
}
exports.createPost = function(id, title, body, img){
    return new Post(id, title, body, img);
}