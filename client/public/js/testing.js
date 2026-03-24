posts = [{title: 'Post1', body: 'Hello World1', user: 'Wizard1', img: "/img/wizard.png"}, 
        {title: 'Post2', body: 'Hello World2', user: 'Wizard2', img: "/img/wizard2.png"}, 
        {title: 'Post3', body: 'Hello World3', user: "Wizard3", img: "/img/wizard3.png"}];

function loadPosts()
{
    for(i = 0; i < posts.length; i++)
    {
        let postText = document.getElementById("post1");
        const postsHtml = posts.map(post => `
            <div class="post">
                <h2 class = "title">${post.title}</h2>
                <p>${post.body}</p>
                <img src = ${post.img} class = "container"></img>
            </div>
        `).join(''); 
        postText.innerHTML = postsHtml;
    }
       
}
window.addEventListener("load", () =>
{
    document.getElementById("myButton").addEventListener("click", loadPosts);

});
/*
let feedElement = document.getElementById('demo--feed');
feedElement.innerHtml = "Hello World!";
*/
