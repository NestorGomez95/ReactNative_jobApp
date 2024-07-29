// controllers/applicationController.js
const JobApplication = require('./models/JobApplication'); // Importa el modelo

exports.applyForJob = async (req, res) => {
  try {
    const { jobTitle, name, email, address, phoneNumber, availableHours } = req.body;
    const newApplication = new JobApplication({
      jobTitle,
      name,
      email,
      address,
      phoneNumber,
      availableHours,
    });
    await newApplication.save();
    res.status(200).send({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to submit application.', error });
  }
};
