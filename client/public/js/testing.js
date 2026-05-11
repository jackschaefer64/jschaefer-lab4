

function loadPosts(posts)
{
    let postText = document.getElementById("post1");
    const postsHtml = posts.map(post => `
        <div>
            <h2 class = "title">${post.title}</h2>
            <div class = "post-container">
                <p class = "post-body">${post.body}</p>
                <img src = ${post.img} class = "container-image"></img>
                <button id = "deleteButton" class = "delete-Buttons" onclick = "deletePost(${post.id})">Delete Post</button>
                <button id = "changeImgButton" class = "editImg-Buttons" onclick = "changeImage(${post.id})">Change Image</butotn>
                <button id = "editButton" class = "edit-Buttons" onclick = "editPost(${post.id})">Edit Post</button>
                </div>
        </div>
    `).join(''); 
    
    console.log(posts);
    postText.innerHTML = postsHtml;
    //Displays the username, title of the post, body of the post, and the image associated
    document.getElementById("titleInput").value = '';
    document.getElementById("bodyInput").value = '';
    document.getElementById("imgInput").value = '';  
    
}
function loadUsers(users)
{
    let postText = document.getElementById("post1");
    const postsHtml = users.map(user => `
        <div>
            <h2 class = "title">${user.email}</h2>
            <button class = "login-Button" onclick = "alert('Logged in as ${user.email}')">Login</button>     
        </div>
    `).join(''); 
    console.log(users);
    postText.innerHTML = postsHtml;        

    //Displays the usernames and the profile pictures
}
function fetchPosts()
{
    fetch('/api/discussion').then(res => res.json()).then(loadPosts);
    //console.log(JSON.parse(req.responseText));
}
function fetchUsers()
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
    .then(() => fetchPosts());
    
}
function deletePost(id)
{
    fetch('/api/discussion/' + id, {
        method: 'DELETE'
    })
    .then(() => fetchPosts());
}
function editPost(id)
{
    const newTitle = prompt("Enter new title: ");
    const newBody = prompt("Enter new body: ");
    const newImg = prompt("Enter new image filename: ");
    fetch('/api/discussion/' + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: newTitle,
            body: newBody,
            img: "/img/" + newImg
        })
    })
    .then(() => fetchPosts());
}
function changeImage(id)
{
    const newImg = prompt("Enter new image filename: ");
    fetch('/api/discussion/' + id, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            img: "/img/" + newImg
        })
    })
    .then(() => fetchPosts());
}
window.addEventListener("load", () =>
{
    const myButton = document.getElementById("myButton");
    if(myButton)
    {
        myButton.addEventListener("click", fetchPosts);
    }

    const makePostButton = document.getElementById("makePostButton");
    if(makePostButton)
    {
        makePostButton.addEventListener("click", makePost);
    }

    const userButton = document.getElementById("userButton");
    if(userButton)
    {
        userButton.addEventListener("click", fetchUsers);
    }
});


/*
let feedElement = document.getElementById('demo--feed');
feedElement.innerHtml = "Hello World!";
*/
