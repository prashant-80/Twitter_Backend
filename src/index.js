const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const {DbConfig} = require('./config')

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    DbConfig.connectDb()
    console.log('mongo is connected');

    //create a schema

    //create a model

    //create a document
});
