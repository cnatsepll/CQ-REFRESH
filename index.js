const express = require('express');
const app = express();
const path = require('path');
const { Pool, Client } = require('pg');
const connection = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: 'color_quiz',
    password: process.env.PGPASSWORD,
    port: 5432
};
const port = 3000;

const queries = require('./sql/queries');



app.use(express.json())
app.use(express.static("webapp"))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/home.html'));
});

app.get('/quiz', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/quiz.html'));
});

app.get('/charts', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/charts.html'));
});




app.get('/charts/listAllQuestionWords', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.listAllQuestionWords, (err, data) => {
      err ? err.stack : response = data;
      client.end();
      res.send(response);
    })
});
app.get('/charts/topResults', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.topResult, (err, data) => {
      err ? err.stack : response = data;
      client.end();
      res.send(response);
    })
});
app.get('/charts/topResultsDetailed', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.topResultsDetailed, (err, data) => {
      err ? err.stack : response = data;
      client.end();
      res.send(response);
    })
});
app.post('/charts/resultMostLike', (req, res)=>{
    console.log(req.body)
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.resultMostLike, [req.body.question_word], (err, data) => {
        err ? console.log(err.stack) : response = data;
        client.end();
        res.send(response);
    })
});
app.get('/charts/resultLeastLike', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.resultLeastLike, (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
});
app.get('/charts/topWordsForResult', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.topWordsForResult, (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
});
app.get('/charts/bottomWordsForResult', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.bottomWordsForResult, (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
});




app.listen(port);