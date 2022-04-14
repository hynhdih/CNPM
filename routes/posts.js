const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// submit 1 bai post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })      
    try {
        const savedPost = await post.save();
        res.json(savedPost);
     } catch (err) {
        res.json({ message: err });
    }
});

//lay tat ca cac bai post
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find(); 
        res.json(posts);
    }catch(err){
        res.json({ message: err });
    }
});

//tim bai post cu the qua ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
     } catch (err) {
        res.json({ message: err });
    }
});

//xoa mot bai post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
		res.json(removedPost);
     } catch (err) {
        res.json({ message: err });
    }
});

//cap nhat mot bai post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
             { _id: req.params.postId },
            //  { $set: { title: req.body.title } } // sửa riêng title
             { $set: req.body } // sửa tất cả những gì đưa lên
        );
        res.json(updatedPost);
     } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;



