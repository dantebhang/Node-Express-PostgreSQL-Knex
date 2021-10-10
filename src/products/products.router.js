const router = require("express").Router({ mergeParams: true });
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:productId([0-9]+)").get(controller.read).all(methodNotAllowed);
//validate route param with regex

module.exports = router;
