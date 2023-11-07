const router = require('express').Router();
const { Comment, Post } = require('../models');

const { withAuth, areAuth } = require('../utils/auth');

router.get('/', async (req,res) => {
    try{
        const postData = await Post.findAll();
    
        const post = (postData).map((post)=> post.dataValues);
    console.log(post);
        res.render('theShire', {
            post,
            loggedIn: req.session.loggedIn,
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

module.exports = router;