const express = require('express');
const router = express.Router();


const  createPost = require('../controllers/createPost');
const  getPost = require('../controllers/getPosts');
const  commentPost = require('../controllers/commentPost');
const  likePost = require('../controllers/likePost');
const  unlikePost = require('../controllers/unlikePost');

router.post('/posts/create' , createPost)
router.post('/posts/get' , getPost)
router.post('/comments/comment' , commentPost)
router.post('/likes/like' , likePost)
router.post('/likes/unlike' , unlikePost)

module.exports = router