const { User } = require('../models');

const userdata = [
    {
        username:'userOne1',
        password:'password'
    },
    {
        username:'userTwo2',
        password:'PaSsWoRd2'
    },
    {
        username:'userThree3',
        password:'PASSWORD3'
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;