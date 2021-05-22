const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const dbConnection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
});

const testConnect = async () => {
  try {
    await dbConnection.authenticate();
    console.log("Connection has been established succesfully.");
  } catch (error) {
    console.log("Unable to connect to the database: " + error);
  }
};

//testConnect();

dbConnection
  .sync()
  .then(() => console.log("All models were synchronized successfully."));

module.exports = dbConnection;
