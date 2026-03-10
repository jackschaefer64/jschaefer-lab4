const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('client/public'));

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname,'..', 'client', 'views', 'index.html'));
})
app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));
