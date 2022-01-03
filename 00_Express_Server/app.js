const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter'); 

const hostname = '127.0.0.1'; 
const port = '3000'; 

// Configure Body-parser

const jsonParser = bodyParser.json(); 
const urlEncoderdParser = bodyParser.urlencoded({extended:false});
app.use(jsonParser);
app.use(urlEncoderdParser);

// Configure CORS

app.use(cors());

// Configure api router

app.use('/api',apiRouter);

// get

app.get('/',(request, response) =>{
    response.send(`<h2>Welcome to Express Server of Employee Portal</h2>`)
});

app.listen(port, hostname, () =>{
    console.log(`Express Sever has started at http://${hostname}:${port}`); 
});