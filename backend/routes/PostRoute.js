const router = require('express').Router()
const User = require('../models/User.model')
const Post = require('../models/Post.model')

// create a post
router.post('/',async(req,res)=>{
    try{
        const newPost = new Post(req.body)
        try{
            const savedPost = await newPost.save()
            return res.status(200).json(savedPost)
        }catch(err){
            return res.status(400).json(err)
        }
    }catch(err){
        return res.status(500).json(err)
    }
})

// update post
router.put('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post){
            res.status(400).json('Post not found')
        }
        if(post.userName===req.body.userName){

            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
                res.status(200).json(updatedPost)
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(400).json('You can update only your post.')
        }
    }catch(err){
        res.status(500).json(err)
    }
})

// delete a post
router.delete('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(400).json('Post not found')
        }
        if(post.userName===req.body.userName){
            try{
                await Post.deleteOne({_id:req.params.id})
                return res.status(200).json('Post has been deleted successfully.')
            }catch(err){
                return res.status(500).json(err)
            }
        }else{
            return res.status(400).json('You can delete you posts only.')
        }

    }catch(err){
        return res.status(500).json(err)
    }})

// get post by id
router.get('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post){
            return res.status(400).json('Post not found')
        }
        return res.status(200).json(post)

    }catch(err){
        return res.status(500).json(err)
    }
})

// get all posts
router.get('/', async(req,res)=>{
    const username=req.query.name
    const category=req.query.cat
    try{
        let posts;
        if(username){
            posts=await Post.find({userName:username})
        }else if(category){
            posts = await Post.find({categories:{$in:[category]}})
        }else{
            posts = await Post.find()
        }
        return res.status(200).json(posts)

    }catch(err){
        return res.status(500).json(err.message)
    }
})

module.exports = router