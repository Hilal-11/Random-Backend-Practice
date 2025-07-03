const express = require('express')
const router = express.Router()

router.get('/getPosts' , getPosts)
router.post('/createPost' , createPost)
router.post('/like:id', like)
router.post('comment:id', comment)
router.post('dislike:id', dislike)

module.exports = router