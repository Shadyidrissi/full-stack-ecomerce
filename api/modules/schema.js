const mongoose =require("mongoose")

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  type: String,
  paragraph: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  newPrice: Number,
  oldPrice: Number,
  numberPices: Number,
  images: {type: [String], default: []},

});

const Item = mongoose.model('Item', postSchema);
module.exports = Item; 