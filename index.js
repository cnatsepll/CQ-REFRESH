const bodyParser = require('body-parser');
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

const queries = require('./sql/chart_queries');



app.use(bodyParser.json());
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

app.get('/about', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/about.html'));
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
app.get('/charts/listAllColorGroups', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.listAllColorGroups, (err, data) => {
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
app.post('/charts/resultLeastLike', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.resultLeastLike, [req.body.question_word], (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
});
app.post('/charts/topWordsForResult', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.topWordsForResult, [req.body.question_word],(err, data) => {
        err ? console.log(err.stack) : response = data;
        client.end();
        res.send(response);
    })
});
app.post('/charts/bottomWordsForResult', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.bottomWordsForResult, [req.body.question_word], (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
});
app.post('/charts/fiveColorRadar', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.fiveColorRadar, [req.body.question_word], (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
});
app.post('/charts/resultColorpieSlices', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.resultColorpieSlices, [`%${req.body.question_word}%`], (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
});


app.listen(port);