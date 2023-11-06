const { Post } = require('../models');

const postdata = [
    {
        title:"The Number 1 is Better Than The Number 2: Here's Why",
        text:'Lets look at this logically, can you make the number 2 without the number 1? NO! Boom, undeniable truth.',
        user_id:3,
    },
    {
        title:"Why Can't We All Just Get Along?",
        text:'The world is such a beautiful place, why do we say such mean things to others? We should all learn to better ourselves and accept each other, only then can we live in harmony. Peace and love to everyone.',
        user_id:1,
    },
    {
        title:'The Number 3 Is A Nasty Cheat And Liar!',
        text:'The number 3 is such a decieving number. You hear all about triangles structural integrity on the media all the time now, but no one ever brings up how you CAN NOT make a triangle without lines, which by the way, ARE MADE OF 2 POINTS!!!!!1!',
        user_id:2,
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;