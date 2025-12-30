require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const { PositionsModel } = require("./model/PositionsModel");
const { HoldingModel } = require("./model/HoldingModel");
const { OrdersModel } = require("./model/OrdersModel");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());

// app.get("/addPositions",async(req,res)=>{
//   let tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

//   tempPositions.forEach((item)=>{
//     let newPosition = new PositionsModel({
//       product:item.product,
//       name:item.name,
//       qty:item.qty,
//       avg:item.avg,
//       price:item.price,
//       net:item.net,
//       day:item.day,
//       isLoss:item.isLoss
//     });
//     newPosition.save();
//   })
//   res.send("Done");
// })

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});
app.listen(PORT, () => {
  console.log("App started");
  mongoose.connect(uri);
  console.log("DB connected");
});
