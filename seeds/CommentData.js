const { Comment } = require('../models');

const commentdata = [
    {
        text:'I disagree with this!',
        post_id:1,
        user_id:2
    },
    {
        text:'Your opinion is valid.',
        post_id:1,
        user_id:1
    },
    {
        text:"I don't believe in your hippy ideals!",
        post_id:2,
        user_id:3
    },
    {
        text:"They'll never allow us the be free like this, power to the anarchy!",
        post_id:2,
        user_id:2
    },
    {
        text:'Wow, are you mad from my post earlier bro? LOL',
        post_id:3,
        user_id:3
    },
    {
        text:"Hey man, this is pretty uncool but I forgive you, and I'm sure 3 will forgive you if you took down this post.",
        post_id:3,
        user_id:1
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;