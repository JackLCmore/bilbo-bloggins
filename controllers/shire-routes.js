const router = require('express').Router();
const { Comment, Post } = require('../models');

//GET all posts for the shire
router.get('/', async (req,res)=>{
    try{
        const dbPostData = await Post.findAll({
            include:[
                {
                    model: Comment,
                    attributes: ['text', 'user_id']
                },
            ],
        });

        const posts = dbPostData.map((post)=>
        post.get({plain: true})
        );

        res.render('the_shire', {
            posts,
            loggedIn: req.session.loggedIn,
        });

    }catch(err){
        res.status(500).json(err);
    }
});

// GET one Post
router.get('/post/:id', async (req,res)=>{
    try{
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
              {
                model: Comment,
                attributes: [
                  'id',
                  'text',
                  'post_id',
                  'user_id',
                ],
              },
            ],
          });

          const post = dbPostData.get({plain:true});
          res.render('post', { post, loggedIn: req.session.loggedIn});
    }catch(err){
        res.status(500).json(err);
    }
});

// GET all comments for one(?) post

router.get('/', async (req, res)=>{
    try{
        const dbCommentData = await Comment.findAll(req.params.post_id);

        const comment = dbCommentData.get({plain:true});

        res.render('comment', {comment, loggedIn: req.session.loggedIn });
    }catch(err){
        res.status(500).json(err);
    }
});

// GET all posts from one user
router.get('/user/:id', async (req,res)=>{
try{
const dbUserPosts = await Post.findAll({
    include:[
        {
            model: Comment,
            attributes: ['text', 'user_id']
        },
    ],
});

const posts = dbUserPosts.map((post)=>
        post.get({plain: true})
        );

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });
}catch(err){
    res.status(500).json(err);
}
});

module.exports = router;