const {TweetRepository,LikeRepository} = require('../repositories')
const tweetRepository = new TweetRepository
const likeRepository = new LikeRepository

async function toggleLike(modelId,modelType,userId){  //api/like/toggle?id = {tweet/comment}?modelType=tweet/comment?userd
    let likeable;
    let isAdded;
    if(modelType=='Tweet'){
         likeable = await tweetRepository.get(modelId);
    }else if(modelType == 'Comment'){
        likeable = await commentRepository.get(modelId); // Fetch the comment
    }else{
        console.log('wrong model');
        return;
    }

    const exists = await likeRepository.findByUserAndLikeable({
        user:userId,
        onModel:modelType,
        likeable:modelId
    });
    console.log(likeable);
    // console.log(exists);
   
    if(exists){
        //todo
        console.log(exists);
        console.log(exists.id);
        likeable.likes.pull(exists.id);
        await likeable.save();
        likeRepository.delete(exists.id);  //wait here it is wrong(i fixed it but check later)
        isAdded = false;
    }
    else{
        const newLike = await likeRepository.create({
            user:userId,
            onModel:modelType,
            likeable:modelId  
        })

        console.log(newLike)
        likeable.likes.push(newLike)
        await likeable.save()
        isAdded = true;
    }

    return isAdded;
}


module.exports={
    toggleLike
}