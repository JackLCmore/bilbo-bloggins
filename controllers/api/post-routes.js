const router = require('express').Router();
const { Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const PostData = await Post.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.session.user_id,
      });
    
        res.status(200).json(PostData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;