posts = [{title: 'Help with brewing potions?', body: 'Looking for some assistance with brewing up some new potions', user: 'Wizard1', img: "/img/wizard.png", user: "@inmytower"}, 
        {title: 'Nearby battles?', body: 'Does anyone know of some battles or crusades going on? Trying to practice my spells', user: 'Wizard2', img: "/img/wizard2.png", user: "@spellslinger"}, 
        {title: 'FREE STAFF', body: 'Found and old staff while cleaning. Up for grabs (not cursed)', user: "Wizard3", img: "/img/wizard3.png", user: "@wiseandwizened"}];

function loadPosts()
{
    for(i = 0; i < posts.length; i++)
    {
        let postText = document.getElementById("post1");
        const postsHtml = posts.map(post => `
            <div>
                <h2 class = "title">${post.title}<span class = "username">    ${post.user}</span></h2>
                <div class = "post-container">
                    <p class = "post-body">${post.body}</p>
                    <img src = ${post.img} class = "container-image"></img>
                </div>
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
