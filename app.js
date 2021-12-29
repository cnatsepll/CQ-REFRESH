const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { Pool, Client } = require('pg');
// const connection = {
//     user: 'postgres',
//     host: 'localhost',
//     database: 'color_quiz',
//     password: 'admin',
//     port: 5432
// };
const connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  };

const port = process.env.PORT || 3000;


const queries = require('./sql/chart_queries');
const wordBank = require('./sql/word_bank');

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


app.get('/charts/getTotalResults', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.totalResults, (err, data) => {
      err ? err.stack : response = data;
      client.end();
      res.send(response);
    })
});app.get('/charts/getTotalAnswers', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.totalAnswers, (err, data) => {
      err ? err.stack : response = data;
      client.end();
      res.send(response);
    })
});
app.get('/charts/listAllQuestionWords', (req, res)=>{
    let response = wordBank.listAllQuestionWords;
    res.send(response);
});
app.get('/charts/listAllColorGroups', (req, res)=>{
    let response = wordBank.listAllColorGroups;
    res.send(response);
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