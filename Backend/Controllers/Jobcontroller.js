// controllers/jobController.js
const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

exports.createJob = async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).send(job);
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
