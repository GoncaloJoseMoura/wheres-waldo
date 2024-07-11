const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: Number, required: true , min: [0, 'Needs to be a positive number.']},
  timetext: { type: String, required: true },
  date: { type: Date, default: Date.now },
  board: { type: String, required: true, enum: ["marvel", "multiversus", "rickandmorty"] },
});

// Export model
module.exports = mongoose.model("Player", PlayerSchema);
