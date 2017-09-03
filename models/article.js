var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  title: String,
  date: Date,
  url: String
});

var Article = mongoose.model("Article", quoteSchema);

module.exports = Article;