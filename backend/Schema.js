const mongoose = require("mongoose");

const DashBoardSchema = new mongoose.Schema({
  end_year: {
    type: Number,
    require: true,
  },
  intensity: {
    type: Number,
    require: true,
  },
  sector: {
    type: String,
    require: true,
  },
  topic: {
    type: [String],
    require: true,
  },
  insight: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  region: {
    type: Number,
    require: true,
  },
  start_year: {
    type: Number,
    require: true,
  },
  impact: {
    type: String,
    require: true,
  },
  added: {
    type: String,
    require: true,
  },
  published: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  relevence: {
    type: Number,
    require: true,
  },
  pestle: {
    type: String,
    require: true,
  },
  source: {
    type: String,
  },
  title: {
    type: String,
    require: true,
  },
  likelihood: {
    type: Number,
    require: true,
  },
});

const DashBoard = mongoose.model("black", DashBoardSchema);

module.exports = DashBoard;
