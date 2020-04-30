const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  description: String,
  isMandatory: Boolean,
  responseType: String,
  response:[String],
});

mongoose.model('question', questionSchema);