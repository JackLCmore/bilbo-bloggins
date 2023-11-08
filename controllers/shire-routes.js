const router = require('express').Router();
const { Comment, Post } = require('../models');

const { withAuth, areAuth } = require('../utils/auth');

router.get('/', async (req,res) => {
    try{
        const postData = await Post.findAll();
        // console.log(postData)
        const post = (postData).map((post)=> post.dataValues);
    // console.log(post);
        const isTheShire = true;
        
        res.render('theShire', {
            post,
            loggedIn: req.session.loggedIn,
            isTheShire,
        });
    }catch(err){
    res.status(500).json(err);
    }
    });

router.get('/login', areAuth, (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/dashboard', withAuth, async (req, res) => {
    const postData = await Post.findAll({
        where:{
            user_id: req.session.user_id
        },
    });
    
    const post = (postData).map((post)=> post.dataValues);
    res.render('dashboard', {
        post,
        loggedIn: req.session.loggedIn,
    });
});

router.get('/comments/:id', withAuth, async (req,res)=>{
    const commentData = await Comment.findAll({
        where:{
            post_id: req.params.id
        }
    });

    const postData = await Post.findByPk(req.params.id);
    
    const comment = (commentData).map((comment)=> comment.dataValues);
    const post = postData.dataValues;
    console.log(post);
    res.render('comments', {
        comment,
        post,
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;