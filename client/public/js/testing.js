

function loadPosts(posts)
{
    let postText = document.getElementById("post1");
    let linksText = document.getElementById("links");
    const postsHtml = posts.map(post => `
        <div>
            <h2 class = "title">${post.title}</h2>
            <div class = "post-container">
                <p class = "post-body">${post.body}</p>
                <img src = ${post.img} class = "container-image"></img>
                <button id = "deleteButton" class = "delete-Buttons" onclick = "deletePost(${post.id})">Delete Post</button>
            </div>
        </div>
    `).join(''); 
    
    console.log(posts);
    postText.innerHTML = postsHtml;
    //USE LATER <span class = "username"> ${post.userName}</span>        
    //Displays the username, title of the post, body of the post, and the image associated
    document.getElementById("titleInput").value = '';
    document.getElementById("bodyInput").value = '';
    document.getElementById("imgInput").value = '';  
    //document.getElementById("deleteButton").addEventListener("click", deletePost);
}
function loadUsers(users)
{
    let postText = document.getElementById("post1");
    const postsHtml = users.map(user => `
        <div>
            <h2 class = "title">${user.email}</h2>    
            <img src = ${user.img} class = "container-image"></img>    
        </div>
    `).join(''); 
    postText.innerHTML = postsHtml;        

    //Displays the usernames and the profile pictures
}
function testing()
{
    fetch('/api/discussion').then(res => res.json()).then(loadPosts);
    //console.log(JSON.parse(req.responseText));
}
function testing2()
{
   fetch('/api/user').then(res => res.json()).then(loadUsers);
}
function makePost()
{
    const postInputTitle = document.getElementById("titleInput").value;
    const postInputBody = document.getElementById("bodyInput").value;
    const postInputImage = "/img/" + document.getElementById("imgInput").value;
    fetch('/api/discussion/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: postInputTitle,
            body: postInputBody,
            img: postInputImage
        })
    })
    .then(() => testing());
    
}
function deletePost(id)
{
    fetch('/api/discussion/' + id, {
        method: 'DELETE'
    })
    .then(() => testing());
}
window.addEventListener("DOMContentLoaded", () =>
{

    document.getElementById("myButton").addEventListener("click", testing);
    document.getElementById("makePostButton").addEventListener("click", makePost);
    document.getElementById("userButton").addEventListener("click", testing2);
    
    //Loads the posts when the "myButton" button is clicked

});


/*
let feedElement = document.getElementById('demo--feed');
feedElement.innerHtml = "Hello World!";
*/
