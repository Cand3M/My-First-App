const getCharById = require("./controllers/getCharById");
const express = require('express');
const server = express();
const PORT = 3001;
const routes = require('./routes/index');
const {conn} = require('./DB_connection');
server.use(express.json());

server.get('/character/:id', getCharById);

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 server.use('/rickandmortyapi', routes);

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });