// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  salary: String,
  description: String,
  tags: [String]
});

module.exports = mongoose.model('Job', jobSchema);
