
/*posts = [{title: 'Help with brewing potions?', body: 'Looking for some assistance with brewing up some new potions', img: "/img/wizard.png", user: "@inmytower"}, 
        {title: 'Nearby battles?', body: 'Does anyone know of some battles or crusades going on? Trying to practice my spells', img: "/img/wizard2.png", user: "@spellslinger"}, 
        {title: 'FREE STAFF', body: 'Found and old staff while cleaning. Up for grabs (not cursed)', img: "/img/wizard3.png", user: "@wiseandwizened"}];
        //A list of posts with a title, user, body, and image
*/
function loadPosts(posts, names)
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
                </div>
            </div>
        `).join(''); 

        postText.innerHTML = postsHtml;

        //USE LATER <span class = "username"> ${post.userName}</span>

        
        //Displays the username, title of the post, body of the post, and the image associated
    }
       
}
function loadUsers()
{
    for(i = 0; i < posts.length; i++)
    {
        let postText = document.getElementById("post1");
        const postsHtml = posts.map(post => `
            <div>
                <h2 class = "title">${post.user}</h2>
                
                <img src = ${post.img} class = "container-image"></img>
                
            </div>
        `).join(''); 

        postText.innerHTML = postsHtml;
        
    }
    //Displays the usernames and the profile pictures
}
function testing()
{
    var req = new XMLHttpRequest();
    var reqU = new XMLHttpRequest();

    req.open("GET", "/api/discussion", false);
    req.send(null);

    reqU.open("GET", "/api/user", false);
    reqU.send(null);

    let names = JSON.parse(reqU.responseText);
    let posts = JSON.parse(req.responseText);
    for(i = 0; i < names.length; i++)
    {
        console.log(names[i].email);
       
    }
    loadPosts(posts, names);
    //console.log(JSON.parse(req.responseText));
}
window.addEventListener("load", () =>
{

    document.getElementById("myButton").addEventListener("click", testing);
    //Loads the posts when the "myButton" button is clicked

});
window.addEventListener("load", () =>
{

    document.getElementById("userButton").addEventListener("click", loadUsers);
    //Loads the users when the "userButton" button is clicked

});

/*
let feedElement = document.getElementById('demo--feed');
feedElement.innerHtml = "Hello World!";
*/
