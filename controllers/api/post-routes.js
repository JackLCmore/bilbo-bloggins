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

router.get('/:id', async (req, res) =>{
  try{
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "text",
            "user_id"
          ],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render('commentPage', { post, loggedIn: req.session.loggedIn });
  }catch(err){
    res.status(200).json(err);
  }
});

module.exports = router;