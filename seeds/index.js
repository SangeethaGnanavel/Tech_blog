const sequelize = require("../config/connection");
const { User, Blogpost, Comments } = require("../models");

const userData = require("./userData.json");
const blogpostData = require("./blogpostData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogpostData) {
    await Blogpost.create({
      ...blog,
      createdby: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comments.create({
      ...comment,
      createdby: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
