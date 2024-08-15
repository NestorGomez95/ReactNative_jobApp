const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  position: { type: String, required: true },
  location: { type: String, required: true },
  hours: { type: String, required: true },
  salary: { type: String, required: true },
  jobType: { type: String, required: true },
  jobDescription: { type: String, required: true },
  keyResponsibilities: { type: String, required: true },
  requirements: { type: String, required: true },
  benefits: { type: String, required: true }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
