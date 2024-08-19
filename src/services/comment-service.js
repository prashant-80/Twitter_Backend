const { TweetRepository, CommentRepository } = require('../repositories');
const tweetRepository = new TweetRepository();
const commentRepository = new CommentRepository();

async function addComment(modelId, modelType, userId, content) {
    let commentable;

    
    if (modelType === 'Tweet') {
        commentable = await tweetRepository.get(modelId);
    } else if (modelType === 'Comment') {
        console.log(commentable)
        commentable = await commentRepository.get(modelId);
    } else {
        throw new Error('Invalid model type');
    }

   
    const newComment = await commentRepository.create({
        content: content,
        user: userId,
        onModel: modelType,
        commentable: modelId
    });

   
    commentable.comments.push(newComment._id);
    await commentable.save();

    return newComment;
}

module.exports = {
    addComment
};