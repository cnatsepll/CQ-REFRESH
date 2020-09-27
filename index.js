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




app.use(express.static("webapp"))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/home.html'));
});

app.get('/quiz', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/quiz.html'));
});

app.get('/charts', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/charts.html'));
})

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
app.get('/charts/resultMostLike', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.resultMostLike, (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
})
app.get('/charts/resultLeastLike', (req, res)=>{
    const client = new Client(connection);
    let response;
    client.connect();
    client.query(queries.resultLeastLike, (err, data) => {
        err ? err.stack : response = data;
        client.end();
        res.send(response);
    })
})


app.listen(port);