console.log("[discussionModel] initialized");
class Post{
    constructor(title, body, image){
        this.title = title;
        this.body = body;
        this.image = image;
        
    }
}
exports.createPost = function(title, body, image){
    return new Post(title, body, image);
}