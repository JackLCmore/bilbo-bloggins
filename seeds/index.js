const sequelize = require('../config/connection');
const seedPost = require('./PostData');
const seedComment = require('./CommentData');
const seedUser = require('./UserData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();