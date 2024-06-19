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
        let textofPresentTags = alreadyPresentTags.map
        // filter out alreadyPresentTags
        let newTags = tags.filter((tag) => !alreadyPresentTags.includes(tags)) 
        
        


    } catch (error) {
        console.log(error)
        throw(error)
    }
}





