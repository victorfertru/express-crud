const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const User = dbConnection.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
