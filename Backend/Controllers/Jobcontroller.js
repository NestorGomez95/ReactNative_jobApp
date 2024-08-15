const Job = require('../models/Job');

// Agregar un nuevo empleo
exports.AddJob = async (req, res) => {
  const {
    position,
    location,
    hours,
    salary,
    jobType,
    jobDescription,
    keyResponsibilities,
    requirements,
    benefits,
  } = req.body;

  try {
    // Convertir arrays en strings
    const newJob = new Job({
      position,
      location,
      hours,
      salary,
      jobType,
      jobDescription,
      keyResponsibilities: Array.isArray(keyResponsibilities) ? keyResponsibilities.join(', ') : keyResponsibilities,
      requirements: Array.isArray(requirements) ? requirements.join(', ') : requirements,
      benefits: Array.isArray(benefits) ? benefits.join(', ') : benefits,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error adding job:', error);
    res.status(500).json({ message: 'Error adding job', error: error.message });
  }
};

// Eliminar un empleo
exports.deletejob = async (req, res) => {
  const { id } = req.params;
  try {
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: 'Job deleted' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Error deleting job', error: error.message });
  }
};

// Obtener todos los empleos
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs', error: error.message });
  }
};
