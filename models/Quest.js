const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  locations: [
    {
      name: { type: String },
      coordinates: { lat: Number, lng: Number },
    },
  ],
  rewardPoints: { type: Number, default: 100 },
});

module.exports = mongoose.model('Quest', QuestSchema);
