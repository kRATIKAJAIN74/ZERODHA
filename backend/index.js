require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/AuthRoute");
const userRoutes = require("./routes/user");

const { PositionsModel } = require("./model/PositionsModel");
const { HoldingModel } = require("./model/HoldingModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

/* =========================
   🔥 CORS FIRST (NO wildcard)
   ========================= */
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

/* =========================
   🔥 CORE MIDDLEWARE
   ========================= */
app.use(express.json());
app.use(cookieParser());

/* =========================
   🔥 ROUTES
   ========================= */
app.use("/auth", authRoute);
app.use("/", userRoutes);

/* =========================
   🔥 DASHBOARD DATA
   ========================= */
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.json({ success: true });
});

/* =========================
   🔥 START SERVER
   ========================= */
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  mongoose.connect(uri);
  console.log("DB connected");
});
