const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname,'..', 'client', 'views', 'index.html'));
})

app.get('/users', function (req, res) {
    const usersPath = path.join(__dirname,'..', 'client', 'views', 'users.html');   
    res.sendFile(usersPath);
})
//Allows the user to go between multiple pages


app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

let userRoutes = require('./route/userRoute');
app.use('/api/user', userRoutes);


