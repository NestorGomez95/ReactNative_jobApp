const Job = require('../models/Job');

// Agregar un nuevo empleo
exports.addJob = async (req, res) => {
  const { title, description, company } = req.body;
  try {
    const newJob = new Job({ title, description, company });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error adding job', error });
  }
};

// Eliminar un empleo
exports.deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job', error });
  }
};
