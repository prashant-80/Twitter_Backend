const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const {DbConfig} = require('./config')
const app = express();
const {TweetRepository} = require('./repositories')
const tweetRepository = new TweetRepository();

app.use(express.json());   //help to parse the incoming request body 
app.use(express.urlencoded({extended:true}));  

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await DbConfig.connectDb()
    console.log('mongo is connected');
    const response = await tweetRepository.create({
        content:'new tweet',
        likes:100,
        noOfRetweets:1,
        comment:"ad"
    })
    console.log(response);
});
