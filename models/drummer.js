var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DrummerSchema = new Schema({
  name: String || "new drummer",
  rank: Number,
  image: String || "/images/baby.jpg",
  life: String,
  url: String,
  isAlive: Boolean
  });

var Drummer = mongoose.model('Drummer', DrummerSchema);

module.exports = Drummer;
