const express = require('express');
const router = express.Router();


const  createPost = require('../controllers/');
const  getPost = require('../controllers/');
const  commentPost = require('../controllers/');
const  likePost = require('../controllers/');
const  unlikePost = require('../controllers/');

router.post('/' , createPost)
router.post('/' , getPost)
router.post('/' , commentPost)
router.post('/' , likePost)
router.post('/' , unlikePost)