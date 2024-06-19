const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const {DbConfig} = require('./config')
const app = express();
const {TweetRepository,HashtagRepository} = require('./repositories')
const tweetRepository = new TweetRepository();
const hashtagRepository = new HashtagRepository();

app.use(express.json());   //help to parse the incoming request body 
app.use(express.urlencoded({extended:true}));  

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await DbConfig.connectDb()
    console.log('mongo is connected');

    //create tweet/hashtag 

    // const response = await tweetRepository.create({
    //     content:'new tweet',
    //     likes:100,
    //     noOfRetweets:1,
    //     comment:"ad"
    // })
 
    // const response = await hashtagRepository.create({
    //     text:'travel',
    //     tweets:['666d201c14f869ee0427135b']
    // })

    //get all tweets/hashtag
    // const response = await tweetRepository.get();
    // console.log(response);

    //get by id
    // const response = await tweetRepository.get('666d2496216238052da86e97');
    //  console.log(response);

    //deleteByid
    // const response = await tweetRepository.delete('666d2496216238052da86e97');
    //  console.log(response);

    
});
