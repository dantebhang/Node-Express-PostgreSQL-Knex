const knex = require("../db/connection");


//get /products API endpoint
function list() {
	return knex("products").select("*");
}

//get /products/:productId
function read(product_id){
    return knex("products").select().where({ product_id }).first();
}//selects all cols where id matches first() returns first row in table


module.exports = {
	list,
    read,
};

