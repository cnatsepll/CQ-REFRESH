const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const port = process.env.PORT || 3000;


const queries = require('./sql/chart_queries');
const wordBank = require('./sql/word_bank');

app.use(bodyParser.json());
app.use(express.static("webapp"))

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/webapp/home/');
});
app.get('/quiz', (req, res)=> {
    res.sendFile(__dirname + '/webapp/quiz/');
});
app.get('/charts', (req, res)=> {
    res.sendFile(__dirname + '/webapp/charts/');
});
app.get('/results', (req, res)=> {
    res.sendFile(__dirname + '/webapp/results/');
});
app.get('/about', (req, res)=> {
    res.sendFile(__dirname + '/webapp/about/');
});

app.post('/video', (req, res)=>{
    console.log(`logVideo| ${req.body.result} : ${req.body.link}`)
    res.send(true);
});
app.post('/chart', (req, res)=>{
    console.log(`logChart| ${req.body.chart} : ${req.body.question}`)
    res.send(true);
});
app.post('/quiz', (req, res)=>{
    console.log(`logQuiz| ::${req.body.result}:: ${req.body.array}  [${req.body.score}]`)
    res.send(true);
});

// app.get('/charts/getTotalResults', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.totalResults, (err, data) => {
//       err ? err.stack : response = data;
//       client.end();
//       res.send(response);
//     })
// });
// app.get('/charts/getTotalAnswers', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.totalAnswers, (err, data) => {
//       err ? err.stack : response = data;
//       client.end();
//       res.send(response);
//     })
// });
// app.get('/charts/listAllQuestionWords', (req, res)=>{
//     let response = wordBank.listAllQuestionWords;
//     res.send(response);
// });
// app.get('/charts/listAllColorGroups', (req, res)=>{
//     let response = wordBank.listAllColorGroups;
//     res.send(response);
// });
// app.get('/charts/topResults', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.topResult, (err, data) => {
//       err ? err.stack : response = data;
//       client.end();
//       res.send(response);
//     })
// });
// app.get('/charts/topResultsDetailed', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.topResultsDetailed, (err, data) => {
//       err ? err.stack : response = data;
//       client.end();
//       res.send(response);
//     })
// });
// app.post('/charts/resultMostLike', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.resultMostLike, [req.body.question_word], (err, data) => {
//         err ? console.log(err.stack) : response = data;
//         client.end();
//         res.send(response);
//     })
// });
// app.post('/charts/resultLeastLike', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.resultLeastLike, [req.body.question_word], (err, data) => {
//         err ? err.stack : response = data;
//         client.end();
//         res.send(response);
//     })
// });
// app.post('/charts/topWordsForResult', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.topWordsForResult, [req.body.question_word],(err, data) => {
//         err ? console.log(err.stack) : response = data;
//         client.end();
//         res.send(response);
//     })
// });
// app.post('/charts/bottomWordsForResult', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.bottomWordsForResult, [req.body.question_word], (err, data) => {
//         err ? err.stack : response = data;
//         client.end();
//         res.send(response);
//     })
// });
// app.post('/charts/fiveColorRadar', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.fiveColorRadar, [req.body.question_word], (err, data) => {
//         err ? err.stack : response = data;
//         client.end();
//         res.send(response);
//     })
// });
// app.post('/charts/resultColorpieSlices', (req, res)=>{
//     const client = new Client(connection);
//     let response;
//     client.connect();
//     client.query(queries.resultColorpieSlices, [`%${req.body.question_word}%`], (err, data) => {
//         err ? err.stack : response = data;
//         client.end();
//         res.send(response);
//     })
// });


app.listen(port);
