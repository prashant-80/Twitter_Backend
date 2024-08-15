const express = require('express');

const v1Routes = require('./v1');

const router = express.Router();
const {UserController,TweetController, LikeController} = require('../controllers');


router.use('/v1', v1Routes);

router.get('/tweets/:id',TweetController.getTweets)
router.post('/tweets',TweetController.createTweet)
router.post('/signup',UserController.signup)
router.post('/signin',UserController.signin)
router.post('/likes/toggle',LikeController.toggleLike)
    


module.exports = router;