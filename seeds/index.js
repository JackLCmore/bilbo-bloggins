const sequelize = require('../config/connection');
const seedPost = require('./CommentData');
const seedComment = require('./PostData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();