const path = require("path");
require("dotenv").config(); //load env variables in .env
const {DATABASE_URL} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
      //tell knex to store migration files in migrations folder
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};


