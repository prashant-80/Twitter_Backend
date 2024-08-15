const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const {DbConfig} = require('./config')
const app = express();
const {TweetRepository} = require('./repositories')
const tweetRepository = new TweetRepository


app.use(express.json());
app.use(express.urlencoded({extended:true}));  

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await DbConfig.connectDb()
    console.log('mongo is connected'); 

});
