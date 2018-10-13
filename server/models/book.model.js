const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  pages: {
    type: Number,
    required: true,
    min: [1, "Your book needs to have at least 1 page"]
  },
  year: Number,
  publisher: {
    type: String,
    required: true,
    trim: true
  },
},
{
  timestamps: true
});
module.exports = mongoose.model('Book', bookSchema);
