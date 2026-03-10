posts = [{title: 'Post1', body: 'Hello World', user: 'Wizard1'}, {title: 'Post2', body: 'Hello World', user: 'Wizard2'}];
imageList = ["/img/wizard.png", "/img/wizard2.png"];
const postListContainer = document.getElementById("post-list");
function loadPosts()
{
    for(i = 0; i < posts.length; i++)
    {
        console.log(posts[i].user);
        console.log(imageList[i]);
    }
}
window.onload = function()
{
    document.getElementById("myButton").addEventListener("click", loadPosts);
}
