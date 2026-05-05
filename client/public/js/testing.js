

function loadPosts(posts)
{
    
    for(i = 0; i < posts.length; i++)
    {
        let postText = document.getElementById("post1");
        let linksText = document.getElementById("links");
        const postsHtml = posts.map(post => `
            <div>
                <h2 class = "title">${post.title}</h2>
                <div class = "post-container">
                    <p class = "post-body">${post.body}</p>
                    <img src = ${post.image} class = "container-image"></img>
                    <button id = "deleteButton" class = "delete-Buttons" onclick = "deletePost('${post.title}')">Delete Post</button>
                </div>
            </div>
        `).join(''); 
        
        postText.innerHTML = postsHtml;

        //USE LATER <span class = "username"> ${post.userName}</span>

        
        //Displays the username, title of the post, body of the post, and the image associated
    }
    document.getElementById("titleInput").value = '';
    document.getElementById("bodyInput").value = '';
    document.getElementById("imgInput").value = '';  
    //document.getElementById("deleteButton").addEventListener("click", deletePost);
}
function loadUsers(users)
{
    for(i = 0; i < users.length; i++)
    {
        let postText = document.getElementById("post1");
        const postsHtml = users.map(user => `
            <div>
                <h2 class = "title">${user.email}</h2>
                
                <img src = ${user.img} class = "container-image"></img>
                
            </div>
        `).join(''); 

        postText.innerHTML = postsHtml;
        
    }
    //Displays the usernames and the profile pictures
}
function testing()
{
    var req = new XMLHttpRequest();

    req.open("GET", "/api/discussion", false);
    req.send(null);

    let posts = JSON.parse(req.responseText);

    loadPosts(posts);
    //console.log(JSON.parse(req.responseText));
}
function testing2()
{
    var req = new XMLHttpRequest();

    req.open("GET", "/api/user", false);
    req.send(null);
    let users = JSON.parse(req.responseText);

    loadUsers(users);
}
function makePost()
{
    
    const postInputTitle = document.getElementById("titleInput").value;
    const postInputBody = document.getElementById("bodyInput").value;
    const postInputImage = "/img/" + document.getElementById("imgInput").value;
    
    console.log("Title: " + postInputTitle + "\nBody: " + postInputBody + "\nImage: " + postInputImage);
    
    fetch('/api/discussion/',
    {
        method:'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: '{"title":"'+postInputTitle+'","body":"'+postInputBody+'","img":"'+postInputImage+'"}'
    }).then(function(response) {
        if (response.status !== 200){
        console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
        return;
    }
    //console.log("profession " + profession + " saved!");
    });
    
}
function deletePost(title)
{
    console.log(title);
    //api/discussion/id
}
window.addEventListener("load", () =>
{

    document.getElementById("myButton").addEventListener("click", testing);
    document.getElementById("makePostButton").addEventListener("click", makePost);

    
    //Loads the posts when the "myButton" button is clicked

});
window.addEventListener("load", () =>
{

    document.getElementById("userButton").addEventListener("click", testing2);
    //Loads the users when the "userButton" button is clicked

});

/*
let feedElement = document.getElementById('demo--feed');
feedElement.innerHtml = "Hello World!";
*/
