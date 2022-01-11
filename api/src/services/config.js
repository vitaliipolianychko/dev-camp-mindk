require("dotenv").config();

module.exports = {
  appPort: process.env.APP_PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
  dbDatabase: process.env.DB_DATABASE,
};
