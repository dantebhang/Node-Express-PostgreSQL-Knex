const env = process.env.NODE_ENV || "development";
//determines current environment and stores value in env variable
//if not defined value is set to "development"
const config = require("../../knexfile")[env];
//config set to development object (or set environment) from knexfile.js
const knex = require("knex")(config);
//initializes knex instance by calling knex module passing config as argument
module.exports = knex;
