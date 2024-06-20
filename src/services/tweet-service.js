const {TweetRepository,HashtagRepository} = require('../repositories')
const tweetRepository = new TweetRepository();
const hashtagRepository = new HashtagRepository();


async function create(data){
    try {
        //adding tweets to database
        const tweet = await tweetRepository.create(data)
         //removing hashtags from tweets and storing in hastags collection
        const content = data.content;
        const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag) => tag.substring(1).toLowerCase());
        let alreadyPresentTags = await hashtagRepository.getHashtagByName(tags);
        let textofPresentTags = alreadyPresentTags.map(tags=>tags.text)
        // filter out alreadyPresentTags
        let newTags = tags.filter((tag) => !textofPresentTags.includes(tags)) 
        newTags = newTags.map(tag=>{
            return {
                text:tag,
                tweets:[tweet.id]
            }
        })
        await hashtagRepository.bulkCreate(newTags)
        alreadyPresentTags.forEach((tag)=>{
            tag.tweet.push(tweet.id)
            tag.save();
        })
        return tweet;

    } catch (error) {
        console.log(error)
        throw(error)
    }
}

async function getTweets(tweetId){
    try {
        const tweet = await tweetRepository.get(tweetId)
        return tweet
    } catch (error) {
     console.log(error)
     throw(error)   
    }
}

module.exports={
    getTweets,
    create
}





