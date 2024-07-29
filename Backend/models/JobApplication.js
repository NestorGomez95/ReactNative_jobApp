const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  jobTitle: String,
  name: String,
  email: String,
  address: String,
  phoneNumber: String,
  availableHours: Number,
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
