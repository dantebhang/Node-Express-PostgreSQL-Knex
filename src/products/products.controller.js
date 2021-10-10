const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function read(req, res, next) {
	const { product: data } = res.locals;
	res.json({ data });
}

async function list(req, res, next) {
	const data = await productsService.list();
	res.json({ data });
}

//middleware that checks if product exists based on ID
async function productExists(req, res, next) {
	const product = await productsService.read(req.params.productId);
	if (product) {
		res.locals.product = product;
		return next();
	}
	next({ status: 404, message: `Product cannot be found.` });
}

module.exports = {
	read: [asyncErrorBoundary(productExists), read],
	list: asyncErrorBoundary(list),
};
