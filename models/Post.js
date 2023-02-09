const mongoose = require("mongoose");

 
const postSchema =  mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id:  String,
  brand: String,
  shares: Number,
  comments: Number,
  likes: Number,
  image: String,
  text: String,
  emoji: Boolean,
  emotion: Boolean,
  holiday: Boolean,
  humor: Boolean,
  activism: Boolean,
  friends: Boolean,
  is_question: Boolean,
  ask_likes: Boolean,
  ask_comments: Boolean,
  ask_shares: Boolean,
  has_links: Boolean,
  has_offer: Boolean,
  compares_prices: Boolean,
  has_price: Boolean,
  has_address: Boolean,
  has_stock: Boolean,
  mentions_products: Boolean,
  user: String
});
 
module.exports = mongoose.model("Post", postSchema, "Posts");