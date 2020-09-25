const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static("webapp"))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/index.html'));
});

app.get('/quiz', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/quiz.html'));
})

app.listen(port);