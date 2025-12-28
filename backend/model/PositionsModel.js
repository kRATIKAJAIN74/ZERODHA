const {model, Model} = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema.js");   

const PositionsModel = new model("position",PositionsSchema);

module.exports={PositionsModel};