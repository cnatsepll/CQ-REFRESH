const express = require('express');
const app = express();
const path = require('path');
const { Pool, Client } = require('pg')
const port = 3000;

const queries = require('./sql/queries')

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: 'color_quiz',
    password: process.env.PGPASSWORD,
    port: 5432
})
pool.query(queries.topResult, (err, res) => {
    console.log(err, res)
    pool.end()
  })

// // you can also use async/await
// const res = await pool.query('SELECT NOW()')
// await pool.end()
// // clients will also use environment variables
// // for connection information
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT NOW()')
// await client.end()

app.use(express.static("webapp"))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/index.html'));
});

app.get('/quiz', (req, res)=> {
    res.sendFile(path.join(__dirname + '/webapp/html/quiz.html'));
})

app.get('/quiz/question', (req, res)=>{

})

app.listen(port);