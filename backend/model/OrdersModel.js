const {model} = require("mongoose");

const {  OrdersSchema } = require('../schemas/OrdersSchema.js');

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};