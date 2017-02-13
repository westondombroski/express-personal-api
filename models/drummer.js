var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DrummerSchema = new Schema({
  name: String,
  rank: Number,
  image: String,
  life: String,
  url: String,
  isAlive: Boolean
  });

var Drummer = mongoose.model('Drummer', DrummerSchema);

module.exports = Drummer;
