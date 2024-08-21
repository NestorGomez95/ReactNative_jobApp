const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  availableHours: { type: Number, required: true },
  
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema, 'aplications');
