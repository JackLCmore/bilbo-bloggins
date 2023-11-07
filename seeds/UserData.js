const { User } = require('../models');

const userdata = [
    {
        username:'userOne1',
        email:'user1@gmail.com',
        password:'password'
    },
    {
        username:'userTwo2',
        email:'user2@gmail.com',
        password:'PaSsWoRd2'
    },
    {
        username:'userThree3',
        email:'user3@gmail.com',
        password:'PASSWORD3'
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;