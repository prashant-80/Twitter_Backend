const express = require('express');

const v1Routes = require('./v1');

const router = express.Router();
const {TweetController} = require('../controllers')

router.use('/v1', v1Routes);

router.get('/tweets/:id',TweetController.getTweets)
router.post('/tweets',TweetController.createTweet)


module.exports = router;