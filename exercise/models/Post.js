const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Post = dbConnection.define("Post", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "uveic",
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
