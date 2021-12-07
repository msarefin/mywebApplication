const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');
// const { urlencoded } = require('body-parser');

const apiRouter = require('./api/apiRouter');

const hostname = '127.0.0.1';
const port = 3000;

// Configure body-parser
const jsonParser = bodyParser.json(); 
const urlEncodedParser = bodyParser.urlencoded({extended:false});
app.use(jsonParser);
app.use(urlEncodedParser);

// configure cors
app.use(cors());

// configure API router
app.use('/api',apiRouter);

// get
app.get('/',(request,response)=>{
    response.send(`<h1>Welcome to Express Server of Employee Portal!@@@@!!!</h1>`)
});

app.listen(port, hostname, ()=>{
    console.log(`Express server has started at http://${hostname}:${port}`);
})