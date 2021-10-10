const knex = require("../db/connection");

function list(){
    return knex("categories").select();
}

module.exports = {
    list,
};

//get categories API endpoint