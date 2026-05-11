# jschaefer-lab4
Overview - 

This project is a foray into front-end and back-end development through a webpage. This page is a locally run site that allows user to post posts to a feed. Each post contains a title, body, and image that can be edited using the UI buttons. Each post is saved to a SQL database that keeps persistent post data, and that SQL is asynchronously accessed when the GET, POST, PATCH, DELETE, and PUT HTTP requests are sent. 
This project also has code built out to contain another SQL database, this one of users. Each user has a first and last name, and an email. These users have functions built out for updating the users information, delete a user, save a new one, and get all of them. However, all of these functions, save the get function, lack front-end development. To build that out, each user would need an edit user button, a delete user button, and an input field to create a new user. 
The users and the posts currently do not have any connection to one another, which is something that should be built out for a proper post/user relationship. Each user can have a set of posts and each post should have a user tied to it. Cookie implementation could also be created to make it a more accurate post feed like a proper forum.

Install Instructions - 
Dependencies - 
    "body-parser": "^2.2.2",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "pg": "^8.20.0"
Commands - 
clone the repo 
cd to jschaefer-lab4
npm install
node server/app.js in the main folder directory
Navigate to http://localhost:PORT in your browser.

Database setup / config - 
To set up the database, locate the Create-db.sql file. That information is what you need to create your schema.
Create a copy of .env.example and name it .env
Change the values in the new .env file to be your user, password, port, etc.



Dev Notes - 
Currently there are only a few minor issues with the project that I know of. For one, when creating a post there is a field around the actual submit button that counts as a button click. If you click the areas to the left and right of the button, you will submit the post. Also, in the image input field, users can press enter and tab down their text. It doesn't affect the actual image implementation, but it can be confusing to users to see their text disappear. There also seems to be an issue where editing the information of a post automatically sends it to the bottom of the feed. This isn't too much of an issue with a small amount of posts, but with a larger sample size it could get hectic or confusing. 
I hope to build this project out a little bit more and make it actually function like a proper web forum. That means that there should be proper communication between users and posts, better UI, and proper security. 

User Documentation (How to work the project) - 

Making a post - 
To make a post, it requires 3 things: A title, a body, an image. On the main html page (index.html) there are 3 input boxes to input that information. Just type in what title and body you want. The only one that is different is the image input field. To add an image to the post, you should save your image file to the img folder in the files (client/public/img). Then, in the image input field, just put the file name (EX: exampleImg.png) and the program will get the file by that name from the img folder. After each field is filled out, click the submit button and your post should immediately appear on the screen. If the page is refreshed, then you will have to click the "Show Posts!" button to see your post. 

Editing a post - 
To edit a post, there will be an "Edit Post" button to the right of the image. If you click that button, you will be prompted at the top of the page to fill out a new title, new body, and new image. Fill these out exactly how you created a post to begin with and your post will be updated to match the new information. To edit just the image of the post, click the "Change Image" button and input a new file name of a file that has been saved to the img folder. Your post's image will change to match the new picture. 

Deleting a post - 
To delete a post, just click the "Delete Post" button and the subsequent post will be deleted from the database. Currently there is no confirmation to delete a post or any way to get it back, so be careful when deleting something important. 

"Logging in" - 
To "log in", first navigate to the Profiles page (link located at the bottom of index.html page). On this screen you will have to click the "Show Users!" button to see all of the users that have been preloaded into the database previously. These users will have a "Login" button that will display an alert saying that you are now "logged in" as the selected user. There is currently no actual login mechanic, but feel free to make one yourself!.