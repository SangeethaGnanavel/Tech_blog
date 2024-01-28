const User = require("./User");
const Blogpost = require("./BlogPost");
const Comments = require("./Comments");

User.hasMany(Blogpost, {
  foreignKey: "createdby",
  onDelete: "CASCADE",
});

Blogpost.belongsTo(User, {
  foreignKey: "createdby",
});

Blogpost.hasMany(Comments, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});
Comments.belongsTo(Blogpost, {
  foreignKey: "blog_id",
});

User.hasMany(Comments, {
  foreignKey: "createdby",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "createdby",
});

module.exports = { User, Blogpost, Comments };
