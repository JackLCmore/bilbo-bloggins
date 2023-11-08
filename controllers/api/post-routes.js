const router = require('express').Router();
const { Post } = require('../../models');

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

router.delete('/:id', async (req,res) => {
  try {
    const PostData = await Post.destroy({
      where:{
        id: req.params.id
      }
    });
  
      res.status(200).json(PostData);
  } catch (err) {
    res.status(400).json(err);
  }
})

// router.post('/:id', async (req, res) =>{
//   try{
//   const postData = await Post.update({
//     title: req.body.title,
//         text: req.body.text,
//         user_id: req.session.user_id,
//   },{
//     where:{
//       id: req.params.id
//     }
//   });
//   res.status(200).json(postData);
// } catch (err) {
//   res.status(400).json(err);
// }
// });

module.exports = router;