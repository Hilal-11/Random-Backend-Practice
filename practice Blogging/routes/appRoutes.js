const express = require('express')
const router = express.Router()

const getPosts = require('../controllers/getPosts')
const createPost = require('../controllers/createPost')
const like = require('../controllers/like')
const comment = require('../controllers/comment')
const dislike = require('../controllers/dislike')

router.get('/getPosts' , getPosts)
router.post('/createPost' , createPost)
router.post('/like:id', like)
router.post('comment:id', comment)
router.post('dislike:id', dislike)

module.exports = router