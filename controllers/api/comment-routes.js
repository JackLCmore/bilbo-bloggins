const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const CommentData = await Comment.create({
        text: req.body.text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
      });

        res.status(200).json(CommentData);
    } catch (err) {
        console.log(err)
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req,res) => {
    try {
      const CommentData = await Comment.destroy({
        where:{
          id: req.params.id
        }
      });
    
        res.status(200).json(CommentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//   router.post('/:id', async (req, res) =>{
//     try{
//     const CommentData = await Comment.update({
//         text: req.body.text,
//         post_id: req.body.post_id,
//         user_id: req.session.user_id
//     },{
//       where:{
//         id: req.params.id
//       }
//     });
//     res.status(200).json(CommentData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   });

module.exports = router;